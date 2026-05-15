function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chen-6 — CRISIS MANAGEMENT
function ChenCh6({
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
    id: "chen-6-opener",
    label: "CRISIS MANAGEMENT · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "CRISIS MANAGEMENT \xB7 opener"
  }, /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-irregular-sine.svg",
    number: "VI",
    title: "Crisis Management"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-6-02",
    label: "CRISIS MANAGEMENT · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Crisis Management",
    pageNum: basePage + 2,
    footnotes: /*#__PURE__*/React.createElement(FinderFootnotes, {
      notes: [{
        "n": 25,
        "text": "Did not open this book today. Found it open on my desk. The ink in the margins on this page is a different color — a deep, bruised purple. Still wet to the touch.",
        "act": 3,
        "late": false
      }]
    }),
    label: `CRISIS MANAGEMENT · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Crises come in three phases.`)), /*#__PURE__*/React.createElement("p", null, inline(`Manifestation is the moment you recognize what is happening. Your chest tightening, the room narrowing. The feeling that the floor is not where you left it. You have a window — small, closing — to act before the body and the timeline both decide for you.`)), /*#__PURE__*/React.createElement("p", null, inline(`Escalation is when the system commits. You can no longer stop the cascade through will alone. You can spend resources to direct it, but that is about it. The water is rising; the question is which way you swim, not whether you can stay dry.`)), /*#__PURE__*/React.createElement("p", null, inline(`Resolution is what is left. You survive or you don't. You return changed or you do not return at all.`)), /*#__PURE__*/React.createElement("p", null, inline(`Three Crises live in this chapter. Each has its own physics. All three feel the same in the first thirty seconds.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`DESYNCHRONIZATION CRISIS (COHERENCE -6)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body el-dropcap",
    "data-firstpara": true
  }, /*#__PURE__*/React.createElement("p", null, inline(`You've lost synchronization with the timestream. Trigger: Coherence drops to -6. Manifestation: roll on the Temporal Anomaly table — reality fractures around you.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PARADOX CRISIS (PARADOX 10+)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Timeline contradictions reach critical mass. Trigger: Paradox reaches 10. Manifestation: roll on the Timeline Collapse table — history rewrites itself.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`IDENTITY CRISIS (ANCHOR STRENGTH 0)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your connection to your origin has severed. Trigger: Anchor Strength drops to 0. Manifestation: you don't know who you are.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Crisis Management",
    pageNum: basePage + 3,
    label: `CRISIS MANAGEMENT · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When your Paradox reaches critical mass, you're not just causing problems. You're creating topological stress in the causal field. Reality can no longer absorb your contradictions smoothly.`)), /*#__PURE__*/React.createElement("p", null, inline(`The most dangerous state isn't when timelines are far apart. It's when they're forced to almost touch, almost reconcile — and can't. That's when reality shatters.`)), /*#__PURE__*/React.createElement("p", null, inline(`A Shattering isn't the timeline breaking. It's topological bifurcation — reality splitting into multiple causally-disjoint eigenstates. The original timeline ceases to exist, replaced by its fractured components.`)), /*#__PURE__*/React.createElement("p", null, inline(`This is survivable with proper Crisis management.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`She never experienced a Shattering. I have. 37 times. I was the Shattering a couple of times.`)), /*#__PURE__*/React.createElement("p", null, inline(`The you reading this has survived at least one Shattering already. You just don't remember the timeline where you didn't make it.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Crisis Resolution Procedure`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PHASE 1: MANIFESTATION`)), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Roll on the appropriate Oracle table.`)), /*#__PURE__*/React.createElement("li", null, inline(`Describe the Crisis erupting.`)), /*#__PURE__*/React.createElement("li", null, inline(`Pay the immediate cost: Desynchronization — mark 1 Asset Stress. Paradox — one Active Memory becomes Fading. Identity — lose access to one Asset temporarily.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PHASE 2: ESCALATION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Crisis intensifies.`))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Roll on the Timeline Shifts Oracle to determine how reality changes.`)), /*#__PURE__*/React.createElement("li", null, inline(`Roll on the Action Oracle to determine a crucial action required.`)), /*#__PURE__*/React.createElement("li", null, inline(`Apply escalating pressure: Desynchronization — temporal displacement becomes uncontrollable. Paradox — reality fluctuations create direct danger. Identity — fragmentation intensifies.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-6-03",
    label: "CRISIS MANAGEMENT · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Crisis Management",
    pageNum: basePage + 4,
    label: `CRISIS MANAGEMENT · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If Paradox `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` (Breach): Faction Intervention occurs (see below).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PHASE 3: RESOLUTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Make a Crisis Resolution Roll. Choose your approach:`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Desynchronization: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + ENDURE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Paradox: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE or SYNC (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Identity: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + ENDURE, invoking your Locked Memory if you have one`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`(`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 13`)), inline(`)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Add modifiers for relevant Assets (+1 to +2), actions taken during Phase 2 (+1 per successful scene), and desperate sacrifices (burning Coherence, marking Asset Stress).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`For Desynchronization and Paradox Crises:`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Full stabilization. Crisis ends. Restore some resources.`))), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    className: "col-num"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-name"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-desc"
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `10-11`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, ``), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Partial stabilization. Crisis ends but leaves a lasting consequence.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `7-9`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `Barely survive. Crisis ends but you suffer a major loss`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Memory, Asset, or Anchor Strength.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Crisis consumes you. Choose: Transform (retire Echo, become something else) or Dissolve (game over).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`IDENTITY CRISIS RESOLUTION (DIFFICULTY 13)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`This roll uses your Locked Memory — if you have one, you must invoke it, adding its +3 bonus. This is the moment you locked it for. If you have no Locked Memory, you face the void without an anchor.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Full Stabilization. You remember who you are. Crisis ends. Anchor Strength restored to 1. Gain Scar: Echo of Self — a permanent reminder of the time you almost stopped existing.`))), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    className: "col-num"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-name"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-desc"
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `10-11`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `Partial Stabilization. The Crisis ends, but you are permanently changed. Anchor Strength restored to 1. One of your Origin Details is permanently lost`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`you remember having a daughter, but not her face. You remember the lab, but not what you were trying to prove.`)))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Crisis Management",
    pageNum: basePage + 5,
    label: `CRISIS MANAGEMENT · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("table", {
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
  }, inline(`Barely Survive. You stabilize, but the Anchor is gone. Anchor Strength remains at 0. You can no longer gain Coherence from Chronicling or Anchor Reinforcement. You are untethered. This is how Alan started.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Dissolution. The final tether snaps. Your Echo dissolves into the timestream. Write your final Chronicle entry as fragments — not sentences, just images and half-words, fading at the edges. Then close the book.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Faction Interventions (Paradox `)), inline(`10+`), /*#__PURE__*/React.createElement("b", null, inline(`, Phase 2)`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When Paradox reaches `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` and you enter Crisis, one Faction intervenes during Phase 2. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(` or choose based on narrative: 1 = Church, 2 = Authority, 3 = Scionfall, 4 = Chronoclasts. Or roll `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(` twice for Factional War — two Factions fight over you.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Of the four Interventions below, I have personally witnessed three. The Scionfall I have only ever reconstructed from witness testimony, because anyone present long enough to give me a useful account did not survive being present. Treat the Scionfall section accordingly. The numbers are my best estimate. The descriptions are everyone else's.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`CHURCH INTERVENTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Templars arrive attempting capture for ritual use.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + DISRUPT or ENDURE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Fight them off. Gain +2 Paradox from the violence. They retreat.`))), /*#__PURE__*/React.createElement("table", {
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
  }, inline(`Escape but wounded. Lose 3 Coherence OR mark all Stress on one Asset.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Captured. Quick Resolution: suffer 1 Scar, lose 2 Coherence, reduce Paradox by 3, released. Or play the Vignette (Appendix E: Harmonic Crucifixion).`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-6-04",
    label: "CRISIS MANAGEMENT · spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Crisis Management",
    pageNum: basePage + 6,
    label: `CRISIS MANAGEMENT · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`AUTHORITY INTERVENTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Reality stutters. You're being trapped in a Clone Loop.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Notice the pattern immediately. Break the loop before it stabilizes. No cost.`))), /*#__PURE__*/React.createElement("table", {
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
  }, inline(`Trapped for `), /*#__PURE__*/React.createElement("b", null, inline(`1d6`)), inline(` iterations. Each iteration, one Active Memory becomes Fading. Then escape.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Fully looped. Quick Resolution: lose all Active Memories from the scene (become Fading), reduce Paradox by `), /*#__PURE__*/React.createElement("b", null, inline(`1d6`)), inline(`, loop releases you. Or play the Vignette (Appendix E: Loop Containment Protocol).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`SCIONFALL INTERVENTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Herald manifests. Nullwave field expands. Colors drain.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + ENDURE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Resist through sheer emotional intensity. Generate +3 Paradox to disrupt Nullwave. Herald withdraws.`))), /*#__PURE__*/React.createElement("table", {
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
  }, inline(`Partially affected. Lose 2 Coherence, one Fading Memory becomes Lost. Herald offers one more time, then leaves.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Succumbing. Accept cessation (game ends peacefully), OR spend 3 Coherence + invoke Locked Memory to resist (gain Scar: Hollow Moments), OR play the Vignette (Appendix E: The Nullwave Protocol).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`CHRONOCLAST INTERVENTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Time Bomb detonates. Local reality enters superposition.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Navigate the chaos expertly. Chronoclast applauds. They give you an unstable Asset of your choice.`))), /*#__PURE__*/React.createElement("table", {
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
  }, inline(`Escape but contaminated. Gain +2 Paradox, suffer -1 Coherence from exposure.`)))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Crisis Management",
    pageNum: basePage + 7,
    label: `CRISIS MANAGEMENT · p.${basePage + 7}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Lost in decoherence. Quick Resolution: lose `), /*#__PURE__*/React.createElement("b", null, inline(`1d6`)), inline(` Coherence, gain Scar: Probability Sight, Chronoclast loses interest. Or play the Vignette (Appendix E: Decoherence Bloom Survival).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`WHEN TWO CRISES COLLIDE`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If you trigger both a Desynchronization Crisis (Coherence -6) and a Paradox Crisis (Paradox 10+) at the same moment, you do not resolve them separately. They collapse into a single event.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`This is a Compound Crisis. Run the three phases once, but:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Phase 1: Pay both immediate costs — mark 1 Asset Stress AND one`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Active Memory becomes Fading.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Phase 2: Both Faction escalation tables apply — roll `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(` twice. Two`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Factions arrive. They are not coordinating.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Phase 3: Difficulty increases to 12 for all resolution rolls. The`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Locked Memory bonus still applies.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Results on a Compound Crisis:`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Full stabilization. Both Crises end. Restore 2 Coherence and reduce Paradox by 2.`))), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    className: "col-num"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-name"
  }), /*#__PURE__*/React.createElement("col", {
    className: "col-desc"
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `10-11`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, ``), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`One Crisis resolves; the other lingers. Choose which. The lingering one triggers again at the start of your next session.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `7-9`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, ``), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Barely survive. Choose two from: lose a Memory, lose an Asset, reduce Anchor Strength by 1, gain a Mutation.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Dissolution or Terminal Transformation. No partial options.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A Compound Crisis means the Chronoverse has decided you are not a nuisance. You are a problem.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-6-05",
    label: "CRISIS MANAGEMENT · spread 5"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Crisis Management",
    pageNum: basePage + 8,
    label: `CRISIS MANAGEMENT · p.${basePage + 8}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A point I should have raised earlier. When causality attacks you from more than one direction, such as hitting Breach Paradox and Crisis Coherence, accruing multiple Faction Marks, you will have a difficult time maintaining. The deck is quantitatively stacked against you.`)), /*#__PURE__*/React.createElement("p", null, inline(`The only way out is to reassess the choices you've deferred. Accept an Offer. Burn your Locked Memory. Take the Holding Action. Allow a Mutation.`)), /*#__PURE__*/React.createElement("p", null, inline(`Echoes who refuse all options will not be able to roll their way out.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(AlanIntrusionInline, {
    tier: tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Nietzsche's eternal return was just a Shattering with good PR. Nietzsche thought saying yes was strength. He never met someone who'd actually had to do the infinite life thing.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`To the reader who has been wondering.`)), /*#__PURE__*/React.createElement("p", null, inline(`Alan and I were colleagues. Briefly. We did not part on good terms.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(Zaaken, null, /*#__PURE__*/React.createElement("i", null, inline(`Superesse.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Crisis Management",
    pageNum: basePage + 9,
    label: `CRISIS MANAGEMENT · p.${basePage + 9}`
  })));
}
ChenCh6.pages = 10;
Object.assign(window, {
  ChenCh6
});
