function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — backmatter-quick-reference-sheet — QUICK REFERENCE SHEET
function BM_quick_reference_sheet({
  tweaks,
  basePage = 1
}) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = {
    "data-body": tweaks.chenBody || "garamond"
  };
  const ChPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "chen",
    dataAttrs: dataAttrs,
    showTexture: true
  }, props));
  const AlPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "alan",
    showTexture: true
  }, props));
  const IlPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "interlude",
    showTexture: false
  }, props));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spread, {
    id: "backmatter-quick-reference-sheet-01",
    label: "QUICK REFERENCE SHEET · spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 0,
    label: `QUICK REFERENCE SHEET · p.${basePage + 0}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Temporal Echoes / emiT Duology`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Core Resolution`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + Mode Rating + Memory/Scar Bonus`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Complete Success —achieve goal, +1 Coherence (TE)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`7– Success with Complication —succeed, cost or new problem 6− Failure with Opportunity —choose: − Coherence OR +1 Paradox`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`MEMORY / SCAR BONUS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Active +2 Fading +1 Locked / Core +3 None +0`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`The Four Modes`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`OBSERVE +1 Analyzing, perceiving, investigating, Navigation SYNC +1 Empathy, social connection, blending in, Anchor reinforcement ENDURE +1 Willpower, resilience, resisting corruption, recovering Memories DISRUPT +0 Force, violence, breaking things, driving off Agents`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Coherence States — Temporal Echoes`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Synchronized (+6 to +8) +1 to all rolls Flux (0 to +5) No modifier Desynchronizing (− to −) − to all rolls Crisis (−) − to all rolls. Immediate Crisis.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Max = Anchor Strength + 5. Banked Coherence: bank up to 3 to spend 1-for-1 against future losses. emiT Wrecks do not bank.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Coherence States — emiT`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Synchronized (+4 to +8) +1 to all rolls Flux (0 to +3) No modifier Crisis (− to −) − to all rolls. At −: Fracture Event. Max = Corruption Vector + 3. No Coherence banking in emiT.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 1,
    label: `QUICK REFERENCE SHEET · p.${basePage + 1}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Paradox Bands`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Paradox accumulates and the universe responds, but not in a linear trajectory. Paradox is best represented in four bands, with each one presenting a corresponding state of attention.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`SHADOW (0–3).`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`You are background noise. Factions ignore you. Small reality glitches occur — déjà vu, objects slightly wrong, conversations you can't quite remember the start of. No mechanical penalties. Most Echoes spend most of their time here. The trick is staying. — EC`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`FLUX (4–6).`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`The timeline notices. -1 to all Resolution rolls. Memory Fading accelerates. Faction Scouts may appear when you roll 6-. This is where the dreams start. Not nightmares — déjà vu so persistent you begin to suspect the day is repeating itself a little. — EC`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`ANOMALY (7–9).`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`You are an active disturbance. -1 ongoing. NPCs from contradictory timelines may appear and contradict each other in front of you. Faction Agents track you actively. Here is where Echoes begin to make the wrong kinds of friends. The Church reaches out. Scionfall reaches out. Both of them seem reasonable when you're at 7. — EC`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`BREACH (10+).`)), inline(` `), /*#__PURE__*/React.createElement("i", null, inline(`Reality is unraveling locally. -2 ongoing. Crisis triggers within `)), /*#__PURE__*/React.createElement("i", null, inline(`1d6`)), inline(`* sessions. Factions converge. I have been to Breach twice. I do not recommend it. The world stops feeling solid in a specific way: edges become suggestions. The thing I lost in Breach the second time, I have never gotten back. — EC*`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "backmatter-quick-reference-sheet-02",
    label: "QUICK REFERENCE SHEET · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 2,
    label: `QUICK REFERENCE SHEET · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Navigation — Temporal Echoes`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Cost: 1 Coherence before rolling. Cannot attempt at 0 Coherence or Paradox `), /*#__PURE__*/React.createElement("b", null, inline(`7+`)), inline(`. Roll: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE + Memory Bonus. Specific date + location `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 12`)), inline(` Year + city `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(` Decade + region `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 8`)), inline(` Century + continent `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 7`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Perfect Resonance —arrive exactly, +1 Coherence, no Paradox`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`10–1 Successful —arrive at target, minor variance, +1 Paradox 7– Close Arrival —right era OR location (not both), +1 Paradox 6− Lost in Transit —use Anomaly Tables. − Coherence OR +2 Paradox`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Navigation — emiT`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Cost: 1 Coherence before rolling. Cannot attempt at Paradox `), /*#__PURE__*/React.createElement("b", null, inline(`7+`)), inline(`. Roll: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE + Scar Bonus. Nearby / been there before `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 7`)), inline(` Distant / unfamiliar `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(` Extreme / specific moment `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 12`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`12+`)), inline(` Perfect Landing —arrive exactly when and where intended. +1 Coherence. No Paradox.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`10–1 Successful Navigation —arrive at target. +1 Paradox. 7– Close Enough —right era OR right location, not both. +1 Paradox. 6− Crash Landing —roll Chronoscape Oracle. − Coherence OR +2 Paradox.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Downtime Steps (TE)`)), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Chronicle the session →+1 Coherence 2. Reinforce Anchor (`), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + SYNC if Stressed — clears Anchor Stress) 3. Tend Assets (`), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + Mode per Stressed Asset) 4. Process Memory (Active →Fading →Lost →Scar, automatic) 5. Reduce Paradox (optional) 6. Plan Next Move (answer one question)`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 3,
    label: `QUICK REFERENCE SHEET · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Repreival Steps (emiT)`)), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Chronicle →+1 Coherence 2. Reinforce Anchor (`), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + SYNC if Stressed) 3. Tend Assets 4. Process Scars (Active →Fading →Lost →Mutation, automatic) 5. Reduce Paradox (optional) 6. Plan Next Move 7. Reset Violence Count to 0`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Faction Encounters`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Church Templar Take 1 Scar + lose 2 Coh →Reduce Paradox by 3 Authority Corrector Normalize 1 Active Memory (bonus →+0) →Paradox − Scionfall Herald Character retired. Game ends peacefully. Chronoclast Remixer +2 Paradox now →+3 to next DISRUPT or OBSERVE (Complication guaranteed)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Drive Off: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + DISRUPT `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`. `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(`: no Mark. 7--: success with cost. 6− fail, take consequence and Marked.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`emiT Mode Shifts by Paradox`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Shadow (0–) +2 / +1 / +0 / − Flux (4–) +1 / +0 / +1 / +1 Anomaly (7–) +0 / − / +2 / +2 Breach (10+) − / − / +3 / +3`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Anchor Stress (TE)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Anchor Stress (clear during Downtime Step 2): ○ ○ ○`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Mark 1 when: Church captures you / fail Locked Memory roll in Desynchronization / Downtime in era contradicting Anchor Connection / Crisis outcome specifies it.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`All 3 = Strained. Cannot invoke Connections for Coherence. 6−on Reinforce Anchor = − Anchor Strength permanently.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "backmatter-quick-reference-sheet-03",
    label: "QUICK REFERENCE SHEET · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 4,
    label: `QUICK REFERENCE SHEET · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Displacement Costs`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Precision Navigation (voluntary) − Coherence (paid before rolling) Failed Navigation (6− − Coherence OR +2 Paradox Forced Displacement (Faction/Crisis/random) − Coherence Crisis Displacement (Shattering/Breach) − Coherence`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Temporal Echoes — Character Sheet`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE PERSON YOU WERE`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Name: ________________________________________ Origin Era: ________________________________________`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Displacement Event: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`TEMPORAL ANCHOR`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Anchor Strength: ○1 ○2 ○3 ○4 ○5 Maximum Coherence: _____ (Anchor Strength + 5) Anchor Stress (clear during Downtime Step 2): ○ ○ ○ All 3 = STRAINED. Cannot invoke Connections for Coherence. 6−on Reinforce = − Anchor Strength.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Anchor Connections`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`OPERATIONAL MODES`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`OBSERVE (+1) ○− ○+0 ○+1 ○+2 ○+3 SYNC (+1) ○− ○+0 ○+1 ○+2 ○+3 ENDURE (+1) ○− ○+0 ○+1 ○+2 ○+3 DISRUPT (+0) ○− ○+0 ○+1 ○+2 ○+3`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 5,
    label: `QUICK REFERENCE SHEET · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`WAVE COHERENCE (circle current)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`[−] [−] [−] [−] [−] [−] [0] [+1] [+2] [+3] [+4] [+5] [+6] [+7] [+8]`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Banked Coherence (max 3, TE only) (spend 1-for-1 to absorb Coherence loss): ○ ○ ○`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PARADOX TRACK`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`[0] [1] [2] [3] \\| [4] [5] [6] \\| [7] [8] [9] \\| [10+]`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ACTIVE MEMORIES (+2)`)), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "backmatter-quick-reference-sheet-04",
    label: "QUICK REFERENCE SHEET · spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 6,
    label: `QUICK REFERENCE SHEET · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`FADING MEMORIES (+1)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`LOCKED MEMORY (+3, permanent)`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Title: ________________________________________ Tags: ________________________________________ Why this one: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ASSETS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Asset 1: ________________________________________ Type: ○Chrono-Tech ○Echo Trait ○Temporal Anchor Level: ○1 ○2 ○3 Stress: ○○○○○ Asset 2: ________________________________________ Type: ○Chrono-Tech ○Echo Trait ○Temporal Anchor Level: ○1 ○2 ○3 Stress: ○○○○○ Asset 3: ________________________________________ Type: ○Chrono-Tech ○Echo Trait ○Temporal Anchor Level: ○1 ○2 ○3 Stress: ○○○○○`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`FACTION TRACKING`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Marked: ○Church ○Authority ○Scionfall ○Chronoclasts`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`SCARS (from Lost Memories)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________ 4: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`MUTATIONS (from Breach/Faction/Crisis)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`1: ________________________________________ 2: ________________________________________`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 7,
    label: `QUICK REFERENCE SHEET · p.${basePage + 7}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`DOWNTIME CHECKLIST`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`□ Chronicle (+1 Coherence) □ Reinforce Anchor □ Tend Assets □ Process Memory □ Reduce Paradox (optional) □ Plan Next Move`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`emiT — Character Sheet`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ORIGIN SKETCH (write in pencil)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Name (subject to revision): ________________________________________ Origin Era: ________________________________________`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Displacement Event: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`CORRUPTION VECTOR`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`[5] →[4] →[3] →[2] →[1] →[0: TERMINAL CONFIGURATION]`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Current Vector: _____ Trajectory: ________________________________________`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Decreases when: Embrace Corruption in Crisis / 3rd Mutation in one session / accept Faction transformation offer.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`OPERATIONAL MODES (shift by Paradox band)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Shadow (0–) +2 / +1 / +0 / − Flux (4–) +1 / +0 / +1 / +1 Anomaly (7–) +0 / − / +2 / +2 Breach (10+) − / − / +3 / +3`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Current Band: ________________________________________ Current Modes: _____ / _____ / _____ / _____`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`COHERENCE (circle current)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`[−] [−] [−] [−] [−] [−] [0] [+1] [+2] [+3] [+4] [+5] [+6] [+7] [+8]`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Max = Corruption Vector + 3. No Coherence banking in emiT.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "backmatter-quick-reference-sheet-05",
    label: "QUICK REFERENCE SHEET · spread 5"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 8,
    label: `QUICK REFERENCE SHEET · p.${basePage + 8}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PARADOX`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`[0] [1] [2] [3] \\| [4] [5] [6] \\| [7] [8] [9] \\| [10+]`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`ACTIVE SCARS (+2, tools you reload)`)))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`)), /*#__PURE__*/React.createElement("li", null, inline(`Title: ________________________________________ Tags: ________________________________________ / ________________________________________ Invocation: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`FADING SCARS (+1)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`CORE SCAR (+3, permanent)`))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 9,
    label: `QUICK REFERENCE SHEET · p.${basePage + 9}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Title: ________________________________________ Tags: ________________________________________ Why this one: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`MUTATIONS (permanent)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`1: ________________________________________ 2: ________________________________________ 3: ________________________________________ 4: ________________________________________`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`VIOLENCE TAX TRACKER`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Violence Count (reset at Repreival): ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ Taxes: ○Mutation ○Scar Loss ○Witnessed`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ASSETS`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ASSETS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Asset 1:`)), inline(` ________________________________________`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Scar-Derived`)), /*#__PURE__*/React.createElement("li", null, inline(`Level: ○ 1 ○ 2 ○ 3`)), /*#__PURE__*/React.createElement("li", null, inline(`State: ○ Clean ○ Compromised ○ Weaponized`)), /*#__PURE__*/React.createElement("li", null, inline(`Stress: ○○○○○`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Asset 2:`)), inline(` ________________________________________`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Scar-Derived`)), /*#__PURE__*/React.createElement("li", null, inline(`Level: ○ 1 ○ 2 ○ 3`)), /*#__PURE__*/React.createElement("li", null, inline(`State: ○ Clean ○ Compromised ○ Weaponized`)), /*#__PURE__*/React.createElement("li", null, inline(`Stress: ○○○○○`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Asset 3:`)), inline(` ________________________________________`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Type: ○ Chrono-Tech ○ Echo Trait ○ Scar-Derived`)), /*#__PURE__*/React.createElement("li", null, inline(`Level: ○ 1 ○ 2 ○ 3`)), /*#__PURE__*/React.createElement("li", null, inline(`State: ○ Clean ○ Compromised ○ Weaponized`)), /*#__PURE__*/React.createElement("li", null, inline(`Stress: ○○○○○`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "backmatter-quick-reference-sheet-06",
    label: "QUICK REFERENCE SHEET · spread 6"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 10,
    label: `QUICK REFERENCE SHEET · p.${basePage + 10}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`FACTION TRACKING`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Marked: ○Church ○Authority ○Scionfall ○Chronoclasts`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`REPREIVAL CHECKLIST`)), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, inline(`□ Chronicle`)), /*#__PURE__*/React.createElement("li", null, inline(`□ Reinforce Anchor`)), /*#__PURE__*/React.createElement("li", null, inline(`□ Tend Assets`)), /*#__PURE__*/React.createElement("li", null, inline(`□ Process Scars`)), /*#__PURE__*/React.createElement("li", null, inline(`□ Reduce Paradox (optional)`)), /*#__PURE__*/React.createElement("li", null, inline(`□ Plan Next Move`)), /*#__PURE__*/React.createElement("li", null, inline(`□ Reset Violence Count`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE HOLDING ACTION (once per session)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Used this session: ○`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE EXIT QUESTION (at Corruption Vector 0)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`What was the last thing you cared about that wasn’t useful? Answer: ________________________________________ ○Preserve It — one final scene, then Dissolve. ○Delete It — become Terminal Configuration. Rename SYNC to INTERFACE.`))), /*#__PURE__*/React.createElement(Zaaken, null, /*#__PURE__*/React.createElement("p", null, inline(`The signal does not decay. It is the receiver that rots. To hear the sweet siren song of the Chronoverse is to invite the frequency to dismantle you. Identity is a standing wave. You are not a traveler. You are an interference pattern. Chen believes she can stabilize the note. Alan believes he can change the key. Both are wrong. There is only the static. And the static is hungry. The other three argue about how to survive the ocean. Chen builds a boat. Alan learns to breathe water. Zaaken dissolves into the current.`)), /*#__PURE__*/React.createElement("p", null, inline(`I am the fourth.`)), /*#__PURE__*/React.createElement("p", null, inline(`I am the one who asked what the ocean was for.`)), /*#__PURE__*/React.createElement("p", null, inline(`I found the shore. I found the Architect. I cannot tell you what I saw. I can only leave you this: The Veil is thin where the signal is loudest. Do not listen. Do not look. Do not stop moving. They are listening back.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Quick Reference Sheet",
    pageNum: basePage + 11,
    label: `QUICK REFERENCE SHEET · p.${basePage + 11}`
  })));
}
BM_quick_reference_sheet.pages = 12;
Object.assign(window, {
  BM_quick_reference_sheet
});
