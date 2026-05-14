#!/usr/bin/env node
/**
 * Group D — structural readability fixes that need MD edits.
 *   - bold Scar / Mutation / similar `Name: description` lead-ins
 *   - rejoin broken paragraphs (PDF extraction left blank lines mid-sentence)
 *   - promote a few plain-text Title Case headings to proper `**Bold**`
 */
const fs = require('node:fs');
const path = require('node:path');

const MD = path.join(__dirname, 'WOUND_V12.md');
let src = fs.readFileSync(MD, 'utf8');
const before = src;

function edit(label, find, replace) {
  if (typeof find === 'string') {
    if (!src.includes(find)) { console.error(`  [SKIP] ${label}`); return; }
    src = src.split(find).join(replace);
  } else {
    if (!find.test(src)) { console.error(`  [SKIP] ${label}`); return; }
    src = src.replace(find, replace);
  }
  console.log(`  [OK] ${label}`);
}

console.log('Applying group-D structural fixes:');

// Rejoin and bold the five Scars
const scars = [
  ['Phantom Habit', 'you perform a ritual you don\'t understand. The body', 'remembers what the mind has lost.'],
  ['False Story', 'you\'ve constructed a lie to fill the gap. You believe', 'it. That\'s the dangerous part.'],
  ['Persistent Ache', 'physical pain tied to the loss. Location unknown.', 'Cause unverifiable.'],
  ['Emotional Void', 'numbness where feeling used to be, or feeling where', 'numbness would be appropriate.'],
  ['Behavioral Shift', 'a personality change, permanent. You act differently', 'now. You may not have noticed yet.'],
];
for (const [name, part1, part2] of scars) {
  edit(`scar bold-and-join ${name}`,
    `${name}: ${part1}\n\n${part2}`,
    `**${name}:** ${part1} ${part2}`);
}

// p15: "Your Initial State" — promote to a bolded subhead
edit('p15 Your-Initial-State-header',
  `\nYour Initial State\n\nRecord your starting condition.`,
  `\n**Your Initial State**\n\nRecord your starting condition.`);

// p7: "The Four Factions" — promote to a bolded subhead
edit('p7 The-Four-Factions-header',
  `Accepting their offers is drinking from a poisoned chalice. Rejecting their help is drowning in a poisoned pool.\n\nThe Four Factions\n\nFour major Factions have emerged`,
  `Accepting their offers is drinking from a poisoned chalice. Rejecting their help is drowning in a poisoned pool.\n\n**The Four Factions**\n\nFour major Factions have emerged`);

// Same pattern for Mutations (p32): grep first to enumerate
const mutationsBlock = src.match(/\*\*MUTATIONS \(TEMPORAL ECHOES\)\*\*[\s\S]+?\*\*MUTATIONS \(EMIT\)\*\*/);
if (mutationsBlock) {
  // Common mutation names appear as `Name: description` pairs.
  // Bold the first capitalized phrase before a colon at the start of a line.
  const blockText = mutationsBlock[0];
  const fixed = blockText.replace(/^([A-Z][A-Za-z][\w \-/]+?):\s/gm, '**$1:** ');
  if (fixed !== blockText) {
    src = src.replace(blockText, fixed);
    console.log('  [OK] bolded mutation names (regex)');
  }
}

// Also fix scattered double-blank-line paragraph splits that the PDF
// extractor left throughout the manuscript. Specifically: a short
// dangling fragment that ends a "word" without a period, followed by a
// blank line, followed by a continuation.  Only rejoin when the second
// line starts with lowercase (a continuation, not a new sentence).
const beforeJoin = src;
src = src.replace(/([a-z,]\s)$\n\n([a-z])/gm, '$1$2');
if (src !== beforeJoin) console.log('  [OK] rejoined paragraph fragments (regex)');

console.log('---');
if (src !== before) {
  fs.writeFileSync(MD + '.bak4', before);
  fs.writeFileSync(MD, src);
  console.log(`wrote ${MD} (backup at WOUND_V12.md.bak4)`);
} else {
  console.log('no changes');
}
