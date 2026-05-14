// AUTO — emiT title page (Book 2 frontispiece)
// The Master Sigil's second sacred appearance: ONE TERMINAL MISSING.
// Per spec: this signals the book has begun to lose pieces.
function EmitTitle({ tweaks, basePage = 1 }) {
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  return (<>
    <Spread id="emit-title-01" label="emiT · title">
      <AlPage side="verso" label="(blank)" />
      <AlPage side="recto" label="emiT · title">
        <div className="emit-titlepage">
          <div className="emit-titlepage__sigil">
            <Glyph kind="sigil" name="severed" size="sigil" />
          </div>
          <div className="emit-titlepage__sup">BOOK TWO</div>
          <h1 className="emit-titlepage__title">emiT</h1>
          <div className="emit-titlepage__rule" />
          <div className="emit-titlepage__sub">by Alan Rose</div>
          <div className="emit-titlepage__stamp">[ TEMPORAL LOG // BOOK 02 // STATE: SEVERED ]</div>
        </div>
      </AlPage>
    </Spread>
  </>);
}
EmitTitle.pages = 2;
Object.assign(window, { EmitTitle });
