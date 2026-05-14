// AUTO — Saul Files closing page (the last page of Appendix H).
// The Master Sigil's third (and final) sacred appearance: one terminal
// is REPLACED by the MEMORY glyph. Per spec: a sigil that has begun to
// rebuild itself from what it lost.
function SaulClosing({ tweaks, basePage = 1 }) {
  const ChPage = (props) => <Page book="chen" showTexture {...props} />;
  return (<>
    <Spread id="saul-closing-01" label="Saul Files · closing">
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" label="Saul Files · closing">
        <div className="saul-closing">
          <div className="saul-closing__rule-top" />
          <div className="saul-closing__sigil">
            <Glyph kind="sigil" name="with-memory" size="sigil" />
          </div>
          <div className="saul-closing__text">
            <p>The pages stop here.</p>
            <p>What you carried forward is yours.</p>
            <p>What you forgot, the timestream keeps.</p>
          </div>
          <div className="saul-closing__rule-bot" />
          <div className="saul-closing__finder">
            <span>recovered &amp; transcribed by</span>
            <strong>— the finder</strong>
          </div>
        </div>
      </ChPage>
    </Spread>
  </>);
}
SaulClosing.pages = 2;
Object.assign(window, { SaulClosing });
