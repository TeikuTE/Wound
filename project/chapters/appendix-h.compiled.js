function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — appendix-h — RECOVERED TESTIMONY — THE SAUL FILES
function AppendixH({
  tweaks,
  basePage = 1
}) {
  const tier = tweaks.intrusionTier;
  const dataAttrs = {
    "data-body": tweaks.chenBody || "garamond"
  };
  const ChPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "chen",
    dataAttrs: dataAttrs,
    showTexture: true
  }, props));
  const AlPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "alan",
    showTexture: true
  }, props));
  const IlPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "interlude",
    showTexture: false
  }, props));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-h-opener",
    label: "H \xB7 opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "H \xB7 opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-eyebrow"
  }, "Appendix H"), /*#__PURE__*/React.createElement("h1", {
    className: "el-h1 el-appendix-opener__title"
  }, "Recovered Testimony \u2014 The Saul Files"), /*#__PURE__*/React.createElement("img", {
    src: "assets/chen-chapter-rule.svg",
    alt: "",
    className: "el-appendix-rule"
  })))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-h-01",
    label: "RECOVERED TESTIMONY \u2014 THE SAUL FILES \xB7 spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Recovered Testimony \u2014 The Saul Files",
    pageNum: basePage + 0,
    label: `RECOVERED TESTIMONY — TH · p.${basePage + 0}`
  }, /*#__PURE__*/React.createElement("aside", {
    className: "el-reflection"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The pages that follow were not part of the original manuscript. They arrived after. A man who was not the man whose name he used spent fourteen months building a record of an event he was not present for, in a name he did not own, because the name fit better than anything he had been called before. He filed fifteen reports. He stopped at fifteen. We have arranged them here in chronological order, lightly annotated, because they belong with the rest of what this book is.`)), /*#__PURE__*/React.createElement("div", {
    className: "el-sign"
  }, "\u2014 EC")), /*#__PURE__*/React.createElement(Zaaken, null, /*#__PURE__*/React.createElement("p", null, inline(`He kept looking. That is the thing the original could not do. The original froze. The journalist who took his name could not stop. He is in this book because he earned a place in it.`)), /*#__PURE__*/React.createElement("p", null, inline(`— Fragment`))), /*#__PURE__*/React.createElement(AlanIntrusionInline, {
    tier: tier
  }, /*#__PURE__*/React.createElement("p", null, inline(`Read these last. They will not change the rules. They will change what you understand the rules to be the record of.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`[FILES 001 THROUGH 015 INSERTED HERE FROM \`Final Scars and Fractures Guide\` AND \`Diagetic_Pieces_.txt\` — see project files for full text. Drop in numerical order with no other framing.]`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Recovered Testimony \u2014 The Saul Files",
    pageNum: basePage + 1,
    label: `RECOVERED TESTIMONY — TH · p.${basePage + 1}`
  })));
}
AppendixH.pages = 2;
Object.assign(window, {
  AppendixH
});
