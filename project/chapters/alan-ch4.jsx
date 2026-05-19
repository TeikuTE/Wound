// AUTO-GENERATED — alan-4 — FACTION PRESSURE
function AlanCh4({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="alan-4-opener" label={"FACTION PRESSURE · opener"}>
      <AlPage side="verso" label="(blank)" />
      <AlPage side="recto" label="alan-4 · opener">
        <AlanChapterHead entry={4} sub="FACTION PRESSURE" coord="[TEMPORAL LOG // ENTRY_004 // ERA: 50 // NODE: FACTION]" />
        <AlanFragment top={170} right={4} rotate={-3} size={9}>// 2287.192.0001</AlanFragment>
      </AlPage>
    </Spread>
    <Spread id="alan-4-02" label={"FACTION PRESSURE · spread 2"}>
      <AlPage side="verso" runHead={"ENTRY_004"} pageNum={basePage + 2} coordStamp={"[LOG // ENTRY_004]"} label={`FACTION PRESSURE · p.${basePage + 2}`}>
        <aside className="al-fragment"><p>{inline(`The factions think they can use you. Other way around. You use THEM.`)}</p><p>{inline(`The Church of the Holy Second: pain-loving pious torturers who correctly believe that suffering stabilizes reality. The Loop Authority: punchclock middle management, ruthlessly efficient, motto being that recursion eliminates deviation. The Scionfall Directive: killers disguising themselves with kindness. The Chronoclasts: my kind of people, once. A bit too extreme for my tastes these days.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <AlanBody><p>{inline(`FACTION ATTENTION`)}</p></AlanBody>
        <AlanBody><p>{inline(`Tied to Paradox. Shadow (0-3): invisible to them. Flux (4-6): Scouts observe when you roll 6-. Anomaly (7-9): Agents intervene when you roll `)}<b>{inline(`7-9`)}</b>{inline(`, they make Offers. Breach (10+): direct intervention during Fracture Event Phase 2.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Agent Offers`)}</p></AlanBody>
        <AlanBody><p>{inline(`When an Agent appears, choose: Accept (pay the cost, gain the benefit), Refuse (they Impose consequence and Mark you), or Drive Off (roll DISRUPT to force them away, `)}<b>{inline(`Difficulty 10`)}</b>{inline(`).`)}</p></AlanBody>
        <AlanBody><p>{inline(`Offers are your non-roll path to Paradox relief. Sell pieces of yourself to regain control.`)}</p></AlanBody>
        <AlanBody><p>{inline(`AGENT OFFER / COST`)}</p></AlanBody>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_004"} pageNum={basePage + 3} coordStamp={"[LOG // ENTRY_004]"} label={`FACTION PRESSURE · p.${basePage + 3}`}>
        <AlanBody><p>{inline(`Church Templar Offer: Take 1 Mutation + lose 2 Coherence →Reduce Paradox by 3 Refused: Lose 1 Coherence. Marked — next encounter automatic. Authority Corrector Offer: Normalize 1 Scar (bonus drops to +0) →Reduce Paradox by 2, clear Asset Stress Refused: -1 to Navigation until Repreival. Marked. Scionfall Herald Offer: Character retired. Game ends peacefully. Refused: -1 ENDURE while present. Marked — returns during next Crisis. Chronoclast Remixer Offer: +2 Paradox now →+3 to next DISRUPT roll (Complication guaranteed) Refused: Roll Timeline Shift Oracle. Marked — brings gift next time.`)}</p></AlanBody>
        <h4 className="al-subsection">{inline(`PATTERN RECOGNITION (PARADOX 7+)`)}</h4>
        <aside className="al-fragment"><p>{inline(`Sometimes the contamination rises faster than your analytical capacity drops. The gap is small and short, but while it lasts, you can see the next move before the timeline commits to it. Most Echoes do not survive long enough to develop it.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <AlanBody><p>{inline(`Available when: `)}<b>{inline(`Paradox 7+`)}</b>{inline(` and `)}<b>{inline(`OBSERVE ≥+1`)}</b>{inline(`.`)}</p></AlanBody>
        <AlanBody><p>{inline(`Once per session, declare: I see what's coming. State a specific complication (who/what, where, what it threatens). Mark 1 Coherence immediately. Mark the complication as BOUND. The Oracle must introduce it within the next 3 scenes, and when it arrives, you gain +2 to one roll taken in response.`)}</p></AlanBody>
        <AlanBody><p>{inline(`If you reach Repreival before it appears, it still arrives anyway — upgraded one severity level — and you gain +1 Mutation from the strain of sustained prophetic perception.`)}</p></AlanBody>
      </AlPage>
    </Spread>
    <Spread id="alan-4-03" label={"FACTION PRESSURE · spread 3"}>
      <AlPage side="verso" runHead={"ENTRY_004"} pageNum={basePage + 4} coordStamp={"[LOG // ENTRY_004]"} label={`FACTION PRESSURE · p.${basePage + 4}`}>
        <aside className="al-fragment"><p>{inline(`I've met two Echoes with maintained high-Paradox OBSERVE.`)}</p><p>{inline(`First one: stopped speaking in linear sentences. Everything was will happen / happened / happening. Grammatical tenses collapsed. Couldn't interact with anyone.`)}</p><p>{inline(`Second one: accurate predictions, perfect positioning. Survived 18 Crisis events through foreknowledge. Then predicted her own dissolution. Saw it coming for three weeks. Couldn't prevent it. Just watched it approach.`)}</p><p>{inline(`She chose Scionfall on day 17. Said waiting was worse than the end.`)}</p><p>{inline(`Prophecy doesn't make you safe. It makes you witness your own failure in advance.`)}</p><div className="al-fragment__sign">// AR</div></aside>
        <aside className="al-chen-block" data-tier={tier}><div className="al-chen-block__head">Dr. Eleanor Chen // [DATE UNKNOWN]</div><p>{inline(`Landauer's principle: erasing a single bit of information requires a minimum amount of energy dissipated as heat. In CTH, the same is true at the level of identity. Scionfall promises mercy through cessation. The mercy is real. The thermodynamics are also real. Every Echo Scionfall walks gently into the silence releases a measurable amount of waveform energy back into the field. They are not just ending you. They are using you.`)}</p></aside>
      </AlPage>
      <AlPage side="recto" runHead={"ENTRY_004"} pageNum={basePage + 5} coordStamp={"[LOG // ENTRY_004]"} label={`FACTION PRESSURE · p.${basePage + 5}`}>
        
      </AlPage>
    </Spread>
  </>);
}

AlanCh4.pages = 6;
Object.assign(window, { AlanCh4 });
