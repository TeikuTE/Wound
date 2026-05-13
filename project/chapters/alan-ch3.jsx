// AUTO-GENERATED — chapter/alan ch3 — OPERATIONAL
function AlanCh3({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="alan-3-01" label="OPERATIONAL · spread 1">
      <AlPage side="verso" label="(blank)" />
      <AlPage side="recto" label="Alan Ch 3 · Opener">
        <AlanChapterHead entry={3} sub="OPERATIONAL" coord="[TEMPORAL LOG // ENTRY_003 // ERA: 28 // NODE: OPERATIONAL]" />
        <AlanFragment top={170} right={4} rotate={-3} size={9}>// 2287.132.0001</AlanFragment>
      </AlPage>
    </Spread>
    <Spread id="alan-3-02" label="OPERATIONAL · spread 2">
      <AlPage side="verso" runHead="ENTRY_003" pageNum={(basePage + 2)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 2)}`}>
        <h2 className="al-h2">// PROCEDURES</h2>
        <AlanBody><p>{inline(`[Z] Memory is not storage. Memory is structure. When the structure fails, the building does not empty — it collapses. In the rubble, we find weapons. Resolution (The Collapse Protocol) When outcomes are uncertain, roll 2d6 + Mode + Scar Bonus (if applicable). 12+ Complete Success. Achieve goal cleanly. Reality bends. Gain +1 Coherence. 7-9 Success with Complication. Achieve goal but the Oracle introduces cost, twist, or new danger.`)}</p></AlanBody>
        
      </AlPage>
      <AlPage side="recto" runHead="ENTRY_003" pageNum={(basePage + 3)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 3)}`}>
        <AlanBody><p>{inline(`6- Failure with Discovery. Goal fails, but you learn something useful. Choose: lose 1 Coherence OR mark +1 Paradox. Navigation (Controlled Displacement) Jumping is usually something that happens to you — but you can attempt Precision Navigation. Roll 2d6 + OBSERVE + Scar Bonus (if applicable). Every Navigation attempt costs 1 Coherence, paid before rolling. Involuntary jumps don't cost Coherence — they just happen to you.`)}</p></AlanBody>
        <h2 className="al-h2">// TARGET DIFFICULTY EXAMPLE</h2>
        <AlanBody><p>{inline(`Difficulty 7: Nearby (±0 years) or a 1890s London, again place you've been before Difficulty 10: Distant (±00-500 years) Ming Dynasty China or unfamiliar location Difficulty 12: Extreme (±000+ years) The exact hour of the First Scar or a specific moment 12+ Perfect Landing. Arrive exactly when and where intended. No complications. Gain +1 Coherence. 10-11 Successful Navigation. Arrive at intended destination. Mark +1 Paradox from the effort. 7-9 Close Enough. Arrive in correct era but wrong location, or correct location but off by 1d10 years. Mark +1 Paradox. Oracle introduces a complication at arrival. 6- Crash Landing. You missed and hit something harder. Roll the Chronoscape Oracle. Pay the toll: System Shock (lose 1 Coherence, stay clean) OR Embrace the Glitch (mark +2 Paradox, let the Corruption in). AT PARADOX 7+: NAVIGATION COLLAPSE You cannot roll Precision Navigation. State your intention, roll the Chronoscape, and argue with the results. If you want the wheel back, you have to sell parts of yourself — lower Paradox via Agent Offers — to get it. Wave Coherence`)}</p></AlanBody>
        
      </AlPage>
    </Spread>
    <Spread id="alan-3-03" label="OPERATIONAL · spread 3">
      <AlPage side="verso" runHead="ENTRY_003" pageNum={(basePage + 4)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 4)}`}>
        <div style={{margin:'5mm 0', paddingLeft:'4mm', fontFamily:'var(--ff-mono)', fontWeight:300, fontStyle:'italic', fontSize:'9pt', lineHeight:1.4, color:'var(--al-typewriter)'}}><p style={{margin:0}}>{inline(`Your synchronization with the current timestream. Tracks from -6 to your maximum. Your maximum Wave Coherence = Corruption Vector + 3. At Vector 5 (fully human) your ceiling is 8, same as Chen's starting max. At Vector 0 (fully corrupted) your ceiling is 3. The further you transform, the less coherence you can hold. That's not a bug.`)}</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'8.5pt'}}>// AR</div></div>
        <h2 className="al-h2">// STATE EFFECT</h2>
        <AlanBody><p>{inline(`Synchronized (+4 to +8) +1 to all rolls Flux (0 to +3) No modifier Crisis (-6 to -1) -1 to all rolls. At -6: trigger Fracture Event. Paradox (Temporal Contamination) Track from 0 to 10+. Generate Paradox when you alter recorded history significantly (+1 to +3), share anachronistic knowledge (+1), create causal loops (+2), or use glitching Chrono-Tech (+1).`)}</p></AlanBody>
        <h2 className="al-h2">// HIGH PARADOX ISN'T JUST DANGER</h2>
        <div style={{margin:'5mm 0', paddingLeft:'4mm', fontFamily:'var(--ff-mono)', fontWeight:300, fontStyle:'italic', fontSize:'9pt', lineHeight:1.4, color:'var(--al-typewriter)'}}><p style={{margin:0}}>{inline(`Look at those Mode shifts again. At Paradox 7-9, your DISRUPT is +2, your ENDURE is +2. You're being hunted. You're also powerful. At Paradox 10+, your DISRUPT is +3, your ENDURE is +3. You've become priority target and extremely difficult to kill.`)}</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'8.5pt'}}>// AR</div></div>
        <AlanBody><p>{inline(`Memory System`)}</p></AlanBody>
        <AlanFragment top={49} left={6} rotate={-3.0} size={9}>Chen gets a comfortable Flux band to drift in. You don't. You've got three point</AlanFragment>
      </AlPage>
      <AlPage side="recto" runHead="ENTRY_003" pageNum={(basePage + 5)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 5)}`}>
        <div style={{margin:'5mm 0', paddingLeft:'4mm', fontFamily:'var(--ff-mono)', fontWeight:300, fontStyle:'italic', fontSize:'9pt', lineHeight:1.4, color:'var(--al-typewriter)'}}><p style={{margin:0}}>{inline(`Five Active Scars (+2 bonus), three Fading Scars (+1 bonus), one Core Scar (+3 bonus — costs 3 Coherence to lock). When you experience something significant, create a new Scar and push everything forward. When a Scar becomes Lost: gain a Mutation (permanent personality change). Choose from phantom reflex, emotional void, sensory glitch, or behavioral rewire. In emiT, when a Scar is Lost, it becomes a Mutation. The identity wound externalizes into temporal corruption. This is the conversion rate of selfhood into survival.`)}</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'8.5pt'}}>// AR</div></div>
        <h2 className="al-h2">// WEAPONIZING SCARS</h2>
        <AlanBody><p>{inline(`You can spend Scars offensively. Invoke a Scar for its bonus, then burn it to: deal direct damage to a situation, NPC, or timeline; force reality to accept a contradiction; or make someone forget something specific. Cost: Scar becomes Lost immediately, gain a Mutation.`)}</p></AlanBody>
        <div style={{margin:'5mm -2mm', background:'var(--el-parchment)', color:'var(--el-forest)', fontFamily:'var(--ff-mono)', fontSize:'9pt', lineHeight:1.4, padding:'4mm 6mm', transform:'rotate(0.6deg)', boxShadow:'2px 3px 10px rgba(13,15,18,0.5)'}}><div style={{fontFamily:'var(--ff-mono)', fontWeight:300, fontSize:'7pt', color:'var(--al-steel)', marginBottom:'2mm', letterSpacing:'0.04em'}}>Dr. Eleanor Chen // [DATE UNKNOWN]</div><p style={{margin:0}}>{inline(`Alan, stop. You're teaching them to weaponize their trauma and frame permanent psychological damage as Mutations. This isn't strength. This is dissociative coping that will leave them unable to connect with anyone, unable to feel normally, unable to recognize themselves. You're still here after 340 years. But are you still you? Can you even answer that question anymore?`)}</p></div>
        <AlanBody><p>{inline(`[CHEN]: Four?`)}</p></AlanBody>
        <AlanFragment top={98} right={6} rotate={-3.0} size={9}>Call it tactical expenditure of identity. Call it self-destruction. Both lines l</AlanFragment>
        <AlanFragment top={146} right={6} rotate={-1.5} size={9}>Buzz off, doc. It's not like you remember what happened. Otherwise you'd be on m</AlanFragment>
      </AlPage>
    </Spread>
    <Spread id="alan-3-04" label="OPERATIONAL · spread 4">
      <AlPage side="verso" runHead="ENTRY_003" pageNum={(basePage + 6)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 6)}`}>
        <div style={{margin:'3mm 0 1mm', fontFamily:'var(--ff-mono)', fontWeight:700, fontSize:'10pt', color:'var(--al-electric)', textTransform:'uppercase', letterSpacing:'0.04em'}}>// The Corruption Log</div>
        <AlanBody><p>{inline(`Document your transformation in your journal. Track: current Paradox state, Corruption Vector progress, Scars acquired and spent, Mutations gained, what you took from each era. Creating a detailed entry grants +1 Paradox — not Coherence. You grow stronger by documenting corruption, not by clinging to your origin. The Violence Tax`)}</p></AlanBody>
        <div style={{margin:'5mm 0', paddingLeft:'4mm', fontFamily:'var(--ff-mono)', fontWeight:300, fontStyle:'italic', fontSize:'9pt', lineHeight:1.4, color:'var(--al-typewriter)'}}><p style={{margin:0}}>{inline(`Violence is taxed. The tax is paid in pieces of you that you don't get back. Ten violent acts. The tracker fills as you act. At the end of every Repreival, the tracker resets — but only after you pay. The payment options are: a Mutation, the loss of a Scar that was useful to you, or being witnessed by someone whose memory of you was clean. I have hit the tracker reset eleven times. I no longer remember which payments I chose for the first six. I remember the witnessed ones. I remember the faces of the people who saw me do what I did. They are the ones still in my head, even after the rest of the violence has filed itself away into something that feels almost neutral. The tax is not a punishment. It is the cost of doing this. The illusion is that there will be a moment of cleanness — a reset where the blood is off your hands. There is not. There is only the next Repreival, the next payment, the next thing you do not get back.`)}</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'8.5pt'}}>// AR</div></div>
        <AlanBody><p>{inline(`When you succeed with DISRUPT (any result), roll d6. On 3-6: no tax this time. On 1-2: pay the Tax.`)}</p></AlanBody>
        <h2 className="al-h2">// PAYING THE TAX</h2>
        <AlanBody><p>{inline(`Choose ONE option you have NOT chosen since your last Repreival. If all options have been chosen since last Repreival, you must take a Mutation.`)}</p></AlanBody>
        <AlanFragment top={98} left={6} rotate={-3.0} size={9}>Violence works. It also corrupts you in real time. The Tax is how we keep that v</AlanFragment>
      </AlPage>
      <AlPage side="recto" runHead="ENTRY_003" pageNum={(basePage + 7)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 7)}`}>
        <AlanBody><p>{inline(`Mutation — gain a permanent personality change immediately Scar Loss — one Active Scar becomes Lost immediately (gain Mutation from the loss) Witnessed — mark WITNESSED; your next social interaction this era takes -1 SYNC and the Oracle introduces someone responding to what they saw you become`)}</p></AlanBody>
        <h2 className="al-h2">// VIOLENCE ESCALATION</h2>
        <AlanBody><p>{inline(`Track VIOLENCE COUNT (starts at 0 each session). Each time you trigger the Violence Tax, increase the count by 1. When you take Repreival, reset Violence Count to 0.`)}</p></AlanBody>
        <AlanFragment top={170} right={6} rotate={-3.0} size={9}>The count is narrative pressure. By the fourth or fifth Tax of a session, the co</AlanFragment>
      </AlPage>
    </Spread>
    <Spread id="alan-3-05" label="OPERATIONAL · spread 5">
      <AlPage side="verso" runHead="ENTRY_003" pageNum={(basePage + 8)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 8)}`}>
        <div style={{margin:'5mm 0', paddingLeft:'4mm', fontFamily:'var(--ff-mono)', fontWeight:300, fontStyle:'italic', fontSize:'9pt', lineHeight:1.4, color:'var(--al-typewriter)'}}><p style={{margin:0}}>{inline(`I never took Holding Actions for the first 200 years. Not because I didn't want to. Because I convinced myself they didn't work. Every time I considered one, I'd think: this costs resources. What's the return? Where's the tactical advantage? And I'd choose Violence Tax instead. Because Violence Tax works. But here's what I didn't calculate: Violence Tax works and empties you. Holding Actions often don't work mechanically. But they're the only thing that reminds you why survival mattered in the first place. By the time I figured that out, I'd forgotten what I was trying to preserve. Maybe if I'd failed more Holding Actions, I'd still know.`)}</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'8.5pt'}}>// AR</div></div>
        
      </AlPage>
      <AlPage side="recto" runHead="ENTRY_003" pageNum={(basePage + 9)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 9)}`}>
        <div style={{margin:'5mm -2mm', background:'var(--el-parchment)', color:'var(--el-forest)', fontFamily:'var(--ff-mono)', fontSize:'9pt', lineHeight:1.4, padding:'4mm 6mm', transform:'rotate(0.6deg)', boxShadow:'2px 3px 10px rgba(13,15,18,0.5)'}}><div style={{fontFamily:'var(--ff-mono)', fontWeight:300, fontSize:'7pt', color:'var(--al-steel)', marginBottom:'2mm', letterSpacing:'0.04em'}}>Dr. Eleanor Chen // [DATE UNKNOWN]</div><p style={{margin:0}}>{inline(`Alan tried a Holding Action in session 847. He was in 1920s Berlin. Met a woman who reminded him of Sarah. Spent an entire scene teaching her to play chess because Sarah used to play chess. He rolled 7-9. No mechanical benefit. He wrote in his Log: 'Wasted scene. Should have Navigated instead.' Three sessions later, he couldn't remember Sarah's face. The Holding Action wasn't wasted. It was the last time he connected with anything real. The 7-9 didn't give Coherence. It gave meaning. He just couldn't see the difference anymore.`)}</p></div>
        <div style={{margin:'5mm 0', paddingLeft:'4mm', fontFamily:'var(--ff-mono)', fontWeight:300, fontStyle:'italic', fontSize:'9pt', lineHeight:1.4, color:'var(--al-typewriter)'}}><p style={{margin:0}}>{inline(`I should say something about Chen before we go further. She's not what she sounds like. The clinical detachment, the equations, the calm voice. That's the armor, not the woman. When we worked together in the eighties she used to make tea on a hot plate and would sing to herself. She kept the same chipped mug for nine years. The hum got into her recordings and she just left it there. Said the equipment could deal with it. Chen is softer than she lets on, and that softness got many, many people killed.`)}</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'8.5pt'}}>// AR</div></div>
        <AlanBody><p>{inline(`Repreival`)}</p></AlanBody>
        <div style={{margin:'5mm 0', paddingLeft:'4mm', fontFamily:'var(--ff-mono)', fontWeight:300, fontStyle:'italic', fontSize:'9pt', lineHeight:1.4, color:'var(--al-typewriter)'}}><p style={{margin:0}}>{inline(`Not a reprieve. A reprieve implies you're forgiven, or that you've earned a rest. This is a Repreival - a temporary stay of execution. You're still being hunted. The timeline still wants you normalized. You're just getting a few hours where nothing is actively trying to end you. Use them.`)}</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'8.5pt'}}>// AR</div></div>
        <h2 className="al-h2">// WHEN TO TAKE REPREIVAL</h2>
        <AlanBody><p>{inline(`After every Navigation roll or Displacement, OR at the end of your real-world play session if neither occurred.`)}</p></AlanBody>
        <h2 className="al-h2">// REPREIVAL RITUAL (IN ORDER)</h2>
        
      </AlPage>
    </Spread>
    <Spread id="alan-3-06" label="OPERATIONAL · spread 6">
      <AlPage side="verso" runHead="ENTRY_003" pageNum={(basePage + 10)} coordStamp="[LOG // ENTRY_003]" label={`Alan · OPERATIONAL · p.${(basePage + 10)}`}>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Chronicle. Write in your Log: where and when you are, what`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`happened, one significant choice you made, one thing you lost or changed. Don't pretty it up. If you write enough, you might trick your brain into thinking you're real. Effect: gain +1 Coherence.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Fix the Anchor. If your Anchor took Stress, roll 2d6 + SYNC`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`(Difficulty 10). 10+: clear all Anchor Stress. Good as new. 7-9: clear 1 Stress. You patched one hole. 6-: no Stress cleared. It's still junk.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Scavenge Assets. For each Stressed Asset, roll 2d6 +`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`relevant Mode. 10+: clear all Stress. Working again. 7-9: clear 1 Stress. Working mostly. 6-: still trash. If an Asset is fully broken, spend the whole Repreival fixing it or find a replacement.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Let It Rot. Your oldest Active Scar fades. Your oldest Fading`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`Scar vanishes and leaves a Mutation behind. Your Core Scar never fades. Create new Scars for significant events. You can't stop the rot. You can only watch it.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Cool Down (Optional). Try to lower your Paradox, or don't.`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`Temporal Grounding: Roll 2d6 + SYNC (Difficulty 10). On 10+: reduce Paradox by 2. On 7-9: reduce by 1. Ritual Purification: Reduce Paradox by 1d6. The cost depends on method, and a Faction's "cleaning" costs you a piece of your soul. Run hot. See what happens.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Next Target. Answer in your Log: What am I trying to break`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`next? Write it down. If you don't have a target, you're just waiting to die.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Reset Violence Count to 0.`)}</li></ol></AlanBody>
        
      </AlPage>
      <AlPage side="recto" label="(blank)" />
    </Spread>
  </>);
}

AlanCh3.pages = 11;
Object.assign(window, { AlanCh3 });