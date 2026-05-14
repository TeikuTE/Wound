function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — appendix-c — ORACLE TABLES
function AppendixC({
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
    id: "appendix-c-opener",
    label: "C · opener"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    label: "(blank)"
  }), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    showWatermark: true,
    label: "C \xB7 opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-opener"
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-appendix-eyebrow"
  }, "Appendix C"), /*#__PURE__*/React.createElement("h1", {
    className: "el-h1 el-appendix-opener__title"
  }, "Oracle Tables"), /*#__PURE__*/React.createElement("img", {
    src: "assets/chen-chapter-rule.svg",
    alt: "",
    className: "el-appendix-rule"
  })))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-c-01",
    label: "ORACLE TABLES · spread 1"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Oracle Tables",
    pageNum: basePage + 0,
    label: `ORACLE TABLES · p.${basePage + 0}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The Oracles are not random number generators. They are the Chronoverse talking back.`)), /*#__PURE__*/React.createElement("span", {
    className: "gly-inline-row"
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "ripple",
    size: "inline",
    stage: 0
  }))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`C.1 — Anomaly Tables (Temporal Echoes)`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Roll ERA + LOCATION + ANOMALY + COMPLICATION when Navigation fails, when forced displacement occurs, or when you arrive in a completely new era for the first time.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Era Table (**d100**)`)), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `01-05`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PALEOLITHIC (50,000-10,000 BCE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Ice sheets advancing and receding, megafauna, pre-linguistic cultures, tool-making beginning. Survival conditions are absolute.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `06-10`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `NEOLITHIC (10,000-3,000 BCE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`First agriculture, permanent settlements, stone monuments, proto-cities forming, domestication.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `11-15`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `BRONZE AGE (3,000-1,200 BCE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Early empires rising, cuneiform and hieroglyphics, urban centers, long-distance trade networks.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `16-20`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `IRON AGE / CLASSICAL (1,200 BCE-500`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`CE) Greece, Rome, Han, Maurya — philosophy emerging, organized warfare, major religions forming.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `21-25`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `EARLY MEDIEVAL (500-1000 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Post-Roman collapse, Byzantine continuation, Islamic Golden Age, monastery culture, feudalism emerging.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `26-30`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `HIGH MEDIEVAL (1000-1300 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Castles and cathedrals, Crusades, universities founding, Gothic architecture, chivalric culture.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `31-35`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LATE MEDIEVAL (1300-1500 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`The Black Death and its aftermath, peasant revolts, gunpowder reshaping warfare, universities expanding, early Renaissance stirrings. A population that has just buried half of itself and does not yet know it is becoming modern.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `36-40`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `EARLY MODERN (1500-1700 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Age of Exploration, Protestant Reformation, Scientific Revolution, colonial expansion, absolute monarchies.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `41-45`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ENLIGHTENMENT (1700-1800 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Age of Reason, American and French Revolutions, industrial revolution beginning, philosophical rationalism.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `46-50`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `INDUSTRIAL (1800-1850 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Factories and railways spreading, rapid urbanization, steam power, telegraph, class conflict.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `51-55`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `VICTORIAN (1850-1900 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`British Empire at height, mechanization accelerating, photography and cinema emerging, scientific advancement.`)))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Oracle Tables",
    pageNum: basePage + 1,
    label: `ORACLE TABLES · p.${basePage + 1}`
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `56-60`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `EARLY 20TH CENTURY (1900-1920 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Electricity widespread, aviation beginning, World War I, Spanish Flu, women's suffrage movements.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `61-65`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `INTERWAR (1920-1939 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Jazz Age, Great Depression, fascism rising, radio broadcasting, artistic modernism.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `66-70`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `WORLD WAR II ERA (1939-1945 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Industrial-scale warfare across multiple continents, occupation regimes, partisan resistance, ration books, blackouts, propaganda saturating every medium. The Holocaust ongoing. Atomic weapons by period's end.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `71-75`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `EARLY COLD WAR (1945-1970 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Nuclear standoff, space race, decolonization, civil rights, television dominance, counterculture.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `76-80`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LATE COLD WAR (1970-1991 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Déente and renewed tensions, personal computing, fall of Berlin Wall, Soviet collapse.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `81-85`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `DIGITAL AGE (1991-2010 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Internet mainstream, globalization accelerating, 9/11, mobile technology, social networking.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `86-90`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LATE DIGITAL (2010-2030 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Social media dominance, climate crisis accelerating, AI emergence, political polarization, pandemic responses.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `91-93`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `NEAR FUTURE (2030-2050 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Climate adaptation infrastructure, gene technology widespread, mass migration, automation displacement.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `94-96`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MID FUTURE (2050-2100 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Post-scarcity attempts, radical life extension, off-world colonies possible, demographic transformation.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `97-98`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `FAR FUTURE (2100-2200 CE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Post-climate world either stabilized or sustained at high cost. Off-world colonies established. Body modifications routine. The category "human" itself is contested vocabulary.`))))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Location Table (**d100**)`)), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `01-03`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MAJOR URBAN CENTER`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Capital city, cultural and economic hub, dense population, government seat. Markets, monuments, crowds.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `04-06`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `RESIDENTIAL DISTRICT`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Neighborhoods, housing blocks, suburbs. Domestic spaces where people actually live. Family dynamics, local gossip.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `07-09`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MARKETPLACE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Bazaar, trading post, commercial district. Exchange and commerce. Merchants, hagglers, information brokers.`))))))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-c-02",
    label: "ORACLE TABLES · spread 2"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Oracle Tables",
    pageNum: basePage + 2,
    label: `ORACLE TABLES · p.${basePage + 2}`
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `10-12`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PORT CITY`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Harbor facilities, international trade, diverse transient population, gateway location.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `13-16`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `INDUSTRIAL CENTER`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Factories, worker housing, pollution and noise. Smokestacks, assembly lines, shift whistles.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `17-20`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `RURAL VILLAGE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Agricultural community, traditional social structures, relative isolation. Everyone knows everyone.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `21-24`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `WILDERNESS`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Forest, mountain range, desert, or wasteland. Minimal human presence, survival conditions, natural dangers.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `25-28`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `RELIGIOUS SITE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Temple, monastery, church, mosque, shrine. Pilgrims, priests, ceremonies. Spiritual authority concentrated.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `29-32`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ACADEMIC INSTITUTION`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`University, library, research facility. Scholars, students, knowledge repositories.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `33-35`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ENTERTAINMENT VENUE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Theater, arena, festival ground. Performance, spectacle, crowd energy. Era-dependent.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `36-38`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MILITARY INSTALLATION`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Fort, base, training ground, armory. Hierarchies, drills, readiness.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `39-42`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TRANSPORTATION HUB`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Train stations, airports, bus terminals, depots. Schedules and surveillance. Transient populations: harder to track, harder to hide.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `43-45`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MEDICAL FACILITY`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Hospital, sanitarium, clinic, quarantine. Concentration of sick and injured. Healing and horror.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `46-48`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `GOVERNMENT CENTER`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Palace, parliament, administrative offices. Decisions, decrees, corruption.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `49-51`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `UNDERGROUND / SUBTERRANEAN`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Mines, catacombs, bunkers, subway systems, cave networks. Hidden, claustrophobic, forgotten.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `52-54`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TRANSPORTATION VESSEL`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Ship at sea, train in motion, aircraft in flight. Mobile, confined, can't easily leave.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `55-57`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MARGINAL SETTLEMENT`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Slums, refugee camps, squatter zones. Poverty, desperation, resilience.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `58-60`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `SACRED / FORBIDDEN GROUND`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Burial site, cursed land, quarantine zone. Taboo, danger, dread.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `61-63`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ENTERTAINMENT DISTRICT`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Red light district, gambling halls, taverns. Pleasure, excess, danger.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `64-66`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `INSTITUTIONAL FACILITY`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Asylum, orphanage, workhouse, sanatorium. Confinement disguised as care. People processed by paperwork.`)))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Oracle Tables",
    pageNum: basePage + 3,
    label: `ORACLE TABLES · p.${basePage + 3}`
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `67-69`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ARTISAN QUARTER`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Workshops, studios, guildhalls. Craftspeople, artists, builders. Skilled labor.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `70-72`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PRISON / DETENTION CENTER`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Jail, internment camp, forced containment. Inmates, sentences, escape attempts.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `73-76`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `DISASTER ZONE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Active fire, flood damage, earthquake, war devastation. Chaos, rescue, collapse.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `77-80`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `BORDERLAND`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Frontier territory, no man's land, crossing point, checkpoint. Smugglers, refugees, patrol guards.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `81-84`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `AGRICULTURAL LAND`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Fields, plantations, farms, orchards. Labor, harvest, seasonal cycles.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `85-88`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `RITUAL / CEREMONIAL SPACE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Coronation hall, execution ground, courthouse. Locations defined by significant life events.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `89-92`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `RESEARCH OUTPOST`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Observatory, field station, laboratory, archaeological dig. Scientists in remote locations pursuing knowledge.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `93-95`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `COLLAPSED INFRASTRUCTURE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Earthquake aftermath, abandoned cities, climate-ruined zones. Structures still settling and failing. Salvage operations, scavengers, the dangers of incomplete falls.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `96-98`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LIMINAL SPACE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Hallway that's too long, empty parking structure, service corridors. Architecturally wrong non-places.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `99-00`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `[PARADOX]`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Two things are true at once and cannot both be true. Two NPCs have irreconcilable claims. Two Factions arrive with opposing interventions. Introduce both forces. Do not resolve the contradiction. Mark +1 Paradox immediately.`))))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Anomaly Table (**d100**)`)), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `01-05`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TEMPORAL ECHO`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Events repeat in exact or near-exact 24-hour loops. Locals may or may not be aware. Loop breaks unpredictably or when a specific condition is met.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `06-10`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `CAUSAL DRIFT`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Cause and effect operate in reverse locally. Wounds appear before the injury. Conversations answer questions not yet asked.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `11-15`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ANACHRONISM BLEED`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Objects from other eras appear in this one and refuse to leave. A smartphone in a medieval market. A bronze sword in a 1950s living room. Locals see them and accept them, or see them and do not.`))))))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-c-03",
    label: "ORACLE TABLES · spread 3"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Oracle Tables",
    pageNum: basePage + 4,
    label: `ORACLE TABLES · p.${basePage + 4}`
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `16-20`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `IDENTITY FOG`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Locals cannot consistently remember their own names, relationships, or histories. They function but don't know why.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `21-25`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PROPHETIC RESONANCE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Everyone knows with certainty what will happen in the next 24 hours. Free will becomes questionable. Some try to prevent it anyway.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `26-30`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LINGUISTIC DECAY`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Languages shift and mutate mid-conversation. Words change meaning while being spoken. Written text alters when unobserved.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `31-35`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TEMPORAL PRESSURE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Local time moves at an observably wrong speed — compressed (hours feel like minutes) or dilated (minutes feel like hours).`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `36-40`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MEMORY BLEED`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Your personal memories become visible to locals as hallucinations, prophetic dreams, or shared visions. Your past manifests in their present.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `41-45`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PARADOX ZONE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`A bounded region where causal contradictions accumulate without resolving. Inside, two incompatible histories operate simultaneously. Outside, only one. The boundary is visible if you know what to look for: a ripple-line, a temperature change, a sound that arrives twice.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `46-50`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `DISPLACEMENT FIELD`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Objects and people jump through time spontaneously. Temporal instability is contagious. Prolonged exposure causes involuntary displacement.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `51-55`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `FACTION PRESENCE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Temporal Faction agents operating openly, deliberately altering the timeline. Roll `), /*#__PURE__*/React.createElement("b", null, inline(`d4`)), inline(`: 1=Church, 2=Authority, 3=Scionfall, 4=Chronoclasts.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `56-60`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `HISTORICAL DEVIATION`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Major recorded events happened differently here. This timeline diverged. Records you know are wrong.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `61-65`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TEMPORAL REFUGEES`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Other displaced persons present — confused, desperate, competing for resources. Some helpful, some predatory.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `66-70`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `REALITY THIN`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`The barrier between adjacent timelines is weakening. See ghosts of other timeline versions overlapping. Hear voices from parallel possibilities.`)))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Oracle Tables",
    pageNum: basePage + 5,
    label: `ORACLE TABLES · p.${basePage + 5}`
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `71-75`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PROPHETIC ARTIFACTS`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Objects in this era contain information about events that have not yet occurred. Newspapers dated tomorrow. Photographs of people who have not been born. Recordings of conversations that will be held next week. The artifacts are accurate. They cannot be destroyed without consequence.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `76-80`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `CHRONAL SICKNESS`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`The local population suffers visible temporal contamination — rapid aging, remembering futures, bodies flickering between states.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `81-85`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LOCKED TIMELINE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Cannot leave this era through normal displacement. All Navigation attempts fail. External intervention required.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `86-90`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TEMPORAL SURVEILLANCE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`You're being observed across multiple timelines simultaneously. Watchers from different eras coordinating to track you.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `91-93`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PARADOX WOUND`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`The timeline is damaged from a major contradiction. Reality bleeds temporal instability like radiation. Proximity increases your contamination.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `94-96`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `CONVERGENCE POINT`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Multiple timelines intersecting at this location. Different versions of the same place overlapping physically.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `97-98`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TEMPORAL DEAD ZONE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Time has stopped in this specific location. Nothing changes, nothing progresses. Only you continue to move and age.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `99-00`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `[PARADOX]`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Two things are true at once and cannot both be true. Two NPCs have irreconcilable claims. Two Factions arrive with opposing interventions. Introduce both forces. Do not resolve the contradiction. Mark +1 Paradox immediately.`))))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Complication Table (**d100**)`)), /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `01-05`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `HOSTILE AUTHORITIES`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Police, military, or government officials identify you as a threat. Arrest or detention imminent. Documentation demanded.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `06-10`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `DISEASE OUTBREAK`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Plague, epidemic, or pandemic in active progress. Quarantine conditions enforced or breaking down. High infection risk.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `11-15`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ACTIVE COMBAT`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`War, riot, uprising, or violent conflict in your immediate vicinity. Physical danger imminent.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `16-20`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `ENVIRONMENTAL HAZARD`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Fire, flood, earthquake, severe storm, or other disaster. Structural collapse possible. Escape urgent.`))))))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-c-04",
    label: "ORACLE TABLES · spread 4"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Oracle Tables",
    pageNum: basePage + 6,
    label: `ORACLE TABLES · p.${basePage + 6}`
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `21-25`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, ``), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`FACTION AGENT`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `26-30`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TEMPORAL PREDATOR`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`A non-human entity that specifically hunts displaced persons. Feeds on Paradox, memories, or temporal energy. Intelligent, patient, dangerous.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `31-35`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PARADOX BACKLASH`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Your arrival triggers immediate visible causal disruption. Reality actively rejecting your presence. Locals notice and react.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `36-40`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `MOB PANIC`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`A crowd identifies you as witch, demon, foreign spy, or alien presence. Mass hysteria forming. Violence likely. Logic won't help.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `41-45`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `RESOURCE CRISIS`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`No food, water, shelter, currency, or basic supplies accessible. Infrastructure collapsed or non-existent.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `46-50`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `IDENTITY EXPOSURE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Someone recognizes or has proof you shouldn't exist here — records showing you died, haven't been born, or are from an impossible origin.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `51-55`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TECHNOLOGICAL INCOMPATIBILITY`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Your Assets and Chrono-Tech don't function in this era. Tools useless, advantages stripped.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `56-60`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LANGUAGE BARRIER`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Cannot communicate effectively at all. Locals speak a dead language with no modern cognates, or a far-future dialect.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `61-65`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `LEGAL RESTRICTION`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Documentation required immediately for movement or activity. You have none that are valid here.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `66-70`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `TEMPORAL SICKNESS`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`You're suffering visible contamination symptoms upon arrival. Locals notice. Medical attention is needed but dangerous to seek.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `71-75`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `WITNESS BURDEN`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Multiple locals witnessed your actual arrival. They're demanding explanation. Some want to help. Others want to capture or kill.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `76-80`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `PHYSICALLY TRAPPED`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`A building has collapsed around you, a bridge is out, a border is sealed. Cannot leave the immediate area through normal means.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `81-85`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `HUNTED (CROSS-TIMELINE)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Something has been pursuing you across multiple eras. It followed you here. It knows your patterns. It's close.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `86-90`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `BETRAYAL APPARENT`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Someone you thought was allied reveals immediate hostility. Your friend is a Faction asset, your contact is an informant.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `91-93`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `COLLAPSING INFRASTRUCTURE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`The building you're in is failing right now. Escape window closing rapidly.`)))))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Oracle Tables",
    pageNum: basePage + 7,
    label: `ORACLE TABLES · p.${basePage + 7}`
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl-chen tbl-chen--oracle"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `94-96`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `CAUSAL LOOP ACTIVE`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Your arrival directly caused or contributed to the danger currently threatening you. You're both victim and cause.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `97-98`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `FACTION AMBUSH (COORDINATED)`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Multiple Faction agents from potentially different Factions. This was planned. They predicted or caused your arrival.`))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, `99-00`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-name"
  }, `[PARADOX]`), /*#__PURE__*/React.createElement("td", {
    className: "oracle-desc"
  }, inline(`Two things are true at once and cannot both be true. Two NPCs have irreconcilable claims. Two Factions arrive with opposing interventions. Introduce both forces. Do not resolve the contradiction. Mark +1 Paradox immediately.`))))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Example Interpretations`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`EXAMPLE INTERPRETATIONS`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`How four dice results combine into coherent situations.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Example 1: Oxford`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Uprising`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ROLLED`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`ERA 47: Industrial (1800-1850) LOCATION 61: Academic Institution ANOMALY 23: Prophetic Resonance`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`COMPLICATION 15: Active Combat`)), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Oxford University, 1832. A student uprising is in progress — but everyone involved, both rebels and authorities, knows with absolute certainty that it will be brutally crushed by tomorrow morning. They're fighting anyway, driven by foreknowledge they cannot change.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The rebels know they'll lose but feel compelled to resist. The authorities know they'll win but must still execute the suppression. You materialize in the courtyard in the middle of this inevitable violence.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`The prophetic resonance means your arrival may have been foreseen. Both sides might target you as a wild card disrupting their predetermined outcome.`))), /*#__PURE__*/React.createElement("hr", {
    className: "el-section-rule"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Example 2: Berlin Divergence`)))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-c-05",
    label: "ORACLE TABLES · spread 5"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Oracle Tables",
    pageNum: basePage + 8,
    label: `ORACLE TABLES · p.${basePage + 8}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ROLLED`)), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`ERA 71:`)), inline(` Early Cold War (1945-1970)`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`LOCATION 76:`)), inline(` Transportation Hub`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`ANOMALY 56:`)), inline(` Historical Deviation`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`COMPLICATION 46:`)), inline(` Identity Exposure`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Tempelhof Airport, West Berlin, 1961. But something is fundamentally wrong. The Berlin Wall — which in your timeline was built in August 1961 — was never constructed here. The city remains unified but occupied by a different power structure than you know.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Your papers list you as a resident of East Berlin, a political designation that doesn't exist in this divergent timeline. Border guards are deeply confused by your documentation. Their confusion is rapidly turning to hostility.`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`You're clearly from somewhere, but the place you claim doesn't exist. They're calling for senior officials. Your historical knowledge is a liability — everything you know about this moment is wrong.`))), /*#__PURE__*/React.createElement("hr", {
    className: "el-section-rule"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`Example 3: Contaminated Refuge`)), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`ROLLED`)), /*#__PURE__*/React.createElement("ul", {
    className: "el-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`ERA 91:`)), inline(` Near Future (2030-2050)`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`LOCATION 81:`)), inline(` Medical Facility`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`ANOMALY 76:`)), inline(` Chronal Sickness`)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, inline(`COMPLICATION 66:`)), inline(` Temporal Sickness (Personal)`))), /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`Climate refugee medical processing center, North America, 2043. The facility is overwhelmed with people suffering temporal contamination — side effects of living near displacement zones that have opened across the continent due to climate-driven reality breakdown. Symptoms include rapid aging,`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Oracle Tables",
    pageNum: basePage + 9,
    label: `ORACLE TABLES · p.${basePage + 9}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-body"
  }, /*#__PURE__*/React.createElement("p", null, inline(`remembering futures that haven't occurred, bodies flickering between temporal states. You arrive already visibly sick with your own high-Paradox contamination symptoms. The intake staff immediately assume you're another refugee with chronal radiation poisoning. They think you're contagious. Quarantine protocols are beginning. Your actual displacement might worsen the local instability — and medical intervention from this era might help or destroy you.`))), /*#__PURE__*/React.createElement("h4", {
    className: "el-subsection"
  }, inline(`C.2 — The Chronoscape (emiT)`)))), /*#__PURE__*/React.createElement(Spread, {
    id: "appendix-c-06",
    label: "ORACLE TABLES · spread 6"
  }, /*#__PURE__*/React.createElement(ChPage, {
    side: "verso",
    runHead: "Oracle Tables",
    pageNum: basePage + 10,
    label: `ORACLE TABLES · p.${basePage + 10}`
  }, /*#__PURE__*/React.createElement(Zaaken, null, /*#__PURE__*/React.createElement("p", null, inline(`To consult an Oracle is to press your ear against a crack in the world.`)), /*#__PURE__*/React.createElement("p", null, inline(`If Structure contradicts Era — Ancient Rome + Neon Glitch — you're in a Stray Timeline. Don't reroll. Lean into the impossibility.`)), /*#__PURE__*/React.createElement("p", null, inline(`Era Table (`), /*#__PURE__*/React.createElement("b", null, inline(`d100`)), inline(`) — Atmospheric States`)), /*#__PURE__*/React.createElement("p", null, inline(`01-05`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Hunter's Dawn — Fires, bones, red ochre, massive fauna. Hunger as a constant. Language still finding its shape.`)), /*#__PURE__*/React.createElement("p", null, inline(`06-10`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The First Cities — Ziggurats, river smoke, mud-brick, early laws. The first bureaucracies, the first priests.`)), /*#__PURE__*/React.createElement("p", null, inline(`11-15`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Bronze Thrones — Chariots, omens, palace cults, sun-baked stone. Kings who are gods, or believe they are.`)), /*#__PURE__*/React.createElement("p", null, inline(`16-20`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Mythic Age — Heroes who shouldn't exist. Gods walking earth. The rules of reality haven't been settled yet.`)), /*#__PURE__*/React.createElement("p", null, inline(`21-25`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Classical Streets — Marble, markets, philosophy, white robes. The illusion of order. The violence underneath.`)), /*#__PURE__*/React.createElement("p", null, inline(`26-30`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Imperial Height — Roads, regiments, bureaucracy, legions marching. Everything is administration. Everything is tax.`)), /*#__PURE__*/React.createElement("p", null, inline(`31-35`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Collapse Horizon — Wanderers, ruins, reinvention. Dark ages are only dark if you lived before them.`)), /*#__PURE__*/React.createElement("p", null, inline(`36-40`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Plague Midnight — Bells, masks, whispered prayers, quarantine. The smell of burning. The sound of carts.`)), /*#__PURE__*/React.createElement("p", null, inline(`41-45`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Medieval Shadow — Torches, courts, secrets kept in stone. Power through lineage, God, and violence.`)), /*#__PURE__*/React.createElement("p", null, inline(`46-50`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Age of Sail — Storms, maps, cutlass, and canvas. The world getting larger and smaller simultaneously.`)), /*#__PURE__*/React.createElement("p", null, inline(`51-55`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Enlightenment Glow — Salons, telescopes, duels, wigs and powder. Reason as a religion. The guillotine waiting.`)), /*#__PURE__*/React.createElement("p", null, inline(`56-60`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Iron Fires — Factories, soot, terrible progress, grinding gears. Children in the mines. Steam as god.`)), /*#__PURE__*/React.createElement("p", null, inline(`61-65`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Revolutions Rising — Crowds, manifestos, smoke, barricades. Everyone believes they're right. Everyone is also wrong.`)), /*#__PURE__*/React.createElement("p", null, inline(`66-70`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Early Modern Fog — Gas lamps, autopsies, intrigue, cobblestones. The birth of modern horror.`)), /*#__PURE__*/React.createElement("p", null, inline(`71-75`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Global War — Trenches, sirens, coded messages, biplanes overhead. Everything that came after traces here.`)), /*#__PURE__*/React.createElement("p", null, inline(`76-80`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Cold Streets — Spies, paranoia, radiation hum, concrete brutalism. Two ideas about how people should live, willing to kill everyone to prove it.`)), /*#__PURE__*/React.createElement("p", null, inline(`81-85`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Analog Nights — CRTs, payphones, neon drizzle, cassette static. The last era before everything was recorded.`)), /*#__PURE__*/React.createElement("p", null, inline(`86-88`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Early Digital — Dial-up screech, data dreams, Y2K nerves. The internet before anyone understood what it was.`)), /*#__PURE__*/React.createElement("p", null, inline(`89-91`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Surveillance Today — Cameras like insects, smart-glass, algorithmic silence. You are the product. You consented.`)), /*#__PURE__*/React.createElement("p", null, inline(`92-94`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Near-Future Clinics — Chrome, gene mods, sterile white, consent forms that don't mean what they say.`)), /*#__PURE__*/React.createElement("p", null, inline(`95-96`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Neon Rot — Cyber-warrens, rain that burns, holograms flickering over ruins. The future arrived and it brought poverty.`)), /*#__PURE__*/React.createElement("p", null, inline(`97-98`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Post-Human Drift — Minds split across bodies, upload silence. The question of what counts as a person, unresolved. 99 Silent Earth Dying sun, long shadows, dust settling on monuments. The ending everyone knew was coming. 00 The Void Blankness. No era at all. The space between moments. You are alone here in a way that has no name.`)), /*#__PURE__*/React.createElement("p", null, inline(`Structure Table (`), /*#__PURE__*/React.createElement("b", null, inline(`d100`)), inline(`) — How Reality Behaves`)), /*#__PURE__*/React.createElement("p", null, inline(`01-05`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Soft Time — Moments melt together. Cause and effect blur at the edges. You can't tell if you're remembering or experiencing.`)), /*#__PURE__*/React.createElement("p", null, inline(`06-10`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Echoing Steps — Actions repeat faintly. You hear yourself from a minute ago. Deja vu as physics.`)), /*#__PURE__*/React.createElement("p", null, inline(`11-15`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Symbolic Physics — Metaphors become literal. If you say something is crushing you, it is. Language as law.`)), /*#__PURE__*/React.createElement("p", null, inline(`16-20`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Painful Color — Hues that stab the eye. Red means something different here. Blue means stop.`)), /*#__PURE__*/React.createElement("p", null, inline(`21-25`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Heavy Gravity — Movement is burden. Every step costs. Time itself weighs more than usual.`)), /*#__PURE__*/React.createElement("p", null, inline(`26-30`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Ritual Cycles — Events must repeat exactly. Deviation generates immediate Paradox.`)), /*#__PURE__*/React.createElement("p", null, inline(`31-35`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Frayed Loops — Fragments of other cycles replay randomly. You see yourself from other visits, or from visits you haven't made yet.`)), /*#__PURE__*/React.createElement("p", null, inline(`36-40`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Steam Pressure — Heat, clang, choking air. The era's dominant force is visible, physical, inescapable.`)), /*#__PURE__*/React.createElement("p", null, inline(`41-45`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Machine Logic — Everything aligns like gears. There is always a correct answer. Anything else is error.`)), /*#__PURE__*/React.createElement("p", null, inline(`46-50`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Broadcast Bleed`)), /*#__PURE__*/React.createElement("p", null, inline(`51-55`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Watcher's Lens — Being observed changes outcomes. Schrodinger as local law.`)), /*#__PURE__*/React.createElement("p", null, inline(`56-60`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Data Drift — Reality updates lag events. Things change a few seconds after they happen. There's a gap.`)), /*#__PURE__*/React.createElement("p", null, inline(`61-65`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Stutter-Glitch — Frames missing, reality teleports. Rooms that weren't there. People who weren't in the doorway.`)), /*#__PURE__*/React.createElement("p", null, inline(`66-70`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Impossible Angles — Non-Euclidean geometry. Hallways longer than the buildings containing them.`)), /*#__PURE__*/React.createElement("p", null, inline(`71-75`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Reversals — Up is down, left is right. Nothing dramatic — just wrong.`)), /*#__PURE__*/React.createElement("p", null, inline(`76-80`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Root-Mind — The ground itself thinks. Slowly. About things that happened a long time ago.`)), /*#__PURE__*/React.createElement("p", null, inline(`81-85`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Paradox Weather — Static, lightning, memory haze. High-Paradox zones create literal atmospheric effects.`)), /*#__PURE__*/React.createElement("p", null, inline(`86-88`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Backward Time`)), /*#__PURE__*/React.createElement("p", null, inline(`89-91`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Null Space — Silence swallows motion. Nothing echoes. Nothing has consequence. You can do anything and the universe doesn't notice.`)), /*#__PURE__*/React.createElement("p", null, inline(`92-94`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Slow Dissolve — Edges disintegrate. The difference between objects and air is a matter of opinion.`)), /*#__PURE__*/React.createElement("p", null, inline(`95-96`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Scar-Touched — Cracks bleeding energy. Previous displacements left wounds that haven't healed.`)), /*#__PURE__*/React.createElement("p", null, inline(`97-98`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Crash-State — Multiple realities overlap. The building is a ruin and brand new simultaneously. 99 Entropy Acceleration Things age years in seconds. You watch a flower become dust. You don't want to know what that means for you. 00 Inverted Physics Gravity pulls up. Time moves sideways. The sun rises from the ground.`)), /*#__PURE__*/React.createElement("p", null, inline(`Conflict Table (`), /*#__PURE__*/React.createElement("b", null, inline(`d100`)), inline(`) — The Named Phenomenon`)), /*#__PURE__*/React.createElement("p", null, inline(`01-05`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Causal Knot`)), /*#__PURE__*/React.createElement("p", null, inline(`06-10`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The False Anchor — A stabilizing lie or trap. Something is keeping this timeline together. It's not what everyone thinks it is.`)), /*#__PURE__*/React.createElement("p", null, inline(`11-15`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Hungry Silence — Sound vanishes into an unseen mouth. The missing noise is the threat.`)), /*#__PURE__*/React.createElement("p", null, inline(`16-20`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Symptomless Plague — Memories rot, not bodies. People function but have forgotten things they can't identify.`)), /*#__PURE__*/React.createElement("p", null, inline(`21-25`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Missing Hour — A skipped segment of time hiding a specific event. What happened between 3 and 4 am?`)), /*#__PURE__*/React.createElement("p", null, inline(`26-30`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Machine Crown — A ruler made of predictions. The leader knows exactly what will happen. That's the problem.`)), /*#__PURE__*/React.createElement("p", null, inline(`31-35`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Forbidden Map — A document showing places that don't exist yet. Or places that shouldn't exist at all.`)), /*#__PURE__*/React.createElement("p", null, inline(`36-40`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Rising Ship — Gravity warped upward near a specific structure. Things fall toward the sky there.`)), /*#__PURE__*/React.createElement("p", null, inline(`41-45`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Shadowless Children`)), /*#__PURE__*/React.createElement("p", null, inline(`46-50`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Daily Loop — Everything resets at dawn. The people here have adapted. They're very calm about it.`)), /*#__PURE__*/React.createElement("p", null, inline(`51-55`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Factory of Minutes — Someone is stealing time. Harvesting it. Whole hours disappear and people don't remember what they were doing.`)), /*#__PURE__*/React.createElement("p", null, inline(`56-60`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Erasing Crime — Evidence vanishes as you look at it. Something is cleaning up after itself.`)), /*#__PURE__*/React.createElement("p", null, inline(`61-65`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Sirens — An apocalypse in slow motion. Everyone can see it coming. The timeline is choosing to let it happen.`)), /*#__PURE__*/React.createElement("p", null, inline(`66-70`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Blur House — A place no one remembers entering. They're inside it right now. They don't know.`)), /*#__PURE__*/React.createElement("p", null, inline(`71-75`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Bleeding Words — Text reveals the thoughts of whoever reads it. Your internal monologue is visible to anyone holding what you've touched.`)), /*#__PURE__*/React.createElement("p", null, inline(`76-80`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Pruned Demographic — Someone like you is being systematically removed from this timeline. You just arrived.`)), /*#__PURE__*/React.createElement("p", null, inline(`81-85`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Resonant Flood`)), /*#__PURE__*/React.createElement("p", null, inline(`86-88`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Bone Choir — Voices humming tomorrow's melody. The music is correct. The singers don't know what they're singing.`)), /*#__PURE__*/React.createElement("p", null, inline(`89-91`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Memory Market — Selves traded like goods. There is a price on what you are. Someone has already put a deposit down.`)), /*#__PURE__*/React.createElement("p", null, inline(`92-94`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Signal From After — Tomorrow calling your name. Specifically your name. In your voice. Saying something you don't recognize yet.`)), /*#__PURE__*/React.createElement("p", null, inline(`95-96`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Hive's Rejection — The dominant collective consciousness is expelling aberrant ideas as physical entities. Thoughts are coming after you.`)), /*#__PURE__*/React.createElement("p", null, inline(`97-98`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` The Bottomless City — No floor, just fog. The infrastructure extends downward indefinitely. People have adapted. They don't look down. 99 The Dying Colossus Something vast is choosing to end. The ending will take everything with it. It is not malicious. It is simply done. 00 The Impossible Visitor`)), /*#__PURE__*/React.createElement("p", null, inline(`C.3 — Shared Oracles`)), /*#__PURE__*/React.createElement("p", null, inline(`Action Oracle (`), /*#__PURE__*/React.createElement("b", null, inline(`d100`)), inline(`)`)), /*#__PURE__*/React.createElement("p", null, inline(`01-02`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Discover`)), /*#__PURE__*/React.createElement("p", null, inline(`03-04`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Protect`)), /*#__PURE__*/React.createElement("p", null, inline(`05-06`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Destroy`)), /*#__PURE__*/React.createElement("p", null, inline(`07-08`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Create`)), /*#__PURE__*/React.createElement("p", null, inline(`09-10`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Connect`)), /*#__PURE__*/React.createElement("p", null, inline(`11-12`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Sever`)), /*#__PURE__*/React.createElement("p", null, inline(`13-14`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Reveal`)), /*#__PURE__*/React.createElement("p", null, inline(`15-16`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Conceal`)), /*#__PURE__*/React.createElement("p", null, inline(`17-18`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Transform`)), /*#__PURE__*/React.createElement("p", null, inline(`19-20`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Preserve`)), /*#__PURE__*/React.createElement("p", null, inline(`21-22`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Escape`)), /*#__PURE__*/React.createElement("p", null, inline(`23-24`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Pursue`)), /*#__PURE__*/React.createElement("p", null, inline(`25-26`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Negotiate`)), /*#__PURE__*/React.createElement("p", null, inline(`27-28`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Confront`)), /*#__PURE__*/React.createElement("p", null, inline(`29-30`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Observe`)), /*#__PURE__*/React.createElement("p", null, inline(`31-32`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Participate`)), /*#__PURE__*/React.createElement("p", null, inline(`33-34`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Sacrifice`)), /*#__PURE__*/React.createElement("p", null, inline(`35-36`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Acquire`)), /*#__PURE__*/React.createElement("p", null, inline(`37-38`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Defend`)), /*#__PURE__*/React.createElement("p", null, inline(`39-40`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Attack`)), /*#__PURE__*/React.createElement("p", null, inline(`41-42`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Heal`)), /*#__PURE__*/React.createElement("p", null, inline(`43-44`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Wound`)), /*#__PURE__*/React.createElement("p", null, inline(`45-46`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Deceive`)), /*#__PURE__*/React.createElement("p", null, inline(`47-48`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Illuminate`)), /*#__PURE__*/React.createElement("p", null, inline(`49-50`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Obscure`)), /*#__PURE__*/React.createElement("p", null, inline(`51-52`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Intuit`)), /*#__PURE__*/React.createElement("p", null, inline(`53-54`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Construct`)), /*#__PURE__*/React.createElement("p", null, inline(`55-56`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Dismantle`)), /*#__PURE__*/React.createElement("p", null, inline(`57-58`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Restore`)), /*#__PURE__*/React.createElement("p", null, inline(`59-60`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Corrupt`)), /*#__PURE__*/React.createElement("p", null, inline(`61-62`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Purify`)), /*#__PURE__*/React.createElement("p", null, inline(`63-64`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Escalate`)), /*#__PURE__*/React.createElement("p", null, inline(`65-66`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` De-escalate`)), /*#__PURE__*/React.createElement("p", null, inline(`67-68`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Restrain`)), /*#__PURE__*/React.createElement("p", null, inline(`69-70`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Release`)), /*#__PURE__*/React.createElement("p", null, inline(`71-72`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Combine`)), /*#__PURE__*/React.createElement("p", null, inline(`73-74`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Separate`)), /*#__PURE__*/React.createElement("p", null, inline(`75-76`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Adapt`)), /*#__PURE__*/React.createElement("p", null, inline(`77-78`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Resist`)), /*#__PURE__*/React.createElement("p", null, inline(`79-80`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Infiltrate`)), /*#__PURE__*/React.createElement("p", null, inline(`81-82`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Communicate`)), /*#__PURE__*/React.createElement("p", null, inline(`83-84`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Remember`)), /*#__PURE__*/React.createElement("p", null, inline(`85-86`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Forget`)), /*#__PURE__*/React.createElement("p", null, inline(`87-88`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Synchronize`)), /*#__PURE__*/React.createElement("p", null, inline(`89-90`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Disrupt`)), /*#__PURE__*/React.createElement("p", null, inline(`91-92`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Redirect`)), /*#__PURE__*/React.createElement("p", null, inline(`93-94`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Maintain`)), /*#__PURE__*/React.createElement("p", null, inline(`95-96`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Risk`)), /*#__PURE__*/React.createElement("p", null, inline(`97-98`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Revolutionize`)), /*#__PURE__*/React.createElement("p", null, inline(`99-00`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` [PARADOX] — Two things are true at once and cannot both be true. Two NPCs have irreconcilable claims. Two Factions arrive simultaneously with opposing interventions. Introduce both forces. Do not resolve the contradiction. Play into it. Mark +1 Paradox immediately.`)), /*#__PURE__*/React.createElement("p", null, inline(`NPC Motivation Table (`), /*#__PURE__*/React.createElement("b", null, inline(`d100`)), inline(`)`)), /*#__PURE__*/React.createElement("p", null, inline(`01-05`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Survival — ensure personal safety, secure basic ne`)), /*#__PURE__*/React.createElement("p", null, inline(`06-10`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Revenge — settle old scores, right past wrongs, jus`)), /*#__PURE__*/React.createElement("p", null, inline(`11-15`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Greed — accumulate wealth, power, or influence; m`)), /*#__PURE__*/React.createElement("p", null, inline(`16-20`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Love — protect, reconnect with, or win over someo`)), /*#__PURE__*/React.createElement("p", null, inline(`21-25`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Duty — fulfill obligation, honor commitment, serve`)), /*#__PURE__*/React.createElement("p", null, inline(`26-30`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Ambition — achieve status, recognition, or advanc hierarchy`)), /*#__PURE__*/React.createElement("p", null, inline(`31-35`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Fear — avoid danger, exposure, or consequence; o`)), /*#__PURE__*/React.createElement("p", null, inline(`36-40`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Curiosity — understand mystery, acquire knowledg`)), /*#__PURE__*/React.createElement("p", null, inline(`41-45`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Faith — serve a higher power, ideological cause, or`)), /*#__PURE__*/React.createElement("p", null, inline(`46-50`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Justice — right systemic wrongs, restore balance; j`)), /*#__PURE__*/React.createElement("p", null, inline(`51-55`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Redemption — atone for past failures; seeking forg forgiveness`)), /*#__PURE__*/React.createElement("p", null, inline(`56-60`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Control — maintain order, prevent chaos; need for`)), /*#__PURE__*/React.createElement("p", null, inline(`61-65`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Freedom — escape constraint, oppression, or oblig`)), /*#__PURE__*/React.createElement("p", null, inline(`66-70`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Protection — guard something precious: family, se`)), /*#__PURE__*/React.createElement("p", null, inline(`71-75`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Discovery — uncover truth, reveal hidden informat`)), /*#__PURE__*/React.createElement("p", null, inline(`76-80`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Belonging — find community, gain acceptance, ear`)), /*#__PURE__*/React.createElement("p", null, inline(`81-85`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Legacy — leave lasting mark, be remembered, sha`)), /*#__PURE__*/React.createElement("p", null, inline(`86-90`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Desperation — backed into a corner, out of options everything`)), /*#__PURE__*/React.createElement("p", null, inline(`91-93`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Obsession — pursue singular goal regardless of co`)), /*#__PURE__*/React.createElement("p", null, inline(`94-96`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Confusion — seeking clarity of chaotic situation; lo`)), /*#__PURE__*/React.createElement("p", null, inline(`97-98`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Manipulation — use others as tools for a hidden ag game`)), /*#__PURE__*/React.createElement("p", null, inline(`99-00`), /*#__PURE__*/React.createElement("b", null, inline(` Faction Aligned — roll `)), inline(`d4`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(`: 1=Church, 2=Authority, 4=Chronoclasts`)), /*#__PURE__*/React.createElement("p", null, inline(`Theme Oracle (`), /*#__PURE__*/React.createElement("b", null, inline(`d100`)), inline(`)`)), /*#__PURE__*/React.createElement("p", null, inline(`01-02`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Identity`)), /*#__PURE__*/React.createElement("p", null, inline(`03-04`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Memory`)), /*#__PURE__*/React.createElement("p", null, inline(`05-06`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Loss`)), /*#__PURE__*/React.createElement("p", null, inline(`07-08`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Discovery`)), /*#__PURE__*/React.createElement("p", null, inline(`09-10`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Connection`)), /*#__PURE__*/React.createElement("p", null, inline(`11-12`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Transformation`)), /*#__PURE__*/React.createElement("p", null, inline(`13-14`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Sacrifice`)), /*#__PURE__*/React.createElement("p", null, inline(`15-16`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Redemption`)), /*#__PURE__*/React.createElement("p", null, inline(`17-18`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Power`)), /*#__PURE__*/React.createElement("p", null, inline(`19-20`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Truth`)), /*#__PURE__*/React.createElement("p", null, inline(`21-22`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Justice`)), /*#__PURE__*/React.createElement("p", null, inline(`23-24`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Creation`)), /*#__PURE__*/React.createElement("p", null, inline(`25-26`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Rebirth`)), /*#__PURE__*/React.createElement("p", null, inline(`27-28`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Order`)), /*#__PURE__*/React.createElement("p", null, inline(`29-30`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Freedom`)), /*#__PURE__*/React.createElement("p", null, inline(`31-32`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Courage`)), /*#__PURE__*/React.createElement("p", null, inline(`33-34`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Hope`)), /*#__PURE__*/React.createElement("p", null, inline(`35-36`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Faith`)), /*#__PURE__*/React.createElement("p", null, inline(`37-38`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Loyalty`)), /*#__PURE__*/React.createElement("p", null, inline(`39-40`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Innocence`)), /*#__PURE__*/React.createElement("p", null, inline(`41-42`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Wisdom`)), /*#__PURE__*/React.createElement("p", null, inline(`43-44`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Beauty`)), /*#__PURE__*/React.createElement("p", null, inline(`45-46`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Mortality`)), /*#__PURE__*/React.createElement("p", null, inline(`47-48`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Harmony`)), /*#__PURE__*/React.createElement("p", null, inline(`49-50`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Abundance`)), /*#__PURE__*/React.createElement("p", null, inline(`51-52`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Belonging`)), /*#__PURE__*/React.createElement("p", null, inline(`53-54`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Duty`)), /*#__PURE__*/React.createElement("p", null, inline(`55-56`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Forgiveness`)), /*#__PURE__*/React.createElement("p", null, inline(`57-58`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Ambition`)), /*#__PURE__*/React.createElement("p", null, inline(`59-60`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Curiosity`)), /*#__PURE__*/React.createElement("p", null, inline(`61-62`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Passion`)), /*#__PURE__*/React.createElement("p", null, inline(`63-64`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Unity`)), /*#__PURE__*/React.createElement("p", null, inline(`65-66`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Progress`)), /*#__PURE__*/React.createElement("p", null, inline(`67-68`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Illusion`)), /*#__PURE__*/React.createElement("p", null, inline(`69-70`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Simplicity`)), /*#__PURE__*/React.createElement("p", null, inline(`71-72`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Tradition`)), /*#__PURE__*/React.createElement("p", null, inline(`73-74`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Permanence`)), /*#__PURE__*/React.createElement("p", null, inline(`75-76`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Destiny`)), /*#__PURE__*/React.createElement("p", null, inline(`77-78`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Synchronicity`)), /*#__PURE__*/React.createElement("p", null, inline(`79-80`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Balance`)), /*#__PURE__*/React.createElement("p", null, inline(`81-82`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Adaptation`)), /*#__PURE__*/React.createElement("p", null, inline(`83-84`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Convergence`)), /*#__PURE__*/React.createElement("p", null, inline(`85-86`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Cycles`)), /*#__PURE__*/React.createElement("p", null, inline(`87-88`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Paradox`)), /*#__PURE__*/React.createElement("p", null, inline(`89-90`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Fragmentation`)), /*#__PURE__*/React.createElement("p", null, inline(`91-92`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Boundaries`)), /*#__PURE__*/React.createElement("p", null, inline(`93-94`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Transcendence`)), /*#__PURE__*/React.createElement("p", null, inline(`95-96`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Entropy`)), /*#__PURE__*/React.createElement("p", null, inline(`97-98`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Recursion`)), /*#__PURE__*/React.createElement("p", null, inline(`99-00`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Liminality`)), /*#__PURE__*/React.createElement("p", null, inline(`Timeline Shift Oracle (`), /*#__PURE__*/React.createElement("b", null, inline(`d100`)), inline(`)`)), /*#__PURE__*/React.createElement("p", null, inline(`01-05`), /*#__PURE__*/React.createElement("b", null, inline(` Color Inversion — All colors shift to complementary hues. Visually disorienting but functionally harmless. Lasts `)), inline(`1d6`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` hours.`)), /*#__PURE__*/React.createElement("p", null, inline(`06-10`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Architectural Mutation — Buildings morph styles mid-structure. Doors lead to wrong rooms. Windows show different exteriors.`)), /*#__PURE__*/React.createElement("p", null, inline(`11-15`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Gravity Rotation — Down shifts 90 degrees. Everything not anchored slides. Lasts 10 minutes or until you leave the area.`)), /*#__PURE__*/React.createElement("p", null, inline(`16-20`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Linguistic Splice — Two languages fuse. Everyone speaks chimera- tongue. Somehow mutually intelligible. Permanent in this location.`)), /*#__PURE__*/React.createElement("p", null, inline(`21-25`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Temporal Echo Layer — This location exists simultaneously in two eras. Both fully present, overlapping transparently. You can interact with both.`)), /*#__PURE__*/React.createElement("p", null, inline(`26-30`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Population Swap — Everyone in the area is suddenly someone else. They retain fragments of their old personality, bleeding through.`)), /*#__PURE__*/React.createElement("p", null, inline(`31-35`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Weather Anachronism — Weather from the wrong era or location. Snow in a desert. Aurora borealis at ground level. Lasts until you leave.`)), /*#__PURE__*/React.createElement("p", null, inline(`36-40`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Sound Displacement — All sounds play from wrong sources. Footsteps come from the sky. Music plays from people's eyes.`)), /*#__PURE__*/React.createElement("p", null, inline(`41-45`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Species Shift — Humans become other species while retaining human behavior. They don't notice. Lasts 1 hour.`)), /*#__PURE__*/React.createElement("p", null, inline(`46-50`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Emotional Reversal — All emotional responses invert. Joy becomes sorrow. Fear becomes courage. People act on reversed emotions as if normal.`)), /*#__PURE__*/React.createElement("p", null, inline(`51-55`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Probability Bubble — Unlikely events become common. Dropped objects fall upward half the time. Coins land on edge. Lasts 10 minutes.`)), /*#__PURE__*/React.createElement("p", null, inline(`56-60`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Memory Remix — Everyone remembers a different version of recent events. No consensus. Each memory equally vivid, mutually contradictory.`)), /*#__PURE__*/React.createElement("p", null, inline(`61-65`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Material Transmutation — Substances swap properties. Stone is liquid. Water is solid. Physics still works, just with the wrong materials.`)), /*#__PURE__*/React.createElement("p", null, inline(`66-70`), /*#__PURE__*/React.createElement("b", null, inline(` Narrative Jump Cut — Scene skips forward `)), inline(`1d6`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` hours without transition. You're suddenly elsewhere, mid- action. Consequences already in effect.`)), /*#__PURE__*/React.createElement("p", null, inline(`71-75`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Prophetic Static — Everyone sees 10 seconds into their own future constantly. Creates paralysis by analysis. Lasts 1 hour.`)), /*#__PURE__*/React.createElement("p", null, inline(`76-80`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Identity Diffusion — People lose distinct selfhood. Confused merger without telepathy — just boundary collapse. You're included. Lasts until you leave.`)), /*#__PURE__*/React.createElement("p", null, inline(`81-85`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Scale Distortion — Objects and people shift size randomly. Furniture towers like buildings. Insects swell to dog-size. Changes every few minutes.`)), /*#__PURE__*/React.createElement("p", null, inline(`86-90`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Causality Scramble — Actions occur in wrong order. Wound appears before blade cuts. Words heard before spoken. Lasts 10 minutes.`)), /*#__PURE__*/React.createElement("p", null, inline(`91-93`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Reality Splice — This location merges with a completely different location from another era. Both fully present, permanently overlapping.`)), /*#__PURE__*/React.createElement("p", null, inline(`94-96`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Observer Effect Amplified — Things only exist while you're looking at them. Turn away — room reconfigures. Turn back — different arrangement. Lasts 1 hour.`)), /*#__PURE__*/React.createElement("p", null, inline(`97-98`), /*#__PURE__*/React.createElement("b", null, inline(` Medium Shift — Reality operates as a different medium. Everything moves like underwater, or in stop- motion, or as animated painting. Physics unchanged, perception warped. 99 Full Stray Timeline Conversion The Chronoclast has successfully broken this branch. Roll Chronoscape: ERA + STRUCTURE + CONFLICT to determine what it's become. Irreversible. 00 The Chronoclast Leaves a Gift No shift occurs. Instead, you find an unstable Chrono-Tech device. Roll `)), inline(`d6`), /*#__PURE__*/React.createElement("b", null, inline(`: `)), inline(`1-2`), /*#__PURE__*/React.createElement("b", null, inline(` Paradox Engine, `)), inline(`3-4`), /*#__PURE__*/React.createElement("i", null, inline(``)), inline(` Reality Splicer, 5 Temporal Graffiti Kit, 6 The Chronoclast's Personal Card.`)))), /*#__PURE__*/React.createElement(ChPage, {
    side: "recto",
    runHead: "Oracle Tables",
    pageNum: basePage + 11,
    label: `ORACLE TABLES · p.${basePage + 11}`
  })));
}
AppendixC.pages = 12;
Object.assign(window, {
  AppendixC
});
