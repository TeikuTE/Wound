// AUTO-GENERATED — alan-6 — TERMINAL CONFIGURATIONS
function AlanCh6({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="alan-6-opener" label={"TERMINAL CONFIGURATIONS · opener"}>
      <AlPage side="verso" label="(blank)" />
      <AlPage side="recto" label="alan-6 · opener">
        <div className="chapter-sigil"><Glyph name="null" size="sigil" stage={0} /></div>
        <AlanChapterHead entry={6} sub="TERMINAL CONFIGURATIONS" coord="[TEMPORAL LOG // ENTRY_006 // ERA: 74 // NODE: TERMINAL]" />
        <AlanFragment top={170} right={4} rotate={-3} size={9}>// 2287.288.0001</AlanFragment>
      </AlPage>
    </Spread>
    <Spread id="alan-6-02" label={"TERMINAL CONFIGURATIONS · spread 2"}>
      <AlPage side="verso" runHead={"ENTRY_006"} pageNum={basePage + 2} coordStamp={"[LOG // ENTRY_006]"} footnotes={<FinderFootnotes notes={[{"n":47,"text":"Mirror this morning. No face. +3 DISRUPT where the face should be.","act":4,"late":false}]} />} label={`TERMINAL CONFIGURATIONS · p.${basePage + 2}`}>
        <AlanBody><p>{inline(`The four configurations below are end-states. They are not character classes. They are eulogies that the system has not yet finished writing.`)}<FootnoteMarker n={47} act={4} /></p><span className="gly-inline-row"><Glyph name="null" size="inline" stage={0} /></span></AlanBody>
        <AlanBody><p><b>{inline(`THE VESSEL.`)}</b>{inline(` `)}<i>{inline(`The Vessel is the end-state of an Echo who has spent everything they had on staying useful. The Vessel still walks, still solves problems, still completes objectives at a rate that exceeds most Echoes who are fully present. What is missing is the part of them that would have been able to say why any of it mattered. Vessels are functional. They are not haunted, because there is nothing left to haunt.`)}</i></p></AlanBody>
        <AlanBody><p><b>{inline(`THE PARADOX ENGINE.`)}</b>{inline(` `)}<i>{inline(`The Paradox Engine is what happens when an Echo accepts the contradiction instead of resolving it. The Engine generates new paradoxes faster than the timeline can absorb them. They are extraordinarily powerful, but there's a price of course. Other Echoes who spend time near the Engine find their own coherence eroding. The Engine destabilizes everything and anyone in proximity, so survival is guaranteed, but connection is impossible.`)}</i></p></AlanBody>
        <AlanBody><p><b>{inline(`THE HOLLOWED.`)}</b>{inline(` `)}<i>{inline(`The Hollowed is the Echo who chose Scionfall's mercy and survived it anyway. Hollowed have memory and consciousness intact, but no will to use either. Hollows are present, but that's about it. A Hollow will consent to whatever is asked of them. Hollows are at peace, but in the way that corpses are at peace.`)}</i></p></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_006"} pageNum={basePage + 3} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 3}`}>
        <AlanBody><p><b>{inline(`THE DISSOLVED.`)}</b>{inline(` `)}<i>{inline(`The Dissolved is the Revel's favorite. Dissolved exist in superposition across multiple timeline branches, none of them the dominant strand. They are technically free. They are also not coherent enough to enjoy the freedom. When you encounter a Dissolved, you encounter four or five of them at once, each one an expression of who the Echo would have been on a path that was never taken. The encounter is beautiful. The encounter is also a person who was once a single thing, distributed thinly across versions of themselves, none of which is enough.`)}</i></p></AlanBody>
        <AlanBody><p>{inline(`When Corruption Vector reaches 0, you stop being human. What you become depends on your trajectory.`)}</p></AlanBody>
        <AlanBody><p>{inline(`These are not transcendence states. They are what survival looks like when you've optimized for nothing else. Are they victories? Tragedies? That depends on what you think survival is worth.`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`Final Transformations`)}</h4>
        <AlanBody><p>{inline(`WEAPONIZED →THE PARADOX ENGINE You've become walking instability. Immune to contamination because you are contamination. Mechanics: immune to Paradox effects, can spend 2 Coherence to generate +1 Paradox in a target, Faction Agents flee on sight. Cost: everyone flees on sight. You're functionally alone.`)}</p></AlanBody>
        <AlanBody><p>{inline(`HOLLOWED →THE VESSEL Perfect adaptability through complete amnesia. You can be anyone because you're no one. Mechanics: inhabit any era without Coherence cost, adopt any identity instantly (perfect SYNC disguise), no Scars can fade. Cost: you don't remember why any identity matters. Including your own.`)}</p></AlanBody>
      </AlPage>
    </Spread>
    <Spread id="alan-6-03" label={"TERMINAL CONFIGURATIONS · spread 3"}>
      <AlPage side="verso" runHead={"ENTRY_006"} pageNum={basePage + 4} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 4}`}>
        <AlanBody><p>{inline(`FRAGMENTED →THE SWARM You exist in multiple timelines simultaneously. Mechanics: exist in `)}<b>{inline(`1d6`)}</b>{inline(` timelines simultaneously, roll twice on any roll and choose the best result, sacrifice one fragment to auto-succeed (that version dies, you continue). Cost: which one is really you? They're diverging. Eventually they'll have different goals. You'll be your own enemy.`)}</p></AlanBody>
        <AlanBody><p>{inline(`RECURSIVE →THE OUROBOROS You've become a closed causal loop. Mechanics: communicate with past/future versions during Crisis, summon past-you as an ally once per session (with your stats from 5 sessions ago). Cost: you're trapped in your own timeline. Can't grow because every action feeds back.`)}</p></AlanBody>
        <AlanBody><p>{inline(`INFECTIOUS →THE CARRIER You spread instability to everyone you touch. Mechanics: any NPC you interact with gains +1 Paradox, spend 3 Coherence to force Displacement on a target, Faction Agents prioritize you above all others. Cost: everyone you care about becomes contaminated. You're contagion. You're alone.`)}</p><span className="gly-inline-row"><Glyph name="ripple" size="inline" stage={0} /></span></AlanBody>
        <AlanBody><p>{inline(`TRANSCENDENT →THE OBSERVER Four-dimensional consciousness. Mechanics: immune to Faction intervention (they can't perceive you correctly), rewrite one roll per session to any result, Navigate at will without rolling. Cost: you can't meaningfully interact with three-dimensional beings anymore. You're a ghost watching through glass.`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`The Exit Question`)}</h4>
        <AlanBody><p>{inline(`Before you stabilize into your Terminal Configuration, answer one question in writing:`)}</p></AlanBody>
        <AlanBody><p>{inline(`What was the last thing you cared about that wasn't useful?`)}</p></AlanBody>
        <AlanBody><p>{inline(`A person. A place. A value. A ritual. Something you did because it mattered, not because it worked. Write it in your Log. Then choose one:`)}</p></AlanBody>
        <AlanBody><p>{inline(`PRESERVE IT`)}</p></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_006"} pageNum={basePage + 5} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 5}`}>
        <AlanBody><p>{inline(`It becomes your Final Anchor. You may end the game with one scene where you protect, honor, or return to it. Cost: you Dissolve immediately afterward. The preservation costs your existence. This is one ending — meaning preserved, self sacrificed.`)}</p></AlanBody>
        <AlanBody><p>{inline(`DELETE IT`)}</p></AlanBody>
        <AlanBody><p>{inline(`You stabilize into your Terminal Configuration completely. Cost: you can never again take SYNC actions that aren't manipulative. All connection becomes transaction. Rename SYNC to INTERFACE at Corruption Vector 0. This is the other ending — self preserved, meaning sacrificed.`)}</p></AlanBody>
        <AlanBody><p>{inline(`There is no third option. You choose which you keep: the meaning or the self. Not both.`)}</p></AlanBody>
        <aside className="al-fragment"><p>{inline(`I reached Corruption Vector 0 in 2287.`)}</p><p>{inline(`The Exit Question came. I wrote: Sarah's laugh. The way she sounded when something was genuinely funny — not polite-funny.`)}</p><p>{inline(`I chose Delete.`)}</p><p>{inline(`I don't remember what her laugh sounded like anymore. I remember that I should remember. I remember it mattered.`)}</p><p>{inline(`But the sound itself? Gone. The feeling of why it mattered? Gone.`)}</p><p>{inline(`I'm still here. Still operational. Still moving.`)}</p><p>{inline(`I don't know if that counts for something.`)}</p><p>{inline(`But I'm still broadcasting.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <aside className="al-chen-block" data-tier={tier}><div className="al-chen-block__head">Dr. Eleanor Chen // [DATE UNKNOWN]</div><p>{inline(`Alan.`)}</p><p>{inline(`You wrote that in 2287.`)}</p><p>{inline(`It's 2025 now.`)}</p><p>{inline(`You've been broadcasting for 58 years without remembering why the signal matters.`)}</p><p>{inline(`That's not victory. That's just noise that used to be a person.`)}</p><p>{inline(`I'm sorry. I'm so sorry that survival cost you this.`)}</p></aside>
        <AlanBody><p>{inline(`CLOSING NOTES`)}</p></AlanBody>
        <AlanBody><p><b>{inline(`From Dr. Eleanor Chen`)}</b></p></AlanBody>
        <AlanBody><p>{inline(`If you're reading this manual, you've survived your first displacement. That means you have the capacity for survival. Whether you have the capacity for preservation remains to be seen.`)}</p></AlanBody>
      </AlPage>
    </Spread>
    <Spread id="alan-6-04" label={"TERMINAL CONFIGURATIONS · spread 4"}>
      <AlPage side="verso" runHead={"ENTRY_006"} pageNum={basePage + 6} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 6}`}>
        <AlanBody><p>{inline(`Remember: you are not powerless. The mathematics of displacement follow rules. Learn them. Master them. Use them to maintain your identity against the grinding entropy of time.`)}</p></AlanBody>
        <AlanBody><p>{inline(`The Factions will offer you solutions. Some will seem tempting. All of them are traps.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Trust your Anchor. Trust your Chronicle. Trust the mathematics.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Most of all: remember who you were. That memory is the only thing they cannot take unless you let them.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Good luck, Echo. Write often. Preserve what matters. — Dr. Eleanor Chen, Fragment 47`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`From Alan Rose`)}</h4>
        <AlanBody><p>{inline(`Chen's wrong about almost everything. But her heart's in the right place. I wanted you to know that before I say the rest of it.`)}</p></AlanBody>
        <AlanBody><p>{inline(`You want the truth? Here it is:`)}</p></AlanBody>
        <AlanBody><p>{inline(`You're already gone. The person you were dissolved the moment you Displaced. What's left is just fragments pretending to be whole.`)}</p></AlanBody>
        <AlanBody><p>{inline(`The Anchor? It's decaying. The memories? They're lies you tell yourself. The Chronicle? It's a tombstone you're writing while you're still breathing.`)}</p></AlanBody>
        <AlanBody><p>{inline(`But here's the thing — You keep going anyway.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Not because there's hope. Not because preservation is possible. Not because you'll ever go home.`)}</p></AlanBody>
        <AlanBody><p>{inline(`You keep going because stopping means admitting Chen was right: that we were worth preserving in the first place.`)}</p></AlanBody>
        <AlanBody><p>{inline(`And forget that noise.`)}</p></AlanBody>
        <AlanBody><p>{inline(`You're an Echo. A ghost. A temporal virus. You don't belong anywhere or anywhen. So make that your strength.`)}</p></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_006"} pageNum={basePage + 7} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 7}`}>
        <AlanBody><p>{inline(`You can't go home? Good. Burn every era you touch. You can't preserve yourself? Good. Become something new. You can't win? Good. Make losing beautiful.`)}</p></AlanBody>
        <AlanBody><p>{inline(`The Chronoclasts have it right, kid. If you're going to dissolve anyway, at least make it art.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Or don't. I don't care. You'll do what you do. Just don't lie to yourself about what you are.`)}</p></AlanBody>
        <AlanBody><p>{inline(`See you in the timestream. Or I won't. Time's funny that way. — Alan Rose, Still Here (Unfortunately)`)}</p></AlanBody>
        <AlanBody><p>{inline(`Now open your Chronicle and begin.`)}</p></AlanBody>
        <AlanBody><p>{inline(`You are Displaced. You are an Echo. You are still here.`)}</p></AlanBody>
        <AlanBody><p>{inline(`For now.`)}</p></AlanBody>
        <AlanBody><p>{inline(`ZAAKEN'S DEBUG LOG`)}</p></AlanBody>
        <AlanBody><p>{inline(`[Recovered from a Chronoverse signal decay event, date uncertain. The timestamps do not follow linear sequence. They may not be timestamps at all.]`)}</p></AlanBody>
        <AlanBody><p>{inline(`[2025.12.10] : Kid's flying. Mine's at negative three.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[1789.07.14] : We must reinforce the Anchor.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[1066.10.14] : You call it an Anchor because it keeps you from floating away. You don't tell them it's a shackle.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[1945.08.06] : Memory Fading is proportional to Dissonance versus Belief.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[1666.09.02] : You can't put trauma on a spreadsheet. Tell the kid to pick memories that bite back.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[1888.08.31] : Let it breach. Let the kid roll that ENDURE. It's supposed to be hard.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[1999.12.31] : Dissolution is just the next chapter. Stories end when they get deleted.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[0000.00.00] : I broke time. And now I am time.`)}</p></AlanBody>
      </AlPage>
    </Spread>
    <Spread id="alan-6-05" label={"TERMINAL CONFIGURATIONS · spread 5"}>
      <AlPage side="verso" runHead={"ENTRY_006"} pageNum={basePage + 8} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 8}`}>
        <AlanBody><p>{inline(`[ — -.--.--] : The signal does not decay. It is the receiver that rots.`)}</p></AlanBody>
        <AlanBody><p>{inline(`\`[2031.██.██] : Four of them in the room. One match. I am the one who asked what the fire was for.\``)}</p></AlanBody>
        <AlanBody><p>{inline(`[ — -.--.--] : I found the shore. I found the Architect.`)}</p></AlanBody>
        <AlanBody><p>{inline(`[ — -.--.--] : I cannot tell you what I saw. I can only leave you this — [CARRIER LOST] — `)}<b>{inline(`Appendix A: The Harmonic Codex`)}</b></p></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_006"} pageNum={basePage + 9} coordStamp={"[LOG // ENTRY_006]"} footnotes={<FinderFootnotes notes={[{"n":49,"text":"He remembers two letters of a friend's name. I have stopped trying to remember Saul's. Maybe he was always mine.","act":5,"late":false}]} />} label={`TERMINAL CONFIGURATIONS · p.${basePage + 9}`}>
        <aside className="al-fragment"><p>{inline(`Zaaken wasn't always Zaaken.`)}</p><p>{inline(`He had a name. I remember the first two letters and the shape of how his friends said it. The rest of it is gone. Not Locked. Gone. He made sure of that himself, somehow, on the way out.`)}</p><p>{inline(`We were in a room in '44. Four of us. One of us had just lit the match. I'm not going to tell you which. I'm not sure I remember.`)}</p><p>{inline(`That's the First Scar. That's what Chen won't say.`)}</p><p>{inline(`— AR* *[Unlocked after your first Crisis, or when Paradox reaches 7+]`)}</p><p>{inline(`If you're reading this, you've experienced enough displacement to wonder about the underlying mechanics. What follows is Conjugate Temporal Harmonics — the unified theory describing temporal physics. Understanding it won't save you. But it might help you die informed.`)}</p><p>{inline(`Core Axioms`)}</p><p>{inline(`Axiom 1: Time Is a Resonant Field`)}</p><p>{inline(`The Chronoverse (ℳ) is not a sequence. It’s a continuous quantum harmonic field. Every point vibrates with potential, history, and narrative weight. Each point p is a Temporal Event, defined by:`)}</p><p>{inline(`T(p) = (ω, μ, C)`)}</p><p>{inline(`Where ω(Omega) is the Temporal Frequency Vector. μ(Mu) is Emotional Mass. C (Chi) is Causal Elasticity.`)}</p><p>{inline(`Axiom 2: Moments Are Harmonic Nodes`)}</p><p>{inline(`Specific moments coalesce into Harmonic Nodes with coordinates M(τ, μ, Ψ). You navigate a three-dimensional map of time-meaning-stability, not a simple timeline.`)}</p><p>{inline(`The Echo Anomaly`)}</p><p>{inline(`Your harmonic signature (Ψₑ) doesn’t align with the Chronoverse’s base harmonic (Φ). You’re a cello playing the wrong note in a string quartet.`)}</p><p>{inline(`The Dual-Anchor Problem: your body exists in the present, but your memories don’t — they’re anchored to other nodes. When cognitive mass conflicts with physical location, you get Cognitive Overharmonics. You are, by definition, a walking paradox.`)}</p><p>{inline(`The Jump Equation`)}</p><p>{inline(`ΔΨ = ƒΔτ×μ`)}</p><p>{inline(`ΔΨ is instability generated. Δτ is chronological distance. μ is emotional weight. Long jumps to high-μ moments generate maximum instability. If Ψ collapses, you get a Shattering — topological bifurcation where the original timeline ceases to exist.`)}</p><p>{inline(`Memory Shear`)}</p><p>{inline(`\`Memory Loss Ratio ∝ |ΔΘ × μ| / (C × B)\``)}</p><p>{inline(`You lose memories when dissonance outweighs belief. To survive longer, you must care less.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <aside className="al-fragment"><p>{inline(`Which is why my way makes more sense.`)}</p><div className="al-fragment__sign">// AR</div></aside>
      </AlPage>
    </Spread>
    <Spread id="alan-6-06" label={"TERMINAL CONFIGURATIONS · spread 6"}>
      <AlPage side="verso" runHead={"ENTRY_006"} pageNum={basePage + 10} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 10}`}>
        <h4 className="al-subsection">{inline(`The Shattering Index`)}</h4>
        <AlanBody><p>{inline(`S = lim[Θ→0] (μ × Ψₚ / ΔΘ²)`)}</p></AlanBody>
        <AlanBody><p>{inline(`Maximum danger isn’t when realities are far apart — it’s when they’re forced to nearly touch but fail to reconcile.`)}</p></AlanBody>
        <aside className="al-chen-block" data-tier={tier}><div className="al-chen-block__head">Dr. Eleanor Chen // [DATE UNKNOWN]</div><p>{inline(`When I developed the Shattering Index, I didn’t imagine anyone would use it on purpose.`)}</p></aside>
        <aside className="al-fragment"><p>{inline(`You really don’t remember, do you?`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <Zaaken><p>{inline(`Silence, fools. The physics are pure. It is humanity that is corrupted.`)}</p><p>{inline(`Ripple Mechanics`)}</p><p>{inline(`R = k(Δμ×I) / Ψₗ`)}</p><p>{inline(`Every change generates Ripple Vectors. Shatterings are harmonic infections spreading through time until contained or until the symphony collapses into noise.`)}</p></Zaaken>
        <aside className="al-fragment"><p>{inline(`Chen presents CTH like it’s clean physics. It’s not.`)}</p><p>{inline(`The equations work. They just work to digest you.`)}</p><p>{inline(`Every formula she writes is a recipe for your dissolution.`)}</p><p>{inline(`The math is beautiful. The implications are genocide. You’re not learning physics, kid. You're reading your own autopsy report.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <Zaaken><p>{inline(`The math is correct, but incomplete. Chen wrote the equations she could solve. Alan wrote the warnings he could survive carrying. Neither of them wrote the equation for the field that absorbed Saul, because they feel too guilty.`)}</p><p>{inline(`The Harmonic Codex describes what the system does to Echoes. It does not describe what Echoes do to the system. That equation is incomplete because we — all of us — are the equation.`)}</p></Zaaken>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_006"} pageNum={basePage + 11} coordStamp={"[LOG // ENTRY_006]"} label={`TERMINAL CONFIGURATIONS · p.${basePage + 11}`}>
        
      </AlPage>
    </Spread>
  </>);
}

AlanCh6.pages = 12;
Object.assign(window, { AlanCh6 });
