function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — front — FRONT MATTER
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
    id: "front-cover",
    label: "Front Matter · title"
  }, /*#__PURE__*/React.createElement(IlPage, {
    side: "verso",
    showTexture: false,
    label: "cover/half-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "il-halftitle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "il-cover-sigil"
  }, /*#__PURE__*/React.createElement(Glyph, {
    kind: "sigil",
    name: "master",
    size: "sigil"
  })), /*#__PURE__*/React.createElement("div", {
    className: "il-halftitle__mark"
  }, "WOUND"), /*#__PURE__*/React.createElement("div", {
    className: "il-halftitle__sub"
  }, "Temporal Echoes / emiT"), /*#__PURE__*/React.createElement("div", {
    className: "il-cover-footnote"
  }, "Twine on the cover finally snapped this morning. One smells like ozone. The other like copper and cold air. Calling them the Wounds \u2014 Chen the Anachron, Rose the Apikoros. Tell me you'd resist."), /*#__PURE__*/React.createElement("div", {
    className: "il-cover-ghost"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "collapse",
    size: "ghost",
    late: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "il-cover-scrawl"
  }, "Anachron / Apikoros"))), /*#__PURE__*/React.createElement(IlPage, {
    side: "recto",
    showTexture: false,
    label: "title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "il-titlepage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "il-titlepage__sigil"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/wound-sigil.svg",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "il-titlepage__sup"
  }, "WOUND \xB7 TEMPORAL ECHOES \xB7 emiT"), /*#__PURE__*/React.createElement("h1", {
    className: "il-titlepage__title"
  }, "A Solo Journaling RPG", /*#__PURE__*/React.createElement("br", null), "Duology About Memory, Loss,", /*#__PURE__*/React.createElement("br", null), "and What We Become"), /*#__PURE__*/React.createElement("div", {
    className: "il-titlepage__rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "il-titlepage__sub"
  }, "First Edition \xB7 2026")))), /*#__PURE__*/React.createElement(Spread, {
    id: "front-01",
    label: "FRONT MATTER · spread 1"
  }, /*#__PURE__*/React.createElement(IlPage, {
    side: "verso",
    showTexture: false,
    pageNum: basePage + 0,
    label: `FRONT MATTER · p.${basePage + 0}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`A Solo Journaling RPG Duology About Memory, Loss, and What We Become`)))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`First Edition, 2025 · ©2026 All Rights Reserved`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`temporalechoesgame@gmail.com`))), /*#__PURE__*/React.createElement("div", {
    className: "al-rule",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("h2", {
    className: "il-h2"
  }, inline(`A NOTE BEFORE YOU BEGIN`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You're reading something that came to me at the lowest point in my life.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`I had just gotten out of the hospital with my kid, a beautiful eight-month-old boy who worked harder than anyone I've ever met at the things most of us take for granted — eating and breathing. We went to the hospital after seven months of constant screaming, endless vomiting, and only gaining one pound. If you aren't a parent, take my word: it was bad.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`During the first seven months after my wife had given birth, we were in a constant struggle for survival. Visiting specialists whose titles I couldn't pronounce, never sleeping more than an hour at a time because every time he wakes up is an opportunity to get some more calories in. Fighting with feeding trackers and hollowing ourselves out, day by day, while we wondered what was wrong with our kid and why no one had an answer.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 2,
    act: 1
  }))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Getting to the hospital was a relief, in a way. It meant the cavalry had arrived and we could — well, not relax, but finally let an adult figure out what was going on. Turns out, our kid had an ultra-rare lung disease. Only about a thousand babies in the world have it. He'd need a feeding tube and twenty-four-hour oxygen — but he'd be alright in the long run.`))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 2,
      "text": "He's writing about the NICU and I'm reading it in the same chair I sat in three months ago waiting for my own kid's blood work. Bad time to start this book. Doing it anyway.",
      "act": 1,
      "late": false
    }]
  })), /*#__PURE__*/React.createElement(IlPage, {
    side: "recto",
    showTexture: false,
    pageNum: basePage + 1,
    label: `FRONT MATTER · p.${basePage + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Of course, that didn't count for much when I arrived back in the office. After a week back, my boss and the manager called me in for a meeting on a half hour's notice. They didn't tell me what it was about. They slid some papers across the table at me. Performance Improvement Plan. 'We want this to work, but your numbers were just too low these past few months. But we like you. The problem is that you're just too damn likable.' They slapped me on the back and said I was a good man. I was numb, but I'd been through tougher straits before. I'd buckle down and beat the PIP. After all, what is getting told that you're not good enough compared to watching your child fight for his life?`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`But then, the kicker came.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`I lost my tefillin. If you know you know. Between my kid's health issues, the pressures of my job, and my newfound inability to connect with God in the way I'd done for over two decades, I finally crumpled. I sat down in my office's wellness room — reserved for nursing mothers, but I didn't care — and cried like my baby couldn't.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 3,
    act: 1
  }))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`I saw these two manuscripts in the corner of the room, tied together with a bit of twine. Stains streaked the pages — I couldn't tell if it was ink, blood or something else.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Screw it.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If you're reading this, it means you found this copy. If you're holding it in your hands — be careful what you write in the margins. The book remembers.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 4,
    act: 1
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "null",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 3,
      "text": "Oh. He's frum. He's frum and he lost his tefillin in the wellness room. I have read three lines past that sentence five times. Going to make tea.",
      "act": 1,
      "late": false
    }, {
      "n": 4,
      "text": "Most metal opening sentence in a TTRPG manual since Cy_Borg. We are cooking.",
      "act": 1,
      "late": false
    }]
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "front-02",
    label: "FRONT MATTER · spread 2"
  }, /*#__PURE__*/React.createElement(IlPage, {
    side: "verso",
    showTexture: false,
    pageNum: basePage + 2,
    label: `FRONT MATTER · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`I didn't know then that the two voices arguing in those pages had once been something like friends. Something like allies. They shared a moment I've only glimpsed in fragments — a night in 1944, a burning building, a choice that broke four people into the four philosophies that now hunt each other across the timestream.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Temporal Echoes is Dr. Eleanor Chen's preservation manual. She believes you can come home intact. She's spent thirty years documenting how to survive displacement without losing yourself.`)))), /*#__PURE__*/React.createElement(IlPage, {
    side: "recto",
    showTexture: false,
    pageNum: basePage + 3,
    label: `FRONT MATTER · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`emiT is Alan Rose's transformation protocol. He believes trying to preserve your original identity is expensive, painful, and ultimately futile. His book is about becoming operationally effective through change — about finding out what you're capable of when you stop spending everything you have on staying the same.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Both books use the same mechanical systems. Both are brutal. Neither wins.`))), /*#__PURE__*/React.createElement("h4", {
    className: "interlude-eyebrow"
  }, inline(`HOW TO USE THIS BOOK`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`This duology is two complete, playable games. You can read and play either book independently. If you play both with the same Echo — first Chen's path, then Alan's — something additional opens up: a conversation between the two books about what preservation costs and what transformation takes. The rules for carrying a character between them are in the section called Playing Both.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Temporal Echoes is designed for progressive complexity. Do not read it cover to cover. You will be overwhelmed and you will quit. Read in stages.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 5,
    act: 1
  }))), /*#__PURE__*/React.createElement("h4", {
    className: "interlude-eyebrow"
  }, inline(`YOUR FIRST 3 OR 4 SESSIONS — READ ONLY THIS`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Chapters 1–5 (Chapters 1–5 of Temporal Echoes) The Action Oracle (Appendix C.3) This is all you need to survive your first jumps. You will not understand the rest yet. That is intentional.`))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 5,
      "text": "A bit pretentious. Going to play along. Starting with Anachron and seeing if I can keep an Echo intact.",
      "act": 1,
      "late": false
    }]
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "front-03",
    label: "FRONT MATTER · spread 3"
  }, /*#__PURE__*/React.createElement(IlPage, {
    side: "verso",
    showTexture: false,
    pageNum: basePage + 4,
    label: `FRONT MATTER · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "interlude-eyebrow"
  }, inline(`WHEN CRISIS HITS (PARADOX 7+ OR COHERENCE −6) — ADD THIS`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Chapter 6: Crisis Management Chapter 7: Advanced Systems Faction Profiles (Appendix D) The universe has noticed you. Now you need the rules of engagement.`))), /*#__PURE__*/React.createElement("h4", {
    className: "interlude-eyebrow"
  }, inline(`ENDGAME & DEEP REFERENCE — UNLOCK WHEN READY`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Harmonic Codex (Appendix A) — the physics behind everything Full Oracle Tables (Appendix C.1 & C.2) Captivity Vignettes (Appendix E) Chapter 8: Long-Term Play Start simple. The complexity will find you.`))), /*#__PURE__*/React.createElement("h4", {
    className: "interlude-eyebrow"
  }, inline(`YOUR FIRST SESSION — A GUIDED START`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Don't read the whole book. Do this instead:`))), /*#__PURE__*/React.createElement("ol", {
    className: "interlude-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Read the Foreword — 'A Note Before You Begin.' Feel the vibe.`)), /*#__PURE__*/React.createElement("li", null, inline(`Create your Echo (Chapter 2). Follow the steps. Use pencil. Spend no more than 30 minutes. Perfect is the enemy of started.`)), /*#__PURE__*/React.createElement("li", null, inline(`Read 'Opening the Session' (Chapter 3). Answer the question: What is my Echo trying to find out right now?`)), /*#__PURE__*/React.createElement("li", null, inline(`Roll on the Anomaly Tables (Appendix C.1). This is where you land. Don't try to Navigate yet.`)), /*#__PURE__*/React.createElement("li", null, inline(`Write in your Chronicle. What do you see? Who is here? What feels wrong?`)), /*#__PURE__*/React.createElement("li", null, inline(`Want something? Roll for it. `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + your best Mode. If a Memory fits, add +2.`)), /*#__PURE__*/React.createElement("li", null, inline(`End the scene. Write what changed.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`That's it. You've played your first session. The Factions, the Crises, the full Navigation system — they'll find you when you're ready. You don't need to understand the whole ocean. You just need to survive this wave.`)))), /*#__PURE__*/React.createElement(IlPage, {
    side: "recto",
    showTexture: false,
    pageNum: basePage + 5,
    label: `FRONT MATTER · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "interlude-eyebrow"
  }, inline(`DOCUMENT STRUCTURE`)), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Book 1: Temporal Echoes (Chapters 1-8) Dr. Eleanor Chen's preservation manual.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 6,
    act: 1
  }))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Book 2: emiT (Chapters 1-6) Alan Rose's transformation protocol.`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Appendices: Appendix A: The Harmonic Codex Appendix B: Asset Catalogs Appendix C: Oracle Tables C.1: Anomaly Tables (Temporal Echoes) C.2: The Chronoscape (emiT) C.3: Shared Oracles Appendix D: The Factions Appendix D.1: Recovered Field Intelligence Appendix E: Captivity Vignettes Appendix F: Examples of Play Appendix G: Temporal Pathologies Appendix H: Recovered Testimony — The Saul Files Quick Reference Sheet Character Sheets`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`TEMPORAL ECHOES`)))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`A Solo Journaling RPG About Memory, Loss, and the Fight to Stay Human`)))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`By Dr. Eleanor Chen`))), /*#__PURE__*/React.createElement("div", {
    className: "interlude-pull"
  }, /*#__PURE__*/React.createElement("i", null, inline(`Hoc fit, ergo diligenter lege.`))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 6,
      "text": "Eight appendices for a \"first 3 sessions\" game. The author needs a Reduction phase. Structure is solid though.",
      "act": 1,
      "late": false
    }]
  }))));
}
FrontMatter.pages = 6;
Object.assign(window, {
  FrontMatter
});
