// ============================================================
// WOUND — Full Book Spread Viewer
// ============================================================

const {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo
} = React;

// Tweak defaults — persisted by the host through the EDITMODE block.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "chenBody": "garamond",
  "intrusionTier": 2,
  "showChrome": true
} /*EDITMODE-END*/;

// ── Chapter order ──────────────────────────────────────────
// Each entry: { fn, section, label, num }
const CHAPTER_ORDER = [{
  fn: () => FrontMatter,
  section: "front",
  label: "Front Matter"
}, {
  fn: () => ChenCh1,
  section: "chen",
  label: "Ch I · Understanding",
  num: 1
}, {
  fn: () => ChenCh2,
  section: "chen",
  label: "Ch II · Excavating Your Echo",
  num: 2
}, {
  fn: () => ChenCh3,
  section: "chen",
  label: "Ch III · A Session of Play",
  num: 3
}, {
  fn: () => ChenCh4,
  section: "chen",
  label: "Ch IV · Core Resolution",
  num: 4
}, {
  fn: () => ChenCh5,
  section: "chen",
  label: "Ch V · Memory Management",
  num: 5
}, {
  fn: () => ChenCh6,
  section: "chen",
  label: "Ch VI · Crisis Management",
  num: 6
}, {
  fn: () => ChenCh7,
  section: "chen",
  label: "Ch VII · Advanced Systems",
  num: 7
}, {
  fn: () => ChenCh8,
  section: "chen",
  label: "Ch VIII · Long-Term Play",
  num: 8
}, {
  fn: () => PlayingBothInterlude,
  section: "interlude",
  label: "Interlude · Playing Both"
}, {
  fn: () => AlanCh1,
  section: "alan",
  label: "Entry 001 · After the Tutorial",
  num: 1
}, {
  fn: () => AlanCh2,
  section: "alan",
  label: "Entry 002 · Calibration",
  num: 2
}, {
  fn: () => AlanCh3,
  section: "alan",
  label: "Entry 003 · Operational",
  num: 3
}, {
  fn: () => AlanCh4,
  section: "alan",
  label: "Entry 004 · Faction Pressure",
  num: 4
}, {
  fn: () => AlanCh5,
  section: "alan",
  label: "Entry 005 · Fracture Events",
  num: 5
}, {
  fn: () => AlanCh6,
  section: "alan",
  label: "Entry 006 · Terminal Configurations",
  num: 6
}, {
  fn: () => AppendixB,
  section: "appendix",
  label: "Appendix B · Asset Catalogs"
}, {
  fn: () => AppendixC,
  section: "appendix",
  label: "Appendix C · Oracle Tables"
}, {
  fn: () => AppendixD,
  section: "appendix",
  label: "Appendix D · The Factions"
}, {
  fn: () => AppendixD1,
  section: "appendix",
  label: "Appendix D.1 · Field Intelligence"
}, {
  fn: () => AppendixE,
  section: "appendix",
  label: "Appendix E · Captivity Vignettes"
}, {
  fn: () => AppendixF,
  section: "appendix",
  label: "Appendix F · Examples of Play"
}, {
  fn: () => AppendixG,
  section: "appendix",
  label: "Appendix G · Temporal Pathologies"
}, {
  fn: () => AppendixH,
  section: "appendix",
  label: "Appendix H · The Saul Files"
}, {
  fn: () => BM_quick_reference_sheet,
  section: "appendix",
  label: "Quick Reference Sheet"
}];

