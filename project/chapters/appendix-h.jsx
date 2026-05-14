// AUTO-GENERATED — appendix-h — RECOVERED TESTIMONY — THE SAUL FILES
function AppendixH({ tweaks, basePage = 1 }) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = { "data-body": tweaks.chenBody || "garamond" };
  const ChPage = (props) => <Page book="chen" dataAttrs={dataAttrs} showTexture {...props} />;
  const AlPage = (props) => <Page book="alan" showTexture {...props} />;
  const IlPage = (props) => <Page book="interlude" showTexture={false} {...props} />;
  return (<>
    <Spread id="appendix-h-opener" label={"H · opener"}>
      <ChPage side="verso" label="(blank)" />
      <ChPage side="recto" showWatermark label="H · opener">
        <div className="el-appendix-opener">
          <div className="el-appendix-eyebrow">Appendix H</div>
          <h1 className="el-h1 el-appendix-opener__title">Recovered Testimony — The Saul Files</h1>
          <img src="assets/chen-chapter-rule.svg" alt="" className="el-appendix-rule" />
        </div>
      </ChPage>
    </Spread>
    <Spread id="appendix-h-01" label={"RECOVERED TESTIMONY — THE SAUL FILES · spread 1"}>
      <ChPage side="verso" runHead={"Recovered Testimony — The Saul Files"} pageNum={basePage + 0} footnotes={<FinderFootnotes notes={[{"n":53,"text":"His name was Saul. I named my Echo Saul. I did not know. I am not sure anymore that I named him at all.","act":5,"late":false}]} />} label={`RECOVERED TESTIMONY — TH · p.${basePage + 0}`}>
        <aside className="el-reflection"><p>{inline(`The pages that follow were not part of the original manuscript. They arrived after. A man who was not the man whose name he used spent fourteen months building a record of an event he was not present for, in a name he did not own, because the name fit better than anything he had been called before. He filed fifteen reports. He stopped at fifteen. We have arranged them here in chronological order, lightly annotated, because they belong with the rest of what this book is.`)}</p><div className="el-sign">— EC</div></aside>
        <Zaaken><p>{inline(`He kept looking. That is the thing the original could not do. The original froze. The journalist who took his name could not stop. He is in this book because he earned a place in it.`)}</p><p>{inline(`— Fragment`)}</p></Zaaken>
        <AlanIntrusionInline tier={tier}><p>{inline(`Read these last. They will not change the rules. They will change what you understand the rules to be the record of.`)}</p></AlanIntrusionInline>
        <div className="el-body"><p>{inline(`[FILES 001 THROUGH 015 INSERTED HERE FROM \`Final Scars and Fractures Guide\` AND \`Diagetic_Pieces_.txt\` — see project files for full text. Drop in numerical order with no other framing.]`)}</p></div>
      </ChPage>
      <ChPage side="recto" runHead={"Recovered Testimony — The Saul Files"} pageNum={basePage + 1} label={`RECOVERED TESTIMONY — TH · p.${basePage + 1}`}>
        
      </ChPage>
    </Spread>
  </>);
}

AppendixH.pages = 2;
Object.assign(window, { AppendixH });
