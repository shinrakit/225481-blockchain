/* app.js — เว็บไซต์อ่านสอบ Blockchain ภาครัฐ (HTML/CSS/JS ล้วน ใช้ได้ผ่าน file:// และ GitHub Pages)
   เส้นทาง (hash): #home #lessons #chapter/1 #chapter/1/topic/<id> (#topic/<id> เป็นทางลัด) #summary
   #practice #practice/run #legacy #mock #mock/run #mock/result/<attemptId> #review #review/flashcards
   #review/glossary #progress #search/<คำค้น> */
(function () {
  "use strict";
  var BC = window.BC;
  var THAI_LABELS = ["ก", "ข", "ค", "ง"];
  var DIFF_TH = { basic: "พื้นฐาน", applied: "ความเข้าใจ/ประยุกต์", analysis: "วิเคราะห์" };
  var THINK_TH = { recall: "ระลึก/นิยาม", sequence: "ลำดับ", compare: "เปรียบเทียบ", "cause-effect": "เหตุและผล", scenario: "สถานการณ์", calculation: "คำนวณ", exception: "ข้อยกเว้น", "case-analysis": "วิเคราะห์กรณี" };
  var main, toastTimer, timerHandle = null;

  /* ---------- indexes ---------- */
  var topicById = {}, topicOrder = [], qById = {}, cardsByTopic = {};
  function buildIndexes() {
    BC.chapters.forEach(function (ch) {
      ch.topics.forEach(function (t) { topicById[t.id] = t; topicOrder.push(t.id); });
    });
    BC.questions.forEach(function (q) { qById[q.id] = q; });
    (BC.legacy || []).forEach(function (q) { qById[q.id] = legacyAsQuestion(q); });
    (BC.flashcards || []).forEach(function (f) { (cardsByTopic[f.topicId] = cardsByTopic[f.topicId] || []).push(f); });
  }
  function readyQuestions() { return BC.questions.filter(function (q) { return q.reviewStatus === "verified"; }); }
  function legacyAsQuestion(L) {
    return {
      id: L.id, chapterId: 1, topicId: L.topicId, difficulty: "legacy", thinking: "recall", origin: "legacy",
      sourceNumber: L.sourceNumber, stem: L.originalStem,
      options: L.originalOptions.map(function (o) { return { id: o.id, text: o.text, why: L.optionNotes[o.id] || "" }; }),
      correctOptionId: L.markedOptionId, explanation: L.explanation, misconception: L.note || "",
      refs: L.refs, reviewStatus: L.status === "verified" ? "verified" : "ambiguous", legacy: L
    };
  }

  /* ---------- utils ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function fmtStem(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function st() { return BC.store.state; }
  function save() { BC.store.save(); renderStatus(); }
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }
  function shuffle(a) { return BC.logic.shuffle(a); }
  function pct(n, d) { return d ? Math.round(n * 100 / d) : 0; }
  function fmtDur(ms) { ms = Math.max(0, ms); var s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ":" : "") + (h && m < 10 ? "0" : "") + m + ":" + (x < 10 ? "0" : "") + x; }
  function fmtDate(t) { try { return new Date(t).toLocaleString("th-TH", { dateStyle: "medium", timeStyle: "short" }); } catch (e) { return new Date(t).toISOString(); } }
  function chapterOf(id) { return BC.chapters.filter(function (c) { return c.id === id; })[0]; }
  function pageLinks(pages) {
    if (!pages || !pages.length) return "";
    var uniq = pages.filter(function (p, i) { return pages.indexOf(p) === i; });
    var label = uniq.length > 1 && uniq[uniq.length - 1] - uniq[0] === uniq.length - 1 ? uniq[0] + "–" + uniq[uniq.length - 1] : uniq.join(", ");
    return "หน้า " + label + " <a class=\"pdf-link\" href=\"" + BC.source.pdfPath + "#page=" + uniq[0] + "\" target=\"_blank\" rel=\"noopener\">เปิด PDF หน้า " + uniq[0] + "</a>";
  }
  function refsHtml(refs) {
    return (refs || []).map(function (r) {
      return "<li>" + esc(r.heading) + " — " + pageLinks(r.pages) + "</li>";
    }).join("");
  }
  function topicLink(id) { var t = topicById[id]; return t ? "#chapter/" + t.chapterId + "/topic/" + id : "#lessons"; }
  function download(name, text, type) {
    var blob = new Blob([text], { type: type || "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* ---------- status bar ---------- */
  function renderStatus() {
    var s = BC.store.status, html = "";
    if (s.mode !== "local") html += "<p class=\"note note-caution\"><strong>สถานะการบันทึก: ไม่ได้บันทึกลงเครื่อง</strong>" + esc(s.message) + " <a href=\"#progress\">ไปหน้าสำรองข้อมูล</a></p>";
    if (s.lastError && s.mode === "local") html += "<p class=\"note note-caution\"><strong>แจ้งเตือนการบันทึก</strong>" + esc(s.lastError) + "</p>";
    $("#statusbar").innerHTML = html;
  }

  /* ---------- router ---------- */
  function route() {
    stopTimer();
    var hash;
    try { hash = decodeURIComponent(location.hash.replace(/^#/, "")) || "home"; }
    catch (invalidHash) { hash = "not-found"; }
    var parts = hash.split("/");
    var nav = parts[0];
    if (nav === "topic" || nav === "chapter") nav = "lessons";
    if (nav === "legacy") nav = "practice";
    $all(".mainnav a").forEach(function (a) { if (a.getAttribute("data-nav") === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    $("#mainNav").classList.remove("open"); $("#topbar").classList.remove("menu-open"); $("#menuBtn").setAttribute("aria-expanded", "false");
    try {
      switch (parts[0]) {
        case "home": renderHome(); break;
        case "lessons": renderLessons(); break;
        case "topic": if (topicById[parts[1]]) { location.replace(topicLink(parts[1])); return; } renderNotFound(); break;
        case "chapter":
          if (parts[2] === "topic") renderTopic(parts[3]);
          else renderChapter(+parts[1]);
          break;
        case "summary": renderSummary(); break;
        case "practice": parts[1] === "run" ? renderPracticeRun() : renderPracticeSetup(parts[1], parts[2]); break;
        case "legacy": renderLegacy(); break;
        case "mock":
          if (parts[1] === "run") renderMockRun();
          else if (parts[1] === "result") renderMockResult(parts[2], parts[3]);
          else renderMockSetup();
          break;
        case "review":
          if (parts[1] === "flashcards") renderFlashcards();
          else if (parts[1] === "glossary") renderGlossary(parts.slice(2).join("/"));
          else renderReviewHome();
          break;
        case "progress": renderProgress(); break;
        case "search": renderSearch(parts.slice(1).join("/")); break;
        default: renderNotFound();
      }
    } catch (e) {
      main.innerHTML = "<div class=\"page\"><p class=\"note note-caution\"><strong>เกิดข้อผิดพลาดในการแสดงหน้า</strong>" + esc(e.message) + "</p><p><a href=\"#home\">กลับหน้าแรก</a></p></div>";
      if (window.console) console.error(e);
    }
    $all(".table-wrap").forEach(function (wrap) {
      wrap.tabIndex = 0; wrap.setAttribute("role", "region");
      wrap.setAttribute("aria-label", "ตาราง เลื่อนซ้ายขวาด้วยปุ่มลูกศรเมื่อข้อมูลกว้างกว่าจอ");
    });
    if (!/^chapter\/\d+\/topic\//.test(hash)) window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  function renderNotFound() { main.innerHTML = "<div class=\"page\"><h1>ไม่พบหน้านี้</h1><p><a href=\"#home\">กลับหน้าแรก</a></p></div>"; }

  /* ---------- progress helpers ---------- */
  function topicStats(topicId) {
    var qs = readyQuestions().filter(function (q) { return q.topicId === topicId; });
    var n = 0, c = 0, attempted = 0, lastWrong = 0;
    qs.forEach(function (q) { var s = st().qstats[q.id]; if (s) { attempted++; n += s.n; c += s.c; if (!s.last) lastWrong++; } });
    return { total: qs.length, attempted: attempted, n: n, c: c, lastWrong: lastWrong };
  }
  function weakTopics() {
    return topicOrder.map(function (id) { var s = topicStats(id); s.id = id; return s; })
      .filter(function (s) { return s.attempted && (s.lastWrong > 0 || (s.n >= 3 && s.c / s.n < 0.6)); })
      .sort(function (a, b) { return (b.lastWrong - a.lastWrong) || (a.c / a.n - b.c / b.n); });
  }
  function chapterRead(ch) { return ch.topics.filter(function (t) { return st().readTopics[t.id]; }).length; }

  /* ---------- home ---------- */
  function renderHome() {
    var last = st().lastTopic && topicById[st().lastTopic];
    var html = "<div class=\"page-wide\"><h1>อ่านสอบปลายภาค: Blockchain สำหรับภาครัฐ</h1>" +
      "<p>เนื้อหาครบ 3 บทจากหนังสือ <i>" + esc(BC.source.title) + "</i> เรียบเรียงให้อ่านเข้าใจโดยไม่ต้องเปิดหนังสือ ทุกหัวข้อมีหน้าอ้างอิงให้ตรวจกับต้นฉบับ</p>";
    if (last) html += "<div class=\"card\"><b>อ่านต่อจากจุดเดิม:</b> <a href=\"" + topicLink(last.id) + "\">" + esc(last.title) + "</a> <span class=\"muted\">(บทที่ " + last.chapterId + ")</span></div>";
    html += "<h2>ลำดับการอ่านที่แนะนำ</h2><ol class=\"steps-guide\">" +
      "<li><b>อ่าน</b> บทเรียนทีละหัวข้อ</li><li><b>นึกคำตอบ</b> ในกล่อง “ลองนึกคำตอบก่อนเปิด”</li><li><b>ฝึก</b> ข้อฝึกของหัวข้อนั้น</li><li><b>สอบจำลอง</b> ชุด A/B ชุดละ 90 ข้อ</li><li><b>ทวนข้อผิด</b> แล้วกลับไปอ่านจุดที่พลาด</li></ol>";
    html += "<h2>ภาพรวม 3 บท</h2><div class=\"grid-3\">";
    BC.chapters.forEach(function (ch) {
      var read = chapterRead(ch);
      var qn = readyQuestions().filter(function (q) { return q.chapterId === ch.id; }).length;
      html += "<div class=\"card chapter-card\"><h3><a href=\"#chapter/" + ch.id + "\">" + esc(ch.title) + "</a></h3><p class=\"muted\">หน้า " + ch.pages[0] + "–" + ch.pages[1] + " · " + ch.topics.length + " หัวข้อ · ข้อฝึก " + qn + " ข้อ</p><p>" + esc(ch.intro) + "</p>" +
        "<div class=\"progressbar\" aria-label=\"อ่านแล้ว " + read + " จาก " + ch.topics.length + " หัวข้อ\"><span style=\"width:" + pct(read, ch.topics.length) + "%\"></span></div><p class=\"muted\">ทำเครื่องหมายอ่านแล้ว " + read + "/" + ch.topics.length + " หัวข้อ</p>" +
        "<div class=\"btn-row\"><a class=\"btn btn-primary\" href=\"" + topicLink(ch.topics[0].id) + "\">เริ่มอ่านบทนี้</a><a class=\"btn\" href=\"#practice/chapter/" + ch.id + "\">ฝึกบทนี้</a></div></div>";
    });
    html += "</div>";
    var weak = weakTopics().slice(0, 5);
    if (weak.length) {
      html += "<h2>หัวข้อที่ควรทวน (จากผลตอบในเครื่องนี้)</h2><ul>" + weak.map(function (w) { return "<li><a href=\"" + topicLink(w.id) + "\">" + esc(topicById[w.id].title) + "</a> <span class=\"muted\">— ตอบถูก " + w.c + "/" + w.n + " ครั้ง, ข้อที่ผิดล่าสุด " + w.lastWrong + " ข้อ</span></li>"; }).join("") + "</ul>";
    }
    html += "<div class=\"card\"><h3>ข้อมูลที่ควรทราบ</h3><ul><li>ข้อสอบจริงที่ผู้ใช้ทราบ: ปรนัย 90 ข้อ รวม 3 บท — ส่วนวันสอบ เวลา สัดส่วนต่อบท จำนวนตัวเลือก และเกณฑ์ผ่าน <b>ยังไม่มีข้อมูลยืนยัน</b></li><li>ข้อฝึกใช้ 4 ตัวเลือกตามแนวข้อสอบเดิม และชุดจำลองจัดบทละ 30 ข้อ <b>เพื่อฝึกให้ครอบคลุม ไม่ใช่สัดส่วนที่อาจารย์ประกาศ</b></li><li>ปี ตัวเลข และสถานะโครงการเป็นข้อมูลตามหนังสือฉบับ ม.ค. 2564</li></ul></div></div>";
    main.innerHTML = html;
  }

  /* ---------- lessons ---------- */
  function renderLessons() {
    var html = "<div class=\"page\"><h1>บทเรียน</h1><p>เลือกอ่านทีละหัวข้อ หรือเปิดอ่านทั้งบทต่อเนื่อง</p>";
    BC.chapters.forEach(function (ch) {
      html += "<section class=\"card\"><h2 style=\"margin-top:0\">" + esc(ch.title) + "</h2><p class=\"muted\">หน้า " + ch.pages[0] + "–" + ch.pages[1] + "</p><div class=\"btn-row\"><a class=\"btn\" href=\"#chapter/" + ch.id + "\">อ่านทั้งบทต่อเนื่อง</a><a class=\"btn\" href=\"#practice/chapter/" + ch.id + "\">ฝึกบทนี้</a></div><ol class=\"toc\">";
      ch.topics.forEach(function (t) {
        var ts = topicStats(t.id);
        html += "<li><a href=\"" + topicLink(t.id) + "\">" + esc(t.title) + "</a><span>" +
          (st().readTopics[t.id] ? "<span class=\"badge badge-read\">อ่านแล้ว ✓</span> " : "") +
          (ts.attempted ? "<span class=\"badge badge-info\">ฝึก " + ts.attempted + "/" + ts.total + " ข้อ</span>" : "") +
          " <span class=\"muted\">หน้า " + t.pages[0] + (t.pages[1] !== t.pages[0] ? "–" + t.pages[1] : "") + "</span></span></li>";
      });
      html += "</ol></section>";
    });
    main.innerHTML = html + "</div>";
  }
  function topicBody(t, full) {
    var ts = topicStats(t.id);
    var h = "<article class=\"lesson\" id=\"t-" + t.id + "\">" +
      "<header class=\"lesson-head\"><p class=\"crumbs\"><a href=\"#lessons\">บทเรียน</a> › <a href=\"#chapter/" + t.chapterId + "\">บทที่ " + t.chapterId + "</a></p>" +
      (full ? "<h2>" : "<h1>") + esc(t.title) + (full ? "</h2>" : "</h1>") +
      "<div class=\"lesson-meta\"><span>อ้างอิงหลัก: " + pageLinks(rangePages(t.pages)) + "</span>" +
      (st().readTopics[t.id] ? "<span class=\"badge badge-read\">อ่านแล้ว ✓</span>" : "") + "</div></header>" +
      "<section class=\"box box-goal\"><h2>เป้าหมาย: อ่านจบแล้วควร…</h2><ul>" + t.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></section>" +
      "<div class=\"lesson-body\">" + t.body + "</div>" +
      "<section class=\"box box-confuse\"><h2>จุดที่มักสับสน</h2><ul>" + t.confusions.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></section>" +
      "<section class=\"box box-recall\"><h2>ลองนึกคำตอบก่อนเปิด</h2>" + t.recall.map(function (r) { return "<details class=\"recall\"><summary>" + esc(r.q) + "</summary><p>" + esc(r.a) + "</p></details>"; }).join("") + "</section>" +
      "<section class=\"box box-sum\"><h2>สรุปจำง่าย (ใช้ทบทวนหลังอ่านเต็ม)</h2><ul>" + t.summary.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></section>" +
      "<section class=\"box box-ref\"><h2>หน้าอ้างอิงในหนังสือ</h2><ul>" + refsHtml(t.refs) + "</ul><p class=\"muted\">ถ้าโปรแกรมดู PDF ไม่กระโดดไปหน้าที่ระบุ ให้เปิดไฟล์ Blockchain-V2.pdf แล้วไปหน้าตามเลขที่แสดง (เลขหน้าพิมพ์ = เลขหน้า PDF)</p></section>" +
      "<div class=\"btn-row no-print\">" +
      "<button type=\"button\" class=\"" + (st().readTopics[t.id] ? "" : "btn-primary") + "\" data-act=\"mark-read\" data-topic=\"" + t.id + "\">" + (st().readTopics[t.id] ? "ยกเลิกเครื่องหมายอ่านแล้ว" : "ทำเครื่องหมายว่าอ่านแล้ว") + "</button>" +
      "<a class=\"btn btn-teal\" href=\"#practice/topic/" + t.id + "\">ฝึกข้อสอบหัวข้อนี้ (" + ts.total + " ข้อ)</a>" +
      ((cardsByTopic[t.id] || []).length ? "<a class=\"btn\" href=\"#review/flashcards\">บัตรคำ</a>" : "") +
      "</div></article>";
    return h;
  }
  function rangePages(p) { var out = []; for (var i = p[0]; i <= p[1]; i++) out.push(i); return out; }
  function renderTopic(id) {
    var t = topicById[id]; if (!t) return renderNotFound();
    st().lastTopic = id; save();
    var idx = topicOrder.indexOf(id), prev = topicById[topicOrder[idx - 1]], next = topicById[topicOrder[idx + 1]];
    main.innerHTML = "<div class=\"page\">" + topicBody(t, false) +
      "<nav class=\"lesson-nav\" aria-label=\"หัวข้อก่อน/ถัดไป\">" +
      (prev ? "<a class=\"btn\" href=\"" + topicLink(prev.id) + "\">← " + esc(prev.title) + "</a>" : "<span></span>") +
      (next ? "<a class=\"btn\" href=\"" + topicLink(next.id) + "\">" + esc(next.title) + " →</a>" : "<a class=\"btn\" href=\"#summary\">ไปสรุปก่อนสอบ →</a>") +
      "</nav></div>";
  }
  function renderChapter(chId) {
    var ch = chapterOf(chId); if (!ch) return renderNotFound();
    var html = "<div class=\"page\"><p class=\"crumbs\"><a href=\"#lessons\">บทเรียน</a></p><h1>" + esc(ch.title) + "</h1><p>" + esc(ch.intro) + "</p>" +
      "<div class=\"card\"><h2 style=\"margin-top:0\">สารบัญบท</h2><ol>" + ch.topics.map(function (t) { return "<li><a href=\"#chapter/" + ch.id + "/topic/" + t.id + "\">" + esc(t.title) + "</a></li>"; }).join("") + "</ol><div class=\"btn-row no-print\"><button type=\"button\" data-act=\"print\">พิมพ์ทั้งบท</button></div></div>";
    ch.topics.forEach(function (t) { html += topicBody(t, true); });
    main.innerHTML = html + "</div>";
  }

  /* ---------- summary ---------- */
  function renderSummary() {
    main.innerHTML = "<div class=\"page\"><h1>สรุปก่อนสอบ (ครบ 3 บท)</h1><p class=\"muted\">ใช้ทบทวนหลังอ่านบทเรียนเต็ม ไม่ใช่สิ่งทดแทนเนื้อหาหลัก — หน้าอ้างอิงอยู่ในบทเรียนแต่ละหัวข้อ เอกสารนี้ไม่ได้รับรองว่าอนุญาตให้นำเข้าห้องสอบ</p>" +
      "<div class=\"btn-row no-print\"><button type=\"button\" data-act=\"print\">พิมพ์สรุป</button></div>" +
      BC.examSummary.map(function (s) { return "<section id=\"" + s.id + "\"><h2>" + esc(s.title) + "</h2>" + s.html + "<details><summary>หน้าอ้างอิงของสรุปส่วนนี้</summary><ul>" + refsHtml(s.refs) + "</ul></details></section>"; }).join("") + "</div>";
  }

  /* ---------- question rendering (shared) ---------- */
  function qMeta(q) {
    var t = topicById[q.topicId];
    var b = "<div class=\"qmeta\">";
    if (q.origin === "legacy") b += "<span class=\"badge badge-warn\">แนวข้อสอบเดิม ข้อ " + q.sourceNumber + "</span>";
    else b += "<span class=\"badge\">บทที่ " + q.chapterId + "</span><span class=\"badge\">" + esc(DIFF_TH[q.difficulty] || q.difficulty) + "</span><span class=\"badge\">" + esc(THINK_TH[q.thinking] || q.thinking) + "</span>";
    if (t) b += "<span class=\"badge badge-info\">" + esc(t.title) + "</span>";
    if (q.reviewStatus === "ambiguous") b += "<span class=\"badge badge-bad\">ถ้อยคำกำกวม — ไม่นับคะแนน</span>";
    return b + "</div>";
  }
  function explainHtml(q, order, chosen) {
    var h = "<div class=\"explain\"><p><b>คำอธิบาย:</b> " + esc(q.explanation) + "</p>";
    if (q.misconception) h += "<p class=\"note note-caution\"><strong>" + (q.origin === "legacy" ? "หมายเหตุผลตรวจ" : "จุดสับสนที่ข้อนี้ต้องการแก้") + "</strong>" + esc(q.misconception) + "</p>";
    h += "<p><b>เหตุผลรายตัวเลือก</b></p><ul class=\"why-list\">" + order.map(function (oid, i) {
      var o = q.options.filter(function (x) { return x.id === oid; })[0];
      var tag = oid === q.correctOptionId ? "<span class=\"tag\" style=\"color:var(--ok)\">✓ คำตอบ</span>" : (oid === chosen ? "<span class=\"tag\" style=\"color:var(--bad)\">✗ ที่เลือก</span>" : "");
      return "<li><b>" + THAI_LABELS[i] + ".</b> " + tag + " " + esc(o.why) + "</li>";
    }).join("") + "</ul>";
    if (q.legacy && q.legacy.correctedVariant) {
      var cv = q.legacy.correctedVariant;
      h += "<div class=\"note note-example\"><strong>" + esc(cv.label) + "</strong><p>" + esc(cv.stem) + "</p><ol type=\"1\">" + cv.options.map(function (o, i) { return "<li>" + esc(o) + (i === cv.answerIndex ? " <b>(คำตอบ)</b>" : "") + "</li>"; }).join("") + "</ol></div>";
    }
    h += "<p class=\"muted\">อ้างอิง: " + (q.refs || []).map(function (r) { return esc(r.heading) + " " + pageLinks(r.pages); }).join("; ") + "</p>";
    h += "<div class=\"btn-row no-print\"><a class=\"btn\" href=\"" + topicLink(q.topicId) + "\">กลับไปอ่านหัวข้อนี้</a>" +
      "<button type=\"button\" data-act=\"bookmark\" data-q=\"" + q.id + "\">" + (st().bookmarks[q.id] ? "★ เลิกทำเครื่องหมายทวน" : "☆ บันทึกข้อที่อยากทวน") + "</button></div></div>";
    return h;
  }
  function recordAnswer(q, ok) {
    if (q.reviewStatus !== "verified") return; // ข้อกำกวมไม่นับคะแนน
    var s = st().qstats[q.id] || { n: 0, c: 0, last: 0, t: 0 };
    s.n++; if (ok) s.c++; s.last = ok ? 1 : 0; s.t = Date.now();
    st().qstats[q.id] = s;
    st().practiceLog.push({ q: q.id, ok: ok ? 1 : 0, t: Date.now() });
    if (st().practiceLog.length > BC.store.LIMITS.practiceLog) st().practiceLog = st().practiceLog.slice(-BC.store.LIMITS.practiceLog);
  }

  /* ---------- practice ---------- */
  function poolFor(f) {
    var src = f.source || "new", pool;
    if (src === "legacy") pool = (BC.legacy || []).map(function (L) { return qById[L.id]; });
    else {
      pool = readyQuestions();
      if (src === "wrong") pool = pool.filter(function (q) { var s = st().qstats[q.id]; return s && !s.last; });
      if (src === "bookmarked") pool = readyQuestions().concat((BC.legacy || []).map(function (L) { return qById[L.id]; })).filter(function (q) { return st().bookmarks[q.id]; });
    }
    if (src !== "legacy") {
      if (f.chapter) pool = pool.filter(function (q) { return q.chapterId === +f.chapter; });
      if (f.topic) pool = pool.filter(function (q) { return q.topicId === f.topic; });
      if (f.difficulty && f.difficulty !== "all") pool = pool.filter(function (q) { return q.difficulty === f.difficulty; });
    }
    return pool;
  }
  function renderPracticeSetup(kind, val) {
    var f = { source: "new", chapter: "", topic: "", difficulty: "all", count: "20" };
    if (kind === "chapter") f.chapter = val;
    if (kind === "topic") { f.topic = val; f.chapter = topicById[val] ? String(topicById[val].chapterId) : ""; f.count = "all"; }
    if (kind === "wrong") f.source = "wrong";
    if (kind === "bookmarked") f.source = "bookmarked";
    var resume = st().practiceSession;
    var topicOpts = topicOrder.map(function (id) { var t = topicById[id]; return "<option value=\"" + id + "\" data-ch=\"" + t.chapterId + "\"" + (f.topic === id ? " selected" : "") + ">บทที่ " + t.chapterId + ": " + esc(t.title) + "</option>"; }).join("");
    main.innerHTML = "<div class=\"page\"><h1>ฝึกข้อสอบ</h1>" +
      (resume ? "<div class=\"card\"><b>มีชุดฝึกค้างอยู่</b> (" + resume.order.length + " ข้อ, ทำแล้ว " + Object.keys(resume.done).length + " ข้อ) <div class=\"btn-row\"><a class=\"btn btn-primary\" href=\"#practice/run\">ทำต่อ</a><button type=\"button\" data-act=\"practice-discard\">ทิ้งชุดที่ค้าง</button></div></div>" : "") +
      "<p>โหมดเรียนรู้: เลือกคำตอบแล้วกด <b>ยืนยันคำตอบ</b> จึงจะเปิดเฉลยและเหตุผลทุกตัวเลือก</p>" +
      "<form id=\"practiceForm\" class=\"card\">" +
      "<fieldset><legend>แหล่งข้อ</legend><div class=\"radio-row\">" +
      radio("source", "new", "ข้อฝึกใหม่ (180 ข้อ)", f.source) + radio("source", "legacy", "แนวข้อสอบเดิมบทที่ 1 (25 ข้อ)", f.source) + radio("source", "wrong", "ข้อที่ตอบผิดล่าสุด", f.source) + radio("source", "bookmarked", "ข้อที่ทำเครื่องหมายทวน", f.source) +
      "</div></fieldset>" +
      "<fieldset><legend>ขอบเขต</legend><div class=\"radio-row\">" +
      "<label>บท <select name=\"chapter\"><option value=\"\">ทั้งเล่ม</option>" + BC.chapters.map(function (c) { return "<option value=\"" + c.id + "\"" + (String(c.id) === f.chapter ? " selected" : "") + ">บทที่ " + c.id + "</option>"; }).join("") + "</select></label>" +
      "<label>หัวข้อ <select name=\"topic\"><option value=\"\">ทุกหัวข้อ</option>" + topicOpts + "</select></label>" +
      "<label>ระดับ <select name=\"difficulty\"><option value=\"all\">ทุกระดับ</option><option value=\"basic\">พื้นฐาน</option><option value=\"applied\">ความเข้าใจ/ประยุกต์</option><option value=\"analysis\">วิเคราะห์</option></select></label>" +
      "</div></fieldset>" +
      "<fieldset><legend>จำนวนข้อ</legend><div class=\"radio-row\">" + radio("count", "10", "10", f.count) + radio("count", "20", "20", f.count) + radio("count", "30", "30", f.count) + radio("count", "all", "ทั้งหมดที่ตรงเงื่อนไข", f.count) + "</div></fieldset>" +
      "<p id=\"poolInfo\" class=\"note\" aria-live=\"polite\"></p>" +
      "<div class=\"btn-row\"><button class=\"btn-primary\" type=\"submit\" id=\"startPractice\">เริ่มฝึก</button></div></form></div>";
    var form = $("#practiceForm");
    function read() {
      var fd = { source: form.source.value, chapter: form.chapter.value, topic: form.topic.value, difficulty: form.difficulty.value, count: form.count.value };
      if (fd.topic && topicById[fd.topic] && fd.chapter && String(topicById[fd.topic].chapterId) !== fd.chapter) { fd.topic = ""; form.topic.value = ""; }
      $all("option[data-ch]", form.topic).forEach(function (o) { o.hidden = !!fd.chapter && o.getAttribute("data-ch") !== fd.chapter; });
      var disabledScope = fd.source === "legacy";
      form.chapter.disabled = form.topic.disabled = form.difficulty.disabled = disabledScope;
      return fd;
    }
    function info() {
      var fd = read(), pool = poolFor(fd), want = fd.count === "all" ? pool.length : +fd.count;
      var msg = "ตรงเงื่อนไข <b>" + pool.length + "</b> ข้อ";
      if (pool.length === 0) msg += " — ไม่มีข้อให้ฝึกในเงื่อนไขนี้" + (fd.source === "wrong" ? " (ยังไม่มีข้อที่ตอบผิดล่าสุด)" : fd.source === "bookmarked" ? " (ยังไม่ได้ทำเครื่องหมายข้อใด)" : "");
      else if (want > pool.length) msg += " — น้อยกว่าที่เลือก จะใช้เท่าที่มี " + pool.length + " ข้อ (ไม่สุ่มซ้ำ)";
      else msg += " — จะสุ่มมา " + want + " ข้อ";
      if (fd.source === "legacy") msg += "<br><span class=\"muted\">แนวเดิมเป็นบทที่ 1 ทั้งหมด ตัวกรองบท/หัวข้อ/ระดับไม่ใช้กับแหล่งนี้ ข้อ 24 ถ้อยคำกำกวม แสดงคำอธิบายแต่ไม่นับคะแนน</span>";
      $("#poolInfo").innerHTML = msg;
      $("#startPractice").disabled = pool.length === 0;
    }
    form.difficulty.value = f.difficulty;
    form.addEventListener("change", info);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = read(), pool = shuffle(poolFor(fd));
      if (!pool.length) return;
      var n = fd.count === "all" ? pool.length : Math.min(+fd.count, pool.length);
      var order = pool.slice(0, n).map(function (q) { return q.id; });
      if (fd.source === "legacy" && fd.count === "all") order = (BC.legacy || []).map(function (L) { return L.id; });
      var optOrder = {}; order.forEach(function (id) { optOrder[id] = fd.source === "legacy" ? qById[id].options.map(function (o) { return o.id; }) : shuffle(qById[id].options.map(function (o) { return o.id; })); });
      st().practiceSession = { filters: fd, order: order, optOrder: optOrder, idx: 0, done: {}, startedAt: Date.now() };
      save();
      location.hash = "#practice/run";
    });
    info();
  }
  function radio(name, val, label, cur) { return "<label><input type=\"radio\" name=\"" + name + "\" value=\"" + val + "\"" + (val === cur ? " checked" : "") + "> " + esc(label) + "</label>"; }

  function renderPracticeRun() {
    var S = st().practiceSession;
    if (!S || !S.order.length) { location.replace("#practice"); return; }
    S.order = S.order.filter(function (id) { return qById[id]; });
    var doneN = Object.keys(S.done).length;
    if (S.idx >= S.order.length) return renderPracticeEnd();
    var q = qById[S.order[S.idx]], order = S.optOrder[q.id] || q.options.map(function (o) { return o.id; });
    var rec = S.done[q.id], okN = 0, badN = 0;
    Object.keys(S.done).forEach(function (k) { if (qById[k].reviewStatus !== "verified") return; if (S.done[k].ok) okN++; else badN++; });
    var html = "<div class=\"page\"><div class=\"quiz-head\"><h1 style=\"margin:8px 0\">ฝึกข้อสอบ</h1><div class=\"counters\"><span class=\"badge\">ข้อ " + (S.idx + 1) + "/" + S.order.length + "</span><span class=\"badge\">ตอบแล้ว " + doneN + "</span><span class=\"badge badge-read\">ถูก " + okN + "</span><span class=\"badge badge-bad\">ผิด " + badN + "</span></div></div>" +
      "<div class=\"progressbar\"><span style=\"width:" + pct(doneN, S.order.length) + "%\"></span></div>" +
      "<div class=\"qcard\" id=\"qcard\">" + qMeta(q) + "<p class=\"qstem\">" + fmtStem(q.stem) + "</p><ul class=\"opts\" role=\"list\">" +
      order.map(function (oid, i) {
        var o = q.options.filter(function (x) { return x.id === oid; })[0];
        var cls = "opt", verdict = "";
        if (rec) {
          if (oid === q.correctOptionId) { cls += " is-correct"; verdict = "<span class=\"verdict\">✓ ถูก</span>"; }
          else if (oid === rec.chosen) { cls += " is-wrong"; verdict = "<span class=\"verdict\">✗ ที่เลือก</span>"; }
        }
        return "<li><button type=\"button\" class=\"" + cls + "\" data-opt=\"" + oid + "\" aria-pressed=\"false\"" + (rec ? " disabled" : "") + "><span class=\"lab\">" + THAI_LABELS[i] + "</span><span>" + esc(o.text) + "</span>" + verdict + "</button></li>";
      }).join("") + "</ul>" +
      (rec ? "<p class=\"note " + (rec.ok ? "note-example" : "note-caution") + "\"><strong>" + (q.reviewStatus !== "verified" ? "ดูคำตอบที่ทำเครื่องหมายในต้นฉบับ — ไม่นับคะแนน" : rec.ok ? "ตอบถูก" : "ตอบไม่ถูก") + "</strong>" + "</p>" + explainHtml(q, order, rec.chosen) : "") +
      "</div><div class=\"btn-row\">" +
      (rec ? "" : "<button type=\"button\" class=\"btn-primary\" id=\"confirmBtn\" disabled>ยืนยันคำตอบ</button>") +
      (S.idx > 0 ? "<button type=\"button\" data-act=\"pr-prev\">← ข้อก่อนหน้า</button>" : "") +
      (rec ? "<button type=\"button\" class=\"btn-primary\" data-act=\"pr-next\">" + (S.idx + 1 < S.order.length ? "ข้อถัดไป →" : "ดูสรุปผล") + "</button>" : "<button type=\"button\" data-act=\"pr-next\">ข้าม →</button>") +
      "<button type=\"button\" class=\"btn-ghost\" data-act=\"pr-end\">จบการฝึก</button></div></div>";
    main.innerHTML = html;
    var chosen = null;
    $all(".opt", main).forEach(function (b) {
      b.addEventListener("click", function () {
        if (rec) return;
        chosen = b.getAttribute("data-opt");
        $all(".opt", main).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        $("#confirmBtn").disabled = false;
      });
    });
    var cb = $("#confirmBtn");
    if (cb) cb.addEventListener("click", function () {
      if (!chosen) return;
      var ok = chosen === q.correctOptionId;
      S.done[q.id] = { chosen: chosen, ok: ok };
      recordAnswer(q, ok);
      save();
      renderPracticeRun();
      $("#qcard").scrollIntoView({ block: "start" });
    });
  }
  function renderPracticeEnd() {
    var S = st().practiceSession, okN = 0, n = 0, wrongTopics = {};
    S.order.forEach(function (id) { var r = S.done[id]; if (!r) return; var q = qById[id]; if (q.reviewStatus !== "verified") return; n++; if (r.ok) okN++; else wrongTopics[q.topicId] = (wrongTopics[q.topicId] || 0) + 1; });
    var skipped = S.order.length - Object.keys(S.done).length;
    main.innerHTML = "<div class=\"page\"><h1>สรุปผลการฝึก</h1><p class=\"result-big\">" + okN + " / " + n + "</p><p>ตอบถูก " + pct(okN, n) + "% จากข้อที่ตอบและนับคะแนน" + (skipped ? " · ข้าม/ยังไม่ตอบ " + skipped + " ข้อ" : "") + "</p>" +
      (Object.keys(wrongTopics).length ? "<h2>หัวข้อที่ควรกลับไปอ่าน</h2><ul>" + Object.keys(wrongTopics).map(function (t) { return "<li><a href=\"" + topicLink(t) + "\">" + esc(topicById[t].title) + "</a> — ผิด " + wrongTopics[t] + " ข้อ</li>"; }).join("") + "</ul>" : "") +
      "<div class=\"btn-row\"><button type=\"button\" class=\"btn-primary\" data-act=\"practice-again\">ฝึกชุดใหม่</button><a class=\"btn\" href=\"#practice/wrong\">ฝึกข้อที่ผิด</a><a class=\"btn\" href=\"#progress\">ดูความคืบหน้า</a></div></div>";
  }
  function renderLegacy() { location.replace("#practice"); }

  /* ---------- mock exam ---------- */
  function mockSet(id) { return (BC.mockExams || []).filter(function (m) { return m.id === id; })[0]; }
  function renderMockSetup() {
    var A = st().mock.active, hist = st().mock.history.slice().reverse();
    var html = "<div class=\"page\"><h1>สอบจำลอง</h1>" +
      "<p class=\"note note-book\"><strong>ชุดฝึกที่สร้างจากหนังสือ ไม่ใช่ข้อสอบจริง</strong>สัดส่วนบทละ 30 ข้อจัดไว้เพื่อฝึกให้ครอบคลุม (แต่ละบท: พื้นฐาน 9 · ความเข้าใจ/ประยุกต์ 15 · วิเคราะห์ 6) ชุด A และ B ใช้คำถามไม่ซ้ำกัน</p>";
    if (A && !A.submitted) {
      html += "<div class=\"card\"><b>มีชุดสอบค้างอยู่:</b> " + esc(mockSet(A.setId).title) + " · ตอบแล้ว " + Object.keys(A.answers).length + "/90" + (A.deadline ? " · เหลือเวลา " + fmtDur(A.deadline - Date.now()) : " · ไม่จับเวลา") + "<div class=\"btn-row\"><a class=\"btn btn-primary\" href=\"#mock/run\">ทำต่อ</a><button type=\"button\" class=\"btn-danger\" data-act=\"mock-abandon\">ยกเลิกชุดที่ค้าง (ไม่บันทึกผล)</button></div></div>";
    }
    html += "<form id=\"mockForm\" class=\"card\"><fieldset><legend>เลือกชุด</legend><div class=\"radio-row\">" +
      (BC.mockExams || []).map(function (m, i) { return "<label><input type=\"radio\" name=\"set\" value=\"" + m.id + "\"" + (i === 0 ? " checked" : "") + "> " + esc(m.title) + " (" + m.questionIds.length + " ข้อ)</label>"; }).join("") + "</div></fieldset>" +
      "<fieldset><legend>จับเวลา</legend><div class=\"radio-row\"><label><input type=\"checkbox\" name=\"timed\"> เปิดจับเวลา</label><label>ระยะเวลา (นาที) <input type=\"number\" name=\"minutes\" min=\"5\" max=\"300\" value=\"" + st().settings.timerMinutes + "\" style=\"width:6em\"></label></div><p class=\"muted\">ค่าเริ่มต้นไม่จับเวลา ระยะเวลาที่ตั้งเป็นของผู้ฝึกเอง ไม่ใช่เวลาสอบจริง</p></fieldset>" +
      "<fieldset><legend>เป้าหมายคะแนน (ไม่บังคับ)</legend><label>ตั้งเป้า <input type=\"number\" name=\"goal\" min=\"1\" max=\"90\" value=\"" + (st().settings.goal || "") + "\" style=\"width:6em\"> / 90</label><p class=\"muted\">ใช้แสดงว่า “ถึงเป้าหมายที่ตั้งไว้” หรือไม่ ไม่ใช่เกณฑ์ผ่านสอบ</p></fieldset>" +
      "<div class=\"btn-row\"><button type=\"submit\" class=\"btn-primary\"" + (A && !A.submitted ? " disabled title=\"มีชุดค้างอยู่\"" : "") + ">เริ่มทำข้อสอบ</button></div></form>";
    html += "<h2>ประวัติผลสอบ</h2>" + (hist.length ? "<div class=\"table-wrap\"><table><thead><tr><th>วันที่</th><th>ชุด</th><th>คะแนน</th><th>เวลาใช้</th><th></th></tr></thead><tbody>" +
      hist.map(function (h) { return "<tr><td>" + fmtDate(h.submittedAt) + "</td><td>" + esc(mockSet(h.setId) ? mockSet(h.setId).short : h.setId) + "</td><td>" + h.score + "/90 (" + pct(h.score, 90) + "%)</td><td>" + fmtDur(h.timeUsedMs) + (h.autoSubmitted ? " · ส่งอัตโนมัติเมื่อหมดเวลา" : "") + "</td><td><a href=\"#mock/result/" + esc(h.id) + "\">ดูผล/เฉลย</a></td></tr>"; }).join("") + "</tbody></table></div>" : "<p class=\"muted\">ยังไม่มีประวัติผลสอบ</p>");
    main.innerHTML = html + "</div>";
    $("#mockForm").addEventListener("submit", function (e) {
      e.preventDefault();
      if (st().mock.active && !st().mock.active.submitted) return;
      var f = e.target, set = mockSet(f.set.value);
      var timed = f.timed.checked, minutes = Math.min(300, Math.max(5, parseInt(f.minutes.value, 10) || 90));
      var goal = parseInt(f.goal.value, 10); st().settings.goal = goal >= 1 && goal <= 90 ? goal : null;
      if (timed) st().settings.timerMinutes = minutes;
      var order = shuffle(set.questionIds), optOrder = {};
      order.forEach(function (id) { optOrder[id] = shuffle(qById[id].options.map(function (o) { return o.id; })); });
      var now = Date.now();
      st().mock.active = { id: "m" + now.toString(36), setId: set.id, order: order, optOrder: optOrder, answers: {}, flags: {}, current: 0, startedAt: now, timed: timed, minutes: timed ? minutes : null, deadline: timed ? now + minutes * 60000 : null, submitted: false };
      save();
      location.hash = "#mock/run";
    });
  }
  function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }
  function submitMock(auto) {
    var id = BC.logic.submitMock(st(), auto, Date.now(), BC.store.LIMITS);
    if (id) save();
    return id;
  }
  function expireMock() {
    if (!BC.logic.expired(st().mock.active, Date.now())) return false;
    stopTimer();
    var id = submitMock(true);
    toast("หมดเวลา ระบบส่งข้อสอบให้แล้ว");
    location.replace("#mock/result/" + id);
    return true;
  }
  function renderMockRun() {
    stopTimer();
    var A = st().mock.active;
    if (!A) { location.replace("#mock"); return; }
    if (expireMock()) return;
    var set = mockSet(A.setId), i = Math.max(0, Math.min(A.current || 0, A.order.length - 1));
    var q = qById[A.order[i]], order = A.optOrder[q.id];
    var answered = Object.keys(A.answers).length;
    var html = "<div class=\"page-wide\"><div class=\"quiz-head\"><h1 style=\"margin:8px 0;font-size:1.25em\">" + esc(set.title) + "</h1><div class=\"counters\">" +
      (A.deadline ? "<span>เหลือเวลา <span class=\"timer\" id=\"timer\" role=\"timer\" aria-live=\"off\">" + fmtDur(A.deadline - Date.now()) + "</span></span>" : "<span class=\"badge\">ไม่จับเวลา</span>") +
      "<span class=\"badge\">ตอบแล้ว " + answered + "/90</span><button type=\"button\" class=\"palette-toggle\" data-act=\"pal-toggle\" aria-controls=\"palette\">แผงเลขข้อ</button></div></div>" +
      "<div class=\"mock-layout\"><div><div class=\"qcard\"><div class=\"qmeta\"><span class=\"badge\">ข้อ " + (i + 1) + " / 90</span>" + (A.flags[q.id] ? "<span class=\"badge badge-warn\">⚑ ทำเครื่องหมายทวน</span>" : "") + "</div>" +
      "<p class=\"qstem\">" + fmtStem(q.stem) + "</p><ul class=\"opts\" role=\"list\">" +
      order.map(function (oid, k) {
        var o = q.options.filter(function (x) { return x.id === oid; })[0], sel = A.answers[q.id] === oid;
        return "<li><button type=\"button\" class=\"opt" + (sel ? " selected" : "") + "\" aria-pressed=\"" + sel + "\" data-mopt=\"" + oid + "\"><span class=\"lab\">" + THAI_LABELS[k] + "</span><span>" + esc(o.text) + "</span></button></li>";
      }).join("") + "</ul></div>" +
      "<div class=\"btn-row\"><button type=\"button\" data-act=\"m-prev\"" + (i === 0 ? " disabled" : "") + ">← ก่อนหน้า</button><button type=\"button\" data-act=\"m-next\"" + (i === 89 ? " disabled" : "") + ">ถัดไป →</button><button type=\"button\" data-act=\"m-flag\">" + (A.flags[q.id] ? "เลิกทำเครื่องหมาย" : "⚑ ทำเครื่องหมายทวน") + "</button>" +
      (A.answers[q.id] ? "<button type=\"button\" class=\"btn-ghost\" data-act=\"m-clear\">ล้างคำตอบข้อนี้</button>" : "") +
      "<button type=\"button\" class=\"btn-primary\" data-act=\"m-submit\">ส่งข้อสอบ</button></div>" +
      "<p class=\"muted\">คีย์ลัด: 1–4 เลือกตัวเลือก · ←/→ เปลี่ยนข้อ · F ทำเครื่องหมาย — ไม่แสดงเฉลยหรือคะแนนจนกว่าจะส่ง</p></div>" +
      "<aside class=\"palette\" id=\"palette\" aria-label=\"แผงเลขข้อ\"><h2>แผงเลขข้อ</h2><p class=\"pal-legend\">พื้นสี = ตอบแล้ว · ⚑ = ทำเครื่องหมายทวน · กรอบส้ม = ข้อปัจจุบัน</p><div class=\"pal-grid\">" +
      A.order.map(function (id, k) { var cls = (A.answers[id] ? "answered " : "") + (A.flags[id] ? "flagged " : "") + (k === i ? "current" : ""); return "<button type=\"button\" class=\"" + cls + "\" data-goto=\"" + k + "\" aria-label=\"ข้อ " + (k + 1) + (A.answers[id] ? " ตอบแล้ว" : " ยังไม่ตอบ") + (A.flags[id] ? " ทำเครื่องหมาย" : "") + "\">" + (k + 1) + "</button>"; }).join("") +
      "</div><div class=\"btn-row\"><button type=\"button\" class=\"btn-primary\" data-act=\"m-submit\">ส่งข้อสอบ</button><button type=\"button\" class=\"palette-toggle\" data-act=\"pal-toggle\">ปิดแผง</button></div></aside></div></div>";
    main.innerHTML = html;
    $all("[data-mopt]", main).forEach(function (b) {
      b.addEventListener("click", function () { if (expireMock()) return; A.answers[q.id] = b.getAttribute("data-mopt"); save(); renderMockRun(); });
    });
    $all("[data-goto]", main).forEach(function (b) { b.addEventListener("click", function () { if (expireMock()) return; A.current = +b.getAttribute("data-goto"); save(); renderMockRun(); }); });
    if (A.deadline) {
      var tick = function () {
        var left = A.deadline - Date.now(), el = $("#timer");
        if (left <= 0) { stopTimer(); if (st().mock.active && st().mock.active.id === A.id) { var id = submitMock(true); toast("หมดเวลา ระบบส่งข้อสอบให้แล้ว"); location.hash = "#mock/result/" + id; } return; }
        if (el) { el.textContent = fmtDur(left); el.classList.toggle("low", left < 5 * 60000); }
      };
      timerHandle = setInterval(tick, 1000);
    }
  }
  function renderMockResult(id, filter) {
    var h = st().mock.history.filter(function (x) { return x.id === id; })[0];
    if (!h) { main.innerHTML = "<div class=\"page\"><h1>ไม่พบผลสอบนี้</h1><p>อาจถูกล้างหรือไม่ได้บันทึกในเบราว์เซอร์นี้</p><p><a href=\"#mock\">กลับหน้าสอบจำลอง</a></p></div>"; return; }
    filter = filter || "all";
    var set = mockSet(h.setId), blank = h.order.filter(function (q) { return !h.answers[q]; }).length;
    var wrongTopics = Object.keys(h.byTopic).filter(function (t) { return h.byTopic[t].c < h.byTopic[t].n; }).sort(function (a, b) { return h.byTopic[a].c / h.byTopic[a].n - h.byTopic[b].c / h.byTopic[b].n; });
    var html = "<div class=\"page\"><p class=\"crumbs\"><a href=\"#mock\">สอบจำลอง</a></p><h1>ผลสอบ: " + esc(set ? set.title : h.setId) + "</h1>" +
      "<p class=\"result-big\">" + h.score + " / " + h.total + "</p><p>ร้อยละ " + pct(h.score, h.total) + " · เวลาใช้ " + fmtDur(h.timeUsedMs) + (h.timed ? " จากที่ตั้งไว้ " + h.minutes + " นาที" : " (ไม่จับเวลา)") + (h.autoSubmitted ? " · ส่งอัตโนมัติเมื่อหมดเวลา" : "") + " · ไม่ได้ตอบ " + blank + " ข้อ (นับ 0 คะแนน)</p>" +
      (h.goal ? "<p class=\"note " + (h.score >= h.goal ? "note-example" : "note-caution") + "\"><strong>" + (h.score >= h.goal ? "ถึงเป้าหมายที่ตั้งไว้" : "ยังไม่ถึงเป้าหมายที่ตั้งไว้") + "</strong>เป้าหมาย " + h.goal + "/90 (ตั้งเองเพื่อฝึก ไม่ใช่เกณฑ์ผ่านสอบจริง)</p>" : "") +
      "<h2>คะแนนแยกบท</h2><div class=\"table-wrap\"><table><thead><tr><th>บท</th><th>ถูก</th><th>ร้อยละ</th></tr></thead><tbody>" +
      Object.keys(h.byChapter).sort().map(function (c) { var x = h.byChapter[c]; return "<tr><td>บทที่ " + c + "</td><td>" + x.c + "/" + x.n + "</td><td>" + pct(x.c, x.n) + "%</td></tr>"; }).join("") + "</tbody></table></div>" +
      "<h2>หัวข้อที่ต้องกลับไปอ่าน</h2>" + (wrongTopics.length ? "<ul>" + wrongTopics.map(function (t) { var x = h.byTopic[t]; return "<li><a href=\"" + topicLink(t) + "\">" + esc(topicById[t] ? topicById[t].title : t) + "</a> — ถูก " + x.c + "/" + x.n + "</li>"; }).join("") + "</ul>" : "<p>ตอบถูกทุกหัวข้อ</p>") +
      "<h2>ตรวจเฉลยย้อนหลัง</h2><div class=\"tabs no-print\" role=\"tablist\">" +
      ["all:ทุกข้อ", "wrong:เฉพาะข้อผิด/ไม่ตอบ", "flagged:ข้อที่ทำเครื่องหมาย"].map(function (x) { var p = x.split(":"); return "<a href=\"#mock/result/" + id + "/" + p[0] + "\"" + (filter === p[0] ? " aria-current=\"page\"" : "") + ">" + p[1] + "</a>"; }).join("") + "</div><div class=\"btn-row no-print\"><button type=\"button\" data-act=\"print\">พิมพ์เฉลย</button></div>";
    h.order.forEach(function (qid, k) {
      var q = qById[qid], ans = h.answers[qid], ok = ans === q.correctOptionId;
      if (filter === "wrong" && ok) return;
      if (filter === "flagged" && !(h.flags && h.flags[qid])) return;
      var order = h.optOrder[qid];
      html += "<div class=\"qcard\"><div class=\"qmeta\"><span class=\"badge\">ข้อ " + (k + 1) + "</span>" + (ok ? "<span class=\"badge badge-read\">ถูก</span>" : ans ? "<span class=\"badge badge-bad\">ผิด</span>" : "<span class=\"badge badge-warn\">ไม่ได้ตอบ</span>") + "</div>" + qMeta(q) + "<p class=\"qstem\">" + fmtStem(q.stem) + "</p><ul class=\"opts\">" +
        order.map(function (oid, i) { var o = q.options.filter(function (x) { return x.id === oid; })[0], cls = "opt", v = ""; if (oid === q.correctOptionId) { cls += " is-correct"; v = "<span class=\"verdict\">✓ เฉลย</span>"; } else if (oid === ans) { cls += " is-wrong"; v = "<span class=\"verdict\">✗ ที่เลือก</span>"; } return "<li><div class=\"" + cls + "\"><span class=\"lab\">" + THAI_LABELS[i] + "</span><span>" + esc(o.text) + "</span>" + v + "</div></li>"; }).join("") +
        "</ul>" + explainHtml(q, order, ans) + "</div>";
    });
    main.innerHTML = html + "</div>";
  }

  /* ---------- review ---------- */
  function reviewTabs(cur) {
    return "<div class=\"tabs\">" + [["", "ข้อผิด/ข้อที่ทำเครื่องหมาย"], ["flashcards", "บัตรคำ"], ["glossary", "อภิธานศัพท์"]].map(function (x) { return "<a href=\"#review" + (x[0] ? "/" + x[0] : "") + "\"" + (cur === x[0] ? " aria-current=\"page\"" : "") + ">" + x[1] + "</a>"; }).join("") + "</div>";
  }
  function renderReviewHome() {
    var wrong = readyQuestions().filter(function (q) { var s = st().qstats[q.id]; return s && !s.last; });
    var marked = Object.keys(st().bookmarks).filter(function (id) { return qById[id]; });
    var html = "<div class=\"page\"><h1>ทบทวน</h1>" + reviewTabs("") +
      "<div class=\"grid-2\"><div class=\"card\"><h2 style=\"margin-top:0\">ข้อที่ตอบผิดล่าสุด</h2><p><b>" + wrong.length + "</b> ข้อ</p><div class=\"btn-row\"><a class=\"btn btn-primary\" href=\"#practice/wrong\">ฝึกข้อที่ผิด</a></div></div>" +
      "<div class=\"card\"><h2 style=\"margin-top:0\">ข้อที่ทำเครื่องหมายทวน</h2><p><b>" + marked.length + "</b> ข้อ</p><div class=\"btn-row\"><a class=\"btn btn-primary\" href=\"#practice/bookmarked\">ฝึกข้อที่ทำเครื่องหมาย</a></div></div></div>";
    if (wrong.length) html += "<h2>รายการข้อผิดแยกหัวข้อ</h2><ul>" + groupBy(wrong, "topicId").map(function (g) { return "<li><a href=\"" + topicLink(g.key) + "\">" + esc(topicById[g.key].title) + "</a> — " + g.items.length + " ข้อ</li>"; }).join("") + "</ul>";
    else html += "<p class=\"muted\">ยังไม่มีข้อที่ตอบผิดล่าสุด</p>";
    main.innerHTML = html + "</div>";
  }
  function groupBy(arr, key) { var m = {}, out = []; arr.forEach(function (x) { if (!m[x[key]]) { m[x[key]] = { key: x[key], items: [] }; out.push(m[x[key]]); } m[x[key]].items.push(x); }); return out; }

  var fcState = { chapter: "", mode: "all", idx: 0, flipped: false, deck: null };
  function renderFlashcards() {
    var all = BC.flashcards || [];
    function buildDeck() {
      var d = all.filter(function (f) { return !fcState.chapter || f.chapterId === +fcState.chapter; });
      if (fcState.mode === "learning") d = d.filter(function (f) { return st().flashcards[f.id] !== "known"; });
      fcState.deck = d.map(function (f) { return f.id; }); fcState.idx = 0; fcState.flipped = false;
    }
    if (!fcState.deck) buildDeck();
    var deck = fcState.deck.filter(function (id) { return all.some(function (f) { return f.id === id; }); });
    var known = all.filter(function (f) { return st().flashcards[f.id] === "known"; }).length, learning = all.filter(function (f) { return st().flashcards[f.id] === "learning"; }).length;
    var html = "<div class=\"page\"><h1>บัตรคำ</h1>" + reviewTabs("flashcards") +
      "<p>ทั้งหมด " + all.length + " ใบ · จำได้แล้ว " + known + " · ยังไม่แม่น " + learning + " · ยังไม่ประเมิน " + (all.length - known - learning) + "</p>" +
      "<div class=\"btn-row\"><label>บท <select id=\"fcCh\"><option value=\"\">ทุกบท</option>" + BC.chapters.map(function (c) { return "<option value=\"" + c.id + "\"" + (String(c.id) === fcState.chapter ? " selected" : "") + ">บทที่ " + c.id + "</option>"; }).join("") + "</select></label>" +
      "<label>โหมด <select id=\"fcMode\"><option value=\"all\">ทุกใบ</option><option value=\"learning\"" + (fcState.mode === "learning" ? " selected" : "") + ">ทวนเฉพาะใบที่ยังไม่แม่น/ยังไม่ประเมิน</option></select></label><button type=\"button\" data-act=\"fc-shuffle\">สลับลำดับ</button></div>";
    if (!deck.length) html += "<p class=\"note note-example\"><strong>ไม่มีบัตรในเงื่อนไขนี้</strong>" + (fcState.mode === "learning" ? "จำได้ครบทุกใบในชุดนี้แล้ว" : "") + "</p>";
    else {
      var f = all.filter(function (x) { return x.id === deck[fcState.idx]; })[0], stt = st().flashcards[f.id];
      html += "<p class=\"muted\">ใบที่ " + (fcState.idx + 1) + "/" + deck.length + " · บทที่ " + f.chapterId + " · " + esc(topicById[f.topicId] ? topicById[f.topicId].title : "") + (stt ? " · <b>" + (stt === "known" ? "จำได้แล้ว" : "ยังไม่แม่น") + "</b>" : "") + "</p>" +
        "<div class=\"flash\"><span class=\"side-label\">ด้านหน้า — ลองนึกคำตอบ</span><div class=\"front\">" + fmtStem(f.front) + "</div>" +
        (fcState.flipped ? "<div class=\"back\"><span class=\"side-label\">ด้านหลัง</span><p>" + fmtStem(f.back) + "</p><p class=\"muted\">" + (f.refs || []).map(function (r) { return esc(r.heading) + " " + pageLinks(r.pages); }).join("; ") + " · <a href=\"" + topicLink(f.topicId) + "\">อ่านหัวข้อนี้</a></p></div>" : "") + "</div>" +
        "<div class=\"btn-row\">" + (fcState.flipped ? "<button type=\"button\" data-act=\"fc-mark\" data-v=\"learning\">ยังไม่แม่น</button><button type=\"button\" class=\"btn-primary\" data-act=\"fc-mark\" data-v=\"known\">จำได้แล้ว</button>" : "<button type=\"button\" class=\"btn-primary\" data-act=\"fc-flip\">พลิกดูคำตอบ</button>") +
        "<button type=\"button\" data-act=\"fc-prev\"" + (fcState.idx === 0 ? " disabled" : "") + ">← ก่อนหน้า</button><button type=\"button\" data-act=\"fc-next\"" + (fcState.idx >= deck.length - 1 ? " disabled" : "") + ">ถัดไป →</button></div>";
    }
    main.innerHTML = html + "</div>";
    $("#fcCh").addEventListener("change", function (e) { fcState.chapter = e.target.value; buildDeck(); renderFlashcards(); });
    $("#fcMode").addEventListener("change", function (e) { fcState.mode = e.target.value; buildDeck(); renderFlashcards(); });
  }
  function renderGlossary(q) {
    var html = "<div class=\"page\"><h1>อภิธานศัพท์</h1>" + reviewTabs("glossary") +
      "<label for=\"gq\">ค้นหาศัพท์ (ไทย/อังกฤษ)</label> <input id=\"gq\" type=\"search\" value=\"" + esc(q || "") + "\" style=\"width:100%;max-width:420px\"><p class=\"muted\" id=\"gcount\"></p><div id=\"glist\"></div></div>";
    main.innerHTML = html;
    function draw() {
      var term = norm($("#gq").value), items = BC.glossary.filter(function (g) { return !term || norm(g.term + " " + g.th + " " + g.def + " " + g.example).indexOf(term) >= 0; });
      $("#gcount").textContent = items.length + " คำ" + (term ? " ที่ตรงกับคำค้น" : "");
      $("#glist").innerHTML = items.length ? items.map(function (g) {
        return "<div class=\"card\" id=\"" + g.id + "\"><h3 style=\"margin:0\">" + esc(g.term) + (g.th ? " <span class=\"muted\">(" + esc(g.th) + ")</span>" : "") + "</h3><p>" + esc(g.def) + "</p>" + (g.example ? "<p class=\"muted\">ตัวอย่าง/บริบท: " + esc(g.example) + "</p>" : "") + "<p class=\"muted\"><a href=\"" + topicLink(g.topicId) + "\">บทเรียน: " + esc(topicById[g.topicId] ? topicById[g.topicId].title : "") + "</a> · " + pageLinks(g.pages) + "</p></div>";
      }).join("") : "<p class=\"note\">ไม่พบศัพท์ที่ตรงกับคำค้น ลองคำที่สั้นลง หรือใช้ <a href=\"#search/" + encodeURIComponent($("#gq").value) + "\">ค้นหาทั้งเว็บ</a></p>";
    }
    $("#gq").addEventListener("input", draw); draw();
  }

  /* ---------- search ---------- */
  function norm(s) { return String(s || "").toLowerCase().replace(/\s+/g, " ").trim(); }
  function stripHtml(h) { var d = document.createElement("div"); d.innerHTML = h; return d.textContent || ""; }
  var searchIndex = null;
  function buildSearch() {
    searchIndex = [];
    BC.chapters.forEach(function (ch) {
      ch.topics.forEach(function (t) {
        var text = [t.title, t.objectives.join(" "), stripHtml(t.body), t.confusions.join(" "), t.summary.join(" "), t.recall.map(function (r) { return r.q + " " + r.a; }).join(" ")].join(" \n ");
        searchIndex.push({ kind: "บทเรียน บทที่ " + ch.id, title: t.title, href: topicLink(t.id), text: text.replace(/\s+/g, " ") });
      });
    });
    BC.glossary.forEach(function (g) { searchIndex.push({ kind: "อภิธานศัพท์", title: g.term + (g.th ? " (" + g.th + ")" : ""), href: "#review/glossary/" + encodeURIComponent(g.term), text: g.term + " " + g.th + " " + g.def + " " + g.example }); });
    BC.examSummary.forEach(function (s) { searchIndex.push({ kind: "สรุปก่อนสอบ", title: s.title, href: "#summary", text: stripHtml(s.html).replace(/\s+/g, " ") }); });
  }
  function renderSearch(q) {
    if (!searchIndex) buildSearch();
    var terms = norm(q).split(" ").filter(Boolean);
    $("#searchInput").value = q;
    var hits = terms.length ? searchIndex.map(function (it) {
      var lt = norm(it.text), ltitle = norm(it.title), score = 0;
      for (var i = 0; i < terms.length; i++) { var p = lt.indexOf(terms[i]); if (p < 0 && ltitle.indexOf(terms[i]) < 0) return null; score += (ltitle.indexOf(terms[i]) >= 0 ? 5 : 0) + 1; }
      return { it: it, score: score };
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score; }) : [];
    var html = "<div class=\"page\"><h1>ผลการค้นหา</h1><form id=\"searchPage\" class=\"btn-row\"><label class=\"sr-only\" for=\"sq\">คำค้น</label><input id=\"sq\" type=\"search\" value=\"" + esc(q) + "\" style=\"flex:1;min-width:0\"><button type=\"submit\" class=\"btn-primary\">ค้นหา</button></form>";
    if (!terms.length) html += "<p class=\"muted\">พิมพ์คำค้นภาษาไทยหรืออังกฤษ เช่น Merkle, ฉันทามติ, e-LG, Hyperledger</p>";
    else if (!hits.length) html += "<p class=\"note\">ไม่พบ “" + esc(q) + "” ในบทเรียน อภิธานศัพท์ หรือสรุป ลองใช้คำที่สั้นลงหรือสะกดแบบอื่น (เช่น อังกฤษ/ไทย)</p>";
    else html += "<p class=\"muted\">พบ " + hits.length + " รายการ</p>" + hits.slice(0, 60).map(function (h) {
      var lt = h.it.text, low = lt.toLowerCase(), p = low.indexOf(terms[0]); if (p < 0) p = 0;
      var start = Math.max(0, p - 60), snip = (start ? "…" : "") + lt.substr(start, 180) + (start + 180 < lt.length ? "…" : "");
      var s = esc(snip); terms.forEach(function (t) { var re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"); s = s.replace(re, "<mark>$1</mark>"); });
      return "<div class=\"search-hit\"><span class=\"badge\">" + esc(h.it.kind) + "</span> <a href=\"" + h.it.href + "\"><b>" + esc(h.it.title) + "</b></a><p>" + s + "</p></div>";
    }).join("");
    main.innerHTML = html + "</div>";
    $("#searchPage").addEventListener("submit", function (e) { e.preventDefault(); location.hash = "#search/" + encodeURIComponent($("#sq").value.trim()); });
  }

  /* ---------- progress ---------- */
  function renderProgress() {
    var s = BC.store.status, S = st();
    var html = "<div class=\"page\"><h1>ความคืบหน้าและข้อมูล</h1>" +
      "<div class=\"card\"><h2 style=\"margin-top:0\">สถานะการบันทึก</h2><p>" + (s.mode === "local" ? "✅ " : "⚠ ") + esc(s.message) + "</p>" +
      (S.savedAt ? "<p class=\"muted\">บันทึกล่าสุด: " + fmtDate(S.savedAt) + "</p>" : "") +
      "<p class=\"muted\">การบันทึกผ่าน file:// อาจแยกตามเบราว์เซอร์และตำแหน่งโฟลเดอร์ ถ้าย้ายโฟลเดอร์หรือเปลี่ยนเบราว์เซอร์ ข้อมูลอาจไม่ตามไป — ควรส่งออก JSON เก็บไว้เป็นระยะ</p>" +
      (s.corruptRaw ? "<p class=\"note note-caution\"><strong>พบข้อมูลเดิมที่เสียหาย</strong>" + esc(s.lastError || "") + " <button type=\"button\" data-act=\"dl-corrupt\">ดาวน์โหลดข้อมูลเดิม</button></p>" : "") +
      "<div class=\"btn-row\"><button type=\"button\" class=\"btn-primary\" data-act=\"export\">ส่งออก JSON (สำรอง)</button><button type=\"button\" data-act=\"export-text\">ดู JSON สำหรับคัดลอก</button><label class=\"btn\" for=\"importFile\">นำเข้า JSON…</label><input type=\"file\" id=\"importFile\" accept=\"application/json,.json\" class=\"sr-only\"><button type=\"button\" class=\"btn-danger\" data-act=\"reset\">รีเซ็ตข้อมูลของเว็บนี้</button></div><div id=\"backupTextBox\" hidden><p>เลือกข้อความทั้งหมดและคัดลอกไปบันทึกเป็นไฟล์ .json ได้ หากเบราว์เซอร์ไม่ดาวน์โหลดไฟล์</p><label for=\"backupText\">ข้อมูลสำรอง JSON</label><textarea id=\"backupText\" readonly rows=\"8\" style=\"width:100%\"></textarea></div><p id=\"ioMsg\" role=\"status\"></p></div>" +
      "<div class=\"card\"><h2 style=\"margin-top:0\">การแสดงผล</h2><div class=\"btn-row\"><span>ขนาดตัวอักษร</span><button type=\"button\" data-act=\"font\" data-v=\"-1\" aria-label=\"ลดขนาดตัวอักษร\">A−</button><span id=\"fontVal\">" + Math.round(S.settings.fontScale * 100) + "%</span><button type=\"button\" data-act=\"font\" data-v=\"1\" aria-label=\"เพิ่มขนาดตัวอักษร\">A+</button><button type=\"button\" data-act=\"theme\">" + (S.settings.dark ? "ใช้ธีมสว่าง" : "ใช้ธีมมืด") + "</button></div></div>";
    html += "<h2>รายหัวข้อ</h2><p class=\"muted\">“อ่านแล้ว” มาจากการกดทำเครื่องหมายเอง (ไม่ใช่แค่เปิดหน้า) ส่วนผลฝึกนับจากข้อที่ตอบจริงในเครื่องนี้ (ฝึกและสอบจำลอง)</p>";
    BC.chapters.forEach(function (ch) {
      html += "<h3>" + esc(ch.title) + "</h3><div class=\"table-wrap\"><table><thead><tr><th>หัวข้อ</th><th>อ่าน</th><th>ผลฝึก</th></tr></thead><tbody>" +
        ch.topics.map(function (t) {
          var x = topicStats(t.id);
          var res = x.attempted ? "ฝึก " + x.attempted + "/" + x.total + " ข้อ · ถูก " + x.c + "/" + x.n + " ครั้ง (" + pct(x.c, x.n) + "%)" + (x.lastWrong ? " · <span class=\"badge badge-bad\">ผิดล่าสุด " + x.lastWrong + "</span>" : "") : "<span class=\"muted\">ยังไม่มีผลฝึก</span>";
          return "<tr><td><a href=\"" + topicLink(t.id) + "\">" + esc(t.title) + "</a></td><td>" + (S.readTopics[t.id] ? "✓ อ่านแล้ว" : "—") + "</td><td>" + res + "</td></tr>";
        }).join("") + "</tbody></table></div>";
    });
    var weak = weakTopics();
    html += "<h2>แนะนำหัวข้อทวน</h2><p class=\"muted\">กฎง่าย ๆ: มีข้อที่ตอบผิดในการตอบครั้งล่าสุด หรือตอบถูกต่ำกว่า 60% จากอย่างน้อย 3 ครั้ง</p>" +
      (weak.length ? "<ul>" + weak.map(function (w) { return "<li><a href=\"" + topicLink(w.id) + "\">" + esc(topicById[w.id].title) + "</a> — ผิดล่าสุด " + w.lastWrong + " ข้อ, ถูกรวม " + w.c + "/" + w.n + " ครั้ง</li>"; }).join("") + "</ul>" : "<p class=\"muted\">ยังไม่มีหัวข้อที่เข้าเกณฑ์</p>");
    html += "<h2>บัตรคำ</h2><p>จำได้แล้ว " + Object.keys(S.flashcards).filter(function (k) { return S.flashcards[k] === "known"; }).length + " ใบ · ยังไม่แม่น " + Object.keys(S.flashcards).filter(function (k) { return S.flashcards[k] === "learning"; }).length + " ใบ จาก " + (BC.flashcards || []).length + "</p>";
    html += "<h2>ผลสอบจำลอง</h2>" + (S.mock.history.length ? "<ul>" + S.mock.history.slice().reverse().map(function (h) { return "<li><a href=\"#mock/result/" + esc(h.id) + "\">" + fmtDate(h.submittedAt) + " · " + esc(mockSet(h.setId) ? mockSet(h.setId).short : h.setId) + "</a> — " + h.score + "/90</li>"; }).join("") + "</ul>" : "<p class=\"muted\">ยังไม่มีประวัติผลสอบ</p>");
    main.innerHTML = html + "</div>";
    $("#importFile").addEventListener("change", function (e) {
      var file = e.target.files[0]; if (!file) return;
      var msg = $("#ioMsg");
      if (file.size > 3 * 1024 * 1024) { msg.textContent = "นำเข้าไม่สำเร็จ: ไฟล์ใหญ่เกิน 3 MB — ข้อมูลเดิมไม่ถูกเปลี่ยน"; return; }
      var r = new FileReader();
      r.onload = function () {
        if (!confirm("นำเข้าแล้วจะแทนที่ความคืบหน้าปัจจุบันด้วยข้อมูลในไฟล์ ดำเนินการต่อหรือไม่?")) { msg.textContent = "ยกเลิกการนำเข้า"; return; }
        var res = BC.store.importJSON(String(r.result));
        if (!res.ok) { msg.textContent = "นำเข้าไม่สำเร็จ: " + res.error + " — ข้อมูลเดิมไม่ถูกเปลี่ยน"; return; }
        applySettings(); renderStatus(); renderProgress();
        toast("นำเข้าสำเร็จ" + (res.dropped ? " (ข้ามรายการที่ไม่รู้จัก " + res.dropped + " รายการ)" : ""));
      };
      r.onerror = function () { msg.textContent = "อ่านไฟล์ไม่สำเร็จ — ข้อมูลเดิมไม่ถูกเปลี่ยน"; };
      r.readAsText(file);
    });
  }
  function applySettings() {
    var s = st().settings;
    document.documentElement.style.setProperty("--font-scale", s.fontScale);
    if (s.dark) document.documentElement.setAttribute("data-theme", "dark"); else document.documentElement.removeAttribute("data-theme");
  }

  /* ---------- global events ---------- */
  function onClick(e) {
    var b = e.target.closest("[data-act]"); if (!b) return;
    var act = b.getAttribute("data-act"), S;
    if (/^m-/.test(act) && expireMock()) return;
    switch (act) {
      case "mark-read":
        var tid = b.getAttribute("data-topic");
        if (st().readTopics[tid]) delete st().readTopics[tid]; else st().readTopics[tid] = Date.now();
        save(); var y = window.scrollY; route(); window.scrollTo(0, y); break;
      case "print": $all("details").forEach(function (d) { d.open = true; }); window.print(); break;
      case "bookmark":
        var qid = b.getAttribute("data-q");
        if (st().bookmarks[qid]) delete st().bookmarks[qid]; else st().bookmarks[qid] = Date.now();
        save(); b.textContent = st().bookmarks[qid] ? "★ เลิกทำเครื่องหมายทวน" : "☆ บันทึกข้อที่อยากทวน"; toast(st().bookmarks[qid] ? "บันทึกข้อนี้ไว้ทวนแล้ว" : "เลิกทำเครื่องหมายแล้ว"); break;
      case "pr-next": S = st().practiceSession; S.idx++; save(); renderPracticeRun(); window.scrollTo(0, 0); break;
      case "pr-prev": S = st().practiceSession; S.idx = Math.max(0, S.idx - 1); save(); renderPracticeRun(); break;
      case "pr-end": S = st().practiceSession; S.idx = S.order.length; save(); renderPracticeRun(); break;
      case "practice-again": st().practiceSession = null; save(); location.hash = "#practice"; break;
      case "practice-discard": st().practiceSession = null; save(); renderPracticeSetup(); break;
      case "m-prev": case "m-next": case "m-flag": case "m-clear":
        S = st().mock.active; if (!S) return;
        var q = S.order[S.current];
        if (act === "m-prev") S.current = Math.max(0, S.current - 1);
        if (act === "m-next") S.current = Math.min(S.order.length - 1, S.current + 1);
        if (act === "m-flag") { if (S.flags[q]) delete S.flags[q]; else S.flags[q] = 1; }
        if (act === "m-clear") delete S.answers[q];
        save(); stopTimer(); renderMockRun(); break;
      case "m-submit":
        S = st().mock.active; if (!S) return;
        var left = S.order.length - Object.keys(S.answers).length;
        if (!confirm((left ? "ยังไม่ได้ตอบ " + left + " ข้อ (ข้อว่างนับ 0 คะแนน)\n" : "ตอบครบ 90 ข้อแล้ว\n") + "ยืนยันส่งข้อสอบหรือไม่? ส่งแล้วแก้คำตอบไม่ได้")) return;
        if (expireMock()) return;
        stopTimer(); var rid = submitMock(false); location.hash = "#mock/result/" + rid; break;
      case "mock-abandon":
        if (confirm("ยกเลิกชุดสอบที่ค้างอยู่? คำตอบจะไม่ถูกบันทึกเป็นผลสอบ")) { st().mock.active = null; save(); renderMockSetup(); } break;
      case "pal-toggle": var p = $("#palette"); if (p) p.classList.toggle("open"); break;
      case "fc-flip": fcState.flipped = true; renderFlashcards(); break;
      case "fc-mark": st().flashcards[fcState.deck[fcState.idx]] = b.getAttribute("data-v"); save(); if (fcState.idx < fcState.deck.length - 1) { fcState.idx++; fcState.flipped = false; } renderFlashcards(); break;
      case "fc-prev": fcState.idx = Math.max(0, fcState.idx - 1); fcState.flipped = false; renderFlashcards(); break;
      case "fc-next": fcState.idx = Math.min(fcState.deck.length - 1, fcState.idx + 1); fcState.flipped = false; renderFlashcards(); break;
      case "fc-shuffle": fcState.deck = shuffle(fcState.deck); fcState.idx = 0; fcState.flipped = false; renderFlashcards(); break;
      case "export": download("blockchain-study-backup-" + new Date().toISOString().slice(0, 10) + ".json", BC.store.exportJSON()); toast("ส่งออกไฟล์สำรองแล้ว"); break;
      case "export-text": $("#backupTextBox").hidden = false; $("#backupText").value = BC.store.exportJSON(); $("#backupText").focus(); $("#backupText").select(); break;
      case "dl-corrupt": download("blockchain-study-corrupt-data.txt", BC.store.status.corruptRaw || "", "text/plain"); break;
      case "reset":
        if (confirm("ล้างความคืบหน้าทั้งหมดของเว็บไซต์นี้ (เฉพาะคีย์ bcstudy:) ? แนะนำให้ส่งออก JSON ก่อน")) { BC.store.reset(); applySettings(); renderStatus(); renderProgress(); toast("รีเซ็ตแล้ว"); } break;
      case "font":
        var fs = Math.round((st().settings.fontScale + 0.05 * +b.getAttribute("data-v")) * 100) / 100;
        st().settings.fontScale = Math.min(1.4, Math.max(0.85, fs)); applySettings(); save(); $("#fontVal").textContent = Math.round(st().settings.fontScale * 100) + "%"; break;
      case "theme": st().settings.dark = !st().settings.dark; applySettings(); save(); renderProgress(); break;
    }
  }
  function onKey(e) {
    if (!/^#mock\/run/.test(location.hash) || !st().mock.active) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (expireMock()) return;
    var A = st().mock.active, q = qById[A.order[A.current]];
    if (/^[1-4]$/.test(e.key)) { A.answers[q.id] = A.optOrder[q.id][+e.key - 1]; save(); stopTimer(); renderMockRun(); e.preventDefault(); }
    else if (e.key === "ArrowRight") { A.current = Math.min(89, A.current + 1); save(); stopTimer(); renderMockRun(); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { A.current = Math.max(0, A.current - 1); save(); stopTimer(); renderMockRun(); e.preventDefault(); }
    else if (e.key === "f" || e.key === "F") { if (A.flags[q.id]) delete A.flags[q.id]; else A.flags[q.id] = 1; save(); stopTimer(); renderMockRun(); e.preventDefault(); }
  }

  /* ---------- boot ---------- */
  function boot() {
    main = $("#main");
    buildIndexes();
    BC.store.load();
    applySettings();
    renderStatus();
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    $("#menuBtn").addEventListener("click", function () { var n = $("#mainNav"), o = n.classList.toggle("open"); $("#topbar").classList.toggle("menu-open", o); this.setAttribute("aria-expanded", o ? "true" : "false"); });
    $("#searchForm").addEventListener("submit", function (e) { e.preventDefault(); var v = $("#searchInput").value.trim(); location.hash = "#search/" + encodeURIComponent(v); });
    window.addEventListener("hashchange", route);
    document.addEventListener("visibilitychange", function () { if (!document.hidden && /^#mock\/run/.test(location.hash)) { stopTimer(); renderMockRun(); } });
    window.addEventListener("focus", function () { if (/^#mock\/run/.test(location.hash) && st().mock.active) { stopTimer(); renderMockRun(); } });
    window.addEventListener("beforeprint", function () { $all("details").forEach(function (d) { d.open = true; }); });
    route();
  }
  BC.app = { submitMock: submitMock, qById: qById, topicById: topicById, readyQuestions: readyQuestions };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
