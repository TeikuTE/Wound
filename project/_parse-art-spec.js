#!/usr/bin/env node
/**
 * Parse wound_master_spec into a structured manifest of glyph + footnote
 * placements. Output: art-manifest.json — consumed by _generate.js.
 *
 * The spec has a regular shape:
 *   ## ChapterName
 *   **Chapter sigil:** **GLYPH** (~28mm) ...
 *   ### Anchor: <description>
 *   > *<passage text>*
 *   **Inline glyph:** **GLYPH** (~6mm) beside *<location hint>*
 *   **Footnote N** — Margin, beside this passage:
 *   > *<note text>*
 *
 * We extract anchor passages (the text in the blockquote), then every
 * Glyph + Footnote that follows until the next Anchor heading.
 */
const fs = require('node:fs');
const path = require('node:path');

const SPEC = path.join(__dirname, '..', 'wound_master_spec (1).md');
const OUT  = path.join(__dirname, 'art-manifest.json');

const src = fs.readFileSync(SPEC, 'utf8');
const lines = src.split(/\r?\n/);

// State
let currentSection = null;     // current chapter/appendix
let currentAnchor = null;      // current anchor passage object
const sections = {};
const chapterSigils = {};
const masterSigils = [];

function actForFootnote(n) {
  if (n <= 12) return 1;
  if (n <= 24) return 2;
  if (n <= 36) return 3;
  if (n <= 48) return 4;
  return 5;
}

function ensureSection(name) {
  if (!sections[name]) sections[name] = { name, anchors: [], chapterSigil: null, sectionSigil: null };
  return sections[name];
}

