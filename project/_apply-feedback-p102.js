#!/usr/bin/env node
/**
 * Group p102 / Appendix F + similar — rejoin and re-separate "Example N:"
 * headings that got swallowed into surrounding paragraphs by the PDF
 * extraction step.
 */
const fs = require('node:fs');
const path = require('node:path');
const MD = path.join(__dirname, 'WOUND_V12.md');
let src = fs.readFileSync(MD, 'utf8');
const before = src;

console.log('Fixing concatenated Example headings:');

// Pattern: prose ends with "+1 Coherence. Coherence: +4 →+5. Example 3: Navigation Failure I attempt..."
// We want:  "... +1 Coherence. Coherence: +4 →+5.\n\n#### Example 3: Navigation Failure\n\nI attempt..."
const swallowed = /([.!?])\s+Example\s+(\d+):\s+([A-Z][A-Za-z ]+?)\s+([A-Z][a-z])/g;
let count = 0;
src = src.replace(swallowed, (m, end, num, title, next) => {
  count++;
  return `${end}\n\n#### Example ${num}: ${title}\n\n${next}`;
});
console.log(`  rejoined ${count} "Example N:" heading(s)`);

// Same for "Chronicle Entry:" headers that got swallowed
const chronicle = /([.!?])\s+Chronicle Entry:\s+([A-Z\*])/g;
let cn = 0;
src = src.replace(chronicle, (m, end, next) => {
  cn++;
  return `${end}\n\n**Chronicle Entry:**\n\n${next}`;
});
console.log(`  rejoined ${cn} "Chronicle Entry:" heading(s)`);

if (src !== before) {
  fs.writeFileSync(MD + '.bak6', before);
  fs.writeFileSync(MD, src);
  console.log(`wrote ${MD}`);
}
