function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — alan-2 — CALIBRATION
function AlanCh2({
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
    id: "alan-2-opener",
    label: "CALIBRATION \xB7 opener"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    label: "alan-2 \xB7 opener"
  }, /*#__PURE__*/React.createElement(AlanChapterHead, {
    entry: 2,
    sub: "CALIBRATION",
    coord: "[TEMPORAL LOG // ENTRY_002 // ERA: 26 // NODE: CALIBRATION]"
  }), /*#__PURE__*/React.createElement(AlanFragment, {
    top: 170,
    right: 4,
    rotate: -3,
    size: 9
  }, "// 2287.096.0001"))), /*#__PURE__*/React.createElement(Spread, {
    id: "alan-2-02",
    label: "CALIBRATION \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    runHead: "ENTRY_002",
    pageNum: basePage + 2,
    coordStamp: "[LOG // ENTRY_002]",
    label: `CALIBRATION · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Stop pretending you're still human. You are a walking weapon. A living bomb on causality and a bona fide wound in space-time. Own it.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`When Paradox climbs, your Modes shift.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`You lose SYNC because SYNC was the part of you that needed other people to validate that you were real. You don't need that anymore, and can't afford it. Every Coherence point you spend trying to feel like a person is one less point you have when the timeline shows up to collect its debt.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`You gain DISRUPT because subtlety gets you killed. The first hundred Echoes who tried to be clever are rotting corpses buried somewhere in time. The ones still kicking did so by being blunt instruments at the right moment.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Read the equations and stop arguing with them.`))), /*#__PURE__*/React.createElement("h4", {
    className: "al-subsection"
  }, inline(`Architecture of a Wreck`)), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`You begin with an origin (subject to revision), damage (mandatory), and a trajectory (inevitable).`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`WHAT THEY CALLED YOU`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Write these in pencil. By session 10, you'll have different answers than you started with. By session 20, you'll realize the origin story was always negotiable — a narrative you construct to explain your current behavior. That's fine. Use the fiction. We're all just drafts.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Name: What they called you`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Origin Era: When and where you're from`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Displacement Event: What unmoored you`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`HOW FAR GONE YOU ARE`)))), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    runHead: "ENTRY_002",
    pageNum: basePage + 3,
    coordStamp: "[LOG // ENTRY_002]",
    label: `CALIBRATION · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Track your transformation direction on a scale of 5 to 0. You start at 5 — still recognizably human. Each time it decreases, you shed one connection to your origin, gain one operational capability, and become harder to dissolve and easier to misunderstand.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`At 0: Final Transformation (see Chapter 6).`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Your Corruption Vector decreases by 1 when you: choose 'Embrace Corruption' during Crisis resolution, gain your third Mutation in a single session, or voluntarily accept a Faction transformation offer. Nothing else decreases it. It only moves in one direction. This isn't death. This is becoming something else.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`WHICH WAY YOU'RE FALLING`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Your trajectory shapes how you play from the first session. Choose one and write it on your Corruption Log. Each trajectory unlocks one move immediately.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`TRAJECTORY IMMEDIATE MOVE`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Weaponized Once per session, when you generate Paradox through a roll, you may immediately convert it into a +1 bonus on your next DISRUPT roll. The contradiction becomes ammunition.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Hollowed When a Scar becomes Lost, you may choose not to gain a Mutation. Instead, describe what you no longer feel. Write it in your Log. No mechanical consequence. Just the record.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Fragmented When you fail a roll, you may ask: What would another version of me have done? Answer the question in your Log, then roll again using that framing. The second result stands, whether better or worse.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Recursive Once per session, you may declare that you've done this before. Gain +2 on a roll. Mark +1 Paradox. The loop is real. The destabilization is real.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "alan-2-03",
    label: "CALIBRATION \xB7 spread 3"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    runHead: "ENTRY_002",
    pageNum: basePage + 4,
    coordStamp: "[LOG // ENTRY_002]",
    label: `CALIBRATION · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Infectious When you interact with an NPC, you may choose to transfer 1 point of your Paradox to them. Reduce your Paradox by 1. They become slightly wrong afterward — describe how. The NPC now carries a piece of your contamination.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Transcendent Once per session, you may describe what you perceive that others cannot — branching timelines, the echo of futures that won't happen, the weight of causality in a room. This perception is accurate. Gain +2 to your next roll. But you must also describe one thing you can no longer perceive normally. Write it in your Log. Accumulate these losses.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`HOW YOU FUNCTION NOW`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`You have four instinctual approaches: OBSERVE (analysis, threat detection, pattern recognition), SYNC (connection, manipulation, adaptation), ENDURE (damage absorption, persistence), DISRUPT (force, violence, causality breaking).`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`But here's what other displacement manuals don't tell you: these numbers aren't fixed. As temporal contamination increases, your operational profile shifts.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`PARADOX LEVEL MODE RATINGS`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Shadow (0-3) OBSERVE +2 / SYNC +1 / ENDURE +0 / DISRUPT -1 Flux (4-6) OBSERVE +1 / SYNC +0 / ENDURE +1 / DISRUPT +1 Anomaly (7-9) OBSERVE +0 / SYNC -1 / ENDURE +2 / DISRUPT +2 Breach (10+) OBSERVE -1 / SYNC -2 / ENDURE +3 / DISRUPT +3`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`The more contaminated you become, the less you can analyze or connect. The more you can endure and destroy. You will become a blunt instrument whether you choose to or not. This is the core mechanic. Corruption changes who you are at the stat level. Most people fight this. You're going to ride it.`)))), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    runHead: "ENTRY_002",
    pageNum: basePage + 5,
    coordStamp: "[LOG // ENTRY_002]",
    label: `CALIBRATION · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "al-chen-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("div", {
    className: "al-chen-block__head"
  }, "Dr. Eleanor Chen // [DATE UNKNOWN]"), /*#__PURE__*/React.createElement("p", null, inline(`This is what I was afraid of.`)), /*#__PURE__*/React.createElement("p", null, inline(`The stat shifts you're describing? That's not evolution. That's loss of analytical capacity (OBSERVE drops), social disconnection (SYNC drops), emotional numbing (ENDURE rises), violence as primary response (DISRUPT rises).`)), /*#__PURE__*/React.createElement("p", null, inline(`You're gamifying PTSD symptoms.`)), /*#__PURE__*/React.createElement("p", null, inline(`I understand why you frame it as adaptation. I understand 340 years has required you to function this way. But please — for once — admit what it cost you.`))), /*#__PURE__*/React.createElement("h4", {
    className: "al-subsection"
  }, inline(`WHAT HURTS`)), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`You begin with 5 Scars — formative wounds that shaped your operational capacity. Unlike Chen's Memories, you're not trying to preserve these. You reload them.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`For each Scar, write:`)))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Name — brief, evocative`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Context Tags — when it applies`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Invocation — what you can do with it and the bonus`))), /*#__PURE__*/React.createElement("h4", {
    className: "al-subsection"
  }, inline(`Example Scar:`)), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`BERLIN, 1989`)))), /*#__PURE__*/React.createElement("h4", {
    className: "al-subsection"
  }, inline(`Tags: Collapse / Borders / Impossible Escape`)), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Invocation: +2 to DISRUPT when breaking containment`))), /*#__PURE__*/React.createElement("h4", {
    className: "al-subsection"
  }, inline(`WHAT'S LEFT`)), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Choose 2 Assets from any category. All start Level 1 with 3 Stress boxes. See Appendix B for full catalog. Asset Corruption: every time you Push a Chrono-Tech Asset, roll `), /*#__PURE__*/React.createElement("b", null, inline(`d6`)), inline(`. On `), /*#__PURE__*/React.createElement("b", null, inline(`1-2`)), inline(`, it glitches — choose to gain +1 Paradox or have the Asset unavailable this scene. Passive bonuses never trigger this. Only when you're forcing it beyond its limits. Your tools make you stronger and more contaminated simultaneously. That's not a bug. That's the exchange rate.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "alan-2-04",
    label: "CALIBRATION \xB7 spread 4"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    runHead: "ENTRY_002",
    pageNum: basePage + 6,
    coordStamp: "[LOG // ENTRY_002]",
    label: `CALIBRATION · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "al-subsection"
  }, inline(`ASSET STATES (emiT)`)), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Every Asset in emiT exists in one of three states. Track this on your sheet.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Clean — The Asset functions as written. No additional effects.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Compromised — The Asset has taken at least 1 Stress from a Glitch (the `), /*#__PURE__*/React.createElement("b", null, inline(`1-2`)), inline(` result on the `), /*#__PURE__*/React.createElement("b", null, inline(`d6`)), inline(` roll). While Compromised, its passive bonus drops by 1 (a +2 OBSERVE becomes +1 OBSERVE). It still functions. It just costs more to maintain than it gives back. This is what most tools become eventually.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Weaponized — You have deliberately pushed a Glitched Asset past its limit, accepting the contamination as the point. A Weaponized Asset has all Stress boxes marked, grants no passive bonus, and cannot be repaired. But once per session, you may invoke it for a +3 bonus to any roll that fits its fiction — you're not using the tool, you're using what the tool's failure has taught you. After invoking a Weaponized Asset, roll `), /*#__PURE__*/React.createElement("b", null, inline(`d6`)), inline(`. On `), /*#__PURE__*/React.createElement("b", null, inline(`1-2`)), inline(`, it breaks permanently. Remove it from your sheet. Do not write a replacement yet. Sit with the gap.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Assets move from Clean →Compromised when Glitch Stress accumulates. Compromised →Weaponized is a choice, not a threshold — you decide when something broken is more useful broken than repaired.`))), /*#__PURE__*/React.createElement("h4", {
    className: "al-subsection"
  }, inline(`TRAJECTORY MOVES`)), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`Being a wreck means you never stop moving. The Moves below are the six ways you direct that motion.`))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`1. Lean Into It.`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`When you take damage, push it forward instead of resisting. Spend 1 Coherence; convert the damage into momentum on your next roll. You don't heal. You translate. — AR`))))), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    runHead: "ENTRY_002",
    pageNum: basePage + 7,
    coordStamp: "[LOG // ENTRY_002]",
    label: `CALIBRATION · p.${basePage + 7}`
  }, /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`2. Cut the Cord.`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`When an Anchor Connection is becoming a liability, deliberately sever it. Mark it as severed in your Chronicle. -2 Coherence immediately, but the Connection no longer triggers Memory Fading on relevant rolls.`)))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`3. Burn a Memory.`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`When you need a +3 you can't otherwise reach, spend an Active Memory. The Memory is gone — not Faded, gone. Erased from the slot.`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`This is the one I told her not to put in the book. She made me put it in anyway. — EC`)))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`4. Resonance Welding.`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`When something near you is destroyed and you're already Compromised, you can absorb a fragment of it as a temporary Asset. The Asset lasts until the end of the session and then disappears, leaving a Mutation behind.`)))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`5. The Holding Action.`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`Once per session, when you would suffer a consequence you cannot afford, declare The Holding Action. The consequence is delayed by exactly one scene. The Holding Action cannot be repeated until you have completed a Repreival.`)))), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6. Trajectory Lock.`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`When you make a decision you cannot undo, write it down and circle it. From this point forward, you cannot take any action that contradicts the locked decision. The lock is permanent until released by a Crisis. This is the move Chen would not let me put in her book. It's why we have two books. — AR`)))))));
}
AlanCh2.pages = 8;
Object.assign(window, {
  AlanCh2
});
