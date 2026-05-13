function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chapter/chen ch8 — LONG-TERM PLAY
function ChenCh8({
  tweaks,
  basePage = 1
}) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = {
    "data-body": tweaks.chenBody || "garamond"
  };
  const ChPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "chen",
    dataAttrs: dataAttrs,
    showTexture: true
  }, props));
  const AlPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "alan",
    showTexture: true
  }, props));
  const IlPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "interlude",
    showTexture: false
  }, props));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spread, {
    id: "chen-8-01",
    label: "LONG-TERM PLAY \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "Chen Ch 8 \xB7 Opener"
  }, /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-handless-clock.svg",
    number: "VIII",
    title: "Long-term Play"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-8-02",
    label: "LONG-TERM PLAY \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Long-term Play",
    pageNum: basePage + 2,
    label: `Chen · LONG-TERM PLAY · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4mm 0 1mm',
      fontFamily: "var(--ff-serif-display)",
      fontWeight: 600,
      fontSize: '12pt',
      color: 'var(--el-forest)',
      fontVariant: 'small-caps',
      letterSpacing: '0.08em'
    }
  }, "Campaign Structures Temporal"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Echoes supports several campaign structures. They're not mutually exclusive — your campaign might move between them as circumstances change.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Long-term Play",
    pageNum: basePage + 3,
    label: `Chen · LONG-TERM PLAY · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4mm -2mm',
      background: 'rgba(13,15,18,0.94)',
      color: 'var(--al-ghost)',
      fontFamily: 'var(--ff-hand)',
      fontSize: '13pt',
      lineHeight: 1.25,
      padding: '4mm 6mm',
      transform: 'rotate(-0.6deg)',
      boxShadow: '0 2px 8px rgba(13,15,18,0.35)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Addendum she didn't write: End: Success means discovering home doesn't exist anymore. Failure means staying alive long enough to realize you didn't want to go back anyway. I've met four Echoes who successfully Navigated home. Two dissolved on arrival (temporal rejection). One lasted three days before voluntary Displacement \u2014 couldn't stand what their era had become. The fourth is still there, I think. Last I heard they'd been committed for claiming to be a time traveler. You want to go home? Fine. Here's what you'll find: Everyone you knew is dead or doesn't know you. Your life has been lived by someone else, or never lived at all. The version of you that belonged there is a ghost. And you're the thing haunting it. Chen will help you try. She's good like that. I'm just telling you what you'll wish you'd known after."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '2mm',
      fontSize: '11pt',
      opacity: 0.85
    }
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "THE INVESTIGATOR (15-20 SESSIONS)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Goal: understand the nature of Displacement. Milestones: encounter other Echoes, discover Faction operations, piece together the mechanics of time, reach a major revelation about the origin of displacement. End: understanding achieved — but at what cost?`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "THE WITNESS (OPEN-ENDED)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Goal: document history, preserve what would otherwise be lost. Ongoing play focused on visiting key historical moments, recording events in your Chronicle, meeting historical figures, deciding when and if to intervene. Ends when the Chronicle feels complete, or when memory loss becomes too severe.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "THE SURVIVOR (CRISIS-FOCUSED)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Goal: simply endure as long as possible. High-difficulty mode: start with Anchor Strength 2, forced Displacement every 2-3 scenes, higher Paradox generation. Ends when you finally dissolve, transform, or find unexpected peace. Evolving Threats`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "FACTION ESCALATION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`As Paradox rises, Faction interference increases: Shadow (0-3) — unaware of you. Flux (4-6) — Scouts observe. Anomaly (7-9) — Agents intervene. Breach (10+) — active hunting, capture attempts, violence.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "TIMELINE INSTABILITY"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`The more you interfere, the more unstable your surroundings: anachronisms appearing, people remembering multiple versions of events, physical impossibilities manifesting, other Echoes drawn to your disturbance.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "PERSONAL DEGRADATION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Track the Scars that accumulate. Note the way your personality shifted. What Anchor Connections are still standing? Can you still remember why you wanted to go home? Ending Your Story`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-8-03",
    label: "LONG-TERM PLAY \xB7 spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Long-term Play",
    pageNum: basePage + 4,
    label: `Chen · LONG-TERM PLAY · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "RETURN ACHIEVED"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`You finally reach home. Ask yourself: are you the same person who left? Then choose: Return Intact: you maintain all Memories (even Fading), you return as close to your original self as possible, but you can never leave again — your Anchor binds you permanently. You're home. You're also trapped. And linearity can be painful after displacement. Return Changed: you accept the Mutations and lost Memories, you return as a transformed version of yourself, the people you left behind don't fully recognize you. You're 'home,' but you're a stranger.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "DISSOLUTION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Coherence cannot be restored. Identity too fragmented. Final Chronicle entry: fragments, then silence.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "ACCEPTANCE"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`You choose to stop fighting. You make peace with displacement. You find a new Anchor in an adopted era. Chronicle entry: I was someone else. Now I am this.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "TRANSFORMATION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`You deliberately let go of your origin. You become something new. You retire your Echo to the timestream. Chronicle entry: I remember who I was. I choose to forget.`))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4mm -2mm',
      background: 'rgba(13,15,18,0.94)',
      color: 'var(--al-ghost)',
      fontFamily: 'var(--ff-hand)',
      fontSize: '13pt',
      lineHeight: 1.25,
      padding: '4mm 6mm',
      transform: 'rotate(-0.6deg)',
      boxShadow: '0 2px 8px rgba(13,15,18,0.35)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Chen wrote this chapter in 2038. I checked. She still believed The Return was possible then. She had a route mapped out. She had Anchor reinforcement protocols and a list of likely landing eras and a plan for the first month back. She doesn't write like this anymore. If you reach Chapter 8 and you can still feel her certainty, hold it carefully. It was real once."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '2mm',
      fontSize: '11pt',
      opacity: 0.85
    }
  }, "\u2014AR")), /*#__PURE__*/React.createElement(ChenMarginalia, {
    top: 25,
    side: "left",
    outset: -18,
    rotate: -1.50,
    width: 38
  }, "The game ends when one of the following becomes true. I have no preference among them.")), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    label: "(blank)"
  })));
}
ChenCh8.pages = 5;
Object.assign(window, {
  ChenCh8
});