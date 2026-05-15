#!/usr/bin/env node
/**
 * WOUND — Markdown → Chapter JSX generator.
 *
 * Reads WOUND_V12.md (the clean source manuscript) and writes one JSX file
 * per chapter into chapters/. Each chapter file exports a function that
 * returns the chapter's spreads using primitives from book-components.jsx.
 *
 * The goal is gorgeous, readable, premium-feeling layout. Strategy:
 *   - parse MD into a typed block stream (h1, h2, h3, h4, para, list, table,
 *     chen-intrusion, alan-intrusion, blockquote, oracle-row).
 *   - flow blocks into pages with content-aware heuristics that prefer page
 *     breaks at section boundaries.
 *   - emit intrusions as floating margin notes when short, or inline blocks
 *     when long.
 *   - emit consecutive `**N-NN**` rows as a real ruled table (Chen) or
 *     terminal table (Alan).
 *   - first paragraph of a chapter body gets a drop cap (Chen only).
 */

const fs = require('node:fs');
const path = require('node:path');

// ── Art-layer manifest (round 3: glyphs + Finder footnotes) ──────────
// Optional; absent in non-art builds. Parsed from wound_master_spec.md.
let ART = { meta: { chapterSigils: {}, sectionSigils: {} }, placements: [] };
try {
  ART = JSON.parse(fs.readFileSync(path.join(__dirname, 'art-manifest.json'), 'utf8'));
  console.error(`[art] manifest loaded: ${ART.placements.length} placements, ${Object.keys(ART.meta.chapterSigils).length} chapter sigils`);
} catch (e) {
  console.error('[art] no manifest — art layer disabled');
}

// Map manifest section names ("Chapter I — …") to generator section IDs ("chen-1").
const SECTION_MAP = {
  'Foreword — "A Note Before You Begin"': 'front',
  'How to Use This Book':                 'front',
  'Title Page':                           'front',
  'Chapter I — Time Is an Ocean':                 'chen-1',
  'Chapter II — Excavating Your Echo':            'chen-2',
  'Chapter III — Opening the Session':            'chen-3',
  'Chapter IV — The Resolution Roll':             'chen-4',
  'Chapter V — Architecture of Self':             'chen-5',
  'Chapter VI — Crisis Management':               'chen-6',
  'Chapter VII — Advanced Systems':               'chen-7',
  'Chapter VIII — Campaign Structures':           'chen-8',
  'Interlude — Playing Both':                     'interlude',
  'ENTRY_001 — After the Tutorial':               'alan-1',
  'ENTRY_002 — Calibration':                      'alan-2',
  'ENTRY_003 — Operational Procedures':           'alan-3',
  'ENTRY_004 — Faction Pressure':                 'alan-4',
  'ENTRY_005 — Fracture Events':                  'alan-5',
  'ENTRY_006 — Terminal Configurations':          'alan-6',
  'Alan on Zaaken':                               'alan-6',
  'Appendix A — The Harmonic Codex':              'appendix-a',
  'Appendix B — Asset Catalogs':                  'appendix-b',
  'Appendix C — Oracle Tables':                   'appendix-c',
  'Appendix D — The Factions':                    'appendix-d',
  'Appendix D.1 — Field Intelligence':            'appendix-d-1',
  'Appendix E — Captivity Vignettes':             'appendix-e',
  'Appendix F — Examples of Play':                'appendix-f',
  'Appendix G — Mutations':                       'appendix-g',
  'Appendix H — Saul Files':                      'appendix-h',
};

