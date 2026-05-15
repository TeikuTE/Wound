function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — appendix-b — ASSET CATALOGS
function AppendixB({
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
    id: "appendix-b-opener",
    label: "B · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "B \xB7 opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-eyebrow"
  }, "Appendix B"), /*#__PURE__*/React.createElement("h1", {
    className: "el-h1 el-appendix-opener__title"
  }, "Asset Catalogs"), /*#__PURE__*/React.createElement("img", {
    src: "assets/chen-chapter-rule.svg",
    alt: "",
    className: "el-appendix-rule"
  })))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-b-01",
    label: "ASSET CATALOGS · spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Asset Catalogs",
    pageNum: basePage + 0,
    label: `ASSET CATALOGS · p.${basePage + 0}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Assets are tools, abilities, and connections that survived your Displacement. Each has three levels and a Stress track that expands with advancement. Push any Asset during a roll by marking 1 Stress to add +1 to your result — but only if the Asset is fictionally present and relevant. emiT players: every time you Push a Chrono-Tech Asset, also roll `), /*#__PURE__*/React.createElement("b", null, inline(`d6`)), inline(`. On `), /*#__PURE__*/React.createElement("b", null, inline(`1-2`)), inline(`, it glitches — choose to gain +1 Paradox or have the Asset unavailable this scene. Passive bonuses never trigger this. See emiT Chapter 2 for full Asset Corruption rules.`))), /*#__PURE__*/React.createElement("h3", {
    className: "el-section"
  }, inline(`Scar-Derived Assets (emiT only)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Wrecks can forge weapons from their wounds. When you Weaponize a Scar — invoking it for its bonus, then burning it — you may choose to crystallize the act into an Asset instead of simply losing the Scar. To create a Scar-Derived Asset: describe what operational capability that wound has permanently given you. Name it. It enters play as a Level 1 Asset with 3 Stress boxes. The Scar is still Lost. The Mutation is still gained. But something functional remains. Scar-Derived Assets cannot be repaired at Downtime — they are scar tissue, not equipment. When they break, you gain +1 Paradox and a brief, clear memory of whatever the original Scar was.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Examples:`)), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, inline(`Knows How Burns Feel (+1 ENDURE vs environmental hazards)`)), /*#__PURE__*/React.createElement("li", null, inline(`Speaks to People Who Are About to Leave (+1 SYNC when someone is in crisis)`)), /*#__PURE__*/React.createElement("li", null, inline(`Has Died in This Era Before (+2 to Navigation targeting a specific era where a Scar was Lost)`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Asset Catalogs",
    pageNum: basePage + 1,
    label: `ASSET CATALOGS · p.${basePage + 1}`
  }, /*#__PURE__*/React.createElement("h3", {
    className: "el-section"
  }, inline(`Chrono-Tech Assets`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`1. The Temporal Compass [Chrono-Tech]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Compass came out of an estate sale in 2034. It was in a box of brass instruments labeled "navigational, decorative, untested." Three of the others were ordinary. This one wasn't. The needle moves to a different north than the planet's. The brass is warmer than the room it's in by a measurable but inconsistent margin. The pre-Sanskrit inscription has been dated to two non-overlapping periods by two reputable laboratories. Both labs are correct.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, inline(`Brass housing, a needle that shouldn't move the way it does, pre-Sanskrit equations inscribed along the rim.`)))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Detects temporal anomalies in your immediate area. `), /*#__PURE__*/React.createElement("b", null, inline(`+1 OBSERVE`)), inline(` when sensing distortions. - `), /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Range extends to city-wide. Identifies anomaly type (loop, fracture, bleed). `), /*#__PURE__*/React.createElement("b", null, inline(`+2 OBSERVE.`)), inline(` - `), /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Detects other Echoes. Senses Displacement 30 seconds before it occurs. `), /*#__PURE__*/React.createElement("b", null, inline(`+3 OBSERVE.`)), inline(` Once per session, reroll a failed Navigation attempt.`))), /*#__PURE__*/React.createElement(AlanIntrusionInline, {
    tier: tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Maintenance note: if your Compass starts pointing at you instead of external anomalies, do not attempt to recalibrate. It's working correctly. You're the anomaly now.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`2. The Resonance Dampener [Chrono-Tech]`)))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-b-02",
    label: "ASSET CATALOGS · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Asset Catalogs",
    pageNum: basePage + 2,
    label: `ASSET CATALOGS · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Dampener was issued to Loop Authority field personnel between 2042 and 2049 and recalled in 2050 after seven of the wearers stopped reporting in. The recall was incomplete. Three units are still circulating. Each one is cold to the touch in a way that does not respond to ambient temperature. The hum is consistent across all three units, suggesting either a manufacturing standard or a shared resonance phenomenon the Authority does not document. A heavy metal collar worn around the neck. Cold to the touch. Hums at frequencies that make dogs bite.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Absorbs Paradox backlash. +1 ENDURE versus timeline stress. Once per session, ignore 1 point of Paradox gain.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Stabilizes local causality. +2 ENDURE. Ignore up to 2 Paradox per session. +1 to all rolls while in Anomaly state (Paradox 7-9).`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Creates a small pocket of null time. +3 ENDURE. Once per session, declare one scene exists outside normal causality — nothing in that scene generates Paradox. Afterward, mark all Stress.`))), /*#__PURE__*/React.createElement(AlanIntrusionInline, {
    tier: tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`It's a muzzle. The Paradox still goes somewhere. You don't want to know where.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`3. The Memory Crystallizer [Chrono-Tech]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A medical syringe containing liquid like mercury and moonlight. Temperature shifts based on emotional state.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Preserves fading memories temporarily. +1 ENDURE when resisting memory loss. Once per session, treat a Fading Memory as Active for one scene.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Can extract memories into physical form — small glowing crystals. +2 ENDURE. Extracted memories cannot fade but also cannot be accessed without re-injecting.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Asset Catalogs",
    pageNum: basePage + 3,
    label: `ASSET CATALOGS · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Can share memories with other Echoes or inject them into non-Displaced individuals. +3 ENDURE. Warning: recipient experiences full emotional context, temporal contamination, identity confusion, and possible spontaneous Displacement.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Used this on a version of my wife once. Timeline where we never met. Thought I'd give her our memories back — romantic gesture, real fairy tale nonsense. She Displaced three hours later. Never saw her again. The look on her face when she realized what I'd done will haunt me until I dissolve. Some gifts are curses with better packaging.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`4. The Paradox Lens [Chrono-Tech]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A Victorian-era monocle. Glass that isn't glass. Shows geometry that gives the user nightmares.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Reveals temporal fractures invisible to normal perception. +1 OBSERVE for investigation.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Shows the immediate future `), /*#__PURE__*/React.createElement("b", null, inline(`3-`)), inline(` 5 seconds ahead. +2 OBSERVE. Once per session, reroll one die after seeing the result.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Perceives multiple timeline branches simultaneously. +3 OBSERVE. Once per session, ask one What If question and receive a vision of an alternate outcome. Warning: viewing too many possibilities causes vertigo, nosebleeds, and temporary inability to remember which timeline you're in.`))), /*#__PURE__*/React.createElement(AlanIntrusionInline, {
    tier: tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`At Level 3, you'll start seeing the version of yourself that made different choices. Standing next to you. Staring. Judging. Sometimes screaming. They look exactly like you. That's the part that gets you.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-b-03",
    label: "ASSET CATALOGS · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Asset Catalogs",
    pageNum: basePage + 4,
    label: `ASSET CATALOGS · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`5. The Chronometric Stabilizer [Chrono-`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Tech]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A pocket watch that ticks backwards. Hands move at inconsistent speeds. Shows time zones that don't exist yet.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Extends time in stable locations. +1 SYNC when trying to remain in one era longer. +1 to Downtime recovery moves.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Slows local time perception during Crisis. +2 SYNC. Once per Crisis, take an additional Response action.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Temporarily anchors you to a specific moment. +3 SYNC. Prevents forced Displacement for one full scene. Cost: mark all Stress. After the anchor ends, immediate Displacement — no Navigation roll possible.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`I knew an Echo who used this at Level 3 to anchor himself to his daughter's wedding. Got to walk her down the aisle. Give the toast. Dance with her. Displacement hit the second the song ended. He landed in 1347 during the Black Death. Died there. Never jumped again. Worth it? He thought so. I'm not sure.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`6. The Displacement Trigger [Chrono-Tech]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You'll know when you find it.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Allows one attempted Precision Navigation per session without spending Downtime. +1 to Navigation rolls.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Forces Displacement when in danger. +2 Navigation. Once per session, trigger an emergency jump as a reaction to a threat — roll with -2 penalty but escape is guaranteed.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Asset Catalogs",
    pageNum: basePage + 5,
    label: `ASSET CATALOGS · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Targets specific moments with extreme precision. +3 Navigation. May attempt to return to previously visited eras and locations with +2 bonus. Warning: frequent use creates echo loops — you start meeting past versions of yourself.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`This is the one that will kill you. Not because it fails. Because it works. The temptation to go back, fix things, warn yourself, save someone — it will eat you alive. You'll create loops. You'll generate Paradox. You'll become your own haunting. I have this Asset at Level 3. I haven't used it in 90 years. Every morning I hold it and think about the moments I could return to. Every morning I put it back in my pocket.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Echo Trait Assets`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`7. Temporal Sensitivity [Echo Trait]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your nervous system has rewired. You feel time as pressure and temperature. Displacement feels like falling. Paradox tastes like copper and regret.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Always know exact date, time, and location. +1 Navigation. Sense Displacement 30 seconds before it occurs.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Perceive the temporal weight of moments — which events matter, which are fragile. +2 Navigation. Identify Nexus Points when present.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Sense other Echoes within one mile. +3 Navigation. Feel timeline scars — locations where Paradox damaged causality. Once per session, sense the correct timeline path during Crisis. Stress Effect: when overstressed, constant temporal vertigo — cannot distinguish present from near-future, hear the screams of divergent timelines.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-b-04",
    label: "ASSET CATALOGS · spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Asset Catalogs",
    pageNum: basePage + 6,
    label: `ASSET CATALOGS · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`At Level 3, you hear time. All the time. The tick of a billion moments happening simultaneously. Every choice creating splinters. It's beautiful. It's also madness. Most Echoes with Level 3 Temporal Sensitivity eventually take Scionfall up on their offer. I chose alcohol. Doesn't help, but at least I'm consistent across timelines.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`8. Chronal Resilience [Echo Trait]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your cells reject causality. Wounds heal wrong. Physical scars fade then reappear. You age in reverse on Tuesdays.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Recover from physical damage faster. +1 ENDURE versus physical harm. Halve recovery time from injuries.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Immune to temporal shock. +2 ENDURE. Displacement no longer costs Coherence. Age becomes optional — choose whether to age during any given era.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Survive normally fatal trauma by rejecting the timeline where you died. +3 ENDURE. Once per session, when reduced to 0 Coherence, set it to 1 and mark all Stress instead. Cost: gain a permanent Scar and lose one Memory of your choice.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`I've been killed fourteen times. Shot, stabbed, burned, drowned, poisoned, thrown from towers, caught in explosions. Once I was guillotined. The blade came down. My head came off. Then the timeline corrected. Turns out I never walked up those steps — the me who did was a different branch. I shed him like snakeskin. This Asset is useful. It's also how you stop being human, one piece at a time.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR"))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Asset Catalogs",
    pageNum: basePage + 7,
    label: `ASSET CATALOGS · p.${basePage + 7}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`9. Adaptive Linguistics [Echo Trait]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Exposure to divergent timelines has turned your brain into a universal translator. You dream in dead languages that no one ever remembers speaking.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Learn new languages within hours of immersion. +1 SYNC in any era. Understand (but not speak) any human language after hearing it for 10 minutes.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Speak any encountered language fluently. +2 SYNC. Read and write languages never studied. Understand subtext, idiom, and cultural context automatically.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Speak in Ur-Resonance — the fundamental frequency underlying all language. +3 SYNC. Once per session, issue a command in Ur-Resonance that NPCs must obey (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(` SYNC roll). Cost: mark all Stress, suffer nosebleed and temporary aphasia. Stress Effect: languages bleed together — you speak chimera-tongues that everyone understands and no one can reproduce.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Used Level 3 once. Told a Roman centurion to forget he saw me. He did. He also forgot his name, his family, and pretty much everything else. Ur-Resonance isn't the ancient language Zaaken's theorems predicted. It's more like language that predates the concept of selfhood. Use it carefully. Or don't. I'm not your dad.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`10. Quantum Perception [Echo Trait]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You see probability. Every person is a cloud of what-ifs. Every moment branches like lightning.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Perceive timeline instability. +1 OBSERVE when detecting Paradox or anomalies. See echoes of recent events (past 24 hours) in a location.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — View alternate timelines briefly. +2 OBSERVE. Once per scene, glimpse how a situation could unfold differently — ask one What If and receive a truthful vision.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-b-05",
    label: "ASSET CATALOGS · spread 5"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Asset Catalogs",
    pageNum: basePage + 8,
    label: `ASSET CATALOGS · p.${basePage + 8}`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Exist in quantum superposition briefly. +3 OBSERVE. Once per session, take two different actions simultaneously — roll for both, choose which branch collapses into reality. Cost: mark all Stress. Both versions of you remember both actions. Stress Effect: cannot tell which timeline is real. Paralyzed by infinite choice.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Chen's favorite. She thinks seeing probability makes you wise. Once you can see every branch, every outcome, every consequence, you realize every choice kills a thousand versions of yourself who wanted something different. Level 3 Quantum Perception makes you a guilty graveyard. Stay away from this one unless you want to dream about the roads you didn't take. All of them. Every night.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`11. Memory Recursion [Echo Trait]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your memories remember themselves. You recall recalling. Your nostalgia has nostalgia. Your mind is an Escher construct.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Level 1 ○○○ Access Fading Memories with full`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`clarity once per session without spending Coherence. +1 ENDURE when resisting memory loss.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Loop memories — replay them in real-time as if experiencing fresh. +2 ENDURE. Once per session, use a Lost Memory as if it were Active for one roll only. Cost: gain a permanent Scar afterward.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Memories propagate backwards through your personal timeline. +3 ENDURE. Once per session, implant a false memory you've always had — create a new Active Memory without replacing an existing one. Cost: mark all Stress. The false memory might be truer than the real ones. Stress Effect: cannot tell original memories from recalled memories from memories of memories.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Asset Catalogs",
    pageNum: basePage + 9,
    label: `ASSET CATALOGS · p.${basePage + 9}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`I used this at Level 3 to remember my wedding day. Replayed it 400 times. Every detail. The way light hit her dress. But each replay changes small things. Her dress was ivory. No, white. No, blue. We were married in June. In October. In April. I've polished the memory so smooth it's become fiction. I can't remember the original anymore.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`12. Paradox Intuition [Echo Trait]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You feel the universe's immune response. Paradox whispers to you in the voice of static and regret.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Sense when actions will generate Paradox before taking them. +1 OBSERVE. Taste timeline stability in a location.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Predict Paradox cascades. +2 OBSERVE. Once per session, spend 1 Coherence to prevent 1 Paradox from generating — you instinctively avoid the contradiction.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — Harvest Paradox — store contradictions in your body. +3 OBSERVE. Absorb up to 3 Paradox from your track into the Asset's Stress boxes. When released (mark all Stress), spend stored Paradox as raw temporal energy — each point grants +2 to one roll or powers specialized Chrono-Tech.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Stress Effect: stored Paradox leaks. Reality`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`glitches. NPCs forget conversations mid- sentence.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Church wanted to recruit me because of this one. Said I was compatible with the resonance of contradiction. I told them to buzz off. They said I'd come around eventually. They were right. At Level 3, you feel every contradiction in a 100-meter radius. Every lie. Every broken promise. The universe is screaming Paradox constantly and you're the only one who hears it. Sure it's painful. Channel it. Weaponize it.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-b-06",
    label: "ASSET CATALOGS · spread 6"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Asset Catalogs",
    pageNum: basePage + 10,
    label: `ASSET CATALOGS · p.${basePage + 10}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Temporal Anchor Assets`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`13. Heirloom Object [Temporal Anchor]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A physical item from your Origin Era, worn smooth by centuries of desperate gripping. The Rolex you stole from your best friend. The wedding ring you took off at the hotel. A fading photograph. An unsent letter. A bloodsoaked weapon.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — +1 ENDURE when your identity is challenged. Once per session, touch the object and restore 1 Coherence.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — The object begins appearing in multiple eras — you find it in medieval markets, Victorian auctions, future museums. +2 ENDURE. Use the object to anchor Navigation attempts to eras where it appears.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — The object exists in quantum superposition across all timelines. +3 ENDURE. Once per session, touching it allows you to access memories from alternate versions of yourself who also possessed it. Cost: mark all Stress. These memories may contradict your own. Stress Effect: the object starts changing identities — your grandfather's watch becomes your grandmother's locket becomes a stranger's compass.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Mine's a safety vest. Bright red, reflective strips, name tag that says 'A. Rose.' Found it in my truck the day I Displaced. Been wearing it for 300 years. I've seen it in Renaissance paintings. Medieval tapestries. Cave drawings of a figure in red. Future museums label it 'Artifact of Unknown Origin, Circa Always.' There's a framed photograph of me wearing it in a Baltic archive I'm not supposed to know about. The caption reads UNIDENTIFIED WITNESS, RIGA, 1941. I don't know if I'm carrying the vest or the vest is carrying me. At Level 3, I can feel every version of me who ever wore it. Thousands of Alan Roses across timelines, all clinging to the same stupid piece of polyester like it's a life raft. Maybe it is.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR"))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Asset Catalogs",
    pageNum: basePage + 11,
    label: `ASSET CATALOGS · p.${basePage + 11}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`14. Persistent Connection [Temporal Anchor]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A specific person, bloodline, place, or institution that recurs across multiple eras. A building that never quite falls. A song that predates notation.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — +1 SYNC when interacting with the Connection. Gain advantage on social rolls with descendants or iterations of the connected element.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 2 ○○○○`)), inline(` — Reliably locate iterations of the Connection in new eras. +2 SYNC. Once per session, call upon the Connection for aid — shelter, information, resources.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 3 ○○○○○`)), inline(` — The Connection exists across all timelines simultaneously. +3 SYNC. Communicate with past and future iterations.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Cost: each communication marks Stress. The`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Connection becomes aware they exist across time — which has consequences.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`There's a woman. I keep meeting her. Different names, different faces, but always her. The eyes give it away. 1888 London: factory worker named Mary. 1640 Florence: nun named Sister Lucia. 2179 Mars: engineer named Mir. Level 3 let me talk to all of them at once. Mir asked Mary what the sky looked like. Mary asked Lucia if God was real. Lucia asked me if love survived time. I didn't answer. They all remember each other now. They know they're echoes of the same pattern. I don't know if I saved them or damned them.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-b-07",
    label: "ASSET CATALOGS · spread 7"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Asset Catalogs",
    pageNum: basePage + 12,
    label: `ASSET CATALOGS · p.${basePage + 12}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`15. Origin Era Knowledge [Temporal Anchor]`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Expertise from your home time that persists across displacement. Your PhD, your trade skills, your cultural fluency.`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`Level 1 ○○○`)), inline(` — Permanent +2 bonus to any action directly related to your Origin Era's technology, culture, or history.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Level 2 ○○○○ Introduce Origin Era knowledge`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`to other timelines carefully. +2 OBSERVE or SYNC when teaching or sharing. +1 to Paradox reduction when working to minimize anachronistic contamination.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Level 3 ○○○○○ Manifest Origin Era`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`knowledge as physical reality. +3 bonus. Once per session, create an object or technique from your home time that shouldn't exist in the current era — it lasts one scene, then fades.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Cost: mark all Stress, gain +1 Paradox. Stress`)))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Effect: Origin knowledge becomes unreliable — you remember technologies that were never invented, cultural practices that never existed.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`I'm from 2043. Level 3 let me manifest a smartphone in 1920s Berlin. Just for one scene. Showed it to a cabaret singer as a magic trick. Three weeks later, she disappeared. Found her Chronicle in an Authority archive. She'd spent the rest of her life trying to invent what I showed her. Generated so much Paradox she splintered into a Stray Timeline and was erased. My Origin knowledge killed her. And I can't even remember her name.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR"))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Asset Catalogs",
    pageNum: basePage + 13,
    label: `ASSET CATALOGS · p.${basePage + 13}`
  })));
}
AppendixB.pages = 14;
Object.assign(window, {
  AppendixB
});
