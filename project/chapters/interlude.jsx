// AUTO-GENERATED — interlude/interlude ch- — INTERLUDE: PLAYING BOTH
function PlayingBothInterlude({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="interlude-interlude-01" label="INTERLUDE: PLAYING BOTH · spread 1">
      <IlPage side="verso" pageNum={(basePage + 0)} label={`IL · INTERLUDE: PLAYING BOTH · p.${(basePage + 0)}`}>
        <div className="interlude-body"><p>{`So. You finished Chen's book. Or you skipped to here, which is allowed, but you should know that some of what follows won't make sense without the first half. I read them in order. Chen first. That seemed safer at the time. I was wrong about the safety. I was right about the order. Alan's book makes more sense once you already know what he's arguing with. What's below is what the two manuscripts agreed on. Which isn't much. If you're carrying an Echo from Chen's game into Alan's, this is the trade. What you fought hardest to keep in Book One becomes the thing Book Two is going to take from you. I don't know if they planned it that way. I don't think they were on speaking terms when these sections were written. But you can feel them arguing across the gap, and the argument has a shape, and the shape is below. The rules are short. The cost is not. Caveat lector. Again.`}</p></div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>YOUR LOCKED MEMORY BECOMES YOUR CORE SCAR.</div>
        <div className="interlude-body"><p>{`The bonus transfers intact. What you fought hardest to preserve becomes your most dangerous weapon.`}</p></div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>YOUR HIGHEST REMAINING ANCHOR CONNECTION</div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>BECOMES A PERSISTENT CONNECTION ASSET AT LEVEL</div>
        <div className="interlude-body"><ol style={{margin:'2mm 0', paddingLeft:'5mm'}}><li>{inline(`The person or place you held onto longest is now something you can deploy.`)}</li></ol></div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>YOUR FINAL PARADOX SCORE BECOMES YOUR STARTING</div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>PARADOX IN EMIT.</div>
        <div className="interlude-body"><p>{`You don't begin emiT clean. You begin it with the contamination you accumulated trying to stay whole.`}</p></div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>YOU BEGIN WITH ONE ADDITIONAL MUTATION:</div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>REMEMBERS WHEN PRESERVATION MATTERED.</div>
        <div className="interlude-body"><p>{`Once per campaign, you may perform a Holding Action without it counting toward the once-per-campaign limit. You know what you traded. Sometimes that knowledge surfaces.`}</p></div>
        
      </IlPage>
      <IlPage side="recto" pageNum={(basePage + 1)} label={`IL · INTERLUDE: PLAYING BOTH · p.${(basePage + 1)}`}>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>YOUR FINAL ANCHOR STRENGTH DETERMINES YOUR</div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>STARTING CORRUPTION VECTOR.</div>
        <div className="interlude-body"><p>{`Subtract your Echo's final Anchor Strength (1-5) from 5. The result is your starting Corruption Vector (0-4). An Echo who fought tooth and nail to preserve themselves (Anchor Strength 5) begins emiT almost fully human — Corruption Vector 0. They have the furthest to fall. An Echo whose Anchor was already shattered (Anchor Strength 1) begins already deep in the transformation — Corruption Vector 4. They are lighter, and more dangerous, and there is less of them left to lose. This is the tragedy the two books share. Everything you fought to preserve in Chen's game becomes the measure of what you stand to lose in Alan's.`}</p></div>
        <div className="interlude-eyebrow" style={{marginTop:'6mm'}}>A NOTE ON ANCHOR 0</div>
        <div className="interlude-body"><p>{`If your Echo's Anchor Strength reached 0 — if you dissolved, if the Identity Crisis took everything — you begin emiT at Corruption Vector 5. Not because you won. Because there's nothing left to lose. You arrive at Alan's book with the ceiling intact and the floor already gone. That's its own kind of tragedy. [Z] Chen built a boat. Alan learned to breathe water. Both books are correct. Neither is sufficient. If you have read this far, you are in the gap between the two answers. The gap is where the third thing lives — the thing neither of them will name, because naming it would require admitting the choice was never between preservation and transformation. The choice was between two ways of refusing to disappear. You are about to enter the second book. The book of the one who chose to disappear into something useful. BOOK TWO: emiT emiT A Solo Journaling RPG About What You Become When Preservation Stops Being the Point By Alan Rose`}</p></div>
        
      </IlPage>
    </Spread>
    <Spread id="interlude-interlude-02" label="INTERLUDE: PLAYING BOTH · spread 2">
      <IlPage side="verso" pageNum={(basePage + 2)} label={`IL · INTERLUDE: PLAYING BOTH · p.${(basePage + 2)}`}>
        <div className="interlude-body"><p>{`[SYSTEM BOOT]... CORRUPTED [LOADING DIRECTIVE]... FAILED [WARNING: NON-LINEAR NARRATIVE HAZARD] You are not the first version of yourself to read this.`}</p></div>
        
      </IlPage>
      <IlPage side="recto" label="(blank)" />
    </Spread>
  </>);
}

PlayingBothInterlude.pages = 3;
Object.assign(window, { PlayingBothInterlude });