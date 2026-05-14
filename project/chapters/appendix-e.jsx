// AUTO-GENERATED — appendix-e — CAPTIVITY VIGNETTES
function AppendixE({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="appendix-e-opener" label={"E · opener"}>
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="E · opener">
        <div className="el-appendix-opener">
          <div className="el-appendix-eyebrow">Appendix E</div>
          <h1 className="el-h1 el-appendix-opener__title">Captivity Vignettes</h1>
          <img src="assets/chen-chapter-rule.svg" alt="" className="el-appendix-rule" />
        </div>
      </ChPage>
    </Spread>
    <Spread id="appendix-e-01" label={"CAPTIVITY VIGNETTES · spread 1"}>
      <ChPage side="verso" runHead={"Captivity Vignettes"} pageNum={basePage + 0} label={`CAPTIVITY VIGNETTES · p.${basePage + 0}`}>
        <div className="el-body"><p>{inline(`Optional extended scenes for Faction capture.`)}</p></div>
        <div className="el-body"><p>{inline(`Optional extended scenes for Faction capture. Use these only if you want an extended solo roleplay of a specific capture, or if a quick resolution doesn't serve the story you're building. Otherwise: one roll is enough. The game doesn't require these.`)}</p></div>
        <h4 className="el-subsection">{inline(`Church: Harmonic Crucifixion`)}</h4>
        <div className="el-body"><p>{inline(`You've been captured by Church Templars. They bind you in a causal contradiction — forcing you to witness yourself failing to save someone you love, repeatedly, until your waveform breaks and the Paradox can be harvested. Before you begin, establish: which Memory are they targeting (preferably one connected to your Anchor)? Who are you failing to save in the loop? What is the exact moment of failure?`)}</p></div>
        <h4 className="el-subsection">{inline(`THE LOOP`)}</h4>
        <div className="el-body"><p>{inline(`Each iteration, you experience the full Memory up to the moment of failure. Then it resets. You remember all previous iterations. Roll `)}<b>{inline(`2d6`)}</b>{inline(` + ENDURE vs. `)}<b>{inline(`Difficulty 10`)}</b>{inline(` for each loop:`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Hold. Reduce your Paradox by 1 (they`)}</p></div>
        <div className="el-body"><p>{inline(`harvest it). Lose 1 Coherence. You may attempt escape after 3 loops.`)}</p></div>
        <div className="el-body"><p><b>{inline(`7-9`)}</b>{inline(` Weaken. They harvest 1 Paradox. Lose 1`)}</p></div>
        <div className="el-body"><p>{inline(`Coherence. Cannot escape yet.`)}</p></div>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Break. They harvest 2 Paradox. Lose 2`)}</p></div>
        <div className="el-body"><p>{inline(`Coherence. One Active Memory related to this scene becomes Fading. After 3 loops regardless of result, you may attempt escape. Roll `)}<b>{inline(`2d6`)}</b>{inline(` + DISRUPT or SYNC (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Break free. Templars release you —you're`)}</p></div>
        <div className="el-body"><p>{inline(`no longer useful. Take Scar: Phantom Screams.`)}</p></div>
        <div className="el-body"><p><b>{inline(`7-9`)}</b>{inline(` Escape. But they Mark you. They'll hunt you`)}</p></div>
        <div className="el-body"><p>{inline(`specifically next encounter.`)}</p></div>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Remain captured. Three more loops. Then`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Captivity Vignettes"} pageNum={basePage + 1} label={`CAPTIVITY VIGNETTES · p.${basePage + 1}`}>
        <div className="el-body"><p>{inline(`choose: automatic release (you're exhausted and useless), or undergo Lockstep Binding and become a Templar (character retired to NPC status).`)}</p></div>
        <h4 className="el-subsection">{inline(`Authority: Loop Containment Protocol`)}</h4>
        <div className="el-body"><p>{inline(`Reality has stuttered. The same scene repeats. You're trapped in a Clone Loop while the Authority runs their normalization protocol. Define the scene being looped: Where are you? What action are you attempting? What's the basic structure of the `)}<b>{inline(`5-10`)}</b>{inline(` minute loop?`)}</p></div>
        <h4 className="el-subsection">{inline(`ITERATION MECHANICS`)}</h4>
        <div className="el-body"><p>{inline(`Start Iteration Counter at 0. Each loop, increment by 1. The Difficulty of your escape attempt decreases as the pattern becomes clearer — but your memories are degrading. Roll `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE each iteration (`)}<b>{inline(`Difficulty 10`)}</b>{inline(` minus Iteration Count):`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Notice the pattern. You can attempt to`)}</p></div>
        <div className="el-body"><p>{inline(`break the loop. No memory loss this iteration.`)}</p></div>
        <div className="el-body"><p><b>{inline(`7-9`)}</b>{inline(` Something's wrong. Can't quite pin it`)}</p></div>
        <div className="el-body"><p>{inline(`down. Choose one Active Memory related to this scene — it becomes Fading.`)}</p></div>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Don't notice. The loop feels natural. One`)}</p></div>
        <div className="el-body"><p>{inline(`Active Memory becomes Fading, or if all are already Fading, one Fading becomes Lost.`)}</p></div>
        <div className="el-body"><p>{inline(`After noticing the pattern, attempt escape: Roll `)}<b>{inline(`2d6`)}</b>{inline(` + DISRUPT (`)}<b>{inline(`Difficulty 12`)}</b>{inline(` minus Iteration Count):`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Break the loop. Gain +3 Paradox. Loop`)}</p></div>
        <div className="el-body"><p>{inline(`shatters. You're free.`)}</p></div>
        <div className="el-body"><p><b>{inline(`7-9`)}</b>{inline(` Partially break. Released, but all memories`)}</p></div>
        <div className="el-body"><p>{inline(`from the looped scene are permanently Fading.`)}</p></div>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Fail. Loop continues. Lose 1 Coherence from`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="appendix-e-02" label={"CAPTIVITY VIGNETTES · spread 2"}>
      <ChPage side="verso" runHead={"Captivity Vignettes"} pageNum={basePage + 2} label={`CAPTIVITY VIGNETTES · p.${basePage + 2}`}>
        <div className="el-body"><p>{inline(`the effort. Try again next iteration. After 10 iterations: loop releases you automatically. All Active Memories become Fading. Reduce Paradox by `)}<b>{inline(`1d6`)}</b>{inline(`. Gain Scar: Recursive Doubt.`)}</p></div>
        <h4 className="el-subsection">{inline(`Scionfall: The Nullwave Protocol`)}</h4>
        <div className="el-body"><p>{inline(`A Scionfall Herald has manifested. The Nullwave field expands around you. Reality is draining of color, sound, meaning. The Herald offers cessation one final time. Define what you're trying to hold onto: a specific Memory, a person you're trying to reach, a task you're trying to complete, or your own sense of purpose.`)}</p></div>
        <h4 className="el-subsection">{inline(`THE DRAIN`)}</h4>
        <div className="el-body"><p>{inline(`Each round, describe one sense or aspect of reality fading — colors washing to grey, sounds becoming muffled, touch losing sensation, emotions flattening, meaning eroding from words. Roll `)}<b>{inline(`2d6`)}</b>{inline(` + ENDURE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Resist. Maintain coherence through will or`)}</p></div>
        <div className="el-body"><p>{inline(`passion. No loss this round. Herald observes, patient.`)}</p></div>
        <div className="el-body"><p><b>{inline(`7-9`)}</b>{inline(` Partially affected. Lose 1 Coherence. One`)}</p></div>
        <div className="el-body"><p>{inline(`Fading Memory becomes Lost. Herald asks again: Why continue?`)}</p></div>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` The Nullwave reaches deep. Lose 2 Coherence. Either one Active Memory becomes Fading, or you roll next round with `)}<b>{inline(`-2`)}</b>{inline(` penalty.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Critical Failure (snake eyes, 1+1):`)}</b>{inline(` you begin to accept. Next round, roll ENDURE with `)}<b>{inline(`-4`)}</b>{inline(` penalty. If you fail again, you choose cessation — game ends.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Escape:`)}</b>{inline(` Spend `)}<b>{inline(`3 Coherence`)}</b>{inline(` and invoke your Locked Memory — the one thing you absolutely cannot lose. This creates enough emotional mass to spike your waveform and disrupt the Nullwave. Herald withdraws. Gain Scar: `)}<i>{inline(`Hollow Moments`)}</i>{inline(`. Scionfall will return during your next Crisis.`)}</p></div>
        <div className="el-body"><p>{inline(`Alternatively: generate `)}<b>{inline(`+3 Paradox`)}</b>{inline(` minimum through an act so violent and contradictory that it disrupts the null field. Herald withdraws, disappointed.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Captivity Vignettes"} pageNum={basePage + 3} label={`CAPTIVITY VIGNETTES · p.${basePage + 3}`}>
        <div className="el-body"><p><b>{inline(`After 5 rounds:`)}</b>{inline(` Herald makes a final offer. One more round if refused. If you survive the 6th round, Herald withdraws — you've proven you're not ready for mercy yet.`)}</p></div>
        <hr className="el-section-rule" />
        <h4 className="el-subsection">{inline(`Chronoclasts: Decoherence Bloom Survival`)}</h4>
        <div className="el-body"><p>{inline(`A Chronoclast has detonated a Time Bomb. Local reality has entered superposition — multiple contradictory states existing simultaneously. You're lost in the chaos. Roll `)}<b>{inline(`d6`)}</b>{inline(` to determine the decoherence:`)}</p></div>
        <ul className="el-list"><li><b>{inline(`1`)}</b>{inline(` = Gravity Reversal (everything falls upward)`)}</li><li><b>{inline(`2`)}</b>{inline(` = Temporal Viscosity (time flows like molasses)`)}</li><li><b>{inline(`3`)}</b>{inline(` = Language Inversion (everyone speaks backwards)`)}</li><li><b>{inline(`4`)}</b>{inline(` = Object Phasing (solid matter becomes permeable)`)}</li><li><b>{inline(`5`)}</b>{inline(` = Causal Chaos (actions have random or delayed effects)`)}</li><li><b>{inline(`6`)}</b>{inline(` = Quantum Multiplication (everyone splits into 3 simultaneous versions)`)}</li></ul>
        <div className="el-body"><p>{inline(`Navigation: each action, roll `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Navigate expertly. Find a stable path. No`)}</p></div>
        <div className="el-body"><p>{inline(`cost.`)}</p></div>
        <div className="el-body"><p><b>{inline(`7-9`)}</b>{inline(` Progress, but exposure. Move toward`)}</p></div>
        <div className="el-body"><p>{inline(`escape but gain +1 Paradox.`)}</p></div>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Lost. Lose `)}<b>{inline(`1d3`)}</b>{inline(` Coherence. No progress.`)}</p></div>
        <div className="el-body"><p>{inline(`Every 3 rounds, the Chronoclast evaluates you. Roll `)}<b>{inline(`d6`)}</b>{inline(`: 1 = bored (they make it worse, another decoherence effect stacks), 2 = disappointed (they abandon you, escape becomes `)}<b>{inline(`Difficulty 8`)}</b>{inline(`), `)}<b>{inline(`3-4`)}</b>{inline(` = amused (they offer cryptic advice, +2 to next roll), 5 = impressed (they offer to help — automatic success on next roll, but you're Marked), 6 = inspired (they applaud and gift you an unstable Asset). After 5 successful navigation rolls (10+), you find the edge of the decoherence bloom and escape. Gain Scar: Probability Sight — you occasionally see multiple outcomes simultaneously, which causes vertigo and indecision.`)}</p></div>
      </ChPage>
    </Spread>
  </>);
}

AppendixE.pages = 4;
Object.assign(window, { AppendixE });
