// AUTO-GENERATED — chen-6 — CRISIS MANAGEMENT
function ChenCh6({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="chen-6-opener" label={"CRISIS MANAGEMENT · opener"}>
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="CRISIS MANAGEMENT · opener">
        <ChenChapterHead icon="assets/chen-icon-irregular-sine.svg" number="VI" title="Crisis Management" />
      </ChPage>
    </Spread>
    <Spread id="chen-6-02" label={"CRISIS MANAGEMENT · spread 2"}>
      <ChPage side="verso" runHead={"Crisis Management"} pageNum={basePage + 2} label={`CRISIS MANAGEMENT · p.${basePage + 2}`}>
        <aside className="el-reflection"><p>{inline(`Crises come in three phases.`)}</p><p>{inline(`Manifestation is the moment you recognize what is happening. Your chest tightening, the room narrowing. The feeling that the floor is not where you left it. You have a window — small, closing — to act before the body and the timeline both decide for you.`)}</p><p>{inline(`Escalation is when the system commits. You can no longer stop the cascade through will alone. You can spend resources to direct it, but that is about it. The water is rising; the question is which way you swim, not whether you can stay dry.`)}</p><p>{inline(`Resolution is what is left. You survive or you don't. You return changed or you do not return at all.`)}</p><p>{inline(`Three Crises live in this chapter. Each has its own physics. All three feel the same in the first thirty seconds.`)}</p><div className="el-sign">— EC</div></aside>
        <h4 className="el-subsection">{inline(`DESYNCHRONIZATION CRISIS (COHERENCE -6)`)}</h4>
        <div className="el-body el-dropcap" data-firstpara><p>{inline(`You've lost synchronization with the timestream. Trigger: Coherence drops to -6. Manifestation: roll on the Temporal Anomaly table — reality fractures around you.`)}</p></div>
        <h4 className="el-subsection">{inline(`PARADOX CRISIS (PARADOX 10+)`)}</h4>
        <div className="el-body"><p>{inline(`Timeline contradictions reach critical mass. Trigger: Paradox reaches 10. Manifestation: roll on the Timeline Collapse table — history rewrites itself.`)}</p></div>
        <h4 className="el-subsection">{inline(`IDENTITY CRISIS (ANCHOR STRENGTH 0)`)}</h4>
        <div className="el-body"><p>{inline(`Your connection to your origin has severed. Trigger: Anchor Strength drops to 0. Manifestation: you don't know who you are.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Crisis Management"} pageNum={basePage + 3} label={`CRISIS MANAGEMENT · p.${basePage + 3}`}>
        <aside className="el-reflection"><p>{inline(`When your Paradox reaches critical mass, you're not just causing problems. You're creating topological stress in the causal field. Reality can no longer absorb your contradictions smoothly.`)}</p><p>{inline(`The most dangerous state isn't when timelines are far apart. It's when they're forced to almost touch, almost reconcile — and can't. That's when reality shatters.`)}</p><p>{inline(`A Shattering isn't the timeline breaking. It's topological bifurcation — reality splitting into multiple causally-disjoint eigenstates. The original timeline ceases to exist, replaced by its fractured components.`)}</p><p>{inline(`This is survivable with proper Crisis management.`)}</p><div className="el-sign">— EC</div></aside>
        <aside className="el-alan-block" data-tier={tier}><p>{inline(`She never experienced a Shattering. I have. 37 times. I was the Shattering a couple of times.`)}</p><p>{inline(`The you reading this has survived at least one Shattering already. You just don't remember the timeline where you didn't make it.`)}</p><div className="el-alan-sign">—AR</div></aside>
        <h4 className="el-subsection">{inline(`Crisis Resolution Procedure`)}</h4>
        <h4 className="el-subsection">{inline(`PHASE 1: MANIFESTATION`)}</h4>
        <ol className="el-numlist"><li>{inline(`Roll on the appropriate Oracle table.`)}</li><li>{inline(`Describe the Crisis erupting.`)}</li><li>{inline(`Pay the immediate cost: Desynchronization — mark 1 Asset Stress. Paradox — one Active Memory becomes Fading. Identity — lose access to one Asset temporarily.`)}</li></ol>
        <h4 className="el-subsection">{inline(`PHASE 2: ESCALATION`)}</h4>
        <div className="el-body"><p>{inline(`The Crisis intensifies.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-6-03" label={"CRISIS MANAGEMENT · spread 3"}>
      <ChPage side="verso" runHead={"Crisis Management"} pageNum={basePage + 4} label={`CRISIS MANAGEMENT · p.${basePage + 4}`}>
        <ol className="el-numlist"><li>{inline(`Roll on the Timeline Shifts Oracle to determine how reality changes.`)}</li><li>{inline(`Roll on the Action Oracle to determine a crucial action required.`)}</li><li>{inline(`Apply escalating pressure: Desynchronization — temporal displacement becomes uncontrollable. Paradox — reality fluctuations create direct danger. Identity — fragmentation intensifies.`)}</li></ol>
        <div className="el-body"><p>{inline(`If Paradox `)}<b>{inline(`10+`)}</b>{inline(` (Breach): Faction Intervention occurs (see below).`)}</p></div>
        <h4 className="el-subsection">{inline(`PHASE 3: RESOLUTION`)}</h4>
        <div className="el-body"><p><b>{inline(`Make a Crisis Resolution Roll. Choose your approach:`)}</b></p></div>
        <div className="el-body"><p>{inline(`Desynchronization: `)}<b>{inline(`2d6`)}</b>{inline(` + ENDURE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`)`)}</p></div>
        <div className="el-body"><p>{inline(`Paradox: `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE or SYNC (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`)`)}</p></div>
        <div className="el-body"><p>{inline(`Identity: `)}<b>{inline(`2d6`)}</b>{inline(` + ENDURE, invoking your Locked Memory if you have one`)}</p></div>
        <div className="el-body"><p>{inline(`(`)}<b>{inline(`Difficulty 13`)}</b>{inline(`)`)}</p></div>
        <div className="el-body"><p>{inline(`Add modifiers for relevant Assets (+1 to +2), actions taken during Phase 2 (+1 per successful scene), and desperate sacrifices (burning Coherence, marking Asset Stress).`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Crisis Management"} pageNum={basePage + 5} label={`CRISIS MANAGEMENT · p.${basePage + 5}`}>
        <h4 className="el-subsection">{inline(`For Desynchronization and Paradox Crises:`)}</h4>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Full stabilization. Crisis ends. Restore some resources.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody><tr><td className="num">{`10-11`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Partial stabilization. Crisis ends but leaves a lasting consequence.`)}</td></tr><tr><td className="num">{`7-9`}</td><td className="oracle-name">{`Barely survive. Crisis ends but you suffer a major loss`}</td><td className="oracle-desc">{inline(`Memory, Asset, or Anchor Strength.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Crisis consumes you. Choose: Transform (retire Echo, become something else) or Dissolve (game over).`)}</p></div>
        <h4 className="el-subsection">{inline(`IDENTITY CRISIS RESOLUTION (DIFFICULTY 13)`)}</h4>
        <div className="el-body"><p>{inline(`This roll uses your Locked Memory — if you have one, you must invoke it, adding its +3 bonus. This is the moment you locked it for. If you have no Locked Memory, you face the void without an anchor.`)}</p></div>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Full Stabilization. You remember who you are. Crisis ends. Anchor Strength restored to 1. Gain Scar: Echo of Self — a permanent reminder of the time you almost stopped existing.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody><tr><td className="num">{`10-11`}</td><td className="oracle-name">{`Partial Stabilization. The Crisis ends, but you are permanently changed. Anchor Strength restored to 1. One of your Origin Details is permanently lost`}</td><td className="oracle-desc">{inline(`you remember having a daughter, but not her face. You remember the lab, but not what you were trying to prove.`)}</td></tr><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Barely Survive. You stabilize, but the Anchor is gone. Anchor Strength remains at 0. You can no longer gain Coherence from Chronicling or Anchor Reinforcement. You are untethered. This is how Alan started.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Dissolution. The final tether snaps. Your Echo dissolves into the timestream. Write your final Chronicle entry as fragments — not sentences, just images and half-words, fading at the edges. Then close the book.`)}</p></div>
        <div className="el-body"><p><b>{inline(`Faction Interventions (Paradox `)}</b>{inline(`10+`)}<b>{inline(`, Phase 2)`)}</b></p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-6-04" label={"CRISIS MANAGEMENT · spread 4"}>
      <ChPage side="verso" runHead={"Crisis Management"} pageNum={basePage + 6} label={`CRISIS MANAGEMENT · p.${basePage + 6}`}>
        <div className="el-body"><p>{inline(`When Paradox reaches `)}<b>{inline(`10+`)}</b>{inline(` and you enter Crisis, one Faction intervenes during Phase 2. Roll `)}<b>{inline(`d4`)}</b>{inline(` or choose based on narrative: 1 = Church, 2 = Authority, 3 = Scionfall, 4 = Chronoclasts. Or roll `)}<b>{inline(`d4`)}</b>{inline(` twice for Factional War — two Factions fight over you.`)}</p></div>
        <aside className="el-reflection"><p>{inline(`Of the four Interventions below, I have personally witnessed three. The Scionfall I have only ever reconstructed from witness testimony, because anyone present long enough to give me a useful account did not survive being present. Treat the Scionfall section accordingly. The numbers are my best estimate. The descriptions are everyone else's.`)}</p><div className="el-sign">— EC</div></aside>
        <h4 className="el-subsection">{inline(`CHURCH INTERVENTION`)}</h4>
        <div className="el-body"><p>{inline(`Templars arrive attempting capture for ritual use.`)}</p></div>
        <div className="el-body"><p>{inline(`Roll `)}<b>{inline(`2d6`)}</b>{inline(` + DISRUPT or ENDURE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Fight them off. Gain +2 Paradox from the violence. They retreat.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Escape but wounded. Lose 3 Coherence OR mark all Stress on one Asset.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Captured. Quick Resolution: suffer 1 Scar, lose 2 Coherence, reduce Paradox by 3, released. Or play the Vignette (Appendix E: Harmonic Crucifixion).`)}</p></div>
        <h4 className="el-subsection">{inline(`AUTHORITY INTERVENTION`)}</h4>
        <div className="el-body"><p>{inline(`Reality stutters. You're being trapped in a Clone Loop.`)}</p></div>
        <div className="el-body"><p>{inline(`Roll `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Notice the pattern immediately. Break the loop before it stabilizes. No cost.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Trapped for `)}<b>{inline(`1d6`)}</b>{inline(` iterations. Each iteration, one Active Memory becomes Fading. Then escape.`)}</td></tr></tbody></table>
      </ChPage>
      <ChPage side="recto" runHead={"Crisis Management"} pageNum={basePage + 7} label={`CRISIS MANAGEMENT · p.${basePage + 7}`}>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Fully looped. Quick Resolution: lose all Active Memories from the scene (become Fading), reduce Paradox by `)}<b>{inline(`1d6`)}</b>{inline(`, loop releases you. Or play the Vignette (Appendix E: Loop Containment Protocol).`)}</p></div>
        <h4 className="el-subsection">{inline(`SCIONFALL INTERVENTION`)}</h4>
        <div className="el-body"><p>{inline(`Herald manifests. Nullwave field expands. Colors drain.`)}</p></div>
        <div className="el-body"><p>{inline(`Roll `)}<b>{inline(`2d6`)}</b>{inline(` + ENDURE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Resist through sheer emotional intensity. Generate +3 Paradox to disrupt Nullwave. Herald withdraws.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Partially affected. Lose 2 Coherence, one Fading Memory becomes Lost. Herald offers one more time, then leaves.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Succumbing. Accept cessation (game ends peacefully), OR spend 3 Coherence + invoke Locked Memory to resist (gain Scar: Hollow Moments), OR play the Vignette (Appendix E: The Nullwave Protocol).`)}</p></div>
        <h4 className="el-subsection">{inline(`CHRONOCLAST INTERVENTION`)}</h4>
        <div className="el-body"><p>{inline(`Time Bomb detonates. Local reality enters superposition.`)}</p></div>
        <div className="el-body"><p>{inline(`Roll `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Navigate the chaos expertly. Chronoclast applauds. They give you an unstable Asset of your choice.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Escape but contaminated. Gain +2 Paradox, suffer -1 Coherence from exposure.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Lost in decoherence. Quick Resolution: lose `)}<b>{inline(`1d6`)}</b>{inline(` Coherence, gain Scar: Probability Sight, Chronoclast loses interest. Or play the Vignette (Appendix E: Decoherence Bloom Survival).`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="chen-6-05" label={"CRISIS MANAGEMENT · spread 5"}>
      <ChPage side="verso" runHead={"Crisis Management"} pageNum={basePage + 8} label={`CRISIS MANAGEMENT · p.${basePage + 8}`}>
        <h4 className="el-subsection">{inline(`WHEN TWO CRISES COLLIDE`)}</h4>
        <div className="el-body"><p>{inline(`If you trigger both a Desynchronization Crisis (Coherence -6) and a Paradox Crisis (Paradox 10+) at the same moment, you do not resolve them separately. They collapse into a single event.`)}</p></div>
        <div className="el-body"><p>{inline(`This is a Compound Crisis. Run the three phases once, but:`)}</p></div>
        <div className="el-body"><p>{inline(`Phase 1: Pay both immediate costs — mark 1 Asset Stress AND one`)}</p></div>
        <div className="el-body"><p>{inline(`Active Memory becomes Fading.`)}</p></div>
        <div className="el-body"><p>{inline(`Phase 2: Both Faction escalation tables apply — roll `)}<b>{inline(`d4`)}</b>{inline(` twice. Two`)}</p></div>
        <div className="el-body"><p>{inline(`Factions arrive. They are not coordinating.`)}</p></div>
        <div className="el-body"><p>{inline(`Phase 3: Difficulty increases to 12 for all resolution rolls. The`)}</p></div>
        <div className="el-body"><p>{inline(`Locked Memory bonus still applies.`)}</p></div>
        <h4 className="el-subsection">{inline(`Results on a Compound Crisis:`)}</h4>
        <div className="el-body"><p><b>{inline(`12+`)}</b>{inline(` Full stabilization. Both Crises end. Restore 2 Coherence and reduce Paradox by 2.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><colgroup><col className="col-num"/><col className="col-name"/><col className="col-desc"/></colgroup><tbody><tr><td className="num">{`10-11`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`One Crisis resolves; the other lingers. Choose which. The lingering one triggers again at the start of your next session.`)}</td></tr><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Barely survive. Choose two from: lose a Memory, lose an Asset, reduce Anchor Strength by 1, gain a Mutation.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Dissolution or Terminal Transformation. No partial options.`)}</p></div>
        <div className="el-body"><p>{inline(`A Compound Crisis means the Chronoverse has decided you are not a nuisance. You are a problem.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Crisis Management"} pageNum={basePage + 9} label={`CRISIS MANAGEMENT · p.${basePage + 9}`}>
        <aside className="el-reflection"><p>{inline(`A point I should have raised earlier. When causality attacks you from more than one direction, such as hitting Breach Paradox and Crisis Coherence, accruing multiple Faction Marks, you will have a difficult time maintaining. The deck is quantitatively stacked against you.`)}</p><p>{inline(`The only way out is to reassess the choices you've deferred. Accept an Offer. Burn your Locked Memory. Take the Holding Action. Allow a Mutation.`)}</p><p>{inline(`Echoes who refuse all options will not be able to roll their way out.`)}</p><div className="el-sign">— EC</div></aside>
        <AlanIntrusionInline tier={tier}><p>{inline(`Nietzsche's eternal return was just a Shattering with good PR. Nietzsche thought saying yes was strength. He never met someone who'd actually had to do the infinite life thing.`)}</p></AlanIntrusionInline>
        <aside className="el-reflection"><p>{inline(`To the reader who has been wondering.`)}</p><p>{inline(`Alan and I were colleagues. Briefly. We did not part on good terms.`)}</p><div className="el-sign">— EC</div></aside>
        <Zaaken><i>{inline(`Superesse.`)}</i></Zaaken>
      </ChPage>
    </Spread>
  </>);
}

ChenCh6.pages = 10;
Object.assign(window, { ChenCh6 });
