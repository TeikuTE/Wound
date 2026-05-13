function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chapter/chen ch7 — ADVANCED SYSTEMS
function ChenCh7({
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
    id: "chen-7-01",
    label: "ADVANCED SYSTEMS \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "Chen Ch 7 \xB7 Opener"
  }, /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-broken-compass.svg",
    number: "VII",
    title: "Advanced Systems"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-7-02",
    label: "ADVANCED SYSTEMS \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Advanced Systems",
    pageNum: basePage + 2,
    label: `Chen · ADVANCED SYSTEMS · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "THE HOLDING ACTION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Once per session, when you would suffer a consequence you cannot afford to bear in this scene, you may declare the Holding Action. The consequence does not vanish. It defers — by exactly one scene, no longer. The Holding Action is not a tool. It is a refusal. You are telling the timeline that this is not the right moment. The timeline accepts this once. It does not forget you asked. The deferred consequence will arrive, intensified, in the scene that follows. You buy yourself the room to handle it on better ground; you do not avoid handling it. The Holding Action cannot be repeated until you have completed a Repreival.* [CHEN] *I have used the Holding Action twice in fifteen years. Once it saved someone. Once it cost me the person I used it to save. I will not tell you which was which. — EC Reducing Paradox`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "STABILIZE REALITY MOVE (2 COHERENCE)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Spend 2 Coherence, then roll 2d6 + SYNC or OBSERVE:`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "OTHER METHODS"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Accept Memory alterations (let false memories replace true ones): -1 Paradox per major alteration Work to undo changes you caused Spend time in an era without interference during Downtime **10+** Reduce Paradox by **1d6**. **7-9** Reduce Paradox by **1d3**. **6-** No reduction. But you don't generate more.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Advanced Systems",
    pageNum: basePage + 3,
    label: `Chen · ADVANCED SYSTEMS · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Accept Faction offers from Church or Authority Anchor Reinforcement REINFORCE ANCHOR MOVE (2 COHERENCE + ROLL) Spend 2 Coherence and spend time connecting to your origin — meditation, ritual, reading your Chronicle aloud. Roll 2d6 + ENDURE (Difficulty 10):`))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4mm 0',
      paddingLeft: '5mm',
      borderLeft: '0.5pt solid var(--el-gold)',
      fontStyle: 'italic',
      fontFamily: 'var(--ff-serif-body)',
      fontSize: '9.5pt',
      lineHeight: 1.4,
      color: 'var(--el-annotation)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, inline(`Why two different stats? Downtime maintenance uses SYNC because you are reconnecting emotionally — revisiting the people and places that anchor your waveform. The standalone Reinforce move uses ENDURE because you are rebuilding the connection rather than visiting it. One is memory. The other is labor. The distinction matters in the same way the distinction between reading about a country and walking through it matters.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "ANCHOR STRENGTH LOSS TRIGGERS"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Outside of the Reinforce Anchor move, your Anchor Strength can decrease when: An Identity Crisis resolves at 10-11 (Anchor restored to 1, but any Strength above that is gone) A Faction Agent's Imposed consequence specifically targets your Anchor (this is rare; it will be stated explicitly when it occurs) You voluntarily sever an Anchor Connection to gain a mechanical benefit — when you burn the last real thing tethering you to your origin for short-term survival, the Anchor notices You complete The Return and choose Return Changed — your Anchor binds **12+** Anchor Strength increases by 1 (max 5). Gain +2 Coherence. **10-11** Anchor Strength increases by 1 (max 5). **7-9** Anchor stabilizes but doesn't increase. **6-** The memory was a lie. Decrease Anchor Strength by 1.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-7-03",
    label: "ADVANCED SYSTEMS \xB7 spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Advanced Systems",
    pageNum: basePage + 4,
    label: `Chen · ADVANCED SYSTEMS · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`permanently, but at whatever Strength it was when you arrived`))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4mm 0',
      paddingLeft: '5mm',
      borderLeft: '0.5pt solid var(--el-gold)',
      fontStyle: 'italic',
      fontFamily: 'var(--ff-serif-body)',
      fontSize: '9.5pt',
      lineHeight: 1.4,
      color: 'var(--el-annotation)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, inline(`Anchor Strength does not decrease passively. It decreases when you make a choice that costs you your origin. I have watched Echoes give it away in installments small enough that they did not register the transaction until the Anchor was gone.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Asset Management`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "ASSET EVOLUTION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Assets can improve with use (Levels 1-3). To advance an Asset: The Asset must be referenced in 3 significant Chronicle entries Spend 3 Coherence Spend a Downtime move Provide narrative justification for the growth Effect: increase the Asset bonus (+1 →+2 →+3), OR gain an additional capability, OR increase Stress capacity (3 →4 →5 boxes).`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "LEVEL REQUIREMENTS"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Level 2 requires Anchor Strength 2+ Level 3 requires Anchor Strength 4+`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "ACQUIRING NEW ASSETS"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`You start with 2 Assets. During a campaign, you may gain additional Asset slots (up to a maximum of 5 total) through significant narrative events — recovering lost Chrono-Tech in the field, forging a bond with an NPC that crystallizes into a Persistent Connection, or unlocking a new Echo Trait after surviving a Crisis. Mechanical cost: spend 5 Coherence during Downtime and write a Chronicle entry that justifies the acquisition — what happened, what changed, why this Asset now exists in your world. The new Asset begins at Level 1 with 3 Stress boxes. Alternatively, a Faction Agent may offer a new Asset as part of a trade — usually unstable, usually with a catch, always tempting.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Advanced Systems",
    pageNum: basePage + 5,
    label: `Chen · ADVANCED SYSTEMS · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Assets take damage from critical failures when using them, high Paradox effects, direct attacks, environmental hazards, and temporal Crises. To repair, roll 2d6 + OBSERVE (for Chrono-Tech) or ENDURE (for Echo Traits): 10+ Clear all Stress. Asset functions perfectly. 7-9 Clear 2 Stress. 6- Clear 1 Stress. Mark +1 Paradox. Repair requires Downtime and a narrative explanation of the work. Downtime Moves Reference After resolving a major situation or before forced Displacement, choose 1-2: Rest & Recover: restore +2 Coherence, clear 1 Stress from all Assets Repair Asset: see Asset Repair rules above Study Era: immerse in the current time period, create a new Memory related to its culture or technology Reinforce Anchor: see Anchor Reinforcement above Reduce Paradox: see Stabilize Reality Move above Ludum longum lude.`))), /*#__PURE__*/React.createElement(AlanIntrusion, {
    top: 25,
    side: "right",
    outset: -10,
    rotate: -1.50,
    width: 58,
    tier: tier
  }, "Five Coherence is a lot. That's the point. You want a new toy, pay for it. The Chronoverse doesn't give things away."))));
}
ChenCh7.pages = 6;
Object.assign(window, {
  ChenCh7
});