// AUTO-GENERATED — chen-5 — MEMORY MANAGEMENT
function ChenCh5({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="chen-5-opener" label={"MEMORY MANAGEMENT · opener"}>
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="MEMORY MANAGEMENT · opener">
        <ChenChapterHead icon="assets/chen-icon-handless-clock.svg" number="V" title="Memory Management" />
      </ChPage>
    </Spread>
    <Spread id="chen-5-02" label={"MEMORY MANAGEMENT · spread 2"}>
      <ChPage side="verso" runHead={"Memory Management"} pageNum={basePage + 2} label={`MEMORY MANAGEMENT · p.${basePage + 2}`}>
        <h4 className="el-subsection">{inline(`The Architecture of Self`)}</h4>
        <div className="el-body el-dropcap" data-firstpara><p>{inline(`When memory fails, identity collapses. Collapses start small. First, the Echo can't remember `)}<i>{inline(`why`)}</i>{inline(` they were trying to remember while writing, then they can't remember what the chronicle is for, and eventually, they can't remember themselves.`)}</p></div>
        <div className="el-body"><p>{inline(`Sometimes there are pieces of the old person in the rubble. Those pieces are valuable, but they aren't the person before the collapse.`)}</p></div>
        <aside className="el-reflection"><p>{inline(`A Reed-Solomon code can reconstruct a corrupted message if enough of the parity blocks survive. Your Memories function the same way. As long as enough remain, the original message — You — can be reconstructed from the fragments.`)}</p><div className="el-sign">— EC</div></aside>
        <div className="el-body"><p>{inline(`Nine slots. Five Active. Three Fading. One Locked. The structure reflects what your nervous system was already doing before you were Displaced. You never remembered everything you lived. You remembered what was worth the metabolic cost of remembering.`)}</p></div>
        <div className="el-body"><p>{inline(`The Chronoverse imposes the same accounting on Echoes, except the cost is steeper and the negotiation is shorter. Without intervention, the cost wins. With intervention, the cost still wins, but more slowly, and you get to choose what pieces you lose first.`)}</p></div>
        <div className="el-body"><p>{inline(`Your memories exist in four states. They will not stay where you put them.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Memory Management"} pageNum={basePage + 3} label={`MEMORY MANAGEMENT · p.${basePage + 3}`}>
        <h4 className="el-subsection">{inline(`ACTIVE MEMORIES (5 SLOTS)`)}</h4>
        <div className="el-body"><p>{inline(`Vivid, detailed, present in your mind. These provide +2 to matching actions. They're energetically expensive to maintain — high-amplitude waveforms with strong emotional mass. When you invoke an Active Memory for a bonus, you're literally harmonizing with your past self, using stored resonance to enhance your current action.`)}</p></div>
        <h4 className="el-subsection">{inline(`FADING MEMORIES (3 SLOTS)`)}</h4>
        <div className="el-body"><p>{inline(`Losing clarity. +1 to matching actions. One step from being Lost. The signal is still there, but noise is increasing — new memories broadcasting on similar frequencies, creating static that obscures the old ones. The amplitude is decreasing. Chen's model calls this entropy. She's half right. It's also interference.`)}</p></div>
        <h4 className="el-subsection">{inline(`LOCKED MEMORY (1 SLOT)`)}</h4>
        <div className="el-body"><p>{inline(`Permanently preserved. +3 to matching actions. Costs 3 Coherence to Lock. Cannot fade through normal means. You're spending tremendous energy to create a standing wave — a self-reinforcing pattern that resists entropy.`)}</p></div>
        <div className="el-body"><p>{inline(`Locking is the most important choice you'll make. Choose a Memory that defines your core identity — something that, if lost, would mean you no longer recognize yourself. You can only Lock once.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-5-03" label={"MEMORY MANAGEMENT · spread 3"}>
      <ChPage side="verso" runHead={"Memory Management"} pageNum={basePage + 4} label={`MEMORY MANAGEMENT · p.${basePage + 4}`}>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`I Locked the memory of Sarah's birth. The science worked. The memory is still mechanically intact 340 years later.`)}</p><p>{inline(`What Chen's equations don't account for: Emotional Mass (μ isn't constant. It decays.`)}</p><p>{inline(`You can preserve the structure — the date, the hospital room, the factual details. But the feeling? The love? The specific quality of consciousness that made you care?`)}</p><p>{inline(`That has a half-life she's never calculated.`)}</p><p>{inline(`Memory Locking preserves the skeleton. The soul rots anyway.`)}</p><p>{inline(`This is the equation Chen doesn't write:`)}</p><p>{inline(`Memory Coherence = Structure × (Emotional Mass × e^(-t/τ))`)}</p><p>{inline(`Where τis the decay constant and t is subjective time.`)}</p><p>{inline(`Lock all the memories you want. Time will hollow them out.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`LOST MEMORIES`)}</h4>
        <div className="el-body"><p>{inline(`Gone from conscious mind. No bonus. They leave Scars — narrative consequences, behavioral changes, the shape of what used to be there.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Memory Management"} pageNum={basePage + 5} label={`MEMORY MANAGEMENT · p.${basePage + 5}`}>
        <h4 className="el-subsection">{inline(`The Cycle of Forgetting`)}</h4>
        <div className="el-body"><p>{inline(`When you experience something significant enough to form a new Memory:`)}</p></div>
        <ol className="el-numlist"><li>{inline(`Create the Memory: write title, tags, description.`)}</li><li>{inline(`It enters Active Slot 1.`)}</li><li>{inline(`The oldest Active Memory is pushed to Fading.`)}</li><li>{inline(`The oldest Fading Memory becomes Lost.`)}</li></ol>
        <div className="el-body"><p>{inline(`You form roughly `)}<b>{inline(`1-2`)}</b>{inline(` new Memories per session. The pressure to choose what matters is the game.`)}</p></div>
        <h4 className="el-subsection">{inline(`TRIGGERS FOR NEW MEMORIES`)}</h4>
        <div className="el-body"><p>{inline(`New Memories form when something breaks the pattern — when you survive a Crisis, achieve something that costs you, connect with someone who matters, or simply decide that this moment is the one. The last trigger is the most important. You decide what defines you. The timestream doesn't get a vote.`)}</p></div>
        <h4 className="el-subsection">{inline(`Scars: What Remains`)}</h4>
        <div className="el-body"><p>{inline(`When a Memory becomes Lost, its emotional residue remains as a Scar — a psychological wound or changed behavior. When a Memory goes, something stays in its shape. Choose the wound:`)}</p></div>
        <div className="el-body"><p><b>{inline(`Phantom Habit:`)}</b>{inline(` you perform a ritual you don't understand. The body remembers what the mind has lost.`)}</p></div>
        <div className="el-body"><p><b>{inline(`False Story:`)}</b>{inline(` you've constructed a lie to fill the gap. You believe it. That's the dangerous part.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-5-04" label={"MEMORY MANAGEMENT · spread 4"}>
      <ChPage side="verso" runHead={"Memory Management"} pageNum={basePage + 6} label={`MEMORY MANAGEMENT · p.${basePage + 6}`}>
        <div className="el-body"><p><b>{inline(`Persistent Ache:`)}</b>{inline(` physical pain tied to the loss. Location unknown. Cause unverifiable.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Emotional Void:`)}</b>{inline(` numbness where feeling used to be, or feeling where numbness would be appropriate.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Behavioral Shift:`)}</b>{inline(` a personality change, permanent. You act differently now. You may not have noticed yet.`)}</p></div>
        <div className="el-body"><p>{inline(`Scars accumulate. Track them in your Chronicle. For more specific shapes of deterioration, see Appendix G: Temporal Pathologies.`)}</p></div>
        <h4 className="el-subsection">{inline(`SCARS VS. MUTATIONS: A CRITICAL DISTINCTION`)}</h4>
        <div className="el-body"><p>{inline(`Scars are identity consequences — psychological wounds gained when a Memory becomes Lost. Mutations are reality consequences — gained only from Paradox Breach (reaching 10+) or from explicit Mutation triggers in Faction interactions and Crisis outcomes.`)}</p></div>
        <div className="el-body"><p>{inline(`Scars are what you lose. Mutations are what the Chronoverse makes you become.`)}</p></div>
        <div className="el-body"><p>{inline(`Scars are the shape of what you've lost. They are your own psyche rewriting itself around an absence. Mutations are the shape of what the Chronoverse has made you. They are the timestream writing itself onto your body. One is grief. The other is contamination. Both are permanent.`)}</p></div>
        <div className="el-body"><p><i>{inline(`MUTATIONS (TEMPORAL ECHOES)`)}</i></p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Memory Management"} pageNum={basePage + 7} label={`MEMORY MANAGEMENT · p.${basePage + 7}`}>
        <div className="el-body"><p>{inline(`When you gain a Mutation — from Paradox Breach, from a Faction trade, from a Crisis outcome that specifies it — choose one from this list, or create your own in the same register. These are not personality quirks. They are the Chronoverse writing itself onto your body.`)}</p></div>
        <div className="el-body"><p>{inline(`Temporal Stutter — Time skips for you. You occasionally repeat the last few seconds of your own life, experiencing them twice. You are aware the second time. No one else is. You have no control over when this happens. Mechanically: once per session, the Oracle may declare your most recent roll occurred twice — both results stand, and you must narrate both.`)}</p></div>
        <div className="el-body"><p>{inline(`Echo Bleed — You see brief overlays of other timelines. Strangers' faces flicker. Buildings appear half-demolished. You cannot always tell what is the present. Mechanically: -1 to OBSERVE when you have no Memory that applies to the current situation. The static fills the gap where context should be.`)}</p></div>
        <div className="el-body"><p>{inline(`Displaced Affect — Your emotional responses have decoupled from their causes. You laugh at grief. You feel nothing at danger. You cry at sunsets. People notice. Mechanically: -1 to SYNC with anyone who has witnessed a Crisis involving you. They don't know what to make of you. They're not wrong to be unsettled.`)}</p></div>
        <div className="el-body"><p>{inline(`Temporal Scarring — Wounds you sustained in other timelines manifest on your body in this one. Old injuries reopen. Scar tissue that wasn't there yesterday is there now. Mechanically: whenever you take a Crisis consequence that involves physical damage, it costs +1 additional Coherence. The body keeps its own accounting.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-5-05" label={"MEMORY MANAGEMENT · spread 5"}>
      <ChPage side="verso" runHead={"Memory Management"} pageNum={basePage + 8} label={`MEMORY MANAGEMENT · p.${basePage + 8}`}>
        <div className="el-body"><p>{inline(`Signal Intrusion — You receive transmissions from other versions of yourself — fragments of choices you didn't make, warnings that may or may not apply to your current timeline. They feel urgent. They are sometimes wrong. Mechanically: once per session, you may ask the Action Oracle a yes/no question about the immediate future. The Oracle answers. Whether to trust it is your problem.`)}</p></div>
        <div className="el-body"><p>{inline(`Anchor Drift — Your emotional connection to your origin has started to migrate. The people you think you're trying to return to are blurring with people you've met since. You're not sure which memories are original and which are composites. Mechanically: during Downtime, when you write a Chronicle entry about your Anchor Connections, roll `)}<b>{inline(`1d6`)}</b>{inline(`. On a 1, one Anchor Connection detail shifts slightly — not lost, but changed. Record both versions. You don't know which one is real.`)}</p></div>
        <h4 className="el-subsection">{inline(`Preservation Moves`)}</h4>
        <h4 className="el-subsection">{inline(`LOCK MEMORY (3 COHERENCE)`)}</h4>
        <div className="el-body"><p>{inline(`Permanently preserve one Active Memory. Can only be done once. Choose the core of your identity — the memory you would die before forgetting. Provides +3 bonus when invoked. Cannot fade through normal means.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Memory Management"} pageNum={basePage + 9} label={`MEMORY MANAGEMENT · p.${basePage + 9}`}>
        <h4 className="el-subsection">{inline(`REINFORCE MEMORY (1 COHERENCE PER SCENE)`)}</h4>
        <div className="el-body"><p>{inline(`Keep one Active Memory from fading this cycle. Requires narrating how you actively recall or relive it. Temporary protection — must be renewed each Downtime.`)}</p></div>
        <div className="el-body"><p><b>{inline(`RECOVER LOST MEMORY (3 COHERENCE, ROLL ENDURE, DIFFICULTY 12)`)}</b></p></div>
        <div className="el-body"><p>{inline(`You make a desperate attempt to dredge a Lost Memory from the void. This is not remembering — it's excavation. Spend 3 Coherence. Name the Lost Memory you are trying to recover. Then roll `)}<b>{inline(`2d6`)}</b>{inline(` + ENDURE against `)}<b>{inline(`Difficulty 12`)}</b>{inline(`.`)}</p></div>
        <div className="el-resolution"><div className="resolution-row"><div className="resolution-roll">{`12+`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Against all odds, it returns`)}</div><div className="resolution-text">{inline(`The Memory enters an Active slot, pushing all others down — this may force another Memory to become Fading. Gain +1 Paradox from the strain on causality.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`10-11`}</div><div className="resolution-body"><div className="resolution-title">{inline(`A fragment returns`)}</div><div className="resolution-text">{inline(`The Memory comes back as Fading. You remember the shape of it, but not the texture. Gain +1 Paradox.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-title">{inline(`The effort fails`)}</div><div className="resolution-text">{inline(`Lose 1 additional Coherence. The Memory is gone. This attempt is the last time you'll look for it.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-title">{inline(`The void stares back`)}</div><div className="resolution-text">{inline(`You recover a False Memory — a comforting lie that fills the gap. The Oracle decides what it is. You believe it completely. Gain a Scar: Beautiful Lie.`)}</div></div></div></div>
      </ChPage>
    </Spread>
    <Spread id="chen-5-06" label={"MEMORY MANAGEMENT · spread 6"}>
      <ChPage side="verso" runHead={"Memory Management"} pageNum={basePage + 10} label={`MEMORY MANAGEMENT · p.${basePage + 10}`}>
        <h4 className="el-subsection">{inline(`The Chronicle System`)}</h4>
        <div className="el-body"><p>{inline(`The Chronicle is your character's literal survival mechanism. Without it, memory loss accelerates catastrophically. It is not flavoring. It is load-bearing.`)}</p></div>
        <h4 className="el-subsection">{inline(`WHAT TO RECORD`)}</h4>
        <div className="el-body"><p>{inline(`Record the date and location of each era as precisely as you can determine. Record the events that changed you and the people who caused them. Track your Memory status, your Coherence, your Paradox. Write down what happened during Crises. If you have time — and you will not always have time — record the sensory details. What it smelled like. What it sounded like. These details are the difference between remembering and merely knowing.`)}</p></div>
        <h4 className="el-subsection">{inline(`CHRONICLE BONUSES`)}</h4>
        <div className="el-body"><p>{inline(`Detailed Entries grant +1 Coherence once per session, when your entry: describes a scene in vivid detail, reflects on your emotional state, connects to your Anchor or Memories, and advances your understanding of your condition.`)}</p></div>
        <div className="el-body"><p>{inline(`Reference Bonus: When facing a situation similar to a previous encounter, read the relevant past Chronicle entries. Gain +1 to the Resolution roll if past experience genuinely applies.`)}</p></div>
        <div className="el-body"><p><i>{inline(`When the Past Bleeds Through`)}</i></p></div>
        <div className="el-body"><p>{inline(`Sometimes, in moments of Crisis or revelation, the weight of all your past experiences presses upon the present. A decision made centuries ago influences your actions now. This is not metaphor. This is CTH.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Memory Management"} pageNum={basePage + 11} label={`MEMORY MANAGEMENT · p.${basePage + 11}`}>
        <div className="el-body"><p>{inline(`When you make a Resolution Roll, if the current situation resonates strongly with one of your Memories (Active, Fading, or Locked), you may invoke it:`)}</p></div>
        <ol className="el-numlist"><li>{inline(`State the Memory — identify the specific Memory in your Chronicle.`)}</li><li>{inline(`Explain the Connection — how this past experience provides genuine insight into the current situation.`)}</li><li>{inline(`Gain the Bonus — apply the bonus based on the Memory's status (Active +2, Fading +1, Locked +3).`)}</li></ol>
        <div className="el-body"><p>{inline(`Limits: one Memory per roll. Choose the most relevant. In Crisis state (Coherence -6 to -3), Echo bonuses are reduced by 1. The Memory must have a clear, explicable connection to the situation — if you're reaching, it doesn't apply.`)}</p></div>
        <div className="el-body"><p>{inline(`[ CHRONICLE ENTRY FRAGMENT — Found inserted between pages `)}<b>{inline(`47-48`)}</b>{inline(` of a recovered Chronicle, author unknown ]`)}</p></div>
        <div className="el-body"><p>{inline(`I followed every procedure. Every rule. Every preservation protocol in Chen's manual. I maintained Coherence above +5 for two centuries. I Locked my defining Memory. I reinforced my Anchor quarterly. I wrote in the Chronicle every single day.`)}</p></div>
        <div className="el-body"><p>{inline(`And this morning I read my first entry. The one I wrote on Day 1, right after Displacement. The one where I described my lab, my daughter, my life.`)}</p></div>
        <div className="el-body"><p>{inline(`I didn't recognize it.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-5-07" label={"MEMORY MANAGEMENT · spread 7"}>
      <ChPage side="verso" runHead={"Memory Management"} pageNum={basePage + 12} label={`MEMORY MANAGEMENT · p.${basePage + 12}`}>
        <div className="el-body"><p>{inline(`Not that I'd forgotten — the mechanics were intact, the Memory was still Active. But reading those words felt like reading someone else's diary. The person who wrote that entry cared about those things. The person reading it now... doesn't.`)}</p></div>
        <div className="el-body"><p>{inline(`The Chronicle preserved everything Chen said it would. It just couldn't preserve the person who cared about preserving it.`)}</p></div>
        <div className="el-body"><p>{inline(`I think that might be the joke.`)}</p></div>
        <div className="el-body"><p>{inline(`(No signature. No date. The handwriting changes halfway through.)`)}</p></div>
        <aside className="el-reflection el-reflection--theory"><p>{inline(`The holographic principle holds that the information content of a volume of space can be encoded on its boundary. Your Chronicle is your boundary. What you write down is the surface from which your interior — your continuous self — can be reconstructed. If the volume is lost but the boundary remains, you can be rebuilt.`)}</p><div className="el-sign">— EC</div></aside>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`Some dude named Derrida once said the trace is what survives the absence of presence. The Chronicle is the trace. You are not in the journal, Ellie. The journal is what's left after you. Stop confusing the corpse with the body.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <Zaaken><i>{inline(`Crisis.`)}</i></Zaaken>
      </ChPage>
      <ChPage side="recto" runHead={"Memory Management"} pageNum={basePage + 13} label={`MEMORY MANAGEMENT · p.${basePage + 13}`}>
        
      </ChPage>
    </Spread>
  </>);
}

ChenCh5.pages = 14;
Object.assign(window, { ChenCh5 });
