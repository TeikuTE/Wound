function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chen-3 — A SESSION OF "PLAY"
function ChenCh3({
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
    id: "chen-3-opener",
    label: "A SESSION OF \"PLAY\" · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "A SESSION OF \"PLAY\" · opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-sigil"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "ripple",
    size: "sigil",
    stage: 0
  })), /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-irregular-sine.svg",
    number: "III",
    title: "A Session Of \"Play\""
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-3-02",
    label: "A SESSION OF \"PLAY\" · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "A Session Of \"Play\"",
    pageNum: basePage + 2,
    footnotes: /*#__PURE__*/React.createElement(FinderFootnotes, {
      notes: [{
        "n": 14,
        "text": "Saul's question for tonight: what would it have been like to grow up with both parents alive. Wrote it down. Closed the book. Made tea.",
        "act": 2,
        "late": false
      }]
    }),
    label: `A SESSION OF "PLAY" · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Opening the Session`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body el-dropcap",
    "data-firstpara": true
  }, /*#__PURE__*/React.createElement("p", null, inline(`Before you write anything else, write down at least one question your Echo is trying to find out the answer to right now.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 14,
    act: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "momentum",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`This question is your compass. A scene that answers it — partly, badly, ambiguously — is a scene that did its job. Examples I see often: `), /*#__PURE__*/React.createElement("i", null, inline(`Can I trust this professor? What happened to my daughter in this timeline? Why does this era feel wrong? What are the Factions hiding here?`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Not what they want to achieve. What they need to understand. A question, not a goal. This question is your compass for the session. When a scene answers it — even partially, even badly — that scene is complete.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Examples: Can I trust this professor? What happened to my daughter in this timeline? Why does this era feel wrong? What are the Factions hiding here?`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Framing a Scene`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A scene begins when your Echo wants something specific from a specific person or place. To frame it, answer three things in your Chronicle:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Where am I? Use your established Era and Location, or roll a new`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Location if you've moved.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Who's here? An NPC from a previous session, a new character from an`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`oracle, or no one.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`What do I want from them? Information, safe passage, a moment of`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`peace, to hurt them, to save them.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If you don't know what your Echo wants, roll on the Action Oracle and ask: what is the situation demanding of me?`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "A Session Of \"Play\"",
    pageNum: basePage + 3,
    label: `A SESSION OF "PLAY" · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`When to Roll`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Three conditions decide whether to roll. The Echo wants the thing badly enough to risk something getting it. The outcome is uncertain. And failure would change the story in a way you'd want to write down.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When all three are present, roll. When any is missing, just write what happens. That said, If you don't give the Chronoverse a chance to push back on you regularly, it will end up taking from you catastrophically.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Pick up the dice. Name the action. Choose the Mode that matches how you're trying to survive it — OBSERVE to read the room, SYNC to bend to it, ENDURE to outlast it, DISRUPT to break it. If a Memory matches the context, let it guide you.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Note: if the current situation resonates with a Memory strongly enough that the past is actively informing your present, you may be able to invoke it for a deeper bonus — see 'When the Past Bleeds Through' in Chapter 5 for the full procedure.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-resolution"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `10+`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Complete Success`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`You achieve your goal cleanly. Gain +1 Wave Coherence.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `7-9`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Success with Complication`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`You succeed, but there's a cost, twist, or new problem. Coherence unchanged.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `6-`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Failure with Opportunity`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`You fail, but discover something useful or a new path opens. Lose 1 Coherence OR mark 1 Paradox (your choice).`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Record it all. The Chronicle is the only proof you were ever here.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-3-03",
    label: "A SESSION OF \"PLAY\" · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "A Session Of \"Play\"",
    pageNum: basePage + 4,
    footnotes: /*#__PURE__*/React.createElement(FinderFootnotes, {
      notes: [{
        "n": 15,
        "text": "Got into a clean flow tonight. Played three scenes in 45 minutes. Saul stayed at +4 Coherence. This is just resource management with a poetic coat of paint.",
        "act": 2,
        "late": false
      }]
    }),
    label: `A SESSION OF "PLAY" · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`One of my favorite lies in this whole manual. You rolled a 12, congratulations. Reality bends for you. You feel synchronized. Chen calls this Complete Success.`)), /*#__PURE__*/React.createElement("p", null, inline(`I call it Borrowed Time.`)), /*#__PURE__*/React.createElement("p", null, inline(`Because I've rolled `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` on Navigation a dozen times, landed exactly where I wanted, felt that sweet surge of Coherence — and then watched the timeline I just successfully navigated collapse three weeks later because I didn't understand what I was aligning with.`)), /*#__PURE__*/React.createElement("p", null, inline(`Your dice said success. The Chronoverse is still deciding.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Ending a Scene`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A scene ends when: you get what you wanted (success, clean or complicated), you clearly don't get what you wanted (failure), or the situation changes so completely that a new want replaces the old one.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 15,
    act: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "null",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When the scene ends, write in your Chronicle: what changed? And what question are you carrying into the next scene?`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Moving Between Scenes`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Ask: do I stay here, or go somewhere else? If you stay, the next scene happens in the same location — moments or hours later. Something has changed. If you go, decide where. If you're leaving the era entirely, that's a Navigation roll (see below) or forced displacement.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Closing the Session`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A session ends when you've answered your opening question (or learned it cannot be answered here), you've played for one to three hours and feel a natural pause, or a Crisis forces a major change that ends the current chapter of your story. Then perform Downtime.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "A Session Of \"Play\"",
    pageNum: basePage + 5,
    label: `A SESSION OF "PLAY" · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Before you close the book, answer your opening question in your Chronicle — even if the answer is 'I couldn't find out' or 'I found out and wish I hadn't.' Then write what that answer makes you need to know next.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The loop: open with a question, close by answering it, let the answer generate the next question. Each session is a closed loop that opens another. Do not aim for a specific number of scenes. You are done when the question has an answer.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection el-reflection--theory"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Turing proved that no algorithm can determine, in general, whether an arbitrary program will halt. Navigation has a similar problem. There is no procedure that can tell you, in advance, whether a Jump will resolve cleanly or fragment you. You roll, you commit, you find out. The undecidability is a fundamental property of time in the Chronoverse. — EC`)), /*#__PURE__*/React.createElement("p", null, inline(`> *Volve, Nota et Memento.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")))));
}
ChenCh3.pages = 6;
Object.assign(window, {
  ChenCh3
});
