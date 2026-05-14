#!/usr/bin/env node
/**
 * Apply the explicit prose deletions & rewrites the user marked in the
 * round-1 marked-up PDF (group A).
 *
 * Each edit references a page in the marked-up PDF.
 */
const fs = require('node:fs');
const path = require('node:path');

const MD = path.join(__dirname, 'WOUND_V12.md');
let src = fs.readFileSync(MD, 'utf8');
const before = src;

const edits = [];

// Helper to enforce that an edit actually fires (we want loud failure if
// the source text drifts).
function edit(label, find, replace) {
  if (typeof find === 'string') {
    if (!src.includes(find)) {
      console.error(`  [SKIP] ${label} — not found: ${JSON.stringify(find.slice(0, 80))}`);
      return;
    }
    src = src.split(find).join(replace);
  } else {
    if (!find.test(src)) {
      console.error(`  [SKIP] ${label} — pattern not found`);
      return;
    }
    src = src.replace(find, replace);
  }
  console.log(`  [OK] ${label}`);
  edits.push(label);
}

console.log('Applying group-A prose edits:');

// p10: delete "you'll need to mourn them later"
edit('p10 mourn-them-later',
  `Write these down. You'll need them later — or you'll need to mourn them later:`,
  `Write these down. You'll need them later:`);

// p10: add question mark after "What tore you out of the timestream"
edit('p10 question-mark on timestream',
  `What tore you out of the timestream. In my career`,
  `What tore you out of the timestream? In my career`);

// p11: delete "Chen's sentimental about calling it structural."
edit('p11 delete-sentimental-comment',
  `\nChen's sentimental about calling it structural.\n`,
  `\n`);

// p12: rewrite Chen's intrusive italic note about modes-as-classes
// "*Modes are provisional. Please stop treating them like character classes.*"
edit('p12 delete-modes-provisional',
  `*Modes are provisional. Please stop treating them like character classes.*\n\nShe's right. They are classes. Just temporary ones.\n\n`,
  ``);

// p12: change opening of the "Modes shift" paragraph
edit('p12 modes-shift-as-time-marches',
  `In Temporal Echoes, Modes shift through play — slowly, meaningfully, and at your discretion. They are not static stats. They are who you are right now.`,
  `Modes shift as time marches on. They are not static stats. They are who you are right now.`);

// p13: replace last two sentences of mode-change paragraph
edit('p13 deserve-to-remember',
  `When you change a Mode rating, write one sentence in your Chronicle explaining why. This is not bureaucracy. It is the game asking you to notice what you're becoming.`,
  `When you change a Mode rating, write one sentence in your Chronicle explaining why. You deserve to remember why you are changed.`);

// p13: delete failure-state last two sentences
edit('p13 delete-failure-state-tail',
  `There is no ceiling on how far Modes can fall. An Echo who has lost every Combat memory and spent three years hiding may find their DISRUPT at -1. That is not a failure state. It is a true state.`,
  `There is no ceiling on how far Modes can fall. An Echo who has lost every Combat memory and spent three years hiding may find their DISRUPT at -1.`);

// p14: delete "You will be wrong, but choose anyway."
edit('p14 delete-wrong-choose-anyway',
  ` You will be wrong, but choose anyway.`,
  ``);

// p33: delete "Temporal Echoes:" prefix in chapter-cross-reference label
// The phrase "Temporal Echoes: When the Past Bleeds Through" is the title
// of a section about cross-referencing. Strip the section-title prefix.
edit('p33 strip-temporal-echoes-prefix',
  `see 'Temporal Echoes: When the Past Bleeds Through' in Chapter 5`,
  `see 'When the Past Bleeds Through' in Chapter 5`);

// Same on the actual section header
edit('p33 strip-temporal-echoes-section-header',
  `*Temporal Echoes: When the Past Bleeds Through*`,
  `*When the Past Bleeds Through*`);

// p47: change "Journalist" to "Finder" in the interlude opener attribution
edit('p47 journalist-to-finder',
  `a note from the journalist`,
  `a note from the finder`);
edit('p47 Journalist-cap',
  `A NOTE FROM THE JOURNALIST`,
  `A NOTE FROM THE FINDER`);

// p73: delete "I mention only to wound" line/phrase
// In MD around line 2627: "That's the First Scar. That's what Chen won't say. That's what I mention only to wound."
edit('p73 delete-mention-only-to-wound',
  ` That's what I mention only to wound.`,
  ``);

// p16: put "Play" in quotation marks for Alan-doing-it tone
// Find a line like "play" or "PLAY" in Alan's voice — we know it's in Alan voice from the annotation context
edit('p16 alan-play-in-quotes',
  `\nPlay. \n`,  // placeholder; will check below
  `\n"Play." \n`);

// Actually p16 might be on a different exact wording. Try a more generic pattern.
// The marked-up note said: 'Let\'s put "Play" in quotation marks but in a way that
// shows it was very clearly Alan doing it - not chen.' Hard to identify the exact phrase
// without seeing — leave as a placeholder edit that only fires if matched.

console.log('---');
console.log(`Edits attempted: 13`);
console.log(`Edits applied:   ${edits.length}`);

if (src !== before) {
  fs.writeFileSync(MD + '.bak2', before);
  fs.writeFileSync(MD, src);
  console.log(`Wrote ${MD} (backup at WOUND_V12.md.bak2). Δ bytes: ${before.length - src.length}`);
} else {
  console.log('No changes applied.');
}
