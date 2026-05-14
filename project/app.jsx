// ============================================================
// WOUND — Full Book Spread Viewer
// ============================================================

const { useState, useEffect, useRef, useLayoutEffect, useCallback, useMemo } = React;

// Tweak defaults — persisted by the host through the EDITMODE block.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "chenBody": "garamond",
  "intrusionTier": 2,
  "showChrome": true
}/*EDITMODE-END*/;

// ── Chapter order ──────────────────────────────────────────
// Each entry: { fn, section, label, num }
const CHAPTER_ORDER = [
  { fn: () => FrontMatter,           section: "front",      label: "Front Matter" },
  { fn: () => ChenCh1,                section: "chen",       label: "Ch I · Understanding",          num: 1 },
  { fn: () => ChenCh2,                section: "chen",       label: "Ch II · Excavating Your Echo",  num: 2 },
  { fn: () => ChenCh3,                section: "chen",       label: "Ch III · A Session of Play",    num: 3 },
  { fn: () => ChenCh4,                section: "chen",       label: "Ch IV · Core Resolution",       num: 4 },
  { fn: () => ChenCh5,                section: "chen",       label: "Ch V · Memory Management",      num: 5 },
  { fn: () => ChenCh6,                section: "chen",       label: "Ch VI · Crisis Management",     num: 6 },
  { fn: () => ChenCh7,                section: "chen",       label: "Ch VII · Advanced Systems",     num: 7 },
  { fn: () => ChenCh8,                section: "chen",       label: "Ch VIII · Long-Term Play",      num: 8 },
  { fn: () => PlayingBothInterlude,   section: "interlude",  label: "Interlude · Playing Both" },
  { fn: () => AlanCh1,                section: "alan",       label: "Entry 001 · After the Tutorial", num: 1 },
  { fn: () => AlanCh2,                section: "alan",       label: "Entry 002 · Calibration",       num: 2 },
  { fn: () => AlanCh3,                section: "alan",       label: "Entry 003 · Operational",       num: 3 },
  { fn: () => AlanCh4,                section: "alan",       label: "Entry 004 · Faction Pressure",  num: 4 },
  { fn: () => AlanCh5,                section: "alan",       label: "Entry 005 · Fracture Events",   num: 5 },
  { fn: () => AlanCh6,                section: "alan",       label: "Entry 006 · Terminal Configurations", num: 6 },
  { fn: () => AppendixB,              section: "appendix",   label: "Appendix B · Asset Catalogs" },
  { fn: () => AppendixC,              section: "appendix",   label: "Appendix C · Oracle Tables" },
  { fn: () => AppendixD,              section: "appendix",   label: "Appendix D · The Factions" },
  { fn: () => AppendixD1,             section: "appendix",   label: "Appendix D.1 · Field Intelligence" },
  { fn: () => AppendixE,              section: "appendix",   label: "Appendix E · Captivity Vignettes" },
  { fn: () => AppendixF,              section: "appendix",   label: "Appendix F · Examples of Play" },
  { fn: () => AppendixG,              section: "appendix",   label: "Appendix G · Temporal Pathologies" },
  { fn: () => AppendixH,              section: "appendix",   label: "Appendix H · The Saul Files" },
  { fn: () => BM_quick_reference_sheet, section: "appendix", label: "Quick Reference Sheet" },
];

// ── Build the linear spread list with global page numbering ─
function buildSpreadList(tweaks) {
  const items = [];
  let basePage = 1;
  for (const ch of CHAPTER_ORDER) {
    const Comp = ch.fn();
    const frag = Comp({ tweaks, basePage });
    const spreads = React.Children.toArray(frag.props.children);
    spreads.forEach((el, i) => {
      items.push({
        section: ch.section,
        chapter: ch.label,
        chapterNum: ch.num,
        idx: i,
        of: spreads.length,
        el,
      });
    });
    basePage += Comp.pages || 0;
  }
  return items;
}