function artNorm(s) {
  return s.toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^\w\s']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
const ART_LOOKUP = ART.placements.map(p => ({
  ...p,
  // 5-word needle catches more anchors (was 7, lots of placements were
  // missing because the manuscript phrasing differed slightly past word 5).
  needle: artNorm(p.passage).split(' ').slice(0, 5).join(' '),
}));
function matchPlacementsForBlock(blockText, sectionId) {
  if (!ART_LOOKUP.length) return [];
  const hay = artNorm(blockText);
  const matches = [];
  for (const p of ART_LOOKUP) {
    if (!p.needle || p.needle.length < 8) continue;     // was 12 — looser bar
    const expected = SECTION_MAP[p.section];
    if (expected && expected !== sectionId) continue;
    if (hay.includes(p.needle)) matches.push(p);
  }
  return matches;
}

// Lookup chapter-sigil glyph for a section id (returns {glyph, size} or null).
function chapterSigilFor(sectionId) {
  for (const [name, sec] of Object.entries(ART.meta.chapterSigils)) {
    if (SECTION_MAP[name] === sectionId) return sec;
  }
  return null;
}

// ────────────────────────────────────────────────────────────────────────
// 1. Markdown parser → typed block stream
// ────────────────────────────────────────────────────────────────────────

const MD_PATH = path.join(__dirname, 'WOUND_V12.md');
const md = fs.readFileSync(MD_PATH, 'utf8');

/**
 * Block types:
 *   { kind: 'h1'|'h2'|'h3'|'h4', text }
 *   { kind: 'p', text }                              // paragraph
 *   { kind: 'ul', items: [text...] }
 *   { kind: 'ol', items: [text...] }
 *   { kind: 'blockquote', text }
 *   { kind: 'hr' }
 *   { kind: 'voice', who: 'CHEN'|'ALAN', body: text, sign: 'EC'|'AR' }
 *   { kind: 'oracle-row', range: '01-05', name: 'PALEOLITHIC', desc: '...' }
 *   { kind: 'pseudo-h3', text }  // a paragraph that is just `**ALL CAPS**`
 */

function parseMD(src) {
  const lines = src.replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  let i = 0;

  const isBlank = (s) => /^\s*$/.test(s);
  const heading = (s) => {
    const m = s.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (!m) return null;
    return { level: m[1].length, text: m[2] };
  };
  const oracle = (s) => {
    // Matches: **01-05** PALEOLITHIC (...) — Description text
    // Also:    **01** TIGHT-COUPLING — Description text   (sometimes single)
    const m = s.match(/^\*\*(\d{1,3}(?:-\d{1,3})?)\*\*\s+(.+)$/);
    if (!m) return null;
    let rest = m[2];
    // Split on em-dash or em-dash-with-spaces or " - "
    const dash = rest.match(/^(.+?)\s+[—–\-]\s+(.+)$/);
    if (dash) return { range: m[1], name: dash[1], desc: dash[2] };
    return { range: m[1], name: '', desc: rest };
  };

  while (i < lines.length) {
    const line = lines[i];

    if (isBlank(line)) { i++; continue; }

    // hr
    if (/^---\s*$/.test(line)) { blocks.push({ kind: 'hr' }); i++; continue; }

    // heading
    const h = heading(line);
    if (h) {
      blocks.push({ kind: `h${h.level}`, text: h.text });
      i++; continue;
    }

    // voice marker: **[CHEN]** / **[ALAN]** / **[Z]** on a line by itself.
    // Body continues until any of:
    //   - a signature line `— EC` / `— AR` / `— Z`  (on its own)
    //   - inline trailing signature ` — AR` / ` — EC` at the end of the last paragraph
    //   - a fresh voice marker, heading, or `---`
    const voice = line.match(/^\*\*\[(CHEN|ALAN|Z)\]\*\*\s*$/);
    if (voice) {
      const who = voice[1];
      const sigSymbol = who === 'CHEN' ? 'EC' : who === 'ALAN' ? 'AR' : 'Z';
      i++;
      while (i < lines.length && isBlank(lines[i])) i++;
      const buf = [];
      let sign = null;
      let stopped = false;
      while (i < lines.length && !stopped) {
        const L = lines[i];
        // Signature line on its own.
        const sigLine = L.match(/^—\s*(EC|AR|Z)\s*$/);
        if (sigLine) { sign = sigLine[1]; i++; break; }
        if (isBlank(L)) {
          let j = i + 1;
          while (j < lines.length && isBlank(lines[j])) j++;
          if (j >= lines.length) { i = j; break; }
          const nxt = lines[j];
          // Hard terminators that mean the voice block is over.
          if (/^\*\*\[(CHEN|ALAN|Z)\]\*\*/.test(nxt) || /^#+\s/.test(nxt) || /^---\s*$/.test(nxt)
              // An oracle-row pattern after blank line — voice ends here, oracle starts.
              || /^\*\*\d{1,3}(?:-\d{1,3})?\*\*\s+\S/.test(nxt)
              // A `**Bold Section Header**` line on its own — voice ends, header starts.
              || /^\*\*[A-Z][^*]+\*\*\s*$/.test(nxt)
          ) {
            i = j; break;
          }
          buf.push('');
          i = j;
          continue;
        }
        // Inline trailing signature, e.g.  "...Most people have neither. — AR"
        const inlineSig = L.match(/^(.*?)\s+—\s*(EC|AR|Z)\s*$/);
        if (inlineSig) {
          buf.push(inlineSig[1].trim());
          sign = inlineSig[2];
          i++;
          stopped = true;
          break;
        }
        buf.push(L);
        i++;
      }
      const text = buf.join('\n').trim();
      blocks.push({ kind: 'voice', who, body: text, sign: sign || sigSymbol });
      continue;
    }

    // markdown table: `| ... | ... |` lines, with a separator row of `|---|---|`
    if (/^\|.*\|\s*$/.test(line)
        && i + 1 < lines.length
        && /^\|[\s\-:|]+\|\s*$/.test(lines[i + 1])) {
      const head = line.split('|').slice(1, -1).map(s => s.trim());
      i += 2; // skip the separator row
      const rows = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) {
        rows.push(lines[i].split('|').slice(1, -1).map(s => s.trim()));
        i++;
      }
      blocks.push({ kind: 'table', head, rows });
      continue;
    }

    // bullet list
    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, '').trim());
        i++;
      }
      blocks.push({ kind: 'ul', items });
      continue;
    }

    // numbered list. Markdown source often separates items with blank lines
    // AND uses `1.` for every item (an MD shorthand). We coalesce consecutive
    // `\d+\.` lines (with optional blank lines between) into one ordered list,
    // then renumber from 1.
    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      let j = i;
      while (j < lines.length) {
        if (/^\d+\.\s+/.test(lines[j])) {
          // Capture this item plus any continuation lines (indented or part of same para)
          const buf = [lines[j].replace(/^\d+\.\s+/, '').trim()];
          let k = j + 1;
          while (k < lines.length && lines[k] && !isBlank(lines[k])
                 && !/^\d+\.\s+/.test(lines[k]) && !/^[-*]\s+/.test(lines[k])
                 && !heading(lines[k]) && !/^\*\*\[(CHEN|ALAN|Z)\]\*\*/.test(lines[k])) {
            buf.push(lines[k].trim());
            k++;
          }
          items.push(buf.join(' '));
          j = k;
          // Skip optional blank lines between items, but only if followed by another `n.`
          let m = j;
          while (m < lines.length && isBlank(lines[m])) m++;
          if (m < lines.length && /^\d+\.\s+/.test(lines[m])) { j = m; continue; }
          break;
        }
        break;
      }
      i = j;
      blocks.push({ kind: 'ol', items });
      continue;
    }

    // blockquote
    if (/^>\s+/.test(line)) {
      const lines2 = [];
      while (i < lines.length && /^>\s+/.test(lines[i])) {
        lines2.push(lines[i].replace(/^>\s+/, '').trim());
        i++;
      }
      blocks.push({ kind: 'blockquote', text: lines2.join(' ') });
      continue;
    }

    // oracle table row?
    const ora = oracle(line);
    if (ora) {
      blocks.push({ kind: 'oracle-row', ...ora });
      i++;
      continue;
    }

    // paragraph: collect consecutive non-blank, non-marker lines.
    const buf = [line];
    i++;
    while (i < lines.length) {
      const L = lines[i];
      if (isBlank(L)) break;
      if (heading(L) || /^\*\*\[(CHEN|ALAN|Z)\]\*\*/.test(L) || /^---\s*$/.test(L)
          || /^[-*]\s+/.test(L) || /^\d+\.\s+/.test(L) || /^>\s+/.test(L)
          || oracle(L)) break;
      buf.push(L);
      i++;
    }
    const text = buf.join(' ').trim();

    // Detect "pseudo h3": a one-line paragraph that is entirely bolded
    // AND looks like a heading, not a flattened-table sentence fragment.
    // Heuristics:
    //   - short (≤ 70 chars)
    //   - no terminal sentence punctuation
    //   - no internal period (avoids `**Mutual contempt. Church sees Au**`)
    //   - no obvious sentence connector ("and", "but", "with", etc) — these
    //     indicate flowing prose, not a header
    const pseudoH3 = text.match(/^\*\*(.+?)\*\*\s*$/);
    if (pseudoH3) {
      const t = pseudoH3[1];
      const looksLikeHeading =
        t.length <= 70
        && !/[.?!][\s)\]]*$/.test(t)         // no terminal . ? !
        && !/[a-z]\.\s/.test(t)              // no period inside (e.g. "Au. Authority")
        && !/,\s/.test(t)                    // no internal comma
        ;
      if (looksLikeHeading) {
        blocks.push({ kind: 'pseudo-h3', text: t });
        continue;
      }
    }
    blocks.push({ kind: 'p', text });
  }
  return blocks;
}

const ALL_BLOCKS = parseMD(md);

// ────────────────────────────────────────────────────────────────────────
// 2. Section the blocks by chapter / appendix
// ────────────────────────────────────────────────────────────────────────

/**
 * Section identifiers in order:
 *   front, chen-1..chen-8, interlude, alan-1..alan-6, appendix-a..h, etc.
 */
