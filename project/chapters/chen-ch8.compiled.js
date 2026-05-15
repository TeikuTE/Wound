function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chen-8 — LONG-TERM PLAY
function ChenCh8({
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
    id: "chen-8-opener",
    label: "LONG-TERM PLAY · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "LONG-TERM PLAY \xB7 opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-sigil"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "recursion",
    size: "sigil",
    stage: 0
  })), /*#__PURE__*/React.createElement(ChenChapterHead, {
    icon: "assets/chen-icon-handless-clock.svg",
    number: "VIII",
    title: "Long-Term Play"
  }))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-8-02",
    label: "LONG-TERM PLAY · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Long-Term Play",
    pageNum: basePage + 2,
    footnotes: /*#__PURE__*/React.createElement(FinderFootnotes, {
      notes: [{
        "n": 30,
        "text": "Campaign structures are good. Not going to use them. Saul and I are on the One True Run now. There is no other version of this campaign.",
        "act": 3,
        "late": false
      }]
    }),
    label: `LONG-TERM PLAY · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Campaign Structures`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body el-dropcap",
    "data-firstpara": true
  }, /*#__PURE__*/React.createElement("p", null, inline(`Temporal Echoes supports several campaign structures. They're not mutually exclusive — your campaign might move between them as circumstances change.`), /*#__PURE__*/React.createElement(FootnoteMarker, {
    n: 30,
    act: 3
  })), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "recursion",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`I followed every procedure. Every rule. Every preservation protocol in Chen's manual. I maintained Coherence above +5 for two centuries. I Locked my defining memory. I reinforced my Anchor quarterly. I wrote in the Chronicle every single day.`)), /*#__PURE__*/React.createElement("p", null, inline(`And this morning I read my first entry. The one I wrote on Day 1, right after Displacement. The one where I described my lab, my daughter, my life.`)), /*#__PURE__*/React.createElement("p", null, inline(`And I didn't recognize it.`)), /*#__PURE__*/React.createElement("p", null, inline(`Not that I'd forgotten — the mechanics were intact, the memory was still Active. But reading those words felt like reading someone else's diary. The person who wrote that entry cared about those things. The person reading it now... doesn't.`)), /*#__PURE__*/React.createElement("p", null, inline(`The Chronicle preserved everything Chen said it would.`)), /*#__PURE__*/React.createElement("p", null, inline(`It just couldn't preserve the person who cared about preserving it.`)), /*#__PURE__*/React.createElement("p", null, inline(`I think that might be the joke.`)), /*#__PURE__*/React.createElement("p", null, inline(`(No signature. No date. The handwriting changes halfway through.)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE RETURN (10-15 SESSIONS)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Goal: gather knowledge and resources to attempt a return Navigation. Milestones: increase Anchor Strength to 5, reduce Paradox to 0, acquire specific Chrono-Tech Assets, Lock your defining Memory, make the final Navigation roll (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 13`)), inline(`+).`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Long-Term Play",
    pageNum: basePage + 3,
    label: `LONG-TERM PLAY · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Addendum she didn't write:`)), /*#__PURE__*/React.createElement("p", null, inline(`End: Success means discovering home doesn't exist anymore. Failure means staying alive long enough to realize you didn't want to go back anyway.`)), /*#__PURE__*/React.createElement("p", null, inline(`I've met four Echoes who successfully Navigated home. Two dissolved on arrival (temporal rejection). One lasted three days before voluntary Displacement — couldn't stand what their era had become. The fourth is still there, I think. Last I heard they'd been committed for claiming to be a time traveler.`)), /*#__PURE__*/React.createElement("p", null, inline(`You want to go home? Fine. Here's what you'll find: Everyone you knew is dead or doesn't know you. Your life has been lived by someone else, or never lived at all. The version of you that belonged there is a ghost. And you're the thing haunting it.`)), /*#__PURE__*/React.createElement("p", null, inline(`Chen will help you try. She's good like that. I'm just telling you what you'll wish you'd known after.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE INVESTIGATOR (15-20 SESSIONS)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Goal: understand the nature of Displacement. Milestones: encounter other Echoes, discover Faction operations, piece together the mechanics of time, reach a major revelation about the origin of displacement. End: understanding achieved — but at what cost?`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE WITNESS (OPEN-ENDED)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Goal: document history, preserve what would otherwise be lost. Ongoing play focused on visiting key historical moments, recording events in your Chronicle, meeting historical figures, deciding when and if to intervene. Ends when the Chronicle feels complete, or when memory loss becomes too severe.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE SURVIVOR (CRISIS-FOCUSED)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Goal: simply endure as long as possible. High-difficulty mode: start with Anchor Strength 2, forced Displacement every `), /*#__PURE__*/React.createElement("b", null, inline(`2-3`)), inline(` scenes, higher Paradox generation. Ends when you finally dissolve, transform, or find unexpected peace.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "chen-8-03",
    label: "LONG-TERM PLAY · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Long-Term Play",
    pageNum: basePage + 4,
    label: `LONG-TERM PLAY · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Evolving Threats`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`FACTION ESCALATION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`As Paradox rises, Faction interference increases: Shadow (0-3) — unaware of you. Flux (4-6) — Scouts observe. Anomaly (7-9) — Agents intervene. Breach (10+) — active hunting, capture attempts, violence.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`TIMELINE INSTABILITY`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The more you interfere, the more unstable your surroundings: anachronisms appearing, people remembering multiple versions of events, physical impossibilities manifesting, other Echoes drawn to your disturbance.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`PERSONAL DEGRADATION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Track the Scars that accumulate. Note the way your personality shifted. What Anchor Connections are still standing? `), /*#__PURE__*/React.createElement("i", null, inline(`Can you still remember why you wanted to go home?`)))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Ending Your Story`)), /*#__PURE__*/React.createElement(ChenMarginaliaInline, null, /*#__PURE__*/React.createElement("p", null, inline(`The game ends when one of the following becomes true. I have no preference among them.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`RETURN ACHIEVED`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You finally reach home. Ask yourself: are you the same person who left? Then choose:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Return Intact: you maintain all Memories (even Fading), you return as close to your original self as possible, but you can never leave again — your Anchor binds you permanently. You're home. You're also trapped. And linearity can be painful after displacement.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Return Changed: you accept the Mutations and lost Memories, you return as a transformed version of yourself, the people you left behind don't fully recognize you. You're 'home,' but you're a stranger.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Long-Term Play",
    pageNum: basePage + 5,
    label: `LONG-TERM PLAY · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`DISSOLUTION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Coherence cannot be restored. Identity too fragmented. Final Chronicle entry: fragments, then silence.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ACCEPTANCE`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You choose to stop fighting. You make peace with displacement. You find a new Anchor in an adopted era. Chronicle entry: I was someone else. Now I am this.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`TRANSFORMATION`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You deliberately let go of your origin. You become something new. You retire your Echo to the timestream. Chronicle entry: I remember who I was. I choose to forget.`))), /*#__PURE__*/React.createElement("aside", {
    className: "el-alan-block",
    "data-tier": tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Chen wrote this chapter in 2038. I checked.`)), /*#__PURE__*/React.createElement("p", null, inline(`She still believed The Return was possible then. She had a route mapped out. She had Anchor reinforcement protocols and a list of likely landing eras and a plan for the first month back.`)), /*#__PURE__*/React.createElement("p", null, inline(`She doesn't write like this anymore.`)), /*#__PURE__*/React.createElement("p", null, inline(`If you reach Chapter 8 and you can still feel her certainty, hold it carefully. It was real once.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-alan-sign"
  }, "\u2014AR")))));
}
ChenCh8.pages = 6;
Object.assign(window, {
  ChenCh8
});