let i = 0;
while (i < lines.length) {
  const line = lines[i];

  // Section break — ## headings
  const sec = line.match(/^## (.+?)\s*$/);
  if (sec) {
    currentSection = sec[1].trim();
    ensureSection(currentSection);
    currentAnchor = null;
    i++; continue;
  }

  // Anchor heading — ### Anchor: <desc>
  const anch = line.match(/^### Anchor:\s*(.+?)\s*$/);
  if (anch) {
    currentAnchor = {
      desc: anch[1].trim(),
      passage: null,
      glyphs: [],
      footnotes: [],
    };
    if (currentSection) {
      ensureSection(currentSection).anchors.push(currentAnchor);
    }
    i++; continue;
  }

  // Anchor passage — > *...*  (usually right after the anchor heading)
  const quote = line.match(/^>\s*\*?(.*?)\*?\s*$/);
  if (quote && currentAnchor && !currentAnchor.passage) {
    // strip surrounding emphasis markers
    let text = quote[1].replace(/^\*+|\*+$/g, '').trim();
    // Continue collecting if next lines are also `> `
    let j = i + 1;
    while (j < lines.length && /^>\s/.test(lines[j])) {
      const m = lines[j].match(/^>\s*\*?(.*?)\*?\s*$/);
      if (m && m[1]) text += ' ' + m[1].replace(/^\*+|\*+$/g, '').trim();
      j++;
    }
    currentAnchor.passage = text;
    i = j; continue;
  }

  // Chapter sigil — **Chapter sigil:** **GLYPH** (...) or **Section sigil:**
  const sigil = line.match(/^\*\*(Chapter|Section)\s+sigil:\*\*\s*\*\*([A-Z][A-Z\- ]*?)\*\*\s*(.*)$/);
  if (sigil && currentSection) {
    const which = sigil[1].toLowerCase();
    const glyph = sigil[2].trim().toLowerCase().replace(/\s+/g, '_');
    const props = sigil[3];
    const sizeMatch = props.match(/~?(\d+)mm/);
    const stageMatch = props.match(/Stage\s+(\d+)/i);
    const obj = {
      glyph,
      size: sizeMatch ? parseInt(sizeMatch[1], 10) : (which === 'chapter' ? 28 : 14),
      stage: stageMatch ? parseInt(stageMatch[1], 10) : 0,
    };
    if (which === 'chapter') ensureSection(currentSection).chapterSigil = obj;
    else ensureSection(currentSection).sectionSigil = obj;
    i++; continue;
  }

  // Inline glyph — **Inline glyph:** **GLYPH** (~6mm) ...
  // Or **Glyph (something):** **GLYPH** (...)
  // Or **Glyph:** **GLYPH** (...)
  // Or **Late-insertion glyph (Act V):** **GLYPH** ...
  const inlineG = line.match(/^\*\*(Inline glyph|Glyph[^:]*|Late-insertion glyph[^:]*):\*\*\s*\*\*([A-Z][A-Z\- ]*?)\*\*\s*(.*)$/);
  if (inlineG && currentAnchor) {
    const kind = inlineG[1];
    const glyph = inlineG[2].trim().toLowerCase().replace(/\s+/g, '_');
    const props = inlineG[3];
    const sizeMatch = props.match(/~?(\d+)mm/);
    const stageMatch = props.match(/Stage\s+(\d+)/i);
    const late = /Late-insertion/i.test(kind);
    const obj = {
      glyph,
      size: sizeMatch ? parseInt(sizeMatch[1], 10) : 6,
      stage: stageMatch ? parseInt(stageMatch[1], 10) : 0,
      late,
    };
    currentAnchor.glyphs.push(obj);
    i++; continue;
  }

  // Footnote — **Footnote N** — Margin, beside ...:
  // or **Late-insertion Footnote N** — Margin ...
  const fn = line.match(/^\*\*(?:Late-insertion\s+)?Footnote\s+(\d+)\*\*\s*[—-]\s*(.+?):/);
  if (fn) {
    const n = parseInt(fn[1], 10);
    const isLate = /^\*\*Late-insertion/.test(line);
    // Body follows as `> *...*` (possibly multiline)
    let text = '';
    let j = i + 1;
    while (j < lines.length && /^>\s/.test(lines[j])) {
      const m = lines[j].match(/^>\s*\*?(.*?)\*?\s*$/);
      if (m) {
        const t = m[1].replace(/^\*+|\*+$/g, '').trim();
        text += (text ? ' ' : '') + t;
      }
      j++;
    }
    const obj = {
      n,
      text,
      act: actForFootnote(n),
      late: isLate,
    };
    if (currentAnchor) {
      currentAnchor.footnotes.push(obj);
    } else if (currentSection) {
      // Anchorless footnotes — attach to section
      ensureSection(currentSection).footnotes = ensureSection(currentSection).footnotes || [];
      ensureSection(currentSection).footnotes.push(obj);
    }
    i = j; continue;
  }

  i++;
}

// Flatten into a single passage→placement table for easy lookup by generator.
const placements = [];
for (const [name, sec] of Object.entries(sections)) {
  for (const a of sec.anchors) {
    if (!a.passage) continue;
    placements.push({
      section: name,
      desc: a.desc,
      passage: a.passage,
      passage_short: a.passage.split(/\s+/).slice(0, 8).join(' '),
      glyphs: a.glyphs,
      footnotes: a.footnotes,
    });
  }
}

// Write manifest
const manifest = {
  meta: {
    spec: 'wound_master_spec',
    placements: placements.length,
    chapterSigils: Object.fromEntries(
      Object.entries(sections).filter(([, s]) => s.chapterSigil).map(([k, s]) => [k, s.chapterSigil])
    ),
    sectionSigils: Object.fromEntries(
      Object.entries(sections).filter(([, s]) => s.sectionSigil).map(([k, s]) => [k, s.sectionSigil])
    ),
  },
  placements,
};
fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2));
console.log(`wrote ${OUT}`);
console.log(`  sections: ${Object.keys(sections).length}`);
console.log(`  placements (anchor passages): ${placements.length}`);
const allGlyphs = placements.flatMap(p => p.glyphs);
console.log(`  inline glyphs: ${allGlyphs.length}  (late-insertion: ${allGlyphs.filter(g => g.late).length})`);
const allFn = placements.flatMap(p => p.footnotes);
console.log(`  footnotes: ${allFn.length}  (late-insertion: ${allFn.filter(f => f.late).length})`);
console.log(`  chapter sigils: ${Object.keys(manifest.meta.chapterSigils).length}`);
console.log(`  section sigils: ${Object.keys(manifest.meta.sectionSigils).length}`);
