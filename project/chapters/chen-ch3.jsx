// AUTO-GENERATED — chapter/chen ch3 — A SESSION OF PLAY
function ChenCh3({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="chen-3-01" label="A SESSION OF PLAY · spread 1">
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="Chen Ch 3 · Opener">
        <ChenChapterHead icon="assets/chen-icon-irregular-sine.svg" number="III" title="A Session of Play" />
      </ChPage>
    </Spread>
    <Spread id="chen-3-02" label="A SESSION OF PLAY · spread 2">
      <ChPage side="verso" runHead="A Session of Play" pageNum={(basePage + 2)} label={`Chen · A SESSION OF PLAY · p.${(basePage + 2)}`}>
        <h3 style={{margin:'4mm 0 1mm', fontFamily:"var(--ff-serif-display)", fontWeight:600, fontSize:'12pt', color:'var(--el-forest)', fontVariant:'small-caps', letterSpacing:'0.08em'}}>Opening the Session</h3>
        <ChenBody columns={1}><p>{inline(`Before you write anything else, write down at least one question your Echo is trying to find out the answer to right now. This question is your compass. A scene that answers it — partly, badly, ambiguously — is a scene that did its job. Examples I see often: Can I trust this professor? What happened to my daughter in this timeline? Why does this era feel wrong? What are the Factions hiding here? Not what they want to achieve. What they need to understand. A question, not a goal. This question is your compass for the session. When a scene answers it — even partially, even badly — that scene is complete. Examples: Can I trust this professor? What happened to my daughter in this timeline? Why does this era feel wrong? What are the Factions hiding here? Framing a Scene A scene begins when your Echo wants something specific from a specific person or place. To frame it, answer three things in your Chronicle: Where am I? Use your established Era and Location, or roll a new`)}</p></ChenBody>
        
      </ChPage>
      <ChPage side="recto" runHead="A Session of Play" pageNum={(basePage + 3)} label={`Chen · A SESSION OF PLAY · p.${(basePage + 3)}`}>
        <ChenBody columns={1}><p>{inline(`Location if you've moved. Who's here? An NPC from a previous session, a new character from an oracle, or no one. What do I want from them? Information, safe passage, a moment of peace, to hurt them, to save them. If you don't know what your Echo wants, roll on the Action Oracle and ask: what is the situation demanding of me? When to Roll Three conditions decide whether to roll. The Echo wants the thing badly enough to risk something getting it. The outcome is uncertain. And failure would change the story in a way you'd want to write down. When all three are present, roll. When any is missing, just write what happens. That said, If you don't give the Chronoverse a chance to push back on you regularly, it will end up taking from you catastrophically. Pick up the dice. Name the action. Choose the Mode that matches how you're trying to survive it — OBSERVE to read the room, SYNC to bend to it, ENDURE to outlast it, DISRUPT to break it. If a Memory matches the context, let it guide you. Note: if the current situation resonates with a Memory strongly enough that the past is actively informing your present, you may be able to invoke it for a deeper bonus — see 'Temporal Echoes: When the Past Bleeds Through' in Chapter 5 for the full procedure. Record it all. The Chronicle is the only proof you were ever here.`)}</p></ChenBody>
        
      </ChPage>
    </Spread>
    <Spread id="chen-3-03" label="A SESSION OF PLAY · spread 3">
      <ChPage side="verso" runHead="A Session of Play" pageNum={(basePage + 4)} label={`Chen · A SESSION OF PLAY · p.${(basePage + 4)}`}>
        <div style={{margin:'4mm -2mm', background:'rgba(13,15,18,0.94)', color:'var(--al-ghost)', fontFamily:'var(--ff-hand)', fontSize:'13pt', lineHeight:1.25, padding:'4mm 6mm', transform:'rotate(-0.6deg)', boxShadow:'0 2px 8px rgba(13,15,18,0.35)'}}><p style={{margin:0}}>**10+** Complete Success. You achieve your goal cleanly. Gain +1 Wave Coherence. **7-9** Success with Complication. You succeed, but there's a cost, twist, or new problem. Coherence unchanged. **6-** Failure with Opportunity. You fail, but discover something useful or a new path opens. Lose 1 Coherence OR mark 1 Paradox (your choice). One of my favorite lies in this whole manual. You rolled a 12, congratulations. Reality bends for you. You feel synchronized. Chen calls this Complete Success. I call it Borrowed Time. Because I've rolled 10+ on Navigation a dozen times, landed exactly where I wanted, felt that sweet surge of Coherence — and then watched the timeline I just successfully navigated collapse three weeks later because I didn't understand what I was aligning with. Your dice said success. The Chronoverse is still deciding.</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'11pt', opacity:0.85}}>—AR</div></div>
        <ChenBody columns={1}><p>{inline(`Ending a Scene A scene ends when: you get what you wanted (success, clean or complicated), you clearly don't get what you wanted (failure), or the situation changes so completely that a new want replaces the old one. When the scene ends, write in your Chronicle: what changed? And what question are you carrying into the next scene? Moving Between Scenes Ask: do I stay here, or go somewhere else? If you stay, the next scene happens in the same location — moments or hours later. Something has changed. If you go, decide where. If you're leaving the era entirely, that's a Navigation roll (see below) or forced displacement. Closing the Session A session ends when you've answered your opening question (or learned it cannot be answered here), you've played for one to three hours and feel a natural pause, or a Crisis forces a major change that ends the current chapter of your story. Then perform Downtime. Before you close the book, answer your opening question in your Chronicle — even if the answer is 'I couldn't find out' or 'I found out and wish I hadn't.' Then write what that answer makes you need to know next. The loop: open with a question, close by answering it, let the answer generate the next question. Each session is a closed loop that opens another. Do not aim for a specific number of scenes. You are done when the question has an answer.`)}</p></ChenBody>
        
      </ChPage>
      <ChPage side="recto" runHead="A Session of Play" pageNum={(basePage + 5)} label={`Chen · A SESSION OF PLAY · p.${(basePage + 5)}`}>
        <div style={{margin:'4mm 0', paddingLeft:'5mm', borderLeft:'0.5pt solid var(--el-gold)', fontStyle:'italic', fontFamily:'var(--ff-serif-body)', fontSize:'9.5pt', lineHeight:1.4, color:'var(--el-annotation)'}}><p style={{margin:0}}>{inline(`Turing proved that no algorithm can determine, in general, whether an arbitrary program will halt. Navigation has a similar problem. There is no procedure that can tell you, in advance, whether a Jump will resolve cleanly or fragment you. You roll, you commit, you find out. The undecidability is a fundamental property of time in the Chronoverse.`)}</p><div style={{textAlign:'right', marginTop:'1mm', fontSize:'8.5pt', fontStyle:'italic'}}>— EC</div></div>
        <ChenBody columns={1}><p>{inline(`Volve, Nota et Memento.`)}</p></ChenBody>
        
      </ChPage>
    </Spread>
  </>);
}

ChenCh3.pages = 6;
Object.assign(window, { ChenCh3 });