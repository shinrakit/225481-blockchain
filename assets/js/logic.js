/* Shared production logic. Classic script: no network, DOM or storage access. */
(function () {
  "use strict";
  var BC = window.BC;
  BC.contentVersion = "2026-10-08";
  function question(id) { return BC.questions.filter(function (q) { return q.id === id; })[0]; }
  function shuffle(ids, random) {
    var out = ids.slice(), rng = random || Math.random;
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1)), old = out[i]; out[i] = out[j]; out[j] = old;
    } return out;
  }
  function score(order, answers) {
    var result = { score: 0, total: order.length, byChapter: {}, byTopic: {} };
    order.forEach(function (id) {
      var q = question(id);
      if (!q || q.reviewStatus !== "verified") throw new Error("ข้อสอบยังไม่ผ่านการตรวจ: " + id);
      var ok = answers[id] === q.correctOptionId;
      if (ok) result.score++;
      [[result.byChapter, q.chapterId], [result.byTopic, q.topicId]].forEach(function (pair) {
        var row = pair[0][pair[1]] = pair[0][pair[1]] || { c: 0, n: 0 }; row.n++; if (ok) row.c++;
      });
    }); return result;
  }
  function expired(a, now) { return !!a && a.deadline !== null && now >= a.deadline; }
  function submit(state, auto, now, limits) {
    var a = state.mock.active;
    if (!a || a.submitted) return null;
    if (state.mock.history.some(function (h) { return h.id === a.id; })) { state.mock.active = null; return a.id; }
    var result = score(a.order, a.answers), end = a.deadline === null ? now : Math.min(now, a.deadline);
    a.submitted = true;
    a.order.forEach(function (id) {
      var ok = a.answers[id] === question(id).correctOptionId, stat = state.qstats[id] || { n: 0, c: 0, last: 0, t: 0 };
      stat.n++; if (ok) stat.c++; stat.last = ok ? 1 : 0; stat.t = now;
      state.qstats[id] = stat; state.practiceLog.push({ q: id, ok: ok ? 1 : 0, t: now });
    });
    state.practiceLog = state.practiceLog.slice(-limits.practiceLog);
    state.mock.history.push({ id: a.id, setId: a.setId, startedAt: a.startedAt, submittedAt: now,
      timeUsedMs: Math.max(0, end - a.startedAt), timed: a.timed, minutes: a.minutes,
      score: result.score, total: result.total, byChapter: result.byChapter, byTopic: result.byTopic,
      answers: a.answers, order: a.order, optOrder: a.optOrder, flags: a.flags,
      autoSubmitted: !!auto || expired(a, now), goal: state.settings.goal });
    state.mock.history = state.mock.history.slice(-limits.mockHistory); state.mock.active = null; return a.id;
  }
  BC.logic = { shuffle: shuffle, score: score, expired: expired, submitMock: submit };
})();
