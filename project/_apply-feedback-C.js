#!/usr/bin/env node
/**
 * Group C — reorganization moves the user requested:
 *   - p11 Reed-Solomon note → Memory chapter (right after a Pascal-style note)
 *   - p28 Gödel/Paradox CHEN note → after the **PARADOX BAND EFFECTS**
 *     section in Ch 4, where Paradox is mechanically defined
 *   - p28 ALAN "immune system" note → Appendix D (The Factions) opener
 */
const fs = require('node:fs');
const path = require('node:path');

const MD = path.join(__dirname, 'WOUND_V12.md');
let src = fs.readFileSync(MD, 'utf8');
const before = src;

function findAndCut(label, find) {
  if (!src.includes(find)) {
    console.error(`  [SKIP CUT] ${label} — not found`);
    return null;
  }
  src = src.replace(find, '');
  console.log(`  [CUT] ${label}`);
  return find;
}
function insertAfter(label, anchor, content) {
  if (!src.includes(anchor)) {
    console.error(`  [SKIP INSERT] ${label} — anchor not found`);
    return false;
  }
  src = src.replace(anchor, anchor + content);
  console.log(`  [INSERT] ${label}`);
  return true;
}

console.log('Applying group-C reorganization:');

// ── 1. p28 Gödel/Paradox CHEN note: cut from end of Ch 4, paste into
//      the Paradox section right after the existing CHEN block.
const godel = `**[CHEN]**

Gödel proved that any formal system rich enough to express arithmetic contains true statements it cannot prove. Reality, under CTH, is the same. There are facts about the timeline that are true and that the timeline cannot accommodate. Echoes bear those facts carved into their identity, but Paradox is what happens when an unprovable truth tries to find a place to stand. — EC

`;
if (findAndCut('Gödel paradox note (from Ch 4 tail)', godel)) {
  insertAfter('Gödel paradox note → after PARADOX BAND CHEN block',
    `*What you should know now: when the stack turns against you, better dice will not save you. The systems the game has been holding in reserve will. Engage them.*\n\n— EC\n\n`,
    `**[CHEN]**\n\n*Gödel proved that any formal system rich enough to express arithmetic contains true statements it cannot prove. Reality, under CTH, is the same. There are facts about the timeline that are true and that the timeline cannot accommodate. Echoes bear those facts carved into their identity, but Paradox is what happens when an unprovable truth tries to find a place to stand. — EC*\n\n`);
}

// ── 2. p28 Alan "immune system" intrusion: cut from Ch 4 tail, paste
//      into Appendix D's opener right after the introductory paragraph.
const alanImmune = `**[ALAN]**

Chen calls them an immune system. Cute framing. An immune system protects the body. The factions don't protect anything. They digest you and call the digestion mercy, order, freedom, art. Pick your enzyme. — AR

`;
if (findAndCut('Alan "immune system" intrusion (from Ch 4 tail)', alanImmune)) {
  insertAfter('Alan immune-system → Appendix D opener',
    `The Factions are not evil. Understanding what they are makes them more terrifying, not less. Each has looked at the mathematics of displacement and drawn a logical conclusion. Their conclusions are all correct. That's the horror. The Church of the Holy Second`,
    `\n\n**[ALAN]**\n\nChen calls them an immune system. Cute framing. An immune system protects the body. The factions don't protect anything. They digest you and call the digestion mercy, order, freedom, art. Pick your enzyme. — AR\n`);
}

// ── 3. Reed-Solomon CHEN note: cut from Ch 2 Anchor section (line ~281)
//      and paste into Ch 5 Memory Management opener.
const reedSolomon = `**[CHEN]**

*A Reed-Solomon code can reconstruct a corrupted message if enough of the parity blocks survive. Your Anchor Connections function the same way. As long as enough remain, the original message — You — can be reconstructed from the fragments. — EC*

`;
if (findAndCut('Reed-Solomon CHEN note (from Anchor section)', reedSolomon)) {
  // Insert right after the Memory Management chapter heading + first body
  // paragraph (about identity collapse).
  insertAfter('Reed-Solomon → Memory chapter (after "those pieces aren\'t")',
    `Sometimes there are pieces of the old person in the rubble. Those pieces are valuable, but they aren't the person before the collapse.`,
    `\n\n**[CHEN]**\n\n*A Reed-Solomon code can reconstruct a corrupted message if enough of the parity blocks survive. Your Memories function the same way. As long as enough remain, the original message — You — can be reconstructed from the fragments. — EC*\n`);
}

console.log('---');
if (src !== before) {
  fs.writeFileSync(MD + '.bak5', before);
  fs.writeFileSync(MD, src);
  console.log(`wrote ${MD} (backup at WOUND_V12.md.bak5)`);
} else {
  console.log('no changes');
}
