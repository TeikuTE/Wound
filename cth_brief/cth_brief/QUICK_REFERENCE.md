# CTH Glyph Quick Reference

*Single-page reference for layout. Keep open beside the main brief.*

## Atomic alphabet (11 strokes)

| Glyph | Name | File | Meaning |
|---|---|---|---|
| τ | Tau · Time | `atom_tau.svg` | Time, displacement, spine of selfhood |
| μ | Mu · Mass | `atom_mu.svg` | Emotional mass, narrative weight |
| Ψ | Psi · Waveform | `atom_psi.svg` | Identity as wave-state |
| I | Iota · Intervention | `atom_i.svg` | Choice, agency, deliberate action |
| C | Causality | `atom_c.svg` | Consequence, resistance |
| Ω | Omega · Field | `atom_omega.svg` | The chronofield, the boundary |
| Δ | Delta · Fracture | `atom_delta.svg` | Change as breakage, operator of transformation |
| ω | Omega-mini · Oscillation | `atom_omicron.svg` | Micro-oscillation, vibration |
| S | Sigma · Limit | `atom_s.svg` | Collapse threshold, terminal state |
| R | Rho · Mirror | `atom_r.svg` | Recursion, reflection |
| E | Epsilon · Erasure | `atom_e.svg` | Void, what was removed |

## Conceptual glyphs (12 compositions)

| Glyph | File | Composition | Meaning |
|---|---|---|---|
| ANCHOR | `concept_anchor.svg` | Compound: Ω + τ | Identity tether |
| MEMORY | `concept_memory.svg` | Compound: Ψ over ω | Recollection |
| MOMENTUM | `concept_momentum.svg` | Sequence: τ Δ | Forward vector |
| PARADOX | `concept_paradox.svg` | Compound: Ψ through Δ | Reality damage |
| ECHO | `concept_echo.svg` | Sequence: Ψ R | Displaced waveform |
| DRIFT | `concept_drift.svg` | Vertical: τ over S | Losing alignment |
| RIPPLE | `concept_ripple.svg` | Sequence: ω ω ω | Disturbance spreading |
| COLLAPSE | `concept_collapse.svg` | Compound: Ω through Δ | Node failure |
| RECURSION | `concept_recursion.svg` | Sequence: R R | Time folded back |
| NULL | `concept_null.svg` | Solo: E | Erasure |
| BURDEN | `concept_burden.svg` | Stack: μ μ μ | Emotional weight |
| RENDITION | `concept_rendition.svg` | Sequence: Ψ E Ψ | A life rewritten |

## Master sigil (3 sacred appearances only)

| File | Where it appears |
|---|---|
| `sigil_master.svg` | Cover (intact) · emiT title page (one terminal missing) · Saul Files closing page (one terminal replaced by MEMORY) |

## Faction dialects (transformations applied to any glyph)

| Faction | Rule | Demo file |
|---|---|---|
| Loop Authority | Every stroke doubled, weight reduced to 3 | `dialect_authority_psi.svg` |
| Church | Cross-mark (weight 2, length 10) at every terminus | `dialect_church_psi.svg` |
| Scionfall | `stroke-dasharray="4 4"` applied uniformly | `dialect_scionfall_psi.svg` |
| Chronoclasts | 15° clockwise rotation around (50,50) | `dialect_chronoclast_psi.svg` |

## Size hierarchy

| Context | Size | Stroke weight |
|---|---|---|
| Chapter sigil | 28mm | 5 |
| Section sigil | 14mm | 5 |
| Inline margin marker | 6mm | 5 |
| Equation inline glyph | 8–10mm | 5 |
| Late-insertion ghost | 5mm | 5, opacity 0.7 |

## Color tokens

| Context | Token | Hex |
|---|---|---|
| Chen pages (default) | EL-Burgundy | `#6B3232` |
| Chen pages, mechanical | EL-Forest | `#3D5A47` |
| Late-insertion ghost | EL-Annotation | `#8B7355` |
| Alan pages | AL-Electric | `#D4B886` |
| Warning/intervention | SF-Paradox | `#A03030` |

## Production rules

1. Every glyph at 100×100 viewBox, stroke weight 5, square caps, miter joins.
2. All SVGs use `stroke="currentColor"` — parent context provides the hex.
3. Master Sigil: cover + emiT title + Saul Files closing. Nowhere else.
4. Atomic strokes appear only in Appendix A (Harmonic Codex). They are the alphabet, not the message.
5. Dialect transforms apply to entire glyph composition uniformly. Never apply selectively to part of a glyph.
6. Test thumbnail legibility at 24px before deploying. If two glyphs blur into each other, the system fails Law 2.
