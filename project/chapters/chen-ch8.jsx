// AUTO-GENERATED — chapter/chen ch8 — LONG-TERM PLAY
function ChenCh8({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="chen-8-01" label="LONG-TERM PLAY · spread 1">
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="Chen Ch 8 · Opener">
        <ChenChapterHead icon="assets/chen-icon-handless-clock.svg" number="VIII" title="Long-term Play" />
      </ChPage>
    </Spread>
    <Spread id="chen-8-02" label="LONG-TERM PLAY · spread 2">
      <ChPage side="verso" runHead="Long-term Play" pageNum={(basePage + 2)} label={`Chen · LONG-TERM PLAY · p.${(basePage + 2)}`}>
        <h3 style={{margin:'4mm 0 1mm', fontFamily:"var(--ff-serif-display)", fontWeight:600, fontSize:'12pt', color:'var(--el-forest)', fontVariant:'small-caps', letterSpacing:'0.08em'}}>Campaign Structures Temporal</h3>
        <ChenBody columns={1}><p>{inline(`Echoes supports several campaign structures. They're not mutually exclusive — your campaign might move between them as circumstances change.`)}</p></ChenBody>
        
      </ChPage>
      <ChPage side="recto" runHead="Long-term Play" pageNum={(basePage + 3)} label={`Chen · LONG-TERM PLAY · p.${(basePage + 3)}`}>
        <div style={{margin:'4mm -2mm', background:'rgba(13,15,18,0.94)', color:'var(--al-ghost)', fontFamily:'var(--ff-hand)', fontSize:'13pt', lineHeight:1.25, padding:'4mm 6mm', transform:'rotate(-0.6deg)', boxShadow:'0 2px 8px rgba(13,15,18,0.35)'}}><p style={{margin:0}}>Addendum she didn't write: End: Success means discovering home doesn't exist anymore. Failure means staying alive long enough to realize you didn't want to go back anyway. I've met four Echoes who successfully Navigated home. Two dissolved on arrival (temporal rejection). One lasted three days before voluntary Displacement — couldn't stand what their era had become. The fourth is still there, I think. Last I heard they'd been committed for claiming to be a time traveler. You want to go home? Fine. Here's what you'll find: Everyone you knew is dead or doesn't know you. Your life has been lived by someone else, or never lived at all. The version of you that belonged there is a ghost. And you're the thing haunting it. Chen will help you try. She's good like that. I'm just telling you what you'll wish you'd known after.</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'11pt', opacity:0.85}}>—AR</div></div>
        <h2 className="el-h2">THE INVESTIGATOR (15-20 SESSIONS)</h2>
        <ChenBody columns={1}><p>{inline(`Goal: understand the nature of Displacement. Milestones: encounter other Echoes, discover Faction operations, piece together the mechanics of time, reach a major revelation about the origin of displacement. End: understanding achieved — but at what cost?`)}</p></ChenBody>
        <h2 className="el-h2">THE WITNESS (OPEN-ENDED)</h2>
        <ChenBody columns={1}><p>{inline(`Goal: document history, preserve what would otherwise be lost. Ongoing play focused on visiting key historical moments, recording events in your Chronicle, meeting historical figures, deciding when and if to intervene. Ends when the Chronicle feels complete, or when memory loss becomes too severe.`)}</p></ChenBody>
        <h2 className="el-h2">THE SURVIVOR (CRISIS-FOCUSED)</h2>
        <ChenBody columns={1}><p>{inline(`Goal: simply endure as long as possible. High-difficulty mode: start with Anchor Strength 2, forced Displacement every 2-3 scenes, higher Paradox generation. Ends when you finally dissolve, transform, or find unexpected peace. Evolving Threats`)}</p></ChenBody>
        <h2 className="el-h2">FACTION ESCALATION</h2>
        <ChenBody columns={1}><p>{inline(`As Paradox rises, Faction interference increases: Shadow (0-3) — unaware of you. Flux (4-6) — Scouts observe. Anomaly (7-9) — Agents intervene. Breach (10+) — active hunting, capture attempts, violence.`)}</p></ChenBody>
        <h2 className="el-h2">TIMELINE INSTABILITY</h2>
        <ChenBody columns={1}><p>{inline(`The more you interfere, the more unstable your surroundings: anachronisms appearing, people remembering multiple versions of events, physical impossibilities manifesting, other Echoes drawn to your disturbance.`)}</p></ChenBody>
        <h2 className="el-h2">PERSONAL DEGRADATION</h2>
        <ChenBody columns={1}><p>{inline(`Track the Scars that accumulate. Note the way your personality shifted. What Anchor Connections are still standing? Can you still remember why you wanted to go home? Ending Your Story`)}</p></ChenBody>
        
      </ChPage>
    </Spread>
    <Spread id="chen-8-03" label="LONG-TERM PLAY · spread 3">
      <ChPage side="verso" runHead="Long-term Play" pageNum={(basePage + 4)} label={`Chen · LONG-TERM PLAY · p.${(basePage + 4)}`}>
        <h2 className="el-h2">RETURN ACHIEVED</h2>
        <ChenBody columns={1}><p>{inline(`You finally reach home. Ask yourself: are you the same person who left? Then choose: Return Intact: you maintain all Memories (even Fading), you return as close to your original self as possible, but you can never leave again — your Anchor binds you permanently. You're home. You're also trapped. And linearity can be painful after displacement. Return Changed: you accept the Mutations and lost Memories, you return as a transformed version of yourself, the people you left behind don't fully recognize you. You're 'home,' but you're a stranger.`)}</p></ChenBody>
        <h2 className="el-h2">DISSOLUTION</h2>
        <ChenBody columns={1}><p>{inline(`Coherence cannot be restored. Identity too fragmented. Final Chronicle entry: fragments, then silence.`)}</p></ChenBody>
        <h2 className="el-h2">ACCEPTANCE</h2>
        <ChenBody columns={1}><p>{inline(`You choose to stop fighting. You make peace with displacement. You find a new Anchor in an adopted era. Chronicle entry: I was someone else. Now I am this.`)}</p></ChenBody>
        <h2 className="el-h2">TRANSFORMATION</h2>
        <ChenBody columns={1}><p>{inline(`You deliberately let go of your origin. You become something new. You retire your Echo to the timestream. Chronicle entry: I remember who I was. I choose to forget.`)}</p></ChenBody>
        <div style={{margin:'4mm -2mm', background:'rgba(13,15,18,0.94)', color:'var(--al-ghost)', fontFamily:'var(--ff-hand)', fontSize:'13pt', lineHeight:1.25, padding:'4mm 6mm', transform:'rotate(-0.6deg)', boxShadow:'0 2px 8px rgba(13,15,18,0.35)'}}><p style={{margin:0}}>Chen wrote this chapter in 2038. I checked. She still believed The Return was possible then. She had a route mapped out. She had Anchor reinforcement protocols and a list of likely landing eras and a plan for the first month back. She doesn't write like this anymore. If you reach Chapter 8 and you can still feel her certainty, hold it carefully. It was real once.</p><div style={{textAlign:'right', marginTop:'2mm', fontSize:'11pt', opacity:0.85}}>—AR</div></div>
        <ChenMarginalia top={25} side="left" outset={-18} rotate={-1.50} width={38}>The game ends when one of the following becomes true. I have no preference among them.</ChenMarginalia>
      </ChPage>
      <ChPage side="recto" label="(blank)" />
    </Spread>
  </>);
}

ChenCh8.pages = 5;
Object.assign(window, { ChenCh8 });