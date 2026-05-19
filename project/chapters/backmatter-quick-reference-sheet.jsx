// AUTO-GENERATED — backmatter-quick-reference-sheet — QUICK REFERENCE SHEET
function BM_quick_reference_sheet({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="backmatter-quick-reference-sheet-01" label={"QUICK REFERENCE SHEET · spread 1"}>
      <ChPage side="verso" runHead={"Quick Reference Sheet"} pageNum={basePage + 0} label={`QUICK REFERENCE SHEET · p.${basePage + 0}`}>
        <h4 className="el-subsection">{inline(`Temporal Echoes / emiT Duology`)}</h4>
        <h4 className="el-subsection">{inline(`Core Resolution`)}</h4>
        <div className="el-body"><p>{inline(`Roll: `)}<b>{inline(`2d6`)}</b>{inline(` + Mode Rating + Memory/Scar Bonus`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Complete Success —achieve goal, +1 Coherence (TE)`)}</p></div>
        <div className="el-body"><p>{inline(`7– Success with Complication —succeed, cost or new problem 6− Failure with Opportunity —choose: − Coherence OR +1 Paradox`)}</p></div>
        <h4 className="el-subsection">{inline(`MEMORY / SCAR BONUS`)}</h4>
        <div className="el-body"><p>{inline(`Active +2 Fading +1 Locked / Core +3 None +0`)}</p></div>
        <h4 className="el-subsection">{inline(`The Four Modes`)}</h4>
        <div className="el-body"><p>{inline(`OBSERVE +1 Analyzing, perceiving, investigating, Navigation SYNC +1 Empathy, social connection, blending in, Anchor reinforcement ENDURE +1 Willpower, resilience, resisting corruption, recovering Memories DISRUPT +0 Force, violence, breaking things, driving off Agents`)}</p></div>
        <h4 className="el-subsection">{inline(`Coherence States — Temporal Echoes`)}</h4>
        <div className="el-body"><p>{inline(`Synchronized (+6 to +8) +1 to all rolls Flux (0 to +5) No modifier Desynchronizing (− to −) − to all rolls Crisis (−) − to all rolls. Immediate Crisis.`)}</p></div>
        <div className="el-body"><p>{inline(`Max = Anchor Strength + 5. Banked Coherence: bank up to 3 to spend 1-for-1 against future losses. emiT Wrecks do not bank.`)}</p></div>
        <h4 className="el-subsection">{inline(`Coherence States — emiT`)}</h4>
        <div className="el-body"><p>{inline(`Synchronized (+4 to +8) +1 to all rolls Flux (0 to +3) No modifier Crisis (− to −) − to all rolls. At −: Fracture Event. Max = Corruption Vector + 3. No Coherence banking in emiT.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Quick Reference Sheet"} pageNum={basePage + 1} label={`QUICK REFERENCE SHEET · p.${basePage + 1}`}>
        <h4 className="el-subsection">{inline(`Paradox Bands`)}</h4>
        <div className="el-body"><p>{inline(`Paradox accumulates and the universe responds, but not in a linear trajectory. Paradox is best represented in four bands, with each one presenting a corresponding state of attention.`)}</p></div>
        <div className="el-body"><p><b>{inline(`SHADOW (0–3).`)}</b>{inline(` `)}<i>{inline(`You are background noise. Factions ignore you. Small reality glitches occur — déjà vu, objects slightly wrong, conversations you can't quite remember the start of. No mechanical penalties. Most Echoes spend most of their time here. The trick is staying. — EC`)}</i></p></div>
        <div className="el-body"><p><b>{inline(`FLUX (4–6).`)}</b>{inline(` `)}<i>{inline(`The timeline notices. -1 to all Resolution rolls. Memory Fading accelerates. Faction Scouts may appear when you roll 6-. This is where the dreams start. Not nightmares — déjà vu so persistent you begin to suspect the day is repeating itself a little. — EC`)}</i></p></div>
        <div className="el-body"><p><b>{inline(`ANOMALY (7–9).`)}</b>{inline(` `)}<i>{inline(`You are an active disturbance. -1 ongoing. NPCs from contradictory timelines may appear and contradict each other in front of you. Faction Agents track you actively. Here is where Echoes begin to make the wrong kinds of friends. The Church reaches out. Scionfall reaches out. Both of them seem reasonable when you're at 7. — EC`)}</i></p></div>
        <div className="el-body"><p><b>{inline(`BREACH (10+).`)}</b>{inline(` `)}<i>{inline(`Reality is unraveling locally. -2 ongoing. Crisis triggers within `)}</i><i>{inline(`1d6`)}</i>{inline(`* sessions. Factions converge. I have been to Breach twice. I do not recommend it. The world stops feeling solid in a specific way: edges become suggestions. The thing I lost in Breach the second time, I have never gotten back. — EC*`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="backmatter-quick-reference-sheet-02" label={"QUICK REFERENCE SHEET · spread 2"}>
      <ChPage side="verso" runHead={"Quick Reference Sheet"} pageNum={basePage + 2} label={`QUICK REFERENCE SHEET · p.${basePage + 2}`}>
        <h4 className="el-subsection">{inline(`Navigation — Temporal Echoes`)}</h4>
        <div className="el-body"><p>{inline(`Cost: 1 Coherence before rolling. Cannot attempt at 0 Coherence or Paradox `)}<b>{inline(`7+`)}</b>{inline(`. Roll: `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE + Memory Bonus. Specific date + location `)}<b>{inline(`Difficulty 12`)}</b>{inline(` Year + city `)}<b>{inline(`Difficulty 10`)}</b>{inline(` Decade + region `)}<b>{inline(`Difficulty 8`)}</b>{inline(` Century + continent `)}<b>{inline(`Difficulty 7`)}</b></p></div>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Perfect Resonance —arrive exactly, +1 Coherence, no Paradox`)}</p></div>
        <div className="el-body"><p>{inline(`10–1 Successful —arrive at target, minor variance, +1 Paradox 7– Close Arrival —right era OR location (not both), +1 Paradox 6− Lost in Transit —use Anomaly Tables. − Coherence OR +2 Paradox`)}</p></div>
        <h4 className="el-subsection">{inline(`Navigation — emiT`)}</h4>
        <div className="el-body"><p>{inline(`Cost: 1 Coherence before rolling. Cannot attempt at Paradox `)}<b>{inline(`7+`)}</b>{inline(`. Roll: `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE + Scar Bonus. Nearby / been there before `)}<b>{inline(`Difficulty 7`)}</b>{inline(` Distant / unfamiliar `)}<b>{inline(`Difficulty 10`)}</b>{inline(` Extreme / specific moment `)}<b>{inline(`Difficulty 12`)}</b></p></div>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Perfect Landing —arrive exactly when and where intended. +1 Coherence. No Paradox.`)}</p></div>
        <div className="el-body"><p>{inline(`10–1 Successful Navigation —arrive at target. +1 Paradox. 7– Close Enough —right era OR right location, not both. +1 Paradox. 6− Crash Landing —roll Chronoscape Oracle. − Coherence OR +2 Paradox.`)}</p></div>
        <h4 className="el-subsection">{inline(`Downtime Steps (TE)`)}</h4>
        <ol className="el-numlist"><li>{inline(`Chronicle the session →+1 Coherence 2. Reinforce Anchor (`)}<b>{inline(`2d6`)}</b>{inline(` + SYNC if Stressed — clears Anchor Stress) 3. Tend Assets (`)}<b>{inline(`2d6`)}</b>{inline(` + Mode per Stressed Asset) 4. Process Memory (Active →Fading →Lost →Scar, automatic) 5. Reduce Paradox (optional) 6. Plan Next Move (answer one question)`)}</li></ol>
      </ChPage>
      <ChPage side="recto" runHead={"Quick Reference Sheet"} pageNum={basePage + 3} label={`QUICK REFERENCE SHEET · p.${basePage + 3}`}>
        <h4 className="el-subsection">{inline(`Repreival Steps (emiT)`)}</h4>
        <ol className="el-numlist"><li>{inline(`Chronicle →+1 Coherence 2. Reinforce Anchor (`)}<b>{inline(`2d6`)}</b>{inline(` + SYNC if Stressed) 3. Tend Assets 4. Process Scars (Active →Fading →Lost →Mutation, automatic) 5. Reduce Paradox (optional) 6. Plan Next Move 7. Reset Violence Count to 0`)}</li></ol>
        <h4 className="el-subsection">{inline(`Faction Encounters`)}</h4>
        <div className="el-body"><p>{inline(`Church Templar Take 1 Scar + lose 2 Coh →Reduce Paradox by 3 Authority Corrector Normalize 1 Active Memory (bonus →+0) →Paradox − Scionfall Herald Character retired. Game ends peacefully. Chronoclast Remixer +2 Paradox now →+3 to next DISRUPT or OBSERVE (Complication guaranteed)`)}</p></div>
        <div className="el-body"><p>{inline(`Drive Off: `)}<b>{inline(`2d6`)}</b>{inline(` + DISRUPT `)}<b>{inline(`Difficulty 10`)}</b>{inline(`. `)}<b>{inline(`10+`)}</b>{inline(`: no Mark. 7--: success with cost. 6− fail, take consequence and Marked.`)}</p></div>
        <h4 className="el-subsection">{inline(`emiT Mode Shifts by Paradox`)}</h4>
        <div className="el-body"><p>{inline(`Shadow (0–) +2 / +1 / +0 / − Flux (4–) +1 / +0 / +1 / +1 Anomaly (7–) +0 / − / +2 / +2 Breach (10+) − / − / +3 / +3`)}</p></div>
        <h4 className="el-subsection">{inline(`Anchor Stress (TE)`)}</h4>
        <div className="el-body"><p>{inline(`Anchor Stress (clear during Downtime Step 2): ○ ○ ○`)}</p></div>
        <div className="el-body"><p>{inline(`Mark 1 when: Church captures you / fail Locked Memory roll in Desynchronization / Downtime in era contradicting Anchor Connection / Crisis outcome specifies it.`)}</p></div>
        <div className="el-body"><p>{inline(`All 3 = Strained. Cannot invoke Connections for Coherence. 6−on Reinforce Anchor = − Anchor Strength permanently.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="backmatter-quick-reference-sheet-03" label={"QUICK REFERENCE SHEET · spread 3"}>
      <ChPage side="verso" runHead={"Quick Reference Sheet"} pageNum={basePage + 4} label={`QUICK REFERENCE SHEET · p.${basePage + 4}`}>
        <h4 className="el-subsection">{inline(`Displacement Costs`)}</h4>
        <div className="el-body"><p>{inline(`Precision Navigation (voluntary) − Coherence (paid before rolling) Failed Navigation (6− − Coherence OR +2 Paradox Forced Displacement (Faction/Crisis/random) − Coherence Crisis Displacement (Shattering/Breach) − Coherence`)}</p></div>
        <h4 className="el-subsection">{inline(`Temporal Echoes — Character Sheet`)}</h4>
        <h4 className="el-subsection">{inline(`THE PERSON YOU WERE`)}</h4>
        <div className="el-body"><p>{inline(`Name: ________________________________________ Origin Era: ________________________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Displacement Event: ________________________________________`)}</p></div>
        <h4 className="el-subsection">{inline(`TEMPORAL ANCHOR`)}</h4>
        <div className="el-body"><p>{inline(`Anchor Strength: ○1 ○2 ○3 ○4 ○5 Maximum Coherence: _____ (Anchor Strength + 5) Anchor Stress (clear during Downtime Step 2): ○ ○ ○ All 3 = STRAINED. Cannot invoke Connections for Coherence. 6−on Reinforce = − Anchor Strength.`)}</p></div>
        <h4 className="el-subsection">{inline(`Anchor Connections`)}</h4>
        <div className="el-body"><p>{inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________`)}</p></div>
        <h4 className="el-subsection">{inline(`OPERATIONAL MODES`)}</h4>
        <div className="el-body"><p>{inline(`OBSERVE (+1) ○− ○+0 ○+1 ○+2 ○+3 SYNC (+1) ○− ○+0 ○+1 ○+2 ○+3 ENDURE (+1) ○− ○+0 ○+1 ○+2 ○+3 DISRUPT (+0) ○− ○+0 ○+1 ○+2 ○+3`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Quick Reference Sheet"} pageNum={basePage + 5} label={`QUICK REFERENCE SHEET · p.${basePage + 5}`}>
        <h4 className="el-subsection">{inline(`WAVE COHERENCE (circle current)`)}</h4>
        <div className="el-body"><p>{inline(`[−] [−] [−] [−] [−] [−] [0] [+1] [+2] [+3] [+4] [+5] [+6] [+7] [+8]`)}</p></div>
        <div className="el-body"><p>{inline(`Banked Coherence (max 3, TE only) (spend 1-for-1 to absorb Coherence loss): ○ ○ ○`)}</p></div>
        <h4 className="el-subsection">{inline(`PARADOX TRACK`)}</h4>
        <div className="el-body"><p>{inline(`[0] [1] [2] [3] \\| [4] [5] [6] \\| [7] [8] [9] \\| [10+]`)}</p></div>
        <h4 className="el-subsection">{inline(`ACTIVE MEMORIES (+2)`)}</h4>
        <ol className="el-numlist"><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)}</li></ol>
      </ChPage>
    </Spread>
    <Spread id="backmatter-quick-reference-sheet-04" label={"QUICK REFERENCE SHEET · spread 4"}>
      <ChPage side="verso" runHead={"Quick Reference Sheet"} pageNum={basePage + 6} label={`QUICK REFERENCE SHEET · p.${basePage + 6}`}>
        <h4 className="el-subsection">{inline(`FADING MEMORIES (+1)`)}</h4>
        <div className="el-body"><p>{inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________`)}</p></div>
        <div className="el-body"><p><b>{inline(`LOCKED MEMORY (+3, permanent)`)}</b></p></div>
        <div className="el-body"><p>{inline(`Title: ________________________________________ Tags: ________________________________________ Why this one: ________________________________________`)}</p></div>
        <h4 className="el-subsection">{inline(`ASSETS`)}</h4>
        <div className="el-body"><p><b>{inline(`Asset 1:`)}</b>{inline(` ____________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Temporal Anchor`)}</p></div>
        <div className="el-body"><p>{inline(`Level: ○ 1 ○ 2 ○ 3`)}</p></div>
        <div className="el-body"><p>{inline(`Stress: ○○○○○`)}</p></div>
        <div className="el-body"><p><b>{inline(`Asset 2:`)}</b>{inline(` ____________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Temporal Anchor`)}</p></div>
        <div className="el-body"><p>{inline(`Level: ○ 1 ○ 2 ○ 3`)}</p></div>
        <div className="el-body"><p>{inline(`Stress: ○○○○○`)}</p></div>
        <div className="el-body"><p><b>{inline(`Asset 3:`)}</b>{inline(` ____________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Temporal Anchor`)}</p></div>
        <div className="el-body"><p>{inline(`Level: ○ 1 ○ 2 ○ 3`)}</p></div>
        <div className="el-body"><p>{inline(`Stress: ○○○○○`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Quick Reference Sheet"} pageNum={basePage + 7} label={`QUICK REFERENCE SHEET · p.${basePage + 7}`}>
        <h4 className="el-subsection">{inline(`FACTION TRACKING`)}</h4>
        <div className="el-body"><p>{inline(`Marked: ○Church ○Authority ○Scionfall ○Chronoclasts`)}</p></div>
        <h4 className="el-subsection">{inline(`SCARS (from Lost Memories)`)}</h4>
        <div className="el-body"><p>{inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________ 4: ________________________________________`)}</p></div>
        <h4 className="el-subsection">{inline(`MUTATIONS (from Breach/Faction/Crisis)`)}</h4>
        <div className="el-body"><p>{inline(`1: ________________________________________ 2: ________________________________________`)}</p></div>
        <h4 className="el-subsection">{inline(`DOWNTIME CHECKLIST`)}</h4>
        <div className="el-body"><p>{inline(`□ Chronicle (+1 Coherence) □ Reinforce Anchor □ Tend Assets □ Process Memory □ Reduce Paradox (optional) □ Plan Next Move`)}</p></div>
        <h4 className="el-subsection">{inline(`emiT — Character Sheet`)}</h4>
        <h4 className="el-subsection">{inline(`ORIGIN SKETCH (write in pencil)`)}</h4>
        <div className="el-body"><p>{inline(`Name (subject to revision): ________________________________________ Origin Era: ________________________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Displacement Event: ________________________________________`)}</p></div>
        <h4 className="el-subsection">{inline(`CORRUPTION VECTOR`)}</h4>
        <div className="el-body"><p>{inline(`[5] →[4] →[3] →[2] →[1] →[0: TERMINAL CONFIGURATION]`)}</p></div>
        <div className="el-body"><p>{inline(`Current Vector: _____ Trajectory: ________________________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Decreases when: Embrace Corruption in Crisis / 3rd Mutation in one session / accept Faction transformation offer.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="backmatter-quick-reference-sheet-05" label={"QUICK REFERENCE SHEET · spread 5"}>
      <ChPage side="verso" runHead={"Quick Reference Sheet"} pageNum={basePage + 8} label={`QUICK REFERENCE SHEET · p.${basePage + 8}`}>
        <h4 className="el-subsection">{inline(`OPERATIONAL MODES (shift by Paradox band)`)}</h4>
        <div className="el-body"><p>{inline(`Shadow (0–) +2 / +1 / +0 / − Flux (4–) +1 / +0 / +1 / +1 Anomaly (7–) +0 / − / +2 / +2 Breach (10+) − / − / +3 / +3`)}</p></div>
        <div className="el-body"><p>{inline(`Current Band: ________________________________________ Current Modes: _____ / _____ / _____ / _____`)}</p></div>
        <h4 className="el-subsection">{inline(`COHERENCE (circle current)`)}</h4>
        <div className="el-body"><p>{inline(`[−] [−] [−] [−] [−] [−] [0] [+1] [+2] [+3] [+4] [+5] [+6] [+7] [+8]`)}</p></div>
        <div className="el-body"><p>{inline(`Max = Corruption Vector + 3. No Coherence banking in emiT.`)}</p></div>
        <h4 className="el-subsection">{inline(`PARADOX`)}</h4>
        <div className="el-body"><p>{inline(`[0] [1] [2] [3] \\| [4] [5] [6] \\| [7] [8] [9] \\| [10+]`)}</p></div>
        <div className="el-body"><p><b>{inline(`ACTIVE SCARS (+2, tools you reload)`)}</b></p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Quick Reference Sheet"} pageNum={basePage + 9} label={`QUICK REFERENCE SHEET · p.${basePage + 9}`}>
        <ol className="el-numlist"><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)}</li><li>{inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)}</li></ol>
        <h4 className="el-subsection">{inline(`FADING SCARS (+1)`)}</h4>
        <div className="el-body"><p>{inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________`)}</p></div>
        <div className="el-body"><p><b>{inline(`CORE SCAR (+3, permanent)`)}</b></p></div>
        <div className="el-body"><p>{inline(`Title: ________________________________________ Tags: ________________________________________ Why this one: ________________________________________`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="backmatter-quick-reference-sheet-06" label={"QUICK REFERENCE SHEET · spread 6"}>
      <ChPage side="verso" runHead={"Quick Reference Sheet"} pageNum={basePage + 10} label={`QUICK REFERENCE SHEET · p.${basePage + 10}`}>
        <h4 className="el-subsection">{inline(`MUTATIONS (permanent)`)}</h4>
        <div className="el-body"><p>{inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________ 4: ________________________________________`)}</p></div>
        <h4 className="el-subsection">{inline(`VIOLENCE TAX TRACKER`)}</h4>
        <div className="el-body"><p>{inline(`Violence Count (reset at Repreival): ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ Taxes: ○Mutation ○Scar Loss ○Witnessed`)}</p></div>
        <h4 className="el-subsection">{inline(`ASSETS`)}</h4>
        <div className="el-body"><p><b>{inline(`Asset 1:`)}</b>{inline(` ____________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Scar-Derived`)}</p></div>
        <div className="el-body"><p>{inline(`Level: ○ 1 ○ 2 ○ 3`)}</p></div>
        <ul className="el-list"><li>{inline(`State: ○ Clean ○ Compromised ○ Weaponized`)}</li></ul>
        <div className="el-body"><p>{inline(`Stress: ○○○○○`)}</p></div>
        <div className="el-body"><p><b>{inline(`Asset 2:`)}</b>{inline(` ____________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Scar-Derived`)}</p></div>
        <div className="el-body"><p>{inline(`Level: ○ 1 ○ 2 ○ 3`)}</p></div>
        <ul className="el-list"><li>{inline(`State: ○ Clean ○ Compromised ○ Weaponized`)}</li></ul>
        <div className="el-body"><p>{inline(`Stress: ○○○○○`)}</p></div>
        <div className="el-body"><p><b>{inline(`Asset 3:`)}</b>{inline(` ____________________________`)}</p></div>
        <div className="el-body"><p>{inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Scar-Derived`)}</p></div>
        <div className="el-body"><p>{inline(`Level: ○ 1 ○ 2 ○ 3`)}</p></div>
        <ul className="el-list"><li>{inline(`State: ○ Clean ○ Compromised ○ Weaponized`)}</li></ul>
      </ChPage>
      <ChPage side="recto" runHead={"Quick Reference Sheet"} pageNum={basePage + 11} label={`QUICK REFERENCE SHEET · p.${basePage + 11}`}>
        <div className="el-body"><p>{inline(`Stress: ○○○○○`)}</p></div>
        <h4 className="el-subsection">{inline(`FACTION TRACKING`)}</h4>
        <div className="el-body"><p>{inline(`Marked: ○ Church ○ Authority ○ Scionfall ○ Chronoclasts`)}</p></div>
        <h4 className="el-subsection">{inline(`REPREIVAL CHECKLIST`)}</h4>
        <div className="el-body"><p>{inline(`□ Chronicle`)}</p></div>
        <div className="el-body"><p>{inline(`□ Reinforce Anchor`)}</p></div>
        <div className="el-body"><p>{inline(`□ Tend Assets`)}</p></div>
        <div className="el-body"><p>{inline(`□ Process Scars`)}</p></div>
        <div className="el-body"><p>{inline(`□ Reduce Paradox (optional)`)}</p></div>
        <div className="el-body"><p>{inline(`□ Plan Next Move`)}</p></div>
        <div className="el-body"><p>{inline(`□ Reset Violence Count`)}</p></div>
        <div className="el-body"><p><b>{inline(`THE HOLDING ACTION`)}</b>{inline(` (once per session) — Used this session: ○`)}</p></div>
        <div className="el-body"><p><b>{inline(`THE EXIT QUESTION`)}</b>{inline(` (at Corruption Vector 0)`)}</p></div>
        <div className="el-body"><p>{inline(`What was the last thing you cared about that wasn't useful?`)}</p></div>
        <div className="el-body"><p>{inline(`Answer: ____________________________`)}</p></div>
        <div className="el-body"><p>{inline(`○ Preserve It — one final scene, then Dissolve.`)}</p></div>
        <div className="el-body"><p>{inline(`○ Delete It — become Terminal Configuration. Rename SYNC to INTERFACE.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="backmatter-quick-reference-sheet-07" label={"QUICK REFERENCE SHEET · spread 7"}>
      <ChPage side="verso" runHead={"Quick Reference Sheet"} pageNum={basePage + 12} label={`QUICK REFERENCE SHEET · p.${basePage + 12}`}>
        <Zaaken><p>{inline(`The signal does not decay. It is the receiver that rots. To hear the sweet siren song of the Chronoverse is to invite the frequency to dismantle you. Identity is a standing wave. You are not a traveler. You are an interference pattern. Chen believes she can stabilize the note. Alan believes he can change the key. Both are wrong. There is only the static. And the static is hungry. The other three argue about how to survive the ocean. Chen builds a boat. Alan learns to breathe water. Zaaken dissolves into the current.`)}</p><p>{inline(`I am the fourth.`)}</p><p>{inline(`I am the one who asked what the ocean was for.`)}</p><p>{inline(`I found the shore. I found the Architect. I cannot tell you what I saw. I can only leave you this: The Veil is thin where the signal is loudest. Do not listen. Do not look. Do not stop moving. They are listening back.`)}</p></Zaaken>
      </ChPage>
      <ChPage side="recto" runHead={"Quick Reference Sheet"} pageNum={basePage + 13} label={`QUICK REFERENCE SHEET · p.${basePage + 13}`}>
        
      </ChPage>
    </Spread>
  </>);
}

BM_quick_reference_sheet.pages = 14;
Object.assign(window, { BM_quick_reference_sheet });
