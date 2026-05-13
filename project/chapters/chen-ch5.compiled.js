function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chapter/chen ch5 — MEMORY MANAGEMENT
function ChenCh5({
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
    id: "chen-5-01",
    label: "MEMORY MANAGEMENT \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "Chen Ch 5 \xB7 Opener"
  }, /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-handless-clock.svg",
    number: "V",
    title: "Memory Management"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-5-02",
    label: "MEMORY MANAGEMENT \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Memory Management",
    pageNum: basePage + 2,
    label: `Chen · MEMORY MANAGEMENT · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`**The Architecture of Self* When memory fails, identity collapses. Collapses start small. First, the Echo can't remember why they were trying to remember while writing, then they can't remember what the chronicle is for, and eventually, they can't remember themselves. Sometimes there are pieces of the old person in the rubble. Those pieces are valuable, but they aren't the person before the collapse. Nine slots. Five Active. Three Fading. One Locked. The structure reflects what your nervous system was already doing before you were Displaced. You never remembered everything you lived. You remembered what was worth the metabolic cost of remembering.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Memory Management",
    pageNum: basePage + 3,
    label: `Chen · MEMORY MANAGEMENT · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Chronoverse imposes the same accounting on Echoes, except the cost is steeper and the negotiation is shorter. Without intervention, the cost wins. With intervention, the cost still wins, but more slowly, and you get to choose what pieces you lose first. Your memories exist in four states. They will not stay where you put them.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "ACTIVE MEMORIES (5 SLOTS)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Vivid, detailed, present in your mind. These provide +2 to matching actions. They're energetically expensive to maintain — high-amplitude waveforms with strong emotional mass. When you invoke an Active Memory for a bonus, you're literally harmonizing with your past self, using stored resonance to enhance your current action.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "FADING MEMORIES (3 SLOTS)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Losing clarity. +1 to matching actions. One step from being Lost. The signal is still there, but noise is increasing — new memories broadcasting on similar frequencies, creating static that obscures the old ones. The amplitude is decreasing. Chen's model calls this entropy. She's half right. It's also interference.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "LOCKED MEMORY (1 SLOT)"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Permanently preserved. +3 to matching actions. Costs 3 Coherence to Lock. Cannot fade through normal means. You're spending tremendous energy to create a standing wave — a self- reinforcing pattern that resists entropy. Locking is the most important choice you'll make. Choose a Memory that defines your core identity — something that, if lost, would mean you no longer recognize yourself. You can only Lock once.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-5-03",
    label: "MEMORY MANAGEMENT \xB7 spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Memory Management",
    pageNum: basePage + 4,
    label: `Chen · MEMORY MANAGEMENT · p.${basePage + 4}`
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
  }, "I Locked the memory of Sarah's birth. The science worked. The memory is still mechanically intact 340 years later. What Chen's equations don't account for: Emotional Mass (\u03BC isn't constant. It decays. You can preserve the structure \u2014 the date, the hospital room, the factual details. But the feeling? The love? The specific quality of consciousness that made you care? That has a half-life she's never calculated. Memory Locking preserves the skeleton. The soul rots anyway. This is the equation Chen doesn't write: Memory Coherence = Structure \xD7 (Emotional Mass \xD7 e^(-t/\u03C4)) Where \u03C4is the decay constant and t is subjective time. Lock all the memories you want. Time will hollow them out."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '2mm',
      fontSize: '11pt',
      opacity: 0.85
    }
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "LOST MEMORIES"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Gone from conscious mind. No bonus. They leave Scars — narrative consequences, behavioral changes, the shape of what used to be there. The Cycle of Forgetting When you experience something significant enough to form a new Memory: Create the Memory: write title, tags, description. It enters Active Slot 1. The oldest Active Memory is pushed to Fading. The oldest Fading Memory becomes Lost. You form roughly 1-2 new Memories per session. The pressure to choose what matters is the game.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "TRIGGERS FOR NEW MEMORIES"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`New Memories form when something breaks the pattern — when you survive a Crisis, achieve something that costs you, connect with someone who matters, or simply decide that this moment is the one. The last trigger is the most important. You decide what defines you. The timestream doesn't get a vote. Scars: What Remains When a Memory becomes Lost, its emotional residue remains as a Scar — a psychological wound or changed behavior. When a Memory goes, something stays in its shape. Choose the wound: Phantom Habit: you perform a ritual you don't understand. The body remembers what the mind has lost. False Story: you've constructed a lie to fill the gap. You believe it. That's the dangerous part.`))), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '2mm 0',
      paddingLeft: '5mm'
    }
  }, /*#__PURE__*/React.createElement("li", null, inline(`Persistent Ache: physical pain tied to the loss. Location unknown. Cause unverifiable. Emotional Void: numbness where feeling used to be, or feeling where numbness would be appropriate. Behavioral Shift: a personality change, permanent. You act differently now. You may not have noticed yet. Scars accumulate. Track them in your Chronicle. For more specific shapes of deterioration, see Appendix G: Temporal Pathologies. SCARS VS. MUTATIONS: A CRITICAL DISTINCTION Scars are identity consequences — psychological wounds gained when a Memory becomes Lost. Mutations are reality consequences — gained only from Paradox Breach (reaching 10+) or from explicit Mutation triggers in Faction interactions and Crisis outcomes. Scars are what you lose. Mutations are what the Chronoverse makes you become. Scars are the shape of what you've lost. They are your own psyche rewriting itself around an absence. Mutations are the shape of what the Chronoverse has made you. They are the timestream writing itself onto your body. One is grief. The other is contamination. Both are permanent. MUTATIONS (TEMPORAL ECHOES) When you gain a Mutation — from Paradox Breach, from a Faction trade, from a Crisis outcome that specifies it — choose one from this list, or create your own in the same register. These are not personality quirks. They are the Chronoverse writing itself onto your body. Temporal Stutter — Time skips for you. You occasionally repeat the last few seconds of your own life, experiencing them twice. You are aware the second time. No one else is. You have no control over when this happens. Mechanically: once per session, the Oracle may declare your most recent roll occurred twice — both results stand, and you must narrate both.`)), /*#__PURE__*/React.createElement("li", null, inline(`Echo Bleed — You see brief overlays of other timelines. Strangers' faces flicker. Buildings appear half-demolished. You cannot always tell what is the present. Mechanically: -1 to OBSERVE when you have no Memory that applies to the current situation. The static fills the gap where context should be. Displaced Affect — Your emotional responses have decoupled from their causes. You laugh at grief. You feel nothing at danger. You cry at sunsets. People notice. Mechanically: -1 to SYNC with anyone who has witnessed a Crisis involving you. They don't know what to make of you. They're not wrong to be unsettled. Temporal Scarring — Wounds you sustained in other timelines manifest on your body in this one. Old injuries reopen. Scar tissue that wasn't there yesterday is there now. Mechanically: whenever you take a Crisis consequence that involves physical damage, it costs +1 additional Coherence. The body keeps its own accounting. Signal Intrusion — You receive transmissions from other versions of yourself — fragments of choices you didn't make, warnings that may or may not apply to your current timeline. They feel urgent. They are sometimes wrong. Mechanically: once per session, you may ask the Action Oracle a yes/no question about the immediate future. The Oracle answers. Whether to trust it is your problem. Anchor Drift — Your emotional connection to your origin has started to migrate. The people you think you're trying to return to are blurring with people you've met since. You're not sure which memories are original and which are composites. Mechanically: during Downtime, when you write a Chronicle entry about your Anchor Connections, roll 1d6. On a 1, one Anchor Connection detail shifts slightly — not lost, but changed. Record both versions. You don't know which one is real. Preservation Moves LOCK MEMORY (3 COHERENCE) Permanently preserve one Active Memory. Can only be done once. Choose the core of your identity — the memory you would die before forgetting. Provides +3 bonus when invoked. Cannot fade through normal means. REINFORCE MEMORY (1 COHERENCE PER SCENE) Keep one Active Memory from fading this cycle. Requires narrating how you actively recall or relive it. Temporary protection — must be renewed each Downtime. RECOVER LOST MEMORY (3 COHERENCE, ROLL ENDURE, DIFFICULTY 12)`)), /*#__PURE__*/React.createElement("li", null, inline(`You make a desperate attempt to dredge a Lost Memory from the void. This is not remembering — it's excavation. Spend 3 Coherence. Name the Lost Memory you are trying to recover. Then roll 2d6 + ENDURE against Difficulty 12. 12+ Against all odds, it returns. The Memory enters an Active slot, pushing all others down — this may force another Memory to become Fading. Gain +1 Paradox from the strain on causality. 10-11 A fragment returns. The Memory comes back as Fading. You remember the shape of it, but not the texture. Gain +1 Paradox. 7-9 The effort fails. Lose 1 additional Coherence. The Memory is gone. This attempt is the last time you'll look for it. 6- The void stares back. You recover a False Memory — a comforting lie that fills the gap. The Oracle decides what it is. You believe it completely. Gain a Scar: Beautiful Lie. The Chronicle System The Chronicle is your character's literal survival mechanism. Without it, memory loss accelerates catastrophically. It is not flavoring. It is load-bearing.`)))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "WHAT TO RECORD"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Record the date and location of each era as precisely as you can determine. Record the events that changed you and the people who caused them. Track your Memory status, your Coherence, your Paradox. Write down what happened during Crises. If you have time — and you will not always have time — record the sensory details. What it smelled like. What it sounded like. These details are the difference between remembering and merely knowing.`))), /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "CHRONICLE BONUSES"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Detailed Entries grant +1 Coherence once per session, when your entry: describes a scene in vivid detail, reflects on your emotional state, connects to your Anchor or Memories, and advances your understanding of your condition. Reference Bonus: When facing a situation similar to a previous encounter, read the relevant past Chronicle entries. Gain +1 to the Resolution roll if past experience genuinely applies. Temporal Echoes: When the Past Bleeds Through`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Memory Management",
    pageNum: basePage + 5,
    label: `Chen · MEMORY MANAGEMENT · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Sometimes, in moments of Crisis or revelation, the weight of all your past experiences presses upon the present. A decision made centuries ago influences your actions now. This is not metaphor. This is CTH. When you make a Resolution Roll, if the current situation resonates strongly with one of your Memories (Active, Fading, or Locked), you may invoke it: State the Memory — identify the specific Memory in your Chronicle. Explain the Connection — how this past experience provides genuine insight into the current situation. Gain the Bonus — apply the bonus based on the Memory's status (Active +2, Fading +1, Locked +3). Limits: one Memory per roll. Choose the most relevant. In Crisis state (Coherence -6 to -3), Echo bonuses are reduced by 1. The Memory must have a clear, explicable connection to the situation — if you're reaching, it doesn't apply. [ CHRONICLE ENTRY FRAGMENT — Found inserted between pages 47-48 of a recovered Chronicle, author unknown ] I followed every procedure. Every rule. Every preservation protocol in Chen's manual. I maintained Coherence above +5 for two centuries. I Locked my defining Memory. I reinforced my Anchor quarterly. I wrote in the Chronicle every single day. And this morning I read my first entry. The one I wrote on Day 1, right after Displacement. The one where I described my lab, my daughter, my life. I didn't recognize it. Not that I'd forgotten — the mechanics were intact, the Memory was still Active. But reading those words felt like reading someone else's diary. The person who wrote that entry cared about those things. The person reading it now… doesn't. The Chronicle preserved everything Chen said it would. It just couldn't preserve the person who cared about preserving it. I think that might be the joke. (No signature. No date. The handwriting changes halfway through.)`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-5-04",
    label: "MEMORY MANAGEMENT \xB7 spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Memory Management",
    pageNum: basePage + 6,
    label: `Chen · MEMORY MANAGEMENT · p.${basePage + 6}`
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
  }, "Some dude named Derrida once said the trace is what survives the absence of presence. The Chronicle is the trace. You are not in the journal, Ellie. The journal is what's left after you. Stop confusing the corpse with the body."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '2mm',
      fontSize: '11pt',
      opacity: 0.85
    }
  }, "\u2014AR")), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Crisis.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    label: "(blank)"
  })));
}
ChenCh5.pages = 7;
Object.assign(window, {
  ChenCh5
});