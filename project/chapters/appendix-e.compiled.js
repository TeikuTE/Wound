function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — appendix-e — CAPTIVITY VIGNETTES
function AppendixE({
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
    id: "appendix-e-opener",
    label: "E · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "E \xB7 opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-eyebrow"
  }, "Appendix E"), /*#__PURE__*/React.createElement("h1", {
    className: "el-h1 el-appendix-opener__title"
  }, "Captivity Vignettes"), /*#__PURE__*/React.createElement("img", {
    src: "assets/chen-chapter-rule.svg",
    alt: "",
    className: "el-appendix-rule"
  })))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-e-01",
    label: "CAPTIVITY VIGNETTES · spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Captivity Vignettes",
    pageNum: basePage + 0,
    label: `CAPTIVITY VIGNETTES · p.${basePage + 0}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Optional extended scenes for Faction capture.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Optional extended scenes for Faction capture. Use these only if you want an extended solo roleplay of a specific capture, or if a quick resolution doesn't serve the story you're building. Otherwise: one roll is enough. The game doesn't require these.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Church: Harmonic Crucifixion`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You've been captured by Church Templars. They bind you in a causal contradiction — forcing you to witness yourself failing to save someone you love, repeatedly, until your waveform breaks and the Paradox can be harvested. Before you begin, establish: which Memory are they targeting (preferably one connected to your Anchor)? Who are you failing to save in the loop? What is the exact moment of failure?`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE LOOP`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Each iteration, you experience the full Memory up to the moment of failure. Then it resets. You remember all previous iterations. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + ENDURE vs. `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(` for each loop:`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Hold. Reduce your Paradox by 1 (they`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`harvest it). Lose 1 Coherence. You may attempt escape after 3 loops.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(` Weaken. They harvest 1 Paradox. Lose 1`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Coherence. Cannot escape yet.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Break. They harvest 2 Paradox. Lose 2`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Coherence. One Active Memory related to this scene becomes Fading. After 3 loops regardless of result, you may attempt escape. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + DISRUPT or SYNC (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Break free. Templars release you —you're`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`no longer useful. Take Scar: Phantom Screams.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(` Escape. But they Mark you. They'll hunt you`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`specifically next encounter.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Remain captured. Three more loops. Then`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Captivity Vignettes",
    pageNum: basePage + 1,
    label: `CAPTIVITY VIGNETTES · p.${basePage + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`choose: automatic release (you're exhausted and useless), or undergo Lockstep Binding and become a Templar (character retired to NPC status).`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Authority: Loop Containment Protocol`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Reality has stuttered. The same scene repeats. You're trapped in a Clone Loop while the Authority runs their normalization protocol. Define the scene being looped: Where are you? What action are you attempting? What's the basic structure of the `), /*#__PURE__*/React.createElement("b", null, inline(`5-10`)), inline(` minute loop?`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ITERATION MECHANICS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Start Iteration Counter at 0. Each loop, increment by 1. The Difficulty of your escape attempt decreases as the pattern becomes clearer — but your memories are degrading. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE each iteration (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(` minus Iteration Count):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Notice the pattern. You can attempt to`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`break the loop. No memory loss this iteration.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(` Something's wrong. Can't quite pin it`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`down. Choose one Active Memory related to this scene — it becomes Fading.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Don't notice. The loop feels natural. One`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Active Memory becomes Fading, or if all are already Fading, one Fading becomes Lost.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`After noticing the pattern, attempt escape: Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + DISRUPT (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 12`)), inline(` minus Iteration Count):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Break the loop. Gain +3 Paradox. Loop`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`shatters. You're free.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(` Partially break. Released, but all memories`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`from the looped scene are permanently Fading.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Fail. Loop continues. Lose 1 Coherence from`))))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-e-02",
    label: "CAPTIVITY VIGNETTES · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Captivity Vignettes",
    pageNum: basePage + 2,
    label: `CAPTIVITY VIGNETTES · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`the effort. Try again next iteration. After 10 iterations: loop releases you automatically. All Active Memories become Fading. Reduce Paradox by `), /*#__PURE__*/React.createElement("b", null, inline(`1d6`)), inline(`. Gain Scar: Recursive Doubt.`)), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "recursion",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Scionfall: The Nullwave Protocol`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A Scionfall Herald has manifested. The Nullwave field expands around you. Reality is draining of color, sound, meaning. The Herald offers cessation one final time. Define what you're trying to hold onto: a specific Memory, a person you're trying to reach, a task you're trying to complete, or your own sense of purpose.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`THE DRAIN`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Each round, describe one sense or aspect of reality fading — colors washing to grey, sounds becoming muffled, touch losing sensation, emotions flattening, meaning eroding from words. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + ENDURE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Resist. Maintain coherence through will or`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`passion. No loss this round. Herald observes, patient.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(` Partially affected. Lose 1 Coherence. One`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Fading Memory becomes Lost. Herald asks again: Why continue?`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` The Nullwave reaches deep. Lose 2 Coherence. Either one Active Memory becomes Fading, or you roll next round with `), /*#__PURE__*/React.createElement("b", null, inline(`-2`)), inline(` penalty.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Critical Failure (snake eyes, 1+1):`)), inline(` you begin to accept. Next round, roll ENDURE with `), /*#__PURE__*/React.createElement("b", null, inline(`-4`)), inline(` penalty. If you fail again, you choose cessation — game ends.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`Escape:`)), inline(` Spend `), /*#__PURE__*/React.createElement("b", null, inline(`3 Coherence`)), inline(` and invoke your Locked Memory — the one thing you absolutely cannot lose. This creates enough emotional mass to spike your waveform and disrupt the Nullwave. Herald withdraws. Gain Scar: `), /*#__PURE__*/React.createElement("i", null, inline(`Hollow Moments`)), inline(`. Scionfall will return during your next Crisis.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Alternatively: generate `), /*#__PURE__*/React.createElement("b", null, inline(`+3 Paradox`)), inline(` minimum through an act so violent and contradictory that it disrupts the null field. Herald withdraws, disappointed.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Captivity Vignettes",
    pageNum: basePage + 3,
    label: `CAPTIVITY VIGNETTES · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`After 5 rounds:`)), inline(` Herald makes a final offer. One more round if refused. If you survive the 6th round, Herald withdraws — you've proven you're not ready for mercy yet.`))), /*#__PURE__*/React.createElement("hr", {
    className: "el-section-rule"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Chronoclasts: Decoherence Bloom Survival`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`A Chronoclast has detonated a Time Bomb. Local reality has entered superposition — multiple contradictory states existing simultaneously. You're lost in the chaos. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`d6`)), inline(` to determine the decoherence:`))), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`1`)), inline(` = Gravity Reversal (everything falls upward)`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`2`)), inline(` = Temporal Viscosity (time flows like molasses)`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`3`)), inline(` = Language Inversion (everyone speaks backwards)`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`4`)), inline(` = Object Phasing (solid matter becomes permeable)`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`5`)), inline(` = Causal Chaos (actions have random or delayed effects)`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`6`)), inline(` = Quantum Multiplication (everyone splits into 3 simultaneous versions)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Navigation: each action, roll `), /*#__PURE__*/React.createElement("b", null, inline(`2d6`)), inline(` + OBSERVE (`), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 10`)), inline(`):`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`10+`)), inline(` Navigate expertly. Find a stable path. No`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`cost.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`7-9`)), inline(` Progress, but exposure. Move toward`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`escape but gain +1 Paradox.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, inline(`6-`)), inline(` Lost. Lose `), /*#__PURE__*/React.createElement("b", null, inline(`1d3`)), inline(` Coherence. No progress.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Every 3 rounds, the Chronoclast evaluates you. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`d6`)), inline(`: 1 = bored (they make it worse, another decoherence effect stacks), 2 = disappointed (they abandon you, escape becomes `), /*#__PURE__*/React.createElement("b", null, inline(`Difficulty 8`)), inline(`), `), /*#__PURE__*/React.createElement("b", null, inline(`3-4`)), inline(` = amused (they offer cryptic advice, +2 to next roll), 5 = impressed (they offer to help — automatic success on next roll, but you're Marked), 6 = inspired (they applaud and gift you an unstable Asset). After 5 successful navigation rolls (10+), you find the edge of the decoherence bloom and escape. Gain Scar: Probability Sight — you occasionally see multiple outcomes simultaneously, which causes vertigo and indecision.`))))));
}
AppendixE.pages = 4;
Object.assign(window, {
  AppendixE
});
