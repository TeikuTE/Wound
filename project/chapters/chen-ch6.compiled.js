function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chapter/chen ch6 — CRISIS MANAGEMENT
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
    id: "chen-6-01",
    label: "CRISIS MANAGEMENT \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "Chen Ch 6 \xB7 Opener"
  }, /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-irregular-sine.svg",
    number: "VI",
    title: "Crisis Management"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-6-02",
    label: "CRISIS MANAGEMENT \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Crisis Management",
    pageNum: basePage + 2,
    label: `Chen · CRISIS MANAGEMENT · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("div", {
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
  }, inline(`Crises come in three phases. Manifestation is the moment you recognize what is happening. Your chest tightening, the room narrowing. The feeling that the floor is not where you left it. You have a window — small, closing — to act before the body and the timeline both decide for you. Escalation is when the system commits. You can no longer stop the cascade through will alone. You can spend resources to direct it, but that is about it. The water is rising; the question is which way you swim, not whether you can stay dry. Resolution is what is left. You survive or you don't. You return changed or you do not return at all. Three Crises live in this chapter. Each has its own physics. All three feel the same in the first thirty seconds.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "DESYNCHRONIZATION CRISIS (COHERENCE -6)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`You've lost synchronization with the timestream. Trigger: Coherence drops to -6. Manifestation: roll on the Temporal Anomaly table — reality fractures around you. PARADOX CRISIS (PARADOX 10+) Timeline contradictions reach critical mass. Trigger: Paradox reaches 10. Manifestation: roll on the Timeline Collapse table — history rewrites itself.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Crisis Management",
    pageNum: basePage + 3,
    label: `Chen · CRISIS MANAGEMENT · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "IDENTITY CRISIS (ANCHOR STRENGTH 0)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your connection to your origin has severed. Trigger: Anchor Strength drops to 0. Manifestation: you don't know who you are.`))), /*#__PURE__*/React.createElement("div", {
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
  }, inline(`When your Paradox reaches critical mass, you're not just causing problems. You're creating topological stress in the causal field. Reality can no longer absorb your contradictions smoothly. The most dangerous state isn't when timelines are far apart. It's when they're forced to almost touch, almost reconcile — and can't. That's when reality shatters. A Shattering isn't the timeline breaking. It's topological bifurcation — reality splitting into multiple causally-disjoint eigenstates. The original timeline ceases to exist, replaced by its fractured components. This is survivable with proper Crisis management.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("div", {
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
  }, "She never experienced a Shattering. I have. 37 times. I was the Shattering a couple of times. The you reading this has survived at least one Shattering already. You just don't remember the timeline where you didn't make it."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '2mm',
      fontSize: '11pt',
      opacity: 0.85
    }
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4mm 0 1mm',
      fontFamily: "var(--ff-serif-display)",
      fontWeight: 600,
      fontSize: '12pt',
      color: 'var(--el-forest)',
      fontVariant: 'small-caps',
      letterSpacing: '0.08em'
    }
  }, "Crisis Resolution"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Procedure`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "PHASE 1: MANIFESTATION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll on the appropriate Oracle table. Describe the Crisis erupting. Pay the immediate cost: Desynchronization — mark 1 Asset Stress. Paradox — one Active Memory becomes Fading. Identity — lose access to one Asset temporarily.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "PHASE 2: ESCALATION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Crisis intensifies. Roll on the Timeline Shifts Oracle to determine how reality changes.`))), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '2mm 0',
      paddingLeft: '5mm'
    }
  }, /*#__PURE__*/React.createElement("li", null, inline(`Roll on the Action Oracle to determine a crucial action required. Apply escalating pressure: Desynchronization — temporal displacement becomes uncontrollable. Paradox — reality fluctuations create direct danger. Identity — fragmentation intensifies. If Paradox 10+ (Breach): Faction Intervention occurs (see below). PHASE 3: RESOLUTION Make a Crisis Resolution Roll. Choose your approach: Desynchronization: 2d6 + ENDURE (Difficulty 10) Paradox: 2d6 + OBSERVE or SYNC (Difficulty 10) Identity: 2d6 + ENDURE, invoking your Locked Memory if you have one (Difficulty 13) Add modifiers for relevant Assets (+1 to +2), actions taken during Phase 2 (+1 per successful scene), and desperate sacrifices (burning Coherence, marking Asset Stress). For Desynchronization and Paradox Crises: 12+ Full stabilization. Crisis ends. Restore some resources. 10-11 Partial stabilization. Crisis ends but leaves a lasting consequence. 7-9 Barely survive. Crisis ends but you suffer a major loss — Memory, Asset, or Anchor Strength. 6- Crisis consumes you. Choose: Transform (retire Echo, become something else) or Dissolve (game over). IDENTITY CRISIS RESOLUTION (DIFFICULTY 13) This roll uses your Locked Memory — if you have one, you must invoke it, adding its +3 bonus. This is the moment you locked it for. If you have no Locked Memory, you face the void without an anchor. 12+ Full Stabilization. You remember who you are. Crisis ends. Anchor Strength restored to 1. Gain Scar: Echo of Self — a permanent reminder of the time you almost stopped existing.`)), /*#__PURE__*/React.createElement("li", null, inline(`10-11 Partial Stabilization. The Crisis ends, but you are permanently changed. Anchor Strength restored to 1. One of your Origin Details is permanently lost — you remember having a daughter, but not her face. You remember the lab, but not what you were trying to prove. 7-9 Barely Survive. You stabilize, but the Anchor is gone. Anchor Strength remains at 0. You can no longer gain Coherence from Chronicling or Anchor Reinforcement. You are untethered. This is how Alan started. 6- Dissolution. The final tether snaps. Your Echo dissolves into the timestream. Write your final Chronicle entry as fragments — not sentences, just images and half-words, fading at the edges. Then close the book. Faction Interventions (Paradox 10+, Phase 2) When Paradox reaches 10+ and you enter Crisis, one Faction intervenes during Phase 2. Roll d4 or choose based on narrative: 1 = Church, 2 = Authority, 3 = Scionfall, 4 = Chronoclasts. Or roll d4 twice for Factional War — two Factions fight over you. [CHEN] Of the four Interventions below, I have personally witnessed three. The Scionfall I have only ever reconstructed from witness testimony, because anyone present long enough to give me a useful account did not survive being present. Treat the Scionfall section accordingly. The numbers are my best estimate. The descriptions are everyone else's. — EC`)))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "CHURCH INTERVENTION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Templars arrive attempting capture for ritual use. Roll 2d6 + DISRUPT or ENDURE (Difficulty 10): 12+ Fight them off. Gain +2 Paradox from the violence. They retreat. 7-9 Escape but wounded. Lose 3 Coherence OR mark all Stress on one Asset. 6- Captured. Quick Resolution: suffer 1 Scar, lose 2 Coherence, reduce Paradox by 3, released. Or play the Vignette (Appendix E: Harmonic Crucifixion).`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "AUTHORITY INTERVENTION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Reality stutters. You're being trapped in a Clone Loop.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-6-03",
    label: "CRISIS MANAGEMENT \xB7 spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Crisis Management",
    pageNum: basePage + 4,
    label: `Chen · CRISIS MANAGEMENT · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll 2d6 + OBSERVE (Difficulty 10): 12+ Notice the pattern immediately. Break the loop before it stabilizes. No cost. 7-9 Trapped for 1d6 iterations. Each iteration, one Active Memory becomes Fading. Then escape. 6- Fully looped. Quick Resolution: lose all Active Memories from the scene (become Fading), reduce Paradox by 1d6, loop releases you. Or play the Vignette (Appendix E: Loop Containment Protocol).`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "SCIONFALL INTERVENTION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Herald manifests. Nullwave field expands. Colors drain. Roll 2d6 + ENDURE (Difficulty 10): 12+ Resist through sheer emotional intensity. Generate +3 Paradox to disrupt Nullwave. Herald withdraws. 7-9 Partially affected. Lose 2 Coherence, one Fading Memory becomes Lost. Herald offers one more time, then leaves. 6- Succumbing. Accept cessation (game ends peacefully), OR spend 3 Coherence + invoke Locked Memory to resist (gain Scar: Hollow Moments), OR play the Vignette (Appendix E: The Nullwave Protocol).`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "CHRONOCLAST INTERVENTION"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Time Bomb detonates. Local reality enters superposition. Roll 2d6 + OBSERVE (Difficulty 10): 12+ Navigate the chaos expertly. Chronoclast applauds. They give you an unstable Asset of your choice. 7-9 Escape but contaminated. Gain +2 Paradox, suffer -1 Coherence from exposure. 6- Lost in decoherence. Quick Resolution: lose 1d6 Coherence, gain Scar: Probability Sight, Chronoclast loses interest. Or play the Vignette (Appendix E: Decoherence Bloom Survival).`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "WHEN TWO CRISES COLLIDE"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`If you trigger both a Desynchronization Crisis (Coherence -6) and a Paradox Crisis (Paradox 10+) at the same moment, you do not resolve them separately. They collapse into a single event. This is a Compound Crisis. Run the three phases once, but:`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Crisis Management",
    pageNum: basePage + 5,
    label: `Chen · CRISIS MANAGEMENT · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Phase 1: Pay both immediate costs — mark 1 Asset Stress AND one Active Memory becomes Fading. Phase 2: Both Faction escalation tables apply — roll d4 twice. Two Factions arrive. They are not coordinating. Phase 3: Difficulty increases to 12 for all resolution rolls. The Locked Memory bonus still applies. Results on a Compound Crisis: 12+ Full stabilization. Both Crises end. Restore 2 Coherence and reduce Paradox by 2. 10-11 One Crisis resolves; the other lingers. Choose which. The lingering one triggers again at the start of your next session. 7-9 Barely survive. Choose two from: lose a Memory, lose an Asset, reduce Anchor Strength by 1, gain a Mutation. 6- Dissolution or Terminal Transformation. No partial options. A Compound Crisis means the Chronoverse has decided you are not a nuisance. You are a problem.`))), /*#__PURE__*/React.createElement("div", {
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
  }, inline(`A point I should have raised earlier. When causality attacks you from more than one direction, such as hitting Breach Paradox and Crisis Coherence, accruing multiple Faction Marks, you will have a difficult time maintaining. The deck is quantitatively stacked against you. The only way out is to reassess the choices you've deferred. Accept an Offer. Burn your Locked Memory. Take the Holding Action. Allow a Mutation. Echoes who refuse all options will not be able to roll their way out.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(AlanIntrusion, {
    top: 170,
    side: "right",
    outset: -10,
    rotate: -1.50,
    width: 58,
    tier: tier
  }, "Nietzsche's eternal return was just a Shattering with good PR. Nietzsche thought saying yes was strength. He never met someone who'd actually had to do the infinite life thing."))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-6-04",
    label: "CRISIS MANAGEMENT \xB7 spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Crisis Management",
    pageNum: basePage + 6,
    label: `Chen · CRISIS MANAGEMENT · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Superesse.`))), /*#__PURE__*/React.createElement(ChenMarginalia, {
    top: 25,
    side: "left",
    outset: -18,
    rotate: -1.50,
    width: 38
  }, "To the reader who has been wondering. Alan and I were colleagues. Briefly. We did not part on good terms.")), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    label: "(blank)"
  })));
}
ChenCh6.pages = 7;
Object.assign(window, {
  ChenCh6
});