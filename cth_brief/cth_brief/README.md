# CTH Glyph System — Handoff Package

This package contains the complete reference materials for the CTH Glyph System used in WOUND: Temporal Echoes / emiT.

## Files

### Primary documents
- **`CTH_Glyph_System_Brief.html`** — the master brief. Self-contained HTML with all glyphs rendered inline. Open in any browser. Print to PDF if you need a printable handoff.
- **`CTH_Glyph_System_Brief.pdf`** — printable PDF version of the brief (21 pages, US Letter).
- **`QUICK_REFERENCE.md`** — single-page glyph dictionary. Keep open beside the brief while doing layout work.

### Asset library
- **`glyphs/`** — 28 individual SVG files. All use `stroke="currentColor"` for context-driven coloring.
  - 11 atomic strokes (`atom_*.svg`)
  - 12 conceptual glyphs (`concept_*.svg`)
  - 1 master sigil (`sigil_master.svg`)
  - 4 faction dialect demonstrations (`dialect_*_psi.svg`)

## Usage

### For a designer building layouts
1. Read the brief from top to bottom once (~25 minutes).
2. Keep `QUICK_REFERENCE.md` open while working.
3. Use SVG files from `glyphs/` directly in your layout tool (Typst, InDesign, Affinity Publisher all support SVG).
4. Apply color via your tool's mechanism — `stroke="currentColor"` means each SVG inherits the parent context's color.

### For a writer composing new inscriptions
1. Read Section IX (Writing in CTH) carefully.
2. Use the composition grammar in Section IV to build new compositions from atomics.
3. Test any new composition by decomposing it back into atomics — if the meaning recovers, the composition is valid.

### For a faction dialect rendering
1. Take any base glyph SVG.
2. Apply the dialect transformation from Section VIII (Authority doubles, Church adds termini, Scionfall dashes, Chronoclasts tilt 15°).
3. The transform applies uniformly to every stroke in the glyph.

## Versioning

This is v1.0. If the system evolves, update the version tag in the cover page of the brief.
