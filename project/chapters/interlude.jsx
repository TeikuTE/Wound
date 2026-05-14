// AUTO-GENERATED — interlude — PLAYING BOTH
function PlayingBothInterlude({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="interlude-opener" label={"Interlude · opener"}>
      <IlPage side="verso" label="(blank)" />
      <IlPage side="recto" label="Interlude · opener">
        <div className="il-opener">
          <div className="interlude-eyebrow">Interlude</div>
          <h1 className="il-opener__title">Playing Both</h1>
          <div className="il-opener__rule" />
          <div className="il-opener__attribution">a note from the finder</div>
        </div>
      </IlPage>
    </Spread>
    <Spread id="interlude-01" label={"PLAYING BOTH · spread 1"}>
      <IlPage side="verso" showTexture={false} pageNum={basePage + 0} footnotes={<FinderFootnotes notes={[{"n":33,"text":"He says reading both books changes the meaning of both. He is the only one in this manuscript who is telling me the truth.","act":3,"late":false}]} />} label={`PLAYING BOTH · p.${basePage + 0}`}>
        <div className="interlude-body"><p>{inline(`So. You finished Chen's book. Or you skipped to here, which is allowed, but you should know that some of what follows won't make sense without the first half.`)}<FootnoteMarker n={33} act={3} /></p></div>
        <div className="interlude-body"><p>{inline(`I read them in order. Chen first. That seemed safer at the time. I was wrong about the safety. I was right about the order. Alan's book makes more sense once you already know what he's arguing with.`)}</p></div>
        <div className="interlude-body"><p>{inline(`What's below is what the two manuscripts agreed on. Which isn't much.`)}</p></div>
        <div className="interlude-body"><p>{inline(`If you're carrying an Echo from Chen's game into Alan's, this is the trade. What you fought hardest to keep in Book One becomes the thing Book Two is going to take from you. I don't know if they planned it that way. I don't think they were on speaking terms when these sections were written. But you can feel them arguing across the gap, and the argument has a shape, and the shape is below.`)}</p></div>
        <div className="interlude-body"><p>{inline(`The rules are short. The cost is not.`)}</p></div>
        <div className="interlude-body"><p>{inline(`Caveat lector. Again.`)}</p></div>
        <div className="interlude-body"><p><b>{inline(`YOUR LOCKED MEMORY BECOMES YOUR CORE SCAR.`)}</b></p></div>
        <div className="interlude-body"><p>{inline(`The bonus transfers intact. What you fought hardest to preserve becomes your most dangerous weapon.`)}</p></div>
        <div className="interlude-body"><p><b>{inline(`YOUR HIGHEST REMAINING ANCHOR CONNECTION BECOMES A PERSISTENT CONNECTION ASSET AT LEVEL 1.`)}</b></p></div>
        <div className="interlude-body"><p>{inline(`The person or place you held onto longest is now something you can deploy.`)}</p></div>
        <div className="interlude-body"><p><b>{inline(`YOUR FINAL PARADOX SCORE BECOMES YOUR STARTING PARADOX IN EMIT.`)}</b></p></div>
      </IlPage>
      <IlPage side="recto" showTexture={false} pageNum={basePage + 1} label={`PLAYING BOTH · p.${basePage + 1}`}>
        <div className="interlude-body"><p>{inline(`You don't begin emiT clean. You begin it with the contamination you accumulated trying to stay whole.`)}</p></div>
        <div className="interlude-body"><p><b>{inline(`YOU BEGIN WITH ONE ADDITIONAL MUTATION: REMEMBERS WHEN PRESERVATION MATTERED.`)}</b></p></div>
        <div className="interlude-body"><p>{inline(`Once per campaign, you may perform a Holding Action without it counting toward the once-per-campaign limit. You know what you traded. Sometimes that knowledge surfaces.`)}</p></div>
        <div className="interlude-body"><p><b>{inline(`YOUR FINAL ANCHOR STRENGTH DETERMINES YOUR STARTING CORRUPTION VECTOR.`)}</b></p></div>
        <div className="interlude-body"><p>{inline(`Subtract your Echo's final Anchor Strength (1-5) from 5. The result is your starting Corruption Vector (0-4).`)}</p></div>
        <div className="interlude-body"><p>{inline(`An Echo who fought tooth and nail to preserve themselves (Anchor Strength 5) begins emiT almost fully human — Corruption Vector 0. They have the furthest to fall. An Echo whose Anchor was already shattered (Anchor Strength 1) begins already deep in the transformation — Corruption Vector 4. They are lighter, and more dangerous, and there is less of them left to lose.`)}</p></div>
        <div className="interlude-body"><p>{inline(`This is the tragedy the two books share. Everything you fought to preserve in Chen's game becomes the measure of what you stand to lose in Alan's.`)}</p></div>
        <h4 className="interlude-eyebrow">{inline(`A NOTE ON ANCHOR 0`)}</h4>
        <div className="interlude-body"><p>{inline(`If your Echo's Anchor Strength reached 0 — if you dissolved, if the Identity Crisis took everything — you begin emiT at Corruption Vector 5. Not because you won. Because there's nothing left to lose. You arrive at Alan's book with the ceiling intact and the floor already gone. That's its own kind of tragedy.`)}</p></div>
      </IlPage>
    </Spread>
    <Spread id="interlude-02" label={"PLAYING BOTH · spread 2"}>
      <IlPage side="verso" showTexture={false} pageNum={basePage + 2} label={`PLAYING BOTH · p.${basePage + 2}`}>
        <Zaaken><p>{inline(`Chen built a boat. Alan learned to breathe water.`)}</p><p>{inline(`Both books are correct. Neither is sufficient.`)}</p><p>{inline(`If you have read this far, you are in the gap between the two answers. The gap is where the third thing lives — the thing neither of them will name, because naming it would require admitting the choice was never between preservation and transformation. The choice was between two ways of refusing to disappear.`)}</p><p>{inline(`You are about to enter the second book. The book of the one who chose to disappear into something useful.`)}</p></Zaaken>
        <div className="interlude-body"><p>{inline(`emiT`)}</p></div>
        <div className="interlude-body"><p>{inline(`A Solo Journaling RPG About What You Become When Preservation Stops Being the Point`)}</p></div>
        <div className="interlude-body"><p>{inline(`By Alan Rose`)}</p></div>
        <h4 className="interlude-eyebrow">{inline(`\`[SYSTEM BOOT]... CORRUPTED\``)}</h4>
        <h4 className="interlude-eyebrow">{inline(`\`[LOADING DIRECTIVE]... FAILED\``)}</h4>
        <div className="interlude-body"><p><b>{inline(`\`[WARNING: NON-LINEAR NARRATIVE HAZARD] You are not the first version of yourself to read this.\``)}</b></p></div>
      </IlPage>
      <IlPage side="recto" showTexture={false} pageNum={basePage + 3} label={`PLAYING BOTH · p.${basePage + 3}`}>
        
      </IlPage>
    </Spread>
  </>);
}

PlayingBothInterlude.pages = 4;
Object.assign(window, { PlayingBothInterlude });
