/* Printed page numbers match the PDF's one-based page positions (offset 0).
   Preserve legacy pages for the existing renderer and enrich the shared data. */
(function () {
  var BC = window.BC;
  function ref(r) {
    r.sourceId = "Blockchain-V2";
    r.printedPages = r.pages.slice();
    r.pdfPages = r.pages.slice();
    if (!r.figureOrTable && /(?:รูปภาพ|ตาราง)ที่\s*\d+/.test(r.heading))
      r.figureOrTable = r.heading.match(/(?:รูปภาพ|ตาราง)ที่\s*\d+(?:[–-]\d+)?/)[0];
  }
  BC.chapters.forEach(function (c) { c.topics.forEach(function (t) { t.refs.forEach(ref); }); });
  BC.questions.concat(BC.legacy, BC.flashcards).forEach(function (x) { x.refs.forEach(ref); });
  BC.glossary.forEach(function (g) { g.refs = [{ pages: g.pages.slice(), heading: g.term }]; g.refs.forEach(ref); });
  var ranges = [[13,59,83,84,143],[14,23,24,29,32,45,47,59,143,144,150,160,164],
    [33,44,45,46,54,57,139,151],[61,79,82],[84,104,150,155,157,159],
    [105,120,122,129,130,135,145,146,170,175],[19,30,35,48,63,78,98,104,114,117,158,162],
    [14,17,24,25,28,32,36,47,74,75,146,148,157,160,161,164,170,175]];
  BC.examSummary.forEach(function (s, i) { s.refs = [{ pages: ranges[i], heading: s.title }]; s.refs.forEach(ref); });
  BC.source.auditDate = "2026-10-08";
  BC.source.pageOffset = 0;
})();
