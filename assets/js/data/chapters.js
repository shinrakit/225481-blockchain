/* chapters.js — โครงสร้าง 3 บท (เนื้อหาหัวข้ออยู่ใน lessons-ch1/2/3.js)
   ข้อมูลอ้างอิงหนังสือ: การใช้เทคโนโลยีบล็อกเชนสำหรับภาครัฐ (Blockchain for Government Services)
   เวอร์ชัน 2.0 มกราคม พ.ศ. 2564 สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) — 192 หน้า
   เลขหน้าพิมพ์ = ลำดับหน้า PDF (ตรวจแล้ว ดู docs/source-audit.md) */
window.BC = window.BC || {};
BC.source = {
  id: "bc-gov-v2",
  title: "การใช้เทคโนโลยีบล็อกเชนสำหรับภาครัฐ (Blockchain for Government Services) เวอร์ชัน 2.0 มกราคม พ.ศ. 2564",
  publisher: "สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)",
  pdfPath: "./Blockchain-V2.pdf",
  totalPages: 192
};
BC.chapters = [
  {
    id: 1, slug: "ch1",
    title: "บทที่ 1 บทนำ: พื้นฐานและหลักการทำงานของ Blockchain",
    short: "พื้นฐานและหลักการทำงาน",
    pages: [18, 59],
    intro: "ความหมายของ Blockchain รูปแบบระบบ Node/Ledger ขั้นตอนการทำงาน องค์ประกอบ โครงสร้าง Block, Hash, Nonce, Merkle Root กลไก Consensus ประเภท Blockchain คุณลักษณะ 3 ประการ เกณฑ์เลือกใช้ 6 ข้อ และรูปแบบการประยุกต์ใช้ (Cryptocurrency, Proof of Services, Smart Contract, DAO) รวมถึงอภิธานศัพท์หน้า 13–17",
    topics: []
  },
  {
    id: 2, slug: "ch2",
    title: "บทที่ 2 การประยุกต์ใช้ Blockchain เพื่องานบริการภาครัฐ กรณีศึกษาต่างประเทศ",
    short: "งานบริการภาครัฐและกรณีศึกษา",
    pages: [60, 120],
    intro: "ภาพรวมการใช้ในต่างประเทศ วัตถุประสงค์ 4 ด้าน ประโยชน์และข้อจำกัด กลุ่มการประยุกต์ใช้ 3 กลุ่มพร้อมกรณีศึกษา (Identity, Data Record, Transaction Traceability รวม e-LG ของไทย) ปัจจัยความสำเร็จ 5 ด้าน และตารางโครงการในเอกสารแนบท้าย",
    topics: []
  },
  {
    id: 3, slug: "ch3",
    title: "บทที่ 3 แนวคิดและหลักการประยุกต์ใช้ Blockchain สำหรับภาครัฐ ภายใต้บริบทของประเทศไทย",
    short: "บริบทไทย การบูรณาการ และ e-Referral",
    pages: [121, 175],
    intro: "วิสัยทัศน์รัฐบาลดิจิทัล เทคโนโลยี 9 กลุ่ม ตารางความเป็นไปได้ 17 ขีดความสามารถ โครงการ e-Authentication/GDX สถาปัตยกรรม SOA/ESB เทียบกับการบูรณาการด้วย Blockchain (On/Off Chain, Access Control, สิทธิ์) ตัวอย่างตรวจคนเข้าเมือง และกรณีศึกษาระบบต้นแบบ e-Referral",
    topics: []
  }
];
/* ตัวช่วยสำหรับไฟล์บทเรียน: เพิ่มหัวข้อเข้าในบท */
BC.addTopics = function (chapterId, topics) {
  var ch = BC.chapters.filter(function (c) { return c.id === chapterId; })[0];
  topics.forEach(function (t) { t.chapterId = chapterId; ch.topics.push(t); });
};
