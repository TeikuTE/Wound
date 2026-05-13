function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — chapter/alan ch6 — TERMINAL
function AlanCh6({
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
    id: "alan-6-01",
    label: "TERMINAL \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    label: "Alan Ch 6 \xB7 Opener"
  }, /*#__PURE__*/React.createElement(AlanChapterHead, {
    entry: 6,
    sub: "TERMINAL",
    coord: "[TEMPORAL LOG // ENTRY_006 // ERA: 49 // NODE: TERMINAL]"
  }), /*#__PURE__*/React.createElement(AlanFragment, {
    top: 170,
    right: 4,
    rotate: -3,
    size: 9
  }, "// 2287.264.0001"))), /*#__PURE__*/React.createElement(Spread, {
    id: "alan-6-02",
    label: "TERMINAL \xB7 spread 2"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    runHead: "ENTRY_006",
    pageNum: basePage + 2,
    coordStamp: "[LOG // ENTRY_006]",
    label: `Alan · TERMINAL · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "al-h2"
  }, "// CONFIGURATIONS"), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`The four configurations below are end-states. They are not character classes. They are eulogies that the system has not yet finished writing. THE VESSEL. The Vessel is the end-state of an Echo who has spent everything they had on staying useful. The Vessel still walks, still solves problems, still completes objectives at a rate that exceeds most Echoes who are fully present. What is missing is the part of them that would have been able to say why any of it mattered. Vessels are functional. They are not haunted, because there is nothing left to haunt. THE PARADOX ENGINE. The Paradox Engine is what happens when an Echo accepts the contradiction instead of resolving it. The Engine generates new paradoxes faster than the timeline can absorb them. They are extraordinarily powerful, but there's a price of course. Other Echoes who spend time near the Engine **6-** You're the art now. They add you to something. What, you don't know. Your next Paradox generation roll produces double the normal amount. This lasts until Repreival. **12+** Stabilize completely. Restore some resources. **10-11** Stabilize with consequences. Fracture ends. **7-9** Barely survive. Major loss —Scar, Asset, or Corruption Vector decrease. **6-** Configuration fails. Choose: Transform or Dissolve.`)))), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    runHead: "ENTRY_006",
    pageNum: basePage + 3,
    coordStamp: "[LOG // ENTRY_006]",
    label: `Alan · TERMINAL · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`find their own coherence eroding. The Engine destabilizes everything and anyone in proximity, so survival is guaranteed, but connection is impossible. THE HOLLOWED. The Hollowed is the Echo who chose Scionfall's mercy and survived it anyway. Hollowed have memory and consciousness intact, but no will to use either. Hollows are present, but that's about it. A Hollow will consent to whatever is asked of them. Hollows are at peace, but in the way that corpses are at peace. THE DISSOLVED. The Dissolved is the Revel's favorite. Dissolved exist in superposition across multiple timeline branches, none of them the dominant strand. They are technically free. They are also not coherent enough to enjoy the freedom. When you encounter a Dissolved, you encounter four or five of them at once, each one an expression of who the Echo would have been on a path that was never taken. The encounter is beautiful. The encounter is also a person who was once a single thing, distributed thinly across versions of themselves, none of which is enough. When Corruption Vector reaches 0, you stop being human. What you become depends on your trajectory. These are not transcendence states. They are what survival looks like when you've optimized for nothing else. Are they victories? Tragedies? That depends on what you think survival is worth. Final Transformations WEAPONIZED →THE PARADOX ENGINE You've become walking instability. Immune to contamination because you are contamination. Mechanics: immune to Paradox effects, can spend 2 Coherence to generate +1 Paradox in a target, Faction Agents flee on sight. Cost: everyone flees on sight. You're functionally alone. HOLLOWED →THE VESSEL Perfect adaptability through complete amnesia. You can be anyone because you're no one. Mechanics: inhabit any era without Coherence cost, adopt any identity instantly (perfect SYNC disguise), no Scars can fade. Cost: you don't remember why any identity matters. Including your own. FRAGMENTED →THE SWARM You exist in multiple timelines simultaneously. Mechanics: exist in 1d6 timelines simultaneously, roll twice on any roll and choose the best result, sacrifice one fragment to auto-succeed (that version dies, you continue). Cost: which one is really you? They're diverging. Eventually they'll have different goals. You'll be your own enemy.`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "alan-6-03",
    label: "TERMINAL \xB7 spread 3"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    runHead: "ENTRY_006",
    pageNum: basePage + 4,
    coordStamp: "[LOG // ENTRY_006]",
    label: `Alan · TERMINAL · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`RECURSIVE →THE OUROBOROS You've become a closed causal loop. Mechanics: communicate with past/future versions during Crisis, summon past-you as an ally once per session (with your stats from 5 sessions ago). Cost: you're trapped in your own timeline. Can't grow because every action feeds back. INFECTIOUS →THE CARRIER You spread instability to everyone you touch. Mechanics: any NPC you interact with gains +1 Paradox, spend 3 Coherence to force Displacement on a target, Faction Agents prioritize you above all others. Cost: everyone you care about becomes contaminated. You're contagion. You're alone. TRANSCENDENT →THE OBSERVER Four-dimensional consciousness. Mechanics: immune to Faction intervention (they can't perceive you correctly), rewrite one roll per session to any result, Navigate at will without rolling. Cost: you can't meaningfully interact with three-dimensional beings anymore. You're a ghost watching through glass. The Exit Question Before you stabilize into your Terminal Configuration, answer one question in writing: What was the last thing you cared about that wasn't useful? A person. A place. A value. A ritual. Something you did because it mattered, not because it worked. Write it in your Log. Then choose one:`))), /*#__PURE__*/React.createElement("h2", {
    className: "al-h2"
  }, "// PRESERVE IT"), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`It becomes your Final Anchor. You may end the game with one scene where you protect, honor, or return to it. Cost: you Dissolve immediately afterward. The preservation costs your existence. This is one ending — meaning preserved, self sacrificed.`))), /*#__PURE__*/React.createElement("h2", {
    className: "al-h2"
  }, "// DELETE IT"), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`You stabilize into your Terminal Configuration completely. Cost: you can never again take SYNC actions that aren't manipulative. All connection becomes transaction. Rename SYNC to INTERFACE at Corruption Vector 0. This is the other ending — self preserved, meaning sacrificed. There is no third option. You choose which you keep: the meaning or the self. Not both.`)))), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    runHead: "ENTRY_006",
    pageNum: basePage + 5,
    coordStamp: "[LOG // ENTRY_006]",
    label: `Alan · TERMINAL · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '5mm 0',
      paddingLeft: '4mm',
      fontFamily: 'var(--ff-mono)',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: '9pt',
      lineHeight: 1.4,
      color: 'var(--al-typewriter)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, inline(`I reached Corruption Vector 0 in 2287. The Exit Question came. I wrote: Sarah's laugh. The way she sounded when something was genuinely funny — not polite-funny. I chose Delete. I don't remember what her laugh sounded like anymore. I remember that I should remember. I remember it mattered. But the sound itself? Gone. The feeling of why it mattered? Gone. I'm still here. Still operational. Still moving. I don't know if that counts for something. But I'm still broadcasting.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '2mm',
      fontSize: '8.5pt'
    }
  }, "// AR")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '5mm -2mm',
      background: 'var(--el-parchment)',
      color: 'var(--el-forest)',
      fontFamily: 'var(--ff-mono)',
      fontSize: '9pt',
      lineHeight: 1.4,
      padding: '4mm 6mm',
      transform: 'rotate(0.6deg)',
      boxShadow: '2px 3px 10px rgba(13,15,18,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--ff-mono)',
      fontWeight: 300,
      fontSize: '7pt',
      color: 'var(--al-steel)',
      marginBottom: '2mm',
      letterSpacing: '0.04em'
    }
  }, "Dr. Eleanor Chen // [DATE UNKNOWN]"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, inline(`Alan. You wrote that in 2287. It's 2025 now. You've been broadcasting for 58 years without remembering why the signal matters. That's not victory. That's just noise that used to be a person. I'm sorry. I'm so sorry that survival cost you this.`))), /*#__PURE__*/React.createElement("h2", {
    className: "al-h2"
  }, "// CLOSING NOTES"), /*#__PURE__*/React.createElement(AlanBody, null, /*#__PURE__*/React.createElement("p", null, inline(`From Dr. Eleanor Chen If you're reading this manual, you've survived your first displacement. That means you have the capacity for survival. Whether you have the capacity for preservation remains to be seen. Remember: you are not powerless. The mathematics of displacement follow rules. Learn them. Master them. Use them to maintain your identity against the grinding entropy of time. The Factions will offer you solutions. Some will seem tempting. All of them are traps. Trust your Anchor. Trust your Chronicle. Trust the mathematics.`))))));
}
AlanCh6.pages = 6;
Object.assign(window, {
  AlanCh6
});