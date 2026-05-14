// AUTO-GENERATED — chen-7 — ADVANCED SYSTEMS
function ChenCh7({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="chen-7-opener" label={"ADVANCED SYSTEMS · opener"}>
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="ADVANCED SYSTEMS · opener">
        
        <ChenChapterHead icon="assets/chen-icon-broken-compass.svg" number="VII" title="Advanced Systems" />
      </ChPage>
    </Spread>
    <Spread id="chen-7-02" label={"ADVANCED SYSTEMS · spread 2"}>
      <ChPage side="verso" runHead={"Advanced Systems"} pageNum={basePage + 2} label={`ADVANCED SYSTEMS · p.${basePage + 2}`}>
        <h4 className="el-subsection">{inline(`THE HOLDING ACTION`)}</h4>
        <div className="el-body el-dropcap" data-firstpara><p>{inline(`Once per session, when you would suffer a consequence you cannot afford to bear in this scene, you may declare the Holding Action. The consequence does not vanish. It defers — by exactly one scene, no longer.`)}<FootnoteMarker n={28} act={3} /></p><span className="gly-inline-row"><Glyph name="burden" size="inline" stage={0} /></span></div>
        <div className="el-body"><p>{inline(`The Holding Action is not a tool. It is a refusal. You are telling the timeline that this is not the right moment. The timeline accepts this once. It does not forget you asked. The deferred consequence will arrive, intensified, in the scene that follows. You buy yourself the room to handle it on better ground; you do not avoid handling it.`)}</p></div>
        <div className="el-body"><p>{inline(`The Holding Action cannot be repeated until you have completed a Repreival.* *I have used the Holding Action twice in fifteen years. Once it saved someone. Once it cost me the person I used it to save. I will not tell you which was which. — EC`)}</p></div>
        <h4 className="el-subsection">{inline(`Reducing Paradox`)}</h4>
        <h4 className="el-subsection">{inline(`STABILIZE REALITY MOVE (2 COHERENCE)`)}</h4>
        <div className="el-body"><p>{inline(`Spend 2 Coherence, then roll `)}<b>{inline(`2d6`)}</b>{inline(` + SYNC or OBSERVE:`)}</p></div>
        <div className="el-resolution"><div className="resolution-row"><div className="resolution-roll">{`10+`}</div><div className="resolution-body"><div className="resolution-text">{inline(`Reduce Paradox by `)}<b>{inline(`1d6`)}</b>{inline(`.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-text">{inline(`Reduce Paradox by `)}<b>{inline(`1d3`)}</b>{inline(`.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-title">{inline(`No reduction`)}</div><div className="resolution-text">{inline(`But you don't generate more.`)}</div></div></div></div>
        <FinderFootnotes notes={[{"n":28,"text":"The Holding Action is the most honest mechanic in the book. You can refuse the consequence once. Once. Then the bill comes due. I have used it twice this week in real life.","act":3,"late":false}]} />
      </ChPage>
      <ChPage side="recto" runHead={"Advanced Systems"} pageNum={basePage + 3} label={`ADVANCED SYSTEMS · p.${basePage + 3}`}>
        <h4 className="el-subsection">{inline(`OTHER METHODS`)}</h4>
        <div className="el-body"><p>{inline(`Accept Memory alterations (let false memories replace true ones): -1`)}</p></div>
        <div className="el-body"><p>{inline(`Paradox per major alteration`)}</p></div>
        <div className="el-body"><p>{inline(`Work to undo changes you caused`)}</p></div>
        <div className="el-body"><p>{inline(`Spend time in an era without interference during Downtime`)}</p></div>
        <div className="el-body"><p>{inline(`Accept Faction offers from Church or Authority`)}</p></div>
        <h4 className="el-subsection">{inline(`Anchor Reinforcement`)}</h4>
        <h4 className="el-subsection">{inline(`REINFORCE ANCHOR MOVE (2 COHERENCE + ROLL)`)}</h4>
        <div className="el-body"><p>{inline(`Spend 2 Coherence and spend time connecting to your origin — meditation, ritual, reading your Chronicle aloud. Roll `)}<b>{inline(`2d6`)}</b>{inline(` + ENDURE (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`):`)}</p></div>
        <div className="el-resolution"><div className="resolution-row"><div className="resolution-roll">{`12+`}</div><div className="resolution-body"><div className="resolution-title">{inline(`Anchor Strength increases by 1 (max 5)`)}</div><div className="resolution-text">{inline(`Gain +2 Coherence.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`10-11`}</div><div className="resolution-body"><div className="resolution-text">{inline(`Anchor Strength increases by 1 (max 5).`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`7-9`}</div><div className="resolution-body"><div className="resolution-text">{inline(`Anchor stabilizes but doesn't increase.`)}</div></div></div><div className="resolution-row"><div className="resolution-roll">{`6-`}</div><div className="resolution-body"><div className="resolution-title">{inline(`The memory was a lie`)}</div><div className="resolution-text">{inline(`Decrease Anchor Strength by 1.`)}</div></div></div></div>
        <aside className="el-reflection"><p>{inline(`Why two different stats? Downtime maintenance uses SYNC because you are reconnecting emotionally — revisiting the people and places that anchor your waveform. The standalone Reinforce move uses ENDURE because you are rebuilding the connection rather than visiting it. One is memory. The other is labor. The distinction matters in the same way the distinction between reading about a country and walking through it matters.`)}</p><div className="el-sign">— EC</div></aside>
      </ChPage>
    </Spread>
    <Spread id="chen-7-03" label={"ADVANCED SYSTEMS · spread 3"}>
      <ChPage side="verso" runHead={"Advanced Systems"} pageNum={basePage + 4} label={`ADVANCED SYSTEMS · p.${basePage + 4}`}>
        <h4 className="el-subsection">{inline(`ANCHOR STRENGTH LOSS TRIGGERS`)}</h4>
        <div className="el-body"><p>{inline(`Outside of the Reinforce Anchor move, your Anchor Strength can decrease when:`)}</p></div>
        <div className="el-body"><p>{inline(`An Identity Crisis resolves at `)}<b>{inline(`10-11`)}</b>{inline(` (Anchor restored to 1, but any`)}</p></div>
        <div className="el-body"><p>{inline(`Strength above that is gone)`)}</p></div>
        <div className="el-body"><p>{inline(`A Faction Agent's Imposed consequence specifically targets your`)}</p></div>
        <div className="el-body"><p>{inline(`Anchor (this is rare; it will be stated explicitly when it occurs)`)}</p></div>
        <div className="el-body"><p>{inline(`You voluntarily sever an Anchor Connection to gain a mechanical`)}</p></div>
        <div className="el-body"><p>{inline(`benefit — when you burn the last real thing tethering you to your`)}</p></div>
        <div className="el-body"><p>{inline(`origin for short-term survival, the Anchor notices`)}</p></div>
        <div className="el-body"><p>{inline(`You complete The Return and choose Return Changed — your Anchor binds`)}</p></div>
        <div className="el-body"><p>{inline(`permanently, but at whatever Strength it was when you arrived`)}</p></div>
        <aside className="el-reflection"><p>{inline(`Anchor Strength does not decrease passively. It decreases when you make a choice that costs you your origin. I have watched Echoes give it away in installments small enough that they did not register the transaction until the Anchor was gone.`)}</p><div className="el-sign">— EC</div></aside>
        <h4 className="el-subsection">{inline(`Asset Management`)}</h4>
      </ChPage>
      <ChPage side="recto" runHead={"Advanced Systems"} pageNum={basePage + 5} label={`ADVANCED SYSTEMS · p.${basePage + 5}`}>
        <h4 className="el-subsection">{inline(`ASSET EVOLUTION`)}</h4>
        <div className="el-body"><p>{inline(`Assets can improve with use (Levels 1-3). To advance an Asset:`)}</p></div>
        <div className="el-body"><p>{inline(`The Asset must be referenced in 3 significant Chronicle entries`)}</p></div>
        <div className="el-body"><p>{inline(`Spend 3 Coherence`)}</p></div>
        <div className="el-body"><p>{inline(`Spend a Downtime move`)}</p></div>
        <div className="el-body"><p>{inline(`Provide narrative justification for the growth`)}</p></div>
        <div className="el-body"><p>{inline(`Effect: increase the Asset bonus (+1 →+2 →+3), OR gain an additional capability, OR increase Stress capacity (3 →4 →5 boxes).`)}</p></div>
        <h4 className="el-subsection">{inline(`LEVEL REQUIREMENTS`)}</h4>
        <div className="el-body"><p>{inline(`Level 2 requires Anchor Strength `)}<b>{inline(`2+`)}</b></p></div>
        <div className="el-body"><p>{inline(`Level 3 requires Anchor Strength `)}<b>{inline(`4+`)}</b></p></div>
        <h4 className="el-subsection">{inline(`ACQUIRING NEW ASSETS`)}</h4>
        <div className="el-body"><p>{inline(`You start with 2 Assets. During a campaign, you may gain additional Asset slots (up to a maximum of 5 total) through significant narrative events — recovering lost Chrono-Tech in the field, forging a bond with an NPC that crystallizes into a Persistent Connection, or unlocking a new Echo Trait after surviving a Crisis.`)}</p></div>
        <div className="el-body"><p>{inline(`Mechanical cost: spend 5 Coherence during Downtime and write a Chronicle entry that justifies the acquisition — what happened, what changed, why this Asset now exists in your world. The new Asset begins at Level 1 with 3 Stress boxes.`)}</p></div>
        <div className="el-body"><p>{inline(`Alternatively, a Faction Agent may offer a new Asset as part of a trade — usually unstable, usually with a catch, always tempting.`)}</p></div>
        <AlanIntrusionInline tier={tier}><p>{inline(`Five Coherence is a lot. That's the point. You want a new toy, pay for it. The Chronoverse doesn't give things away.`)}</p></AlanIntrusionInline>
      </ChPage>
    </Spread>
    <Spread id="chen-7-04" label={"ADVANCED SYSTEMS · spread 4"}>
      <ChPage side="verso" runHead={"Advanced Systems"} pageNum={basePage + 6} label={`ADVANCED SYSTEMS · p.${basePage + 6}`}>
        <div className="el-body"><p>{inline(`Assets take damage from critical failures when using them, high Paradox effects, direct attacks, environmental hazards, and temporal Crises.`)}<FootnoteMarker n={29} act={3} /></p><span className="gly-inline-row"><Glyph name="burden" size="inline" stage={0} /></span></div>
        <div className="el-body"><p>{inline(`To repair, roll `)}<b>{inline(`2d6`)}</b>{inline(` + OBSERVE (for Chrono-Tech) or ENDURE (for Echo Traits):`)}</p></div>
        <div className="el-body"><p><b>{inline(`10+`)}</b>{inline(` Clear all Stress. Asset functions perfectly.`)}</p></div>
        <table className="tbl-chen tbl-chen--oracle"><tbody><tr><td className="num">{`7-9`}</td><td className="oracle-name">{``}</td><td className="oracle-desc">{inline(`Clear 2 Stress.`)}</td></tr></tbody></table>
        <div className="el-body"><p><b>{inline(`6-`)}</b>{inline(` Clear 1 Stress. Mark +1 Paradox.`)}</p></div>
        <div className="el-body"><p>{inline(`Repair requires Downtime and a narrative explanation of the work.`)}</p></div>
        <h4 className="el-subsection">{inline(`Downtime Moves Reference`)}</h4>
        <div className="el-body"><p>{inline(`After resolving a major situation or before forced Displacement, choose `)}<b>{inline(`1-2`)}</b>{inline(`:`)}</p></div>
        <div className="el-body"><p>{inline(`Rest & Recover: restore +2 Coherence, clear 1 Stress from all Assets`)}</p></div>
        <div className="el-body"><p>{inline(`Repair Asset: see Asset Repair rules above`)}</p></div>
        <div className="el-body"><p>{inline(`Study Era: immerse in the current time period, create a new Memory`)}</p></div>
        <div className="el-body"><p>{inline(`related to its culture or technology`)}</p></div>
        <div className="el-body"><p>{inline(`Reinforce Anchor: see Anchor Reinforcement above`)}</p></div>
        <div className="el-body"><p>{inline(`Reduce Paradox: see Stabilize Reality Move above`)}</p></div>
        <Zaaken><i>{inline(`Ludum longum lude.`)}</i></Zaaken>
        <FinderFootnotes notes={[{"n":29,"text":"My watch stopped today. Not the battery. The hands melted into the face. Checked the sheet — Saul's Asset Stress is maxed. The math knew before I did.","act":3,"late":false}]} />
      </ChPage>
      <ChPage side="recto" runHead={"Advanced Systems"} pageNum={basePage + 7} label={`ADVANCED SYSTEMS · p.${basePage + 7}`}>
        
      </ChPage>
    </Spread>
  </>);
}

ChenCh7.pages = 8;
Object.assign(window, { ChenCh7 });