function sectionize(blocks) {
  const sections = [];
  let curr = null;

  const push = (s) => { sections.push(s); curr = s; };
  push({ id: 'front', title: 'Front Matter', host: 'interlude', blocks: [] });

  for (const b of blocks) {
    // Top-level # — book divider; flush into curr unless it's the first one
    if (b.kind === 'h1') {
      if (/BOOK ONE/i.test(b.text)) continue;          // visually rendered elsewhere
      if (/BOOK TWO/i.test(b.text)) continue;
      // first h1 is the book title, treat as ignorable for splitting
      continue;
    }
    if (b.kind === 'h2') {
      const t = b.text;
      if (/^CHAPTER\s+(\d+)/i.test(t)) {
        const m = t.match(/^CHAPTER\s+(\d+):\s*(.+)$/i);
        const num = parseInt(m[1], 10);
        const title = m[2];
        // Decide which book by tracking position: chen until we hit the interlude.
        const inAlanZone = sections.some(s => s.id === 'interlude');
        push({
          id: (inAlanZone ? 'alan-' : 'chen-') + num,
          host: inAlanZone ? 'alan' : 'chen',
          chNum: num,
          title,
          blocks: [b],
        });
        continue;
      }
      if (/^INTERLUDE/i.test(t)) {
        const m = t.match(/^INTERLUDE:\s*(.+)$/i);
        push({ id: 'interlude', host: 'interlude', title: m ? m[1] : 'PLAYING BOTH', blocks: [b] });
        continue;
      }
      if (/^APPENDIX\s+([A-H](\.\d)?):/i.test(t)) {
        const m = t.match(/^APPENDIX\s+([A-H](\.\d)?):\s*(.+)$/i);
        const id = 'appendix-' + m[1].toLowerCase().replace('.', '-');
        push({ id, host: 'chen', title: m[3], appendix: m[1] }) ;
        curr.blocks = [b];
        continue;
      }
      if (/^A NOTE BEFORE YOU BEGIN/i.test(t) || /^HOW TO USE THIS BOOK/i.test(t)
          || /^YOUR FIRST/i.test(t) || /^WHEN CRISIS/i.test(t) || /^ENDGAME/i.test(t)
          || /^DOCUMENT STRUCTURE/i.test(t)) {
        // front-matter h2's
        curr.blocks.push(b);
        continue;
      }
      if (/^QUICK REFERENCE/i.test(t) || /^CHARACTER SHEET/i.test(t)
          || /^BOOK\s/i.test(t) || /^TEMPORAL ECHOES/i.test(t) || /^emiT/i.test(t)) {
        push({ id: 'backmatter-' + t.toLowerCase().replace(/[^a-z0-9]+/g, '-'), host: 'chen', title: t, blocks: [b] });
        continue;
      }
      curr.blocks.push(b);
      continue;
    }
    curr.blocks.push(b);
  }
  return sections;
}

const SECTIONS = sectionize(ALL_BLOCKS);

// Useful diagnostics:
if (process.argv.includes('--list')) {
  for (const s of SECTIONS) {
    console.log(s.id.padEnd(18), s.host.padEnd(10), '(' + s.blocks.length + ' blocks)', s.title || '');
  }
  process.exit(0);
}

// ────────────────────────────────────────────────────────────────────────
// 3. Pagination: flow blocks across pages by estimated height
// ────────────────────────────────────────────────────────────────────────

// Page content area is roughly 528px wide × 720px tall after margins
const PAGE_W_PX = 528 - (22 + 18) * 3.78;   // outside + spine margins → px
const PAGE_H_PX = 816 - (13 + 16) * 3.78;   // top + bottom margins → px

function estimateHeight(block, host) {
  const W = host === 'chen' ? PAGE_W_PX : PAGE_W_PX;
  switch (block.kind) {
    case 'h1':   return 60;
    case 'h2':   return host === 'chen' ? 38 : 32;
    case 'h3':   {
      // Multi-line headings need more vertical space
      const cpl = 36;
      const len = stripMD(block.text).length;
      const lines = Math.max(1, Math.ceil(len / cpl));
      return lines * 18 + 8;
    }
    case 'h4':
    case 'pseudo-h3': {
      // Multi-line subsection headers (some are 60+ chars)
      const cpl = 38;
      const len = stripMD(block.text).length;
      const lines = Math.max(1, Math.ceil(len / cpl));
      return lines * 16 + 6;
    }
    case 'hr':   return 18;
    case 'p': {
      // Rough: ~60 chars per line in Chen, ~70 in Alan
      const cpl = host === 'chen' ? 64 : 60;
      const text = stripMD(block.text);
      const lines = Math.max(1, Math.ceil(text.length / cpl));
      const lh   = host === 'chen' ? 18 : 18;
      return lines * lh + 8;
    }
    case 'ul':
    case 'ol': {
      const cpl = host === 'chen' ? 60 : 56;
      const lh  = host === 'chen' ? 18 : 18;
      return block.items.reduce((acc, t) => acc + Math.ceil(stripMD(t).length / cpl) * lh + 2, 4) + 6;
    }
    case 'blockquote': {
      const cpl = 56;
      const text = stripMD(block.text);
      const lines = Math.max(1, Math.ceil(text.length / cpl));
      return lines * 16 + 14;  // padding
    }
    case 'resolution': {
      // ~3 lines per row average
      let h = 14;
      for (const r of block.rows) {
        const cpl = 50;
        const lines = Math.max(1, Math.ceil(stripMD(r.text).length / cpl));
        h += lines * 16 + (r.title ? 14 : 0) + 6;
      }
      return h;
    }
    case 'memo': {
      const cpl = 56;
      let h = 60;  // title + source + chrome
      for (const inner of block.body) {
        h += estimateHeight(inner, host);
      }
      return Math.min(h, 720);
    }
    case 'voice': {
      // The actual rendering shape depends on length — see emitVoice.
      const text = stripMD(block.body);
      // Short → margin/anchor; medium → inline; long → spans top of page.
      if (text.length < 100) return 4;   // floats, takes negligible flow
      if (text.length < 350) return Math.ceil(text.length / 64) * 16 + 14;
      return Math.ceil(text.length / 64) * 16 + 22;
    }
    case 'oracle-row': {
      // Short rows (single word, no description) render in compact 2-col
      // mode at HALF the per-row height (because two columns side-by-side).
      const desc = stripMD(block.desc || '');
      const name = stripMD(block.name || '');
      const combined = (name + ' ' + desc).trim();
      if (combined.length <= 22 && combined.split(/\s+/).filter(Boolean).length <= 3) {
        return 4.5;  // compact 2-col halves the effective vertical cost
      }
      const cpl = host === 'chen' ? 48 : 46;
      const lines = Math.max(1, Math.ceil(desc.length / cpl));
      return lines * 15 + 6;
    }
    case 'table': {
      // Header row + body rows, each ~one line of body
      const rowH = 16;
      const cpl = Math.floor(64 / Math.max(2, block.head.length));
      let h = 20; // header
      for (const r of block.rows) {
        const longest = Math.max(...r.map(c => stripMD(c).length));
        const ln = Math.max(1, Math.ceil(longest / cpl));
        h += ln * rowH;
      }
      return h + 8;
    }
    default: return 16;
  }
}

function stripMD(t) {
  return t
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1');
}

