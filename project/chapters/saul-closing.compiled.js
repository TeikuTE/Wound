function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO — Saul Files closing page (the last page of Appendix H).
// The Master Sigil's third (and final) sacred appearance: one terminal
// is REPLACED by the MEMORY glyph. Per spec: a sigil that has begun to
// rebuild itself from what it lost.
function SaulClosing({
  tweaks,
  basePage = 1
}) {
  const ChPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "chen",
    showTexture: true
  }, props));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spread, {
    id: "saul-closing-01",
    label: "Saul Files \xB7 closing"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    label: "Saul Files \xB7 closing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "saul-closing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "saul-closing__rule-top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "saul-closing__sigil"
  }, /*#__PURE__*/React.createElement(Glyph, {
    kind: "sigil",
    name: "with-memory",
    size: "sigil"
  })), /*#__PURE__*/React.createElement("div", {
    className: "saul-closing__text"
  }, /*#__PURE__*/React.createElement("p", null, "The pages stop here."), /*#__PURE__*/React.createElement("p", null, "What you carried forward is yours."), /*#__PURE__*/React.createElement("p", null, "What you forgot, the timestream keeps.")), /*#__PURE__*/React.createElement("div", {
    className: "saul-closing__rule-bot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "saul-closing__finder"
  }, /*#__PURE__*/React.createElement("span", null, "recovered & transcribed by"), /*#__PURE__*/React.createElement("strong", null, "\u2014 the finder"))))));
}
SaulClosing.pages = 2;
Object.assign(window, {
  SaulClosing
});
