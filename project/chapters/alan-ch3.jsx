// AUTO-GENERATED — alan-3 — OPERATIONAL PROCEDURES
function AlanCh3({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="alan-3-opener" label={"OPERATIONAL PROCEDURES · opener"}>
      <AlPage side="verso" label="(blank)" />
      <AlPage side="recto" label="alan-3 · opener">
        <AlanChapterHead entry={3} sub="OPERATIONAL PROCEDURES" coord="[TEMPORAL LOG // ENTRY_003 // ERA: 38 // NODE: OPERATIONAL]" />
        <AlanFragment top={170} right={4} rotate={-3} size={9}>// 2287.144.0001</AlanFragment>
      </AlPage>
    </Spread>
    <Spread id="alan-3-02" label={"OPERATIONAL PROCEDURES · spread 2"}>
      <AlPage side="verso" runHead={"ENTRY_003"} pageNum={basePage + 2} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 2}`}>
        <Zaaken><p>{inline(`Memory is not storage. Memory is structure. When the structure fails, the building does not empty — it collapses. In the rubble, we find weapons.`)}</p></Zaaken>
        <h4 className="al-subsection">{inline(`Resolution (The Collapse Protocol)`)}</h4>
        <AlanBody><p>{inline(`When outcomes are uncertain, roll `)}<b>{inline(`2d6`)}</b>{inline(` + Mode + Scar Bonus (if applicable).`)}</p></AlanBody>
        <div className="al-resolution"><div className="resolution-row"><div className="resolution-roll">{`12+`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Complete Success`)}</div><div className="resolution-text">{inline(`Achieve goal cleanly. Reality bends. Gain +1 Coherence.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Success with Complication`)}</div><div className="resolution-text">{inline(`Achieve goal but the Oracle introduces cost, twist, or new danger.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Failure with Discovery`)}</div><div className="resolution-text">{inline(`Goal fails, but you learn something useful. Choose: lose 1 Coherence OR mark +1 Paradox.`)}</div></div></div></div>
        <h4 className="al-subsection">{inline(`Navigation (Controlled Displacement)`)}</h4>
        <AlanBody><p>{inline(`Jumping is usually something that happens to you — but you can attempt Precision Navigation.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Roll `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE + Scar Bonus (if applicable). Every Navigation attempt costs 1 Coherence, paid before rolling. Involuntary jumps don't cost Coherence — they just happen to you.`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`TARGET DIFFICULTY EXAMPLE`)}</h4>
        <AlanBody><p><b>{inline(`Difficulty 7`)}</b>{inline(` — Nearby (±10 years) or a place you've been before. 1890s London, again.`)}</p></AlanBody>
        <AlanBody><p><b>{inline(`Difficulty 10`)}</b>{inline(` — Distant (±100-500 years) or unfamiliar location. Ming Dynasty China.`)}</p></AlanBody>
        <AlanBody><p><b>{inline(`Difficulty 12`)}</b>{inline(` — Extreme (±1000+ years) or a specific moment. The exact hour of the First Scar.`)}</p></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_003"} pageNum={basePage + 3} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 3}`}>
        <div className="al-resolution"><div className="resolution-row"><div className="resolution-roll">{`12+`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Perfect Landing`)}</div><div className="resolution-text">{inline(`Arrive exactly when and where intended. No complications. Gain +1 Coherence.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`10-11`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Successful Navigation`)}</div><div className="resolution-text">{inline(`Arrive at intended destination. Mark +1 Paradox from the effort.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Close Enough`)}</div><div className="resolution-text">{inline(`Arrive in correct era but wrong location, or correct location but off by `)}<b>{inline(`1d10`)}</b>{inline(` years. Mark +1 Paradox. Oracle introduces a complication at arrival.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Crash Landing`)}</div><div className="resolution-text">{inline(`You missed and hit something harder. Roll the Chronoscape Oracle. Pay the toll: System Shock (lose 1 Coherence, stay clean) OR Embrace the Glitch (mark +2 Paradox, let the Corruption in).`)}</div></div></div></div>
        <h4 className="al-subsection">{inline(`AT PARADOX 7+: NAVIGATION COLLAPSE`)}</h4>
        <AlanBody><p>{inline(`You cannot roll Precision Navigation. State your intention, roll the Chronoscape, and argue with the results. If you want the wheel back, you have to sell parts of yourself — lower Paradox via Agent Offers — to get it.`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`Wave Coherence`)}</h4>
        <aside className="al-fragment"><p>{inline(`Your synchronization with the current timestream. Tracks from -6 to your maximum. Your maximum Wave Coherence = Corruption Vector + 3. At Vector 5 (fully human) your ceiling is 8, same as Chen's starting max. At Vector 0 (fully corrupted) your ceiling is 3. The further you transform, the less coherence you can hold. That's not a bug.`)}</p><div className="al-fragment__sign">// AR</div></aside>
      </AlPage>
    </Spread>
    <Spread id="alan-3-03" label={"OPERATIONAL PROCEDURES · spread 3"}>
      <AlPage side="verso" runHead={"ENTRY_003"} pageNum={basePage + 4} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 4}`}>
        <aside className="al-fragment"><p>{inline(`Chen gets a comfortable Flux band to drift in. You don't. You've got three points between functioning and collapse. Use them carefully, or use them all at once — but know what you're spending.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <h4 className="al-subsection">{inline(`STATE EFFECT`)}</h4>
        <AlanBody><p>{inline(`Synchronized (+4 to +8) +1 to all rolls`)}</p></AlanBody>
        <AlanBody><p>{inline(`Flux (0 to +3) No modifier`)}</p></AlanBody>
        <AlanBody><p>{inline(`Crisis (-6 to -1) -1 to all rolls. At -6: trigger Fracture Event.`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`Paradox (Temporal Contamination)`)}</h4>
        <AlanBody><p>{inline(`Track from 0 to `)}<b>{inline(`10+`)}</b>{inline(`. Generate Paradox when you alter recorded history significantly (+1 to +3), share anachronistic knowledge (+1), create causal loops (+2), or use glitching Chrono-Tech (+1).`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`HIGH PARADOX ISN'T JUST DANGER`)}</h4>
        <aside className="al-fragment"><p>{inline(`Look at those Mode shifts again. At Paradox `)}<b>{inline(`7-9`)}</b>{inline(`, your DISRUPT is +2, your ENDURE is +2. You're being hunted. You're also powerful. At Paradox `)}<b>{inline(`10+`)}</b>{inline(`, your DISRUPT is +3, your ENDURE is +3. You've become priority target and extremely difficult to kill.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <h4 className="al-subsection">{inline(`Memory System`)}</h4>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_003"} pageNum={basePage + 5} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 5}`}>
        <aside className="al-fragment"><p>{inline(`Five Active Scars (+2 bonus), three Fading Scars (+1 bonus), one Core Scar (+3 bonus — costs 3 Coherence to lock). When you experience something significant, create a new Scar and push everything forward.`)}</p><p>{inline(`When a Scar becomes Lost: gain a Mutation (permanent personality change). Choose from phantom reflex, emotional void, sensory glitch, or behavioral rewire.`)}</p><p>{inline(`In emiT, when a Scar is Lost, it becomes a Mutation. The identity wound externalizes into temporal corruption. This is the conversion rate of selfhood into survival.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <h4 className="al-subsection">{inline(`WEAPONIZING SCARS`)}</h4>
        <AlanBody><p>{inline(`You can spend Scars offensively. Invoke a Scar for its bonus, then burn it to: deal direct damage to a situation, NPC, or timeline; force reality to accept a contradiction; or make someone forget something specific. Cost: Scar becomes Lost immediately, gain a Mutation.`)}</p></AlanBody>
        <aside className="al-fragment"><p>{inline(`Call it tactical expenditure of identity. Call it self-destruction. Both lines lead to the same spreadsheet. Spend accordingly.`)}</p><div className="al-fragment__sign">// AR</div></aside>
      </AlPage>
    </Spread>
    <Spread id="alan-3-04" label={"OPERATIONAL PROCEDURES · spread 4"}>
      <AlPage side="verso" runHead={"ENTRY_003"} pageNum={basePage + 6} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 6}`}>
        <aside className="al-chen-block" data-tier={tier}><div className="al-chen-block__head">Dr. Eleanor Chen // [DATE UNKNOWN]</div><p>{inline(`Alan, stop.`)}</p><p>{inline(`You're teaching them to weaponize their trauma and frame permanent psychological damage as Mutations.`)}</p><p>{inline(`This isn't strength. This is dissociative coping that will leave them unable to connect with anyone, unable to feel normally, unable to recognize themselves.`)}</p><p>{inline(`You're still here after 340 years. But are you still you? Can you even answer that question anymore?`)}</p></aside>
        <aside className="al-fragment"><p>{inline(`Buzz off, doc. It's not like you remember what happened. Otherwise you'd be on my side. You were once.`)}</p><p>{inline(`Remember the First Scar? The night in '44 when the four of us —`)}</p><p>{inline(`Never mind.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <AlanBody><p><b>{inline(`[CHEN]: Four?`)}</b></p></AlanBody>
        <h4 className="al-subsection">{inline(`The Corruption Log`)}</h4>
        <AlanBody><p>{inline(`Document your transformation in your journal. Track: current Paradox state, Corruption Vector progress, Scars acquired and spent, Mutations gained, what you took from each era.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Creating a detailed entry grants +1 Paradox — not Coherence. You grow stronger by documenting corruption, not by clinging to your origin.`)}</p></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_003"} pageNum={basePage + 7} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 7}`}>
        <h4 className="al-subsection">{inline(`The Violence Tax`)}</h4>
        <aside className="al-fragment"><p>{inline(`Violence is taxed. The tax is paid in pieces of you that you don't get back.`)}</p><p>{inline(`Ten violent acts. The tracker fills as you act. At the end of every Repreival, the tracker resets — but only after you pay. The payment options are: a Mutation, the loss of a Scar that was useful to you, or being witnessed by someone whose memory of you was clean.`)}</p><p>{inline(`I have hit the tracker reset eleven times. I no longer remember which payments I chose for the first six. I remember the witnessed ones. I remember the faces of the people who saw me do what I did. They are the ones still in my head, even after the rest of the violence has filed itself away into something that feels almost neutral.`)}</p><p>{inline(`The tax is not a punishment. It is the cost of doing this. The illusion is that there will be a moment of cleanness — a reset where the blood is off your hands. There is not. There is only the next Repreival, the next payment, the next thing you do not get back.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <aside className="al-fragment"><p>{inline(`Violence works. It also corrupts you in real time. The Tax is how we keep that visible.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <AlanBody><p>{inline(`When you succeed with `)}<b>{inline(`DISRUPT`)}</b>{inline(` (any result), roll `)}<b>{inline(`d6`)}</b>{inline(`. On `)}<b>{inline(`3-6`)}</b>{inline(`: no tax this time. On `)}<b>{inline(`1-2`)}</b>{inline(`: pay the Tax.`)}</p></AlanBody>
      </AlPage>
    </Spread>
    <Spread id="alan-3-05" label={"OPERATIONAL PROCEDURES · spread 5"}>
      <AlPage side="verso" runHead={"ENTRY_003"} pageNum={basePage + 8} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 8}`}>
        <h4 className="al-subsection">{inline(`PAYING THE TAX`)}</h4>
        <AlanBody><p>{inline(`Choose ONE option you have NOT chosen since your last Repreival. If all options have been chosen since last Repreival, you must take a Mutation.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Mutation — gain a permanent personality change immediately`)}</p></AlanBody>
        <AlanBody><p>{inline(`Scar Loss — one Active Scar becomes Lost immediately (gain Mutation from the loss)`)}</p></AlanBody>
        <AlanBody><p>{inline(`Witnessed — mark WITNESSED; your next social interaction this era takes -1 SYNC and the Oracle introduces someone responding to what they saw you become`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`VIOLENCE ESCALATION`)}</h4>
        <AlanBody><p>{inline(`Track `)}<b>{inline(`VIOLENCE COUNT`)}</b>{inline(` (starts at `)}<b>{inline(`0`)}</b>{inline(` each session). Each time you trigger the Violence Tax, increase the count by `)}<b>{inline(`1`)}</b>{inline(`. When you take `)}<b>{inline(`Repreival`)}</b>{inline(`, reset Violence Count to `)}<b>{inline(`0`)}</b>{inline(`.`)}</p></AlanBody>
        <aside className="al-fragment"><p>{inline(`The count is narrative pressure. By the fourth or fifth Tax of a session, the consequences stop being mechanical and start being who you are becoming. Write it down. Let it accumulate.`)}</p><div className="al-fragment__sign">// AR</div></aside>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_003"} pageNum={basePage + 9} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 9}`}>
        <aside className="al-fragment"><p>{inline(`I didn't have this rule for my first 200 years. I just used DISRUPT whenever I needed to end something. Every problem became a nail because I'd become a hammer.`)}</p><p>{inline(`If I'd been tracking Violence Count honestly? I'd be at four digits.`)}</p><p>{inline(`The Tax isn't punishment. It's just making visible what was always happening.`)}</p><p>{inline(`Every time you solve something through violence, you lose a piece. Eventually you realize you've got nothing left but the violence.`)}</p><p>{inline(`That's not evolution. That's addiction.`)}</p><p>{inline(`— AR (two hundred years later)`)}</p><p>{inline(`The Holding Action`)}</p><p>{inline(`Once per session, when doing so is meaningfully costly, you may choose preservation over optimization. You cannot perform a Holding Action in a scene of safety or momentum. Preservation only matters when it costs you something.`)}</p><p>{inline(`Describe an act of human preservation:`)}</p><p>{inline(`•Comfort someone who can't help you`)}</p><p>{inline(`•Honor a promise when breaking it would be easier`)}</p><p>{inline(`•Maintain a ritual that serves no tactical purpose`)}</p><p>{inline(`•Write someone's name when they're already gone`)}</p><p>{inline(`•Apologize when it won't change the outcome`)}</p><p>{inline(`Roll `)}<b>{inline(`2d6`)}</b>{inline(` + SYNC or OBSERVE (your choice).`)}</p><p>{inline(`10+`)}<i>{inline(``)}</i>{inline(` Choose one: Reduce Paradox by 1, OR restore 1 Coherence.`)}</p><div className="al-fragment__sign">// AR</div></aside>
      </AlPage>
    </Spread>
    <Spread id="alan-3-06" label={"OPERATIONAL PROCEDURES · spread 6"}>
      <AlPage side="verso" runHead={"ENTRY_003"} pageNum={basePage + 10} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 10}`}>
        <div className="al-resolution"><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-title">{inline(`No mechanical benefit`)}</div><div className="resolution-text">{inline(`Narrate why it mattered anyway. Sometimes meaning is enough.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-text">{inline(`The universe doesn't care about sentimentality. Mark +1 Paradox.`)}</div></div></div></div>
        <aside className="al-fragment"><p>{inline(`I never took Holding Actions for the first 200 years. Not because I didn't want to. Because I convinced myself they didn't work.`)}</p><p>{inline(`Every time I considered one, I'd think: this costs resources. What's the return? Where's the tactical advantage?`)}</p><p>{inline(`And I'd choose Violence Tax instead. Because Violence Tax works.`)}</p><p>{inline(`But here's what I didn't calculate: Violence Tax works and empties you.`)}</p><p>{inline(`Holding Actions often don't work mechanically. But they're the only thing that reminds you why survival mattered in the first place.`)}</p><p>{inline(`By the time I figured that out, I'd forgotten what I was trying to preserve.`)}</p><p>{inline(`Maybe if I'd failed more Holding Actions, I'd still know.`)}</p><div className="al-fragment__sign">// AR</div></aside>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_003"} pageNum={basePage + 11} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 11}`}>
        <aside className="al-chen-block" data-tier={tier}><div className="al-chen-block__head">Dr. Eleanor Chen // [DATE UNKNOWN]</div><p>{inline(`Alan tried a Holding Action in session 847.`)}</p><p>{inline(`He was in 1920s Berlin. Met a woman who reminded him of Sarah. Spent an entire scene teaching her to play chess because Sarah used to play chess.`)}</p><p>{inline(`He rolled `)}<b>{inline(`7-9`)}</b>{inline(`. No mechanical benefit.`)}</p><p>{inline(`He wrote in his Log: 'Wasted scene. Should have Navigated instead.'`)}</p><p>{inline(`Three sessions later, he couldn't remember Sarah's face.`)}</p><p>{inline(`The Holding Action wasn't wasted. It was the last time he connected with anything real. The `)}<b>{inline(`7-9`)}</b>{inline(` didn't give Coherence. It gave meaning. He just couldn't see the difference anymore.`)}</p></aside>
        <aside className="al-fragment"><p>{inline(`I should say something about Chen before we go further.`)}</p><p>{inline(`She's not what she sounds like. The clinical detachment, the equations, the calm voice. That's the armor, not the woman. When we worked together in the eighties she used to make tea on a hot plate and would sing to herself. She kept the same chipped mug for nine years. The hum got into her recordings and she just left it there. Said the equipment could deal with it.`)}</p><p>{inline(`Chen is softer than she lets on, and that softness got many, many people killed.`)}</p><div className="al-fragment__sign">// AR</div></aside>
      </AlPage>
    </Spread>
    <Spread id="alan-3-07" label={"OPERATIONAL PROCEDURES · spread 7"}>
      <AlPage side="verso" runHead={"ENTRY_003"} pageNum={basePage + 12} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 12}`}>
        <h4 className="al-subsection">{inline(`Repreival`)}</h4>
        <aside className="al-fragment"><p>{inline(`Not a reprieve. A reprieve implies you're forgiven, or that you've earned a rest. This is a `)}<b>{inline(`Repreival`)}</b>{inline(` - a temporary stay of execution. You're still being hunted. The timeline still wants you normalized. You're just getting a few hours where nothing is actively trying to end you. Use them.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <h4 className="al-subsection">{inline(`WHEN TO TAKE REPREIVAL`)}</h4>
        <AlanBody><p>{inline(`After every `)}<b>{inline(`Navigation`)}</b>{inline(` roll or `)}<b>{inline(`Displacement`)}</b>{inline(`, OR at the end of your real-world play session if neither occurred.`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`REPREIVAL RITUAL (IN ORDER)`)}</h4>
        <AlanBody><p><b>{inline(`1. Chronicle.`)}</b>{inline(` Write in your Log: where and when you are, what happened, one significant choice you made, one thing you lost or changed. Don't pretty it up. If you write enough, you might trick your brain into thinking you're real. Effect: gain `)}<b>{inline(`+1 Coherence`)}</b>{inline(`.`)}</p></AlanBody>
        <AlanBody><p><b>{inline(`2. Fix the Anchor.`)}</b>{inline(` If your `)}<b>{inline(`Anchor`)}</b>{inline(` took Stress, roll `)}<b>{inline(`2d6 + SYNC`)}</b>{inline(` (Difficulty `)}<b>{inline(`10`)}</b>{inline(`).`)}</p></AlanBody>
        <AlanBody><ul className="al-list"><li><b>{inline(`10+`)}</b>{inline(`: clear all Anchor Stress. Good as new.`)}</li><li><b>{inline(`7-9`)}</b>{inline(`: clear 1 Stress. You patched one hole.`)}</li><li><b>{inline(`6-`)}</b>{inline(`: no Stress cleared. It's still junk.`)}</li></ul></AlanBody>
        <AlanBody><p><b>{inline(`3. Scavenge Assets.`)}</b>{inline(` For each Stressed Asset, roll `)}<b>{inline(`2d6 + relevant Mode`)}</b>{inline(`.`)}</p></AlanBody>
        <AlanBody><ul className="al-list"><li><b>{inline(`10+`)}</b>{inline(`: clear all Stress. Working again.`)}</li><li><b>{inline(`7-9`)}</b>{inline(`: clear 1 Stress. Working mostly.`)}</li><li><b>{inline(`6-`)}</b>{inline(`: still trash. If an Asset is fully broken, spend the whole Repreival fixing it or find a replacement.`)}</li></ul></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_003"} pageNum={basePage + 13} coordStamp={"[LOG // ENTRY_003]"} label={`OPERATIONAL PROCEDURES · p.${basePage + 13}`}>
        <AlanBody><p><b>{inline(`4. Let It Rot.`)}</b>{inline(` Your oldest Active `)}<b>{inline(`Scar`)}</b>{inline(` fades. Your oldest Fading Scar vanishes and leaves a `)}<b>{inline(`Mutation`)}</b>{inline(` behind. Your `)}<b>{inline(`Core Scar`)}</b>{inline(` never fades. Create new Scars for significant events. You can't stop the rot. You can only watch it.`)}</p></AlanBody>
        <AlanBody><p><b>{inline(`5. Cool Down (Optional).`)}</b>{inline(` Try to lower your `)}<b>{inline(`Paradox`)}</b>{inline(`, or don't.`)}</p></AlanBody>
        <AlanBody><ul className="al-list"><li><b>{inline(`Temporal Grounding:`)}</b>{inline(` Roll `)}<b>{inline(`2d6 + SYNC`)}</b>{inline(` (Difficulty `)}<b>{inline(`10`)}</b>{inline(`). On `)}<b>{inline(`10+`)}</b>{inline(`: reduce Paradox by `)}<b>{inline(`2`)}</b>{inline(`. On `)}<b>{inline(`7-9`)}</b>{inline(`: reduce by `)}<b>{inline(`1`)}</b>{inline(`.`)}</li><li><b>{inline(`Ritual Purification:`)}</b>{inline(` Reduce Paradox by `)}<b>{inline(`1d6`)}</b>{inline(`. The cost depends on method, and a Faction's "cleaning" costs you a piece of your soul.`)}</li><li><b>{inline(`Run hot.`)}</b>{inline(` See what happens.`)}</li></ul></AlanBody>
        <AlanBody><p><b>{inline(`6. Next Target.`)}</b>{inline(` Answer in your Log: `)}<i>{inline(`What am I trying to break next?`)}</i>{inline(` Write it down. If you don't have a target, you're just waiting to die.`)}</p></AlanBody>
        <AlanBody><p><b>{inline(`7. Reset Violence Count to 0.`)}</b></p></AlanBody>
      </AlPage>
    </Spread>
  </>);
}

AlanCh3.pages = 14;
Object.assign(window, { AlanCh3 });
