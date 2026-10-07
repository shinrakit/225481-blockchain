/* Version-1 backups, validated atomically. Tests use an injected storage adapter. */
(function () {
  "use strict";
  var BC = window.BC, SCHEMA = 1;
  var LIMITS = { practiceLog: 1500, mockHistory: 30, sessions: 60 };
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  var obj = function (x) { return !!x && typeof x === "object" && !Array.isArray(x); };
  var integer = function (x) { return Number.isSafeInteger(x) && x >= 0; };
  var time = function (x) { return integer(x) && x <= 8640000000000000; };
  var bit = function (x) { return x === 0 || x === 1; };
  function blank() {
    return { schemaVersion: SCHEMA, contentVersion: BC.contentVersion || "", savedAt: null,
      readTopics: {}, lastTopic: null, bookmarks: {}, flashcards: {}, qstats: {}, practiceLog: [],
      practiceSession: null, mock: { active: null, history: [] },
      settings: { fontScale: 1, dark: false, goal: null, timerMinutes: 90 } };
  }
  function knownIds() {
    var k = { topics: Object.create(null), questions: Object.create(null), cards: Object.create(null), mocks: Object.create(null) };
    BC.chapters.forEach(function (c) { c.topics.forEach(function (t) { k.topics[t.id] = t; }); });
    BC.questions.forEach(function (q) { k.questions[q.id] = q; });
    BC.legacy.forEach(function (q) { k.questions[q.id] = { options: q.originalOptions, correctOptionId: q.markedOptionId }; });
    BC.flashcards.forEach(function (f) { k.cards[f.id] = f; });
    BC.mockExams.forEach(function (m) { k.mocks[m.id] = m; });
    return k;
  }
  function sanitize(input, known) {
    try {
      function check(ok, field) { if (!ok) throw new Error("รูปแบบ/ค่าไม่ถูกต้อง: " + field); }
      function map(src, set, validator, field) {
        check(obj(src), field); var out = {};
        Object.keys(src).forEach(function (id) {
          check(own(set, id), field + " — ID ไม่รู้จัก: " + id); out[id] = validator(src[id], id);
        }); return out;
      }
      function timestamp(v, field) { check(time(v), field); return v; }
      function uniqueOrder(order, field) {
        check(Array.isArray(order) && order.length > 0 && order.length <= 205, field);
        var seen = Object.create(null);
        order.forEach(function (id) { check(typeof id === "string" && own(known.questions, id) && !seen[id], field + " — ID ไม่รู้จักหรือซ้ำ"); seen[id] = true; });
        return order.slice();
      }
      function option(id, qid) { return typeof id === "string" && known.questions[qid].options.some(function (o) { return o.id === id; }); }
      function optionOrders(src, order) {
        check(obj(src) && Object.keys(src).length === order.length, "optOrder"); var out = {};
        order.forEach(function (id) {
          var ids = src[id]; check(Array.isArray(ids) && ids.length === 4, "optOrder " + id);
          check(new Set(ids).size === 4 && ids.every(function (oid) { return option(oid, id); }), "optOrder " + id); out[id] = ids.slice();
        }); return out;
      }
      function answers(src, order) {
        var allowed = Object.create(null); order.forEach(function (id) { allowed[id] = 1; });
        return map(src, allowed, function (v, id) { check(option(v, id), "answers " + id); return v; }, "answers");
      }
      function flags(src, order) {
        var allowed = Object.create(null); order.forEach(function (id) { allowed[id] = 1; });
        return map(src, allowed, function (v) { check(v === 1, "flags"); return 1; }, "flags");
      }
      function goal(v) { check(v === null || (integer(v) && v >= 1 && v <= 90), "goal"); return v; }
      function attempt(a, completed) {
        check(obj(a) && typeof a.id === "string" && /^m[a-z0-9_-]{1,79}$/i.test(a.id), "attempt.id");
        check(typeof a.setId === "string" && own(known.mocks, a.setId), "setId");
        var order = uniqueOrder(a.order, "mock.order"), set = known.mocks[a.setId];
        check(order.length === 90 && order.length === set.questionIds.length && order.every(function (id) { return set.questionIds.indexOf(id) >= 0; }), "ชุดสอบต้องมีครบ 90 ข้อตรงกับชุดที่เลือก");
        var out = { id: a.id, setId: a.setId, order: order, optOrder: optionOrders(a.optOrder, order), answers: answers(a.answers, order), flags: flags(a.flags, order), startedAt: timestamp(a.startedAt, "startedAt") };
        check(typeof a.timed === "boolean", "timed"); out.timed = a.timed;
        check(a.timed ? integer(a.minutes) && a.minutes >= 5 && a.minutes <= 300 : a.minutes === null, "minutes"); out.minutes = a.minutes;
        if (!completed) {
          check(a.submitted === false, "submitted"); check(integer(a.current) && a.current < order.length, "current");
          check(a.timed ? time(a.deadline) && a.deadline === a.startedAt + a.minutes * 60000 : a.deadline === null, "deadline");
          out.current = a.current; out.deadline = a.deadline; out.submitted = false;
        } else {
          out.submittedAt = timestamp(a.submittedAt, "submittedAt");
          check(out.submittedAt >= out.startedAt && time(a.timeUsedMs) && a.timeUsedMs <= out.submittedAt - out.startedAt, "timeUsedMs");
          check(!a.timed || a.timeUsedMs <= a.minutes * 60000, "timeUsedMs"); check(typeof a.autoSubmitted === "boolean", "autoSubmitted");
          var scored = BC.logic.score(order, out.answers);
          function aggregates(src, expected) {
            check(obj(src) && Object.keys(src).length === Object.keys(expected).length, "คะแนนแยกบท/หัวข้อ");
            Object.keys(expected).forEach(function (id) { check(own(src, id) && obj(src[id]) && src[id].n === expected[id].n && src[id].c === expected[id].c, "คะแนนแยกบท/หัวข้อ " + id); });
          }
          check(a.score === scored.score && a.total === scored.total, "คะแนนไม่ตรงกับคำตอบ"); aggregates(a.byChapter, scored.byChapter); aggregates(a.byTopic, scored.byTopic);
          out.score = scored.score; out.total = scored.total; out.byChapter = scored.byChapter; out.byTopic = scored.byTopic;
          out.timeUsedMs = a.timeUsedMs; out.autoSubmitted = a.autoSubmitted; out.goal = goal(a.goal);
        } return out;
      }
      check(obj(input) && input.schemaVersion === SCHEMA, "schemaVersion ต้องเป็น 1"); var out = blank();
      check(typeof input.contentVersion === "string", "contentVersion"); check(input.savedAt === null || time(input.savedAt), "savedAt"); out.savedAt = input.savedAt;
      out.readTopics = map(input.readTopics, known.topics, function (v) { return timestamp(v, "readTopics"); }, "readTopics");
      check(input.lastTopic === null || (typeof input.lastTopic === "string" && own(known.topics, input.lastTopic)), "lastTopic"); out.lastTopic = input.lastTopic;
      out.bookmarks = map(input.bookmarks, known.questions, function (v) { return timestamp(v, "bookmarks"); }, "bookmarks");
      out.flashcards = map(input.flashcards, known.cards, function (v) { check(v === "known" || v === "learning", "flashcards"); return v; }, "flashcards");
      out.qstats = map(input.qstats, known.questions, function (v) {
        check(obj(v) && integer(v.n) && integer(v.c) && v.c <= v.n && bit(v.last) && time(v.t), "qstats"); return { n: v.n, c: v.c, last: v.last, t: v.t };
      }, "qstats");
      check(Array.isArray(input.practiceLog), "practiceLog");
      out.practiceLog = input.practiceLog.map(function (r) { check(obj(r) && typeof r.q === "string" && own(known.questions, r.q) && bit(r.ok) && time(r.t), "practiceLog"); return { q: r.q, ok: r.ok, t: r.t }; }).slice(-LIMITS.practiceLog);
      check(input.practiceSession === null || obj(input.practiceSession), "practiceSession");
      if (input.practiceSession !== null) {
        var p = input.practiceSession, order = uniqueOrder(p.order, "practice.order"); check(obj(p.filters), "filters"); var filters = {};
        var allowedFilters = { source: ["new", "legacy", "wrong", "bookmarked"], chapter: ["", "1", "2", "3"], difficulty: ["all", "basic", "applied", "analysis"], count: ["10", "20", "30", "all"] };
        Object.keys(allowedFilters).forEach(function (f) { if (own(p.filters, f)) { check(allowedFilters[f].indexOf(p.filters[f]) >= 0, "filters." + f); filters[f] = p.filters[f]; } });
        if (own(p.filters, "topic")) { check(p.filters.topic === "" || own(known.topics, p.filters.topic), "filters.topic"); filters.topic = p.filters.topic; }
        check(integer(p.idx) && p.idx <= order.length && time(p.startedAt), "practice.idx/startedAt");
        var allowed = Object.create(null); order.forEach(function (id) { allowed[id] = 1; });
        var done = map(p.done, allowed, function (d, id) { check(obj(d) && option(d.chosen, id) && typeof d.ok === "boolean" && d.ok === (d.chosen === known.questions[id].correctOptionId), "practice.done " + id); return { chosen: d.chosen, ok: d.ok }; }, "practice.done");
        out.practiceSession = { filters: filters, order: order, optOrder: optionOrders(p.optOrder, order), idx: p.idx, done: done, startedAt: p.startedAt };
      }
      check(obj(input.mock) && Array.isArray(input.mock.history), "mock"); var attempts = Object.create(null);
      out.mock.history = input.mock.history.map(function (h) { var a = attempt(h, true); check(!attempts[a.id], "attempt.id ซ้ำ"); attempts[a.id] = 1; return a; }).slice(-LIMITS.mockHistory);
      check(input.mock.active === null || obj(input.mock.active), "mock.active");
      if (input.mock.active !== null) { out.mock.active = attempt(input.mock.active, false); check(!attempts[out.mock.active.id], "ชุดสอบส่งไปแล้ว"); }
      check(obj(input.settings), "settings"); var s = input.settings;
      check(typeof s.fontScale === "number" && isFinite(s.fontScale) && s.fontScale >= 0.85 && s.fontScale <= 1.4, "fontScale");
      check(typeof s.dark === "boolean" && integer(s.timerMinutes) && s.timerMinutes >= 5 && s.timerMinutes <= 300, "settings");
      out.settings = { fontScale: s.fontScale, dark: s.dark, goal: goal(s.goal), timerMinutes: s.timerMinutes };
      return { ok: true, state: out, dropped: 0 };
    } catch (e) { return { ok: false, error: e.message }; }
  }
  function createStore(options) {
    options = options || {};
    var KEY = options.key || "bcstudy:v1", PREFIX = options.prefix || "bcstudy:";
    var state = blank(), mode = "memory", status = { mode: mode, message: "", lastError: null, corruptRaw: null };
    function storage() { return own(options, "storage") ? options.storage : window.localStorage; }
    function memory(e) { mode = "memory"; status.mode = mode; status.message = "บันทึกลงเครื่องไม่ได้" + (e && e.name ? " (" + e.name + ")" : "") + " — ข้อมูลอยู่เฉพาะรอบนี้ ให้ส่งออก JSON ก่อนปิดหน้า"; status.lastError = status.message; }
    function load() {
      var raw;
      try {
        var probe = PREFIX + "probe", adapter = storage(); adapter.setItem(probe, "1"); adapter.removeItem(probe); raw = adapter.getItem(KEY);
        mode = "local"; status = { mode: mode, message: "บันทึกอัตโนมัติในเบราว์เซอร์นี้ (localStorage)", lastError: null, corruptRaw: null };
        var previousBackup = adapter.getItem(PREFIX + "corrupt-backup");
        if (previousBackup) { status.corruptRaw = previousBackup; status.lastError = "มีสำเนาข้อมูลเสียหายเดิม ดาวน์โหลดได้ที่หน้า ความคืบหน้า"; }
      } catch (e) { memory(e); return; }
      if (!raw) return;
      try { var res = sanitize(JSON.parse(raw), knownIds()); if (!res.ok) throw new Error(res.error); state = res.state; }
      catch (e) {
        status.corruptRaw = raw; try { storage().setItem(PREFIX + "corrupt-backup", raw); } catch (ignored) { /* retained in memory */ }
        status.lastError = "ข้อมูลที่บันทึกไว้เสียหาย (" + e.message + ") — เริ่มรอบใหม่ สำเนาเดิมดาวน์โหลดได้ที่หน้า ความคืบหน้า"; state = blank();
      }
    }
    function save() {
      state.savedAt = Date.now(); if (mode !== "local") return false;
      try { storage().setItem(KEY, JSON.stringify(state)); return true; }
      catch (e) {
        if (e && e.name === "QuotaExceededError") {
          var smaller = Object.assign({}, state, { practiceLog: state.practiceLog.slice(-500), mock: { active: state.mock.active, history: state.mock.history.slice(-10) } });
          try { storage().setItem(KEY, JSON.stringify(smaller)); state = smaller; status.lastError = "พื้นที่ใกล้เต็ม ตัดประวัติเก่าบางส่วนออกแล้ว"; return true; } catch (retry) { memory(retry); return false; }
        } memory(e); return false;
      }
    }
    function exportJSON() { return JSON.stringify({ app: "bc-gov-study", schemaVersion: SCHEMA, contentVersion: BC.contentVersion, exportedAt: new Date().toISOString(), data: state }, null, 1); }
    function importJSON(text) {
      if (typeof text !== "string" || new Blob([text]).size > 3 * 1024 * 1024) return { ok: false, error: "ไฟล์ใหญ่เกิน 3 MB หรืออ่านไม่ได้" };
      var backup; try { backup = JSON.parse(text); } catch (e) { return { ok: false, error: "ไม่ใช่ JSON ที่ถูกต้อง" }; }
      if (!obj(backup) || backup.app !== "bc-gov-study" || backup.schemaVersion !== SCHEMA || typeof backup.contentVersion !== "string" || typeof backup.exportedAt !== "string" || !isFinite(Date.parse(backup.exportedAt))) return { ok: false, error: "ไม่ใช่ไฟล์สำรองเวอร์ชัน 1 ของเว็บไซต์นี้" };
      var res = sanitize(backup.data, knownIds()); if (!res.ok) return res; state = res.state; save(); return { ok: true, dropped: 0 };
    }
    function reset() {
      try { var adapter = storage(), keys = []; for (var i = 0; i < adapter.length; i++) { var k = adapter.key(i); if (k && k.indexOf(PREFIX) === 0) keys.push(k); } keys.forEach(function (k) { adapter.removeItem(k); }); }
      catch (e) { memory(e); }
      state = blank(); status.corruptRaw = null; status.lastError = mode === "memory" ? status.message : null; save();
    }
    return { load: load, save: save, reset: reset, exportJSON: exportJSON, importJSON: importJSON,
      get state() { return state; }, get status() { status.mode = mode; return status; }, KEY: KEY, LIMITS: LIMITS,
      _blank: blank, _sanitize: sanitize, _knownIds: knownIds };
  }
  BC.createStore = createStore; BC.store = createStore();
})();