// ── Auto-scale stage to fit viewport ───────────────────────
function useFitScale(naturalW, naturalH, padding = 80) {
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const compute = () => {
      const vw = window.innerWidth - padding * 2;
      const vh = window.innerHeight - padding * 2;
      const s = Math.min(vw / naturalW, vh / naturalH, 1);
      setScale(s > 0 ? s : 0.1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [naturalW, naturalH, padding]);
  return scale;
}

// ── URL-hash persistence ────────────────────────────────────
function getInitialIndex(max) {
  const m = (location.hash || "").match(/^#?(\d+)/);
  if (!m) return 0;
  const n = parseInt(m[1], 10);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(max - 1, n));
}

// ── Viewer chrome ───────────────────────────────────────────
function ViewerBar({ index, total, current }) {
  const sectionLabel = ({
    front: "Front Matter",
    chen:  "Book 1 · Temporal Echoes",
    interlude: "Interlude",
    alan:  "Book 2 · emiT",
    appendix: "Appendices",
  })[current.section] || current.section;
  return (
    <div className="viewer-bar">
      <div className="viewer-bar__brand">
        <img src="assets/wound-sigil.svg" alt=""/>
        <span>WOUND · V12 · Full Book</span>
      </div>
      <div className="viewer-bar__progress">
        <span>{sectionLabel}</span>
        <span>·</span>
        <span>{current.chapter}</span>
        <span>·</span>
        <span>spread <strong>{index + 1}</strong> / {total}</span>
      </div>
    </div>
  );
}

function ViewerTOC({ items, index, onJump }) {
  // Group by chapter so the TOC stays compact.
  const groups = [];
  let last = null;
  items.forEach((it, i) => {
    if (!last || last.chapter !== it.chapter) {
      last = { chapter: it.chapter, section: it.section, start: i, count: 1 };
      groups.push(last);
    } else last.count++;
  });

  // Render as compact section bands. Each section can collapse to dots-only.
  const [open, setOpen] = useState(null); // section key currently expanded; null = none
  const sectionGroups = {};
  for (const g of groups) {
    (sectionGroups[g.section] = sectionGroups[g.section] || []).push(g);
  }

  const sectionTitle = (s) => ({
    front: "Front", chen: "I", interlude: "Inter", alan: "II", appendix: "Apx",
  })[s] || s;

  return (
    <nav className="viewer-toc" aria-label="Spread navigation">
      {["front","chen","interlude","alan","appendix"].map((sec) => {
        const grps = sectionGroups[sec];
        if (!grps) return null;
        const start = grps[0].start;
        const end = grps[grps.length-1].start + grps[grps.length-1].count - 1;
        const active = index >= start && index <= end;
        return (
          <React.Fragment key={sec}>
            <span className={`viewer-toc__seg viewer-toc__seg--${sec} ${active ? "active" : ""}`}
                  onClick={() => onJump(start)}>
              {sectionTitle(sec)}
            </span>
            <span className="viewer-toc__dots">
              {grps.map((g) => {
                // Each chapter = one big dot. Active highlight if index lies in chapter.
                const grpActive = index >= g.start && index < g.start + g.count;
                return (
                  <button
                    key={g.start}
                    className={`viewer-toc__dot viewer-toc__dot--${g.section} ${grpActive ? "active" : ""}`}
                    aria-label={`Go to ${g.chapter}`}
                    title={g.chapter}
                    onClick={() => onJump(g.start)}
                  />
                );
              })}
            </span>
            {sec !== "appendix" && <span className="viewer-toc__sep">·</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

// ── Tweaks panel ────────────────────────────────────────────
function WoundTweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Intrusions — cross-book defacement">
        <TweakRadio
          label="Fidelity"
          value={tweaks.intrusionTier}
          options={[
            { value: 1, label: "Italic —AR" },
            { value: 2, label: "Handwritten" },
          ]}
          onChange={(v) => setTweak("intrusionTier", v)}
        />
      </TweakSection>
      <TweakSection label="Chen — body type">
        <TweakRadio
          label="Body family"
          value={tweaks.chenBody}
          options={[
            { value: "garamond",    label: "Garamond" },
            { value: "cormorant",   label: "Cormorant" },
            { value: "sourceserif", label: "Source" },
          ]}
          onChange={(v) => setTweak("chenBody", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// ── Print mode: render every page (not spread) stacked, one PDF page each ─
// Drops deliberate "(blank)" verso pages — those are print-book conventions
// that just become dead space in a single-page digital PDF.
function PrintApp({ items }) {
  const pages = [];
  items.forEach((spread, si) => {
    const children = React.Children.toArray(spread.el.props.children);
    children.forEach((child, pi) => {
      if (!child || !child.props) return;
      // Drop blank pages: label="(blank)" indicates intentional blanks.
      if (child.props.label === '(blank)') return;
      // Drop pages whose body is empty / whitespace only — these crept
      // in when the auto-paginator emptied a trailing page after content
      // moved upstream.
      const body = child.props.children;
      const bodyEmpty =
        body == null
        || (Array.isArray(body) && body.every(b => b == null || b === false || b === ''))
        || (typeof body === 'string' && body.trim() === '');
      if (bodyEmpty) return;
      pages.push({ key: `${si}-${pi}`, el: child });
    });
  });
  return (
    <div className="print-doc">
      {pages.map(p => (
        <div className="print-page" key={p.key}>{p.el}</div>
      ))}
    </div>
  );
}

// ── Main app ────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const items = useMemo(() => buildSpreadList(tweaks), [tweaks]);
  const total = items.length;

  // ?print activates print mode (used by the PDF exporter).
  const isPrint = typeof location !== 'undefined' && /[?&]print(=|&|$)/.test(location.search);
  if (isPrint) return <PrintApp items={items} />;

  const [index, setIndex] = useState(() => getInitialIndex(total));
  useEffect(() => {
    history.replaceState(null, "", `#${index}`);
    window.postMessage({ slideIndexChanged: index }, "*");
  }, [index]);

  const goPrev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setIndex(i => Math.min(total - 1, i + 1)), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft" || e.key === "PageUp")  { e.preventDefault(); goPrev(); }
      if (e.key === "ArrowRight"|| e.key === "PageDown"|| e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "Home")    { e.preventDefault(); setIndex(0); }
      if (e.key === "End")     { e.preventDefault(); setIndex(total - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, total]);

  const scale = useFitScale(1056, 816, 80);
  const current = items[index] || items[0];

  return (
    <div className="desk">
      <ViewerBar index={index} total={total} current={current}/>

      <button className="viewer-nav-arrow viewer-nav-arrow--prev"
              onClick={goPrev} disabled={index === 0}
              aria-label="Previous spread">◀</button>
      <button className="viewer-nav-arrow viewer-nav-arrow--next"
              onClick={goNext} disabled={index === total - 1}
              aria-label="Next spread">▶</button>

      <div className="spread-stage" style={{ transform: `scale(${scale})` }}>
        {current.el}
      </div>

      <ViewerTOC items={items} index={index} onJump={setIndex}/>
      <WoundTweaks tweaks={tweaks} setTweak={setTweak}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
