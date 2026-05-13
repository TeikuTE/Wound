# WOUND — Full Book Layout

A print-style spread viewer (5.5″ × 8.5″) for the WOUND duology, generated from the
clean Markdown manuscript (`WOUND_V12.md`). Currently 116 spreads end-to-end. Open
`WOUND V12.html` in a browser; navigate with ← / → / Space; jump from the dotted
TOC; toggle Tweaks (Tier 1/2 intrusions, Chen body family).

## Pipeline

```
WOUND_V12.md  ──(_fix-md.js)──▶  cleaned MD
              ──(_generate.js)─▶ chapters/*.jsx
              ──(build.js)─────▶ chapters/*.compiled.js  ◀── WOUND V12.html loads these
```

| Command | What it does |
| --- | --- |
| `npm run build` | Compile all JSX → `.compiled.js` via Babel |
| `npm run serve` | Static-serve the project on `:8765` |
| `node _generate.js --all` | Regenerate every chapter JSX from `WOUND_V12.md` |
| `node _generate.js chen-1` | Regenerate one chapter |
| `node _fix-md.js` | Re-apply OCR & markdown fixes to the MD (backups to `.bak`) |
| `node _screenshot.js 0,7,19,53,82` | Capture screenshots of specific spreads |

## File layout

| Path | Role |
| --- | --- |
| `WOUND V12.html` | The viewer. Open this. |
| `WOUND_V12.md` | Source manuscript. **Edit prose here.** |
| `wound-tokens.css` | Design system tokens. |
| `wound-spread.css` | Layout & component CSS. |
| `fonts.css` + `fonts/` | Locally-hosted font subsets (works offline). |
| `vendor/` | React UMD bundles, locally hosted. |
| `book-components.jsx` | Page / Spread / intrusion primitives. |
| `app.jsx` | The viewer app (TOC, nav, tweaks). |
| `chapters/<slug>.jsx` | One per chapter / appendix. **Auto-generated.** |
| `chapters/<slug>.compiled.js` | Babel output. Loaded by HTML. **Don't edit.** |
| `assets/` | Icons, textures, watermarks. |
| `_generate.js` | Markdown → JSX generator. |
| `_fix-md.js` | OCR & broken-markdown fixer for the manuscript. |
| `_screenshot.js` | Dev-only headless screenshot helper. |

## What's been done

* **Clean MD source.** OCR damage in the Harmonic Codex (missing apostrophe-s/t/r,
  broken parens around Greek letters, equation spacing) corrected. Stray markdown
  leaks repaired (`**3-4** SESSIONS** etc.`). Run `node _fix-md.js` to re-apply.

* **Generator-driven layout.** Every chapter's JSX is produced from MD, so any
  prose edits flow through `_generate.js → build.js`. The generator handles:
  * heading hierarchy (h2 / h3 / h4 / pseudo-h3),
  * voice markers (`**[CHEN]**`, `**[ALAN]**`, `**[Z]**`) → intrusion / marginalia
    components, never rendered as literal text,
  * dnumbered-list renumber-from-1 (fixes the "1. 1. 1." bug),
  * resolution-roll detection (`**10+** / **7-9** / **6-**`) → structured block,
  * MEMO detection (`### MEMO: …`) → found-document treatment with per-faction
    color (Authority, Chronoclast, Scionfall, Church variants),
  * d100 oracle row detection → ruled three-column table,
  * page rebalancing so the last page of a chapter isn't near-empty.

* **Premium typography.**
  * Title page: half-title verso + full title recto with sigil, Manrope title,
    decorative rule.
  * Chapter openers: pen-and-ink icon, italic small-caps "Chapter N", burgundy
    serif title, gold ornamental rule, faint clock watermark.
  * Drop cap on the first paragraph of every chapter.
  * Small-caps section heads underlined in tarnished gold.
  * Chen's italic reflections inset with a thin gold left rule, signed `— EC`.
  * Alan's handwritten intrusions: Caveat on a dark void rectangle, slight
    rotation, signed `—AR`.
  * Chen → Alan intrusions: parchment "patch" inside the void, cataloged header.
  * Resolution rolls: three-tier grid (dice in burgundy mono / small-caps title /
    body), bordered top & bottom.
  * d100 oracle tables: three columns — burgundy mono range / forest small-caps
    name / serif description.
  * MEMOs: classified stamp, faction tint, slight rotation, drop shadow.

* **Local fonts.** All seven font families (EB Garamond, Playfair Display,
  IBM Plex Mono, Caveat, Manrope, Cormorant Garamond, Source Serif 4) hosted in
  `fonts/`. Works offline.

## Known caveats

* **Page balance.** Auto-pagination is heuristic — most pages fill well, but some
  chapter endings still leave a half-empty recto. Hand-tune by editing the
  generated JSX (or the MD) and rebuilding.

* **A11y.** Character sheet still uses underscore lines + circle pips. For a
  print PDF this is correct; for a digital ePub these should become interactive
  form fields or `[Enter Name]` text. Not addressed in this pass.

* **Appendix A (Harmonic Codex).** The MD source doesn't have a clean `##
  Appendix A:` heading; the content currently lives inside Chapter 8's tail.
  Will need a tiny MD edit (add `## Appendix A: The Harmonic Codex` before the
  "If you're reading this, you've experienced enough displacement…" paragraph)
  for a clean appendix section.

* **Flattened tables (Faction Relationships, Tag/Applies, Action/Mode/Reason).**
  The PDF→MD extractor destroyed the column structure of a few tables. The
  pseudo-h3 detector now refuses to treat broken table cells as headings, so
  they render as prose. Reconstructing real two-column tables for these
  specific sections requires hand-editing the MD.

* **Visible mech-terms.** `OBSERVE`, `SYNC`, `Coherence`, `Paradox`, etc. are
  highlighted inline in mono via `inline-helper.js`. The list of recognized
  terms is hard-coded at the top of that file — add new ones there.

## Editing workflow

1. Make a prose change in `WOUND_V12.md`.
2. `node _generate.js --all` (or just the chapter slug, e.g. `chen-3`).
3. `npm run build`.
4. Refresh `WOUND V12.html` in your browser.

To tune layout for a single chapter without touching the generator, edit the
generated JSX directly — but be aware that the next regeneration will overwrite it.
