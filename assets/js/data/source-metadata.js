/* Printed page numbers match the PDF's one-based page positions (offset 0).
   Preserve legacy pages for the existing renderer and enrich the shared data. */
(function () {
  var BC = window.BC;
  function ref(r) {
    r.sourceId = BC.source.id;
    r.printedPages = r.pages.slice();
    r.pdfPages = r.pages.slice();
    if (!r.figureOrTable && /(?:รูปภาพ|ตาราง)ที่\s*\d+/.test(r.heading))
      r.figureOrTable = r.heading.match(/(?:รูปภาพ|ตาราง)ที่\s*\d+(?:[–-]\d+)?/)[0];
  }
  BC.chapters.forEach(function (c) { c.topics.forEach(function (t) { t.refs.forEach(ref); }); });
  BC.questions.concat(BC.legacy, BC.flashcards).forEach(function (x) { x.refs.forEach(ref); });
  BC.glossary.forEach(function (g) { g.refs = [{ pages: g.pages.slice(), heading: g.term }]; g.refs.forEach(ref); });
  function span(a, b) { var out = []; for (var n = a; n <= b; n++) out.push(n); return out; }
  var ranges = [[13,14,16,17,19,22,26,27,28,29,30,31,32,33,36,52,53,58,59,83,84,143],[14,23,24,29,32,45,47,59,143,144,150,160,161,162,163,164],
    span(33,46).concat(span(54,57),[139,151]),span(61,82),span(83,104).concat([150,155,157,159]),
    span(105,117).concat(span(120,148),span(170,175)),[19,20,23,25,28,29,30,31,32,35,36,47,48,50,63,78,98,99,100,101,102,103,104,114,115,116,117,123,124,125,126,127,128,129,156,157,158,159,160,161,162],
    [14,17,24,25,28,32,36,47,74,75,146,148,157,160,161,164,170,175]];
  BC.examSummary.forEach(function (s, i) { s.refs = [{ pages: ranges[i], heading: s.title }]; s.refs.forEach(ref); });
  BC.source.auditDate = "2026-10-08";
  BC.source.pageOffset = 0;
})();
