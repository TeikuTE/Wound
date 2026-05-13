#!/usr/bin/env node
// Compile all JSX → .compiled.js for the WOUND viewer.
const { execSync } = require('node:child_process');
const { readdirSync } = require('node:fs');

function babel(input, output) {
  execSync(`npx babel "${input}" -o "${output}"`, { stdio: 'inherit' });
}

const top = ['app.jsx', 'book-components.jsx', 'tweaks-panel.jsx'];
for (const f of top) {
  babel(f, f.replace('.jsx', '.compiled.js'));
}

for (const f of readdirSync('chapters').filter(f => f.endsWith('.jsx'))) {
  babel(`chapters/${f}`, `chapters/${f.replace('.jsx', '.compiled.js')}`);
}

console.log('build complete.');
