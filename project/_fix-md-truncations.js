#!/usr/bin/env node
/**
 * Reconstruct PDF-extraction truncations in the manuscript.
 * Each fix is a best-effort completion based on context.
 * Run from /home/claude/repo/project.
 */
const fs = require('node:fs');
const path = require('node:path');

const MD = path.join(__dirname, 'WOUND_V12.md');
let src = fs.readFileSync(MD, 'utf8');
const before = src;

function fix(label, find, replace) {
  if (!src.includes(find)) {
    console.error(`  [SKIP] ${label}`);
    return;
  }
  src = src.split(find).join(replace);
  console.log(`  [OK] ${label}`);
}

console.log('Reconstructing truncated text in MD:');

// ── NPC Motivation Table (Appendix C) — page-most-visibly-broken ─────
fix('NPC.Survival',
  `**01-05** Survival — ensure personal safety, secure basic ne`,
  `**01-05** Survival — ensure personal safety, secure basic needs (food, shelter, warmth), avoid lethal threats.`);

fix('NPC.Revenge',
  `**06-10** Revenge — settle old scores, right past wrongs, jus`,
  `**06-10** Revenge — settle old scores, right past wrongs, justice on their own terms.`);

fix('NPC.Greed',
  `**11-15** Greed — accumulate wealth, power, or influence; m`,
  `**11-15** Greed — accumulate wealth, power, or influence; more is never enough.`);

fix('NPC.Fear',
  `**31-35** Fear — avoid danger, exposure, or consequence; o`,
  `**31-35** Fear — avoid danger, exposure, or consequence; obey the threat that scares them most.`);

fix('NPC.Justice',
  `**46-50** Justice — right systemic wrongs, restore balance; j`,
  `**46-50** Justice — right systemic wrongs, restore balance; judge the wrongdoer.`);

fix('NPC.Control',
  `**56-60** Control — maintain order, prevent chaos; need for`,
  `**56-60** Control — maintain order, prevent chaos; need for predictability.`);

fix('NPC.Protection',
  `**66-70** Protection — guard something precious: family, se`,
  `**66-70** Protection — guard something precious: family, secret, faith, place.`);

fix('NPC.Belonging',
  `**76-80** Belonging — find community, gain acceptance, ear`,
  `**76-80** Belonging — find community, gain acceptance, earn a place among people who matter to them.`);

fix('NPC.Legacy',
  `**81-85** Legacy — leave lasting mark, be remembered, sha`,
  `**81-85** Legacy — leave lasting mark, be remembered, shape what comes next.`);

fix('NPC.Obsession',
  `**91-93** Obsession — pursue singular goal regardless of co`,
  `**91-93** Obsession — pursue singular goal regardless of cost.`);

fix('NPC.Confusion',
  `**94-96** Confusion — seeking clarity of chaotic situation; lo`,
  `**94-96** Confusion — seeking clarity of chaotic situation; looking for someone to explain what is happening.`);

fix('NPC.Manipulation',
  `**97-98** Manipulation — use others as tools for a hidden ag game`,
  `**97-98** Manipulation — use others as tools for a hidden agenda; the game is theirs alone.`);

// ── Theme Oracle — also has short truncated themes ──────────────────
// Already single-word themes (Identity, Memory, etc.) — those are fine.

// ── Theme Oracle / NPC body cleanup ──────────────────
fix('Theme.Freedom-Protection-Discovery (motif rows)',
  `**61-65** Freedom — escape constraint, oppression, or oblig

**66-70** Protection — guard something precious: family, se

**71-75** Discovery — uncover truth, reveal hidden informat`,
  `**61-65** Freedom — escape constraint, oppression, or obligation.

**66-70** Protection — guard something precious: family, secret, faith, place.

**71-75** Discovery — uncover truth, reveal hidden information.`);

// ── Other potentially truncated lines elsewhere ──────────────────────
fix('Faction.target-your',
  `A Faction Agent's Imposed consequence specifically targets your`,
  `A Faction Agent's Imposed consequence specifically targets your Anchor.`);

fix('Faction.tethering-your',
  `benefit — when you burn the last real thing tethering you to your`,
  `benefit — when you burn the last real thing tethering you to your origin, the cost is permanent.`);

fix('Faction.undo-wor',
  `Both try to undo each other's wor`,
  `Both try to undo each other's work.`);

fix('Captivity.coherence-from',
  `**6-** Fail. Loop continues. Lose 1 Coherence from`,
  `**6-** Fail. Loop continues. Lose 1 Coherence from the iteration.`);

fix('Era.Origin',
  `Origin Era: When and where you're from`,
  `Origin Era: When and where you're from.`);

fix('Memory.brief-and-evocative-list',
  `**A Title** — brief and evocative, the way you'd refer to it in your head`,
  `**A Title** — brief and evocative, the way you'd refer to it in your head.`);

// ── Lines that look like truncations but are valid (skip) ───────────
// L 444 "Persistent Connection — Recurring person or place across time" → valid bullet
// L 708 "Crisis, random jump" → valid fragment
// L 1527 "Spend a Downtime move" → valid stub
// L 1881 already complete in context
// L 2819 ending "matter, which are" → likely continues on next line as paragraph

console.log('---');
if (src !== before) {
  fs.writeFileSync(MD + '.bak.trunc', before);
  fs.writeFileSync(MD, src);
  console.log(`wrote ${MD} (backup at WOUND_V12.md.bak.trunc)`);
} else {
  console.log('no changes');
}
