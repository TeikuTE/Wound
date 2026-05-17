#!/usr/bin/env node
/**
 * Text-integrity validator.
 *
 * 1. Parses WOUND_V12.md → list of expected text fragments
 * 2. Extracts text from each PDF page
 * 3. For each MD fragment, searches the rendered PDF
 * 4. Reports anything that's missing OR substantially shorter than source
 *
 * Exits non-zero if any block is missing, so this can be wired into the
 * build pipeline.
 */
const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const MD = path.join(__dirname, 'WOUND_V12.md');
const PDF = path.join(__dirname, 'WOUND_V12.pdf');

if (!fs.existsSync(PDF)) {
  console.error(`PDF not found: ${PDF}`);
  process.exit(2);
}

// ── 1. Extract MD fragments ─────────────────────────────────────────
const md = fs.readFileSync(MD, 'utf8');

function normalize(s) {
  return s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–]/g, '-')
    .replace(/\*+/g, '')
    .replace(/[^\w\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Aggressive normalizer that ALSO collapses small-caps letter-spacing.
// `pdftotext` renders small-caps headings as "A S S E T C ATA L O G S"
// (extra spaces between letters); we collapse those runs back into words.
function normalizeAggressive(s) {
  let n = normalize(s);
  // Step 1: find runs of "letter space letter space letter ..." and collapse
  // each run into a single word. Match 3+ single-letter "words" in a row.
  n = n.replace(/(?:\b[a-z]\s){2,}\b[a-z]\b/g, (m) => m.replace(/\s/g, ''));
  // Step 2: also collapse 2-letter cases like "i n" → "in"
  n = n.replace(/(?:\b[a-z]\s)\b[a-z]\b/g, (m) => m.replace(/\s/g, ''));
  // After collapsing, also collapse short adjacent fragments
  // e.g. "asset cata logs" → still 3 tokens, leave alone
  return n.replace(/\s+/g, ' ').trim();
}

const fragments = [];
const lines = md.split('\n');
let i = 0;
while (i < lines.length) {
  const L = lines[i].trim();
  if (!L) { i++; continue; }
  // Skip voice markers, headings (they have own handling), code, hr
  if (/^\*\*\[(CHEN|ALAN|Z)\]\*\*$/.test(L) || /^#+/.test(L) || /^---$/.test(L) || L.startsWith('```')) {
    i++; continue;
  }
  // Oracle row: take name + first words of description
  const ora = L.match(/^\*\*(\d{1,3}(?:-\d{1,3})?)\*\*\s+(.+)$/);
  if (ora) {
    fragments.push({ kind: 'oracle', range: ora[1], text: ora[2].slice(0, 80) });
    i++; continue;
  }
  // Bullet
  if (/^[-*]\s+/.test(L)) {
    fragments.push({ kind: 'bullet', text: L.replace(/^[-*]\s+/, '').slice(0, 100) });
    i++; continue;
  }
  // Numbered list
  if (/^\d+\.\s+/.test(L)) {
    fragments.push({ kind: 'num', text: L.replace(/^\d+\.\s+/, '').slice(0, 100) });
    i++; continue;
  }
  // Table row
  if (L.startsWith('|') && L.endsWith('|')) {
    // Skip separator
    if (/^\|[\s\-:|]+\|$/.test(L)) { i++; continue; }
    fragments.push({ kind: 'tablerow', text: L.replace(/\|/g, ' ').slice(0, 120) });
    i++; continue;
  }
  // Blockquote
  if (L.startsWith('>')) {
    fragments.push({ kind: 'quote', text: L.replace(/^>+\s*/, '').slice(0, 100) });
    i++; continue;
  }
  // Paragraph (potentially multi-line)
  fragments.push({ kind: 'p', text: L.slice(0, 100) });
  i++;
}

console.log(`Source MD has ${fragments.length} text fragments`);

// ── 2. Extract PDF text — both layouts ──────────────────────────────
// `-layout` preserves column structure (good for human reading) but
// interleaves columns. Default (no -layout) gives reading-order text
// which is better for table-content search.
let pdfText, pdfFlow;
try {
  pdfText = execSync(`pdftotext -layout -nopgbrk "${PDF}" -`, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
  pdfFlow = execSync(`pdftotext -nopgbrk "${PDF}" -`, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
} catch (e) {
  console.error('pdftotext failed:', e.message);
  process.exit(2);
}
// Multiple PDF representations:
//   pdfNorm   — layout-preserved, word-level search
//   pdfDense  — layout-preserved with ALL whitespace removed
//   pdfFlow   — reading-order, for content that pdftotext-layout
//               interleaves across columns (tables especially)
//   pdfWords  — set of all words from flow, for set-membership check
const pdfNorm = normalize(pdfText);
// Dense strips whitespace AND hyphens AND apostrophes — small-caps
// rendering loses those separators, and column-table extraction loses
// the em-dash between name and description columns.
const denseStrip = (s) => s.replace(/[\s'-]+/g, '');
const pdfDense = denseStrip(pdfNorm);
const flowNorm = normalize(pdfFlow);
const flowDense = denseStrip(flowNorm);
const pdfWords = new Set(flowNorm.split(' '));
console.log(`Rendered PDF text: ${pdfText.length} chars (layout)  ${pdfFlow.length} chars (flow)`);

// ── 3. For each MD fragment, check presence ─────────────────────────
const missing = [];
const partial = [];
const tooLong = [];

// Helpers
function wordSetMatch(words, requiredCount) {
  // Check if at least `requiredCount` of `words` are in pdfWords AND
  // they appear together-ish in the flow text (within ~150 chars window).
  if (words.filter(w => pdfWords.has(w)).length < requiredCount) return false;
  // Try to find them in close proximity in the flow text
  for (let start = 0; start < flowNorm.length - 200; start += 100) {
    const window = flowNorm.slice(start, start + 200);
    const hits = words.filter(w => window.includes(w)).length;
    if (hits >= requiredCount) return true;
  }
  return false;
}

for (const f of fragments) {
  const wanted = normalize(f.text);
  if (!wanted || wanted.length < 6) continue;
  const words = wanted.split(' ').filter(w => w.length > 2);
  if (words.length < 2) continue;

  const allWords = wanted.split(' ');
  const len = allWords.length;
  const try6  = allWords.slice(0, Math.min(6, len)).join(' ');
  const try6d = denseStrip(try6);

  // 1. Layout-preserved exact substring
  if (pdfNorm.includes(try6) || pdfDense.includes(try6d)) continue;
  // 2. Flow-order exact substring
  if (flowNorm.includes(try6) || flowDense.includes(try6d)) continue;
  // 3. Word-set match in proximity (catches column-fractured content)
  if (wordSetMatch(words.slice(0, Math.min(6, words.length)), 5)) continue;

  const try4 = allWords.slice(0, Math.min(4, len)).join(' ');
  const try4d = denseStrip(try4);
  if (pdfNorm.includes(try4) || flowNorm.includes(try4) || pdfDense.includes(try4d) || flowDense.includes(try4d)) {
    partial.push({ ...f, found: try4 });
    continue;
  }
  if (wordSetMatch(words.slice(0, Math.min(4, words.length)), 3)) {
    partial.push({ ...f, found: 'set' });
    continue;
  }

  missing.push(f);
}

console.log('');
console.log(`✗ MISSING: ${missing.length}`);
for (const m of missing.slice(0, 30)) {
  console.log(`  [${m.kind}] ${m.text.slice(0, 80)}`);
}
console.log('');
console.log(`~ PARTIAL: ${partial.length} (found by first 3-4 words, possibly truncated mid-sentence)`);
for (const p of partial.slice(0, 15)) {
  console.log(`  [${p.kind}] ${p.text.slice(0, 80)}   (matched: "${p.found}")`);
}

// ── 4. Exit ──────────────────────────────────────────────────────────
const failures = missing.length;
console.log('');
console.log(failures === 0 ? '✓ All fragments present.' : `✗ ${failures} fragments missing from PDF.`);
process.exit(failures > 0 ? 1 : 0);
