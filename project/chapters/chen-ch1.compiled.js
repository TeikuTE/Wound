function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chapter/chen ch1 — UNDERSTANDING
function ChenCh1({
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
    id: "chen-1-01",
    label: "UNDERSTANDING \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "Chen Ch 1 \xB7 Opener"
  }, /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-broken-compass.svg",
    number: "I",
    title: "Understanding"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-1-02",
    label: "UNDERSTANDING \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Understanding",
    pageNum: basePage + 2,
    label: `Chen · UNDERSTANDING · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "el-h2"
  }, "DISPLACEMENT"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Time is an ocean. I know the river metaphor is older and more familiar, but set it down before we go any further, because the river is what kills new Echoes faster than anything else. Rivers have banks, direction and flow. You can float in a river. Oceans have waves, predators and unfathomable depth. You can't float in the Chronoverse, and if you think that time will carry you forward, your existence will prove to be both finite and short. You've been Displaced — torn from normal temporal flow, drifting between historical eras, trying to hold yourself together as you do. What's left of you is called an Echo. As you travel, your memories will fade, erode, and distort. The question isn't whether that happens. It's which pieces go first, and who you are without them. Temporal Echoes is a mediation on time travel, memory, and identity. It's played alone, with a journal, and it is not gentle. What It Means to Be an Echo You can't stay. I've watched Echoes try every version of permanence available to them. Marriages. Children. Foundations. None of it held for more than a generation. The era catches on. Sometimes within a year. Sometimes within forty. But never longer than that.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Understanding",
    pageNum: basePage + 3,
    label: `Chen · UNDERSTANDING · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your mind is finite; I wrote the mathematics that proved your memory capacity is quantifiable and limited. New experiences push old ones out at a rate that doesn't care how much you loved the old ones. Without active intervention, you'll forget what makes you yourself inside of fifty years. I'm sorry. That's the substrate we're working against. The timeline treats you as a foreign object. Actions that contradict history generate Paradox. Paradox destabilizes the timeline and you both. The CTH metaphor I usually reach for is a cello playing the wrong note in a string quartet. The metaphor breaks down when you remember the cello is also dissolving while it plays.`))), /*#__PURE__*/React.createElement("div", {
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
  }, inline(`In my years of displacement, I've developed a working theory about what we are. We're not travelers — we're dissonant waveforms attempting to maintain coherence within the harmonic field of causality. Every moment in history has a specific resonance, an emotional weight, and a stubborn resistance to change. When we displace, we're forcing our personal waveform to resonate with a target node's frequency. The math holds under pressure. Coherence is measurable. Echoes are literally waveforms trying not to collapse amidst an ocean of static and competing waves. You don't need to understand the equations to play. But if you want to know where the road ends, see Appendix A: The Harmonic Codex.`)), /*#__PURE__*/React.createElement("div", {
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
  }, "You're not trying to 'maintain coherence,' kid. You already failed. The moment you displaced, your waveform shattered. Chen writes like the ocean is something you can negotiate with. I've been in it for 340 years. It doesn't negotiate."), /*#__PURE__*/React.createElement("div", {
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
  }, "Three Questions"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`The questions an Echo asks tell me more than their answers do, because they also show what the Echo has already stopped asking. An Echo who no longer asks whether they can return has decided something, even if they wouldn't admit it. An Echo who no longer asks whether their identity is worth preserving is preparing for what comes after, which I have learned not to name out loud.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-1-03",
    label: "UNDERSTANDING \xB7 spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Understanding",
    pageNum: basePage + 4,
    label: `Chen · UNDERSTANDING · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`These are the three questions I have never met an Echo who could avoid for long. Every Echo must eventually answer these: Can I return to my origin? Should I preserve my original identity? What happens if I forget who I was?`))), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`This game is the process of living with those questions. It does not guarantee answers. The Four Factions Four major Factions have emerged from the Chronoverse, each with their own reasons for hunting you. The Church believes suffering stabilizes time. They want your pain. The Loop Authority sees recursion as correction. They want you normalized. Scionfall believes cessation is mercy. They will seduce you with kindness. The Tangled Revel shatter Echoes into knotted masterpieces. Accepting their offers is drinking from a poisoned chalice. Rejecting their help is drowning in a poisoned pool.`))), /*#__PURE__*/React.createElement("div", {
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
  }, inline(`I've heard Echoes call the Factions evil. That's a mistake and an understatement. Each Faction has looked at the mathematics of temporal displacement and drawn a different answer to the same question. The Church is correct that focused belief collapses probability. The Authority is right that recursion normalizes waveforms. Scionfall is fundamentally correct that cessation ends suffering. The Revel are right that instability creates infinite possibility. I've worked with the Loop Authority dozens of times. They are at least coherent and dependable.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(AlanIntrusion, {
    top: 73,
    side: "left",
    outset: -8,
    rotate: -1.50,
    width: 58,
    tier: tier
  }, "She's wrong about the order. The first question every Echo asks is \"what year is it.\" The second is \"where am I.\" She skips both because she had a lab and is into math. Most people have neither.")), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Understanding",
    pageNum: basePage + 5,
    label: `Chen · UNDERSTANDING · p.${basePage + 5}`
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
  }, "What You Need to Play"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Two six-sided dice. Two ten-sided dice. A sturdy pen. You will write more than you expect to. And a journal, which I call your Chronicle throughout this manual. Chronicling is not optional. It is the only thing standing between your current identity and total dissolution.`))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4mm 0 1mm',
      fontFamily: "var(--ff-serif-display)",
      fontWeight: 600,
      fontSize: '12pt',
      color: 'var(--el-forest)',
      fontVariant: 'small-caps',
      letterSpacing: '0.08em'
    }
  }, "The Loop: How a Session"), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Runs A session follows a rhythm. Learn it so well that it feels like breathing. You should be able to do it without thinking. Play. Navigate through time, encounter situations, make choices. When the outcome is uncertain and the stakes are real, roll 2d6 + Mode + Memory bonus. Resolve. On 10+, you succeed. On 7-9, you succeed with a cost or complication. On 6-, you fail and face consequences. Record. Write what happened in your Chronicle. This is how you preserve yourself. End Session. When you reach a natural stopping point, perform Downtime. This is when Memories fade, Assets repair, and you prepare for the next session.`))), /*#__PURE__*/React.createElement("div", {
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
  }, inline(`Hofstadter wrote about strange loops, systems that contain themselves, that reference themselves into being. An Echo is a strange loop, where the Echo's identity is the system that observes the system. When the loop tightens, you become more yourself. When it slackens, you become less.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(AlanIntrusion, {
    top: 25,
    side: "right",
    outset: -10,
    rotate: -1.50,
    width: 58,
    tier: tier
  }, "\u2022 \u2022 \u2022 Think of them as immune responses. The Chronoverse doesn't want you here, and neither do they. You're the infection. And there are way more than four."), /*#__PURE__*/React.createElement(AlanIntrusion, {
    top: 98,
    side: "right",
    outset: -10,
    rotate: -2.10,
    width: 58,
    tier: tier
  }, "Barrier, or tombstone? Depends what year you ask me."))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-1-04",
    label: "UNDERSTANDING \xB7 spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Understanding",
    pageNum: basePage + 6,
    label: `Chen · UNDERSTANDING · p.${basePage + 6}`
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
  }, inline(`An example, from my own field notes. 1. 2. 3. 4. Cambridge, May of 1842. I was tracking an Echo who had been displaced during the Anomaly cluster of 2031 and had landed inside the run-up to the Great Exhibition. The light there was thicker than any light I have stood in since. Coal smoke held in the air the way fog holds. People walked through it without remarking on it. I asked the Echo what it smelled like. She said it smelled like the inside of a kettle, which I have remembered ever since because it was the right answer.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '1mm',
      fontSize: '8.5pt',
      fontStyle: 'italic'
    }
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(ChenBody, {
    columns: 1
  }, /*#__PURE__*/React.createElement("p", null, inline(`Laudare.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    label: "(blank)"
  })));
}
ChenCh1.pages = 7;
Object.assign(window, {
  ChenCh1
});