// AUTO-GENERATED — appendix-f — EXAMPLES OF PLAY
function AppendixF({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="appendix-f-opener" label="F · opener">
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="F · opener">
        <div className="el-appendix-opener">
          <div className="el-appendix-eyebrow">Appendix F</div>
          <h1 className="el-h1 el-appendix-opener__title">Examples Of Play</h1>
          <img src="assets/chen-chapter-rule.svg" alt="" className="el-appendix-rule" />
        </div>
      </ChPage>
    </Spread>
    <Spread id="appendix-f-01" label="EXAMPLES OF PLAY · spread 1">
      <ChPage side="verso" runHead="Examples Of Play" pageNum={basePage + 0} label={`EXAMPLES OF PLAY · p.${basePage + 0}`}>
        <div className="el-body"><p>{inline(`These examples show how mechanics translate into fiction. They demonstrate when to roll, how to interpret Oracles, how to track resources, and how to write in your Chronicle. The character is Dr. Sarah Martinez, a climate scientist from 2089 Miami, played across a sample campaign.`)}</p></div>
        <hr className="el-section-rule" />
        <h4 className="el-subsection">{inline(`Example 1: First Arrival`)}</h4>
        <div className="el-body"><p>{inline(`My Echo is Dr. Sarah Martinez. She's just Displaced — doesn't know when or where she is yet.`)}</p></div>
        <div className="el-body"><p>{inline(`I open my eyes. The hurricane's roar is gone. I'm lying on cobblestones in an alley. The air smells wrong — coal smoke and horse manure instead of ocean salt and electric ozone. My grandmother's compass is clutched in my hand, the needle spinning wildly. Through the alley opening, I see gas lamps, horse-drawn carriages, people in Victorian clothing.`)}</p></div>
        <div className="el-body"><p>{inline(`I need to figure out when and where I am. The outcome is uncertain, so I roll.`)}</p></div>
        <h4 className="el-subsection">{inline(`RESOLUTION ROLL`)}</h4>
        <ul className="el-list"><li>{inline(`Mode: `)}<b>{inline(`OBSERVE`)}</b>{inline(` (I'm analyzing my surroundings)`)}</li><li>{inline(`Memory Bonus: `)}<b>{inline(`+2`)}</b>{inline(` (Active Memory — 'Scuba Diving the Dying Reef,' tag: Observation)`)}</li><li>{inline(`Roll: `)}<b>{inline(`2d6`)}</b>{inline(` = 8, total `)}<b>{inline(`8 + 1 + 2 = 11`)}</b></li><li>{inline(`Result: `)}<b>{inline(`10+`)}</b>{inline(` — Complete Success`)}</li></ul>
        <div className="el-body"><p>{inline(`I recognize the architecture, the clothing styles, the technology level. Late 19th century, probably London. Victorian era, 1880s-1890s.`)}</p></div>
        <div className="el-body"><p>{inline(`On `)}<b>{inline(`10+`)}</b>{inline(`: gain `)}<b>{inline(`+1 Coherence`)}</b>{inline(`. Coherence: +3 → +4.`)}</p></div>
        <div className="el-body"><p>{inline(`But as I stand, a police constable is staring at me from the alley entrance. My shelter suit is dying — flickering, power almost gone. He's reaching for his whistle.`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead="Examples Of Play" pageNum={basePage + 1} label={`EXAMPLES OF PLAY · p.${basePage + 1}`}>
        <h4 className="el-subsection">{inline(`Chronicle Entry:`)}</h4>
        <Zaaken><b>{inline(`DAY 1 — FIRST DISPLACEMENT`)}</b></Zaaken>
        <div className="el-body"><p>{inline(`>`)}</p></div>
        <Zaaken><i>{inline(`Location:`)}</i>{inline(` Victorian London, approximately 1885-1895 (uncertain exact year)`)}</Zaaken>
        <div className="el-body"><p>{inline(`>`)}</p></div>
        <Zaaken><i>{inline(`Arrival:`)}</i>{inline(` Cobblestone alley near dockside. Coal smoke everywhere.`)}</Zaaken>
        <div className="el-body"><p>{inline(`>`)}</p></div>
        <Zaaken><i>{inline(`Complication:`)}</i>{inline(` Constable approaching. Shelter suit dying.`)}</Zaaken>
        <div className="el-body"><p>{inline(`>`)}</p></div>
        <Zaaken>{inline(`Coherence: +4 (gained 1 from successful identification) Paradox: 0 (haven't done anything paradoxical yet)`)}</Zaaken>
        <hr className="el-section-rule" />
        <h4 className="el-subsection">{inline(`Example 2: Social Encounter`)}</h4>
        <div className="el-body"><p>{inline(`The constable blows his whistle. I pull off the dying shelter suit, revealing my regular clothes underneath. I stuff the suit behind a crate.`)}</p></div>
        <div className="el-body"><p>{inline(`"Officer! Thank goodness. I was robbed. The ruffian took my coat and purse!"`)}</p></div>
        <div className="el-body"><p>{inline(`I'm attempting to deceive and defuse — this needs a roll.`)}</p></div>
        <h4 className="el-subsection">{inline(`RESOLUTION ROLL`)}</h4>
        <div className="el-body"><p>{inline(`Mode: SYNC (social deception, building trust) Memory Bonus: +2 (Active Memory — 'Peer Review Presentation,' tag: Persuasion) Roll: `)}<b>{inline(`2d6`)}</b>{inline(` = 9, total 9 + 1 + 2 = 12 Result: `)}<b>{inline(`12+`)}</b>{inline(` — Complete Success (and high enough to count) The constable's suspicion melts immediately. "Robbed? In broad daylight? Those dockside hooligans truly have no shame..." He helps me stand, brushing off my clothes, offering to escort me to the station.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="appendix-f-02" label="EXAMPLES OF PLAY · spread 2">
      <ChPage side="verso" runHead="Examples Of Play" pageNum={basePage + 2} label={`EXAMPLES OF PLAY · p.${basePage + 2}`}>
        <div className="el-body"><p>{inline(`I extract myself politely. On `)}<b>{inline(`10+`)}</b>{inline(`: gain +1 Coherence. Coherence: +4 →+5. Example 3: Navigation Failure I attempt Precision Navigation to 1851 London — the year of the Great Exhibition, when scientific societies gathered. Somewhere I could use my knowledge.`)}</p></div>
        <h4 className="el-subsection">{inline(`PRECISION NAVIGATION`)}</h4>
        <div className="el-body"><p>{inline(`Target: 1851, London, The Great Exhibition Target Precision: Year + City = `)}<b>{inline(`Difficulty 10`)}</b>{inline(` Cost: 1 Coherence paid before rolling. Coherence: +5 →+4 Mode: OBSERVE (sensing temporal currents) Memory Bonus: +2 (Active Memory — 'The Shelter Malfunction,' tag: Technology) Roll: `)}<b>{inline(`2d6`)}</b>{inline(` = 3, total 3 + 1 + 2 = 6 Result: `)}<b>{inline(`6-`)}</b>{inline(` — Lost in Transit Navigation failed. I must roll all four Anomaly Tables. Consequence: choose Lose 1 Coherence OR Mark +2 Paradox. I choose Coherence loss (keep Paradox low). Coherence: +4 →+3.`)}</p></div>
        <h4 className="el-subsection">{inline(`ANOMALY TABLE ROLLS`)}</h4>
        <div className="el-body"><p>{inline(`ERA (`)}<b>{inline(`d100`)}</b>{inline(`): 47 →INDUSTRIAL (1800-1850) LOCATION (`)}<b>{inline(`d100`)}</b>{inline(`): 29 →ACADEMIC INSTITUTION ANOMALY (`)}<b>{inline(`d100`)}</b>{inline(`): 22 →PROPHETIC RESONANCE COMPLICATION (`)}<b>{inline(`d100`)}</b>{inline(`): 67 →TEMPORAL SICKNESS (Personal) Interpretation: Cambridge University, approximately 1842. Something terrible is scheduled to happen tomorrow — everyone here knows it with prophetic certainty. They're debating whether to try to prevent it or accept fate. And I just materialized in their library, glowing faintly with temporal radiation sickness. "She's the catalyst," one student whispers. "The warning said a woman in strange clothes — Chronicle Entry:`)}</p></div>
        <h4 className="el-subsection">{inline(`DAY 1 — DISPLACEMENT FAILURE`)}</h4>
        <div className="el-body"><p>{inline(`Attempted Navigation to 1851 London. FAILED. Cost: 2 Coherence total (1 for attempt, 1 for consequence) Landed: Cambridge University, 1842 (Industrial Era) ANOMALY: Prophetic Resonance — everyone knows tomorrow's disaster COMPLICATION: Temporal Sickness — I'm visibly contaminated Current: Coherence `)}<b>{inline(`+3`)}</b>{inline(`, Paradox `)}<b>{inline(`0`)}</b>{inline(` Next session: survive the sickness, find out what happens tomorrow`)}</p></div>
        <hr className="el-section-rule" />
        <h4 className="el-subsection">{inline(`Example 4: Faction Encounter`)}</h4>
      </ChPage>
      <ChPage side="recto" runHead="Examples Of Play" pageNum={basePage + 3} label={`EXAMPLES OF PLAY · p.${basePage + 3}`}>
        <div className="el-body"><p>{inline(`Several sessions later. Paradox is now at `)}<b>{inline(`7`)}</b>{inline(` (Anomaly band). Sarah is in Paris, 1871 — post-Commune chaos. She rolls `)}<b>{inline(`7-9`)}</b>{inline(` on a Resolution roll. At `)}<b>{inline(`Paradox 7-9`)}</b>{inline(`, Agents appear as complications on `)}<b>{inline(`7-9`)}</b>{inline(` results. Roll `)}<b>{inline(`d4`)}</b>{inline(` for Faction: result = 2 (Loop Authority).`)}</p></div>
        <div className="el-body"><p>{inline(`A forgettable person materializes mid-conversation. Average height, average build, clothing that shifts slightly between blinks. They're taking notes on a device that shouldn't exist for 130 years. "Dr. Martinez," they say, voice flat. "You're glitching. We can smooth you out. Painless."`)}</p></div>
        <div className="el-body"><p>{inline(`The Authority's Offer: normalize one Active Memory (bonus drops from `)}<b>{inline(`+2`)}</b>{inline(` to `)}<b>{inline(`+0`)}</b>{inline(`, emotional context erased) → Reduce Paradox by `)}<b>{inline(`2`)}</b>{inline(`, clear `)}<b>{inline(`1 Stress`)}</b>{inline(` from one Asset. Sarah's options: Accept, Refuse, or Drive Off. She refuses. "No. I'm not letting you erase Elena. I'm not letting you normalize any of this."`)}</p></div>
        <div className="el-body"><p>{inline(`Consequence: they Mark her (`)}<b>{inline(`-1`)}</b>{inline(` to Navigation until next Downtime), and begin preparing a Clone Loop (`)}<b>{inline(`Difficulty 8`)}</b>{inline(` instead of 10 next time Paradox reaches `)}<b>{inline(`10+`)}</b>{inline(`).`)}</p></div>
        <h4 className="el-subsection">{inline(`CHRONICLE NOTE: MARKED — LOOP`)}</h4>
        <h4 className="el-subsection">{inline(`AUTHORITY`)}</h4>
        <div className="el-body"><p>{inline(`They're preparing a Clone Loop specifically for me. `)}<b>{inline(`Difficulty 8`)}</b>{inline(` to trap me (reduced from standard 10). Next time Authority would appear, they appear automatically. I kept Elena's birthday. I kept everything. Ask me if it was worth it when I'm in the Loop.`)}</p></div>
        <hr className="el-section-rule" />
        <h4 className="el-subsection">{inline(`Example 5: Downtime`)}</h4>
        <div className="el-body"><p>{inline(`End of session. Coherence: `)}<b>{inline(`+3`)}</b>{inline(`. Paradox: `)}<b>{inline(`7`)}</b>{inline(`. Location: Cambridge 1842, Prophetic Resonance still active.`)}</p></div>
      </ChPage>
    </Spread>
    <Spread id="appendix-f-03" label="EXAMPLES OF PLAY · spread 3">
      <ChPage side="verso" runHead="Examples Of Play" pageNum={basePage + 4} label={`EXAMPLES OF PLAY · p.${basePage + 4}`}>
        <h4 className="el-subsection">{inline(`STEP 1: CHRONICLE (+1 COHERENCE)`)}</h4>
        <div className="el-body"><p>{inline(`Write session summary in Chronicle. Effect: Coherence +3 →+4.`)}</p></div>
        <h4 className="el-subsection">{inline(`STEP 2: REINFORCE ANCHOR`)}</h4>
        <div className="el-body"><p>{inline(`Anchor took no Stress this session. Skip.`)}</p></div>
        <h4 className="el-subsection">{inline(`STEP 3: TEND ASSETS`)}</h4>
        <div className="el-body"><p>{inline(`Temporal Compass: no Stress marked. No repair needed.`)}</p></div>
        <h4 className="el-subsection">{inline(`STEP 4: PROCESS MEMORY`)}</h4>
        <div className="el-body"><p>{inline(`Nothing significant enough happened this session to create a new Memory. Nothing shifts.`)}</p></div>
        <h4 className="el-subsection">{inline(`STEP 5: REDUCE PARADOX (OPTIONAL)`)}</h4>
        <div className="el-body"><p>{inline(`At Paradox 7, Paradox is urgent. Attempt Temporal Grounding. Roll `)}<b>{inline(`2d6`)}</b>{inline(` + SYNC (`)}<b>{inline(`Difficulty 10`)}</b>{inline(`): result = 8 (7-9). Reduce Paradox by 1. Paradox: 7 →6 (out of Anomaly band, back to Flux).`)}</p></div>
        <h4 className="el-subsection">{inline(`STEP 6: PLAN NEXT MOVE`)}</h4>
        <div className="el-body"><p>{inline(`Answer: What am I afraid will happen next? I'm afraid tomorrow's prophesied disaster involves me. I'm afraid I can't stop it without generating more Paradox. I'm afraid that I'm the catastrophe.`)}</p></div>
        <h4 className="el-subsection">{inline(`END OF SESSION STATE`)}</h4>
        <div className="el-body"><p>{inline(`Coherence: +4 (Flux — no modifier) Paradox: 6 (Flux — Scouts on 6-, -1 to rolls) Location: Cambridge 1842, Prophetic Resonance active Assets: Temporal Compass functional Memories: 5 Active, 0 Fading, 0 Locked Next: face tomorrow's prophesied disaster`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead="Examples Of Play" pageNum={basePage + 5} label={`EXAMPLES OF PLAY · p.${basePage + 5}`}>
        
      </ChPage>
    </Spread>
  </>);
}

AppendixF.pages = 6;
Object.assign(window, { AppendixF });
