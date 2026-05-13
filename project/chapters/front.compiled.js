function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — front/editor ch- — Front Matter
function FrontMatter({
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
    id: "editor-front-01",
    label: "Front Matter \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(IlPage, {
    side: "verso",
    pageNum: basePage + 0,
    label: `IL · Front Matter · p.${basePage + 0}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "WOUND V12"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `TEMPORAL ECHOES / emiT A Solo Journaling RPG Duology About Memory, Loss, and What We Become First Edition, 2025 · ©2026 All Rights Reserved temporalechoesgame@gmail.com`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "A NOTE BEFORE YOU BEGIN"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `You're reading something that came to me at the lowest point in my life. I had just gotten out of the hospital with my kid, a beautiful eight- month-old boy who worked harder than anyone I've ever met at the things most of us take for granted — eating and breathing. We went to the hospital after seven months of constant screaming, endless vomiting, and only gaining one pound. If you aren't a parent, take my word: it was bad. During the first seven months after my wife had given birth, we were in a constant struggle for survival. Visiting specialists whose titles I couldn't pronounce, never sleeping more than an hour at a time because every time he wakes up is an opportunity to get some more calories in. Fighting with feeding trackers and hollowing ourselves out, day by day, while we wondered what was wrong with our kid and why no one had an answer. Getting to the hospital was a relief, in a way. It meant the cavalry had arrived and we could — well, not relax, but finally let an adult figure out what was going on. Turns out, our kid had an ultra-rare lung disease. Only about a thousand babies in the world have it. He'd need a feeding tube and twenty-four-hour oxygen — but he'd be alright in the long run. Of course, that didn't count for much when I arrived back in the office. After a week back, my boss and the manager called me in for a meeting on a half hour's notice. They didn't tell me what it`))), /*#__PURE__*/React.createElement(IlPage, {
    side: "recto",
    pageNum: basePage + 1,
    label: `IL · Front Matter · p.${basePage + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `was about. They slid some papers across the table at me. Performance Improvement Plan. 'We want this to work, but your numbers were just too low these past few months. But we like you. The problem is that you're just too damn likable.' They slapped me on the back and said I was a good man. I was numb, but I'd been through tougher straits before. I'd buckle down and beat the PIP. After all, what is getting told that you're not good enough compared to watching your child fight for his life? But then, the kicker came. I lost my tefillin. If you know you know. Between my kid's health issues, the pressures of my job, and my newfound inability to connect with God in the way I'd done for over two decades, I finally crumpled. I sat down in my office's wellness room — reserved for nursing mothers, but I didn't care — and cried like my baby couldn't. I saw these two manuscripts in the corner of the room, tied together with a bit of twine. Stains streaked the pages — I couldn't tell if it was ink, blood or something else. Screw it. If you're reading this, it means you found this copy. If you're holding it in your hands — be careful what you write in the margins. The book remembers. I didn't know then that the two voices arguing in those pages had once been something like friends. Something like allies. They shared a moment I've only glimpsed in fragments — a night in 1944, a burning building, a choice that broke four people into the four philosophies that now hunt each other across the timestream.`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `They call it the First Scar. Dr. Chen won't speak of it. Alan mentions it only to wound. The other two — you'll meet their echoes later — have become something else entirely. I'm telling you this not because it explains the rules. It doesn't. It explains the grief. This game came out of that room. A note on what follows.`)), /*#__PURE__*/React.createElement(ChenMarginalia, {
    top: 98,
    side: "right",
    outset: -19,
    rotate: -1.50,
    width: 38
  }, "The year is wrong. He has it from a fragment of Alan's that drifted loose. He needs the date he has."))), /*#__PURE__*/React.createElement(Spread, {
    id: "editor-front-02",
    label: "Front Matter \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(IlPage, {
    side: "verso",
    pageNum: basePage + 2,
    label: `IL · Front Matter · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `I tried to transcribe both manuscripts the way I found them. Chen's writing was neat and orderly but Alan's was a hot mess. His pages came out of order, some in pencil, gone over in pen later. Most were pages from old IBM style terminal printout style which doesn't make any sense considering when he says he lives. This "book" is incomplete. Pages were torn from Alan's manuscript before I got them. At least a couple of Chen's pages had scorch marks on top of the text. I don't know the full context (I am sure neither of them would have used dice or pens) but my guess it was both of their manuals were meant to train echoes. I read them both as a little guilty, but who knows. I did the best I could, caveat lector.`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `Temporal Echoes is Dr. Eleanor Chen's preservation manual. She believes you can come home intact. She's spent thirty years documenting how to survive displacement without losing yourself. emiT is Alan Rose's transformation protocol. He believes trying to preserve your original identity is expensive, painful, and ultimately futile. His book is about becoming operationally effective through change — about finding out what you're capable of when you stop spending everything you have on staying the same. Both books use the same mechanical systems. Both are brutal. Neither wins.`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "HOW TO USE THIS BOOK"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `This duology is two complete, playable games. You can read and play either book independently. If you play both with the same Echo — first Chen's path, then Alan's — something additional opens up: a conversation between the two books about what preservation costs and what transformation takes. The rules for carrying a character between them are in the section called Playing Both. Temporal Echoes is designed for progressive complexity. Do not read it cover to cover. You will be overwhelmed and you will quit. Read in stages. YOUR FIRST 3-4** SESSIONS — READ ONLY THIS** Chapters 1-5 (Chapters 1-5 of Temporal Echoes) The Action Oracle (Appendix C.3) This is all you need to survive your first jumps. You will not understand the rest yet. That is intentional.`)), /*#__PURE__*/React.createElement(AlanFragment, {
    top: 61,
    left: 6,
    rotate: -3.0,
    size: 9
  }, "Doesn't need to be accurate to be true.")), /*#__PURE__*/React.createElement(IlPage, {
    side: "recto",
    pageNum: basePage + 3,
    label: `IL · Front Matter · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `WHEN CRISIS HITS (PARADOX 7+** OR COHERENCE -6) — ADD THIS** Chapter 6: Crisis Management Chapter 7: Advanced Systems Faction Profiles (Appendix D) The universe has noticed you. Now you need the rules of engagement.`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "ENDGAME & DEEP REFERENCE \u2014 UNLOCK WHEN READY"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4mm 0 1mm',
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 600,
      fontSize: '12pt',
      color: '#18181B'
    }
  }, "The Harmonic"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `Codex (Appendix A) — the physics behind everything Full Oracle Tables (Appendix C.1 & C.2) Captivity Vignettes (Appendix E) Chapter 8: Long-Term Play Start simple. The complexity will find you.`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "YOUR FIRST SESSION \u2014 A GUIDED START"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `Don't read the whole book. Do this instead: Read the Foreword — 'A Note Before You Begin.' Feel the vibe. Create your Echo (Chapter 2). Follow the steps. Use pencil. Spend no more than 30 minutes. Perfect is the enemy of started. Read 'Opening the Session' (Chapter 3). Answer the question: What is my Echo trying to find out right now? Roll on the Anomaly Tables (Appendix C.1). This is where you land. Don't try to Navigate yet. Write in your Chronicle. What do you see? Who is here? What feels wrong? Want something? Roll for it. 2d6 + your best Mode. If a Memory fits, add +2. End the scene. Write what changed. That's it. You've played your first session. The Factions, the Crises, the full Navigation system — they'll find you when you're ready. You don't need to understand the whole ocean. You just need to survive this wave.`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "DOCUMENT STRUCTURE"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `Book 1: Temporal Echoes (Chapters 1-8) Dr. Eleanor Chen's preservation manual. Book 2: emiT (Chapters 1-6) Alan Rose's transformation protocol. Appendices: Appendix A: The Harmonic Codex Appendix B: Asset Catalogs Appendix C: Oracle Tables C.1: Anomaly Tables (Temporal Echoes) C.2: The Chronoscape (emiT) C.3: Shared Oracles Appendix D: The Factions Appendix D.1: Recovered Field`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '2mm 0',
      paddingLeft: '5mm'
    }
  }, /*#__PURE__*/React.createElement("li", null, inline(`Intelligence Appendix E: Captivity Vignettes Appendix F: Examples of Play Appendix G: Temporal Pathologies Appendix H: Recovered Testimony — The Saul Files Quick Reference Sheet Character Sheets BOOK ONE: TEMPORAL`)))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "ECHOES"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-eyebrow",
    style: {
      marginTop: '6mm'
    }
  }, "TEMPORAL ECHOES"), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, `A Solo Journaling RPG About Memory, Loss, and the Fight to Stay Human By Dr. Eleanor Chen Hoc fit, ergo diligenter lege.`)))));
}
FrontMatter.pages = 4;
Object.assign(window, {
  FrontMatter
});