// ============================================================
// WOUND — page + intrusion primitives shared across both books.
// ============================================================

// mm → px at 96 dpi
const MM = (v) => v * 3.7795275591;

// Generic page frame. side = "recto" | "verso".
// On verso the spine sits on the right and outer is left (margins flip).
function Page({
  book,                 // "chen" | "alan" | "interlude"
  side = "recto",
  showTexture = true,
  showWatermark = false,
  marginTop = 13,
  marginBot = 16,
  marginOut = 22,
  marginSpine = 18,
  runHead = null,
  pageNum = null,
  coordStamp = null,
  label = null,
  dataAttrs = {},
  footnotes = null,     // optional <FinderFootnotes> — rendered inside content as a flex child
  children,
}) {
  const isVerso = side === "verso";
  const left  = isVerso ? marginOut   : marginSpine;
  const right = isVerso ? marginSpine : marginOut;

  return (
    <div
      className={`page page--${book}`}
      data-screen-label={label}
      {...dataAttrs}
    >
      {showTexture && <div className="page__texture" />}
      {showWatermark && book === "chen" && <div className="page__watermark" />}

      <div
        className="page__content"
        style={{
          top: MM(marginTop),
          bottom: MM(marginBot),
          left: MM(left),
          right: MM(right),
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="page__body" style={{ flex: '0 1 auto', overflow: 'hidden' }}>
          {children}
        </div>
        {footnotes && (
          <div className="page__footnotes-host" style={{ marginTop: 'auto', flex: '0 0 auto' }}>
            {footnotes}
          </div>
        )}
      </div>

      {/* Optional running chrome — suppressed by default in this sample */}
      {runHead && book === "chen" && (
        <div
          className="run-head"
          style={{
            top: MM(6),
            [isVerso ? "left" : "right"]: MM(marginOut),
          }}
        >
          {runHead}
        </div>
      )}
      {pageNum != null && book === "chen" && (
        <div
          className="page-num--chen"
          style={{
            bottom: MM(8),
            [isVerso ? "left" : "right"]: MM(marginOut),
          }}
        >
          — {pageNum} —
        </div>
      )}
      {coordStamp && book === "alan" && (
        <div
          className="coord-stamp"
          style={{ top: MM(6), left: MM(isVerso ? marginOut : marginSpine) }}
        >
          {coordStamp}
        </div>
      )}
      {pageNum != null && book === "alan" && (
        <div
          className="coord-stamp"
          style={{ bottom: MM(8), left: MM(isVerso ? marginOut : marginSpine) }}
        >
          {String(pageNum).padStart(3, "0")}
        </div>
      )}
    </div>
  );
}

// Spread = a verso + recto side-by-side. Pure layout.
function Spread({ id, label, children }) {
  return (
    <div
      className="spread"
      data-screen-label={label}
      data-spread-id={id}
      style={{ display: "flex", width: 1056, height: 816 }}
    >
      {children}
    </div>
  );
}

// ── Inline mech term (font change only) ──────────────────────
function Mech({ children }) {
  return <span className="mech-term">{children}</span>;
}

// ── Chen — body, mechanics ───────────────────────────────────
function ChenBody({ columns = 2, dropcap = false, style, children }) {
  return (
    <div
      className={"el-body" + (columns === 2 ? " el-body--two-col" : "") + (dropcap ? " el-dropcap" : "")}
      style={style}
    >
      {children}
    </div>
  );
}
function ChenMech({ children, style }) {
  return <div className="el-mechanical" style={style}>{children}</div>;
}

// Chen's chapter opener block (no body; pair with prose below if needed).
function ChenChapterHead({ icon, number, title, epigraph, epigraphBy }) {
  return (
    <div style={{ textAlign: "center", paddingTop: MM(14) }}>
      <img src={icon} alt="" style={{ width: MM(28), height: MM(28), display: "block", margin: `0 auto ${MM(6)}px` }} />
      <div style={{
        fontFamily: "var(--ff-serif-body)",
        fontStyle: "italic",
        fontSize: "10.5pt",
        color: "var(--el-faded)",
        fontVariant: "small-caps",
        letterSpacing: "0.14em",
        marginBottom: MM(2),
      }}>Chapter {number}</div>
      <h1 className="el-h1" style={{ marginBottom: MM(5) }}>{title}</h1>
      <img src="assets/chen-chapter-rule.svg" alt=""
           style={{ width: MM(70), height: "auto", display: "block", margin: `0 auto ${MM(8)}px` }} />
      {epigraph && (
        <div style={{ maxWidth: MM(74), margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--ff-serif-body)",
            fontStyle: "italic",
            fontSize: "10pt",
            lineHeight: 1.45,
            color: "var(--el-ink)",
            textAlign: "center",
          }}>"{epigraph}"</div>
          {epigraphBy && (
            <div style={{
              fontFamily: "var(--ff-serif-body)",
              fontStyle: "italic",
              fontSize: "8.5pt",
              color: "var(--el-faded)",
              marginTop: MM(3),
              textAlign: "center",
              fontVariant: "small-caps",
              letterSpacing: "0.12em",
            }}>{epigraphBy}</div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Alan — body, mechanics, chapter head ────────────────────
function AlanBody({ children, style }) {
  return <div className="al-body" style={style}>{children}</div>;
}
function AlanMech({ children, style }) {
  return <div className="al-mechanical" style={style}>{children}</div>;
}
function AlanRule() { return <div className="al-rule" aria-hidden /> ; }

function AlanChapterHead({ entry, sub, coord }) {
  return (
    <div className="al-chapter-block">
      <div className="al-chapter-block__pre">{coord}</div>
      <h1 className="al-h1">
        ENTRY_{String(entry).padStart(3, "0")}<br />
        {sub}
      </h1>
      <div className="al-chapter-block__rule" />
    </div>
  );
}

// ── Intrusions ───────────────────────────────────────────────

// Alan into Chen — handwritten Caveat OR italic Garamond (tier 1).
function AlanIntrusion({ top, side = "right", outset = -10, rotate = -2, width = 58, tier = 2, signed = "—AR", children }) {
  const positionProp = side === "right" ? "right" : "left";
  if (tier === 1) {
    // Italic Garamond margin note attributed —AR.
    return (
      <div style={{
        position: "absolute",
        top: MM(top),
        [positionProp]: MM(outset),
        width: MM(width),
        fontFamily: "var(--ff-serif-body)",
        fontStyle: "italic",
        fontSize: "9pt",
        lineHeight: 1.3,
        color: "var(--el-annotation)",
        borderLeft: side === "right" ? "0.4pt solid var(--el-annotation)" : "none",
        borderRight: side === "left" ? "0.4pt solid var(--el-annotation)" : "none",
        paddingLeft: side === "right" ? MM(2) : 0,
        paddingRight: side === "left" ? MM(2) : 0,
        zIndex: 50,
      }}>
        {children}
        {signed && (
          <div style={{ textAlign: "right", marginTop: MM(1), fontStyle: "italic" }}>{signed}</div>
        )}
      </div>
    );
  }
  // Tier 2 — handwriting on a dark void rectangle.
  return (
    <div style={{
      position: "absolute",
      top: MM(top),
      [positionProp]: MM(outset),
      width: MM(width),
      background: "rgba(13, 15, 18, 0.92)",
      color: "var(--al-ghost)",
      fontFamily: "var(--ff-hand)",
      fontSize: "13pt",
      lineHeight: 1.15,
      padding: `${MM(3)}px ${MM(5)}px`,
      transform: `rotate(${rotate}deg)`,
      boxShadow: "0 2px 6px rgba(13,15,18,0.3)",
      zIndex: 50,
    }}>
      {children}
      {signed && (
        <div style={{ textAlign: "right", marginTop: MM(2), fontSize: "11pt", opacity: 0.85 }}>{signed}</div>
      )}
    </div>
  );
}

// Chen's own marginalia in her own book — Caveat, warm brown.
function ChenMarginalia({ top, side = "right", outset = -16, rotate = -1.5, width = 36, children }) {
  const positionProp = side === "right" ? "right" : "left";
  return (
    <div style={{
      position: "absolute",
      top: MM(top),
      [positionProp]: MM(outset),
      maxWidth: MM(width),
      fontFamily: "var(--ff-hand)",
      fontSize: "12pt",
      lineHeight: 1.18,
      color: "var(--el-annotation)",
      transform: `rotate(${rotate}deg)`,
      zIndex: 50,
    }}>
      {children}
    </div>
  );
}

// Chen into Alan — warm parchment "taped" onto void.
// Tier 1 fallback: italic Plex Mono margin note (no parchment block).
function ChenIntrusion({ top, side = "right", outset = -8, rotate = 1.5, width = 64, tier = 2, header = "Dr. Eleanor Chen // [DATE UNKNOWN]", children }) {
  const positionProp = side === "right" ? "right" : "left";
  if (tier === 1) {
    return (
      <div style={{
        position: "absolute",
        top: MM(top),
        [positionProp]: MM(outset),
        width: MM(width),
        fontFamily: "var(--ff-mono)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "8.5pt",
        lineHeight: 1.4,
        color: "var(--al-typewriter)",
        borderLeft: side === "right" ? "0.4pt solid var(--al-typewriter)" : "none",
        borderRight: side === "left" ? "0.4pt solid var(--al-typewriter)" : "none",
        paddingLeft: side === "right" ? MM(2) : 0,
        paddingRight: side === "left" ? MM(2) : 0,
        zIndex: 50,
      }}>
        <div style={{ fontSize: "7pt", fontStyle: "normal", color: "var(--al-steel)", marginBottom: MM(1), letterSpacing: "0.04em" }}>
          {header}
        </div>
        {children}
      </div>
    );
  }
  return (
    <div style={{
      position: "absolute",
      top: MM(top),
      [positionProp]: MM(outset),
      width: MM(width),
      background: "var(--el-parchment)",
      color: "var(--el-forest)",
      fontFamily: "var(--ff-mono)",
      fontSize: "9pt",
      lineHeight: 1.35,
      padding: `${MM(4)}px ${MM(6)}px`,
      transform: `rotate(${rotate}deg)`,
      boxShadow: "2px 3px 8px rgba(13, 15, 18, 0.45)",
      zIndex: 50,
    }}>
      <div style={{
        fontFamily: "var(--ff-mono)",
        fontWeight: 300,
        fontSize: "7pt",
        color: "var(--al-steel)",
        marginBottom: MM(2),
        letterSpacing: "0.04em",
      }}>{header}</div>
      {children}
    </div>
  );
}

// Floating Alan fragment — typewriter on void, rotated.
function AlanFragment({ top, left, right, rotate = 0, size = 10, color = "var(--al-typewriter)", weight = 300, children }) {
  return (
    <div style={{
      position: "absolute",
      top: MM(top),
      ...(left != null ? { left: MM(left) } : {}),
      ...(right != null ? { right: MM(right) } : {}),
      fontFamily: "var(--ff-mono)",
      fontWeight: weight,
      fontSize: `${size}pt`,
      color,
      transform: `rotate(${rotate}deg)`,
      zIndex: 50,
      whiteSpace: "nowrap",
    }}>
      {children}
    </div>
  );
}

// Zaaken theorem block — shared on either page.
function Zaaken({ children, style }) {
  return <div className="zaaken" style={style}>{children}</div>;
}

// ── CTH glyphs (round 3 art layer) ───────────────────────────────────
// Each glyph is an SVG in assets/glyphs/concept_NAME.svg (or atom_…, sigil_, dialect_).
// Render with `currentColor` stroke so the parent context picks the hex.
function Glyph({
  name,                       // canonical glyph name: 'anchor', 'memory', 'paradox', etc.
  kind = 'concept',           // 'concept' | 'atom' | 'sigil' | 'dialect'
  faction = null,             // 'authority' | 'church' | 'scionfall' | 'chronoclast' (for dialect)
  size = 'inline',            // 'sigil' | 'section' | 'inline' | 'ghost'
  stage = 0,                  // 0-3 (only PARADOX/MEMORY/ANCHOR escalate)
  late = false,               // late-insertion ghost glyph (Act V on early pages)
  className = '',
  style = {},
}) {
  const family = faction ? 'dialect' : kind;
  // Master sigil variants
  const sigilVariant = name === 'severed' ? 'sigil_master_severed'
    : name === 'with-memory' ? 'sigil_master_with_memory'
    : 'sigil_master';
  const file = faction
    ? `assets/glyphs/dialect_${faction}_psi.svg`   // dialects only ship for psi in the kit
    : kind === 'sigil'
      ? `assets/glyphs/${sigilVariant}.svg`
      : `assets/glyphs/${kind}_${name}.svg`;
  const cls = [
    'gly',
    `gly--${size}`,
    stage ? `gly--stage${stage}` : '',
    late ? 'gly--late-insertion' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} style={style} aria-hidden>
      <img src={file} alt="" />
    </span>
  );
}

// Inline footnote marker placed in body text. Companion <FinderFootnotes>
// at page bottom renders the matching note.
function FootnoteMarker({ n, act = 1 }) {
  return <span className={`fn-mark fn-mark--act${act}`}>*</span>;
}

// Page-bottom Finder footnotes block. Receives an array of {n, text, act, late}.
function FinderFootnotes({ notes }) {
  if (!notes || !notes.length) return null;
  return (
    <div className="page__footnotes" aria-label="Finder footnotes">
      <ol>
        {notes.map(note => {
          // Caveat-mix increases gradually through Act V
          const caveatStep = note.act === 5
            ? Math.min(100, Math.round(((note.n - 49) / 11) * 100))
            : 0;
          const caveatBucket = caveatStep >= 75 ? 'caveat-100'
            : caveatStep >= 50 ? 'caveat-75'
            : caveatStep >= 25 ? 'caveat-50'
            : caveatStep > 0 ? 'caveat-25'
            : null;
          const cls = [
            `fnote--act${note.act}`,
            note.late ? 'fnote--late' : '',
            caveatBucket ? `fnote--${caveatBucket}` : '',
          ].filter(Boolean).join(' ');
          return (
            <li key={note.n} className={cls}>{note.text}</li>
          );
        })}
      </ol>
    </div>
  );
}

// ── Inline marginalia / intrusion shorthand (generator-friendly) ─────
// These follow document flow and are styled by class, not absolutely positioned.

// Chen's own marginalia, inline. Caveat, warm brown, slight rotation.
function ChenMarginaliaInline({ children }) {
  return <aside className="el-marg-inline">{children}<div className="el-marg-inline__sign">— EC</div></aside>;
}

// Alan intruding into Chen's pages, inline. Two tiers (italic margin / handwritten).
function AlanIntrusionInline({ tier = 2, children }) {
  if (tier === 1) {
    return <aside className="el-alan-inline el-alan-inline--italic">{children}<div className="el-alan-inline__sign">— AR</div></aside>;
  }
  return <aside className="el-alan-inline el-alan-inline--hand">{children}<div className="el-alan-inline__sign">—AR</div></aside>;
}

// Resolution-roll block: one or more rows like 10+ / 7-9 / 6- with their outcomes.
// Generator can emit this when it detects the pattern.
function ResolutionBlock({ host = 'chen', rows = [], children }) {
  const isChen = host === 'chen';
  return (
    <div className={isChen ? "el-resolution" : "al-resolution"}>
      {rows.length > 0 ? rows.map((r, i) => (
        <div className="resolution-row" key={i}>
          <div className="resolution-roll">{r.range}</div>
          <div className="resolution-body">
            {r.title && <div className="resolution-title">{r.title}</div>}
            <div className="resolution-text">{r.text}</div>
          </div>
        </div>
      )) : children}
    </div>
  );
}

Object.assign(window, {
  MM, Page, Spread,
  Mech,
  ChenBody, ChenMech, ChenChapterHead, ChenMarginalia, ChenMarginaliaInline,
  AlanBody, AlanMech, AlanRule, AlanChapterHead, AlanFragment,
  AlanIntrusion, AlanIntrusionInline, ChenIntrusion,
  ResolutionBlock,
  Glyph, FootnoteMarker, FinderFootnotes,
  Zaaken,
});