// Coalesce a MEMO into a self-contained found-document block.
// Pattern in MD:
//   ### MEMO: Title
//   *Source: ...*
//   "Body quote..."
//   "Body quote..."
//   *Mechanical hook: ...*
//   (optional `---`)
function detectMemos(blocks) {
  const out = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.kind === 'h3' && /^MEMO:\s*/i.test(b.text)) {
      const title = b.text.replace(/^MEMO:\s*/i, '');
      let j = i + 1;
      // Source line: an italic paragraph beginning with `Source:`
      let source = null;
      if (blocks[j] && blocks[j].kind === 'p' && /^\*[^*]*Source:\s/i.test(blocks[j].text)) {
        source = blocks[j].text.replace(/^\*|\*$/g, '').trim();
        j++;
      }
      const body = [];
      while (j < blocks.length) {
        const nb = blocks[j];
        if (nb.kind === 'hr') { j++; break; }
        if (nb.kind === 'h3' && /^MEMO:/i.test(nb.text)) break;
        if (nb.kind === 'h2' || nb.kind === 'h1') break;
        if (nb.kind === 'p' && /^\*Mechanical hook:/i.test(nb.text)) {
          body.push({ kind: 'hook', text: nb.text.replace(/^\*|\*$/g, '').trim() });
          j++;
          continue;
        }
        body.push(nb);
        j++;
      }
      out.push({ kind: 'memo', title, source, body });
      i = j;
      continue;
    }
    out.push(b);
    i++;
  }
  return out;
}

// Coalesce groups of consecutive resolution-roll-style paragraphs into a single
// structured block. The MD pattern is:
//   "**10+** Complete Success. Achieve goal cleanly..."
//   "**7-9** Success with Complication..."
//   "**6-** Failure with Discovery..."
function detectResolutionBlocks(blocks) {
  // A paragraph starts with **range** if its first inline token is bold + matches
  // \d+\+? or \d+\-\d+ or \d+\- (e.g. 12+, 10-11, 7-9, 6-)
  const isRoll = (block) => {
    if (block.kind !== 'p') return null;
    const m = block.text.match(/^\*\*(\d+(?:\-\d+)?\+?|\d+\-)\*\*\s*(.+)$/);
    if (!m) return null;
    const range = m[1];
    const rest = m[2];
    // Try to split out a title: "Title Phrase. body…"  OR  "TITLE OF ROLL. body…"
    const t = rest.match(/^([^.]{2,40})\.\s+(.+)$/);
    if (t) return { range, title: t[1].trim(), text: t[2].trim() };
    return { range, title: '', text: rest };
  };
  const out = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    const roll = isRoll(b);
    if (roll) {
      const rows = [roll];
      let j = i + 1;
      while (j < blocks.length) {
        const r = isRoll(blocks[j]);
        if (!r) break;
        rows.push(r);
        j++;
      }
      if (rows.length >= 2) {
        out.push({ kind: 'resolution', rows });
        i = j;
        continue;
      }
    }
    out.push(b);
    i++;
  }
  return out;
}

function paginate(sectionBlocks, host, opts = {}) {
  sectionBlocks = detectMemos(sectionBlocks);
  sectionBlocks = detectResolutionBlocks(sectionBlocks);

  // Art-layer annotation: tag each block with any placements that match.
  // We do this here (after memo/resolution coalescing) so the annotation
  // stays with the actual rendered block.
  if (opts.sectionId) {
    for (const b of sectionBlocks) {
      const text = b.kind === 'p' ? b.text
                : b.kind === 'voice' ? b.body
                : b.kind === 'h2' || b.kind === 'h3' || b.kind === 'h4' || b.kind === 'pseudo-h3' ? b.text
                : null;
      if (!text) continue;
      const matches = matchPlacementsForBlock(text, opts.sectionId);
      if (matches.length) {
        b._art = matches;
      }
    }
  }

  let budget = opts.budget || 690;       // px of content per page
  const pages = [];
  let curr = [];
  let used = 0;

  function flush() {
    if (curr.length) { pages.push(curr); curr = []; used = 0; }
  }

  let i = 0;
  while (i < sectionBlocks.length) {
    const b = sectionBlocks[i];

    // Tables of consecutive oracle-rows render as one cohesive block.
    if (b.kind === 'oracle-row') {
      const rows = [];
      while (i < sectionBlocks.length && sectionBlocks[i].kind === 'oracle-row') {
        rows.push(sectionBlocks[i]);
        i++;
      }
      // Render as one or more table blocks across pages; try to keep header + first rows together.
      let remaining = rows.slice();
      while (remaining.length) {
        // Estimate the row heights
        let take = 0, h = 0;
        for (const r of remaining) {
          const rh = estimateHeight(r, host);
          if (used + h + rh > budget && take > 0) break;
          h += rh; take++;
        }
        if (take === 0) {           // can't fit a single row; flush page then retry
          flush();
          continue;
        }
        curr.push({ kind: 'oracle-table', rows: remaining.slice(0, take), continued: take < remaining.length });
        used += h;
        remaining = remaining.slice(take);
        if (remaining.length) flush();
      }
      continue;
    }

    let h = estimateHeight(b, host);
    // Reserve budget for the block's own footnotes (each footnote ~20px,
    // plus the rule + padding overhead).
    if (b._art) {
      const fnCount = b._art.reduce((a, p) => a + (p.footnotes || []).length, 0);
      if (fnCount > 0) {
        // Footnotes wrap to ~2 lines on average in sans-serif 7.5pt body.
        // ~44px per footnote + 28px overhead (rule + padding) keeps body
        // from getting clipped behind the flex footnote area.
        h += fnCount * 44 + 28;
      }
    }
    // h2 / h3 — strongly prefer a page break BEFORE them if we're past half a page already
    if ((b.kind === 'h2') && used > budget * 0.5) flush();
    if ((b.kind === 'h3' || b.kind === 'pseudo-h3') && used > budget * 0.75) flush();

    if (used + h > budget) flush();

    curr.push(b);
    used += h;
    i++;
  }
  flush();

  // Rebalance: if the last page has way less content than the average, try to
  // shrink the budget so pages fill more evenly. Aim for at-most ~25% gap.
  if (pages.length >= 2) {
    const totals = pages.map(p => p.reduce((a, b) => a + estimateHeight(b, host), 0));
    const avg = totals.reduce((a, n) => a + n, 0) / totals.length;
    const last = totals[totals.length - 1];
    if (last < avg * 0.55 && budget > 540) {
      // Retry with tighter budget so pages re-flow into n-1 with similar fullness
      return paginate(sectionBlocks, host, { ...opts, budget: Math.floor(budget * 0.93) });
    }
  }
  return pages;
}

// ────────────────────────────────────────────────────────────────────────
// 4. Render blocks → JSX strings
// ────────────────────────────────────────────────────────────────────────

function jsxText(t) {
  // Backtick-template-safe string
  return '`' + t.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
}

