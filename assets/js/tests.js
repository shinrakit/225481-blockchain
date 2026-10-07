/* tests.js — ตรวจโครงสร้างข้อมูล blueprint การจับคู่คำตอบ คะแนน และ recovery (ไม่ใช้ network) */
(function () {
  var BC = window.BC, out = document.getElementById("out"), pass = 0, fail = 0;
  function t(name, fn) {
    var li = document.createElement("li");
    try { var r = fn(); if (r === false) throw new Error("เงื่อนไขเป็นเท็จ"); li.className = "pass"; li.textContent = "✓ " + name; pass++; }
    catch (e) { li.className = "fail"; li.textContent = "✗ " + name + " — " + e.message; fail++; }
    out.appendChild(li);
  }
  function eq(a, b, m) { if (a !== b) throw new Error((m || "") + " คาด " + b + " ได้ " + a); }
  var Q = BC.questions, L = BC.legacy, topics = {}, tcount = 0;
  BC.chapters.forEach(function (c) { c.topics.forEach(function (x) { topics[x.id] = c.id; tcount++; }); });
  var qmap = {}; Q.forEach(function (q) { qmap[q.id] = q; });
  var BAD = /lorem|TODO|เพิ่มเนื้อหาภายหลัง|placeholder|�/i;

  /* ---------- เนื้อหา ---------- */
  t("อ้างอิงทุกประเภทมี sourceId, printedPages, pdfPages และ heading", function () {
    var all = BC.questions.concat(BC.legacy, BC.flashcards, BC.glossary, BC.examSummary);
    BC.chapters.forEach(function (c) { all = all.concat(c.topics); });
    all.forEach(function (x) { x.refs.forEach(function (r) {
      if (r.sourceId !== "Blockchain-V2" || !r.heading || !r.printedPages.length ||
        JSON.stringify(r.printedPages) !== JSON.stringify(r.pdfPages) ||
        r.pdfPages.some(function (p) { return !Number.isInteger(p) || p < 1 || p > 192; })) throw new Error(x.id);
    }); });
  });
  t("มี 3 บท และหัวข้อบทละ 19/18/16", function () { eq(BC.chapters.length, 3); eq(BC.chapters.map(function (c) { return c.topics.length; }).join("/"), "19/18/16"); });
  t("topic id ไม่ซ้ำ", function () { eq(Object.keys(topics).length, tcount); });
  t("ทุกหัวข้อมีเป้าหมาย เนื้อหา จุดสับสน คำถามทบทวน สรุป อ้างอิง", function () {
    BC.chapters.forEach(function (c) { c.topics.forEach(function (x) {
      if (!x.objectives.length || x.body.length < 400 || !x.confusions.length || !x.recall.length || !x.summary.length || !x.refs.length) throw new Error(x.id);
    }); });
  });
  t("เลขหน้าอ้างอิงในหัวข้ออยู่ใน 1–192", function () {
    BC.chapters.forEach(function (c) { c.topics.forEach(function (x) {
      x.pages.concat.apply(x.pages, x.refs.map(function (r) { return r.pages; })).forEach(function (p) { if (p < 1 || p > 192) throw new Error(x.id + " p" + p); });
    }); });
  });
  t("ไม่มี placeholder/อักขระเสียในบทเรียน อภิธานศัพท์ สรุป", function () {
    var s = JSON.stringify([BC.chapters, BC.glossary, BC.examSummary]);
    if (BAD.test(s)) throw new Error("พบ " + BAD.exec(s)[0]);
  });
  t("อภิธานศัพท์ ≥ 60 คำ และชี้ topic จริง", function () { if (BC.glossary.length < 60) throw new Error(BC.glossary.length); BC.glossary.forEach(function (g) { if (!topics[g.topicId]) throw new Error(g.id); }); });
  t("บัตรคำ ≥ 60 ใบ บทละ ≥ 20 และ id ไม่ซ้ำ", function () {
    var by = {}, ids = {}; BC.flashcards.forEach(function (f) { by[f.chapterId] = (by[f.chapterId] || 0) + 1; if (ids[f.id]) throw new Error("ซ้ำ " + f.id); ids[f.id] = 1; if (!topics[f.topicId] || !f.front || !f.back) throw new Error(f.id); });
    if (BC.flashcards.length < 60) throw new Error("น้อยเกิน"); [1, 2, 3].forEach(function (c) { if (by[c] < 20) throw new Error("บท " + c); });
  });
  t("บัตรคำครอบคลุมทุกหัวข้อ", function () { var s = {}; BC.flashcards.forEach(function (f) { s[f.topicId] = 1; }); Object.keys(topics).forEach(function (k) { if (!s[k]) throw new Error(k); }); });

  /* ---------- ข้อฝึกใหม่ ---------- */
  t("ข้อใหม่ 180 ข้อ บทละ 60", function () { eq(Q.length, 180); [1, 2, 3].forEach(function (c) { eq(Q.filter(function (q) { return q.chapterId === c; }).length, 60, "บท " + c); }); });
  t("ระดับต่อบท 18/30/12", function () { [1, 2, 3].forEach(function (c) { ["basic", "applied", "analysis"].forEach(function (d, i) { eq(Q.filter(function (q) { return q.chapterId === c && q.difficulty === d; }).length, [18, 30, 12][i], "บท " + c + " " + d); }); }); });
  t("question id ไม่ซ้ำ และ option id ไม่ซ้ำทั้งคลัง", function () { var ids = {}; Q.forEach(function (q) { if (ids[q.id]) throw new Error(q.id); ids[q.id] = 1; q.options.forEach(function (o) { if (ids[o.id]) throw new Error(o.id); ids[o.id] = 1; }); }); });
  t("ทุกข้อมี 4 ตัวเลือก และ correctOptionId ตรงหนึ่งตัวเลือก", function () { Q.forEach(function (q) { eq(q.options.length, 4, q.id); eq(q.options.filter(function (o) { return o.id === q.correctOptionId; }).length, 1, q.id); }); });
  t("explanation และ why ทั้ง 4 ตัวเลือก และ misconception ไม่ว่าง ไม่สั้นผิดปกติ", function () { Q.forEach(function (q) { if (q.explanation.length < 20 || q.misconception.length < 10) throw new Error(q.id); q.options.forEach(function (o) { if (!o.text || o.why.length < 15) throw new Error(q.id + " " + o.id); }); }); });
  t("topicId/chapterId/ref ชี้ข้อมูลจริง และเลขหน้า 1–192", function () { Q.forEach(function (q) { if (topics[q.topicId] !== q.chapterId) throw new Error(q.id); if (!q.refs.length) throw new Error(q.id); q.refs.forEach(function (r) { r.pages.forEach(function (p) { if (p < 1 || p > 192) throw new Error(q.id + " p" + p); }); }); }); });
  t("ทุกข้อมีสถานะ verified และไม่มี placeholder", function () { Q.forEach(function (q) { eq(q.reviewStatus || (BC.reviewStatus || {})[q.id], "verified", q.id); }); if (BAD.test(JSON.stringify(Q))) throw new Error("placeholder"); });
  t("ไม่มี “ถูกทุกข้อ/ไม่มีข้อใดถูก” ในตัวเลือก", function () { Q.forEach(function (q) { q.options.forEach(function (o) { if (/ถูกทุกข้อ|ไม่มีข้อใดถูก/.test(o.text)) throw new Error(q.id); }); }); });
  t("ข้อความโจทย์ไม่ซ้ำหลัง normalize", function () { var s = {}; Q.forEach(function (q) { var k = q.stem.replace(/[\s\*“”"'()]/g, "").toLowerCase(); if (s[k]) throw new Error(q.id + "=" + s[k]); s[k] = q.id; }); });
  t("ทุกหัวข้อมีข้อฝึกอย่างน้อย 1 ข้อ", function () { var s = {}; Q.forEach(function (q) { s[q.topicId] = 1; }); Object.keys(topics).forEach(function (k) { if (!s[k]) throw new Error(k); }); });

  /* ---------- แนวเดิม ---------- */
  t("แนวเดิม 25 ข้อ หมายเลข 1–25 ไม่ขาดไม่ซ้ำ ข้อละ 4 ตัวเลือก มีคำตอบทำเครื่องหมาย 1 ตัว", function () {
    eq(L.length, 25); var seen = {}; L.forEach(function (x) { seen[x.sourceNumber] = 1; eq(x.originalOptions.length, 4); eq(x.originalOptions.filter(function (o) { return o.id === x.markedOptionId; }).length, 1, "ข้อ " + x.sourceNumber); if (!x.explanation || !x.refs.length) throw new Error("ข้อ " + x.sourceNumber); });
    for (var i = 1; i <= 25; i++) if (!seen[i]) throw new Error("ขาดข้อ " + i);
  });
  t("แนวเดิมข้อ 24 ติดสถานะ ambiguous และมีฉบับปรับแยก", function () { var x = L.filter(function (y) { return y.sourceNumber === 24; })[0]; eq(x.status, "ambiguous"); if (!x.correctedVariant) throw new Error("ไม่มีฉบับปรับ"); eq(L.filter(function (y) { return y.status === "ambiguous"; }).length, 1); });

  /* ---------- ชุดจำลอง ---------- */
  var A = BC.mockExams[0], B = BC.mockExams[1];
  t("ชุด A/B ชุดละ 90 ข้อ id ไม่ซ้ำภายในชุด", function () { eq(A.questionIds.length, 90); eq(B.questionIds.length, 90); [A, B].forEach(function (m) { var s = {}; m.questionIds.forEach(function (id) { if (s[id]) throw new Error(id); s[id] = 1; if (!qmap[id]) throw new Error("ไม่มี " + id); }); }); });
  t("A/B ไม่ซ้ำกัน และรวมกันครบ 180 ข้อ", function () { var s = {}; A.questionIds.forEach(function (i) { s[i] = 1; }); B.questionIds.forEach(function (i) { if (s[i]) throw new Error("ซ้ำ " + i); s[i] = 1; }); eq(Object.keys(s).length, 180); });
  t("ทุกบทในแต่ละชุด 30 ข้อ ระดับ 9/15/6", function () { [A, B].forEach(function (m) { [1, 2, 3].forEach(function (c) { var ids = m.questionIds.map(function (i) { return qmap[i]; }).filter(function (q) { return q.chapterId === c; }); eq(ids.length, 30); ["basic", "applied", "analysis"].forEach(function (d, k) { eq(ids.filter(function (q) { return q.difficulty === d; }).length, [9, 15, 6][k], m.id + " บท " + c + " " + d); }); }); }); });
  t("ทุกหัวข้อหลักปรากฏในทั้งชุด A และ B (ห่างกันไม่เกิน 1 ข้อ)", function () { var ca = {}, cb = {}; A.questionIds.forEach(function (i) { var k = qmap[i].topicId; ca[k] = (ca[k] || 0) + 1; }); B.questionIds.forEach(function (i) { var k = qmap[i].topicId; cb[k] = (cb[k] || 0) + 1; }); Object.keys(topics).forEach(function (k) { if (!ca[k] || !cb[k]) throw new Error(k); if (Math.abs(ca[k] - cb[k]) > 1) throw new Error(k + " " + ca[k] + "/" + cb[k]); }); });
  t("ชุดจำลองไม่มีข้อแนวเดิม/ข้อกำกวม", function () { A.questionIds.concat(B.questionIds).forEach(function (i) { if (/^legacy/.test(i)) throw new Error(i); }); });

  /* ---------- ตรรกะคะแนนและ shuffle ---------- */
  function shuffle(a) { return BC.logic.shuffle(a); }
  function score(ids, answers) { return BC.logic.score(ids, answers).score; }
  function memoryStorage() {
    var data = Object.create(null);
    return { failWrite: false, failRead: false, quota: false, writes: 0,
      get length() { return Object.keys(data).length; },
      key: function (i) { return Object.keys(data)[i] || null; },
      getItem: function (k) { if (this.failRead) throw new Error("read denied"); return Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null; },
      setItem: function (k, v) { this.writes++; if (this.failWrite) throw new DOMException("blocked", this.quota ? "QuotaExceededError" : "SecurityError"); data[k] = String(v); },
      removeItem: function (k) { delete data[k]; }
    };
  }
  var adapter = memoryStorage(), store = BC.createStore({ storage: adapter, key: "test:v1", prefix: "test:" });
  store.load();
  function known() { return store._knownIds(); }
  function backup(data) { var b = JSON.parse(store.exportJSON()); b.data = data; return JSON.stringify(b); }
  function active(setId, timed) {
    var m = BC.mockExams.filter(function (x) { return x.id === setId; })[0], oo = {};
    m.questionIds.forEach(function (id) { oo[id] = shuffle(qmap[id].options.map(function (o) { return o.id; })); });
    return { id: "mfixture", setId: setId, order: shuffle(m.questionIds), optOrder: oo, answers: {}, flags: {}, current: 0,
      startedAt: 1000, timed: !!timed, minutes: timed ? 5 : null, deadline: timed ? 301000 : null, submitted: false };
  }
  t("คะแนนจริง: ถูกหมด=90 ผิดหมด=0 ว่างหมด=0 ผสม=30 ทั้งชุด A/B", function () {
    [A, B].forEach(function (m) {
      var all = {}, wrong = {}, mix = {};
      m.questionIds.forEach(function (id, i) { var q = qmap[id]; all[id] = q.correctOptionId; wrong[id] = q.options.filter(function (o) { return o.id !== q.correctOptionId; })[0].id; if (i < 30) mix[id] = all[id]; else if (i < 60) mix[id] = wrong[id]; });
      eq(score(m.questionIds, all), 90); eq(score(m.questionIds, wrong), 0); eq(score(m.questionIds, {}), 0); eq(score(m.questionIds, mix), 30);
      var result = BC.logic.score(m.questionIds, mix); eq(Object.keys(result.byChapter).length, 3);
      eq(Object.keys(result.byTopic).reduce(function (n, id) { return n + result.byTopic[id].n; }, 0), 90);
    });
  });
  t("shuffle จริงรักษา ID คำตอบและเหตุผลครบทุกข้อ 20 รอบ และไม่แก้ array ต้นฉบับ", function () {
    for (var r = 0; r < 20; r++) Q.forEach(function (q) {
      var input = q.options.map(function (o) { return o.id; }), before = input.join(), order = shuffle(input);
      eq(input.join(), before); eq(new Set(order).size, 4); eq(order.slice().sort().join(), input.slice().sort().join());
      var correct = q.options.filter(function (o) { return o.id === order[order.indexOf(q.correctOptionId)]; })[0];
      if (!correct || !correct.why) throw new Error(q.id);
    });
  });
  t("storage ทดสอบเป็น adapter จำลอง แยกจาก BC.store ของผู้ใช้", function () { if (store === BC.store) throw new Error("ใช้ store จริง"); eq(store.KEY, "test:v1"); });
  t("import ID ไม่รู้จักปฏิเสธทั้งไฟล์และเก็บข้อมูลเดิม", function () {
    store.state.readTopics["ch1-intro"] = 123;
    var s = store._blank(); s.readTopics["ไม่มีจริง"] = 1;
    eq(store.importJSON(backup(s)).ok, false); eq(store.state.readTopics["ch1-intro"], 123);
    s = store._blank(); s.qstats.fake = { n: 1, c: 1, last: 1, t: 1 }; eq(store.importJSON(backup(s)).ok, false);
  });
  t("import JSON เสีย ผิดแอป เวอร์ชันผิด ขนาดเกิน รักษาข้อมูลเดิม", function () {
    store.state.readTopics["ch1-intro"] = 123;
    ["{broken", '{"app":"other"}', "x".repeat(3 * 1024 * 1024 + 5)].forEach(function (txt) { eq(store.importJSON(txt).ok, false); });
    var b = JSON.parse(store.exportJSON()); b.schemaVersion = 99; eq(store.importJSON(JSON.stringify(b)).ok, false);
    b.schemaVersion = 1; b.data.schemaVersion = -1; eq(store.importJSON(JSON.stringify(b)).ok, false);
    eq(store.state.readTopics["ch1-intro"], 123);
  });
  t("import ชนิดข้อมูลผิด/ตัวเลขผิด/prototype keys/ข้อความ HTML ถูกปฏิเสธ", function () {
    var s = store._blank(); s.readTopics["ch1-intro"] = '<img src=x onerror=alert(1)>'; eq(store._sanitize(s, known()).ok, false);
    s = store._blank(); s.qstats["bc-ch1-001"] = { n: 1, c: 2, last: 1, t: 1 }; eq(store._sanitize(s, known()).ok, false);
    s = store._blank(); s.qstats["bc-ch1-001"] = { n: Infinity, c: 0, last: 0, t: 1 }; eq(store._sanitize(s, known()).ok, false);
    s = store._blank(); s.bookmarks = JSON.parse('{"__proto__":1}'); eq(store._sanitize(s, known()).ok, false);
    s = store._blank(); s.settings.dark = "yes"; eq(store._sanitize(s, known()).ok, false);
  });
  t("export/import v1: อ่านแล้ว bookmark บัตรคำ ผลฝึก และตัวเลือกเดิมกลับครบ", function () {
    var s = store._blank(), id = A.questionIds[0], oo = {}; oo[id] = qmap[id].options.map(function (o) { return o.id; });
    s.readTopics["ch2-elg"] = 77; s.bookmarks[id] = 5; s.flashcards[BC.flashcards[0].id] = "learning";
    s.practiceSession = { filters: {}, order: [id], optOrder: oo, idx: 0, done: {}, startedAt: 1 };
    s.mock.active = active("mock-a", true); s.mock.active.answers[id] = qmap[id].correctOptionId;
    eq(store.importJSON(backup(s)).ok, true); var txt = store.exportJSON(); store.reset(); eq(store.importJSON(txt).ok, true);
    eq(store.state.readTopics["ch2-elg"], 77); eq(store.state.bookmarks[id], 5); eq(store.state.flashcards[BC.flashcards[0].id], "learning");
    eq(store.state.mock.active.deadline, 301000); eq(store.state.mock.active.answers[id], qmap[id].correctOptionId);
    eq(store.state.practiceSession.optOrder[id].join(), oo[id].join());
  });
  t("mock import: ขาดข้อ/ซ้ำข้อ/ผิดชุด/ตัวเลือกซ้ำ/คำตอบผิด/ลำดับเกิน/เวลาไม่ตรง ถูกปฏิเสธ", function () {
    var changes = [function(a){a.order.pop();}, function(a){a.order[1]=a.order[0];}, function(a){a.setId="mock-b";},
      function(a){a.optOrder[a.order[0]][0]="missing";}, function(a){a.optOrder[a.order[0]][1]=a.optOrder[a.order[0]][0];},
      function(a){a.answers[a.order[0]]="missing";}, function(a){a.answers["bc-ch1-999"]="x";}, function(a){a.current=90;},
      function(a){a.deadline++;}, function(a){a.flags[a.order[0]]="<b>x</b>";}, function(a){a.id='m"><img src=x>';}, function(a){a.submitted=true;}];
    changes.forEach(function (change) { var s=store._blank(); s.mock.active=active("mock-a",true); change(s.mock.active); eq(store._sanitize(s,known()).ok,false); });
  });
  t("practice import: คำตอบผิด/option order ผิด/idx ผิด ถูกปฏิเสธ", function () {
    var id=A.questionIds[0], s=store._blank(), oo={}; oo[id]=qmap[id].options.map(function(o){return o.id;});
    s.practiceSession={filters:{},order:[id],optOrder:oo,idx:0,done:{},startedAt:1};
    s.practiceSession.done[id]={chosen:"missing",ok:true};eq(store._sanitize(s,known()).ok,false);
    s.practiceSession.done={};s.practiceSession.idx=-1;eq(store._sanitize(s,known()).ok,false);
    s.practiceSession.idx=0;s.practiceSession.optOrder[id]=[];eq(store._sanitize(s,known()).ok,false);
  });
  t("ส่งข้อสอบจริงหนึ่งครั้ง: คะแนน/ประวัติ/ผลรายข้อไม่เพิ่มเมื่อส่งซ้ำ", function () {
    var s=store._blank();s.mock.active=active("mock-a",false);
    s.mock.active.order.forEach(function(id){s.mock.active.answers[id]=qmap[id].correctOptionId;});
    eq(BC.logic.submitMock(s,false,5000,store.LIMITS),"mfixture");eq(s.mock.history[0].score,90);eq(s.mock.history.length,1);
    eq(BC.logic.submitMock(s,false,6000,store.LIMITS),null);eq(s.mock.history.length,1);eq(s.qstats[A.questionIds[0]].n,1);
    eq(store._sanitize(s,known()).ok,true);
    s.mock.history[0].score=1;eq(store._sanitize(s,known()).ok,false);
  });
  t("deadline ใช้เวลาจริง รีเฟรชไม่เริ่มใหม่ หมดเวลาส่งครั้งเดียวและจำกัดเวลาใช้", function () {
    var s=store._blank();s.mock.active=active("mock-b",true);
    var r=store._sanitize(s,known());eq(r.ok,true);s=r.state;
    eq(BC.logic.expired(s.mock.active,300999),false);eq(BC.logic.expired(s.mock.active,301000),true);
    BC.logic.submitMock(s,true,900000,store.LIMITS);eq(s.mock.history[0].score,0);eq(s.mock.history[0].timeUsedMs,300000);eq(s.mock.history[0].autoSubmitted,true);
    BC.logic.submitMock(s,true,900001,store.LIMITS);eq(s.mock.history.length,1);eq(store._sanitize(s,known()).ok,true);
  });
  t("write failure: fallback memory ยัง export ได้และไม่ตัดข้อมูลทิ้งเมื่อ retry ล้ม", function () {
    var a=memoryStorage(), x=BC.createStore({storage:a});x.load();x.state.readTopics["ch1-intro"]=123;
    for(var i=0;i<600;i++)x.state.practiceLog.push({q:"bc-ch1-001",ok:1,t:i});
    a.failWrite=true;a.quota=true;eq(x.save(),false);eq(x.status.mode,"memory");eq(x.state.practiceLog.length,600);
    eq(JSON.parse(x.exportJSON()).data.readTopics["ch1-intro"],123);
  });
  t("storage ถูกปิด/อ่านล้ม: ไม่อ้างว่าบันทึกได้", function () {
    var a=memoryStorage(), x=BC.createStore({storage:a});a.failRead=true;x.load();eq(x.status.mode,"memory");
    a=memoryStorage();a.failWrite=true;x=BC.createStore({storage:a});x.load();eq(x.status.mode,"memory");eq(typeof x.exportJSON(),"string");
  });
  t("JSON เสีย: กู้รอบใหม่ เก็บสำเนา และยังดาวน์โหลดสำเนาได้หลัง save/reload", function () {
    var a=memoryStorage(),x=BC.createStore({storage:a});a.setItem(x.KEY,"{broken");x.load();eq(x.status.corruptRaw,"{broken");
    x.state.readTopics["ch1-intro"]=1;x.save();var y=BC.createStore({storage:a});y.load();eq(y.state.readTopics["ch1-intro"],1);eq(y.status.corruptRaw,"{broken");
  });
  t("reset adapter จำลอง ล้างเฉพาะ prefix และไม่แตะคีย์แอปอื่น", function () {
    adapter.setItem("other-app","keep");adapter.setItem("test:x","1");store.reset();eq(adapter.getItem("other-app"),"keep");eq(adapter.getItem("test:x"),null);
  });
  t("จำกัดประวัติ 1500 ครั้งและ 30 ชุด", function () {
    var s=store._blank();for(var i=0;i<1800;i++)s.practiceLog.push({q:"bc-ch1-001",ok:1,t:i});eq(store._sanitize(s,known()).state.practiceLog.length,1500);
    for(var n=0;n<35;n++){s.mock.active=active("mock-a",false);s.mock.active.id="mfixture"+n;BC.logic.submitMock(s,false,5000,store.LIMITS);}eq(s.mock.history.length,30);
  });
  var sum=document.getElementById("sum");
  sum.textContent="ผ่าน "+pass+" / "+(pass+fail)+(fail?" — มี "+fail+" รายการไม่ผ่าน":" — ผ่านทั้งหมด");sum.className=fail?"fail":"pass";
  document.title=(fail?"FAIL ":"PASS ")+pass+"/"+(pass+fail);
  BC.testResults={pass:pass,fail:fail,total:pass+fail};
})();