// ── Build the linear spread list with global page numbering ─
function buildSpreadList(tweaks) {
  const items = [];
  let basePage = 1;
  for (const ch of CHAPTER_ORDER) {
    const Comp = ch.fn();
    const frag = Comp({
      tweaks,
      basePage
    });
    const spreads = React.Children.toArray(frag.props.children);
    spreads.forEach((el, i) => {
      items.push({
        section: ch.section,
        chapter: ch.label,
        chapterNum: ch.num,
        idx: i,
        of: spreads.length,
        el
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
function ViewerBar({
  index,
  total,
  current
}) {
  const sectionLabel = {
    front: "Front Matter",
    chen: "Book 1 · Temporal Echoes",
    interlude: "Interlude",
    alan: "Book 2 · emiT",
    appendix: "Appendices"
  }[current.section] || current.section;
  return /*#__PURE__*/React.createElement("div", {
    className: "viewer-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "viewer-bar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/wound-sigil.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "WOUND \xB7 V12 \xB7 Full Book")), /*#__PURE__*/React.createElement("div", {
    className: "viewer-bar__progress"
  }, /*#__PURE__*/React.createElement("span", null, sectionLabel), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, current.chapter), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "spread ", /*#__PURE__*/React.createElement("strong", null, index + 1), " / ", total)));
}
function ViewerTOC({
  items,
  index,
  onJump
}) {
  // Group by chapter so the TOC stays compact.
  const groups = [];
  let last = null;
  items.forEach((it, i) => {
    if (!last || last.chapter !== it.chapter) {
      last = {
        chapter: it.chapter,
        section: it.section,
        start: i,
        count: 1
      };
      groups.push(last);
    } else last.count++;
  });

  // Render as compact section bands. Each section can collapse to dots-only.
  const [open, setOpen] = useState(null); // section key currently expanded; null = none
  const sectionGroups = {};
  for (const g of groups) {
    (sectionGroups[g.section] = sectionGroups[g.section] || []).push(g);
  }
  const sectionTitle = s => ({
    front: "Front",
    chen: "I",
    interlude: "Inter",
    alan: "II",
    appendix: "Apx"
  })[s] || s;
  return /*#__PURE__*/React.createElement("nav", {
    className: "viewer-toc",
    "aria-label": "Spread navigation"
  }, ["front", "chen", "interlude", "alan", "appendix"].map(sec => {
    const grps = sectionGroups[sec];
    if (!grps) return null;
    const start = grps[0].start;
    const end = grps[grps.length - 1].start + grps[grps.length - 1].count - 1;
    const active = index >= start && index <= end;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: sec
    }, /*#__PURE__*/React.createElement("span", {
      className: `viewer-toc__seg viewer-toc__seg--${sec} ${active ? "active" : ""}`,
      onClick: () => onJump(start)
    }, sectionTitle(sec)), /*#__PURE__*/React.createElement("span", {
      className: "viewer-toc__dots"
    }, grps.map(g => {
      // Each chapter = one big dot. Active highlight if index lies in chapter.
      const grpActive = index >= g.start && index < g.start + g.count;
      return /*#__PURE__*/React.createElement("button", {
        key: g.start,
        className: `viewer-toc__dot viewer-toc__dot--${g.section} ${grpActive ? "active" : ""}`,
        "aria-label": `Go to ${g.chapter}`,
        title: g.chapter,
        onClick: () => onJump(g.start)
      });
    })), sec !== "appendix" && /*#__PURE__*/React.createElement("span", {
      className: "viewer-toc__sep"
    }, "\xB7"));
  }));
}

// ── Tweaks panel ────────────────────────────────────────────
function WoundTweaks({
  tweaks,
  setTweak
}) {
  return /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Intrusions \u2014 cross-book defacement"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Fidelity",
    value: tweaks.intrusionTier,
    options: [{
      value: 1,
      label: "Italic —AR"
    }, {
      value: 2,
      label: "Handwritten"
    }],
    onChange: v => setTweak("intrusionTier", v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Chen \u2014 body type"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Body family",
    value: tweaks.chenBody,
    options: [{
      value: "garamond",
      label: "Garamond"
    }, {
      value: "cormorant",
      label: "Cormorant"
    }, {
      value: "sourceserif",
      label: "Source"
    }],
    onChange: v => setTweak("chenBody", v)
  })));
}

// ── Print mode: render every spread stacked, with page-break-after ───
function PrintApp({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "print-doc"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "print-spread",
    key: i
  }, it.el)));
}

// ── Main app ────────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const items = useMemo(() => buildSpreadList(tweaks), [tweaks]);
  const total = items.length;

  // ?print activates print mode (used by the PDF exporter).
  const isPrint = typeof location !== 'undefined' && /[?&]print(=|&|$)/.test(location.search);
  if (isPrint) return /*#__PURE__*/React.createElement(PrintApp, {
    items: items
  });
  const [index, setIndex] = useState(() => getInitialIndex(total));
  useEffect(() => {
    history.replaceState(null, "", `#${index}`);
    window.postMessage({
      slideIndexChanged: index
    }, "*");
  }, [index]);
  const goPrev = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setIndex(i => Math.min(total - 1, i + 1)), [total]);
  useEffect(() => {
    const onKey = e => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "Home") {
        e.preventDefault();
        setIndex(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        setIndex(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, total]);
  const scale = useFitScale(1056, 816, 80);
  const current = items[index] || items[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "desk"
  }, /*#__PURE__*/React.createElement(ViewerBar, {
    index: index,
    total: total,
    current: current
  }), /*#__PURE__*/React.createElement("button", {
    className: "viewer-nav-arrow viewer-nav-arrow--prev",
    onClick: goPrev,
    disabled: index === 0,
    "aria-label": "Previous spread"
  }, "\u25C0"), /*#__PURE__*/React.createElement("button", {
    className: "viewer-nav-arrow viewer-nav-arrow--next",
    onClick: goNext,
    disabled: index === total - 1,
    "aria-label": "Next spread"
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    className: "spread-stage",
    style: {
      transform: `scale(${scale})`
    }
  }, current.el), /*#__PURE__*/React.createElement(ViewerTOC, {
    items: items,
    index: index,
    onJump: setIndex
  }), /*#__PURE__*/React.createElement(WoundTweaks, {
    tweaks: tweaks,
    setTweak: setTweak
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
