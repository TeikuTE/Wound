// AUTO-GENERATED — chen-4 — CORE RESOLUTION & FACTION PRESSURE
function ChenCh4({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="chen-4-opener" label="CORE RESOLUTION & FACTION PRESSURE · opener">
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="chen-4 · opener">
        <ChenChapterHead icon="assets/chen-icon-broken-compass.svg" number="IV" title="Core Resolution & Faction Pressure" />
      </ChPage>
    </Spread>
    <Spread id="chen-4-02" label="CORE RESOLUTION & FACTION PRESSURE · spread 2">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 2} label={`CORE RESOLUTION & FACTIO · p.${basePage + 2}`}>
        <h4 className="el-subsection">{inline(`The Resolution Roll`)}</h4>
        <aside className="el-reflection"><p>{inline(`When the outcome matters, you roll. Two six-sided dice, plus the relevant Mode, plus your Memory bonus if one applies.`)}</p><p>{inline(`10+ is success. `)}<b>{inline(`7-9`)}</b>{inline(` is success with cost. `)}<b>{inline(`6-`)}</b>{inline(` is failure with an opening.`)}</p><p>{inline(`I want to say something about the `)}<b>{inline(`6-`)}</b>{inline(` before we go further. New Echoes treat it as the bad result. It isn't. The `)}<b>{inline(`10+`)}</b>{inline(` ends the question; the `)}<b>{inline(`6-`)}</b>{inline(` changes it. Both move the story. Only one of them surprises you.`)}</p><div className="el-sign">— EC</div></aside>
        <div className="el-body el-dropcap" data-firstpara><p>{inline(`When you attempt something risky or opposed, make a Resolution Roll:`)}</p></div>
        <h4 className="el-subsection">{inline(`RESOLUTION`)}</h4>
        <div className="el-body"><p>{inline(`Roll: `)}<b>{inline(`2d6`)}</b>{inline(` + Mode Rating + Memory Bonus`)}</p></div>
        <div className="el-resolution"><div className="resolution-row"><div className="resolution-roll">{`10+`}</div><div className="resolution-body"><div className="resolution-text">{inline(`Complete Success —achieve goal, +1 Wave Coherence`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-text">{inline(`Success with Complication —succeed, cost or new problem`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-text">{inline(`Failure with Opportunity —fail, but gain something useful`)}</div></div></div></div>
        <div className="el-body"><p>{inline(`Choose: Lose 1 Coherence OR Mark 1 Paradox`)}</p></div>
        <h4 className="el-subsection">{inline(`MEMORY BONUS`)}</h4>
        <div className="el-body"><p>{inline(`Active Memory matching context +2 Fading Memory matching context +1 Locked Memory matching context +3 No relevant Memory +0`)}</p></div>
        <h4 className="el-subsection">{inline(`Navigation`)}</h4>
        <div className="el-body"><p>{inline(`You will be displaced whether you want to be or not. Faction interference, Crisis events, and temporal instability will throw you between eras involuntarily. But you can also attempt Precision Navigation — using resonance principles to target specific coordinates in time.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 3} label={`CORE RESOLUTION & FACTIO · p.${basePage + 3}`}>
        <h4 className="el-subsection">{inline(`PRECISION NAVIGATION`)}</h4>
        <div className="el-body"><p>{inline(`When you attempt to reach a specific era or location:`)}</p></div>
        <div className="el-body"><p>{inline(`Step 1: Define Your Target. Specify as precisely as you can — when (year, decade, or century), where (city, region, or continent), and why (what you're seeking there, which helps focus the resonance).`)}</p></div>
        <div className="el-body"><p>{inline(`Your precision affects the Difficulty:`)}</p></div>
        <h4 className="el-subsection">{inline(`TARGET PRECISION DIFFICULTY`)}</h4>
        <div className="el-body"><p>{inline(`Specific date & location (June 23, 1848, 12 Rue Saint-Jacques, Paris) Year & city (1848, Paris) 10 Decade & region (1840s, France) 8 Century & continent (1800s, Europe) 7`)}</p></div>
        <div className="el-body"><p>{inline(`Step 2: Pay the Cost. Spend 1 Coherence before rolling. When you have 0 Coherence, you cannot attempt Precision Navigation.`)}</p></div>
        <div className="el-body"><p>{inline(`Step 3: Roll `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE + Memory Bonus (if applicable).`)}</p></div>
        <div className="el-body"><p>{inline(`Step 4: Read the result:`)}</p></div>
        <div className="el-resolution"><div className="resolution-row"><div className="resolution-roll">{`12+`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Perfect Resonance`)}</div><div className="resolution-text">{inline(`Arrive exactly when and where intended. Gain +1 Coherence (clean synchronization). No Paradox generated.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`10-11`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Successful Navigation`)}</div><div className="resolution-text">{inline(`Arrive at intended era and location. Minor variance (different street, day off by a week). Mark +1 Paradox from resonance strain.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Close Arrival`)}</div><div className="resolution-text">{inline(`Arrive in correct era OR correct location, not both. Same year, different city, OR same city, years off. Mark +1 Paradox.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Lost in Transit`)}</div><div className="resolution-text">{inline(`Navigation fails. Consult the Anomaly Tables (see below). Choose: Lose 1 Coherence OR Mark +2 Paradox.`)}</div></div></div></div>
      </ChPage>
    </Spread>
    <Spread id="chen-4-03" label="CORE RESOLUTION & FACTION PRESSURE · spread 3">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 4} label={`CORE RESOLUTION & FACTIO · p.${basePage + 4}`}>
        <h4 className="el-subsection">{inline(`STRUCTURED CORRECTION`)}</h4>
        <div className="el-body"><p>{inline(`After rolling all four Anomaly Tables, you may spend 1 Coherence to reroll one result. Choose which table to reroll (ERA, LOCATION, ANOMALY, or COMPLICATION), spend the Coherence, and accept the new result. You may do this once per displacement event.`)}</p></div>
        <aside className="el-reflection"><p>{inline(`Initial observations can contain measurement error. Temporal resonance creates interference. If you invest the Coherence to recalibrate, you can refine your assessment. This isn't changing reality. It's correcting your perception of what exists.`)}</p><div className="el-sign">— EC</div></aside>
        <AlanIntrusionInline tier={tier}><p>{inline(`Chen's into spending Coherence to make the dice lie more comfortably. Sure, it works. It's also false comfort.`)}</p></AlanIntrusionInline>
        <h4 className="el-subsection">{inline(`NAVIGATION COLLAPSE (PARADOX 7+)`)}</h4>
        <div className="el-body"><p>{inline(`At Paradox 7 or higher, your waveform is too unstable for resonance-targeting. You have lost fine control.`)}</p></div>
        <h4 className="el-subsection">{inline(`AT PARADOX **7+**: NAVIGATION COLLAPSE`)}</h4>
        <div className="el-body"><p>{inline(`You cannot roll Precision Navigation.`)}</p></div>
        <div className="el-body"><p>{inline(`State your intention ('I'm trying to reach 1848 Paris').`)}</p></div>
        <div className="el-body"><p>{inline(`All displacement is determined by the Anomaly Tables.`)}</p></div>
        <div className="el-body"><p>{inline(`Structured Correction still applies.`)}</p></div>
        <div className="el-body"><p>{inline(`To restore Precision Navigation, reduce Paradox below 7.`)}</p></div>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`Chen frames it as agency vs. passivity. She's way offbase. The only choice is between paying for the illusion of control and admitting you don't have any. Anomaly Tables are cheaper because they're not selling you anything.`)}</p><div className="el-alan-sign">—AR</div></aside>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 5} label={`CORE RESOLUTION & FACTIO · p.${basePage + 5}`}>
        <h4 className="el-subsection">{inline(`Wave Coherence`)}</h4>
        <aside className="el-reflection"><p>{inline(`Coherence is the integrity of your harmonic signature. It holds you to a single line of self when everything around you is trying to dissolve you into static. It is the most expensive resource you have and one you will spend without noticing you spent it.`)}</p><p>{inline(`Track Coherence on a scale from +6 to -6. Each value corresponds to a state you can feel — if you have the discipline to feel it before you've already passed it.`)}</p><div className="el-sign">— EC</div></aside>
        <div className="el-body"><p>{inline(`Wave Coherence measures how aligned you are with the timestream. It ranges from -6 to your Anchor Strength + 5 (usually 8).`)}</p></div>
        <h4 className="el-subsection">{inline(`COHERENCE STATE EFFECT`)}</h4>
        <div className="el-body"><p>{inline(`Synchronized (+6 to +8) +1 to all Resolution rolls. You move through time with grace.`)}</p></div>
        <div className="el-body"><p>{inline(`Flux (0 to +5) No modifier. Normal operation.`)}</p></div>
        <div className="el-body"><p>{inline(`Desynchronizing (-1 to -5) -1 to all Resolution rolls. Time is hostile.`)}</p></div>
        <div className="el-body"><p>{inline(`Crisis (-6) -2 to all Resolution rolls. Immediate Desynchronization Crisis.`)}</p></div>
        <h4 className="el-subsection">{inline(`GAINING AND LOSING COHERENCE`)}</h4>
        <div className="el-body"><p>{inline(`You gain Coherence when you succeed (+1 on a 10+), when you write something true in your Chronicle (+1), when you reinforce your Anchor (+2). You lose it when you fail (-1 on a 6-, or choose Paradox instead), when you're Displaced (see Displacement Costs below), when you let a Memory fade (-1), when your Anchor takes Stress (see Anchor Stress below). The math is simple. The choices aren't.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-4-04" label="CORE RESOLUTION & FACTION PRESSURE · spread 4">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 6} label={`CORE RESOLUTION & FACTIO · p.${basePage + 6}`}>
        <h4 className="el-subsection">{inline(`DISPLACEMENT COSTS`)}</h4>
        <div className="el-body"><p>{inline(`Every time you are Displaced — voluntarily or not — you lose Coherence from the wrenching dislocation.`)}</p></div>
        <h4 className="el-subsection">{inline(`Displacement Type Coherence Cost`)}</h4>
        <div className="el-body"><p>{inline(`Precision Navigation (voluntary) -1 (paid before rolling)`)}</p></div>
        <div className="el-body"><p>{inline(`Failed Navigation (6-) -1 or +2 Paradox (your choice)`)}</p></div>
        <div className="el-body"><p><b>{inline(`Forced Displacement — Faction interference, -2`)}</b></p></div>
        <div className="el-body"><p>{inline(`Crisis, random jump`)}</p></div>
        <div className="el-body"><p><b>{inline(`Crisis Displacement — Shattering, Identity -3`)}</b></p></div>
        <div className="el-body"><p><b>{inline(`collapse, Breach`)}</b></p></div>
        <div className="el-body"><p>{inline(`Involuntary jumps always cost 2. Crisis-level displacement costs 3. You don't get to choose when those happen. That's the point.`)}</p></div>
        <h4 className="el-subsection">{inline(`ANCHOR STRESS`)}</h4>
        <div className="el-body"><p>{inline(`Your Anchor is not invulnerable. Certain events put direct pressure on your connection to your origin — not enough to break it, but enough to require maintenance.`)}</p></div>
        <div className="el-body"><p>{inline(`Your Anchor has a Stress track: ○○○`)}</p></div>
        <h4 className="el-subsection">{inline(`Mark 1 Anchor Stress when:`)}</h4>
        <div className="el-body"><p>{inline(`A Church Templar successfully captures or touches you (their rituals`)}</p></div>
        <div className="el-body"><p>{inline(`target your origin frequency directly)`)}</p></div>
        <div className="el-body"><p>{inline(`You fail a roll involving your Locked Memory while in`)}</p></div>
        <div className="el-body"><p>{inline(`Desynchronization Crisis (-1 to -5 Coherence)`)}</p></div>
        <div className="el-body"><p>{inline(`You spend Downtime in an era that directly contradicts a core Anchor`)}</p></div>
        <div className="el-body"><p>{inline(`Connection (you knew her as alive; here she died before you were born)`)}</p></div>
        <div className="el-body"><p>{inline(`A Crisis outcome specifies Anchor Stress`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 7} label={`CORE RESOLUTION & FACTIO · p.${basePage + 7}`}>
        <div className="el-body"><p>{inline(`When all 3 Anchor Stress boxes are marked, your Anchor is Strained. While Strained: you cannot invoke Anchor Connections for Coherence bonuses. The Reinforce Anchor move (Ch. 7) clears Stress as normal — but on a 6-, you lose 1 Anchor Strength permanently instead of just failing.`)}</p></div>
        <div className="el-body"><p>{inline(`Clear Anchor Stress during Downtime Step 2.`)}</p></div>
        <h4 className="el-subsection">{inline(`COHERENCE OVERFLOW`)}</h4>
        <div className="el-body"><p>{inline(`When you would gain Coherence but are already at your maximum, choose one: Stabilize an Asset (clear 1 Stress from any Asset), Reduce Contamination (reduce Paradox by 1, if above 0), or Bank It (mark +1 Banked Coherence, maximum 3 Banked). Spend Banked Coherence 1-for-1 to prevent Coherence loss.`)}</p></div>
        <div className="el-body"><p><i>{inline(`This mechanic exists in Temporal Echoes only. Wrecks do not bank Coherence. You're not preserving anything.`)}</i></p></div>
        <h4 className="el-subsection">{inline(`Paradox: The Universe Pushing Back`)}</h4>
        <div className="el-body"><p>{inline(`Paradox accumulates through interference. The universe keeps count even when you don't.`)}</p></div>
        <h4 className="el-subsection">{inline(`Action Paradox`)}</h4>
        <div className="el-body"><p>{inline(`Contradict your own Chronicle +1`)}</p></div>
        <div className="el-body"><p>{inline(`Share knowledge from the wrong era (a technique, a fact, a warning) +1`)}</p></div>
        <div className="el-body"><p>{inline(`Change something small — redirect one person, save one life, +1`)}</p></div>
        <div className="el-body"><p>{inline(`alter one decision`)}</p></div>
        <div className="el-body"><p>{inline(`Change something documented — an event with witnesses, +2`)}</p></div>
        <div className="el-body"><p>{inline(`a death with records`)}</p></div>
        <div className="el-body"><p>{inline(`Create a causal loop (you caused the thing that caused you here) +2`)}</p></div>
        <div className="el-body"><p>{inline(`Meet yourself (any version — past, future, alternate) +2`)}</p></div>
        <div className="el-body"><p>{inline(`Change something load-bearing — a battle's outcome, +3`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-4-05" label="CORE RESOLUTION & FACTION PRESSURE · spread 5">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 8} label={`CORE RESOLUTION & FACTIO · p.${basePage + 8}`}>
        <div className="el-body"><p>{inline(`a discovery's timing, a leader's survival`)}</p></div>
        <div className="el-body"><p>{inline(`Cause a Shattering deliberately +3`)}</p></div>
        <div className="el-body"><p>{inline(`When in doubt: if people would write it down afterward, it's +2. If people would change how they understand history, it's +3. If only you noticed, it's +1.`)}</p></div>
        <h4 className="el-subsection">{inline(`PARADOX BAND EFFECTS`)}</h4>
        <div className="el-body"><p><b>{inline(`Shadow (0-3)`)}</b>{inline(` — No penalties. Small reality glitches: déjà vu, objects slightly wrong. Invisible to Factions.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Flux (4-6)`)}</b>{inline(` — `)}<b>{inline(`-1`)}</b>{inline(` to Resolution rolls. Noticeable anomalies. Memory Fading accelerates. Faction Scouts appear when you roll `)}<b>{inline(`6-`)}</b>{inline(`.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Anomaly (7-9)`)}</b>{inline(` — `)}<b>{inline(`-1`)}</b>{inline(` to Resolution rolls. Memory Fading doubles. Reality actively hostile. Faction Agents appear as complication on `)}<b>{inline(`7-9`)}</b>{inline(`.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Breach (10+)`)}</b>{inline(` — `)}<b>{inline(`-2`)}</b>{inline(` to Resolution rolls. Timeline collapsing. Immediate Paradox Crisis. Faction Intervention during Crisis Phase 2.`)}</p></div>
        <aside className="el-reflection"><p>{inline(`The modifiers above are designed to compound. So are the modifiers from Coherence states, Faction Marks, and unfavored Modes. At low Paradox and stable Coherence, the math is forgiving. At high Paradox and Crisis Coherence, it is hostile. This is deliberate. I will say more about it in Chapter 6.`)}</p><p>{inline(`What you should know now: when the stack turns against you, better dice will not save you. The systems the game has been holding in reserve will. Engage them.`)}</p><div className="el-sign">— EC</div></aside>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 9} label={`CORE RESOLUTION & FACTIO · p.${basePage + 9}`}>
        <h4 className="el-subsection">{inline(`Faction Pressure`)}</h4>
        <aside className="el-reflection"><p>{inline(`You are a foreign object in a closed system. The Chronoverse has an immune response, and your Paradox is the fever it is responding to. The Factions are antibodies with philosophies. Containment, harvest, euthanasia — none of these are moral failures on their part, and accepting an Offer is not a moral failure on yours. They are not after you because they hate you. They are after you because you are fuel.`)}</p><div className="el-sign">— EC</div></aside>
        <h4 className="el-subsection">{inline(`SHADOW (0-3): INVISIBLE`)}</h4>
        <div className="el-body"><p>{inline(`You're background noise. Factions have no reason to notice something they can't measure. Enjoy it. It won't last.`)}</p></div>
        <h4 className="el-subsection">{inline(`FLUX (4-6): SCOUTS APPEAR`)}</h4>
        <div className="el-body"><p>{inline(`When you roll 6-, a Scout appears. Roll `)}<b>{inline(`d4`)}</b>{inline(`: 1 = Church Observer, 2 = Authority Surveyor, 3 = Scionfall Herald, 4 = Chronoclast. Automatic if you're already Marked. Scouts watch. They file reports. They don't act — they're waiting to see if you're worth the effort.`)}</p></div>
        <h4 className="el-subsection">{inline(`ANOMALY (7-9): AGENTS APPEAR`)}</h4>
        <div className="el-body"><p>{inline(`When you roll `)}<b>{inline(`7-9`)}</b>{inline(`, a Faction Agent appears as your complication. They've decided you're worth the effort. They make an Offer. Roll `)}<b>{inline(`d4`)}</b>{inline(` for which Faction, or automatic if Marked. This is when the game changes.`)}</p></div>
        <h4 className="el-subsection">{inline(`BREACH (10+): INTERVENTION`)}</h4>
        <div className="el-body"><p>{inline(`During Crisis Phase 2, Factions arrive in force. You're not a nuisance anymore. You're a crisis event. Roll `)}<b>{inline(`d4`)}</b>{inline(`, or `)}<b>{inline(`d4`)}</b>{inline(` twice for a Factional War — two Factions competing over what to do with you. See Crisis Interventions in Chapter 6.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-4-06" label="CORE RESOLUTION & FACTION PRESSURE · spread 6">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 10} label={`CORE RESOLUTION & FACTIO · p.${basePage + 10}`}>
        <h4 className="el-subsection">{inline(`Agent Encounters`)}</h4>
        <div className="el-body"><p>{inline(`When an Agent appears at Paradox `)}<b>{inline(`7-9`)}</b>{inline(`, they bring an Offer. The form varies — surveillance, interference, demand, or direct confrontation. Not every Agent encounter is a fight.`)}</p></div>
        <div className="el-body"><p>{inline(`You choose one of three responses:`)}</p></div>
        <ol className="el-numlist"><li>{inline(`Accept the Offer. Pay the cost, gain the benefit. Offers are trades, not rolls.`)}</li><li>{inline(`Refuse. They impose a consequence and Mark you.`)}</li><li>{inline(`Drive Off. Make a roll to force them away.`)}</li></ol>
        <div className="el-body"><p>{inline(`Offers are your non-roll path to Paradox relief. If Downtime moves aren't working, an Agent's trade is how you buy back control — by selling pieces of yourself.`)}</p></div>
        <h4 className="el-subsection">{inline(`THE DRIVE OFF MOVE`)}</h4>
        <div className="el-body"><p>{inline(`Roll `)}<b>{inline(`2d6`)}</b>{inline(` + DISRUPT (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Success. You drive them off through violence or intimidation. No additional cost. They retreat. You're not Marked.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><tbody><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Success with cost. They retreat. Choose one: lose 2 Coherence, mark +1 Paradox, or they Mark you anyway.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Failure. You fail. Take their Imposed consequence AND they Mark you. They leave when they're done with you.`)}</p></div>
        <h4 className="el-subsection">{inline(`The Four Agents`)}</h4>
        <aside className="el-reflection"><p>{inline(`The four below are not exhaustive. They are the four I have met often enough to describe consistently. Each Faction has variations — older Templars, younger Auditors, Heralds wearing a face you have not yet lost, Chronoclasts who have learned restraint. The descriptions are what holds across the variations. The faces change. The function does not.`)}</p><div className="el-sign">— EC</div></aside>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 11} label={`CORE RESOLUTION & FACTIO · p.${basePage + 11}`}>
        <h4 className="el-subsection">{inline(`1. CHURCH TEMPLAR`)}</h4>
        <div className="el-body"><p>{inline(`They appear bleeding through their era-appropriate armor, chrono-glyphs inscribed into the metal. The thing you notice first are their eyes — millennia of pain mixed with purpose and pleasure.`)}</p></div>
        <div className="el-body"><p>{inline(`The Offer: Your pain can have purpose. Let us use it.`)}</p></div>
        <div className="el-body"><p>{inline(`The Trade: Take 1 Scar immediately + lose 2 Coherence →Reduce Paradox by 3. Mark: Church knows you're a viable battery. They'll return.`)}</p></div>
        <div className="el-body"><p>{inline(`If Refused: Impose — their prayer weighs on you, lose 1 Coherence. Mark — next Scout/Agent encounter is automatically Church.`)}</p></div>
        <h4 className="el-subsection">{inline(`2. AUTHORITY AUDITOR`)}</h4>
        <div className="el-body"><p>{inline(`Forgettable in the way that only deliberate design achieves. A grey suit that wears a human being. Takes notes. Blinks and their clothes change slightly.`)}</p></div>
        <div className="el-body"><p>{inline(`The Offer: You're glitching. We can smooth you out. Become efficient again.`)}</p></div>
        <div className="el-body"><p>{inline(`The Trade: Choose one Active Memory — it becomes normalized (bonus drops from +2 to +0, emotional context erased). →Reduce Paradox by 2, clear 1 Stress from one Asset. Mark: They've tagged your waveform.`)}</p></div>
        <div className="el-body"><p>{inline(`If Refused: Impose — -1 to Navigation rolls until next Downtime. Mark — they begin preparing a Clone Loop.`)}</p></div>
        <h4 className="el-subsection">{inline(`3. SCIONFALL HERALD`)}</h4>
        <div className="el-body"><p>{inline(`They always appear as a loved one. Kind eyes, warm voice, something underneath that is steel all the way through.`)}</p></div>
        <div className="el-body"><p>{inline(`The Offer: I can end the pain. All of it. Right now.`)}</p></div>
        <div className="el-body"><p>{inline(`The Trade: Character retired. You cease. Peacefully. Game over. Write a final Chronicle entry: I let go. This is a valid ending — choosing peace over continued suffering.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-4-07" label="CORE RESOLUTION & FACTION PRESSURE · spread 7">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 12} label={`CORE RESOLUTION & FACTIO · p.${basePage + 12}`}>
        <div className="el-body"><p>{inline(`If Refused: Impose — -1 to ENDURE while they're present. Mark — the offer stands, always. They'll return during your next Crisis.`)}</p></div>
        <h4 className="el-subsection">{inline(`4. CHRONOCLAST REMIXER`)}</h4>
        <div className="el-body"><p>{inline(`Anachronism incarnate. Carrying objects from the wrong era. Laughing at things that aren't funny.`)}</p></div>
        <div className="el-body"><p>{inline(`The Offer: You're making art! Here — let's make it louder.`)}</p></div>
        <div className="el-body"><p>{inline(`The Trade: Gain +2 Paradox now →Gain +3 to your next DISRUPT or OBSERVE roll only. Regardless of result, that roll triggers a Complication. Mark: they think you're interesting.`)}</p></div>
        <div className="el-body"><p>{inline(`If Refused: Impose — roll on Timeline Shift Oracle immediately (reality changes around you). Mark — they'll bring a gift next time (unstable Chrono-Tech that glitches constantly).`)}</p></div>
        <h4 className="el-subsection">{inline(`BEING MARKED`)}</h4>
        <div className="el-body"><p>{inline(`When a Faction Marks you, write in your Chronicle: MARKED: [Faction name]. The next time that Faction would appear, they appear automatically — no `)}<b>{inline(`d4`)}</b>{inline(` roll needed. Once they appear, erase the Mark. You can be Marked by multiple Factions simultaneously.`)}</p></div>
        <ChenMarginaliaInline><p>{inline(`Being Marked doesn't mean immediate danger — it means they're watching. They know your resonance signature now. You've become a bookmark in their archives.`)}</p></ChenMarginaliaInline>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`Being Marked means you're screwed. You drew their attention, refused their offer, and now they know you're worth effort. I've been Marked by all four Factions simultaneously. It's like having four different kinds of cancer. Each one convinced they're helping.`)}</p><div className="el-alan-sign">—AR</div></aside>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 13} label={`CORE RESOLUTION & FACTIO · p.${basePage + 13}`}>
        <h4 className="el-subsection">{inline(`Downtime`)}</h4>
        <aside className="el-reflection"><p>{inline(`Downtime is the part of the work nobody else does for you. When a session ends, or when the era is briefly not actively trying to kill you, stop and write down what happened. Repair what you can. Many good Echoes faded because they did not take Downtime with the rigor it deserves.`)}</p><div className="el-sign">— EC</div></aside>
        <h4 className="el-subsection">{inline(`WHEN TO TAKE DOWNTIME`)}</h4>
        <div className="el-body"><p>{inline(`After every Precision Navigation roll, OR`)}</p></div>
        <div className="el-body"><p>{inline(`After every Oracle Displacement (rolling all four Anomaly Tables), OR`)}</p></div>
        <div className="el-body"><p>{inline(`At the end of your real-world play session, if neither of the above`)}</p></div>
        <div className="el-body"><p>{inline(`occurred.`)}</p></div>
        <h4 className="el-subsection">{inline(`DOWNTIME STEPS (DO THESE IN ORDER)`)}</h4>
        <ol className="el-numlist"><li>{inline(`Chronicle the Session.`)}</li></ol>
        <div className="el-body"><p>{inline(`Write in your Chronicle: where/when you are, what happened this session, one significant choice you made, one thing you lost or changed. This is mandatory. Chronicling is how you stabilize memory. Effect: gain +1 Coherence, up to your maximum.`)}</p></div>
        <ol className="el-numlist"><li>{inline(`Reinforce Your Anchor.`)}</li></ol>
        <div className="el-body"><p>{inline(`If your Anchor took Stress during the session, roll `)}<b>{inline(`2d6`)}</b>{inline(` + SYNC (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`). On `)}<b>{inline(`10+`)}</b>{inline(`: clear all Stress. On `)}<b>{inline(`7-9`)}</b>{inline(`: clear 1 Stress, and either spend time and resources on it or leave remaining Stress. On `)}<b>{inline(`6-`)}</b>{inline(`: no Stress cleared.`)}</p></div>
        <ol className="el-numlist"><li>{inline(`Tend to Assets.`)}</li></ol>
      </ChPage>
    </Spread>
    <Spread id="chen-4-08" label="CORE RESOLUTION & FACTION PRESSURE · spread 8">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 14} label={`CORE RESOLUTION & FACTIO · p.${basePage + 14}`}>
        <div className="el-body"><p>{inline(`For each Asset with Stress marked, roll `)}<b>{inline(`2d6`)}</b>{inline(` + relevant Mode (usually OBSERVE for tech, SYNC for connections). On `)}<b>{inline(`10+`)}</b>{inline(`: clear all Stress. On `)}<b>{inline(`7-9`)}</b>{inline(`: clear 1 Stress. On `)}<b>{inline(`6-`)}</b>{inline(`: no Stress cleared. If an Asset has all Stress marked, it's broken — spend a Downtime move repairing it (narrate the work, no roll) or replace it with a new Asset at Level 1.`)}</p></div>
        <ol className="el-numlist"><li>{inline(`Process Memory.`)}</li></ol>
        <div className="el-body"><p>{inline(`Your memory system naturally degrades. The oldest Active Memory moves to Fading (loses +2 bonus, now +1). The oldest Fading Memory becomes Lost. When a Memory becomes Lost, gain a Scar (see Chapter 5).`)}</p></div>
        <div className="el-body"><p>{inline(`When a memory passes from Active to Fading, you notice it as effort — the thing you used to recall instantly now requires you to reach. Fading to Lost is quieter. You don't notice the moment it goes. You notice, weeks later, that something used to be there and now is not. You reach for the cup that isn't there. You start the sentence and find no end to it. The Scar is the shape the absence leaves.`)}</p></div>
        <div className="el-body"><p>{inline(`Your Locked Memory never fades.`)}</p></div>
        <div className="el-body"><p>{inline(`If something significant happened this session, you may create a new Memory: write the event, choose Context Tags, write a description. It enters Active Slot 1, pushing everything else forward.`)}</p></div>
        <ol className="el-numlist"><li>{inline(`Reduce Paradox (Optional).`)}</li></ol>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 15} label={`CORE RESOLUTION & FACTIO · p.${basePage + 15}`}>
        <h4 className="el-subsection">{inline(`Choose one:`)}</h4>
        <div className="el-body"><p>{inline(`Temporal Grounding: Spend significant time integrating with the current era. Roll `)}<b>{inline(`2d6`)}</b>{inline(` + SYNC (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`). On `)}<b>{inline(`10+`)}</b>{inline(`: reduce Paradox by 2. On `)}<b>{inline(`7-9`)}</b>{inline(`: reduce by 1. On `)}<b>{inline(`6-`)}</b>{inline(`: no reduction, lose 1 Coherence from the exhaustion.`)}</p></div>
        <div className="el-body"><p>{inline(`Ritual Purification: Use specialized Chrono-Tech or Faction assistance. Effect: reduce Paradox by `)}<b>{inline(`1d6`)}</b>{inline(`, but if using Church methods, take 1 Mutation; if using Authority methods, normalize 1 Scar (reduce bonus to +0); if using tech, the Asset takes all Stress.`)}</p></div>
        <div className="el-body"><p>{inline(`Ignore: Accept your current contamination level.`)}</p></div>
        <ol className="el-numlist"><li>{inline(`Plan Next Move.`)}</li></ol>
        <div className="el-body"><p>{inline(`Answer one of these questions in your Chronicle: What am I trying to accomplish? What am I afraid will happen next? What do I need that I don't have?`)}</p></div>
        <h4 className="el-subsection">{inline(`SAFETY TOOLS`)}</h4>
        <div className="el-body"><p>{inline(`This game explores identity dissolution, memory loss, isolation, and the horror of losing yourself piece by piece.`)}</p></div>
        <div className="el-body"><p>{inline(`The Temporal Pause (X-Card): At any point, if the content becomes too intense, stop writing. Close the Chronicle. Breathe. Narratively, your Echo phases out of local time for a micro-second, avoiding the trauma. Mechanically, skip the scene. No penalty. Reality redraws itself around the gap.`)}</p></div>
        <div className="el-body"><p>{inline(`Lines and Veils: Lines are events that don't happen in your timeline — write them in the back of your Chronicle under Redacted Data. If an Oracle prompts them, reroll. Veils are events that happen off-screen — describe the setup and aftermath, but the event itself is Lost to Static.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-4-09" label="CORE RESOLUTION & FACTION PRESSURE · spread 9">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 16} label={`CORE RESOLUTION & FACTIO · p.${basePage + 16}`}>
        <h4 className="el-subsection">{inline(`EXPANDED SAFETY TOOLS`)}</h4>
        <div className="el-body"><p><i>{inline(`Temporal Echoes is a game about loss, memory, and identity erosion. Played at length, it will put you in proximity to real feelings you may not have scheduled time for. The following tools exist to help you engage with difficult material without getting genuinely hurt.`)}</i></p></div>
        <h4 className="el-subsection">{inline(`Lines and Veils`)}</h4>
        <div className="el-body"><p>{inline(`Before your first session, take ten minutes to write two short lists in the front of your Chronicle.`)}</p></div>
        <div className="el-body"><p>{inline(`Lines — content that will not appear in your game, ever. Hard stops. If the Oracle rolls toward it, you reroll or narrate around it. There is no mechanical cost for this. The game's rules have no authority over what you're willing to encounter.`)}</p></div>
        <div className="el-body"><p>{inline(`Veils — content that may exist in the world of the game but is not described on-page. Violence happens, but you don't zoom in on it. A character dies, but you cut to the next scene. Fade to black is a legitimate move.`)}</p></div>
        <div className="el-body"><p>{inline(`Your Lines and Veils can change between sessions. Cross things out. Add new ones. You are not locked in.`)}</p></div>
        <h4 className="el-subsection">{inline(`The Temporal Pause (X-Card Equivalent)`)}</h4>
        <div className="el-body"><p>{inline(`At any point, if the content of the scene is genuinely affecting you in a way you didn't sign up for — not uncomfortable-in-a-good-way, not sad-about-fictional-things, but actually-bad-for-you — close the book. Stand up. Walk away.`)}</p></div>
        <div className="el-body"><p>{inline(`The game does not require completion. Your Echo does not lose Coherence because you put the book down. A session you stopped is a session. You can come back, or you can choose not to. Both are legal.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 17} label={`CORE RESOLUTION & FACTIO · p.${basePage + 17}`}>
        <h4 className="el-subsection">{inline(`Fast Forward`)}</h4>
        <div className="el-body"><p>{inline(`If a scene is going somewhere you'd rather not dwell — an interrogation, a captivity vignette, a loss of a specific Anchor Connection — you may narrate through it in a single paragraph and move on. Record only the outcome. Pay any mechanical costs. Do not detail the content.`)}</p></div>
        <div className="el-body"><p>{inline(`This is not cheating. The mechanics work the same. You just don't linger.`)}</p></div>
        <h4 className="el-subsection">{inline(`Rewind`)}</h4>
        <div className="el-body"><p>{inline(`If you make a narrative choice and, an hour later, realize it sent the story somewhere you don't want to go, you may Rewind. Cross out the last paragraph of your Chronicle. Return to the prior decision point. Choose differently.`)}</p></div>
        <div className="el-body"><p>{inline(`Pay the mechanical costs of any rolls that occurred. Keep any Scars. The fiction is yours to revise. The accumulated damage is not.`)}</p></div>
        <h4 className="el-subsection">{inline(`Processing Difficult Content`)}</h4>
        <div className="el-body"><p><i>{inline(`Temporal Echoes deliberately engages with memory loss, grief, identity dissolution, and the specific horror of outliving your own ability to feel things. The game was built by someone processing their own experience of these, and many of the people who play it are doing the same. A few practices that help if you are one of them.`)}</i></p></div>
        <div className="el-body"><p><i>{inline(`Decouple the Echo from yourself. Name them something other than your own name. Give them an origin era you did not live in. The distance is what makes the catharsis possible without it bleeding into your actual life.`)}</i></p></div>
        <div className="el-body"><p><i>{inline(`Keep a separate notebook — not the Chronicle — for one line per session about how the session affected you. Not how it affected your Echo. This is not part of the game. It is part of being a person who plays the game.`)}</i></p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-4-10" label="CORE RESOLUTION & FACTION PRESSURE · spread 10">
      <ChPage side="verso" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 18} label={`CORE RESOLUTION & FACTIO · p.${basePage + 18}`}>
        <div className="el-body"><p><i>{inline(`If a session leaves you raw, talk to a person who exists in your life before you pick the book up again. The Chronicle is a mirror, and a mirror is not the same thing as company.`)}</i></p></div>
        <h4 className="el-subsection">{inline(`A Note on Crisis`)}</h4>
        <div className="el-body"><p>{inline(`If you are in genuine mental-health crisis — the kind that does not belong in a game — please set the book aside and contact a crisis line in your region, or a trusted person. The game will still be here. You need to be too.`)}</p></div>
        <aside className="el-reflection"><p>{inline(`Gödel proved that any formal system rich enough to express arithmetic contains true statements it cannot prove. Reality, under CTH, is the same. There are facts about the timeline that are true and that the timeline cannot accommodate. Echoes bear those facts carved into their identity, but Paradox is what happens when an unprovable truth tries to find a place to stand.`)}</p><div className="el-sign">— EC</div></aside>
        <AlanIntrusionInline tier={tier}><p>{inline(`Chen calls them an immune system. Cute framing. An immune system protects the body. The factions don't protect anything. They digest you and call the digestion mercy, order, freedom, art. Pick your enzyme.`)}</p></AlanIntrusionInline>
        <Zaaken><i>{inline(`Memoria finita est.`)}</i></Zaaken>
      </ChPage>
      <ChPage side="recto" runHead="Core Resolution & Faction Pressure" pageNum={basePage + 19} label={`CORE RESOLUTION & FACTIO · p.${basePage + 19}`}>
        
      </ChPage>
    </Spread>
  </>);
}

ChenCh4.pages = 20;
Object.assign(window, { ChenCh4 });
