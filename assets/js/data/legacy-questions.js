/* legacy-questions.js — แนวข้อสอบเดิมบทที่ 1 (25 ข้อ) จาก ตัวอย่างแนวข้อสอบ.md
   เก็บโจทย์ ตัวเลือก และคำตอบที่ทำเครื่องหมายไว้ตามต้นฉบับทุกตัวอักษร
   ส่วน explanation / optionNotes / refs / status เป็นผลตรวจกับหนังสือ (ดู docs/legacy-question-audit.md) */
window.BC = window.BC || {};
BC.legacy = [
  {
    id: "legacy-01", sourceNumber: 1, topicId: "ch1-intro",
    originalStem: "Blockchain คือเทคโนโลยีการจัดเก็บข้อมูลแบบใด",
    originalOptions: [
      { id: "legacy-01-a", text: "Distributed Ledger Technology (DLT)" },
      { id: "legacy-01-b", text: "Centralised Database" },
      { id: "legacy-01-c", text: "Standalone Database" },
      { id: "legacy-01-d", text: "Hierarchical Database" }
    ],
    markedOptionId: "legacy-01-a", status: "verified",
    explanation: "หนังสือนิยาม Blockchain ว่าเป็นเทคโนโลยีการจัดเก็บข้อมูลแบบ Shared Database หรือที่รู้จักในชื่อ Distributed Ledger Technology (DLT) ทุกผู้ใช้เห็นข้อมูลชุดเดียวกัน",
    optionNotes: {
      "legacy-01-a": "ตรงกับนิยามในอภิธานศัพท์และหน้า 19",
      "legacy-01-b": "ตรงข้ามกับหลักการ เพราะ Blockchain ไม่มีเครื่องใดเป็นศูนย์กลางหรือเครื่องแม่ข่าย (หน้า 22)",
      "legacy-01-c": "ฐานข้อมูลเครื่องเดียวไม่มีการแชร์สำเนาให้ทุก Node",
      "legacy-01-d": "หนังสือไม่ได้อธิบาย Blockchain เป็นฐานข้อมูลแบบลำดับชั้น"
    },
    refs: [ { pages: [13, 19], heading: "อภิธานศัพท์ / เทคโนโลยี Blockchain" } ],
    note: ""
  },
  {
    id: "legacy-02", sourceNumber: 2, topicId: "ch1-intro",
    originalStem: "แนวคิดของเทคโนโลยี Blockchain ถูกนำเสนอครั้งแรกในปีใด และโดยใคร",
    originalOptions: [
      { id: "legacy-02-a", text: "ปี 2008 โดย \"Satoshi Nakamoto\"" },
      { id: "legacy-02-b", text: "ปี 2010 โดย \"Vitalik Buterin\"" },
      { id: "legacy-02-c", text: "ปี 1994 โดย \"Nick Szabo\"" },
      { id: "legacy-02-d", text: "ปี 2015 โดย \"World Economic Forum\"" }
    ],
    markedOptionId: "legacy-02-a", status: "verified",
    explanation: "หน้า 19 ระบุว่าจุดเริ่มต้นเกิดขึ้นครั้งแรกในปี 2008 จากเอกสาร Bitcoin: A Peer-to-Peer Electronic Cash System ของ Satoshi Nakamoto",
    optionNotes: {
      "legacy-02-a": "ตรงกับหน้า 19",
      "legacy-02-b": "หนังสือไม่ได้ระบุ Vitalik Buterin ในฐานะผู้เสนอแนวคิดแรก (ชื่อ Buterin ปรากฏเฉพาะในการอ้างอิงเรื่อง Consortium Blockchain)",
      "legacy-02-c": "ปี 1994 และ Nick Szabo เป็นที่มาของแนวคิดสัญญาอัจฉริยะ (Smart Contract) หน้า 53 ไม่ใช่ Blockchain",
      "legacy-02-d": "World Economic Forum Survey (2015) เป็นข้อมูลสำรวจการใช้งาน (หน้า 48) ไม่ใช่ผู้เสนอแนวคิด"
    },
    refs: [ { pages: [19], heading: "เทคโนโลยี Blockchain" }, { pages: [53], heading: "สัญญาอัจฉริยะ (Smart Contract)" } ],
    note: ""
  },
  {
    id: "legacy-03", sourceNumber: 3, topicId: "ch1-workflow",
    originalStem: "ข้อใดคือหลักการทำงานพื้นฐานที่สำคัญของเทคโนโลยี Blockchain ที่ต้องประกอบไปด้วย 4 ขั้นตอนหลัก",
    originalOptions: [
      { id: "legacy-03-a", text: "Request, Authorize, Transmit, Confirm" },
      { id: "legacy-03-b", text: "Create, Encrypt, Validate, Execute" },
      { id: "legacy-03-c", text: "Start, Broadcast, Verify, Finalize" },
      { id: "legacy-03-d", text: "Create, Broadcast, Validation, Add to Chain" }
    ],
    markedOptionId: "legacy-03-d", status: "verified",
    explanation: "ภาพที่ 3 และหน้า 24 กำหนด 4 ขั้นตอนหลัก: Create → Broadcast → Validation → Add to Chain โดยแพลตฟอร์มจริงอาจออกแบบต่างไป แต่อย่างน้อยต้องมี 4 ขั้นนี้",
    optionNotes: {
      "legacy-03-a": "ไม่ใช่ชื่อขั้นตอนในหนังสือ",
      "legacy-03-b": "มี Create แต่ Encrypt/Execute ไม่ใช่ขั้นตอนหลักตามภาพที่ 3",
      "legacy-03-c": "Start เป็นจุดเริ่มต้นของแผนภาพ ไม่ใช่ขั้นตอน และไม่มี Add to Chain",
      "legacy-03-d": "ตรงกับภาพที่ 3 หน้า 23–24"
    },
    refs: [ { pages: [23, 24], heading: "หลักการทำงานของเทคโนโลยี Blockchain (รูปภาพที่ 3)" } ],
    note: ""
  },
  {
    id: "legacy-04", sourceNumber: 4, topicId: "ch1-components",
    originalStem: "องค์ประกอบของเทคโนโลยี Blockchain ประกอบด้วย 4 องค์ประกอบสำคัญ ยกเว้นข้อใด",
    originalOptions: [
      { id: "legacy-04-a", text: "Chain" },
      { id: "legacy-04-b", text: "Consensus" },
      { id: "legacy-04-c", text: "Node" },
      { id: "legacy-04-d", text: "Block" }
    ],
    markedOptionId: "legacy-04-c", status: "verified",
    explanation: "หน้า 25 ระบุองค์ประกอบ 4 อย่างคือ Block, Chain, Consensus และ Validation — Node ไม่อยู่ในรายการนี้",
    optionNotes: {
      "legacy-04-a": "Chain เป็นองค์ประกอบที่ 2",
      "legacy-04-b": "Consensus เป็นองค์ประกอบที่ 3",
      "legacy-04-c": "ไม่อยู่ในรายการ 4 องค์ประกอบของหน้า 25",
      "legacy-04-d": "Block เป็นองค์ประกอบที่ 1"
    },
    refs: [ { pages: [25], heading: "องค์ประกอบของเทคโนโลยี Blockchain (รูปภาพที่ 4)" }, { pages: [17, 22], heading: "Node" } ],
    note: "คำตอบถูกตาม “การจัดหมวด” ของหนังสือหน้า 25 แต่ไม่ได้แปลว่า Node ไม่สำคัญ หน้า 17 และ 22 อธิบายว่า Node เป็นโครงสร้างพื้นฐานที่สำคัญในการกระจายและเชื่อมโยงเครือข่าย"
  },
  {
    id: "legacy-05", sourceNumber: 5, topicId: "ch1-block",
    originalStem: "ส่วนประกอบใดใน Block ที่ใช้เก็บค่า Hash ของ Block ก่อนหน้า เพื่อเชื่อมโยงกันเป็น Chain",
    originalOptions: [
      { id: "legacy-05-a", text: "Merkle Root" },
      { id: "legacy-05-b", text: "Timestamp" },
      { id: "legacy-05-c", text: "Nonce" },
      { id: "legacy-05-d", text: "Previous Hash" }
    ],
    markedOptionId: "legacy-05-d", status: "verified",
    explanation: "Previous Hash คือค่า Current Hash ของ Block ก่อนหน้า ซึ่งถูกเก็บไว้ในโครงสร้างของ Block ถัดไปเสมอ จึงเป็นตัวเชื่อม Block เข้าเป็น Chain",
    optionNotes: {
      "legacy-05-a": "Merkle Root คือ Hash ของ Transactions ทั้งหมดใน Block ตัวเอง ไม่ใช่ของ Block ก่อนหน้า",
      "legacy-05-b": "Timestamp คือเวลาที่ Block ถูกสร้าง",
      "legacy-05-c": "Nonce คือค่าที่ใช้ค้นหา Hash ให้เป็นไปตามกฎ (PoW)",
      "legacy-05-d": "ตรงกับหน้า 13 และ 28"
    },
    refs: [ { pages: [13, 28], heading: "Previous Hash" } ],
    note: ""
  },
  {
    id: "legacy-06", sourceNumber: 6, topicId: "ch1-nonce",
    originalStem: "ค่าที่ถูกสุ่มขึ้นมาเพื่อใช้ในการค้นหาค่า Hash ของ Block ให้เป็นไปตามกฎของระบบเรียกว่าอะไร",
    originalOptions: [
      { id: "legacy-06-a", text: "Nonce" },
      { id: "legacy-06-b", text: "Previous Hash" },
      { id: "legacy-06-c", text: "Difficulty Target" },
      { id: "legacy-06-d", text: "Merkle Root" }
    ],
    markedOptionId: "legacy-06-a", status: "verified",
    explanation: "อภิธานศัพท์หน้า 13 นิยาม Nonce ว่า “ค่าที่ถูกสุ่มขึ้นมาเพื่อใช้ในการค้นหาค่า Hash ของ Block ซึ่งจะต้องเป็นไปตามกฎของระบบ” โดย Hash ที่ได้ต้องต่ำกว่า Target",
    optionNotes: {
      "legacy-06-a": "ตรงกับนิยามหน้า 13 และ 29",
      "legacy-06-b": "Previous Hash คือ Hash ของ Block ก่อนหน้า ไม่ได้สุ่มขึ้น",
      "legacy-06-c": "Difficulty Target คือเกณฑ์ที่ Hash ต้องต่ำกว่า ไม่ใช่ค่าที่ลองสุ่ม",
      "legacy-06-d": "Merkle Root คือ Hash ของรายการธุรกรรมใน Block"
    },
    refs: [ { pages: [13, 27, 29], heading: "Nonce / วิธีการคำนวณหาค่า Nonce" } ],
    note: "ระวังอย่าสับสน Nonce (ค่าที่ลองเปลี่ยน) กับ Hash (ผลลัพธ์ที่คำนวณได้แล้วนำไปเทียบกับ Target)"
  },
  {
    id: "legacy-07", sourceNumber: 7, topicId: "ch1-consensus",
    originalStem: "Consensus คืออะไรในบริบทของ Blockchain",
    originalOptions: [
      { id: "legacy-07-a", text: "การเข้ารหัสข้อมูลในแต่ละ Block" },
      { id: "legacy-07-b", text: "อุปกรณ์คอมพิวเตอร์ที่เชื่อมต่ออยู่ในเครือข่าย" },
      { id: "legacy-07-c", text: "การกำหนดข้อตกลงและความเห็นชอบร่วมกันระหว่างสมาชิกในเครือข่าย" },
      { id: "legacy-07-d", text: "ความเร็วในการประมวลผลธุรกรรม" }
    ],
    markedOptionId: "legacy-07-c", status: "verified",
    explanation: "Consensus คือการกำหนดข้อตกลงและความเห็นชอบร่วมกันระหว่างสมาชิกในเครือข่าย โดยสมาชิกยอมรับกฎระเบียบร่วมกันผ่านอัลกอริทึม เพื่อให้ทุก Node มีข้อมูลถูกต้อง ชุดเดียวกัน และลำดับตรงกัน",
    optionNotes: {
      "legacy-07-a": "การเข้ารหัสเกี่ยวกับ Cryptography ไม่ใช่นิยามของ Consensus",
      "legacy-07-b": "นี่คือนิยามของ Node (หน้า 17)",
      "legacy-07-c": "ตรงกับหน้า 14 และ 33",
      "legacy-07-d": "หนังสือไม่ได้นิยาม Consensus เป็นความเร็ว"
    },
    refs: [ { pages: [14, 22, 33], heading: "Consensus" } ],
    note: ""
  },
  {
    id: "legacy-08", sourceNumber: 8, topicId: "ch1-consensus",
    originalStem: "Proof-of-Work เป็นกระบวนการ Consensus ที่ใช้หลักการใด",
    originalOptions: [
      { id: "legacy-08-a", text: "การกำหนดสิทธิ์ให้ผู้ที่เชื่อถือได้" },
      { id: "legacy-08-b", text: "การวางสินทรัพย์ค้ำประกัน" },
      { id: "legacy-08-c", text: "การแก้ปัญหาทางคณิตศาสตร์ที่ซับซ้อน" },
      { id: "legacy-08-d", text: "การใช้หลักการเสียงข้างมาก" }
    ],
    markedOptionId: "legacy-08-c", status: "verified",
    explanation: "PoW ใช้การแก้ปัญหาทางคณิตศาสตร์ที่ซับซ้อนและใช้เวลา โดย Node ที่เรียกว่า Miner ได้รับค่าตอบแทน และทำให้การแก้ไขข้อมูลย้อนหลังมีต้นทุนสูง",
    optionNotes: {
      "legacy-08-a": "เป็นหลักการของ Proof-of-Authority",
      "legacy-08-b": "เป็นหลักการของ Proof-of-Stake",
      "legacy-08-c": "ตรงกับหน้า 14 และ 34",
      "legacy-08-d": "เป็นหลักการของ PBFT"
    },
    refs: [ { pages: [14, 34], heading: "Proof-of-Work" } ],
    note: ""
  },
  {
    id: "legacy-09", sourceNumber: 9, topicId: "ch1-consensus",
    originalStem: "Proof-of-Stake เป็นกระบวนการ Consensus ที่ใช้หลักการใด",
    originalOptions: [
      { id: "legacy-09-a", text: "การวาง \"สินทรัพย์\" ของผู้ตรวจสอบ (Validator) ในการยืนยันธุรกรรม" },
      { id: "legacy-09-b", text: "การแก้ปัญหาทางคณิตศาสตร์ที่ซับซ้อน" },
      { id: "legacy-09-c", text: "การหมุนเวียนสิทธิ์ในการตรวจสอบ" },
      { id: "legacy-09-d", text: "การใช้หลักการเสียงข้างมาก" }
    ],
    markedOptionId: "legacy-09-a", status: "verified",
    explanation: "PoS ใช้การวาง “สินทรัพย์” ของผู้ตรวจสอบ ผู้ที่วางสินทรัพย์มากมีโอกาสสูงที่จะได้สิทธิ์เขียน Block ถัดไป และได้ค่าธรรมเนียมเป็นรางวัล",
    optionNotes: {
      "legacy-09-a": "ตรงกับหน้า 15 และ 34",
      "legacy-09-b": "เป็นหลักการของ Proof-of-Work",
      "legacy-09-c": "การหมุนเวียนสิทธิเป็นลักษณะของ Proof-of-Authority (หน้า 15, 35)",
      "legacy-09-d": "เป็นหลักการของ PBFT"
    },
    refs: [ { pages: [15, 34], heading: "Proof-of-Stake" } ],
    note: ""
  },
  {
    id: "legacy-10", sourceNumber: 10, topicId: "ch1-types",
    originalStem: "Blockchain ประเภทใดที่อนุญาตให้ทุกคนสามารถเข้าใช้งานได้อย่างอิสระโดยไม่ต้องขออนุญาต",
    originalOptions: [
      { id: "legacy-10-a", text: "Private Blockchain" },
      { id: "legacy-10-b", text: "Public Blockchain" },
      { id: "legacy-10-c", text: "Hybrid Blockchain" },
      { id: "legacy-10-d", text: "Consortium Blockchain" }
    ],
    markedOptionId: "legacy-10-b", status: "verified",
    explanation: "Public Blockchain (Permissionless) เป็นวงเปิดที่ทุกคนเข้าใช้งานได้ทั้งอ่านและทำธุรกรรมอย่างอิสระโดยไม่ต้องขออนุญาต",
    optionNotes: {
      "legacy-10-a": "Private ใช้ได้เฉพาะผู้ที่ได้รับอนุญาต",
      "legacy-10-b": "ตรงกับหน้า 15 และ 37",
      "legacy-10-c": "หนังสือแบ่ง 3 ประเภท (Public, Private, Consortium) ไม่ได้ใช้คำว่า Hybrid",
      "legacy-10-d": "Consortium เปิดให้ใช้เฉพาะกลุ่มและต้องได้รับอนุญาตจากตัวแทน"
    },
    refs: [ { pages: [15, 37], heading: "Public Blockchain" } ],
    note: ""
  },
  {
    id: "legacy-11", sourceNumber: 11, topicId: "ch1-types",
    originalStem: "Blockchain ประเภทใดที่เหมาะสมกับการใช้งานภายในองค์กร และจำกัดการเข้าถึงเฉพาะผู้ที่ได้รับอนุญาต",
    originalOptions: [
      { id: "legacy-11-a", text: "Open Blockchain" },
      { id: "legacy-11-b", text: "Public Blockchain" },
      { id: "legacy-11-c", text: "Private Blockchain" },
      { id: "legacy-11-d", text: "Permissionless Blockchain" }
    ],
    markedOptionId: "legacy-11-c", status: "verified",
    explanation: "Private Blockchain เป็นวงปิด เข้าใช้ได้เฉพาะผู้ได้รับอนุญาต ส่วนใหญ่สร้างเพื่อใช้ภายในองค์กร ข้อมูลธุรกรรมจำกัดอยู่ในเครือข่ายสมาชิก",
    optionNotes: {
      "legacy-11-a": "หนังสือไม่ได้ใช้คำนี้ และความหมาย “เปิด” ตรงข้ามกับโจทย์",
      "legacy-11-b": "Public เปิดให้ทุกคนใช้งาน",
      "legacy-11-c": "ตรงกับหน้า 15 และ 39",
      "legacy-11-d": "Permissionless คือชื่อเรียกอีกชื่อของ Public Blockchain"
    },
    refs: [ { pages: [15, 39], heading: "Private Blockchain" } ],
    note: ""
  },
  {
    id: "legacy-12", sourceNumber: 12, topicId: "ch1-types",
    originalStem: "Hyperledger และ Corda เป็นตัวอย่างของ Blockchain ประเภทใด",
    originalOptions: [
      { id: "legacy-12-a", text: "Permissionless Blockchain" },
      { id: "legacy-12-b", text: "Private Blockchain" },
      { id: "legacy-12-c", text: "Public Blockchain" },
      { id: "legacy-12-d", text: "Cryptocurrency Blockchain" }
    ],
    markedOptionId: "legacy-12-b", status: "verified",
    explanation: "หน้า 15 และ 40 ยกตัวอย่าง Blockchain แบบปิด (Private) ได้แก่ Hyperledger, Corda และ Tendermint",
    optionNotes: {
      "legacy-12-a": "Permissionless คือ Public ตัวอย่างในหนังสือคือ Bitcoin, Ethereum",
      "legacy-12-b": "ตรงกับหน้า 15 และ 40",
      "legacy-12-c": "Public ตัวอย่างคือ Bitcoin, Ethereum",
      "legacy-12-d": "ไม่ใช่ประเภทตามการแบ่งของหนังสือ"
    },
    refs: [ { pages: [15, 40], heading: "Private Blockchain" } ],
    note: "ตารางที่ 1 หน้า 42 วาง Corda ไว้ในกลุ่มตัวอย่างฝั่ง Permissioned ซึ่งสอดคล้องกับการเป็นเครือข่ายที่ต้องได้รับอนุญาต"
  },
  {
    id: "legacy-13", sourceNumber: 13, topicId: "ch1-properties",
    originalStem: "ข้อใดคือคุณลักษณะพื้นฐานที่สำคัญของเทคโนโลยี Blockchain 3 ประการ",
    originalOptions: [
      { id: "legacy-13-a", text: "Speed, Cost, Scalability" },
      { id: "legacy-13-b", text: "Read, Write, Execute" },
      { id: "legacy-13-c", text: "Data Integrity, Data Transparency, Availability" },
      { id: "legacy-13-d", text: "Centralization, Anonymity, Security" }
    ],
    markedOptionId: "legacy-13-c", status: "verified",
    explanation: "หน้า 45 ระบุคุณสมบัติสำคัญ 3 ประการ: ความถูกต้องเที่ยงตรงของข้อมูล (Data Integrity) ความโปร่งใสในการเข้าถึงข้อมูล (Data Transparency) และความสามารถในการทำงานต่อเนื่อง (Availability)",
    optionNotes: {
      "legacy-13-a": "ไม่ใช่รายการในหน้า 45 และ Scalability ยังเป็นข้อเสียของ Public Blockchain ในตารางที่ 1",
      "legacy-13-b": "เป็นสิทธิ์การใช้งานไฟล์/ระบบ ไม่ใช่คุณลักษณะ 3 ประการ",
      "legacy-13-c": "ตรงกับหน้า 45–46",
      "legacy-13-d": "Blockchain ไม่มีศูนย์กลาง (ไม่ใช่ Centralization)"
    },
    refs: [ { pages: [45, 46], heading: "คุณลักษณะพื้นฐานที่สำคัญของเทคโนโลยี Blockchain" } ],
    note: ""
  },
  {
    id: "legacy-14", sourceNumber: 14, topicId: "ch1-properties",
    originalStem: "คุณสมบัติของ Blockchain ที่ข้อมูลซึ่งถูกบันทึกไปแล้วไม่สามารถแก้ไขหรือเปลี่ยนแปลงได้ เรียกว่าอะไร",
    originalOptions: [
      { id: "legacy-14-a", text: "Transparency" },
      { id: "legacy-14-b", text: "Immutability" },
      { id: "legacy-14-c", text: "Scalability" },
      { id: "legacy-14-d", text: "Availability" }
    ],
    markedOptionId: "legacy-14-b", status: "verified",
    explanation: "หน้า 45 อธิบายภายใต้ Data Integrity ว่าข้อมูลที่ถูกบันทึกแล้วไม่สามารถแก้ไขหรือเปลี่ยนแปลงได้ (Immutability)",
    optionNotes: {
      "legacy-14-a": "Transparency คือการเข้าถึงข้อมูลได้จาก Node ตัวเองโดยไม่ต้องร้องขอจากตัวกลาง",
      "legacy-14-b": "ตรงกับหน้า 45",
      "legacy-14-c": "Scalability คือการรองรับการขยายขนาด ไม่เกี่ยวกับการแก้ไขข้อมูล",
      "legacy-14-d": "Availability คือการทำงานต่อเนื่องเมื่อบาง Node ใช้งานไม่ได้"
    },
    refs: [ { pages: [45], heading: "ความถูกต้องเที่ยงตรงของข้อมูล (Data Integrity)" } ],
    note: "Immutability ป้องกันการแก้บันทึกย้อนหลัง แต่ไม่ได้รับรองว่าข้อมูลที่ใส่ครั้งแรกเป็นความจริงเสมอ"
  },
  {
    id: "legacy-15", sourceNumber: 15, topicId: "ch1-criteria",
    originalStem: "จากเกณฑ์การพิจารณาเลือกใช้เทคโนโลยี Blockchain หากข้อมูลของคุณถูกสร้างขึ้นโดยองค์กรเดียวเท่านั้น ควรใช้ Blockchain หรือไม่",
    originalOptions: [
      { id: "legacy-15-a", text: "ควรใช้ เพราะปลอดภัยกว่า" },
      { id: "legacy-15-b", text: "ไม่จำเป็นต้องใช้ เพราะ Blockchain ถูกสร้างมาเพื่อแก้ปัญหาความไม่ไว้วางใจระหว่างกัน" },
      { id: "legacy-15-c", text: "ไม่ควรใช้ เพราะทำงานช้า" },
      { id: "legacy-15-d", text: "ควรใช้ เพราะมีความโปร่งใส" }
    ],
    markedOptionId: "legacy-15-b", status: "verified",
    explanation: "คำถามข้อ 2 ในภาพที่ 11: ถ้าข้อมูลถูกสร้างโดยคน/องค์กรใดองค์กรหนึ่งเท่านั้น ไม่จำเป็นต้องใช้ Blockchain เพราะถูกสร้างมาเพื่อแก้ปัญหาความไม่ไว้วางใจระหว่างกัน (Trustless)",
    optionNotes: {
      "legacy-15-a": "เกณฑ์ไม่ได้ใช้ “ปลอดภัยกว่า” เป็นเหตุผลให้ใช้เมื่อมีผู้สร้างข้อมูลรายเดียว",
      "legacy-15-b": "ตรงกับภาพที่ 11 หน้า 47",
      "legacy-15-c": "เหตุผลในภาพไม่ใช่เรื่องความเร็ว",
      "legacy-15-d": "ความโปร่งใสไม่ใช่เกณฑ์ที่ใช้ตัดสินในกรณีนี้"
    },
    refs: [ { pages: [47], heading: "เกณฑ์การพิจารณาเลือกใช้เทคโนโลยี Blockchain (รูปภาพที่ 11)" } ],
    note: ""
  },
  {
    id: "legacy-16", sourceNumber: 16, topicId: "ch1-apps",
    originalStem: "รูปแบบการประยุกต์ใช้ Blockchain ที่เป็นการพัฒนาสกุลเงินดิจิทัล เช่น Bitcoin คือรูปแบบใด",
    originalOptions: [
      { id: "legacy-16-a", text: "Decentralized Autonomous Organization (DAO)" },
      { id: "legacy-16-b", text: "Cryptocurrency" },
      { id: "legacy-16-c", text: "Smart Contract" },
      { id: "legacy-16-d", text: "Proof of Services" }
    ],
    markedOptionId: "legacy-16-b", status: "verified",
    explanation: "เงินดิจิทัล (Cryptocurrency) คือสกุลเงินดิจิทัลที่ใช้เป็นสื่อกลางแลกเปลี่ยน ตัวอย่าง Bitcoin และ Ripple",
    optionNotes: {
      "legacy-16-a": "DAO เป็นระบบ/บริการอัตโนมัติ ขั้นสูงสุดของการพัฒนา Application",
      "legacy-16-b": "ตรงกับหน้า 16 และ 51",
      "legacy-16-c": "Smart Contract คือโปรแกรมทำตามข้อตกลงอัตโนมัติ",
      "legacy-16-d": "Proof of Services เกี่ยวกับ Identity, Ownership, Membership"
    },
    refs: [ { pages: [16, 51], heading: "เงินดิจิทัล (Cryptocurrency)" } ],
    note: ""
  },
  {
    id: "legacy-17", sourceNumber: 17, topicId: "ch1-apps",
    originalStem: "การประยุกต์ใช้ Blockchain เพื่อเก็บข้อมูลเอกลักษณ์ (Identity) หรือกรรมสิทธิ์ (Ownership) จัดอยู่ในกลุ่มใด",
    originalOptions: [
      { id: "legacy-17-a", text: "Proof of Services" },
      { id: "legacy-17-b", text: "Decentralized Autonomous Systems" },
      { id: "legacy-17-c", text: "Cryptocurrency" },
      { id: "legacy-17-d", text: "Smart Contract" }
    ],
    markedOptionId: "legacy-17-a", status: "verified",
    explanation: "บริการพิสูจน์ทราบ (Proof of Services) คือการบรรจุข้อมูลอัตโนมัติ เช่น เอกลักษณ์ (Identity) กรรมสิทธิ์ (Ownership) และสมาชิกภาพ (Membership) มักใช้โดยหน่วยงานภาครัฐ",
    optionNotes: {
      "legacy-17-a": "ตรงกับหน้า 51",
      "legacy-17-b": "เป็นขั้นการทำให้คอมพิวเตอร์บริหารกิจการเองแบบอัตโนมัติ",
      "legacy-17-c": "เน้นการโอนและการจ่ายเงิน",
      "legacy-17-d": "เน้นการทำตามเงื่อนไขสัญญาอัตโนมัติ"
    },
    refs: [ { pages: [51], heading: "บริการพิสูจน์ทราบ (Proof of Services)" } ],
    note: ""
  },
  {
    id: "legacy-18", sourceNumber: 18, topicId: "ch1-smart-contract",
    originalStem: "Smart Contract คืออะไร",
    originalOptions: [
      { id: "legacy-18-a", text: "ข้อตกลงทางกฎหมายที่ร่างโดยทนายความและเก็บไว้บน Blockchain" },
      { id: "legacy-18-b", text: "โปรแกรมคอมพิวเตอร์ที่สามารถดำเนินการตามข้อตกลงโดยอัตโนมัติเมื่อเงื่อนไขครบถ้วน" },
      { id: "legacy-18-c", text: "ซอฟต์แวร์สำหรับซื้อขายสกุลเงินดิจิทัล" },
      { id: "legacy-18-d", text: "สัญญาในรูปแบบกระดาษที่ถูกสแกนเก็บในระบบดิจิทัล" }
    ],
    markedOptionId: "legacy-18-b", status: "verified",
    explanation: "หน้า 53 นิยามสัญญาอัจฉริยะว่าเป็นโปรแกรมคอมพิวเตอร์ที่ดำเนินการตามข้อตกลงโดยอัตโนมัติทันทีที่เกิดเหตุการณ์ตามเงื่อนไขที่ระบุไว้ล่วงหน้า โดยไม่ต้องมีคนกลาง",
    optionNotes: {
      "legacy-18-a": "หนังสือไม่ได้นิยามว่าเป็นเอกสารกฎหมายที่ทนายร่าง และยังระบุว่าขาดการรับรองด้านกฎหมาย (หน้า 57)",
      "legacy-18-b": "ตรงกับหน้า 53",
      "legacy-18-c": "ไม่ใช่นิยาม แม้ Smart Contract อาจใช้กับสินทรัพย์ดิจิทัล",
      "legacy-18-d": "Smart Contract อยู่ในรูป Code คอมพิวเตอร์ (หน้า 17) ไม่ใช่เอกสารสแกน"
    },
    refs: [ { pages: [17, 53], heading: "สัญญาอัจฉริยะ (Smart Contract)" } ],
    note: ""
  },
  {
    id: "legacy-19", sourceNumber: 19, topicId: "ch1-smart-contract",
    originalStem: "ข้อใดไม่ใช่จุดเด่นของ Smart Contract",
    originalOptions: [
      { id: "legacy-19-a", text: "ความปลอดภัย (Security)" },
      { id: "legacy-19-b", text: "ความง่ายต่อการเปลี่ยนแปลง (Easy to change)" },
      { id: "legacy-19-c", text: "ความเป็นอัตโนมัติ (Automation)" },
      { id: "legacy-19-d", text: "ความเป็นมาตรฐาน (Standardization)" }
    ],
    markedOptionId: "legacy-19-b", status: "verified",
    explanation: "จุดเด่น 3 ประการคือ Security, Automation และ Standardization ส่วน “ความยากต่อการเปลี่ยนแปลง (Immutable)” เป็นข้อจำกัด จึงตรงข้ามกับ “ง่ายต่อการเปลี่ยนแปลง”",
    optionNotes: {
      "legacy-19-a": "เป็นจุดเด่น (หน้า 54)",
      "legacy-19-b": "ไม่ใช่จุดเด่น และหน้า 57 ระบุว่ายากต่อการเปลี่ยนแปลงเป็นข้อจำกัด",
      "legacy-19-c": "เป็นจุดเด่น (หน้า 54)",
      "legacy-19-d": "เป็นจุดเด่น (หน้า 54)"
    },
    refs: [ { pages: [54, 57], heading: "จุดเด่นและข้อจำกัดของ Smart Contract" } ],
    note: ""
  },
  {
    id: "legacy-20", sourceNumber: 20, topicId: "ch1-oracle-dao",
    originalStem: "การพัฒนาขั้นสูงสุดของ Application บน Blockchain ที่ทำให้คอมพิวเตอร์คุยกันเองเพื่อบริหารจัดการได้โดยไม่ต้องอาศัยมนุษย์ คือแนวคิดของอะไร",
    originalOptions: [
      { id: "legacy-20-a", text: "Supervised Autonomous Services" },
      { id: "legacy-20-b", text: "Advanced Smart Contract" },
      { id: "legacy-20-c", text: "Decentralized Autonomous Organization (DAO)" },
      { id: "legacy-20-d", text: "Centralized Digital Organization (CDO)" }
    ],
    markedOptionId: "legacy-20-c", status: "verified",
    explanation: "หน้า 58 ระบุว่าระบบ/บริการอัตโนมัติถูกมองเป็นพัฒนาการขั้นสูงสุด คือทำให้คอมพิวเตอร์คุยกันเองเพื่อบริหารกิจการได้อัตโนมัติ เรียกว่าองค์กรอัตโนมัติกระจายศูนย์ (DAO)",
    optionNotes: {
      "legacy-20-a": "ไม่ใช่คำในหนังสือ และ “Supervised” ขัดกับการไม่ต้องอาศัยมนุษย์",
      "legacy-20-b": "DAO ใช้ Smart Contract เป็นเครื่องมือ แต่หนังสือไม่ได้เรียกขั้นนี้ว่า Advanced Smart Contract",
      "legacy-20-c": "ตรงกับหน้า 58",
      "legacy-20-d": "Centralized ขัดกับหลักการกระจายศูนย์"
    },
    refs: [ { pages: [58, 59], heading: "ระบบ/บริการอัตโนมัติ (Decentralized Autonomous Systems/Services)" } ],
    note: ""
  },
  {
    id: "legacy-21", sourceNumber: 21, topicId: "ch1-node-ledger",
    originalStem: "ข้อใดคือคำจำกัดความของ \"Node\" ในเครือข่าย Blockchain",
    originalOptions: [
      { id: "legacy-21-a", text: "ชุดของข้อมูลที่ถูกบันทึก" },
      { id: "legacy-21-b", text: "อุปกรณ์ในเครือข่ายที่สามารถเชื่อมต่ออินเทอร์เน็ตและประมวลผลได้" },
      { id: "legacy-21-c", text: "ค่าที่ใช้ในการค้นหา Hash" },
      { id: "legacy-21-d", text: "ขั้นตอนการเห็นชอบร่วมกัน" }
    ],
    markedOptionId: "legacy-21-b", status: "verified",
    explanation: "Node คืออุปกรณ์ในเครือข่าย Blockchain เช่น คอมพิวเตอร์ โทรศัพท์ ที่เชื่อมต่ออินเทอร์เน็ตและประมวลผลได้ เป็นโครงสร้างพื้นฐานสำคัญในการกระจายและเชื่อมโยงเครือข่าย",
    optionNotes: {
      "legacy-21-a": "ชุดบรรจุข้อมูลคือ Block",
      "legacy-21-b": "ตรงกับหน้า 17 และ 22",
      "legacy-21-c": "ค่าที่ใช้ค้นหา Hash คือ Nonce",
      "legacy-21-d": "ความเห็นชอบร่วมกันคือ Consensus"
    },
    refs: [ { pages: [17, 22], heading: "Node" } ],
    note: ""
  },
  {
    id: "legacy-22", sourceNumber: 22, topicId: "ch1-hash",
    originalStem: "\"Hash Function\" มีคุณสมบัติที่สำคัญคืออะไร",
    originalOptions: [
      { id: "legacy-22-a", text: "เป็นฟังก์ชันที่เปลี่ยนข้อมูลให้มีความยาวไม่คงที่" },
      { id: "legacy-22-b", text: "เป็นฟังก์ชันที่สามารถดำเนินการย้อนกลับได้" },
      { id: "legacy-22-c", text: "เป็นฟังก์ชันทางเดียวที่ไม่สามารถดำเนินการย้อนกลับเพื่อให้ได้ข้อมูลเดิม" },
      { id: "legacy-22-d", text: "เป็นฟังก์ชันที่ต้องใช้ Private Key ในการถอดรหัส" }
    ],
    markedOptionId: "legacy-22-c", status: "verified",
    explanation: "Hash Function เป็นฟังก์ชันทางเดียว แปลงข้อมูลเป็นค่าที่มีลักษณะเฉพาะและความยาวคงที่เสมอ และไม่สามารถย้อนกลับเพื่อให้ได้ข้อมูลเดิม",
    optionNotes: {
      "legacy-22-a": "ผิด เพราะผลลัพธ์มีขนาดความยาวคงที่เสมอ",
      "legacy-22-b": "ผิด เพราะเป็นฟังก์ชันทางเดียว",
      "legacy-22-c": "ตรงกับหน้า 14 และเชิงอรรถหน้า 28",
      "legacy-22-d": "Hash ไม่ใช่การเข้ารหัสที่ถอดด้วยกุญแจ จึงไม่มีการถอดรหัสกลับ"
    },
    refs: [ { pages: [14, 28], heading: "Hash Value / Hash Function" } ],
    note: ""
  },
  {
    id: "legacy-23", sourceNumber: 23, topicId: "ch1-types",
    originalStem: "Bitcoin และ Ethereum เป็นตัวอย่างของ Blockchain ประเภทใด",
    originalOptions: [
      { id: "legacy-23-a", text: "Private Blockchain" },
      { id: "legacy-23-b", text: "Consortium Blockchain" },
      { id: "legacy-23-c", text: "Public Blockchain" },
      { id: "legacy-23-d", text: "ทั้ง Private และ Public" }
    ],
    markedOptionId: "legacy-23-c", status: "verified",
    explanation: "หน้า 15 และ 38 ยกตัวอย่าง Blockchain แบบเปิดสาธารณะ (Public) ว่า Bitcoin และ Ethereum",
    optionNotes: {
      "legacy-23-a": "ตัวอย่าง Private ในหนังสือคือ Hyperledger, Corda, Tendermint",
      "legacy-23-b": "ตัวอย่าง Consortium คือ Japanese Bank และ R3CEV",
      "legacy-23-c": "ตรงกับหน้า 15 และ 38",
      "legacy-23-d": "หนังสือจัดทั้งสองเป็นตัวอย่าง Public"
    },
    refs: [ { pages: [15, 38], heading: "Public Blockchain" } ],
    note: ""
  },
  {
    id: "legacy-24", sourceNumber: 24, topicId: "ch1-hash",
    originalStem: "หากมีการแก้ไขข้อมูลใน Block ใด Block หนึ่ง จะเกิดอะไรขึ้นกับค่า Hash",
    originalOptions: [
      { id: "legacy-24-a", text: "ค่า Hash จะยังคงเหมือนเดิม" },
      { id: "legacy-24-b", text: "ระบบจะทำการแก้ไขค่า Hash ให้อัตโนมัติ" },
      { id: "legacy-24-c", text: "ค่า Hash ของ Block นั้นและ Block ถัดๆ ไปจะเปลี่ยนแปลงไปทั้งหมด" },
      { id: "legacy-24-d", text: "จะต้องทำการ Defragment ข้อมูลใหม่" }
    ],
    markedOptionId: "legacy-24-c", status: "ambiguous",
    explanation: "ในบรรดา 4 ตัวเลือก ข้อที่ทำเครื่องหมายไว้ใกล้หลักการที่สุด แต่ถ้อยคำต้องตีความให้ถูก: เมื่อแก้ข้อมูลใน Block หนึ่ง Hash ที่คำนวณใหม่ของ Block นั้นจะไม่เท่าเดิม และ Previous Hash ที่ Block ถัดไปเก็บไว้จะไม่ตรงกับค่าใหม่ หากผู้แก้ต้องการให้เชนดูสอดคล้องกันจะต้องคำนวณ (ทำ Proof-of-Work) Block ถัด ๆ ไปใหม่ทั้งหมดพร้อมกัน ซึ่งยากมาก และ Node อื่นที่ถือสำเนาเดิมจะไม่ยอมรับ (หน้า 14, 28, 32, 45)",
    optionNotes: {
      "legacy-24-a": "ผิด เพราะ Hash มีลักษณะเฉพาะของข้อมูล ข้อมูลเปลี่ยนแล้วคำนวณใหม่จะไม่เท่าเดิม (หน้า 28)",
      "legacy-24-b": "ผิด ระบบไม่ได้ “แก้ Hash ให้อัตโนมัติ” — ความไม่ตรงกันของ Hash คือสัญญาณให้ตรวจพบการแก้ไข",
      "legacy-24-c": "ใกล้หลักการที่สุด แต่ต้องเข้าใจว่า Hash ของ Block ถัดไป “ไม่ได้เปลี่ยนเอง” — ลิงก์จะขาด และต้องมีผู้คำนวณใหม่ต่อเนื่องหากต้องการสร้างเชนที่สอดคล้อง",
      "legacy-24-d": "Defragment เป็นเรื่องการจัดเรียงดิสก์ ไม่เกี่ยวกับ Blockchain"
    },
    refs: [ { pages: [14, 28, 32, 45], heading: "Proof-of-Work / Previous Hash / Data Integrity" } ],
    note: "ถ้อยคำเดิมอาจทำให้เข้าใจผิดว่า Hash ของทุก Block ถัดไปเปลี่ยนเองอัตโนมัติ หรือเครือข่ายยอมรับข้อมูลที่ถูกแก้ จึงไม่นำข้อนี้ไปคิดคะแนนความเข้าใจ และไม่รวมในข้อสอบจำลอง",
    correctedVariant: {
      label: "ฉบับปรับถ้อยคำ (ไม่ใช่ข้อเดิม — จัดทำเพื่ออธิบาย)",
      stem: "ถ้ามีผู้แก้ข้อมูลใน Block หนึ่งที่บันทึกไปแล้ว ข้อใดอธิบายผลต่อค่า Hash และ Chain ได้ถูกต้องที่สุด",
      options: [
        "Hash ที่คำนวณใหม่ของ Block นั้นไม่เท่าเดิม ทำให้ไม่ตรงกับ Previous Hash ที่ Block ถัดไปเก็บไว้ ถ้าจะให้เชนสอดคล้องต้องคำนวณ Block ถัดไปทั้งหมดใหม่",
        "ระบบจะปรับ Previous Hash ของ Block ถัดไปทุก Block ให้อัตโนมัติ แล้ว Node อื่นยอมรับทันที",
        "Hash ของ Block นั้นยังเท่าเดิม เพราะ Hash คิดจาก Nonce เท่านั้น",
        "ข้อมูลที่แก้จะถูกส่งไปทุก Node และแทนที่สำเนาเดิมโดยไม่ต้องตรวจสอบ"
      ],
      answerIndex: 0
    }
  },
  {
    id: "legacy-25", sourceNumber: 25, topicId: "ch1-merkle",
    originalStem: "\"Merkle Root\" คืออะไร",
    originalOptions: [
      { id: "legacy-25-a", text: "ค่า Hash ของ Transactions ทั้งหมดใน Block ซึ่งอยู่ในรูปแบบของ Hash Tree" },
      { id: "legacy-25-b", text: "กุญแจที่ใช้ในการเข้าถึง Block" },
      { id: "legacy-25-c", text: "ค่า Hash ของ Block แรกสุดใน Chain" },
      { id: "legacy-25-d", text: "ชื่อเรียกอีกอย่างหนึ่งของ Genesis Block" }
    ],
    markedOptionId: "legacy-25-a", status: "verified",
    explanation: "Merkle Root คือค่า Hash ของ Transactions ทั้งหมดใน Block โดยใช้รูปแบบ Hash Tree เป็นค่า Hash ที่อยู่บนสุดของ Tree (ในตัวอย่าง Bitcoin มีขนาด 32 ไบต์)",
    optionNotes: {
      "legacy-25-a": "ตรงกับหน้า 16, 28 และ 31–32",
      "legacy-25-b": "Merkle Root ไม่ใช่กุญแจ",
      "legacy-25-c": "Block แรกสุดคือ Genesis Block ไม่เกี่ยวกับ Merkle Root",
      "legacy-25-d": "Genesis Block คือ Block เริ่มต้น (หน้า 25)"
    },
    refs: [ { pages: [16, 28, 31, 32], heading: "Merkle Root (รูปภาพที่ 8)" } ],
    note: ""
  }
];
