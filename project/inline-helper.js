// Inline mech-term + dice highlighter
(function(){
  const MECH = ["COHERENCE","PARADOX","ANCHOR STRENGTH","ANCHOR","SYNC","OBSERVE","WITNESS","UNFOLD","EXCISE","RECALL-IN-KIND","NAVIGATE","ENDURE","RESIST","IMPACT","OPERATE","INTEGRATE","NODE","ERA","COLLAPSE","LOG","CONFIGURATION","MUTATION","SCAR","MEMORY","CHRONICLE","DISPLACEMENT","PRECISION NAVIGATION","MODE","TAG","REASON","ACTION","DOWNTIME"].sort((a,b)=>b.length-a.length);
  const MR = new RegExp('\\b(' + MECH.map(t=>t.replace(/[.*+?^${}()|\[\]\\]/g,'\\$&')).join('|') + ')\\b','g');
  const DR = /\b(\d+d\d+|\d+\+|\+\d+|d100|d6|d10|d12|d20)\b/g;
  function splitOn(str, re, marker) {
    const out = [];
    let l = 0, m;
    re.lastIndex = 0;
    while ((m = re.exec(str))) {
      if (m.index > l) out.push({t:'text', s: str.slice(l, m.index)});
      out.push({t: marker, s: m[0]});
      l = m.index + m[0].length;
    }
    if (l < str.length) out.push({t:'text', s: str.slice(l)});
    return out;
  }
  window.inline = function(s) {
    const a = splitOn(s, MR, 'mech');
    const b = [];
    for (const seg of a) {
      if (seg.t === 'mech') b.push(seg);
      else for (const s2 of splitOn(seg.s, DR, 'dice')) b.push(s2);
    }
    return b.map((seg, i) => {
      if (seg.t === 'mech') return React.createElement('span', { className: 'mech-term', key: i }, seg.s);
      if (seg.t === 'dice') return React.createElement('b', { key: i }, seg.s);
      return seg.s;
    });
  };
})();