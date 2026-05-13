// AUTO-GENERATED — chapter/alan ch2 — CALIBRATION
function AlanCh2({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="alan-2-01" label="CALIBRATION · spread 1">
      <AlPage side="verso" label="(blank)" />
      <AlPage side="recto" label="Alan Ch 2 · Opener">
        <AlanChapterHead entry={2} sub="CALIBRATION" coord="[TEMPORAL LOG // ENTRY_002 // ERA: 21 // NODE: CALIBRATION]" />
        <AlanFragment top={170} right={4} rotate={-3} size={9}>// 2287.088.0001</AlanFragment>
      </AlPage>
    </Spread>
    <Spread id="alan-2-02" label="CALIBRATION · spread 2">
      <AlPage side="verso" runHead="ENTRY_002" pageNum={(basePage + 2)} coordStamp="[LOG // ENTRY_002]" label={`Alan · CALIBRATION · p.${(basePage + 2)}`}>
        <AlanBody><p>{inline(`Stop pretending you're still human. You are a walking weapon. A living bomb on causality and a bona fide wound in space-time. Own it. When Paradox climbs, your Modes shift. You lose SYNC because SYNC was the part of you that needed other people to validate that you were real. You don't need that anymore, and can't afford it. Every Coherence point you spend trying to feel like a person is one less point you have when the timeline shows up to collect its debt. You gain DISRUPT because subtlety gets you killed. The first hundred Echoes who tried to be clever are rotting corpses buried somewhere in time. The ones still kicking did so by being blunt instruments at the right moment. Read the equations and stop arguing with them. Architecture of a Wreck You begin with an origin (subject to revision), damage (mandatory), and a trajectory (inevitable).`)}</p></AlanBody>
        <h2 className="al-h2">// WHAT THEY CALLED YOU</h2>
        <AlanBody><p>{inline(`Write these in pencil. By session 10, you'll have different answers than you started with. By session 20, you'll realize the origin story was always negotiable — a narrative you construct to explain your current behavior. That's fine. Use the fiction. We're all just drafts. Name: What they called you Origin Era: When and where you're from Displacement Event: What unmoored you`)}</p></AlanBody>
        <h2 className="al-h2">// HOW FAR GONE YOU ARE</h2>
        
      </AlPage>
      <AlPage side="recto" runHead="ENTRY_002" pageNum={(basePage + 3)} coordStamp="[LOG // ENTRY_002]" label={`Alan · CALIBRATION · p.${(basePage + 3)}`}>
        <AlanBody><p>{inline(`Track your transformation direction on a scale of 5 to 0. You start at 5 — still recognizably human. Each time it decreases, you shed one connection to your origin, gain one operational capability, and become harder to dissolve and easier to misunderstand. At 0: Final Transformation (see Chapter 6). Your Corruption Vector decreases by 1 when you: choose 'Embrace Corruption' during Crisis resolution, gain your third Mutation in a single session, or voluntarily accept a Faction transformation offer. Nothing else decreases it. It only moves in one direction. This isn't death. This is becoming something else.`)}</p></AlanBody>
        <h2 className="al-h2">// WHICH WAY YOU'RE FALLING</h2>
        <AlanBody><p>{inline(`Your trajectory shapes how you play from the first session. Choose one and write it on your Corruption Log. Each trajectory unlocks one move immediately.`)}</p></AlanBody>
        <h2 className="al-h2">// TRAJECTORY IMMEDIATE MOVE</h2>
        <AlanBody><p>{inline(`Weaponized Once per session, when you generate Paradox through a roll, you may immediately convert it into a +1 bonus on your next DISRUPT roll. The contradiction becomes ammunition. Hollowed When a Scar becomes Lost, you may choose not to gain a Mutation. Instead, describe what you no longer feel. Write it in your Log. No mechanical consequence. Just the record. Fragmented When you fail a roll, you may ask: What would another version of me have done? Answer the question in your Log, then roll again using that framing. The second result stands, whether better or worse. Recursive Once per session, you may declare that you've done this before. Gain +2 on a roll. Mark +1 Paradox. The loop is real. The destabilization is real. Infectious When you interact with an NPC, you may choose to transfer 1 point of your Paradox to them. Reduce your Paradox by`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`They become slightly wrong afterward — describe how. The`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`NPC now carries a piece of your contamination. Transcendent Once per session, you may describe what you perceive that others cannot — branching timelines, the echo of futures that won't happen, the weight of causality in a room. This perception is accurate. Gain +2 to your next roll. But you must also describe one thing you can no longer perceive normally. Write it in your Log. Accumulate these losses.`)}</p></AlanBody>
        <h2 className="al-h2">// HOW YOU FUNCTION NOW</h2>
        
      </AlPage>
    </Spread>
    <Spread id="alan-2-03" label="CALIBRATION · spread 3">
      <AlPage side="verso" runHead="ENTRY_002" pageNum={(basePage + 4)} coordStamp="[LOG // ENTRY_002]" label={`Alan · CALIBRATION · p.${(basePage + 4)}`}>
        <AlanBody><p>{inline(`You have four instinctual approaches: OBSERVE (analysis, threat detection, pattern recognition), SYNC (connection, manipulation, adaptation), ENDURE (damage absorption, persistence), DISRUPT (force, violence, causality breaking). But here's what other displacement manuals don't tell you: these numbers aren't fixed. As temporal contamination increases, your operational profile shifts.`)}</p></AlanBody>
        <h2 className="al-h2">// PARADOX LEVEL MODE RATINGS</h2>
        <AlanBody><p>{inline(`Shadow (0-3) OBSERVE +2 / SYNC +1 / ENDURE +0 / DISRUPT -1 Flux (4-6) OBSERVE +1 / SYNC +0 / ENDURE +1 / DISRUPT +1 Anomaly (7-9) OBSERVE +0 / SYNC -1 / ENDURE +2 / DISRUPT +2 Breach (10+) OBSERVE -1 / SYNC -2 / ENDURE +3 / DISRUPT +3 The more contaminated you become, the less you can analyze or connect. The more you can endure and destroy. You will become a blunt instrument whether you choose to or not. This is the core mechanic. Corruption changes who you are at the stat level. Most people fight this. You're going to ride it.`)}</p></AlanBody>
        <div style={{margin:'5mm -2mm', background:'var(--el-parchment)', color:'var(--el-forest)', fontFamily:'var(--ff-mono)', fontSize:'9pt', lineHeight:1.4, padding:'4mm 6mm', transform:'rotate(0.6deg)', boxShadow:'2px 3px 10px rgba(13,15,18,0.5)'}}><div style={{fontFamily:'var(--ff-mono)', fontWeight:300, fontSize:'7pt', color:'var(--al-steel)', marginBottom:'2mm', letterSpacing:'0.04em'}}>Dr. Eleanor Chen // [DATE UNKNOWN]</div><p style={{margin:0}}>{inline(`This is what I was afraid of. The stat shifts you're describing? That's not evolution. That's loss of analytical capacity (OBSERVE drops), social disconnection (SYNC drops), emotional numbing (ENDURE rises), violence as primary response (DISRUPT rises). You're gamifying PTSD symptoms. I understand why you frame it as adaptation. I understand 340 years has required you to function this way. But please — for once — admit what it cost you.`)}</p></div>
        <h2 className="al-h2">// WHAT HURTS</h2>
        <AlanBody><p>{inline(`You begin with 5 Scars — formative wounds that shaped your operational capacity. Unlike Chen's Memories, you're not trying to preserve these. You reload them. For each Scar, write: Name — brief, evocative Context Tags — when it applies Invocation — what you can do with it and the bonus`)}</p></AlanBody>
        
      </AlPage>
      <AlPage side="recto" runHead="ENTRY_002" pageNum={(basePage + 5)} coordStamp="[LOG // ENTRY_002]" label={`Alan · CALIBRATION · p.${(basePage + 5)}`}>
        <AlanBody><p>{inline(`Example Scar:`)}</p></AlanBody>
        <h2 className="al-h2">// BERLIN, 1989</h2>
        <AlanBody><p>{inline(`Tags: Collapse / Borders / Impossible Escape Invocation: +2 to DISRUPT when breaking containment`)}</p></AlanBody>
        <h2 className="al-h2">// WHAT'S LEFT</h2>
        <AlanBody><p>{inline(`Choose 2 Assets from any category. All start Level 1 with 3 Stress boxes. See Appendix B for full catalog. Asset Corruption: every time you Push a Chrono-Tech Asset, roll d6. On 1-2, it glitches — choose to gain +1 Paradox or have the Asset unavailable this scene. Passive bonuses never trigger this. Only when you're forcing it beyond its limits. Your tools make you stronger and more contaminated simultaneously. That's not a bug. That's the exchange rate. ASSET STATES (emiT) Every Asset in emiT exists in one of three states. Track this on your sheet. Clean — The Asset functions as written. No additional effects. Compromised — The Asset has taken at least 1 Stress from a Glitch (the 1-2 result on the d6 roll). While Compromised, its passive bonus drops by 1 (a +2 OBSERVE becomes +1 OBSERVE). It still functions. It just costs more to maintain than it gives back. This is what most tools become eventually. Weaponized — You have deliberately pushed a Glitched Asset past its limit, accepting the contamination as the point. A Weaponized Asset has all Stress boxes marked, grants no passive bonus, and cannot be repaired. But once per session, you may invoke it for a +3 bonus to any roll that fits its fiction — you're not using the tool, you're using what the tool's failure has taught you. After invoking a Weaponized Asset, roll d6. On 1-2, it breaks permanently. Remove it from your sheet. Do not write a replacement yet. Sit with the gap. Assets move from Clean →Compromised when Glitch Stress accumulates. Compromised →Weaponized is a choice, not a threshold — you decide when something broken is more useful broken than repaired.`)}</p></AlanBody>
        <h2 className="al-h2">// TRAJECTORY MOVES</h2>
        <AlanBody><p>{inline(`Being a wreck means you never stop moving. The Moves below are the six ways you direct that motion.`)}</p></AlanBody>
        
      </AlPage>
    </Spread>
    <Spread id="alan-2-04" label="CALIBRATION · spread 4">
      <AlPage side="verso" runHead="ENTRY_002" pageNum={(basePage + 6)} coordStamp="[LOG // ENTRY_002]" label={`Alan · CALIBRATION · p.${(basePage + 6)}`}>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Lean Into It. When you take damage, push it forward instead`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`of resisting. Spend 1 Coherence; convert the damage into momentum on your next roll. You don't heal. You translate. — AR`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Cut the Cord. When an Anchor Connection is becoming a`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`liability, deliberately sever it. Mark it as severed in your Chronicle. -2 Coherence immediately, but the Connection no longer triggers Memory Fading on relevant rolls.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Burn a Memory. When you need a +3 you can't otherwise`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`reach, spend an Active Memory. The Memory is gone — not Faded, gone. Erased from the slot. [CHEN] This is the one I told her not to put in the book. She made me put it in anyway. — EC`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Resonance Welding. When something near you is destroyed`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`and you're already Compromised, you can absorb a fragment of it as a temporary Asset. The Asset lasts until the end of the session and then disappears, leaving a Mutation behind.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`The Holding Action. Once per session, when you would suffer`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`a consequence you cannot afford, declare The Holding Action. The consequence is delayed by exactly one scene. The Holding Action cannot be repeated until you have completed a Repreival.`)}</p></AlanBody>
        <AlanBody><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`Trajectory Lock. When you make a decision you cannot undo,`)}</li></ol></AlanBody>
        <AlanBody><p>{inline(`write it down and circle it. From this point forward, you cannot take any action that contradicts the locked decision. The lock is permanent until released by a Crisis. This is the move Chen would not let me put in her book. It's why we have two books. — AR`)}</p></AlanBody>
        
      </AlPage>
      <AlPage side="recto" label="(blank)" />
    </Spread>
  </>);
}

AlanCh2.pages = 7;
Object.assign(window, { AlanCh2 });