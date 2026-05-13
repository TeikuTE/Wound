# WOUND V12 — full book baseline

145-page manuscript laid out as 88 spreads in `WOUND V12.html`. Navigate with ← / → / Space, click edge arrows, or jump from the dotted TOC at the bottom. Tweaks toggle (top-right toolbar) still controls intrusion fidelity + Chen body type.

## What's here

| File | Role |
| --- | --- |
| `WOUND V12.html` | The viewer. Open this. |
| `wound-tokens.css` | Design system tokens. Don't edit. |
| `wound-spread.css` | Viewer chrome + table/interlude styles. |
| `book-components.jsx` | Page / Spread / intrusion primitives. **Source of truth.** |
| `app.jsx` | Viewer app — TOC, navigation, Tweaks panel. |
| `tweaks-panel.jsx` | Tweaks framework (don't touch). |
| `inline-helper.js` | Runtime: highlights mech-terms + dice in body prose. |
| `chapters/<slug>.jsx` | Source per chapter — what you edit when you want to refine a chapter. |
| `*.compiled.js` | Pre-compiled JS the HTML actually loads. **Don't edit these directly.** |
| `assets/` | SVGs (icons, textures, rule, watermark). |

## Edit workflow

When you want to fix a specific chapter (move an intrusion, split a page, fix a table):

1. **Edit the `.jsx` file** under `chapters/`. Never edit the `.compiled.js` — your change will be overwritten.
2. **Recompile.** Ask me to recompile (one line — I run Babel on the changed file), or use any Babel CLI if you've got one set up.
3. **Refresh the viewer.** Your edit is live.

When you want to extend the **design system** (a new component, a new color, a new page type — MEMO documents, the four Faction icons, the Chronoverse map):

1. Edit `book-components.jsx` and/or `wound-spread.css`.
2. Recompile `book-components.jsx`.
3. Refresh.

## What the baseline got right

- All 145 manuscript pages laid out and navigable.
- Voice attribution: every `[CHEN]` / `[ALAN]` block in the manuscript became the correct intrusion in the correct book.
- Short intrusions → floating marginalia / handwritten cuts / typewriter fragments.
- Long intrusions → inline blocks (italic Garamond w/ gold rule for Chen, full-bleed handwritten Caveat dark for Alan, parchment-on-void for Chen-in-Alan).
- Mech-terms highlighted in mono inline (OBSERVE, SYNC, Coherence, Paradox, …).
- Dice notation + target numbers bolded (1d6, 4+, +1, etc).
- Page numbers + running heads on every spread.
- Tier 1 / Tier 2 intrusion fidelity toggle, Chen body family swap.

## What needs human review (in priority order)

1. **Page-break placement.** Auto-paginated by manuscript page markers; some pages are dense (overflow into bottom margin), others sparse (a single sentence). Each chapter wants a hand-pass to split tight pages and merge thin ones.
2. **`d100` Oracle tables.** Rendered as flowing prose, not as proper tables. Appendix C is the worst offender — every Era / Anomaly / Faction / Atmosphere table is currently a paragraph of numbers and titles. Needs custom table styling.
3. **MEMO documents in Appendix E.** Currently render as ordinary appendix prose. Per your brief these want individual found-document treatment — different stationery, different typewriters, watermarks. Each MEMO is its own visual problem.
4. **Character sheets.** Rendered as prose. Need custom sheet layout.
5. **Saul Files (Appendix H).** Currently placeholder text per the manuscript; will need recovered-evidence styling when written.
6. **Chapter II "EXCAVATING YOUR ECHO" and similar long mechanic-heavy chapters.** Mechanics blocks flow as paragraphs; some procedure lists would read better as proper numbered steps with hanging indent.
7. **Faction iconography.** Tier 3 in the brief, placeholders only.

## Known small bugs in the baseline

- A handful of subsection headings (Title-Case lines like "The Four Factions", "What You Need to Play") got concatenated into the paragraph that follows them. The PDF extractor lost the visual gap; a fresh source would fix this.
- The numbered Faction list (`1. CHURCH TEMPLAR`, `2. AUTHORITY AUDITOR` …) renders correctly but with mech-term highlighting that makes "CHURCH" pop hard. Cosmetic only.
- Each chapter's content area uses `overflow: hidden` at the page level only, so anything past the page footprint gets clipped. If a page is overflowing badly, you'll see body text running into the bottom margin (still inside the page) but nothing past the page edge.
