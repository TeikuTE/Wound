function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chen-7 — ADVANCED SYSTEMS
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
    id: "chen-7-opener",
    label: "ADVANCED SYSTEMS · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "ADVANCED SYSTEMS \xB7 opener"
  }, /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-broken-compass.svg",
    number: "VII",
    title: "Advanced Systems"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-7-02",
    label: "ADVANCED SYSTEMS · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Advanced Systems",
    pageNum: basePage + 2,
    label: `ADVANCED SYSTEMS · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE HOLDING ACTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body el-dropcap",
    "data-firstpara": true
  }, /*#__PURE__*/React.createElement("p", null, inline(`Once per session, when you would suffer a consequence you cannot afford to bear in this scene, you may declare the Holding Action. The consequence does not vanish. It defers — by exactly one scene, no longer.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Holding Action is not a tool. It is a refusal. You are telling the timeline that this is not the right moment. The timeline accepts this once. It does not forget you asked. The deferred consequence will arrive, intensified, in the scene that follows. You buy yourself the room to handle it on better ground; you do not avoid handling it.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Holding Action cannot be repeated until you have completed a Repreival.* *I have used the Holding Action twice in fifteen years. Once it saved someone. Once it cost me the person I used it to save. I will not tell you which was which. — EC`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Reducing Paradox`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`STABILIZE REALITY MOVE (2 COHERENCE)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Spend 2 Coherence, then roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + SYNC or OBSERVE:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-resolution"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `10+`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Reduce Paradox by `), /*#__PURE__*/React.createElement("b", null, inline(`1d6`)), inline(`.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `7-9`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Reduce Paradox by `), /*#__PURE__*/React.createElement("b", null, inline(`1d3`)), inline(`.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `6-`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`No reduction`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`But you don't generate more.`)))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Advanced Systems",
    pageNum: basePage + 3,
    label: `ADVANCED SYSTEMS · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`OTHER METHODS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Accept Memory alterations (let false memories replace true ones): -1`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Paradox per major alteration`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Work to undo changes you caused`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Spend time in an era without interference during Downtime`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Accept Faction offers from Church or Authority`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Anchor Reinforcement`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`REINFORCE ANCHOR MOVE (2 COHERENCE + ROLL)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Spend 2 Coherence and spend time connecting to your origin — meditation, ritual, reading your Chronicle aloud. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + ENDURE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-resolution"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `12+`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Anchor Strength increases by 1 (max 5)`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Gain +2 Coherence.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `10-11`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Anchor Strength increases by 1 (max 5).`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `7-9`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Anchor stabilizes but doesn't increase.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `6-`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`The memory was a lie`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Decrease Anchor Strength by 1.`))))), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Why two different stats? Downtime maintenance uses SYNC because you are reconnecting emotionally — revisiting the people and places that anchor your waveform. The standalone Reinforce move uses ENDURE because you are rebuilding the connection rather than visiting it. One is memory. The other is labor. The distinction matters in the same way the distinction between reading about a country and walking through it matters.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-7-03",
    label: "ADVANCED SYSTEMS · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Advanced Systems",
    pageNum: basePage + 4,
    label: `ADVANCED SYSTEMS · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ANCHOR STRENGTH LOSS TRIGGERS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Outside of the Reinforce Anchor move, your Anchor Strength can decrease when:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`An Identity Crisis resolves at `), /*#__PURE__*/React.createElement("b", null, inline(`10-11`)), inline(` (Anchor restored to 1, but any`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Strength above that is gone)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A Faction Agent's Imposed consequence specifically targets your Anchor.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Anchor (this is rare; it will be stated explicitly when it occurs)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You voluntarily sever an Anchor Connection to gain a mechanical benefit — when you burn the last real thing tethering you to your origin, the cost is permanent.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`origin for short-term survival, the Anchor notices`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You complete The Return and choose Return Changed — your Anchor binds permanently, but at whatever Strength it was when you arrived`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Anchor Strength does not decrease passively. It decreases when you make a choice that costs you your origin. I have watched Echoes give it away in installments small enough that they did not register the transaction until the Anchor was gone.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Asset Management`))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Advanced Systems",
    pageNum: basePage + 5,
    label: `ADVANCED SYSTEMS · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ASSET EVOLUTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Assets can improve with use (Levels 1-3). To advance an Asset:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Asset must be referenced in 3 significant Chronicle entries`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Spend 3 Coherence`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Spend a Downtime move`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Provide narrative justification for the growth`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Effect: increase the Asset bonus (+1 →+2 →+3), OR gain an additional capability, OR increase Stress capacity (3 →4 →5 boxes).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`LEVEL REQUIREMENTS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Level 2 requires Anchor Strength `), /*#__PURE__*/React.createElement("b", null, inline(`2+`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Level 3 requires Anchor Strength `), /*#__PURE__*/React.createElement("b", null, inline(`4+`)))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ACQUIRING NEW ASSETS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You start with 2 Assets. During a campaign, you may gain additional Asset slots (up to a maximum of 5 total) through significant narrative events — recovering lost Chrono-Tech in the field, forging a bond with an NPC that crystallizes into a Persistent Connection, or unlocking a new Echo Trait after surviving a Crisis.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Mechanical cost: spend 5 Coherence during Downtime and write a Chronicle entry that justifies the acquisition — what happened, what changed, why this Asset now exists in your world. The new Asset begins at Level 1 with 3 Stress boxes.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Alternatively, a Faction Agent may offer a new Asset as part of a trade — usually unstable, usually with a catch, always tempting.`))), /*#__PURE__*/React.createElement(AlanIntrusionInline, {
    tier: tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Five Coherence is a lot. That's the point. You want a new toy, pay for it. The Chronoverse doesn't give things away.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-7-04",
    label: "ADVANCED SYSTEMS · spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Advanced Systems",
    pageNum: basePage + 6,
    label: `ADVANCED SYSTEMS · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Assets take damage from critical failures when using them, high Paradox effects, direct attacks, environmental hazards, and temporal Crises.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`To repair, roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE (for Chrono-Tech) or ENDURE (for Echo Traits):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Clear all Stress. Asset functions perfectly.`))), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    className: "col-num"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-name"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-desc"
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `7-9`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, ``), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Clear 2 Stress.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Clear 1 Stress. Mark +1 Paradox.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Repair requires Downtime and a narrative explanation of the work.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Downtime Moves Reference`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`After resolving a major situation or before forced Displacement, choose `), /*#__PURE__*/React.createElement("b", null, inline(`1-2`)), inline(`:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Rest & Recover: restore +2 Coherence, clear 1 Stress from all Assets`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Repair Asset: see Asset Repair rules above`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Study Era: immerse in the current time period, create a new Memory related to its culture or technology`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Reinforce Anchor: see Anchor Reinforcement above`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Reduce Paradox: see Stabilize Reality Move above`))), /*#__PURE__*/React.createElement(Zaaken, null, /*#__PURE__*/React.createElement("i", null, inline(`Ludum longum lude.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Advanced Systems",
    pageNum: basePage + 7,
    label: `ADVANCED SYSTEMS · p.${basePage + 7}`
  })));
}
ChenCh7.pages = 8;
Object.assign(window, {
  ChenCh7
});
