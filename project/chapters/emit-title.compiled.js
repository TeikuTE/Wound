function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO — emiT title page (Book 2 frontispiece)
// The Master Sigil's second sacred appearance: ONE TERMINAL MISSING.
// Per spec: this signals the book has begun to lose pieces.
function EmitTitle({
  tweaks,
  basePage = 1
}) {
  const AlPage = props => /*#__PURE__*/React.createElement(Page, _extends({
    book: "alan",
    showTexture: true
  }, props));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spread, {
    id: "emit-title-01",
    label: "emiT \xB7 title"
  }, /*#__PURE__*/React.createElement(AlPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(AlPage, {
    side: "recto",
    label: "emiT \xB7 title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "emit-titlepage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "emit-titlepage__sigil"
  }, /*#__PURE__*/React.createElement(Glyph, {
    kind: "sigil",
    name: "severed",
    size: "sigil"
  })), /*#__PURE__*/React.createElement("div", {
    className: "emit-titlepage__sup"
  }, "BOOK TWO"), /*#__PURE__*/React.createElement("h1", {
    className: "emit-titlepage__title"
  }, "emiT"), /*#__PURE__*/React.createElement("div", {
    className: "emit-titlepage__rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "emit-titlepage__sub"
  }, "by Alan Rose"), /*#__PURE__*/React.createElement("div", {
    className: "emit-titlepage__stamp"
  }, "[ TEMPORAL LOG // BOOK 02 // STATE: SEVERED ]")))));
}
EmitTitle.pages = 2;
Object.assign(window, {
  EmitTitle
});
