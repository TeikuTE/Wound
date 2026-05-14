function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chen-4 — CORE RESOLUTION & FACTION PRESSURE
function ChenCh4({
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
    id: "chen-4-opener",
    label: "CORE RESOLUTION & FACTION PRESSURE · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "CORE RESOLUTION & FACTION PRESSURE \xB7 opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-sigil"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "drift",
    size: "sigil",
    stage: 0
  })), /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-broken-compass.svg",
    number: "IV",
    title: "Core Resolution & Faction Pressure"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-02",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 2,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`The Resolution Roll`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body el-dropcap",
    "data-firstpara": true
  }, /*#__PURE__*/React.createElement("p", null, inline(`When the outcome matters, you roll. Two six-sided dice, plus the relevant Mode, plus your Memory bonus if one applies.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 16,
    act: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "momentum",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` is success. `), /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(` is success with cost. `), /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` is failure with an opening.`))), /*#__PURE__*/React.createElement(ChenMarginaliaInline, null, /*#__PURE__*/React.createElement("p", null, inline(`I want to say something about the `), /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` before we go further. New Echoes treat it as the bad result. It isn't. The `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` ends the question; the `), /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` changes it. Both move the story. Only one of them surprises you.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When you attempt something risky or opposed, make a Resolution Roll:`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`RESOLUTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll: `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + Mode Rating + Memory Bonus`))), /*#__PURE__*/React.createElement("div", {
    className: "el-resolution"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `10+`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Complete Success —achieve goal, +1 Wave Coherence`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `7-9`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Success with Complication —succeed, cost or new problem`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `6-`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Failure with Opportunity —fail, but gain something useful`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Choose: Lose 1 Coherence OR Mark 1 Paradox`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`MEMORY BONUS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Active Memory matching context +2 Fading Memory matching context +1 Locked Memory matching context +3 No relevant Memory +0`))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 16,
      "text": "2d6 + Mode + Memory tag — same math as Forged in the Dark. Comfortable territory. I can play this in my sleep.",
      "act": 2,
      "late": false
    }]
  })), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 3,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Navigation`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You will be displaced whether you want to be or not. Faction interference, Crisis events, and temporal instability will throw you between eras involuntarily. But you can also attempt Precision Navigation — using resonance principles to target specific coordinates in time.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PRECISION NAVIGATION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When you attempt to reach a specific era or location:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Step 1: Define Your Target. Specify as precisely as you can — when (year, decade, or century), where (city, region, or continent), and why (what you're seeking there, which helps focus the resonance).`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your precision affects the Difficulty:`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`TARGET PRECISION DIFFICULTY`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Specific date & location (June 23, 1848, 12 Rue Saint-Jacques, Paris) Year & city (1848, Paris) 10 Decade & region (1840s, France) 8 Century & continent (1800s, Europe) 7`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Step 2: Pay the Cost. Spend 1 Coherence before rolling. When you have 0 Coherence, you cannot attempt Precision Navigation.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Step 3: Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE + Memory Bonus (if applicable).`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Step 4: Read the result:`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-03",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 4,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-resolution"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `12+`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Perfect Resonance`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Arrive exactly when and where intended. Gain +1 Coherence (clean synchronization). No Paradox generated.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `10-11`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Successful Navigation`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Arrive at intended era and location. Minor variance (different street, day off by a week). Mark +1 Paradox from resonance strain.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `7-9`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Close Arrival`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Arrive in correct era OR correct location, not both. Same year, different city, OR same city, years off. Mark +1 Paradox.`)))), /*#__PURE__*/React.createElement("div", {
    className: "resolution-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-roll"
  }, `6-`), /*#__PURE__*/React.createElement("div", {
    className: "resolution-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resolution-title"
  }, inline(`Lost in Transit`)), /*#__PURE__*/React.createElement("div", {
    className: "resolution-text"
  }, inline(`Navigation fails. Consult the Anomaly Tables (see below). Choose: Lose 1 Coherence OR Mark +2 Paradox.`))))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`STRUCTURED CORRECTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`After rolling all four Anomaly Tables, you may spend 1 Coherence to reroll one result. Choose which table to reroll (ERA, LOCATION, ANOMALY, or COMPLICATION), spend the Coherence, and accept the new result. You may do this once per displacement event.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 17,
    act: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "anchor",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Initial observations can contain measurement error. Temporal resonance creates interference. If you invest the Coherence to recalibrate, you can refine your assessment. This isn't changing reality. It's correcting your perception of what exists.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(AlanIntrusionInline, {
    tier: tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Chen's into spending Coherence to make the dice lie more comfortably. Sure, it works. It's also false comfort.`))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 17,
      "text": "Coherence is the only resource that matters. The rest are decoration.",
      "act": 2,
      "late": false
    }]
  })), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 5,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`NAVIGATION COLLAPSE (PARADOX 7+)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`At Paradox 7 or higher, your waveform is too unstable for resonance-targeting. You have lost fine control.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`AT PARADOX **7+**: NAVIGATION COLLAPSE`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You cannot roll Precision Navigation.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`State your intention ('I'm trying to reach 1848 Paris').`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`All displacement is determined by the Anomaly Tables.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Structured Correction still applies.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`To restore Precision Navigation, reduce Paradox below 7.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Chen frames it as agency vs. passivity. She's way offbase. The only choice is between paying for the illusion of control and admitting you don't have any. Anomaly Tables are cheaper because they're not selling you anything.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Wave Coherence`)), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Coherence is the integrity of your harmonic signature. It holds you to a single line of self when everything around you is trying to dissolve you into static. It is the most expensive resource you have and one you will spend without noticing you spent it.`)), /*#__PURE__*/React.createElement("p", null, inline(`Track Coherence on a scale from +6 to -6. Each value corresponds to a state you can feel — if you have the discipline to feel it before you've already passed it.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Wave Coherence measures how aligned you are with the timestream. It ranges from -6 to your Anchor Strength + 5 (usually 8).`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-04",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 6,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`COHERENCE STATE EFFECT`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Synchronized (+6 to +8) +1 to all Resolution rolls. You move through time with grace.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Flux (0 to +5) No modifier. Normal operation.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Desynchronizing (-1 to -5) -1 to all Resolution rolls. Time is hostile.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Crisis (-6) -2 to all Resolution rolls. Immediate Desynchronization Crisis.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`GAINING AND LOSING COHERENCE`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You gain Coherence when you succeed (+1 on a 10+), when you write something true in your Chronicle (+1), when you reinforce your Anchor (+2). You lose it when you fail (-1 on a 6-, or choose Paradox instead), when you're Displaced (see Displacement Costs below), when you let a Memory fade (-1), when your Anchor takes Stress (see Anchor Stress below). The math is simple. The choices aren't.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`DISPLACEMENT COSTS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Every time you are Displaced — voluntarily or not — you lose Coherence from the wrenching dislocation.`)), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "drift",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Displacement Type Coherence Cost`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Precision Navigation (voluntary) -1 (paid before rolling)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Failed Navigation (6-) -1 or +2 Paradox (your choice)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Forced Displacement — Faction interference, -2`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Crisis, random jump`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Crisis Displacement — Shattering, Identity -3`))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 7,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 7}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`collapse, Breach`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Involuntary jumps always cost 2. Crisis-level displacement costs 3. You don't get to choose when those happen. That's the point.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ANCHOR STRESS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your Anchor is not invulnerable. Certain events put direct pressure on your connection to your origin — not enough to break it, but enough to require maintenance.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your Anchor has a Stress track: ○○○`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Mark 1 Anchor Stress when:`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A Church Templar successfully captures or touches you (their rituals`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`target your origin frequency directly)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You fail a roll involving your Locked Memory while in`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Desynchronization Crisis (-1 to -5 Coherence)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You spend Downtime in an era that directly contradicts a core Anchor`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Connection (you knew her as alive; here she died before you were born)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A Crisis outcome specifies Anchor Stress`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When all 3 Anchor Stress boxes are marked, your Anchor is Strained. While Strained: you cannot invoke Anchor Connections for Coherence bonuses. The Reinforce Anchor move (Ch. 7) clears Stress as normal — but on a 6-, you lose 1 Anchor Strength permanently instead of just failing.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Clear Anchor Stress during Downtime Step 2.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-05",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 5"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 8,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 8}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`COHERENCE OVERFLOW`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When you would gain Coherence but are already at your maximum, choose one: Stabilize an Asset (clear 1 Stress from any Asset), Reduce Contamination (reduce Paradox by 1, if above 0), or Bank It (mark +1 Banked Coherence, maximum 3 Banked). Spend Banked Coherence 1-for-1 to prevent Coherence loss.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`This mechanic exists in Temporal Echoes only. Wrecks do not bank Coherence. You're not preserving anything.`)))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Paradox: The Universe Pushing Back`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Paradox accumulates through interference. The universe keeps count even when you don't.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Action Paradox`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Contradict your own Chronicle +1`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Share knowledge from the wrong era (a technique, a fact, a warning) +1`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Change something small — redirect one person, save one life, +1`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`alter one decision`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Change something documented — an event with witnesses, +2`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`a death with records`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Create a causal loop (you caused the thing that caused you here) +2`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Meet yourself (any version — past, future, alternate) +2`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Change something load-bearing — a battle's outcome, +3`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`a discovery's timing, a leader's survival`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 9,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 9}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Cause a Shattering deliberately +3`)), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "collapse",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When in doubt: if people would write it down afterward, it's +2. If people would change how they understand history, it's +3. If only you noticed, it's +1.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PARADOX BAND EFFECTS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Shadow (0-3)`)), inline(` — No penalties. Small reality glitches: déjà vu, objects slightly wrong. Invisible to Factions.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Flux (4-6)`)), inline(` — `), /*#__PURE__*/React.createElement("b", null, inline(`-1`)), inline(` to Resolution rolls. Noticeable anomalies. Memory Fading accelerates. Faction Scouts appear when you roll `), /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(`.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Anomaly (7-9)`)), inline(` — `), /*#__PURE__*/React.createElement("b", null, inline(`-1`)), inline(` to Resolution rolls. Memory Fading doubles. Reality actively hostile. Faction Agents appear as complication on `), /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(`.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Breach (10+)`)), inline(` — `), /*#__PURE__*/React.createElement("b", null, inline(`-2`)), inline(` to Resolution rolls. Timeline collapsing. Immediate Paradox Crisis. Faction Intervention during Crisis Phase 2.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The modifiers above are designed to compound. So are the modifiers from Coherence states, Faction Marks, and unfavored Modes. At low Paradox and stable Coherence, the math is forgiving. At high Paradox and Crisis Coherence, it is hostile. This is deliberate. I will say more about it in Chapter 6.`)), /*#__PURE__*/React.createElement("p", null, inline(`What you should know now: when the stack turns against you, better dice will not save you. The systems the game has been holding in reserve will. Engage them.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-06",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 6"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 10,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 10}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection el-reflection--theory"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Gödel proved that any formal system rich enough to express arithmetic contains true statements it cannot prove. Reality, under CTH, is the same. There are facts about the timeline that are true and that the timeline cannot accommodate. Echoes bear those facts carved into their identity, but Paradox is what happens when an unprovable truth tries to find a place to stand. — EC`)), /*#__PURE__*/React.createElement("p", null, inline(`Faction Pressure`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You are a foreign object in a closed system. The Chronoverse has an immune response, and your Paradox is the fever it is responding to. The Factions are antibodies with philosophies. Containment, harvest, euthanasia — none of these are moral failures on their part, and accepting an Offer is not a moral failure on yours. They are not after you because they hate you. They are after you because you are fuel.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`SHADOW (0-3): INVISIBLE`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You're background noise. Factions have no reason to notice something they can't measure. Enjoy it. It won't last.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`FLUX (4-6): SCOUTS APPEAR`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When you roll 6-, a Scout appears. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(`: 1 = Church Observer, 2 = Authority Surveyor, 3 = Scionfall Herald, 4 = Chronoclast. Automatic if you're already Marked. Scouts watch. They file reports. They don't act — they're waiting to see if you're worth the effort.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 11,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 11}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ANOMALY (7-9): AGENTS APPEAR`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When you roll `), /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(`, a Faction Agent appears as your complication. They've decided you're worth the effort. They make an Offer. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(` for which Faction, or automatic if Marked. This is when the game changes.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`BREACH (10+): INTERVENTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`During Crisis Phase 2, Factions arrive in force. You're not a nuisance anymore. You're a crisis event. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(`, or `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(` twice for a Factional War — two Factions competing over what to do with you. See Crisis Interventions in Chapter 6.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Agent Encounters`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When an Agent appears at Paradox `), /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(`, they bring an Offer. The form varies — surveillance, interference, demand, or direct confrontation. Not every Agent encounter is a fight.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 18,
    act: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "paradox",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You choose one of three responses:`))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Accept the Offer. Pay the cost, gain the benefit. Offers are trades, not rolls.`)), /*#__PURE__*/React.createElement("li", null, inline(`Refuse. They impose a consequence and Mark you.`)), /*#__PURE__*/React.createElement("li", null, inline(`Drive Off. Make a roll to force them away.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Offers are your non-roll path to Paradox relief. If Downtime moves aren't working, an Agent's trade is how you buy back control — by selling pieces of yourself.`))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 18,
      "text": "The Offers mechanic is mean. Real mean. Saul refused his first one (Loop Authority, of course) and now the Mark stays. I respect the design.",
      "act": 2,
      "late": false
    }]
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-07",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 7"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 12,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 12}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE DRIVE OFF MOVE`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + DISRUPT (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Success. You drive them off through violence or intimidation. No additional cost. They retreat. You're not Marked.`))), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `7-9`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, ``), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Success with cost. They retreat. Choose one: lose 2 Coherence, mark +1 Paradox, or they Mark you anyway.`))))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Failure. You fail. Take their Imposed consequence AND they Mark you. They leave when they're done with you.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`The Four Agents`)), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The four below are not exhaustive. They are the four I have met often enough to describe consistently. Each Faction has variations — older Templars, younger Auditors, Heralds wearing a face you have not yet lost, Chronoclasts who have learned restraint. The descriptions are what holds across the variations. The faces change. The function does not.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`1. CHURCH TEMPLAR`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`They appear bleeding through their era-appropriate armor, chrono-glyphs inscribed into the metal. The thing you notice first are their eyes — millennia of pain mixed with purpose and pleasure.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Offer: Your pain can have purpose. Let us use it.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Trade: Take 1 Scar immediately + lose 2 Coherence →Reduce Paradox by 3. Mark: Church knows you're a viable battery. They'll return.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If Refused: Impose — their prayer weighs on you, lose 1 Coherence. Mark — next Scout/Agent encounter is automatically Church.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 13,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 13}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`2. AUTHORITY AUDITOR`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Forgettable in the way that only deliberate design achieves. A grey suit that wears a human being. Takes notes. Blinks and their clothes change slightly.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Offer: You're glitching. We can smooth you out. Become efficient again.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Trade: Choose one Active Memory — it becomes normalized (bonus drops from +2 to +0, emotional context erased). →Reduce Paradox by 2, clear 1 Stress from one Asset. Mark: They've tagged your waveform.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If Refused: Impose — -1 to Navigation rolls until next Downtime. Mark — they begin preparing a Clone Loop.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`3. SCIONFALL HERALD`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`They always appear as a loved one. Kind eyes, warm voice, something underneath that is steel all the way through.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Offer: I can end the pain. All of it. Right now.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Trade: Character retired. You cease. Peacefully. Game over. Write a final Chronicle entry: I let go. This is a valid ending — choosing peace over continued suffering.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If Refused: Impose — -1 to ENDURE while they're present. Mark — the offer stands, always. They'll return during your next Crisis.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-08",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 8"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 14,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 14}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`4. CHRONOCLAST REMIXER`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Anachronism incarnate. Carrying objects from the wrong era. Laughing at things that aren't funny.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Offer: You're making art! Here — let's make it louder.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Trade: Gain +2 Paradox now →Gain +3 to your next DISRUPT or OBSERVE roll only. Regardless of result, that roll triggers a Complication. Mark: they think you're interesting.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If Refused: Impose — roll on Timeline Shift Oracle immediately (reality changes around you). Mark — they'll bring a gift next time (unstable Chrono-Tech that glitches constantly).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`BEING MARKED`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When a Faction Marks you, write in your Chronicle: MARKED: [Faction name]. The next time that Faction would appear, they appear automatically — no `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(` roll needed. Once they appear, erase the Mark. You can be Marked by multiple Factions simultaneously.`))), /*#__PURE__*/React.createElement(ChenMarginaliaInline, null, /*#__PURE__*/React.createElement("p", null, inline(`Being Marked doesn't mean immediate danger — it means they're watching. They know your resonance signature now. You've become a bookmark in their archives.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Being Marked means you're screwed. You drew their attention, refused their offer, and now they know you're worth effort. I've been Marked by all four Factions simultaneously. It's like having four different kinds of cancer. Each one convinced they're helping.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR"))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 15,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 15}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Downtime`)), /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Downtime is the part of the work nobody else does for you. When a session ends, or when the era is briefly not actively trying to kill you, stop and write down what happened. Repair what you can. Many good Echoes faded because they did not take Downtime with the rigor it deserves.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`WHEN TO TAKE DOWNTIME`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`After every Precision Navigation roll, OR`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`After every Oracle Displacement (rolling all four Anomaly Tables), OR`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`At the end of your real-world play session, if neither of the above`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`occurred.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`DOWNTIME STEPS (DO THESE IN ORDER)`)), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Chronicle the Session.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Write in your Chronicle: where/when you are, what happened this session, one significant choice you made, one thing you lost or changed. This is mandatory. Chronicling is how you stabilize memory. Effect: gain +1 Coherence, up to your maximum.`))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Reinforce Your Anchor.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If your Anchor took Stress during the session, roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + SYNC (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`). On `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(`: clear all Stress. On `), /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(`: clear 1 Stress, and either spend time and resources on it or leave remaining Stress. On `), /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(`: no Stress cleared.`))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Tend to Assets.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-09",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 9"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 16,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 16}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`For each Asset with Stress marked, roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + relevant Mode (usually OBSERVE for tech, SYNC for connections). On `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(`: clear all Stress. On `), /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(`: clear 1 Stress. On `), /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(`: no Stress cleared. If an Asset has all Stress marked, it's broken — spend a Downtime move repairing it (narrate the work, no roll) or replace it with a new Asset at Level 1.`)), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "burden",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Process Memory.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your memory system naturally degrades. The oldest Active Memory moves to Fading (loses +2 bonus, now +1). The oldest Fading Memory becomes Lost. When a Memory becomes Lost, gain a Scar (see Chapter 5).`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`When a memory passes from Active to Fading, you notice it as effort — the thing you used to recall instantly now requires you to reach. Fading to Lost is quieter. You don't notice the moment it goes. You notice, weeks later, that something used to be there and now is not. You reach for the cup that isn't there. You start the sentence and find no end to it. The Scar is the shape the absence leaves.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your Locked Memory never fades.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If something significant happened this session, you may create a new Memory: write the event, choose Context Tags, write a description. It enters Active Slot 1, pushing everything else forward.`))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Reduce Paradox (Optional).`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 17,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 17}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Choose one:`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Temporal Grounding: Spend significant time integrating with the current era. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + SYNC (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`). On `), /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(`: reduce Paradox by 2. On `), /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(`: reduce by 1. On `), /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(`: no reduction, lose 1 Coherence from the exhaustion.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Ritual Purification: Use specialized Chrono-Tech or Faction assistance. Effect: reduce Paradox by `), /*#__PURE__*/React.createElement("b", null, inline(`1d6`)), inline(`, but if using Church methods, take 1 Mutation; if using Authority methods, normalize 1 Scar (reduce bonus to +0); if using tech, the Asset takes all Stress.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Ignore: Accept your current contamination level.`))), /*#__PURE__*/React.createElement("ol", {
    className: "el-numlist"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Plan Next Move.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Answer one of these questions in your Chronicle: What am I trying to accomplish? What am I afraid will happen next? What do I need that I don't have?`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`SAFETY TOOLS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`This game explores identity dissolution, memory loss, isolation, and the horror of losing yourself piece by piece.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Temporal Pause (X-Card): At any point, if the content becomes too intense, stop writing. Close the Chronicle. Breathe. Narratively, your Echo phases out of local time for a micro-second, avoiding the trauma. Mechanically, skip the scene. No penalty. Reality redraws itself around the gap.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-10",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 10"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 18,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 18}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Lines and Veils: Lines are events that don't happen in your timeline — write them in the back of your Chronicle under Redacted Data. If an Oracle prompts them, reroll. Veils are events that happen off-screen — describe the setup and aftermath, but the event itself is Lost to Static.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`EXPANDED SAFETY TOOLS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`Temporal Echoes is a game about loss, memory, and identity erosion. Played at length, it will put you in proximity to real feelings you may not have scheduled time for. The following tools exist to help you engage with difficult material without getting genuinely hurt.`)), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 19,
    act: 2
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "null",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Lines and Veils`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Before your first session, take ten minutes to write two short lists in the front of your Chronicle.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Lines — content that will not appear in your game, ever. Hard stops. If the Oracle rolls toward it, you reroll or narrate around it. There is no mechanical cost for this. The game's rules have no authority over what you're willing to encounter.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Veils — content that may exist in the world of the game but is not described on-page. Violence happens, but you don't zoom in on it. A character dies, but you cut to the next scene. Fade to black is a legitimate move.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your Lines and Veils can change between sessions. Cross things out. Add new ones. You are not locked in.`))), /*#__PURE__*/React.createElement(FinderFootnotes, {
    notes: [{
      "n": 19,
      "text": "Safety tools written by someone who has used them. The \"talk to a person who exists in your life before you pick the book up again\" line is good advice. Going to ignore it because the baby finally went down and this is my window.",
      "act": 2,
      "late": false
    }]
  })), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 19,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 19}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`The Temporal Pause (X-Card Equivalent)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`At any point, if the content of the scene is genuinely affecting you in a way you didn't sign up for — not uncomfortable-in-a-good-way, not sad-about-fictional-things, but actually-bad-for-you — close the book. Stand up. Walk away.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The game does not require completion. Your Echo does not lose Coherence because you put the book down. A session you stopped is a session. You can come back, or you can choose not to. Both are legal.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Fast Forward`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If a scene is going somewhere you'd rather not dwell — an interrogation, a captivity vignette, a loss of a specific Anchor Connection — you may narrate through it in a single paragraph and move on. Record only the outcome. Pay any mechanical costs. Do not detail the content.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`This is not cheating. The mechanics work the same. You just don't linger.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Rewind`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If you make a narrative choice and, an hour later, realize it sent the story somewhere you don't want to go, you may Rewind. Cross out the last paragraph of your Chronicle. Return to the prior decision point. Choose differently.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Pay the mechanical costs of any rolls that occurred. Keep any Scars. The fiction is yours to revise. The accumulated damage is not.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-4-11",
    label: "CORE RESOLUTION & FACTION PRESSURE · spread 11"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 20,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 20}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Processing Difficult Content`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`Temporal Echoes deliberately engages with memory loss, grief, identity dissolution, and the specific horror of outliving your own ability to feel things. The game was built by someone processing their own experience of these, and many of the people who play it are doing the same. A few practices that help if you are one of them.`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`Decouple the Echo from yourself. Name them something other than your own name. Give them an origin era you did not live in. The distance is what makes the catharsis possible without it bleeding into your actual life.`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`Keep a separate notebook — not the Chronicle — for one line per session about how the session affected you. Not how it affected your Echo. This is not part of the game. It is part of being a person who plays the game.`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`If a session leaves you raw, talk to a person who exists in your life before you pick the book up again. The Chronicle is a mirror, and a mirror is not the same thing as company.`)))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`A Note on Crisis`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`If you are in genuine mental-health crisis — the kind that does not belong in a game — please set the book aside and contact a crisis line in your region, or a trusted person. The game will still be here. You need to be too.`))), /*#__PURE__*/React.createElement(Zaaken, null, /*#__PURE__*/React.createElement("i", null, inline(`Memoria finita est.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Core Resolution & Faction Pressure",
    pageNum: basePage + 21,
    label: `CORE RESOLUTION & FACTIO · p.${basePage + 21}`
  })));
}
ChenCh4.pages = 22;
Object.assign(window, {
  ChenCh4
});