// Convert inline markdown (**bold**, *italic*) → JSX nodes.
// First, strip inline voice-attribution markers — `**[CHEN]**`, `**[ALAN]**`,
// `**[Z]**` — that the manuscript uses mid-paragraph. They're signals, never
// visible text.
function renderInline(text) {
  text = text.replace(/\*\*\[(CHEN|ALAN|Z)\]\*\*\s*/g, '');
  // We hand off plain text to `inline()` (which highlights mech-terms/dice),
  // wrapping bold/italic via React nodes. For simplicity emit JSX expression children.
  // Tokenize:
  const tokens = [];
  let buf = '';
  let i = 0;
  while (i < text.length) {
    // bold **...** (non-greedy)
    if (text[i] === '*' && text[i+1] === '*') {
      const end = text.indexOf('**', i + 2);
      if (end > 0) {
        if (buf) { tokens.push({ t: 'plain', v: buf }); buf = ''; }
        tokens.push({ t: 'b', v: text.slice(i + 2, end) });
        i = end + 2;
        continue;
      }
    }
    // italic *...*
    if (text[i] === '*') {
      const end = text.indexOf('*', i + 1);
      if (end > 0 && !/^\s/.test(text[i+1])) {
        if (buf) { tokens.push({ t: 'plain', v: buf }); buf = ''; }
        tokens.push({ t: 'i', v: text.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
    }
    buf += text[i];
    i++;
  }
  if (buf) tokens.push({ t: 'plain', v: buf });

  if (tokens.length === 1 && tokens[0].t === 'plain') {
    return `{inline(${jsxText(tokens[0].v)})}`;
  }
  // Wrap with React fragments + inline() per token
  const parts = tokens.map(tok => {
    if (tok.t === 'plain') return `{inline(${jsxText(tok.v)})}`;
    if (tok.t === 'b')     return `<b>{inline(${jsxText(tok.v)})}</b>`;
    if (tok.t === 'i')     return `<i>{inline(${jsxText(tok.v)})}</i>`;
  });
  return parts.join('');
}

// Map a glyph manifest name to <Glyph> props for emission.
// Handles atomic vs concept naming + faction dialects.
function glyphProps(g) {
  // Names like 'memory_at_stage_1_—_fading' need cleanup.
  const cleanName = String(g.glyph || '').replace(/_at_stage.*$/i, '').replace(/_.*$/, '').toLowerCase();
  // size string mapping
  let size = 'inline';
  if (g.size >= 24) size = 'sigil';
  else if (g.size >= 12) size = 'section';
  else if (g.size <= 5) size = 'ghost';
  const props = {
    name: cleanName,
    size,
    stage: g.stage || 0,
  };
  if (g.late) props.late = true;
  // Detect dialect
  if (/authority|church|scionfall|chronoclast/.test(g.glyph || '')) {
    const m = (g.glyph || '').match(/(authority|church|scionfall|chronoclast)/i);
    if (m) props.faction = m[1].toLowerCase();
  }
  return props;
}

function renderArtForBlock(b) {
  if (!b._art) return { fnMarkers: '', inlineGlyphs: '' };
  const markers = [];
  const glyphs = [];
  for (const p of b._art) {
    for (const fn of (p.footnotes || [])) {
      markers.push(`<FootnoteMarker n={${fn.n}} act={${fn.act}} />`);
    }
    for (const g of (p.glyphs || [])) {
      const props = glyphProps(g);
      const attrs = Object.entries(props).map(([k, v]) =>
        typeof v === 'string' ? `${k}="${v}"` : v === true ? k : `${k}={${JSON.stringify(v)}}`
      ).join(' ');
      glyphs.push(`<Glyph ${attrs} />`);
    }
  }
  return {
    fnMarkers: markers.join(''),
    inlineGlyphs: glyphs.length ? `<span className="gly-inline-row">${glyphs.join('')}</span>` : '',
  };
}

function renderBlocks(blocks, host, opts = {}) {
  const out = [];
  let firstParaSeen = !opts.dropCap;  // toggle for first paragraph drop-cap

  // Headings: emit text as JSX expression so we can pass it through `inline()`
  // for mech-term highlighting AND escape any quote/backtick characters.
  const headingJSX = (text) => `{inline(${jsxText(text)})}`;

  for (const b of blocks) {
    switch (b.kind) {
      case 'h2': {
        const cls = host === 'chen' ? 'el-h2'
                  : host === 'alan' ? 'al-h2'
                  : 'il-h2';
        out.push(`<h2 className="${cls}">${headingJSX(b.text.replace(/^CHAPTER\s+\d+:\s*/i, ''))}</h2>`);
        break;
      }
      case 'h3': {
        const cls = host === 'chen' ? 'el-section'
                  : host === 'alan' ? 'al-section'
                  : 'interlude-eyebrow';
        out.push(`<h3 className="${cls}">${headingJSX(b.text)}</h3>`);
        break;
      }
      case 'h4':
      case 'pseudo-h3': {
        const cls = host === 'chen' ? 'el-subsection'
                  : host === 'alan' ? 'al-subsection'
                  : 'interlude-eyebrow';
        // Strip inner **bold** markdown that leaks through from headings
        // like "Era Table (**d100**)" — the bold inside is markdown noise.
        const cleaned = b.text.replace(/\*\*/g, '');
        out.push(`<h4 className="${cls}">${headingJSX(cleaned)}</h4>`);
        break;
      }
      case 'hr': {
        out.push(host === 'chen'
          ? `<hr className="el-section-rule" />`
          : `<div className="al-rule" aria-hidden />`);
        break;
      }
      case 'p': {
        // Art-layer additions for this block (if any)
        const artAfter = renderArtForBlock(b);
        if (host === 'chen') {
          if (!firstParaSeen) {
            out.push(`<div className="el-body el-dropcap" data-firstpara><p>${renderInline(b.text)}${artAfter.fnMarkers}</p>${artAfter.inlineGlyphs}</div>`);
            firstParaSeen = true;
          } else {
            out.push(`<div className="el-body"><p>${renderInline(b.text)}${artAfter.fnMarkers}</p>${artAfter.inlineGlyphs}</div>`);
          }
        } else if (host === 'alan') {
          out.push(`<AlanBody><p>${renderInline(b.text)}${artAfter.fnMarkers}</p>${artAfter.inlineGlyphs}</AlanBody>`);
        } else {
          // interlude
          out.push(`<div className="interlude-body"><p>${renderInline(b.text)}${artAfter.fnMarkers}</p>${artAfter.inlineGlyphs}</div>`);
        }
        break;
      }
      case 'ul': {
        const items = b.items.map(t => `<li>${renderInline(t)}</li>`).join('');
        if (host === 'chen') out.push(`<ul className="el-list">${items}</ul>`);
        else if (host === 'alan') out.push(`<AlanBody><ul className="al-list">${items}</ul></AlanBody>`);
        else out.push(`<ul className="interlude-list">${items}</ul>`);
        break;
      }
      case 'ol': {
        const items = b.items.map(t => `<li>${renderInline(t)}</li>`).join('');
        if (host === 'chen') out.push(`<ol className="el-numlist">${items}</ol>`);
        else if (host === 'alan') out.push(`<AlanBody><ol className="al-numlist">${items}</ol></AlanBody>`);
        else out.push(`<ol className="interlude-numlist">${items}</ol>`);
        break;
      }
      case 'blockquote': {
        if (host === 'interlude') {
          out.push(`<div className="interlude-pull">${renderInline(b.text)}</div>`);
        } else {
          out.push(`<Zaaken>${renderInline(b.text)}</Zaaken>`);
        }
        break;
      }
      case 'voice': {
        // Split into paragraphs and strip per-paragraph italic wrappers.
        const paras = b.body
          .split(/\n{2,}/)
          .map(p => p.trim().replace(/^\*+/, '').replace(/\*+$/, '').trim())
          .filter(Boolean);
        const bodyHTML = paras.map(p => `<p>${renderInline(p)}</p>`).join('');
        const stripped = stripMD(paras.join(' '));
        const short = stripped.length < 220 && paras.length === 1;

        if (host === 'chen' && b.who === 'CHEN') {
          if (short) {
            out.push(`<ChenMarginaliaInline>${bodyHTML}</ChenMarginaliaInline>`);
          } else {
            // Decide variant: "theory-hook" if it opens with a recognised
            // academic concept; "field-note" if it opens with a year/date
            // or location; otherwise plain.
            const firstPara = paras[0] || '';
            const isTheory = /^\s*(Hofstadter|G[öo]del|Pascal|Reed[\s\-]Solomon|Landauer|Boltzmann|Shannon|Wittgenstein|Heisenberg|Schr[öo]dinger|Penrose|Turing|von Neumann|Bohm|Bell|Feynman|Bayes|Riemann|Chaitin|Conway|Mandelbrot|Lorenz|Cantor|Kant|Plato|Aristotle|Aquinas|Spinoza|Hume|Leibniz|Maxwell|The (?:Landauer|Holographic|Many-Worlds|Conservation|Uncertainty|Incompleteness))/i.test(stripMD(firstPara));
            const isFieldNote = /^\s*(?:[A-Z][a-z]+,\s+\d{4}|In\s+\d{4}|\d{4}\.|My\s+(?:lab|notes|journal)|I('ve|'ll|'d|\s+(?:remember|recall|watched|observed|witnessed|stood|sat|tracked))|We\s+(?:were|stood|watched))/i.test(stripMD(firstPara));
            const variant = isTheory ? ' el-reflection--theory'
              : isFieldNote ? ' el-reflection--fieldnote'
              : '';
            out.push(`<aside className="el-reflection${variant}">${bodyHTML}<div className="el-sign">— EC</div></aside>`);
          }
        } else if (host === 'chen' && b.who === 'ALAN') {
          if (short) {
            out.push(`<AlanIntrusionInline tier={tier}>${bodyHTML}</AlanIntrusionInline>`);
          } else {
            out.push(`<aside className="el-alan-block" data-tier={tier}>${bodyHTML}<div className="el-alan-sign">—AR</div></aside>`);
          }
        } else if (host === 'alan' && b.who === 'CHEN') {
          out.push(`<aside className="al-chen-block" data-tier={tier}><div className="al-chen-block__head">Dr. Eleanor Chen // [DATE UNKNOWN]</div>${bodyHTML}</aside>`);
        } else if (host === 'alan' && b.who === 'ALAN') {
          out.push(`<aside className="al-fragment">${bodyHTML}<div className="al-fragment__sign">// AR</div></aside>`);
        } else if (b.who === 'Z') {
          out.push(`<Zaaken>${bodyHTML}</Zaaken>`);
        }
        break;
      }
      case 'table': {
        const klass = host === 'chen' ? 'tbl-chen' : 'tbl-alan';
        const headJSX = b.head.map(h => `<th>${renderInline(h)}</th>`).join('');
        const rowsJSX = b.rows.map(r => `<tr>${r.map(c => `<td>${renderInline(c)}</td>`).join('')}</tr>`).join('');
        out.push(`<table className="${klass}"><thead><tr>${headJSX}</tr></thead><tbody>${rowsJSX}</tbody></table>`);
        break;
      }
      case 'oracle-table': {
        const klass = host === 'chen' ? 'tbl-chen tbl-chen--oracle' : 'tbl-alan tbl-alan--oracle';
        // Compact two-column layout when every row is a single short
        // phrase (e.g. Action Oracle, Theme Oracle). The parser puts the
        // single word in `desc` when there's no em-dash separator, so we
        // check the *combined* content length.
        const allCompact = b.rows.every(r => {
          const desc = (r.desc || '').trim();
          const name = (r.name || '').trim();
          const combined = (name + ' ' + desc).trim();
          return combined.length <= 22 && combined.split(/\s+/).filter(Boolean).length <= 3;
        });
        if (allCompact && b.rows.length >= 8) {
          // Render as two columns side-by-side, splitting rows in half.
          const mid = Math.ceil(b.rows.length / 2);
          const left = b.rows.slice(0, mid);
          const right = b.rows.slice(mid);
          const renderHalf = (rows) => rows.map(r => {
            // Prefer name; if empty, fall back to desc (since the parser
            // puts single-word rows in desc when there's no em-dash).
            const label = ((r.name || '').trim() || (r.desc || '').trim() || '').replace(/\*\*/g, '');
            return `<tr><td className="num">${escapeJSX(r.range)}</td><td className="oracle-name">${escapeJSX(label)}</td></tr>`;
          }).join('');
          out.push(`<div className="oracle-compact-row"><table className="${klass} tbl--compact"><colgroup><col className="col-num"/><col className="col-name"/></colgroup><tbody>${renderHalf(left)}</tbody></table><table className="${klass} tbl--compact"><colgroup><col className="col-num"/><col className="col-name"/></colgroup><tbody>${renderHalf(right)}</tbody></table></div>`);
          break;
        }
        const rows = b.rows.map(r => {
          const cleanName = (r.name || '').replace(/\*\*/g, '');
          const cells = [
            `<td className="num">${escapeJSX(r.range)}</td>`,
            `<td className="oracle-name">${escapeJSX(cleanName)}</td>`,
            `<td className="oracle-desc">${renderInline(r.desc)}</td>`,
          ].join('');
          return `<tr>${cells}</tr>`;
        }).join('');
        out.push(`<table className="${klass}"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody>${rows}</tbody></table>`);
        break;
      }
      case 'resolution': {
        const rowsJSX = b.rows.map(r => {
          const title = r.title
            ? `<div className="resolution-title">${renderInline(r.title)}</div>`
            : '';
          return `<div className="resolution-row"><div className="resolution-roll">${escapeJSX(r.range)}</div><div className="resolution-body">${title}<div className="resolution-text">${renderInline(r.text)}</div></div></div>`;
        }).join('');
        const cls = host === 'chen' ? 'el-resolution' : 'al-resolution';
        out.push(`<div className="${cls}">${rowsJSX}</div>`);
        break;
      }
      case 'memo': {
        // Classify by source string for a slight per-faction tint.
        const src = (b.source || '').toLowerCase();
        const variant = /chronoclast|broken watchmaker|toxo/i.test(src) ? 'chronoclast'
          : /scionfall|sacculina|vitrification|cryonic|nullwave/i.test(src) ? 'scionfall'
          : /loop authority|sector 7|dermestid|coherence/i.test(src) ? 'authority'
          : 'church';
        const inner = renderBlocks(b.body, host, { dropCap: false }).join('');
        out.push(`<aside className="el-memo el-memo--${variant}"><div className="el-memo__chrome"><div className="el-memo__class">CLASSIFIED · FIELD INTELLIGENCE</div><div className="el-memo__title">MEMO &mdash; ${jsxRawText(b.title)}</div>${b.source ? `<div className="el-memo__source">${renderInline(b.source)}</div>` : ''}</div><div className="el-memo__body">${inner}</div></aside>`);
        break;
      }
      default:
        // ignore
        break;
    }
  }
  return out;
}

// Emit a string as a JSX expression that renders the literal text.
// Wraps in {`...`} so newlines / quotes / curly braces are all safe.
function escapeJSX(t) {
  return `{${jsxText(t)}}`;
}

// JSX-safe raw text (no enclosing braces — for use inside attribute/text where
// we want to interpolate but keep it short).
function jsxRawText(t) {
  // Replace { and } and `&` for safety in JSX text node
  return t.replace(/[{}]/g, '');
}

// ────────────────────────────────────────────────────────────────────────
// 5. Per-section spreads
// ────────────────────────────────────────────────────────────────────────

// Each "page" in a paginated section becomes one <Page>. Two pages = one <Spread>.
// Chapter openers: blank verso + recto opener.

function emitSpreads(section) {
  const fnName = sectionFnName(section);
  const host = section.host;
  const blocks = section.blocks.slice();

  // Drop the leading h2 (chapter heading) from the body; we render that in the opener.
  let openerTitle = section.title || (blocks[0] && blocks[0].kind === 'h2' ? blocks[0].text : '');
  if (blocks[0]?.kind === 'h2') blocks.shift();

  const isChapter = /^(chen|alan)-\d+$/.test(section.id);
  const isFront   = section.id === 'front';
  const isInter   = section.id === 'interlude';
  const isAppendix = section.id.startsWith('appendix-');
  const isBack    = section.id.startsWith('backmatter-');

  const pages = paginate(blocks, host, { budget: isAppendix ? 700 : 660, sectionId: section.id });

  const spreads = [];
  let spreadIdx = 0;

  // Chapter opener: a blank verso + a recto with chapter head + (no body).
  if (isChapter) {
    spreadIdx++;
    const num = section.chNum;
    const roman = ['', 'I','II','III','IV','V','VI','VII','VIII'][num] || String(num);
    if (host === 'chen') {
      const icon = chooseChenIcon(num);
      const titleStr = chenTitleCase(openerTitle);
      const titleAttr = titleStr.includes('"')
        ? `title={${JSON.stringify(titleStr)}}`
        : `title="${titleStr}"`;
      const labelStr = `${openerTitle.toUpperCase()} · opener`;
      const labelAttr = labelStr.includes('"')
        ? `label={${JSON.stringify(labelStr)}}`
        : `label="${labelStr.replace(/"/g, '&quot;')}"`;
      spreads.push({
        idTag: section.id + '-opener',
        label: labelStr,
        verso: `<ChPage side="verso" label="(blank)" />`,
        recto: `<ChPage side="recto" showWatermark ${labelAttr}>
  <ChenChapterHead icon="${icon}" number="${roman}" ${titleAttr} />
</ChPage>`,
      });
    } else {
      const coordEra = 14 + (num - 1) * 12;
      const subTag = openerTitle.replace(/^(chapter\s+\d+:?\s*)/i, '').toUpperCase().slice(0, 28);
      spreads.push({
        idTag: section.id + '-opener',
        label: `${openerTitle.toUpperCase()} · opener`,
        verso: `<AlPage side="verso" label="(blank)" />`,
        recto: `<AlPage side="recto" label="${section.id} · opener">
  <AlanChapterHead entry={${num}} sub=${JSON.stringify(subTag)} coord="[TEMPORAL LOG // ENTRY_${String(num).padStart(3,'0')} // ERA: ${coordEra} // NODE: ${subTag.split(/\s+/)[0]}]" />
  <AlanFragment top={170} right={4} rotate={-3} size={9}>// 2287.${String(num*48).padStart(3,'0')}.0001</AlanFragment>
</AlPage>`,
      });
    }
  } else if (isFront) {
    // Title spread: half-title on verso, full title on recto.
    spreads.push({
      idTag: section.id + '-cover',
      label: 'Front Matter · title',
      verso: `<IlPage side="verso" showTexture={false} label="half-title">
  <div className="il-halftitle">
    <div className="il-halftitle__mark">WOUND</div>
    <div className="il-halftitle__sub">Temporal Echoes / emiT</div>
  </div>
</IlPage>`,
      recto: `<IlPage side="recto" showTexture={false} label="title">
  <div className="il-titlepage">
    <div className="il-titlepage__sigil"><img src="assets/wound-sigil.svg" alt="" /></div>
    <div className="il-titlepage__sup">WOUND · TEMPORAL ECHOES · emiT</div>
    <h1 className="il-titlepage__title">A Solo Journaling RPG<br />Duology About Memory, Loss,<br />and What We Become</h1>
    <div className="il-titlepage__rule" />
    <div className="il-titlepage__sub">First Edition · 2026</div>
  </div>
</IlPage>`,
    });
  } else if (isInter) {
    spreads.push({
      idTag: section.id + '-opener',
      label: 'Interlude · opener',
      verso: `<IlPage side="verso" label="(blank)" />`,
      recto: `<IlPage side="recto" label="Interlude · opener">
  <div className="il-opener">
    <div className="interlude-eyebrow">Interlude</div>
    <h1 className="il-opener__title">${chenTitleCase(openerTitle)}</h1>
    <div className="il-opener__rule" />
    <div className="il-opener__attribution">a note from the finder</div>
  </div>
</IlPage>`,
    });
  } else if (isAppendix) {
    spreads.push({
      idTag: section.id + '-opener',
      label: `${section.appendix} · opener`,
      verso: `<ChPage side="verso" label="(blank)" />`,
      recto: `<ChPage side="recto" showWatermark label="${section.appendix} · opener">
  <div className="el-appendix-opener">
    <div className="el-appendix-eyebrow">Appendix ${section.appendix}</div>
    <h1 className="el-h1 el-appendix-opener__title">${chenTitleCase(openerTitle)}</h1>
    <img src="assets/chen-chapter-rule.svg" alt="" className="el-appendix-rule" />
  </div>
</ChPage>`,
    });
  }

  // Flow body pages
  for (let pi = 0; pi < pages.length; pi += 2) {
    const versoBlocks = pages[pi] || [];
    const rectoBlocks = pages[pi + 1] || [];
    const pageBaseV = `basePage + ${spreadIdx * 2 + 0}`;
    const pageBaseR = `basePage + ${spreadIdx * 2 + 1}`;

    // Collect footnotes per page (from any block whose _art carries them).
    // Late-insertion notes (57–60) are included alongside the regular ones —
    // they're styled differently via the .fnote--late class so a sharp
    // re-reader senses them.
    const collectFootnotes = (blocks) => {
      const notes = [];
      const seen = new Set();
      for (const b of blocks) {
        if (!b._art) continue;
        for (const p of b._art) {
          for (const fn of (p.footnotes || [])) {
            if (seen.has(fn.n)) continue;
            seen.add(fn.n);
            notes.push(fn);
          }
        }
      }
      return notes.sort((a, b) => a.n - b.n);
    };
    const versoNotes = collectFootnotes(versoBlocks);
    const rectoNotes = collectFootnotes(rectoBlocks);

    // First body page of a chapter gets a drop cap on its first paragraph.
    const dropOnFirst = isChapter && pi === 0;
    const versoJSX = renderBlocks(versoBlocks, host, { dropCap: dropOnFirst });
    const rectoJSX = renderBlocks(rectoBlocks, host, { dropCap: false });

    // Footnote JSX is passed as a separate prop so Page renders it as a
    // sibling of .page__content, anchored to the page itself.
    const fnProp = (notes) => notes.length
      ? `footnotes={<FinderFootnotes notes={${JSON.stringify(notes)}} />}`
      : '';
    const verso = renderPage('verso', host, openerTitle, section, versoJSX, pageBaseV, fnProp(versoNotes));
    const recto = renderPage('recto', host, openerTitle, section, rectoJSX, pageBaseR, fnProp(rectoNotes));

    spreads.push({
      idTag: `${section.id}-${String(spreadIdx + 1).padStart(2,'0')}`,
      label: `${openerTitle.toUpperCase()} · spread ${spreadIdx + 1}`,
      verso,
      recto,
    });
    spreadIdx++;
  }

  return { fnName, host, openerTitle, spreads, pageCount: spreadIdx * 2, sectionId: section.id };
}

function renderPage(side, host, openerTitle, section, body, basePageExpr, extraProp = '') {
  const num = openerTitle.toUpperCase().slice(0, 24);
  const sectionLabelJS = JSON.stringify(num);
  const compName = host === 'chen' ? 'ChPage' : host === 'alan' ? 'AlPage' : 'IlPage';
  const propsParts = [`side="${side}"`];

  if (host === 'chen') {
    propsParts.push(`runHead={${JSON.stringify(chenTitleCase(openerTitle))}}`);
    propsParts.push(`pageNum={${basePageExpr}}`);
  } else if (host === 'alan') {
    const ent = section.chNum || 0;
    propsParts.push(`runHead={${JSON.stringify(`ENTRY_${String(ent).padStart(3,'0')}`)}}`);
    propsParts.push(`pageNum={${basePageExpr}}`);
    propsParts.push(`coordStamp={${JSON.stringify(`[LOG // ENTRY_${String(ent).padStart(3,'0')}]`)}}`);
  } else {
    propsParts.push(`showTexture={false}`);
    propsParts.push(`pageNum={${basePageExpr}}`);
  }
  if (extraProp) propsParts.push(extraProp);

  return `<${compName} ${propsParts.join(' ')} label={\`${num} · p.\${${basePageExpr}}\`}>
  ${body.join('\n  ')}
</${compName}>`;
}

function chenTitleCase(t) {
  if (!t) return '';
  return t.toLowerCase().replace(/\b(\w)/g, c => c.toUpperCase());
}

function chooseChenIcon(num) {
  // Three icons we have: broken-compass, handless-clock, irregular-sine.
  const icons = [
    'assets/chen-icon-broken-compass.svg',   // navigation / loss
    'assets/chen-icon-handless-clock.svg',   // time / memory
    'assets/chen-icon-irregular-sine.svg',   // coherence / disturbance
  ];
  return icons[(num - 1) % icons.length];
}

function sectionFnName(s) {
  if (s.id === 'front') return 'FrontMatter';
  if (s.id === 'interlude') return 'PlayingBothInterlude';
  if (s.id.startsWith('chen-')) return 'ChenCh' + s.chNum;
  if (s.id.startsWith('alan-')) return 'AlanCh' + s.chNum;
  if (s.id.startsWith('appendix-')) {
    return 'Appendix' + s.appendix.replace('.', '');
  }
  if (s.id.startsWith('backmatter-')) {
    return 'BM_' + s.id.replace('backmatter-', '').replace(/-/g, '_');
  }
  return 'Section_' + s.id.replace(/-/g, '_');
}

// ────────────────────────────────────────────────────────────────────────
// 6. Final chapter JSX file
// ────────────────────────────────────────────────────────────────────────

function emitChapterFile(section) {
  const out = emitSpreads(section);
  const fnName = out.fnName;
  const host = out.host;

  const lines = [];
  lines.push(`// AUTO-GENERATED — ${section.id} — ${out.openerTitle.toUpperCase()}`);
  lines.push(`function ${fnName}({ tweaks, basePage = 1 }) {`);
  lines.push(`  const tier = tweaks.intrusionTier;`);
  lines.push(`  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };`);
  lines.push(`  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;`);
  lines.push(`  const AlPage = (props) => <Page book="alan" showTexture {...props} />;`);
  lines.push(`  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;`);
  lines.push(`  return (<>`);
  for (const s of out.spreads) {
    lines.push(`    <Spread id=${JSON.stringify(s.idTag)} label={${JSON.stringify(s.label)}}>`);
    lines.push(`      ${indent(s.verso, 6)}`);
    lines.push(`      ${indent(s.recto, 6)}`);
    lines.push(`    </Spread>`);
  }
  lines.push(`  </>);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`${fnName}.pages = ${out.pageCount};`);
  lines.push(`Object.assign(window, { ${fnName} });`);
  return { content: lines.join('\n') + '\n', fnName, host, pageCount: out.pageCount, sectionId: section.id };
}

function indent(s, n) {
  const pad = ' '.repeat(n);
  return s.split('\n').map((l, i) => i === 0 ? l : pad + l).join('\n');
}

// ────────────────────────────────────────────────────────────────────────
// 7. CLI
// ────────────────────────────────────────────────────────────────────────

if (require.main === module) {
  const args = process.argv.slice(2);
  const which = args[0] || '--all';
  const outDir = path.join(__dirname, 'chapters');

  if (which === '--list') {
    for (const s of SECTIONS) console.log(s.id, '-', s.title, '(', s.blocks.length, 'blocks )');
    process.exit(0);
  }

  const targets = which === '--all'
    ? SECTIONS
    : SECTIONS.filter(s => s.id === which);

  if (targets.length === 0) {
    console.error('No sections matched:', which);
    console.error('Available:', SECTIONS.map(s => s.id).join(', '));
    process.exit(1);
  }

  for (const s of targets) {
    const { content, fnName, host, pageCount, sectionId } = emitChapterFile(s);
    const fname = sectionFileFor(s);
    fs.writeFileSync(path.join(outDir, fname + '.jsx'), content);
    console.log(`wrote ${fname}.jsx (${fnName}, ${pageCount}p, ${host})`);
  }
}

function sectionFileFor(s) {
  if (s.id === 'front') return 'front';
  if (s.id === 'interlude') return 'interlude';
  if (s.id.startsWith('chen-')) return 'chen-ch' + s.chNum;
  if (s.id.startsWith('alan-')) return 'alan-ch' + s.chNum;
  if (s.id.startsWith('appendix-')) return 'appendix-' + s.appendix.toLowerCase().replace('.', '-');
  if (s.id.startsWith('backmatter-')) return s.id;
  return s.id;
}

module.exports = { SECTIONS, parseMD, sectionize, paginate, renderBlocks, emitSpreads, emitChapterFile };
