// AUTO-GENERATED — appendix-b — ASSET CATALOGS
function AppendixB({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="appendix-b-opener" label={"B · opener"}>
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="B · opener">
        <div className="el-appendix-opener">
          <div className="el-appendix-eyebrow">Appendix B</div>
          <h1 className="el-h1 el-appendix-opener__title">Asset Catalogs</h1>
          <img src="assets/chen-chapter-rule.svg" alt="" className="el-appendix-rule" />
        </div>
      </ChPage>
    </Spread>
    <Spread id="appendix-b-01" label={"ASSET CATALOGS · spread 1"}>
      <ChPage side="verso" runHead={"Asset Catalogs"} pageNum={basePage + 0} label={`ASSET CATALOGS · p.${basePage + 0}`}>
        <div className="el-body"><p>{inline(`Assets are tools, abilities, and connections that survived your Displacement. Each has three levels and a Stress track that expands with advancement. Push any Asset during a roll by marking 1 Stress to add +1 to your result — but only if the Asset is fictionally present and relevant. emiT players: every time you Push a Chrono-Tech Asset, also roll `)}<b>{inline(`d6`)}</b>{inline(`. On `)}<b>{inline(`1-2`)}</b>{inline(`, it glitches — choose to gain +1 Paradox or have the Asset unavailable this scene. Passive bonuses never trigger this. See emiT Chapter 2 for full Asset Corruption rules.`)}</p></div>
        <h3 className="el-section">{inline(`Scar-Derived Assets (emiT only)`)}</h3>
        <div className="el-body"><p>{inline(`Wrecks can forge weapons from their wounds. When you Weaponize a Scar — invoking it for its bonus, then burning it — you may choose to crystallize the act into an Asset instead of simply losing the Scar. To create a Scar-Derived Asset: describe what operational capability that wound has permanently given you. Name it. It enters play as a Level 1 Asset with 3 Stress boxes. The Scar is still Lost. The Mutation is still gained. But something functional remains. Scar-Derived Assets cannot be repaired at Downtime — they are scar tissue, not equipment. When they break, you gain +1 Paradox and a brief, clear memory of whatever the original Scar was.`)}</p></div>
        <h4 className="el-subsection">{inline(`Examples:`)}</h4>
        <ul className="el-list"><li>{inline(`Knows How Burns Feel (+1 ENDURE vs environmental hazards)`)}</li><li>{inline(`Speaks to People Who Are About to Leave (+1 SYNC when someone is in crisis)`)}</li><li>{inline(`Has Died in This Era Before (+2 to Navigation targeting a specific era where a Scar was Lost)`)}</li></ul>
      </ChPage>
      <ChPage side="recto" runHead={"Asset Catalogs"} pageNum={basePage + 1} label={`ASSET CATALOGS · p.${basePage + 1}`}>
        <h3 className="el-section">{inline(`Chrono-Tech Assets`)}</h3>
        <h4 className="el-subsection">{inline(`1. The Temporal Compass [Chrono-Tech]`)}</h4>
        <div className="el-body"><p>{inline(`The Compass came out of an estate sale in 2034. It was in a box of brass instruments labeled "navigational, decorative, untested." Three of the others were ordinary. This one wasn't. The needle moves to a different north than the planet's. The brass is warmer than the room it's in by a measurable but inconsistent margin. The pre-Sanskrit inscription has been dated to two non-overlapping periods by two reputable laboratories. Both labs are correct.`)}</p></div>
        <div className="el-body"><p><i>{inline(`Brass housing, a needle that shouldn't move the way it does, pre-Sanskrit equations inscribed along the rim.`)}</i></p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Detects temporal anomalies in your immediate area. `)}<b>{inline(`+1 OBSERVE`)}</b>{inline(` when sensing distortions. - `)}<b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Range extends to city-wide. Identifies anomaly type (loop, fracture, bleed). `)}<b>{inline(`+2 OBSERVE.`)}</b>{inline(` - `)}<b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Detects other Echoes. Senses Displacement 30 seconds before it occurs. `)}<b>{inline(`+3 OBSERVE.`)}</b>{inline(` Once per session, reroll a failed Navigation attempt.`)}</li></ul>
        <AlanIntrusionInline tier={tier}><p>{inline(`Maintenance note: if your Compass starts pointing at you instead of external anomalies, do not attempt to recalibrate. It's working correctly. You're the anomaly now.`)}</p></AlanIntrusionInline>
        <h4 className="el-subsection">{inline(`2. The Resonance Dampener [Chrono-Tech]`)}</h4>
      </ChPage>
    </Spread>
    <Spread id="appendix-b-02" label={"ASSET CATALOGS · spread 2"}>
      <ChPage side="verso" runHead={"Asset Catalogs"} pageNum={basePage + 2} label={`ASSET CATALOGS · p.${basePage + 2}`}>
        <div className="el-body"><p>{inline(`The Dampener was issued to Loop Authority field personnel between 2042 and 2049 and recalled in 2050 after seven of the wearers stopped reporting in. The recall was incomplete. Three units are still circulating. Each one is cold to the touch in a way that does not respond to ambient temperature. The hum is consistent across all three units, suggesting either a manufacturing standard or a shared resonance phenomenon the Authority does not document. A heavy metal collar worn around the neck. Cold to the touch. Hums at frequencies that make dogs bite.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Absorbs Paradox backlash. +1 ENDURE versus timeline stress. Once per session, ignore 1 point of Paradox gain.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Stabilizes local causality. +2 ENDURE. Ignore up to 2 Paradox per session. +1 to all rolls while in Anomaly state (Paradox 7-9).`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Creates a small pocket of null time. +3 ENDURE. Once per session, declare one scene exists outside normal causality — nothing in that scene generates Paradox. Afterward, mark all Stress.`)}</li></ul>
        <AlanIntrusionInline tier={tier}><p>{inline(`It's a muzzle. The Paradox still goes somewhere. You don't want to know where.`)}</p></AlanIntrusionInline>
        <h4 className="el-subsection">{inline(`3. The Memory Crystallizer [Chrono-Tech]`)}</h4>
        <div className="el-body"><p>{inline(`A medical syringe containing liquid like mercury and moonlight. Temperature shifts based on emotional state.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Preserves fading memories temporarily. +1 ENDURE when resisting memory loss. Once per session, treat a Fading Memory as Active for one scene.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Can extract memories into physical form — small glowing crystals. +2 ENDURE. Extracted memories cannot fade but also cannot be accessed without re-injecting.`)}</li></ul>
      </ChPage>
      <ChPage side="recto" runHead={"Asset Catalogs"} pageNum={basePage + 3} label={`ASSET CATALOGS · p.${basePage + 3}`}>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Can share memories with other Echoes or inject them into non-Displaced individuals. +3 ENDURE. Warning: recipient experiences full emotional context, temporal contamination, identity confusion, and possible spontaneous Displacement.`)}</li></ul>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`Used this on a version of my wife once. Timeline where we never met. Thought I'd give her our memories back — romantic gesture, real fairy tale nonsense. She Displaced three hours later. Never saw her again. The look on her face when she realized what I'd done will haunt me until I dissolve. Some gifts are curses with better packaging.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`4. The Paradox Lens [Chrono-Tech]`)}</h4>
        <div className="el-body"><p>{inline(`A Victorian-era monocle. Glass that isn't glass. Shows geometry that gives the user nightmares.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Reveals temporal fractures invisible to normal perception. +1 OBSERVE for investigation.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Shows the immediate future `)}<b>{inline(`3-`)}</b>{inline(` 5 seconds ahead. +2 OBSERVE. Once per session, reroll one die after seeing the result.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Perceives multiple timeline branches simultaneously. +3 OBSERVE. Once per session, ask one What If question and receive a vision of an alternate outcome. Warning: viewing too many possibilities causes vertigo, nosebleeds, and temporary inability to remember which timeline you're in.`)}</li></ul>
        <AlanIntrusionInline tier={tier}><p>{inline(`At Level 3, you'll start seeing the version of yourself that made different choices. Standing next to you. Staring. Judging. Sometimes screaming. They look exactly like you. That's the part that gets you.`)}</p></AlanIntrusionInline>
      </ChPage>
    </Spread>
    <Spread id="appendix-b-03" label={"ASSET CATALOGS · spread 3"}>
      <ChPage side="verso" runHead={"Asset Catalogs"} pageNum={basePage + 4} label={`ASSET CATALOGS · p.${basePage + 4}`}>
        <h4 className="el-subsection">{inline(`5. The Chronometric Stabilizer [Chrono-`)}</h4>
        <h4 className="el-subsection">{inline(`Tech]`)}</h4>
        <div className="el-body"><p>{inline(`A pocket watch that ticks backwards. Hands move at inconsistent speeds. Shows time zones that don't exist yet.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Extends time in stable locations. +1 SYNC when trying to remain in one era longer. +1 to Downtime recovery moves.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Slows local time perception during Crisis. +2 SYNC. Once per Crisis, take an additional Response action.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Temporarily anchors you to a specific moment. +3 SYNC. Prevents forced Displacement for one full scene. Cost: mark all Stress. After the anchor ends, immediate Displacement — no Navigation roll possible.`)}</li></ul>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`I knew an Echo who used this at Level 3 to anchor himself to his daughter's wedding. Got to walk her down the aisle. Give the toast. Dance with her. Displacement hit the second the song ended. He landed in 1347 during the Black Death. Died there. Never jumped again. Worth it? He thought so. I'm not sure.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`6. The Displacement Trigger [Chrono-Tech]`)}</h4>
        <div className="el-body"><p>{inline(`You'll know when you find it.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Allows one attempted Precision Navigation per session without spending Downtime. +1 to Navigation rolls.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Forces Displacement when in danger. +2 Navigation. Once per session, trigger an emergency jump as a reaction to a threat — roll with -2 penalty but escape is guaranteed.`)}</li></ul>
      </ChPage>
      <ChPage side="recto" runHead={"Asset Catalogs"} pageNum={basePage + 5} label={`ASSET CATALOGS · p.${basePage + 5}`}>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Targets specific moments with extreme precision. +3 Navigation. May attempt to return to previously visited eras and locations with +2 bonus. Warning: frequent use creates echo loops — you start meeting past versions of yourself.`)}</li></ul>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`This is the one that will kill you. Not because it fails. Because it works. The temptation to go back, fix things, warn yourself, save someone — it will eat you alive. You'll create loops. You'll generate Paradox. You'll become your own haunting. I have this Asset at Level 3. I haven't used it in 90 years. Every morning I hold it and think about the moments I could return to. Every morning I put it back in my pocket.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`Echo Trait Assets`)}</h4>
        <h4 className="el-subsection">{inline(`7. Temporal Sensitivity [Echo Trait]`)}</h4>
        <div className="el-body"><p>{inline(`Your nervous system has rewired. You feel time as pressure and temperature. Displacement feels like falling. Paradox tastes like copper and regret.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Always know exact date, time, and location. +1 Navigation. Sense Displacement 30 seconds before it occurs.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Perceive the temporal weight of moments — which events matter, which are fragile. +2 Navigation. Identify Nexus Points when present.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Sense other Echoes within one mile. +3 Navigation. Feel timeline scars — locations where Paradox damaged causality. Once per session, sense the correct timeline path during Crisis. Stress Effect: when overstressed, constant temporal vertigo — cannot distinguish present from near-future, hear the screams of divergent timelines.`)}</li></ul>
      </ChPage>
    </Spread>
    <Spread id="appendix-b-04" label={"ASSET CATALOGS · spread 4"}>
      <ChPage side="verso" runHead={"Asset Catalogs"} pageNum={basePage + 6} label={`ASSET CATALOGS · p.${basePage + 6}`}>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`At Level 3, you hear time. All the time. The tick of a billion moments happening simultaneously. Every choice creating splinters. It's beautiful. It's also madness. Most Echoes with Level 3 Temporal Sensitivity eventually take Scionfall up on their offer. I chose alcohol. Doesn't help, but at least I'm consistent across timelines.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`8. Chronal Resilience [Echo Trait]`)}</h4>
        <div className="el-body"><p>{inline(`Your cells reject causality. Wounds heal wrong. Physical scars fade then reappear. You age in reverse on Tuesdays.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Recover from physical damage faster. +1 ENDURE versus physical harm. Halve recovery time from injuries.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Immune to temporal shock. +2 ENDURE. Displacement no longer costs Coherence. Age becomes optional — choose whether to age during any given era.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Survive normally fatal trauma by rejecting the timeline where you died. +3 ENDURE. Once per session, when reduced to 0 Coherence, set it to 1 and mark all Stress instead. Cost: gain a permanent Scar and lose one Memory of your choice.`)}</li></ul>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`I've been killed fourteen times. Shot, stabbed, burned, drowned, poisoned, thrown from towers, caught in explosions. Once I was guillotined. The blade came down. My head came off. Then the timeline corrected. Turns out I never walked up those steps — the me who did was a different branch. I shed him like snakeskin. This Asset is useful. It's also how you stop being human, one piece at a time.`)}</p><div className="el-alan-sign">—AR</div></aside>
      </ChPage>
      <ChPage side="recto" runHead={"Asset Catalogs"} pageNum={basePage + 7} label={`ASSET CATALOGS · p.${basePage + 7}`}>
        <h4 className="el-subsection">{inline(`9. Adaptive Linguistics [Echo Trait]`)}</h4>
        <div className="el-body"><p>{inline(`Exposure to divergent timelines has turned your brain into a universal translator. You dream in dead languages that no one ever remembers speaking.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Learn new languages within hours of immersion. +1 SYNC in any era. Understand (but not speak) any human language after hearing it for 10 minutes.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Speak any encountered language fluently. +2 SYNC. Read and write languages never studied. Understand subtext, idiom, and cultural context automatically.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Speak in Ur-Resonance — the fundamental frequency underlying all language. +3 SYNC. Once per session, issue a command in Ur-Resonance that NPCs must obey (`)}<b>{inline(`Difficulty 10`)}</b>{inline(` SYNC roll). Cost: mark all Stress, suffer nosebleed and temporary aphasia. Stress Effect: languages bleed together — you speak chimera-tongues that everyone understands and no one can reproduce.`)}</li></ul>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`Used Level 3 once. Told a Roman centurion to forget he saw me. He did. He also forgot his name, his family, and pretty much everything else. Ur-Resonance isn't the ancient language Zaaken's theorems predicted. It's more like language that predates the concept of selfhood. Use it carefully. Or don't. I'm not your dad.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`10. Quantum Perception [Echo Trait]`)}</h4>
        <div className="el-body"><p>{inline(`You see probability. Every person is a cloud of what-ifs. Every moment branches like lightning.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Perceive timeline instability. +1 OBSERVE when detecting Paradox or anomalies. See echoes of recent events (past 24 hours) in a location.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — View alternate timelines briefly. +2 OBSERVE. Once per scene, glimpse how a situation could unfold differently — ask one What If and receive a truthful vision.`)}</li></ul>
      </ChPage>
    </Spread>
    <Spread id="appendix-b-05" label={"ASSET CATALOGS · spread 5"}>
      <ChPage side="verso" runHead={"Asset Catalogs"} pageNum={basePage + 8} label={`ASSET CATALOGS · p.${basePage + 8}`}>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Exist in quantum superposition briefly. +3 OBSERVE. Once per session, take two different actions simultaneously — roll for both, choose which branch collapses into reality. Cost: mark all Stress. Both versions of you remember both actions. Stress Effect: cannot tell which timeline is real. Paralyzed by infinite choice.`)}</li></ul>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`Chen's favorite. She thinks seeing probability makes you wise. Once you can see every branch, every outcome, every consequence, you realize every choice kills a thousand versions of yourself who wanted something different. Level 3 Quantum Perception makes you a guilty graveyard. Stay away from this one unless you want to dream about the roads you didn't take. All of them. Every night.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`11. Memory Recursion [Echo Trait]`)}</h4>
        <div className="el-body"><p>{inline(`Your memories remember themselves. You recall recalling. Your nostalgia has nostalgia. Your mind is an Escher construct.`)}</p></div>
        <h4 className="el-subsection">{inline(`Level 1 ○○○ Access Fading Memories with full`)}</h4>
        <div className="el-body"><p>{inline(`clarity once per session without spending Coherence. +1 ENDURE when resisting memory loss.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Loop memories — replay them in real-time as if experiencing fresh. +2 ENDURE. Once per session, use a Lost Memory as if it were Active for one roll only. Cost: gain a permanent Scar afterward.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Memories propagate backwards through your personal timeline. +3 ENDURE. Once per session, implant a false memory you've always had — create a new Active Memory without replacing an existing one. Cost: mark all Stress. The false memory might be truer than the real ones. Stress Effect: cannot tell original memories from recalled memories from memories of memories.`)}</li></ul>
      </ChPage>
      <ChPage side="recto" runHead={"Asset Catalogs"} pageNum={basePage + 9} label={`ASSET CATALOGS · p.${basePage + 9}`}>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`I used this at Level 3 to remember my wedding day. Replayed it 400 times. Every detail. The way light hit her dress. But each replay changes small things. Her dress was ivory. No, white. No, blue. We were married in June. In October. In April. I've polished the memory so smooth it's become fiction. I can't remember the original anymore.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`12. Paradox Intuition [Echo Trait]`)}</h4>
        <div className="el-body"><p>{inline(`You feel the universe's immune response. Paradox whispers to you in the voice of static and regret.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Sense when actions will generate Paradox before taking them. +1 OBSERVE. Taste timeline stability in a location.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Predict Paradox cascades. +2 OBSERVE. Once per session, spend 1 Coherence to prevent 1 Paradox from generating — you instinctively avoid the contradiction.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — Harvest Paradox — store contradictions in your body. +3 OBSERVE. Absorb up to 3 Paradox from your track into the Asset's Stress boxes. When released (mark all Stress), spend stored Paradox as raw temporal energy — each point grants +2 to one roll or powers specialized Chrono-Tech.`)}</li></ul>
        <div className="el-body"><p><b>{inline(`Stress Effect: stored Paradox leaks. Reality`)}</b></p></div>
        <div className="el-body"><p>{inline(`glitches. NPCs forget conversations mid- sentence.`)}</p></div>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`The Church wanted to recruit me because of this one. Said I was compatible with the resonance of contradiction. I told them to buzz off. They said I'd come around eventually. They were right. At Level 3, you feel every contradiction in a 100-meter radius. Every lie. Every broken promise. The universe is screaming Paradox constantly and you're the only one who hears it. Sure it's painful. Channel it. Weaponize it.`)}</p><div className="el-alan-sign">—AR</div></aside>
      </ChPage>
    </Spread>
    <Spread id="appendix-b-06" label={"ASSET CATALOGS · spread 6"}>
      <ChPage side="verso" runHead={"Asset Catalogs"} pageNum={basePage + 10} label={`ASSET CATALOGS · p.${basePage + 10}`}>
        <h4 className="el-subsection">{inline(`Temporal Anchor Assets`)}</h4>
        <h4 className="el-subsection">{inline(`13. Heirloom Object [Temporal Anchor]`)}</h4>
        <div className="el-body"><p>{inline(`A physical item from your Origin Era, worn smooth by centuries of desperate gripping. The Rolex you stole from your best friend. The wedding ring you took off at the hotel. A fading photograph. An unsent letter. A bloodsoaked weapon.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — +1 ENDURE when your identity is challenged. Once per session, touch the object and restore 1 Coherence.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — The object begins appearing in multiple eras — you find it in medieval markets, Victorian auctions, future museums. +2 ENDURE. Use the object to anchor Navigation attempts to eras where it appears.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — The object exists in quantum superposition across all timelines. +3 ENDURE. Once per session, touching it allows you to access memories from alternate versions of yourself who also possessed it. Cost: mark all Stress. These memories may contradict your own. Stress Effect: the object starts changing identities — your grandfather's watch becomes your grandmother's locket becomes a stranger's compass.`)}</li></ul>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`Mine's a safety vest. Bright red, reflective strips, name tag that says 'A. Rose.' Found it in my truck the day I Displaced. Been wearing it for 300 years. I've seen it in Renaissance paintings. Medieval tapestries. Cave drawings of a figure in red. Future museums label it 'Artifact of Unknown Origin, Circa Always.' There's a framed photograph of me wearing it in a Baltic archive I'm not supposed to know about. The caption reads UNIDENTIFIED WITNESS, RIGA, 1941. I don't know if I'm carrying the vest or the vest is carrying me. At Level 3, I can feel every version of me who ever wore it. Thousands of Alan Roses across timelines, all clinging to the same stupid piece of polyester like it's a life raft. Maybe it is.`)}</p><div className="el-alan-sign">—AR</div></aside>
      </ChPage>
      <ChPage side="recto" runHead={"Asset Catalogs"} pageNum={basePage + 11} label={`ASSET CATALOGS · p.${basePage + 11}`}>
        <h4 className="el-subsection">{inline(`14. Persistent Connection [Temporal Anchor]`)}</h4>
        <div className="el-body"><p>{inline(`A specific person, bloodline, place, or institution that recurs across multiple eras. A building that never quite falls. A song that predates notation.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — +1 SYNC when interacting with the Connection. Gain advantage on social rolls with descendants or iterations of the connected element.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 2 ○○○○`)}</b>{inline(` — Reliably locate iterations of the Connection in new eras. +2 SYNC. Once per session, call upon the Connection for aid — shelter, information, resources.`)}</li></ul>
        <ul className="el-list"><li><b>{inline(`Level 3 ○○○○○`)}</b>{inline(` — The Connection exists across all timelines simultaneously. +3 SYNC. Communicate with past and future iterations.`)}</li></ul>
        <div className="el-body"><p><b>{inline(`Cost: each communication marks Stress. The`)}</b></p></div>
        <div className="el-body"><p>{inline(`Connection becomes aware they exist across time — which has consequences.`)}</p></div>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`There's a woman. I keep meeting her. Different names, different faces, but always her. The eyes give it away. 1888 London: factory worker named Mary. 1640 Florence: nun named Sister Lucia. 2179 Mars: engineer named Mir. Level 3 let me talk to all of them at once. Mir asked Mary what the sky looked like. Mary asked Lucia if God was real. Lucia asked me if love survived time. I didn't answer. They all remember each other now. They know they're echoes of the same pattern. I don't know if I saved them or damned them.`)}</p><div className="el-alan-sign">—AR</div></aside>
      </ChPage>
    </Spread>
    <Spread id="appendix-b-07" label={"ASSET CATALOGS · spread 7"}>
      <ChPage side="verso" runHead={"Asset Catalogs"} pageNum={basePage + 12} label={`ASSET CATALOGS · p.${basePage + 12}`}>
        <h4 className="el-subsection">{inline(`15. Origin Era Knowledge [Temporal Anchor]`)}</h4>
        <div className="el-body"><p>{inline(`Expertise from your home time that persists across displacement. Your PhD, your trade skills, your cultural fluency.`)}</p></div>
        <ul className="el-list"><li><b>{inline(`Level 1 ○○○`)}</b>{inline(` — Permanent +2 bonus to any action directly related to your Origin Era's technology, culture, or history.`)}</li></ul>
        <h4 className="el-subsection">{inline(`Level 2 ○○○○ Introduce Origin Era knowledge`)}</h4>
        <div className="el-body"><p>{inline(`to other timelines carefully. +2 OBSERVE or SYNC when teaching or sharing. +1 to Paradox reduction when working to minimize anachronistic contamination.`)}</p></div>
        <h4 className="el-subsection">{inline(`Level 3 ○○○○○ Manifest Origin Era`)}</h4>
        <div className="el-body"><p>{inline(`knowledge as physical reality. +3 bonus. Once per session, create an object or technique from your home time that shouldn't exist in the current era — it lasts one scene, then fades.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Cost: mark all Stress, gain +1 Paradox. Stress`)}</b></p></div>
        <div className="el-body"><p>{inline(`Effect: Origin knowledge becomes unreliable — you remember technologies that were never invented, cultural practices that never existed.`)}</p></div>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`I'm from 2043. Level 3 let me manifest a smartphone in 1920s Berlin. Just for one scene. Showed it to a cabaret singer as a magic trick. Three weeks later, she disappeared. Found her Chronicle in an Authority archive. She'd spent the rest of her life trying to invent what I showed her. Generated so much Paradox she splintered into a Stray Timeline and was erased. My Origin knowledge killed her. And I can't even remember her name.`)}</p><div className="el-alan-sign">—AR</div></aside>
      </ChPage>
      <ChPage side="recto" runHead={"Asset Catalogs"} pageNum={basePage + 13} label={`ASSET CATALOGS · p.${basePage + 13}`}>
        
      </ChPage>
    </Spread>
  </>);
}

AppendixB.pages = 14;
Object.assign(window, { AppendixB });
