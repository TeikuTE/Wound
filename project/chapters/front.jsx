// AUTO-GENERATED — front — FRONT MATTER
function FrontMatter({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="front-cover" label={"Front Matter · title"}>
      <IlPage side="verso" showTexture={false} label="half-title">
        <div className="il-halftitle">
          <div className="il-halftitle__mark">WOUND</div>
          <div className="il-halftitle__sub">Temporal Echoes / emiT</div>
        </div>
      </IlPage>
      <IlPage side="recto" showTexture={false} label="title">
        <div className="il-titlepage">
          <div className="il-titlepage__sigil"><img src="assets/wound-sigil.svg" alt="" /></div>
          <div className="il-titlepage__sup">WOUND · TEMPORAL ECHOES · emiT</div>
          <h1 className="il-titlepage__title">A Solo Journaling RPG<br />Duology About Memory, Loss,<br />and What We Become</h1>
          <div className="il-titlepage__rule" />
          <div className="il-titlepage__sub">First Edition · 2026</div>
        </div>
      </IlPage>
    </Spread>
    <Spread id="front-01" label={"FRONT MATTER · spread 1"}>
      <IlPage side="verso" showTexture={false} pageNum={basePage + 0} label={`FRONT MATTER · p.${basePage + 0}`}>
        <div className="interlude-body"><p><i>{inline(`A Solo Journaling RPG Duology About Memory, Loss, and What We Become`)}</i></p></div>
        <div className="interlude-body"><p>{inline(`First Edition, 2025 · ©2026 All Rights Reserved temporalechoesgame@gmail.com`)}</p></div>
        <div className="al-rule" aria-hidden />
        <h2 className="il-h2">{inline(`A NOTE BEFORE YOU BEGIN`)}</h2>
        <div className="interlude-body"><p>{inline(`You're reading something that came to me at the lowest point in my life.`)}</p></div>
        <div className="interlude-body"><p>{inline(`I had just gotten out of the hospital with my kid, a beautiful eight-month-old boy who worked harder than anyone I've ever met at the things most of us take for granted — eating and breathing. We went to the hospital after seven months of constant screaming, endless vomiting, and only gaining one pound. If you aren't a parent, take my word: it was bad.`)}</p></div>
        <div className="interlude-body"><p>{inline(`During the first seven months after my wife had given birth, we were in a constant struggle for survival. Visiting specialists whose titles I couldn't pronounce, never sleeping more than an hour at a time because every time he wakes up is an opportunity to get some more calories in. Fighting with feeding trackers and hollowing ourselves out, day by day, while we wondered what was wrong with our kid and why no one had an answer.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Getting to the hospital was a relief, in a way. It meant the cavalry had arrived and we could — well, not relax, but finally let an adult figure out what was going on. Turns out, our kid had an ultra-rare lung disease. Only about a thousand babies in the world have it. He'd need a feeding tube and twenty-four-hour oxygen — but he'd be alright in the long run.`)}</p></div>
      </IlPage>
      <IlPage side="recto" showTexture={false} pageNum={basePage + 1} label={`FRONT MATTER · p.${basePage + 1}`}>
        <div className="interlude-body"><p>{inline(`Of course, that didn't count for much when I arrived back in the office. After a week back, my boss and the manager called me in for a meeting on a half hour's notice. They didn't tell me what it was about. They slid some papers across the table at me. Performance Improvement Plan. 'We want this to work, but your numbers were just too low these past few months. But we like you. The problem is that you're just too damn likable.' They slapped me on the back and said I was a good man. I was numb, but I'd been through tougher straits before. I'd buckle down and beat the PIP. After all, what is getting told that you're not good enough compared to watching your child fight for his life?`)}</p></div>
        <div className="interlude-body"><p>{inline(`But then, the kicker came.`)}</p></div>
        <div className="interlude-body"><p>{inline(`I lost my tefillin. If you know you know. Between my kid's health issues, the pressures of my job, and my newfound inability to connect with God in the way I'd done for over two decades, I finally crumpled. I sat down in my office's wellness room — reserved for nursing mothers, but I didn't care — and cried like my baby couldn't.`)}</p></div>
        <div className="interlude-body"><p>{inline(`I saw these two manuscripts in the corner of the room, tied together with a bit of twine. Stains streaked the pages — I couldn't tell if it was ink, blood or something else.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Screw it.`)}</p></div>
        <div className="interlude-body"><p>{inline(`If you're reading this, it means you found this copy. If you're holding it in your hands — be careful what you write in the margins. The book remembers.`)}</p></div>
      </IlPage>
    </Spread>
    <Spread id="front-02" label={"FRONT MATTER · spread 2"}>
      <IlPage side="verso" showTexture={false} pageNum={basePage + 2} label={`FRONT MATTER · p.${basePage + 2}`}>
        <div className="interlude-body"><p>{inline(`I didn't know then that the two voices arguing in those pages had once been something like friends. Something like allies. They shared a moment I've only glimpsed in fragments — a night in 1944, a burning building, a choice that broke four people into the four philosophies that now hunt each other across the timestream.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Temporal Echoes is Dr. Eleanor Chen's preservation manual. She believes you can come home intact. She's spent thirty years documenting how to survive displacement without losing yourself.`)}</p></div>
      </IlPage>
      <IlPage side="recto" showTexture={false} pageNum={basePage + 3} label={`FRONT MATTER · p.${basePage + 3}`}>
        <div className="interlude-body"><p>{inline(`emiT is Alan Rose's transformation protocol. He believes trying to preserve your original identity is expensive, painful, and ultimately futile. His book is about becoming operationally effective through change — about finding out what you're capable of when you stop spending everything you have on staying the same.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Both books use the same mechanical systems. Both are brutal. Neither wins.`)}</p></div>
        <h4 className="interlude-eyebrow">{inline(`HOW TO USE THIS BOOK`)}</h4>
        <div className="interlude-body"><p>{inline(`This duology is two complete, playable games. You can read and play either book independently. If you play both with the same Echo — first Chen's path, then Alan's — something additional opens up: a conversation between the two books about what preservation costs and what transformation takes. The rules for carrying a character between them are in the section called Playing Both.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Temporal Echoes is designed for progressive complexity. Do not read it cover to cover. You will be overwhelmed and you will quit. Read in stages.`)}</p></div>
        <h4 className="interlude-eyebrow">{inline(`YOUR FIRST 3 OR 4 SESSIONS — READ ONLY THIS`)}</h4>
        <div className="interlude-body"><p>{inline(`Chapters 1–5 (Chapters 1–5 of Temporal Echoes) The Action Oracle (Appendix C.3) This is all you need to survive your first jumps. You will not understand the rest yet. That is intentional.`)}</p></div>
      </IlPage>
    </Spread>
    <Spread id="front-03" label={"FRONT MATTER · spread 3"}>
      <IlPage side="verso" showTexture={false} pageNum={basePage + 4} label={`FRONT MATTER · p.${basePage + 4}`}>
        <h4 className="interlude-eyebrow">{inline(`WHEN CRISIS HITS (PARADOX 7+ OR COHERENCE −6) — ADD THIS`)}</h4>
        <div className="interlude-body"><p>{inline(`Chapter 6: Crisis Management Chapter 7: Advanced Systems Faction Profiles (Appendix D) The universe has noticed you. Now you need the rules of engagement.`)}</p></div>
        <h4 className="interlude-eyebrow">{inline(`ENDGAME & DEEP REFERENCE — UNLOCK WHEN READY`)}</h4>
        <div className="interlude-body"><p>{inline(`The Harmonic Codex (Appendix A) — the physics behind everything Full Oracle Tables (Appendix C.1 & C.2) Captivity Vignettes (Appendix E) Chapter 8: Long-Term Play Start simple. The complexity will find you.`)}</p></div>
        <h4 className="interlude-eyebrow">{inline(`YOUR FIRST SESSION — A GUIDED START`)}</h4>
        <div className="interlude-body"><p>{inline(`Don't read the whole book. Do this instead:`)}</p></div>
        <ol className="interlude-numlist"><li>{inline(`Read the Foreword — 'A Note Before You Begin.' Feel the vibe.`)}</li><li>{inline(`Create your Echo (Chapter 2). Follow the steps. Use pencil. Spend no more than 30 minutes. Perfect is the enemy of started.`)}</li><li>{inline(`Read 'Opening the Session' (Chapter 3). Answer the question: What is my Echo trying to find out right now?`)}</li><li>{inline(`Roll on the Anomaly Tables (Appendix C.1). This is where you land. Don't try to Navigate yet.`)}</li><li>{inline(`Write in your Chronicle. What do you see? Who is here? What feels wrong?`)}</li><li>{inline(`Want something? Roll for it. `)}<b>{inline(`2d6`)}</b>{inline(` + your best Mode. If a Memory fits, add +2.`)}</li><li>{inline(`End the scene. Write what changed.`)}</li></ol>
      </IlPage>
      <IlPage side="recto" showTexture={false} pageNum={basePage + 5} label={`FRONT MATTER · p.${basePage + 5}`}>
        <div className="interlude-body"><p>{inline(`That's it. You've played your first session. The Factions, the Crises, the full Navigation system — they'll find you when you're ready. You don't need to understand the whole ocean. You just need to survive this wave.`)}</p></div>
        <h4 className="interlude-eyebrow">{inline(`DOCUMENT STRUCTURE`)}</h4>
        <div className="interlude-body"><p>{inline(`Book 1: Temporal Echoes (Chapters 1-8) Dr. Eleanor Chen's preservation manual.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Book 2: emiT (Chapters 1-6) Alan Rose's transformation protocol.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Appendices: Appendix A: The Harmonic Codex Appendix B: Asset Catalogs Appendix C: Oracle Tables C.1: Anomaly Tables (Temporal Echoes) C.2: The Chronoscape (emiT) C.3: Shared Oracles Appendix D: The Factions Appendix D.1: Recovered Field Intelligence Appendix E: Captivity Vignettes Appendix F: Examples of Play Appendix G: Temporal Pathologies Appendix H: Recovered Testimony — The Saul Files Quick Reference Sheet Character Sheets`)}</p></div>
        <div className="interlude-body"><p><i>{inline(`TEMPORAL ECHOES`)}</i></p></div>
        <div className="interlude-body"><p><i>{inline(`A Solo Journaling RPG About Memory, Loss, and the Fight to Stay Human`)}</i></p></div>
        <div className="interlude-body"><p>{inline(`By Dr. Eleanor Chen`)}</p></div>
        <div className="interlude-pull"><i>{inline(`Hoc fit, ergo diligenter lege.`)}</i></div>
      </IlPage>
    </Spread>
  </>);
}

FrontMatter.pages = 6;
Object.assign(window, { FrontMatter });
