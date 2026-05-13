#!/usr/bin/env node
/**
 * Apply systematic OCR/typographic fixes to WOUND_V12.md.
 */
const fs = require('node:fs');

const PATH = __dirname + '/WOUND_V12.md';
let src = fs.readFileSync(PATH, 'utf8');
const before = src;

// We use a function-replacement helper so we never have to hand-write captures.
function r(pattern, replacement) {
  src = src.replace(pattern, replacement);
}

// Use a single capture for the apostrophe so we preserve straight vs curly.
const APO = "[’']";  // either kind

// ── OCR drops: missing 's' / 't' / 'r' after apostrophe ──────────────
// It's a / It's not / it's all / it's when / it's clean
r(/\bIt['’]\s+a\b/g, "It’s a");
r(/\bIt['’]\s+not\b/g, "It’s not");
r(/\bit['’]\s+a\b/g, "it’s a");
r(/\bit['’]\s+not\b/g, "it’s not");
r(/\bit['’]\s+all\b/g, "it’s all");
r(/\bit['’]\s+when\b/g, "it’s when");
r(/\bit['’]\s+clean\b/g, "it’s clean");

// X-n't (the most common case: apostrophe + space → missing 't')
const NTS = ['doesn','don','didn','isn','wasn','weren','haven','hadn','won','can','couldn','shouldn','wouldn','aren','ain','mustn'];
for (const w of NTS) {
  r(new RegExp(`\\b(${w})['’]\\s+`, 'g'), `$1’t `);
}

// You/They/We're with the missing 'r'
r(/\bYou['’]e\b/g, "You’re");
r(/\byou['’]e\b/g, "you’re");
r(/\bThey['’]e\b/g, "They’re");
r(/\bthey['’]e\b/g, "they’re");
r(/\bWe['’]e\b/g, "We’re");
r(/\bwe['’]e\b/g, "we’re");

// Possessive Chronoverse's etc.
r(/\bChronoverse['’]\s+/g, "Chronoverse’s ");

// ── Harmonic Codex: parens + equation spacing ────────────────────────
// Note: \b doesn't work next to unicode math letters; use lookahead for space.
r(/\(ℳ(?=\s)/g, "(ℳ)");
r(/\(Ψₑ(?=\s)/g, "(Ψₑ)");
r(/\(Φ\./g, "(Φ).");
r(/\(Φ(?=\s)/g, "(Φ)");
r(/M\(τ\s+μ\s+Ψ\./g, "M(τ, μ, Ψ).");
r(/=\s*\(ω\s+μ\s+C\)/g, "= (ω, μ, C)");
r(/ΔΨ=\s+/g, "ΔΨ = ");
r(/ΔΨis\b/g, "ΔΨ is");
r(/Δτis\b/g, "Δτ is");
r(/μis\b/g, "μ is");
r(/Ψcollapses\b/g, "Ψ collapses");
r(/high-μmoments/g, "high-μ moments");
r(/S\s*=\s*lim\[Θ→\]\s*\(μ×Ψₚ\s*\/\s*ΔΘ²/g, "S = lim[Θ→0] (μ × Ψₚ / ΔΘ²)");
r(/Memory Loss Ratio\s+∝\(\|ΔΘ\s+×μ\s+\/\s+\(C\s+×B\)/g,
  "Memory Loss Ratio ∝ |ΔΘ × μ| / (C × B)");

// ── Broken markdown leaks (stray asterisks injected by PDF→MD) ───────
// Rewrite the front-matter bold heading lines. The MD had:
//   **YOUR FIRST **3-4** SESSIONS — READ ONLY THIS**
// which the markdown parser sees as 5 asterisks → broken. Replace the whole
// heading variants with a single clean `**bold heading**`.
r(/\*\*YOUR FIRST \*\*3-4\*\* SESSIONS — READ ONLY THIS\*\*/g,
  "**YOUR FIRST 3 OR 4 SESSIONS — READ ONLY THIS**");
r(/\*\*WHEN CRISIS HITS \(PARADOX \*\*7\+\*\* OR COHERENCE -6\) — ADD THIS\*\*/g,
  "**WHEN CRISIS HITS (PARADOX 7+ OR COHERENCE −6) — ADD THIS**");
r(/Chapters \*\*1-5\*\* \(Chapters \*\*1-5\*\* of Temporal Echoes\)/g,
  "Chapters 1–5 (Chapters 1–5 of Temporal Echoes)");
// Unmatched asterisk on heading-style bold
r(/\*\*The Architecture of Self\*(?!\*)/g, "**The Architecture of Self**");

// ── Backticked Z snippets → plain text ───────────────────────────────
r(/^`(\[[^`]+CARRIER LOST\][^`]*)`/gm, "$1");
r(/^`(\[\d{4}\.[^`]+)`/gm, "$1");
r(/^`(Memory Loss Ratio[^`]+)`/gm, "$1");

// ── Collapse stray double-spaces from PDF extraction ────────────────
r(/  +/g, " ");

if (src === before) {
  console.log("no changes (already clean?).");
} else {
  fs.writeFileSync(PATH + '.bak', before);
  fs.writeFileSync(PATH, src);
  console.log(`fixed: ${before.length} → ${src.length} bytes. backup at WOUND_V12.md.bak`);
}
