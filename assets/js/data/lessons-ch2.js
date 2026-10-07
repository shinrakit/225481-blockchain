/* lessons-ch2.js — บทเรียนบทที่ 2 (เรียบเรียงใหม่จากหนังสือ) */
BC.addTopics(2, [
{
  id: "ch2-overview",
  title: "ภาพรวมการใช้ Blockchain ในงานภาครัฐต่างประเทศ",
  pages: [61, 63],
  refs: [ { pages: [61], heading: "การประยุกต์ใช้เทคโนโลยี Blockchain เพื่องานบริการภาครัฐ กรณีศึกษาต่างประเทศ" }, { pages: [62], heading: "รูปภาพที่ 14: การประยุกต์ใช้เทคโนโลยี Blockchain สำหรับงานบริการภาครัฐของประเทศต่าง ๆ", figureOrTable: "รูปภาพที่ 14" }, { pages: [63], heading: "รูปภาพที่ 15: ผลการสำรวจความคาดหวังในการนำเทคโนโลยี Blockchain มาใช้ในภาครัฐ", figureOrTable: "รูปภาพที่ 15" } ],
  objectives: [
    "สรุปขอบเขตการใช้งานในต่างประเทศตามที่หนังสืออ้าง",
    "อ่านผลสำรวจ CIO และหมวดการใช้งาน 10 หมวดในรูปภาพที่ 14"
  ],
  body: `
<p>ตามหนังสือ การนำ Blockchain มาใช้ในงานบริการภาครัฐมีแนวโน้มสูงขึ้นมาก พบ<b>มากกว่า 30 ประเทศ</b> เช่น เอสโตเนีย แคนาดา อังกฤษ บราซิล จีน และอินเดีย ที่เริ่มศึกษา ทดลอง พัฒนา จนนำไปใช้อย่างเป็นรูปธรรม (รายละเอียดรายประเทศอยู่ใน<a href="#topic/ch2-appendix">เอกสารแนบท้ายที่ 1</a>)</p>
<h3>หมวดการใช้งานในรูปภาพที่ 14 (ปรับปรุงจาก Deloitte, 2018)</h3>
<div class="chips">
<span class="chip">1 Digital Currency/Payment</span><span class="chip">2 Land Registration</span><span class="chip">3 Voting (Elections)</span><span class="chip">4 Identity Management</span><span class="chip">5 Supply Chain Traceability</span><span class="chip">6 Health Care</span><span class="chip">7 Voting (Proxy)</span><span class="chip">8 Corporate Registration</span><span class="chip">9 Taxation</span><span class="chip">10 Entitlements Management</span>
</div>
<p class="muted">ภาพเป็นแผนที่โลกที่ปักหมุดหมายเลขหมวดไว้ที่ประเทศต่าง ๆ หมุดบางจุดเล็กและซ้อนกัน เว็บนี้จึงสรุปเฉพาะรายชื่อหมวด ส่วนการจับคู่ประเทศกับการใช้งานให้ดู<a href="#topic/ch2-groups">ตารางที่ 2</a> และเอกสารแนบท้าย</p>
<h3>ผลสำรวจความเห็น CIO (รูปภาพที่ 15 ปรับปรุงจาก Holgate, 2018)</h3>
<div class="stat-row">
<div class="stat"><span class="stat-num">22%</span><span>ของหน่วยงานภาครัฐวางแผนทั้งระยะสั้นและระยะยาวในการนำ Blockchain มาใช้</span></div>
<div class="stat"><span class="stat-num">42%</span><span>สนใจและอยู่ระหว่างศึกษาความเป็นไปได้</span></div>
</div>
<div class="table-wrap"><table>
<thead><tr><th>กลุ่มคำตอบในแผนภูมิ (สะกดตามภาพ)</th><th>สัดส่วน</th></tr></thead>
<tbody>
<tr><td>On the Radar but No Action Plan</td><td>42%</td></tr>
<tr><td>In Short-Term Planning/Actively Experimenting</td><td>9%</td></tr>
<tr><td>In Medium or Long-Term Planning</td><td>13%</td></tr>
<tr><td>No Interest</td><td>35%</td></tr>
<tr><td>Have Already interested and Deployed</td><td>1%</td></tr>
</tbody></table></div>
<p class="muted">22% ในข้อความ = 9% + 13% (วางแผนระยะสั้น/ทดลอง + ระยะกลาง/ยาว) ส่วน 42% ในแผนภูมิคือกลุ่ม “On the Radar but No Action Plan” ซึ่งข้อความหนังสือเรียบเรียงว่า “สนใจและอยู่ระหว่างศึกษาความเป็นไปได้”</p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> ตัวเลขและสถานะทั้งหมดเป็นข้อมูลตามแหล่งที่หนังสืออ้าง (ปี 2018) ไม่ใช่สถานการณ์ล่าสุด</aside>`,
  confusions: [
    "22% = วางแผนแล้ว; 42% = สนใจ/ศึกษาความเป็นไปได้",
    "รูปภาพที่ 14 มาจาก Deloitte (2018); รูปภาพที่ 15 มาจาก Holgate (2018)"
  ],
  recall: [
    { q: "หนังสือระบุว่ามีกี่ประเทศที่เริ่มนำ Blockchain มาใช้ในงานภาครัฐ", a: "มากกว่า 30 ประเทศ (หน้า 61)" }
  ],
  summary: [ ">30 ประเทศ; 10 หมวดในภาพที่ 14", "CIO: 22% วางแผน, 42% ศึกษาความเป็นไปได้" ]
},
{
  id: "ch2-objectives",
  title: "วัตถุประสงค์ 4 ด้าน: Social Welfare, e-Government, Transparency, National Security",
  pages: [64, 69],
  refs: [ { pages: [64, 69], heading: "วัตถุประสงค์ของการนำเทคโนโลยี Blockchain มาใช้สำหรับงานบริการภาครัฐ" } ],
  objectives: [
    "อธิบายวัตถุประสงค์ทั้ง 4 ด้าน: ปัญหาเดิม → บทบาทของ Blockchain → ตัวอย่างประเทศ",
    "จับคู่สถานการณ์กับวัตถุประสงค์ได้"
  ],
  body: `
<div class="table-wrap wide"><table>
<thead><tr><th>วัตถุประสงค์</th><th>ปัญหา/ความต้องการเดิม</th><th>บทบาทของ Blockchain</th><th>ตัวอย่างในหนังสือ</th></tr></thead>
<tbody>
<tr><td><b>1. การให้ความช่วยเหลือและการบริการประชาชน (Social Welfare)</b></td><td>การเข้าถึงสวัสดิการต้องลงทะเบียน ใช้สำเนาเอกสารพิสูจน์ตัวตน จ่ายผ่านหลายทอด</td><td>ปรับปรุงระบบลงทะเบียน (Registration System) แจกจ่ายสวัสดิการได้มีประสิทธิภาพ; ทำงานร่วมกับระบบพิสูจน์ตัวตน (Identity Management) ลดขั้นตอนและสำเนา</td><td><b>อังกฤษ</b>: จ่ายเงินสวัสดิการภาครัฐ ประชาชนรับเงินโดยตรงผ่าน <b>Digital Wallet</b> ลดค่าธรรมเนียมธนาคาร ลดโอกาสทุจริตของหน่วยงานท้องถิ่น ตรวจสอบการใช้จ่ายได้</td></tr>
<tr><td><b>2. การเพิ่มประสิทธิภาพในการบริหารงานภาครัฐ (e-Government)</b></td><td>ต้นทุน ความยุ่งยากซับซ้อน การเข้าถึงบริการ</td><td>ลดต้นทุน อำนวยความสะดวก กระบวนการแบ่งปันข้อมูลที่น่าเชื่อถือ ตรวจสอบความน่าเชื่อถือของข้อมูล ลดทุจริต</td><td><b>เอสโตเนีย</b>: e-Estonia (e-Residency, e-Court, Electronic Land Register, Electronic Health Care Record, i-Voting) ลงทุนตั้งแต่ ค.ศ. 2000 เริ่มจาก e-Tax Board และ e-Parking ปี 2001 เริ่มโครงการ <b>X-Road</b> เชื่อมข้อมูลระหว่างหน่วยงาน จนเป็นกระดูกสันหลังของบริการภาครัฐ</td></tr>
<tr><td><b>3. การสร้างความโปร่งใส (Transparency)</b></td><td>ประชาชนคาดหวังบริการรวดเร็ว โปร่งใส ตรวจสอบได้</td><td>สร้างความโปร่งใสให้การดำเนินงานภาครัฐ</td><td><b>ญี่ปุ่น</b>: ใช้ Blockchain แลกเปลี่ยนข้อมูลในกระบวนงาน<b>จัดซื้อจัดจ้างภาครัฐ</b> เพื่อความปลอดภัยในการแชร์ข้อมูลและตรวจสอบการใช้จ่าย</td></tr>
<tr><td><b>4. การรักษาความมั่นคง (National Security)</b></td><td>ภัยคุกคามไซเบอร์ต่อโครงสร้างพื้นฐานสำคัญ</td><td>คุณสมบัติที่ยากต่อการถูกโจมตีโดยแฮกเกอร์</td><td><b>อังกฤษ</b>: Blockchain-Based Cybersecurity Services for Critical British infrastructure เช่น ระบบป้องกันน้ำท่วม ระบบควบคุมพลังงานนิวเคลียร์ ระบบจ่ายไฟฟ้า</td></tr>
</tbody></table></div>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> รัฐต้องการโอนเงินช่วยเหลือถึงประชาชนโดยตรงและตรวจสอบได้ว่าเงินไม่รั่วไหลระหว่างทาง → ตรงกับวัตถุประสงค์ Social Welfare (แบบที่อังกฤษใช้ Digital Wallet)</aside>`,
  confusions: [
    "อังกฤษปรากฏ 2 ที่: Social Welfare (จ่ายสวัสดิการ) และ National Security (โครงสร้างพื้นฐานสำคัญ)",
    "X-Road ของเอสโตเนียเริ่ม 2001 เป็นทางเชื่อมข้อมูลภาครัฐ (ไม่ใช่ระบบเลือกตั้ง)",
    "ญี่ปุ่น = จัดซื้อจัดจ้าง (Transparency)"
  ],
  recall: [
    { q: "ประเทศใดใช้ Digital Wallet จ่ายสวัสดิการตามหนังสือ", a: "อังกฤษ (Social Welfare หน้า 64)" },
    { q: "X-Road คืออะไร", a: "ทางเชื่อมข้อมูลภาครัฐของเอสโตเนีย เริ่มปี 2001 เป็นกระดูกสันหลังของงานบริการภาครัฐ (หน้า 66)" }
  ],
  summary: [ "Social Welfare (อังกฤษ Digital Wallet) | e-Government (เอสโตเนีย e-Estonia/X-Road) | Transparency (ญี่ปุ่น จัดซื้อจัดจ้าง) | National Security (อังกฤษ โครงสร้างพื้นฐานสำคัญ)" ]
},
{
  id: "ch2-benefits",
  title: "ประโยชน์: ความโปร่งใส (Transparency) และการป้องกันการปลอมแปลง (Tamper-Proof)",
  pages: [70, 73],
  refs: [ { pages: [70, 73], heading: "ประโยชน์ของการนำเทคโนโลยี Blockchain มาใช้ในงานบริการภาครัฐ" } ],
  objectives: [
    "อธิบายประโยชน์ 2 ด้านและเงื่อนไขด้านความเป็นส่วนตัวที่มาคู่กัน",
    "อธิบายว่าทำไมแม้มีประโยชน์ยังต้องพิจารณาต้นทุน"
  ],
  body: `
<h3>1. ความโปร่งใส (Transparency)</h3>
<ul>
<li>เปิดโอกาสให้ประชาชน<b>มีสิทธิเป็นเจ้าของข้อมูลของตนเองอย่างแท้จริง</b> และเข้าถึงข้อมูลภาครัฐได้ง่ายขึ้น</li>
<li>สหรัฐอเมริกามีกฎหมาย <b>Freedom of Information Act (FOIA)</b> ให้หน่วยงานเปิดเผยข้อมูลเมื่อร้องขอ ยุโรปมีกฎหมายทำนองเดียวกัน แต่การบังคับใช้ยังช้า เพราะเจ้าหน้าที่ต้องพิจารณาว่าควรเปิดหรือไม่ และต้องจัดรูปแบบให้เหมาะ</li>
<li>Blockchain ช่วยให้เข้าถึงข้อมูลได้ สอดคล้อง FOIA <b>โดยมีข้อแม้ว่าต้องไม่ละเมิดความเป็นส่วนตัวหรือข้อมูลส่วนบุคคล</b> ต้องออกแบบให้ปกปิดตัวตน/ระบุตัวตนไม่ได้ (Anonymous)</li>
<li>ลดค่าใช้จ่ายการบันทึกข้อมูลซ้ำหลายครั้งของแต่ละหน่วยงาน บันทึกอัตโนมัติผ่านฟอร์มที่<b>ปกปิดข้อมูลอ่อนไหว</b></li>
<li>ปี ค.ศ. 2016 รัฐบาลอังกฤษจัดทำรายงานการใช้ Blockchain เก็บข้อมูลภาครัฐ เช่น เงินบำนาญ (State Pensions) ความช่วยเหลือจากต่างประเทศ (Foreign Aid) ค่าใช้จ่ายทั่วไปของรัฐ (General Government Expenditure) — เขียนลง Ledger ที่กระจายถึงทุกคน การหลอกลวง/ปลอมแปลงจึง<b>ถูกตรวจสอบโดยประชาชน</b>ได้ เกิดความรับผิดชอบ (Accountability)</li>
</ul>
<h3>2. การป้องกันการปลอมแปลง (Tamper-Proof)</h3>
<p>เอกสารที่บันทึกแล้วแก้ไขไม่ได้ สร้างความมั่นใจและความน่าเชื่อถือ แต่<b>นอกจากความโปร่งใสและความปลอดภัย ยังต้องคำนึงถึงต้นทุนและค่าใช้จ่ายในการบริหารจัดการควบคู่กันในการตัดสินใจ</b></p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> “โปร่งใส” ในบทนี้มาพร้อมเงื่อนไข “ไม่ละเมิดความเป็นส่วนตัว” เสมอ ไม่ได้หมายถึงเปิดข้อมูลส่วนบุคคลให้ทุกคนอ่าน</aside>`,
  confusions: [
    "FOIA = กฎหมายเสรีภาพด้านข้อมูลข่าวสารของสหรัฐฯ (ปัญหาคือบังคับใช้ช้า)",
    "รายงานปี 2016 ของอังกฤษ = เงินบำนาญ ความช่วยเหลือต่างประเทศ ค่าใช้จ่ายทั่วไปของรัฐ"
  ],
  recall: [
    { q: "ข้อแม้ของการใช้ Blockchain เปิดข้อมูลภาครัฐคืออะไร", a: "ต้องไม่ละเมิดความเป็นส่วนตัว/ข้อมูลส่วนบุคคล ออกแบบให้ระบุตัวตนไม่ได้ (หน้า 71)" }
  ],
  summary: [ "Transparency: ประชาชนเป็นเจ้าของข้อมูล เข้าถึงง่าย (FOIA) แต่ต้อง Anonymous", "Tamper-Proof: แก้ไม่ได้ น่าเชื่อถือ — แต่ต้องชั่งต้นทุนกับความปลอดภัย" ]
},
{
  id: "ch2-limits-privacy",
  title: "ข้อจำกัดด้านสิทธิ: Right to Privacy, Copyright, Censorship",
  pages: [74, 77],
  refs: [ { pages: [74, 77], heading: "ข้อจำกัดของการนำเทคโนโลยี Blockchain มาใช้ในงานบริการภาครัฐ" } ],
  objectives: [
    "อธิบายว่าทำไมความลบไม่ได้ของ Blockchain ขัดกับ GDPR / Right to be Forgotten",
    "อธิบายข้อจำกัดด้านลิขสิทธิ์และการเซ็นเซอร์"
  ],
  body: `
<h3>1. สิทธิส่วนบุคคล (The Right to Privacy)</h3>
<p>ข้อมูลที่บันทึกแล้ว<b>ลบหรือแก้ไม่ได้</b> จึงเป็นข้อจำกัดในการจัดเก็บข้อมูลภาครัฐ (Government Record Keeping) โดยเฉพาะเมื่อ EU ออก <b>General Data Protection Regulation (GDPR)</b> ให้ประชาชนมีสิทธิร้องขอให้ลบข้อมูลของตนออกจากระบบ (<b>Right to be Forgotten</b>)</p>
<div class="table-wrap"><table>
<thead><tr><th>ความลบไม่ได้เป็น…</th><th>เมื่อใช้กับ</th></tr></thead>
<tbody>
<tr><td>ข้อดี</td><td>ข้อมูลที่ต้องการความถูกต้องสูง ไม่ต้องการให้เปลี่ยน เช่น ข้อมูลการลงคะแนนเสียงเลือกตั้ง</td></tr>
<tr><td>ข้อเสีย/ประเด็นต้องพิจารณา</td><td>ข้อมูลส่วนบุคคล โดยเฉพาะในยุโรปที่มี GDPR</td></tr>
</tbody></table></div>
<h3>2. ลิขสิทธิ์ (Copyright)</h3>
<ul>
<li>มอง 2 มุม: เจ้าของลิขสิทธิ์ และผู้ละเมิด</li>
<li>ถ้าข้อมูลละเมิดลิขสิทธิ์ถูกเผยแพร่เข้า Blockchain จะ<b>ลบออกไม่ได้</b> และเจ้าของ<b>ตรวจหาผู้กระทำผิดได้ยาก</b>เพราะหลักการปกปิดตัวตน (Anonymous)</li>
<li>ISP ในยุโรปและสหรัฐฯ เคยเจอปัญหาผู้ใช้นำเข้าข้อมูลละเมิด จึงมีกฎหมาย 2 ฉบับคุ้มครอง ISP: <b>The Digital Millennium Copyright Act (DMCA)</b> และ <b>The Online Copyright Infringement Liability Limitation Act</b> — เมื่อได้รับแจ้ง ISP <b>ลบหรือระงับการเข้าถึง</b>สิ่งที่ละเมิดได้ ซึ่งทำไม่ได้กับข้อมูลบน Blockchain</li>
</ul>
<h3>3. การเซ็นเซอร์ข้อมูล (Censorship)</h3>
<p>หน่วยงานรัฐที่กำกับดูแล/ตรวจการกระทำผิดกฎหมาย <b>ตรวจสอบได้ยากขึ้น</b>ถ้าข้อมูลถูกเก็บด้วย Blockchain อาจกระทบหน่วยงานด้านความมั่นคง</p>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> ถ้าหน่วยงานบันทึกชื่อและที่อยู่ประชาชนลง Blockchain ตรง ๆ แล้วภายหลังเจ้าของข้อมูลขอให้ลบตามสิทธิ์ลักษณะ Right to be Forgotten หน่วยงานจะลบไม่ได้ — เทียบกับเกณฑ์ข้อ 4 หน้า 47 และแนวทาง Off Chain หน้า 143</aside>`,
  confusions: [
    "ความลบไม่ได้ = ข้อดีกับข้อมูลเลือกตั้ง แต่เป็นปัญหากับข้อมูลส่วนบุคคล",
    "DMCA เกี่ยวกับลิขสิทธิ์และ ISP ไม่ใช่กฎหมายข้อมูลส่วนบุคคล"
  ],
  recall: [
    { q: "Right to be Forgotten ขัดกับคุณสมบัติใดของ Blockchain", a: "ข้อมูลที่บันทึกแล้วลบหรือแก้ไขไม่ได้ (หน้า 74–75)" },
    { q: "ทำไมเจ้าของลิขสิทธิ์จึงตามตัวผู้ละเมิดบน Blockchain ได้ยาก", a: "เพราะหลักการปกปิดตัวตน (Anonymous) และข้อมูลลบออกไม่ได้ (หน้า 75–76)" }
  ],
  summary: [ "Privacy: ลบไม่ได้ vs GDPR/Right to be Forgotten", "Copyright: ลบเนื้อหาละเมิดไม่ได้ + Anonymous; DMCA และ OCILLA คุ้มครอง ISP", "Censorship: หน่วยงานกำกับ/ความมั่นคงตรวจยากขึ้น" ]
},
{
  id: "ch2-limits-cost",
  title: "ข้อจำกัดด้านต้นทุน พลังงาน และการย้ายข้อมูล",
  pages: [78, 79],
  refs: [ { pages: [78, 79], heading: "ข้อจำกัดของการนำเทคโนโลยี Blockchain มาใช้ (ต้นทุนและการบริหารจัดการ)" } ],
  objectives: [
    "อธิบายเหตุที่หน่วยงานต่างประเทศส่วนใหญ่เลือก Private มากกว่า Public",
    "เปรียบเทียบต้นทุน Public/Private/ระบบรวมศูนย์ และสรุปหลักการตัดสินใจของหนังสือ"
  ],
  body: `
<h3>เหตุและผลตามหนังสือ</h3>
<ol class="flow">
<li>เพราะข้อจำกัดด้านสิทธิ หน่วยงานรัฐต่างประเทศ<b>ส่วนใหญ่ใช้ Private Blockchain</b> เก็บข้อมูล (Record Keeping) มากกว่า Public</li>
<li>Public ต้องใช้ Node จำนวนมากเป็น Miner ช่วย Validate → ประเมินต้นทุนจริงโดยเฉพาะ <b>Hardware ได้ยาก</b></li>
<li>ค่า <b>Maintenance</b> ของ Public เช่น Bitcoin สูงเมื่อเทียบกับระบบรวมศูนย์ที่ลงทุนแค่เซิร์ฟเวอร์และเครื่องสำรอง</li>
<li>ต้อง<b>ให้ผลตอบแทน Miner</b> สำหรับการ Validation เพื่อให้ระบบดำเนินต่อได้</li>
<li>Public ใช้<b>พลังงานมหาศาล เทียบเท่าเมืองประชากร 1.5 แสน ถึง 10 ล้านคน</b> ขึ้นกับประสิทธิภาพอุปกรณ์จัดเก็บ กระบวนการ Consensus และการกระจาย Ledger</li>
<li>Private ที่<b>ควบคุมขนาดเครือข่าย</b>ไม่ให้ใหญ่เท่า Public ลดต้นทุนได้ แต่<b>ยังสูงกว่าระบบรวมศูนย์</b>อยู่ดี</li>
<li>การย้ายข้อมูลจากระบบเดิมต้องมีขนาดรองรับ<b>ประชากรทั้งหมด</b> อาจใช้เงินลงทุนมหาศาล แม้ใช้ Private ที่อาจน่าเชื่อถือน้อยกว่า</li>
</ol>
<h3>ข้อสรุปของหนังสือ</h3>
<div class="table-wrap"><table>
<thead><tr><th>มุมมอง</th><th>ทางเลือกที่สมเหตุสมผลกว่า</th></tr></thead>
<tbody>
<tr><td>การลงทุนและค่าบริหารจัดการ</td><td>ฐานข้อมูลรวมศูนย์ (Centralized Database)</td></tr>
<tr><td>ความปลอดภัย</td><td>Blockchain</td></tr>
<tr><td>ประเภทข้อมูลที่เหมาะกับ Blockchain</td><td>ข้อมูลที่<b>ไม่ต้องแก้ไขบ่อย</b> และต้องการ<b>ความปลอดภัยสูง</b></td></tr>
</tbody></table></div>
<p>ดังนั้นต้องคำนึง<b>ต้นทุน ค่าบริหารจัดการ และความปลอดภัยร่วมกัน</b>ในการตัดสินใจ</p>`,
  confusions: [
    "Private ถูกกว่า Public แต่ยังแพงกว่าระบบรวมศูนย์",
    "พลังงาน 1.5 แสน–10 ล้านคน เป็นขนาดเมืองที่ใช้เปรียบเทียบสำหรับ Public Blockchain"
  ],
  recall: [
    { q: "ข้อมูลแบบใดเหมาะเก็บบน Blockchain ตามหน้า 79", a: "ข้อมูลที่ไม่ต้องเปลี่ยนแปลงแก้ไขบ่อย และต้องการความปลอดภัยสูง" }
  ],
  summary: [ "หน่วยงานส่วนใหญ่ใช้ Private", "Public: Hardware ประเมินยาก, Maintenance สูง, ต้องจ่าย Miner, พลังงานเท่าเมือง 1.5 แสน–10 ล้านคน", "ลงทุน → รวมศูนย์คุ้มกว่า; ความปลอดภัย → Blockchain เหมาะกว่า; ตัดสินใจร่วมกัน" ]
},
{
  id: "ch2-groups",
  title: "กลุ่มการประยุกต์ใช้ 3 กลุ่ม และตารางที่ 2 (ประเทศ × การใช้งาน)",
  pages: [80, 82],
  refs: [ { pages: [80], heading: "รูปแบบการประยุกต์ใช้เทคโนโลยี Blockchain เพื่องานบริการภาครัฐ" }, { pages: [81], heading: "ตารางที่ 2: ตารางแสดงการประยุกต์ใช้เทคโนโลยี Blockchain สำหรับงานบริการภาครัฐในต่างประเทศ", figureOrTable: "ตารางที่ 2" }, { pages: [82], heading: "รูปภาพที่ 16: การจัดกลุ่มการนำเทคโนโลยี Blockchain มาใช้กับงานบริการภาครัฐ", figureOrTable: "รูปภาพที่ 16" } ],
  objectives: [
    "บอก 3 กลุ่มการประยุกต์ใช้ภาครัฐและงานย่อยในแต่ละกลุ่ม",
    "อ่านตารางที่ 2 เพื่อดูว่าประเทศใดมีการใช้งานกลุ่มใด"
  ],
  body: `
<p>รัฐบาลดิจิทัลต้องมั่นคงปลอดภัย โปร่งใส ตรวจสอบได้ — Blockchain ตอบได้ด้วย DLT และ Cryptography จากตารางที่ 2 จัดกลุ่มได้ <b>3 กลุ่ม</b> (รูปภาพที่ 16)</p>
<div class="three-col">
<div class="card-mini"><b>การพิสูจน์ตัวตน</b><br>Identity Management<br><span class="muted">Individual Identity (e-Identity, Citizen Identification, eID)</span><br><a href="#topic/ch2-identity">อ่านต่อ</a></div>
<div class="card-mini"><b>การบริหารจัดการการจัดเก็บข้อมูล</b><br>Data Record Management<br><span class="muted">Asset Register, e-Voting, Medical Record, Digital Certificate</span><br><a href="#topic/ch2-data-record">อ่านต่อ</a></div>
<div class="card-mini"><b>การติดตามธุรกรรม</b><br>Transaction Traceability<br><span class="muted">Supply Chain (Food Safety, Pharmaceutical), Tax Compliance and Custom</span><br><a href="#topic/ch2-traceability">อ่านต่อ</a></div>
</div>
<h3>ตารางที่ 2 (ตรวจจากภาพหน้า 81 ที่วางแนวนอน)</h3>
<p class="muted">✓ = มีเครื่องหมายในตาราง; คอลัมน์ย่อชื่อการใช้งาน: AR = Asset Register (Land/Vehicle Registry), eV = e-Voting, MR = Medical Record (e-Health), DC = Digital Certificate (Birth Record, Education Certificate), ID = Individual Identity, SC = Supply Chain for Traceability (Food Safety, Pharmaceutical), TX = Tax Compliance and Custom for Fraud Traceability</p>
<div class="table-wrap wide"><table class="matrix">
<thead><tr><th rowspan="2">ประเทศ (ตามที่เขียนในตาราง)</th><th colspan="4">Data Record Management</th><th>Identity</th><th colspan="2">Transaction Traceability</th></tr>
<tr><th>AR</th><th>eV</th><th>MR</th><th>DC</th><th>ID</th><th>SC</th><th>TX</th></tr></thead>
<tbody>
<tr><td>Estonia</td><td></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td></td><td></td></tr>
<tr><td>United State</td><td>✓</td><td></td><td>✓</td><td>✓</td><td>✓</td><td></td><td>✓</td></tr>
<tr><td>China</td><td></td><td></td><td></td><td></td><td>✓</td><td>✓</td><td></td></tr>
<tr><td>India</td><td>✓</td><td></td><td></td><td></td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Dubai: United Arab Emirates</td><td>✓</td><td></td><td>✓</td><td></td><td>✓</td><td>✓</td><td></td></tr>
<tr><td>Taiwan</td><td></td><td></td><td></td><td></td><td>✓</td><td></td><td></td></tr>
<tr><td>Sweden</td><td>✓</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Australia</td><td></td><td></td><td></td><td></td><td></td><td></td><td>✓</td></tr>
<tr><td>Gana</td><td>✓</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Georgia</td><td>✓</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Japan</td><td>✓</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Luxembourg</td><td></td><td></td><td></td><td></td><td>✓</td><td></td><td></td></tr>
<tr><td>Malta</td><td>✓</td><td></td><td>✓</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Norway</td><td></td><td></td><td>✓</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Switzerland</td><td></td><td></td><td></td><td></td><td>✓</td><td></td><td></td></tr>
<tr><td>Ukraine</td><td>✓</td><td>✓</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Republic of Georgia</td><td>✓</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Finland</td><td></td><td></td><td></td><td></td><td>✓</td><td></td><td></td></tr>
<tr><td>Singapore</td><td></td><td></td><td></td><td></td><td></td><td></td><td>✓</td></tr>
<tr><td>Peru</td><td></td><td></td><td></td><td></td><td></td><td></td><td>✓</td></tr>
</tbody></table></div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> ตารางเป็น “ตัวอย่างเพียงบางส่วน” (หน้า 82) และมีทั้งคอลัมน์ “Georgia” และ “Republic of Georgia” โดยไม่อธิบายความต่าง (สะกด Gana, United State ตามตาราง) จึงใช้ตารางเพื่อเข้าใจภาพรวมการจัดกลุ่ม ไม่ควรท่องจับคู่ทุกช่อง</aside>`,
  confusions: [
    "e-Voting, Medical Record, Digital Certificate อยู่ในกลุ่ม Data Record Management (ไม่ใช่ Identity)",
    "Tax Compliance อยู่ในกลุ่ม Transaction Traceability"
  ],
  recall: [
    { q: "3 กลุ่มการนำ Blockchain มาใช้กับงานบริการภาครัฐ", a: "Identity Management, Data Record Management, Transaction Traceability (รูปภาพที่ 16)" }
  ],
  summary: [ "Identity | Data Record (AR, e-Voting, MR, DC) | Traceability (Supply Chain, Tax)", "ตารางที่ 2 = ตัวอย่างบางส่วน 20 คอลัมน์ประเทศ" ]
},
{
  id: "ch2-identity",
  title: "Identity Management และ Self-Sovereign Identity",
  pages: [82, 84],
  refs: [ { pages: [82, 83], heading: "การพิสูจน์ตัวตน Identity Management" }, { pages: [84], heading: "รูปภาพที่ 17: ระบบยืนยันและพิสูจน์ตัวตนบนเทคโนโลยี Blockchain", figureOrTable: "รูปภาพที่ 17" } ],
  objectives: [
    "อธิบายปัญหาของระบบพิสูจน์ตัวตนแบบเดิม",
    "อธิบายหลัก Self-Sovereign Identity และองค์ประกอบในรูปภาพที่ 17"
  ],
  body: `
<h3>ปัญหาเดิม → แนวทาง Blockchain</h3>
<div class="table-wrap"><table>
<thead><tr><th>ระบบเดิม</th><th>บน Blockchain</th></tr></thead>
<tbody>
<tr><td>ใช้รหัสผ่าน (Password-Based Systems) เป็นหลัก</td><td>ระบบกระจายศูนย์ (Distributed Computing) + Shared Database</td></tr>
<tr><td>ต้องมีคนกลางบริหารจัดการ เก็บข้อมูลที่ศูนย์กลาง</td><td>ข้อมูลที่บันทึกแล้วแก้ไม่ได้ ผู้ใช้ทุกคนเห็นชุดเดียวกัน</td></tr>
<tr><td>เสี่ยงถูกเจาะเพื่อ<b>จารกรรมข้อมูลส่วนบุคคล (Identity Theft)</b> แล้วขายให้อาชญากรสวมรอย</td><td>ตรวจสอบและบริหารการยืนยันตัวบุคคลสะดวก ปลอดภัย มีประสิทธิภาพ</td></tr>
</tbody></table></div>
<h3>Self-Sovereign Identity</h3>
<p>ประชาชนหรือองค์กร<b>สร้างและเก็บข้อมูลประจำตัวไว้บนอุปกรณ์ของตนเอง</b> โดยไม่ต้องมีคนกลางเก็บข้อมูลอีกต่อไป → ผู้ใช้ข้อมูลตรวจสอบได้มีประสิทธิภาพ และ<b>ลดการใช้กระดาษ</b> ไม่ต้องถ่ายสำเนาบัตรประชาชน ทะเบียนบ้าน สูติบัตร</p>
<h3>รูปภาพที่ 17 (ปรับปรุงจาก Parker, 2017)</h3>
<div class="arch">
<div class="arch-box"><b>Authentication</b><br>Strong Two-factor authentication: 2nd generation biometrics, PIN code, Trusted Execution Environment (TEE)</div>
<div class="arch-box"><b>Cryptography</b><br>ข้อมูลถูกเข้ารหัสและเก็บบนอุปกรณ์; Public key / Private key; Personal Data ใน Encrypted data container</div>
<div class="arch-box"><b>Blockchain (Tamperproof Digital Identity)</b><br>ข้อมูลถูกประทับเวลา (timestamped) ทำ Hash ลงลายมือชื่อดิจิทัล แล้วเพิ่มลง Blockchain; เก็บบนเครือข่าย P2P</div>
<div class="arch-box"><b>Privacy Engine</b><br>ผู้ใช้<b>เลือกยินยอม</b>ว่าจะแชร์คุณลักษณะใด (เช่น Name, Age, Certifications) ให้บุคคลที่สามรายใด</div>
<div class="arch-box"><b>User Centric Interface — Government App store</b><br>e-signature, e-ID card, e-voting, e-cabinet, e-services, e-law, e-police, e-welfare</div>
</div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> SSI ไม่ได้หมายความว่าเปิดข้อมูลตัวตนให้ทุกคน — ผู้ใช้เป็นผู้กำหนดว่าจะแชร์คุณลักษณะใดกับใคร (Privacy Engine)</aside>`,
  confusions: [
    "SSI: ข้อมูลอยู่บนอุปกรณ์ของเจ้าของ ไม่ใช่ศูนย์กลาง",
    "Identity Theft คือความเสี่ยงของระบบรวมศูนย์ที่ Blockchain ช่วยลด"
  ],
  recall: [
    { q: "Self-Sovereign Identity คืออะไร", a: "การที่ประชาชน/องค์กรสร้างและเก็บข้อมูลประจำตัวไว้บนอุปกรณ์ของตนเองโดยไม่ต้องมีคนกลาง (หน้า 83)" },
    { q: "ส่วนใดในรูปภาพที่ 17 ทำให้ผู้ใช้เลือกได้ว่าจะแชร์ข้อมูลใดกับใคร", a: "Privacy Engine" }
  ],
  summary: [ "เดิม: Password + คนกลาง + ศูนย์กลาง → Identity Theft", "SSI: เจ้าของเก็บข้อมูลบนอุปกรณ์ตัวเอง ลดสำเนา", "ภาพที่ 17: Authentication / Cryptography / Blockchain / Privacy Engine / Government App store" ]
},
{
  id: "ch2-identity-cases",
  title: "กรณีศึกษาการพิสูจน์ตัวตน: รัฐอิลลินอยส์ และ UN/WFP",
  pages: [84, 86],
  refs: [ { pages: [84, 85], heading: "กรณีศึกษาที่ 1: Citizen Identification รัฐอิลลินอยส์" }, { pages: [85, 86], heading: "กรณีศึกษาที่ 2: Refugees Identity Management (UN)" } ],
  objectives: [
    "วิเคราะห์กรณีศึกษาแบบ ปัญหา → ใช้ตรงไหน → ประโยชน์ → ข้อจำกัด/สิทธิ์ข้อมูล",
    "แยกบทบาทของหน่วยงาน/บริษัทในแต่ละกรณี"
  ],
  body: `
<div class="case">
<h3>กรณีศึกษาที่ 1: Citizen Identification — รัฐอิลลินอยส์ สหรัฐอเมริกา</h3>
<dl class="case-grid">
<dt>ผู้เกี่ยวข้อง</dt><dd>รัฐบาลรัฐอิลลินอยส์ + บริษัทสตาร์ทอัพ <b>Evernym</b></dd>
<dt>ใช้ Blockchain ตรงไหน</dt><dd>เก็บ<b>สูติบัตรทารกแรกเกิด (Birth Registration)</b> และระบบพิสูจน์/ยืนยันตัวตนอิเล็กทรอนิกส์ — แพทย์และผู้ปกครองลงทะเบียนสูติบัตรบน Blockchain</dd>
<dt>วิธีปกป้องข้อมูล</dt><dd>ข้อมูลชีวภาพ (Biometric) เช่น กรุ๊ปเลือด ลายนิ้วมือ เสียง ม่านตา ดีเอ็นเอ ถูก<b>เข้ารหัสและลงลายมือชื่อดิจิทัล</b> แล้วเก็บใน Distributed Ledger ที่<b>เข้าถึงได้เฉพาะผู้ได้รับอนุญาต</b></dd>
<dt>ประโยชน์</dt><dd>เครื่องมือเก็บข้อมูลประชาชนระยะยาว ตรวจข้อมูลการเกิดได้ เพิ่มความน่าเชื่อถือ <b>ป้องกันการโจรกรรมเอกลักษณ์ (Identity Theft)</b></dd>
<dt>แผน</dt><dd>เริ่มจากข้อมูลทารกแรกเกิด แล้วขยายเก็บข้อมูลประชาชนทั้งหมด (เป็นหนึ่งในหลายโครงการของรัฐ)</dd>
</dl>
</div>
<div class="case">
<h3>กรณีศึกษาที่ 2: Refugees Identity Management — องค์การสหประชาชาติ (UN)</h3>
<dl class="case-grid">
<dt>ผู้เกี่ยวข้อง</dt><dd>UN ร่วมกับ <b>Accenture และ Microsoft</b>; และโครงการอาหารโลก (<b>WFP</b>)</dd>
<dt>ใช้ Blockchain ตรงไหน</dt><dd>ยืนยันตัวตนด้วย Biometric (<b>ลายนิ้วมือและม่านตา</b>) ให้ผู้อพยพ; WFP ยืนยันตัวตนผู้อพยพ/ผู้ประสบภัยเพื่อรับ<b>คูปองแทนเงินสด</b> ร้านค้าสแกนม่านตาผู้ใช้คูปอง</dd>
<dt>ขนาด (ตามหนังสือ)</dt><dd>ผู้อพยพในเอเชีย <b>29 ประเทศ 1.3 ล้านคน</b> และจะขยายเป็น <b>7 ล้านคนในปี 2020</b></dd>
<dt>ประโยชน์</dt><dd>อุดรอยรั่วการแจกจ่ายอาหาร ให้อาหารถึงมือผู้ประสบภัยครบถ้วน</dd>
</dl>
</div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> ข้อมูลชีวภาพเป็นข้อมูลอ่อนไหว กรณีอิลลินอยส์จึงเน้นการเข้ารหัส ลายมือชื่อดิจิทัล และการเข้าถึงเฉพาะผู้ได้รับอนุญาต — สอดคล้องกับประเด็นความเป็นส่วนตัวในหัวข้อข้อจำกัด</aside>`,
  confusions: [
    "Evernym = อิลลินอยส์ (สูติบัตร); Accenture + Microsoft = UN (ผู้อพยพ)",
    "WFP ใช้คูปองแทนเงินสด + สแกนม่านตา"
  ],
  recall: [
    { q: "กรณีอิลลินอยส์เริ่มเก็บข้อมูลของใครก่อน", a: "เด็กทารกแรกเกิด (สูติบัตร) แล้วจึงขยายไปข้อมูลประชาชนทั้งหมด (หน้า 85)" }
  ],
  summary: [ "อิลลินอยส์ + Evernym: สูติบัตร, Biometric เข้ารหัส+ลายเซ็นดิจิทัล, เข้าถึงเฉพาะผู้ได้รับอนุญาต", "UN + Accenture + Microsoft: ผู้อพยพ 29 ประเทศ 1.3 ล้าน → 7 ล้าน (2020); WFP คูปองแทนเงินสด" ]
},
{
  id: "ch2-data-record",
  title: "Data Record Management: การบริหารจัดการการจัดเก็บข้อมูลภาครัฐ",
  pages: [86, 87],
  refs: [ { pages: [86, 87], heading: "การบริหารจัดการการจัดเก็บข้อมูล Data Record Management" } ],
  objectives: [ "อธิบายหัวใจของการบริหารข้อมูลภาครัฐและปัญหาเดิม", "ยกตัวอย่างข้อมูลภาครัฐที่หนังสือระบุว่านำ Blockchain มาใช้" ],
  body: `
<p><b>หัวใจ</b>ของการบริหารจัดการข้อมูลภาครัฐ คือการบริหาร<b>ความน่าเชื่อถือของข้อมูล</b>ที่เกี่ยวกับบุคคล องค์กร สินทรัพย์ และกิจกรรมของรัฐ</p>
<h3>ปัญหาเดิม</h3>
<ul>
<li>ข้อมูลการเกิด การตาย สถานภาพสมรส ใบอนุญาตธุรกิจ การโอนสินทรัพย์ ประวัติอาชญากรรม ฯลฯ ล้วนมี<b>ต้นทุนและความยุ่งยาก</b></li>
<li>บางข้อมูล<b>ยังอยู่บนแบบฟอร์มกระดาษ</b> ประชาชนต้องไปแก้ไขด้วยตนเอง ณ สถานที่ราชการ</li>
</ul>
<h3>บทบาท Blockchain</h3>
<p>หลัก DLT และ Cryptography ช่วยให้การเข้าถึง การใช้ข้อมูล และการบริหารความปลอดภัย/ความน่าเชื่อถือของข้อมูลทำได้ง่ายขึ้น หลายประเทศจึงใช้เก็บข้อมูลภาครัฐและการลงทะเบียนเอกสารสำคัญ เช่น</p>
<div class="chips"><span class="chip">e-Voting</span><span class="chip">Educational Record</span><span class="chip">Birth Record</span><span class="chip">Medical Record</span><span class="chip">Asset Register</span></div>`,
  confusions: [ "Data Record Management เน้นความน่าเชื่อถือของบันทึก ส่วน Traceability เน้นการติดตามธุรกรรมตลอดห่วงโซ่" ],
  recall: [ { q: "หัวใจของการบริหารจัดการข้อมูลภาครัฐคืออะไร", a: "การบริหารจัดการความน่าเชื่อถือของข้อมูลเกี่ยวกับบุคคล องค์กร สินทรัพย์ และกิจกรรมภาครัฐ (หน้า 86)" } ],
  summary: [ "หัวใจ = ความน่าเชื่อถือของข้อมูล; ปัญหา = ต้นทุน กระดาษ ต้องไปด้วยตนเอง", "ตัวอย่าง: e-Voting, Educational, Birth, Medical Record, Asset Register" ]
},
{
  id: "ch2-record-cases",
  title: "กรณีศึกษา Data Record: ที่ดินอินเดีย, เวชระเบียนดูไบ, ใบรับรองเพชร, i-Voting เอสโตเนีย",
  pages: [87, 93],
  refs: [ { pages: [87], heading: "กรณีศึกษาที่ 1: Land Registry ประเทศอินเดีย" }, { pages: [88, 89], heading: "กรณีศึกษาที่ 2: การจัดเก็บและส่งต่อข้อมูลประวัติการรักษาพยาบาล นครรัฐดูไบ" }, { pages: [90, 91], heading: "กรณีศึกษาที่ 3: การออกใบ Certificate ให้กับเพชร นครรัฐดูไบ" }, { pages: [92, 93], heading: "กรณีศึกษาที่ 4: i-Voting ประเทศเอสโตเนีย" } ],
  objectives: [ "วิเคราะห์ 4 กรณีศึกษาในรูปแบบ ปัญหา → การใช้ → ประโยชน์ → ข้อพิจารณา", "แยกกรณีของดูไบ 2 กรณีออกจากกัน" ],
  body: `
<div class="table-wrap wide"><table>
<thead><tr><th>กรณี</th><th>ปัญหาเดิม</th><th>ใช้ Blockchain ตรงไหน</th><th>ประโยชน์</th><th>ข้อพิจารณา/สิทธิ์ข้อมูล</th></tr></thead>
<tbody>
<tr><td><b>1. Land Registry อินเดีย</b></td><td>ที่ดินมูลค่าสูง มักเกิดกรณีพิพาท อาชญากรรม ฉ้อโกง; ปัญหาที่พบมากในประเทศกำลังพัฒนา กระทบความเชื่อมั่นการลงทุน</td><td>ขอจดทะเบียน/โอนกรรมสิทธิ์ โดยเฉพาะสินทรัพย์<b>สภาพคล่องต่ำ</b>อย่างที่ดิน</td><td>ลดกระบวนการเอกสาร เพิ่มประสิทธิภาพธุรกรรมอสังหาริมทรัพย์ คุ้มครองสิทธิเหนือที่ดิน</td><td>—</td></tr>
<tr><td><b>2. เวชระเบียนผู้ป่วย นครรัฐดูไบ (UAE)</b></td><td>ประวัติการรักษามักเป็นกระดาษ (ผลเลือด X-Ray) โรงพยาบาลส่วนใหญ่ไม่แชร์กัน</td><td>ดูไบเป็นหุ้นส่วนกับ <b>NMC Healthcare</b> ร่วมกับ <b>Guardtime</b> (บริษัท Blockchain สัญชาติเอสโตเนีย) ทำ Electronic Health Records (EHR)</td><td>ข้อมูลถูกต้อง ปลอดภัย เชื่อถือได้ตลอดกระบวนการ; ผู้ป่วยได้รับบริการต่อเนื่อง; วางแผน/ตารางนัดดีขึ้น; รักษาได้ทุกคลินิก มีประวัติแม้ไม่เคยรักษาที่นั่น — มีประโยชน์มากในกรณีฉุกเฉิน</td><td>เวชระเบียนเป็นข้อมูลละเอียดอ่อน</td></tr>
<tr><td><b>3. ใบรับรองเพชร นครรัฐดูไบ</b></td><td>เพชรแห่งความขัดแย้ง (Conflict/Blood Diamond) จากเหมืองที่กลุ่มกบฏในเซียร์ราลีโอนควบคุม</td><td><b>The Dubai Multi Commodities Centre</b> ออก <b>“Kimberley Certificates”</b> บน Blockchain</td><td>ตรวจรายละเอียดทุกขั้นตอนการผลิตตั้งแต่ออกจากเหมืองถึงผู้ค้าปลีก ลดการรั่วไหลของเพชรขัดแย้ง; สนับสนุนดูไบ “City of Gold”</td><td>กระบวนการคิมเบอร์ลีย์: รัฐรับรองว่าเพชรมาจากเหมือง/ธุรกิจถูกกฎหมาย; สมาชิกห้ามค้ากับประเทศที่ไม่ใช่สมาชิก</td></tr>
<tr><td><b>4. i-Voting เอสโตเนีย</b></td><td>การลงคะแนนด้วยกระดาษมีช่องโหว่ทุจริต</td><td>ใช้ในขั้น<b>นำส่งบัตรลงคะแนน</b>: บัตรที่ตรวจแล้วถูก<b>ประทับเวลา (Time Stamp)</b> และเก็บบน Blockchain = <b>Proof of Existence</b>; ใช้ Digital ID Card ที่ทุกคนต้องมี</td><td>ลดโอกาสทุจริต โดยเฉพาะการนับคะแนน (ทุจริตแล้วทิ้งร่องรอย); สะดวก เข้าถึงผู้มีสิทธิมากขึ้น ส่งเสริมประชาธิปไตย</td><td>ออกแบบการเข้ารหัส<b>ปกปิดตัวตน</b> รักษาความเป็นส่วนตัวของการมีส่วนร่วมทางการเมือง</td></tr>
</tbody></table></div>
<p class="muted">ไทม์ไลน์ i-Voting ตามหนังสือ: ลงคะแนนแบบดิจิทัลตั้งแต่ ค.ศ. 2005 → อนุญาตลงคะแนนออนไลน์ 2007 → ใช้ระบบบน Blockchain 2015</p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> กรณี i-Voting ใช้ Blockchain “ยืนยันการมีอยู่จริงของบัตรที่ตรวจแล้ว” ไม่ได้แปลว่าทุกขั้นตอนของการเลือกตั้งอยู่บน Blockchain และกรณีเพชรเป็นการรับรองเส้นทางสินค้า ซึ่งคาบเกี่ยวกับ Traceability แต่หนังสือจัดไว้ใน Data Record Management</aside>`,
  confusions: [
    "ดูไบมี 2 กรณีในหมวดนี้: เวชระเบียน (NMC + Guardtime) และเพชร (DMCC Kimberley)",
    "Guardtime เป็นบริษัทสัญชาติเอสโตเนีย แต่กรณีนี้เป็นของดูไบ",
    "i-Voting: 2005 ดิจิทัล → 2007 ออนไลน์ → 2015 Blockchain"
  ],
  recall: [
    { q: "i-Voting ใช้ Blockchain ในขั้นตอนใด", a: "ขั้นนำส่งบัตรลงคะแนน — บัตรที่ตรวจแล้วถูกประทับเวลาและเก็บบน Blockchain เพื่อพิสูจน์การมีอยู่จริง (Proof of Existence) (หน้า 92)" },
    { q: "หน่วยงานใดออก Kimberley Certificates บน Blockchain", a: "The Dubai Multi Commodities Centre (หน้า 90–91)" }
  ],
  summary: [ "อินเดีย: จดทะเบียนที่ดิน (สภาพคล่องต่ำ)", "ดูไบ: EHR กับ NMC Healthcare + Guardtime; เพชร Kimberley กับ DMCC", "เอสโตเนีย: i-Voting ประทับเวลาบัตร = Proof of Existence, เข้ารหัสปกปิดตัวตน" ]
},
{
  id: "ch2-traceability",
  title: "Transaction Traceability: การติดตามธุรกรรมตลอดห่วงโซ่อุปทาน",
  pages: [93, 93],
  refs: [ { pages: [93], heading: "การติดตามธุรกรรม Transaction Traceability" } ],
  objectives: [ "บอกคุณค่า 4 ด้านที่ Traceability สร้างให้ห่วงโซ่อุปทาน", "อธิบายจุดอ่อนของระบบรวมศูนย์แบบเดิม" ],
  body: `
<p>ใช้ Blockchain ตรวจติดตามธุรกรรมแบบย้อนกลับ<b>ทั้งห่วงโซ่อุปทาน (Supply Chain Transaction Traceability)</b> ช่วยบริหารข้อมูลให้สมาชิกทั้งห่วงโซ่ โดยกระจายข้อมูลที่น่าเชื่อถือและตรวจสอบได้ให้ทุกคน เพื่อให้เกิด</p>
<div class="chips"><span class="chip">ความโปร่งใส (Transparency)</span><span class="chip">ความเป็นกลาง (Neutrality)</span><span class="chip">ความน่าเชื่อถือ (Reliability)</span><span class="chip">ความมั่นคงปลอดภัยของข้อมูล (Security)</span></div>
<h3>ระบบเดิม</h3>
<p>ต้องอาศัย<b>คนกลางที่ทุกฝ่ายเชื่อถือ</b>บริหารข้อมูลแบบรวมศูนย์ (Centralized System) ซึ่ง<b>ง่ายต่อการปลอมแปลงและทุจริตโดยเจ้าหน้าที่</b>หากมีการติดสินบน (เพราะให้อำนาจคนกลาง) และ<b>ถูกเจาะระบบ (Hacking)</b> ทำให้ข้อมูลเชื่อถือไม่ได้</p>`,
  confusions: [ "Neutrality (เป็นกลาง) เกิดจากไม่ต้องให้อำนาจคนกลางรายเดียว" ],
  recall: [ { q: "คุณค่า 4 ด้านของ Supply Chain Transaction Traceability", a: "Transparency, Neutrality, Reliability, Security (หน้า 93)" } ],
  summary: [ "Traceability = โปร่งใส เป็นกลาง น่าเชื่อถือ ปลอดภัย", "เดิม: คนกลางรวมศูนย์ → เสี่ยงสินบนและแฮก" ]
},
{
  id: "ch2-trace-cases",
  title: "กรณีศึกษา Traceability: อาหารจีน, ยาอินเดีย, Industrial Hemp โคโลราโด, ภาษี EU",
  pages: [94, 97],
  refs: [ { pages: [94], heading: "กรณีศึกษาที่ 1: Food Safety Traceability ประเทศจีน" }, { pages: [95], heading: "กรณีศึกษาที่ 2: Pharmaceutical Supply Chain Traceability ประเทศอินเดีย" }, { pages: [96], heading: "กรณีศึกษาที่ 3: Industrial Hemp Supply Chain Traceability รัฐโคโลราโด" }, { pages: [97], heading: "กรณีศึกษาที่ 4: Tax Compliance for EU-Cross Broader Trade" } ],
  objectives: [ "วิเคราะห์ 4 กรณีแบบ ปัญหา → ใช้ตรงไหน → ประโยชน์" ],
  body: `
<div class="table-wrap wide"><table>
<thead><tr><th>กรณี</th><th>ปัญหาเดิม</th><th>ใช้ Blockchain ตรงไหน</th><th>ประโยชน์</th></tr></thead>
<tbody>
<tr><td><b>1. Food Safety Traceability — จีน</b></td><td>ความปลอดภัยอาหารเป็นเป้าหมาย SDG ของ UN; ตัวอย่างการปนเปื้อนสารพิษในนมผงจากระบบรวมศูนย์ที่เอื้อต่อการทุจริตและถูกแฮก</td><td>ระบบตรวจความปลอดภัยอาหารทั้งห่วงโซ่ (Food Supply Chain Traceability System) ร่วมกับ <b>IoT</b></td><td>ตรวจได้ตั้งแต่ผลิตถึงผู้บริโภคแบบ <b>Real Time</b> และเป็นไปตามมาตรฐาน <b>HACCP</b></td></tr>
<tr><td><b>2. Pharmaceutical Supply Chain — อินเดีย</b></td><td>ยาปลอม/ข้อมูลยาปลอมแปลง</td><td>ติดตามค้นหายาในห่วงโซ่อุปทานยา</td><td>เข้าถึงข้อมูลง่ายขึ้น แจ้งเตือนเมื่อมียาปลอม ระบุได้ว่ายาแต่ละชนิดมาจากโรงงานใด โปร่งใส เชื่อถือได้</td></tr>
<tr><td><b>3. Industrial Hemp — รัฐโคโลราโด สหรัฐฯ</b></td><td>การซื้อขายกัญชาต้องทำโดยผู้มีใบอนุญาตเท่านั้น</td><td>ร่วมกับ The Institute of Cannabis Research at Colorado State University–Pueblo ติดตามเส้นทางซื้อขายกัญชา/ผลิตภัณฑ์แปรรูปตั้งแต่ผู้ผลิตถึงผู้ซื้อ-ผู้ขาย และออกใบอนุญาต</td><td>บังคับใช้กฎหมายและจัดเก็บรายได้ดีขึ้น ตรวจการซื้อขายผิดกฎหมาย; รัฐออกกฎหมายสำคัญเรื่องใช้ Blockchain ตรวจการกระทำผิดในอุตสาหกรรมกัญชา</td></tr>
<tr><td><b>4. Tax Compliance — สหภาพยุโรป (EU)</b></td><td>การทุจริตภาษีในการค้าระหว่างประเทศสมาชิก</td><td>ติดตามธุรกรรมซื้อขายตั้งแต่โรงงานถึงผู้ซื้อ รวมถึง<b>ใบแจ้งหนี้ (Invoice)</b> ซึ่งเป็นหลักฐานขอ <b>Tax Refund</b></td><td>ธุรกรรมและเอกสารแก้ไม่ได้ (Immutability) → ป้องกันการทุจริตหลายรูปแบบ</td></tr>
</tbody></table></div>
<aside class="note note-book"><strong>จากหนังสือ (เชิงอรรถหน้า 94)</strong> HACCP = การวิเคราะห์อันตรายและจุดวิกฤติที่ต้องควบคุม ระบบจัดการคุณภาพด้านความปลอดภัยอาหาร เป็นมาตรฐานสากลตามคณะกรรมการ Codex (FAO/WHO) ถูกกำหนดโดย NASA ในช่วงทศวรรษ 1960</aside>
<p class="muted">กรณีศึกษาที่ 5 ในหมวดนี้คือ <a href="#topic/ch2-elg">e-LG ของประเทศไทย</a></p>`,
  confusions: [ "อินเดียปรากฏ 2 กรณี: ที่ดิน (Data Record) และยา (Traceability)", "EU ใช้ Immutability กับ Invoice เพื่อ Tax Refund" ],
  recall: [ { q: "กรณีความปลอดภัยอาหารของจีนใช้เทคโนโลยีใดร่วมกับ Blockchain", a: "IoT ทำให้ตรวจได้แบบ Real Time และตามมาตรฐาน HACCP (หน้า 94)" } ],
  summary: [ "จีน: อาหาร + IoT + HACCP Real Time", "อินเดีย: ยา ระบุโรงงาน แจ้งเตือนยาปลอม", "โคโลราโด: Industrial Hemp ใบอนุญาต บังคับใช้กฎหมาย", "EU: Invoice/Tax Refund ป้องกันทุจริต" ]
},
{
  id: "ch2-elg",
  title: "กรณีศึกษาที่ 5: e-LG (Letter of Guarantee on Blockchain) ประเทศไทย",
  pages: [98, 104],
  refs: [ { pages: [98], heading: "กรณีศึกษาที่ 5: Letter of Guarantee on Blockchain: e-LG ประเทศไทย (รูปภาพที่ 18)", figureOrTable: "รูปภาพที่ 18" }, { pages: [99, 101], heading: "BCI และบริการ e-LG (รูปภาพที่ 19–21)", figureOrTable: "รูปภาพที่ 19–21" }, { pages: [102, 104], heading: "e-LG บนระบบ e-GP และ Bank Confirmation (รูปภาพที่ 22)", figureOrTable: "รูปภาพที่ 22" } ],
  objectives: [
    "อธิบายหนังสือค้ำประกัน (LG) และปัญหาของ LG แบบกระดาษ",
    "แยกตัวเลขเวลา 3 บริบท: 3–7 วัน, ไม่เกิน 1 วัน, เร็วสุด 10 นาที",
    "อธิบายประโยชน์ของการเชื่อม e-GP ผ่าน Blockchain แทน Host2Host"
  ],
  body: `
<h3>หนังสือค้ำประกัน (Letter of Guarantee: LG)</h3>
<p>ธนาคารออก LG ให้บริษัทลูกค้าที่จะยื่นประมูลงานหรือทำสัญญากับหน่วยงานราชการ/ผู้รับผลประโยชน์ ใช้วางเป็นประกัน<b>แทนหลักทรัพย์อื่น</b> เช่น เงินสด พันธบัตร ที่ดิน — ถ้าคู่สัญญาไม่ปฏิบัติตามเงื่อนไข<b>ธนาคารรับผิดชอบตามสัญญาค้ำประกัน</b></p>
<h3>ปัญหาของ LG แบบกระดาษ (รูปภาพที่ 18 “Traditional LG”)</h3>
<ul>
<li>ตั้งแต่ยื่นขอจนผู้รับผลประโยชน์ตรวจสอบใช้เวลา<b>ประมาณ 3–7 วัน</b> ส่วนใหญ่เสียไปกับการรับส่งหนังสือ สอบถามสถานะ ตรวจความถูกต้อง</li>
<li>ต้นทุนจัดเก็บตลอดอายุสัญญา (ใช้กรณีฟ้องร้อง) หน่วยงานรัฐ/องค์กรใหญ่ต้องมีห้องเก็บเอกสาร ค้นหานาน</li>
</ul>
<h3>BCI และ e-LG on Blockchain</h3>
<p><b>บริษัท บีซีไอ (ประเทศไทย) — BCI</b> เกิดจากความร่วมมือของธนาคาร รัฐวิสาหกิจ และองค์กรธุรกิจชั้นนำ ภายใต้โครงการ <b>Thailand Blockchain Community Initiative</b> ภายใต้การกำกับของ<b>ธนาคารแห่งประเทศไทย</b> ให้บริการจริงตั้งแต่<b>มิถุนายน 2562</b> แก้ Pain point 6 ข้อ:</p>
<ol>
<li>ลดระยะเวลาออกหนังสือค้ำประกัน</li>
<li>อิเล็กทรอนิกส์ 100% ลดกระดาษและต้นทุนจัดเก็บ</li>
<li>เพิ่มความน่าเชื่อถือ ลดกระบวนการตรวจสอบ</li>
<li>มาตรฐานเดียวของหนังสือค้ำประกันกับทุกธนาคาร</li>
<li>ลดการกรอกข้อมูลจากกระดาษและความผิดพลาดจากมนุษย์</li>
<li>ค้นหาเอกสารได้สะดวกรวดเร็ว</li>
</ol>
<div class="table-wrap"><table>
<thead><tr><th>ตัวเลขเวลา</th><th>บริบท (ห้ามใช้แทนกัน)</th></tr></thead>
<tbody>
<tr><td><b>3–7 วัน</b></td><td>กระบวนการ LG แบบกระดาษเดิม (รูปภาพที่ 18)</td></tr>
<tr><td><b>ไม่เกิน 1 วัน</b> (“Less than a day”)</td><td>การออก LG ผ่าน Blockchain โดยทั่วไป (หน้า 100 รูปภาพที่ 20)</td></tr>
<tr><td><b>เร็วสุดภายใน 10 นาที</b></td><td>การ<b>อนุมัติรายการ</b>เมื่อยื่นกับภาครัฐผ่านระบบ <b>e-GP</b> ของกรมบัญชีกลาง (หน้า 102)</td></tr>
</tbody></table></div>
<h3>มาตรฐานและการกำกับ</h3>
<ul>
<li>ข้อมูลเก็บบนคลาวด์ บริหารและกำหนดสิทธิการเข้าถึงได้</li>
<li>ผ่านมาตรฐานระดับเดียวกับภาคธนาคาร: บริหารช่องโหว่และทดสอบเจาะระบบ (Vulnerability Management and Penetration Testing), ทดสอบประสิทธิภาพ (performance test)</li>
<li>ทดสอบใน <b>Regulatory Sandbox</b> ของ ธปท. มีกำหนดออกภายในต้นปี พ.ศ. 2564 (ตามหนังสือ)</li>
<li>ผู้ใช้บริการ <b>17 ธนาคาร</b> และรัฐวิสาหกิจ/บริษัทใหญ่ <b>10 บริษัท</b></li>
</ul>
<h3>เชื่อมกับกรมบัญชีกลาง (e-GP)</h3>
<div class="table-wrap"><table>
<thead><tr><th>เดิม</th><th>บน e-LG</th></tr></thead>
<tbody><tr><td>กรมบัญชีกลางเชื่อมกับธนาคารแบบ <b>Host2Host</b> ทีละธนาคาร ถ้าต้องแก้ฟิลด์ข้อมูลต้องแก้ทุกการเชื่อมต่อ</td><td>เชื่อมระบบเดียวคือ Blockchain ที่ธนาคารต่าง ๆ ร่วมอยู่แล้ว <b>แก้ครั้งเดียวรองรับทุกธนาคาร</b></td></tr></tbody></table></div>
<p>กรมบัญชีกลางเป็น<b>หน่วยงานราชการแรก</b>ที่เปิดให้ใช้ e-LG ทำให้การจัดซื้อจัดจ้างโปร่งใส เป็นธรรม ลดกระดาษ ลดคาร์บอน (Carbon Footprint)</p>
<h3>ขนาดและบริการต่อยอด</h3>
<ul>
<li>มีการใช้หนังสือค้ำประกันประมาณ <b>500,000 ฉบับต่อปี</b> วงเงินรวมกว่า <b>1.35 ล้านล้านบาท</b></li>
<li>หนังสือรับรองสินเชื่ออิเล็กทรอนิกส์ เพื่อขอจัดลำดับชั้นผู้ประกอบการงานก่อสร้างกับกรมบัญชีกลาง รับผลอนุมัติผ่าน e-GP</li>
<li><b>Bank Confirmation on Blockchain</b> (หนังสือรับรองทางการเงิน) ร่วมกับ ธปท. ก.ล.ต. บริษัทผู้สอบบัญชี และบริษัทชั้นนำ — ยกระดับรายงานทางการเงิน คุ้มครองผู้ลงทุน</li>
</ul>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> e-LG เป็นกรณีของประเทศไทยที่หนังสือวางไว้ในบทกรณีศึกษาต่างประเทศ (กรณีศึกษาที่ 5 ของ Transaction Traceability) เป็นบริการทางการเงินที่ใช้งานจริง — คนละเรื่องกับระบบต้นแบบ e-Referral ในบทที่ 3</aside>`,
  confusions: [
    "3–7 วัน (เดิม) / ≤ 1 วัน (ผ่าน Blockchain) / 10 นาที (อนุมัติบน e-GP) — ไม่ใช่ทุกกระบวนการใช้ 10 นาที",
    "BCI อยู่ภายใต้การกำกับของ ธปท.; กรมบัญชีกลาง = e-GP",
    "17 ธนาคาร (ผู้ใช้บริการ) ≠ 6 ธนาคาร (ผู้ร่วมลงทุนใน BCI หน้า 107)"
  ],
  recall: [
    { q: "LG แบบกระดาษใช้เวลาประมาณเท่าใด และ e-LG ลดเหลือเท่าใด", a: "ประมาณ 3–7 วัน → ไม่เกิน 1 วัน (หน้า 98, 100)" },
    { q: "ทำไมการเชื่อม e-GP ผ่าน Blockchain ดีกว่า Host2Host", a: "เดิมต้องเชื่อมและแก้ไขทุกธนาคาร บน e-LG เชื่อมระบบเดียวที่ธนาคารร่วมอยู่แล้ว แก้ครั้งเดียวรองรับทุกธนาคาร (หน้า 102)" }
  ],
  summary: [ "LG = ธนาคารค้ำประกันแทนหลักทรัพย์", "BCI (ธปท. กำกับ) เริ่ม มิ.ย. 2562; 6 Pain point; 17 ธนาคาร + 10 บริษัท", "3–7 วัน → ≤ 1 วัน; e-GP อนุมัติเร็วสุด 10 นาที; Host2Host → ระบบเดียว", "500,000 ฉบับ/ปี > 1.35 ล้านล้านบาท; Bank Confirmation on Blockchain" ]
},
{
  id: "ch2-council",
  title: "ปัจจัยความสำเร็จ 5 ด้าน และการจัดตั้งคณะทำงานแห่งชาติ",
  pages: [105, 110],
  refs: [ { pages: [105], heading: "รูปภาพที่ 23: ปัจจัยความสำเร็จในการประยุกต์ใช้เทคโนโลยี Blockchain สำหรับงานบริการภาครัฐ", figureOrTable: "รูปภาพที่ 23" }, { pages: [106, 110], heading: "การจัดตั้งคณะทำงานแห่งชาติ The National Blockchain Council" } ],
  objectives: [ "บอกปัจจัยความสำเร็จ 5 ด้าน", "เปรียบเทียบตัวอย่างการผลักดันของเนเธอร์แลนด์ ไทย UAE/ดูไบ และสหรัฐฯ" ],
  body: `
<h3>ปัจจัยความสำเร็จ 5 ด้าน (รูปภาพที่ 23)</h3>
<ol class="chips-ol">
<li>การจัดตั้งคณะทำงานแห่งชาติ (The National Blockchain Council)</li>
<li>การสร้างระบบนิเวศ (Blockchain Ecosystem)</li>
<li>การสร้างการกำกับดูแล (Blockchain Governance)</li>
<li>การกำหนดมาตรฐานเกี่ยวกับ Blockchain</li>
<li>การพัฒนาบุคลากร (Capacity Building)</li>
</ol>
<p class="muted">ข้อความหน้า 105 อ้าง “รูปภาพที่ 18” แต่ภาพจริงมี caption รูปภาพที่ 23</p>
<h3>คณะทำงานแห่งชาติ: ทำไมต้องมี</h3>
<p>การนำ Blockchain มาใช้ย่อมเปลี่ยนกระบวนการทำงานภาครัฐ จึงต้องมีคณะทำงานศึกษาวิจัยข้อดี ข้อเสีย <b>ความเป็นไปได้ (Feasibility Study)</b> ข้อจำกัดในบริบทของประเทศ ผลกระทบ และการวางแผนรับมือ</p>
<div class="table-wrap wide"><table>
<thead><tr><th>ประเทศ</th><th>หน่วยงาน/โครงการ</th><th>สาระสำคัญตามหนังสือ</th></tr></thead>
<tbody>
<tr><td>เนเธอร์แลนด์</td><td><b>Dutch National Blockchain Coalition</b> (จัดตั้งโดย The Ministry of Economic Affairs’ IT)</td><td>รวม<b>มากกว่า 20 หน่วยงาน</b> ทั้งรัฐ วิชาการ และเอกชน (การเงิน คมนาคม/โลจิสติกส์ พลังงาน); เป้าหมายเป็นผู้นำ Innovative Technology โดยเฉพาะ <b>Digital Identity</b>; ศึกษาความเป็นไปได้ ข้อจำกัด ผลกระทบทางสังคม ทรัพยากรบุคคล มาตรการควบคุม จนเกิดการยอมรับจากประชาชน</td></tr>
<tr><td>ไทย</td><td><b>บริษัท บีซีไอ (ประเทศไทย) จำกัด</b> ภายใต้ Thailand Blockchain Community Initiative (ก่อตั้ง ค.ศ. 2019)</td><td>ภายใต้การกำกับของ ธปท.; ธนาคารผู้ร่วมลงทุน <b>6 ธนาคาร</b>: กรุงศรีอยุธยา กรุงเทพ กสิกรไทย กรุงไทย ไทยพาณิชย์ ทหารไทย; ใช้โครงสร้างพื้นฐานร่วม (shared infrastructure); เริ่มด้วย e-LG และเป็นองค์กรแรกที่กำหนดมาตรฐานการใช้ e-LG</td></tr>
<tr><td>UAE / ดูไบ</td><td><b>The Global Blockchain Council (GBC)</b> ตั้งปี ค.ศ. 2016 (ดูไบเป็นสมาชิก)</td><td>ทดสอบและผลักดันโครงการ ให้ UAE เป็น Smart Future ภายใน 2020; UAE อยู่อันดับ 2 ของโลกด้านรัฐบาลที่ใช้ ICT มีประสิทธิภาพ (WEF 2016); ยุทธศาสตร์ดูไบ <b>“The Global Capital of Blockchain”</b> เป้าหมาย 3 ด้าน และ 7 โครงการ (ด้านล่าง)</td></tr>
<tr><td>สหรัฐฯ</td><td>คณะทำงานระดับรัฐ</td><td>รัฐนิวยอร์ก เวอร์จิเนีย ฮาวาย เมน ไวโอมิง จัดตั้งคณะทำงานอย่างเป็นรูปธรรมและถูกกฎหมาย ศึกษาผลกระทบ</td></tr>
</tbody></table></div>
<h3>ดูไบ: เป้าหมาย 3 ด้าน</h3>
<ul>
<li><b>Government Efficiency</b> — ใช้ Blockchain ให้บริการภาครัฐเต็มรูปแบบทั้งระบบ</li>
<li><b>Industries Creation</b> — ผลักดัน Blockchain Ecosystem ในประเทศ ทั้งอุตสาหกรรม ธุรกิจ สตาร์ทอัพ</li>
<li><b>International Leadership</b> — โครงการนำร่องภายใต้ GBC 7 โครงการ</li>
</ul>
<h3>ดูไบ: 7 โครงการ</h3>
<ol>
<li>จัดเก็บและส่งต่อประวัติการรักษาพยาบาลผู้ป่วย</li>
<li>ออกใบ Certificate ให้เพชร (Kimberley Certificates) โดย The Dubai Multi Commodities Centre</li>
<li>โอนกรรมสิทธิ์ โดยเฉพาะสินทรัพย์สภาพคล่องต่ำ เช่น ที่ดิน</li>
<li>พิสูจน์ตัวตน (Identity Management) ลดเวลาทำธุรกรรมกับภาครัฐ</li>
<li>พินัยกรรมดิจิทัล โอนกรรมสิทธิ์ทรัพย์สินให้ทายาท</li>
<li>โปรแกรมสะสมแต้มกระตุ้นการท่องเที่ยวในประเทศ</li>
<li>ปรับปรุงการตรวจสอบนำเข้า-ส่งออก โดยเฉพาะพิธีการเอกสาร เร่งการจัดส่งและชำระเงินระหว่างประเทศ</li>
</ol>`,
  confusions: [
    "BCI มีผู้ร่วมลงทุน 6 ธนาคาร แต่ผู้ใช้บริการ e-LG 17 ธนาคาร",
    "GBC ตั้งปี 2016; BCI ตั้งปี 2019",
    "เป้าหมาย 3 ด้าน ≠ 7 โครงการ ของดูไบ"
  ],
  recall: [
    { q: "ปัจจัยความสำเร็จ 5 ด้าน", a: "คณะทำงานแห่งชาติ, ระบบนิเวศ, การกำกับดูแล, มาตรฐาน, การพัฒนาบุคลากร (รูปภาพที่ 23)" },
    { q: "เป้าหมาย 3 ด้านของยุทธศาสตร์ดูไบ", a: "Government Efficiency, Industries Creation, International Leadership (หน้า 109)" }
  ],
  summary: [ "5 ปัจจัย: Council, Ecosystem, Governance, Standards, Capacity Building", "เนเธอร์แลนด์ >20 หน่วยงาน Digital Identity | ไทย BCI 2019, 6 ธนาคาร | UAE GBC 2016, ดูไบ 3 เป้าหมาย 7 โครงการ | สหรัฐฯ คณะทำงานรายรัฐ" ]
},
{
  id: "ch2-ecosystem-governance",
  title: "ระบบนิเวศ (Ecosystem) และการกำกับดูแล (Governance): กฎหมาย 5 กลุ่มของสหรัฐฯ",
  pages: [111, 113],
  refs: [ { pages: [111], heading: "การสร้างระบบนิเวศของเทคโนโลยี Blockchain / การสร้างการกำกับดูแล" }, { pages: [112, 113], heading: "กฎหมายที่เกี่ยวข้องกับ Blockchain ของสหรัฐอเมริกา 5 กลุ่ม" } ],
  objectives: [ "อธิบายเหตุผลของการสร้างระบบนิเวศและการกำกับดูแล", "จำแนกกฎหมาย 5 กลุ่มตามหนังสือ" ],
  body: `
<h3>ระบบนิเวศ (Blockchain Ecosystem)</h3>
<p>การขับเคลื่อนให้เป็นรูปธรรมและ<b>ยั่งยืน</b>ต้องมีระบบนิเวศที่เอื้อต่อการพัฒนา เช่น <b>นครรัฐดูไบ</b> วางนโยบายใช้ Blockchain ในงานภาครัฐเต็มรูปแบบ และสนับสนุนอุตสาหกรรม ธุรกิจ สตาร์ทอัพ</p>
<h3>การกำกับดูแล (Blockchain Governance)</h3>
<p>เหตุผล: โครงการนำร่องจำนวนมาก<b>พบปัญหาความเชื่อมั่นและการยอมรับจากสังคมเมื่อขยายผลระดับประเทศ</b> จึงต้องมีกรอบ/มาตรการกำกับดูแล โดยเฉพาะ<b>กฎหมาย</b> เพื่อความสงบเรียบร้อย ตัวอย่างคือสหรัฐอเมริกาที่ออกกฎหมายทั้งระดับรัฐ (State Action) และรัฐบาลกลาง (Federal Action) จำแนกได้ 5 กลุ่ม:</p>
<div class="table-wrap"><table>
<thead><tr><th>กลุ่มกฎหมาย</th><th>ตัวอย่างรัฐ (ตามหนังสือ)</th></tr></thead>
<tbody>
<tr><td>1. จัดตั้งคณะกรรมการ/คณะทำงานศึกษาข้อดี ข้อเสีย ข้อจำกัด ความเป็นไปได้</td><td>นิวยอร์ก เวอร์จิเนีย ฮาวาย เมน ไวโอมิง เวอร์มอนต์</td></tr>
<tr><td>2. การทำธุรกรรมทางอิเล็กทรอนิกส์โดยใช้ Blockchain</td><td>แคลิฟอร์เนีย เดลาแวร์ อิลลินอยส์ เทนเนสซี เนวาดา</td></tr>
<tr><td>3. การจัดเก็บข้อมูลภาครัฐในรูปแบบดิจิทัลโดยใช้ Blockchain</td><td>แคลิฟอร์เนีย โคโลราโด แมริแลนด์ มิชิแกน นิวเจอร์ซีย์ นิวยอร์ก โอไฮโอ แอริโซนา อิลลินอยส์</td></tr>
<tr><td>4. เงินสกุลดิจิทัล (Digital Currency)</td><td>คอนเนตทิคัต มิชิแกน เนแบรสกา เวอร์มอนต์</td></tr>
<tr><td>5. สัญญาอัจฉริยะ (Smart Contract)</td><td>คอนเนตทิคัต ฟลอริดา เนแบรสกา นิวยอร์ก โอไฮโอ</td></tr>
</tbody></table></div>
<p class="muted">เชื่อมโยง: เอกสารแนบท้ายระบุกฎหมายรัฐแอริโซนาที่ให้ Smart Contract มีผลบังคับใช้ทางกฎหมาย (ปี 2017) — ตรงกับข้อจำกัด Confidence ของ Smart Contract ในบทที่ 1</p>`,
  confusions: [ "Ecosystem = สภาพแวดล้อมที่เอื้อต่อการพัฒนา (อุตสาหกรรม/สตาร์ทอัพ); Governance = กรอบกำกับ โดยเฉพาะกฎหมาย", "กฎหมาย 5 กลุ่มเป็นการจัดของหนังสือสำหรับสหรัฐฯ" ],
  recall: [ { q: "เหตุใดต้องมี Blockchain Governance", a: "เพราะโครงการนำร่องพบปัญหาความเชื่อมั่นและการยอมรับจากสังคมเมื่อขยายผลระดับประเทศ จึงต้องมีกรอบกำกับ โดยเฉพาะกฎหมาย (หน้า 111)" } ],
  summary: [ "Ecosystem: ดูไบสนับสนุนอุตสาหกรรม ธุรกิจ สตาร์ทอัพ", "Governance: กฎหมายสหรัฐฯ 5 กลุ่ม — คณะทำงาน, ธุรกรรมอิเล็กทรอนิกส์, จัดเก็บข้อมูลรัฐ, เงินดิจิทัล, Smart Contract" ]
},
{
  id: "ch2-standards",
  title: "การกำหนดมาตรฐาน: ISO/TC 307 และ 7 หมวด",
  pages: [113, 116],
  refs: [ { pages: [113, 116], heading: "การกำหนดมาตรฐานเกี่ยวกับเทคโนโลยี Blockchain" } ],
  objectives: [ "อธิบายเหตุผลที่ต้องมีมาตรฐาน", "บอก 7 หมวดของ ISO/TC 307 ตามหนังสือ" ],
  body: `
<p>Blockchain ช่วยลดเวลาและต้นทุนธุรกรรม บันทึกตั้งแต่ธุรกรรมแรกถึงสุดท้าย โปร่งใสตรวจสอบได้ แต่<b>กฎระเบียบและแนวทางพัฒนาหลากหลาย ขาดการกำกับดูแล และไม่มีรูปแบบพัฒนามาตรฐานเดียว</b> — กระบวนการเทคนิคต่างกันตามผู้ให้บริการ จึงเป็นความท้าทายในการขยายขีดความสามารถ</p>
<h3>ISO/TC 307 Blockchain and Distributed Ledger Technologies — 7 หมวด</h3>
<div class="table-wrap"><table>
<thead><tr><th>หมวด</th><th>หัวข้อ</th></tr></thead>
<tbody>
<tr><td>SG 1</td><td>Reference Architecture, Taxonomy and Ontology</td></tr>
<tr><td>SG 2</td><td>Use Cases</td></tr>
<tr><td>SG 3</td><td>Security and Privacy</td></tr>
<tr><td>SG 4</td><td>Identity</td></tr>
<tr><td>SG 5</td><td>Smart Contracts</td></tr>
<tr><td>SG 6</td><td>Governance of Blockchain and Distributed Ledger Technology Systems</td></tr>
<tr><td>SG 7</td><td>Interoperability of Blockchain and Distributed Ledger Technology Systems</td></tr>
</tbody></table></div>
<p>ตามหนังสือ มาตรฐานยัง<b>อยู่ในขั้นเตรียมการ</b> คาดว่าจะประกาศใช้อย่างเป็นทางการภายในปี ค.ศ. 2021 (Morris, 2018) หลายประเทศผู้นำ เช่น <b>จีน</b> เริ่มจัดทำมาตรฐานของตนให้สอดคล้อง ISO/TC 307 เพื่อยกระดับสู่มาตรฐานสากล</p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> สถานะ “กำลังเตรียมการ/คาดว่า 2021” เป็นข้อมูลตามหนังสือฉบับ ม.ค. 2564</aside>`,
  confusions: [ "SG 3 = Security and Privacy; SG 4 = Identity; SG 7 = Interoperability" ],
  recall: [ { q: "ISO/TC 307 มีกี่หมวด", a: "7 หมวด (SG1–SG7) (หน้า 114–115)" } ],
  summary: [ "ปัญหา: หลากหลาย ขาดกำกับ ไม่มีมาตรฐานเดียว", "ISO/TC 307: 7 หมวด (สถาปัตยกรรม, Use Cases, Security & Privacy, Identity, Smart Contracts, Governance, Interoperability)" ]
},
{
  id: "ch2-capacity",
  title: "การพัฒนาบุคลากร (Capacity Building) และความร่วมมือมหาวิทยาลัย–อุตสาหกรรม",
  pages: [117, 120],
  refs: [ { pages: [117, 120], heading: "การพัฒนาบุคลากรที่มีความรู้ความสามารถด้านเทคโนโลยี Blockchain (Capacity Building)" } ],
  objectives: [ "อธิบายสถานการณ์บุคลากรและแนวทางของมหาวิทยาลัยตามหนังสือ" ],
  body: `
<p>บุคลากรด้าน Blockchain <b>ยังขาดแคลนจำนวนมาก</b> เป็นความท้าทายที่ต้องพัฒนา</p>
<ul>
<li><b>27 มหาวิทยาลัยชั้นนำ</b>ทั่วโลกจัดหลักสูตร/การอบรม</li>
<li><b>8 แห่งอยู่ในจีน</b> เช่น Tsinghua University, Zhejiang University, Central University of Finance and Economics</li>
<li>สหรัฐฯ เช่น Princeton, Stanford, MIT</li>
<li><b>5 แห่งในอังกฤษ</b> เช่น Oxford, Cambridge</li>
<li>ที่เหลืออยู่ในไซปรัส เดนมาร์ก ไอร์แลนด์ ญี่ปุ่น สิงคโปร์ ออสเตรเลีย</li>
</ul>
<p>เนื้อหาหลักสูตรส่วนใหญ่: หลักการพื้นฐาน เงินสกุลดิจิทัล การวิเคราะห์สถาปัตยกรรมเชิงเทคนิคของ Platform เช่น Ethereum และ Hyperledger กรณีศึกษาในภาคส่วนต่าง ๆ และแนวโน้มการพัฒนา</p>
<p><b>ประเด็นน่าสนใจ:</b> มหาวิทยาลัยในจีนให้ความสำคัญกับ<b>ความร่วมมือกับภาคอุตสาหกรรม</b>สร้างสถาบันวิจัย เพื่อให้งานวิจัยนำไปใช้ได้จริงทั้งภาครัฐและเอกชน</p>
<p class="muted">หน้า 120 ปิดบทว่าบทถัดไปจะศึกษาความเป็นไปได้และแนวทางใช้ Blockchain ในบริการภาครัฐของไทย</p>`,
  confusions: [ "27 แห่งทั้งหมด: จีน 8, อังกฤษ 5" ],
  recall: [ { q: "จุดเด่นของมหาวิทยาลัยจีนในการพัฒนาบุคลากรตามหนังสือ", a: "ร่วมมือกับภาคอุตสาหกรรมสร้างสถาบันวิจัย ให้ผลงานนำไปใช้ได้จริง (หน้า 119)" } ],
  summary: [ "ขาดแคลนบุคลากร", "27 มหาวิทยาลัย (จีน 8, อังกฤษ 5, สหรัฐฯ ฯลฯ)", "จีน: มหาวิทยาลัย + อุตสาหกรรม → สถาบันวิจัย" ]
},
{
  id: "ch2-appendix",
  title: "เอกสารแนบท้าย 1: ตารางโครงการต่างประเทศ (ประเทศ โครงการ สถานะ)",
  pages: [176, 183],
  refs: [ { pages: [176, 183], heading: "เอกสารแนบท้าย 1 ตารางสรุปตัวอย่างการประยุกต์ใช้เทคโนโลยี Blockchain สำหรับงานบริการภาครัฐในต่างประเทศ" } ],
  objectives: [ "อ่านสถานะโครงการ (ประกาศ / ระหว่างดำเนินการ / ทดสอบ / ใช้งานจริง / ล้มเหลว) และเชื่อมกับกลุ่มการใช้งาน" ],
  body: `
<p>สถานะทั้งหมดเป็นข้อมูลตามหนังสือ (อ้างอิงแหล่งปี 2016–2018) แถวเรียงตามประเทศในเอกสาร</p>
<div class="table-wrap wide"><table>
<thead><tr><th>ประเทศ</th><th>โครงการ</th><th>สถานะ (ตามหนังสือ)</th><th>กลุ่มหลัก</th></tr></thead>
<tbody>
<tr><td>ไทย</td><td>บริการหนังสือค้ำประกันอิเล็กทรอนิกส์ e-LG</td><td>ใช้งานจริงตั้งแต่ ค.ศ. 2019</td><td>Traceability/การเงิน</td></tr>
<tr><td rowspan="2">ออสเตรเลีย</td><td>วุฒิสมาชิกจัดตั้งคณะทำงานขับเคลื่อน Blockchain</td><td>ประกาศ 2017</td><td>ปัจจัยสำเร็จ (คณะทำงาน)</td></tr>
<tr><td>ASX จะใช้ Blockchain แทนระบบหักบัญชีและชำระบัญชี CHESS</td><td>ประกาศ 2017 เริ่มใช้จริง 2018</td><td>การเงิน</td></tr>
<tr><td rowspan="6">จีน</td><td>บริหารกองทุนประกันสังคม (Social Security Funds Management)</td><td>ประกาศ 2016</td><td>Data Record</td></tr>
<tr><td>ประเมินมูลค่าสินเชื่อที่อยู่อาศัย (Mortgage Valuations)</td><td>ประกาศ 2016</td><td>การเงิน</td></tr>
<tr><td>บริหารจัดการสินทรัพย์ (Blockchain-Based Asset Custody System, PSBC)</td><td>ใช้งานจริงตั้งแต่ 2016</td><td>การเงิน</td></tr>
<tr><td>เมืองนวัตกรรมด้านพลังงาน ที่ Hangzhou (ร่วม Cloud, Big Data, IoT, AI)</td><td>ประกาศ 2016</td><td>—</td></tr>
<tr><td>ระบบจัดเก็บภาษีอัจฉริยะ + ใบแจ้งหนี้อิเล็กทรอนิกส์ ป้องกันใบแจ้งหนี้ปลอม</td><td>ประกาศ 2018</td><td>Traceability (ภาษี)</td></tr>
<tr><td>ตรวจความปลอดภัยอาหารทั้งห่วงโซ่</td><td>ประกาศ 2016</td><td>Traceability</td></tr>
<tr><td rowspan="6">ดูไบ (UAE)</td><td>บริหารข้อมูลและเอกสารภาครัฐ</td><td>ระหว่างดำเนินการ</td><td>Data Record</td></tr>
<tr><td>หนังสือเดินทางอิเล็กทรอนิกส์ (Digital Passport)</td><td>ประกาศ 2017</td><td>Identity</td></tr>
<tr><td>ข้อมูลการขนส่งสินค้าแบบเรียลไทม์</td><td>ประกาศ 2017</td><td>Traceability</td></tr>
<tr><td>จัดเก็บ/ส่งต่อประวัติการรักษา (EHRs)</td><td>ประกาศ 2017</td><td>Data Record</td></tr>
<tr><td>ใบรับรองเพชร (Kimberley Certificates)</td><td>ประกาศ 2017</td><td>Data Record</td></tr>
<tr><td>จดทะเบียนที่ดิน “Dubai Real-Estate Blockchain”</td><td>ประกาศ 2017</td><td>Data Record</td></tr>
<tr><td rowspan="6">เอสโตเนีย</td><td>eID (electronic ID management system)</td><td>ใช้งานจริง กำลังอัปเกรด</td><td>Identity</td></tr>
<tr><td>e-Health (Medical Information Management System)</td><td>ใช้งานจริง กำลังอัปเกรด</td><td>Data Record</td></tr>
<tr><td>e-Residency (A Transnational Digital Identity)</td><td>ใช้งานจริงตั้งแต่ 2015</td><td>Identity</td></tr>
<tr><td>ศาลดิจิทัล e-Court ใช้ KSI Blockchain ป้องกันปลอมแปลงเอกสาร (e-File)</td><td>ใช้งานจริงตั้งแต่ 2015</td><td>Data Record</td></tr>
<tr><td>Document Registries (Business, Property, Succession, Healthcare Registry)</td><td>ใช้งานจริงตั้งแต่ 2015</td><td>Data Record</td></tr>
<tr><td>i-Voting</td><td>ใช้งานจริงตั้งแต่ 2015</td><td>Data Record</td></tr>
<tr><td>ฝรั่งเศส</td><td>ซื้อขายหลักทรัพย์ที่ไม่จดทะเบียน</td><td>ประกาศ 2017</td><td>การเงิน</td></tr>
<tr><td>กานา</td><td>จดทะเบียนที่ดิน โดย NGO “Bitland”</td><td>ระหว่างดำเนินการ</td><td>Data Record</td></tr>
<tr><td>จอร์เจีย</td><td>จดทะเบียนที่ดิน</td><td>ระหว่างดำเนินการ</td><td>Data Record</td></tr>
<tr><td>ฮอนดูรัส</td><td>จดทะเบียนที่ดิน</td><td>ประกาศ 2015 <b>แต่โครงการล้มเหลว</b></td><td>Data Record</td></tr>
<tr><td rowspan="2">รัสเซีย</td><td>บริหารข้อมูลและเอกสารภาครัฐ</td><td>ประกาศ 2016</td><td>Data Record</td></tr>
<tr><td>e-Health</td><td>ประกาศ 2017</td><td>Data Record</td></tr>
<tr><td rowspan="2">สิงคโปร์</td><td>ชำระเงินระหว่างธนาคารข้ามพรมแดน</td><td>ประกาศ 2016 อยู่ระหว่าง Proof-of-Concept</td><td>การเงิน</td></tr>
<tr><td>ออกตราสาร ชำระ/แลกเปลี่ยนเงินตราและหลักทรัพย์ระหว่างธนาคาร ทดลองเงินสกุลแห่งชาติแบบ Cryptocurrency</td><td>ระหว่างดำเนินการ</td><td>การเงิน</td></tr>
<tr><td>สวีเดน</td><td>จดทะเบียนที่ดิน ด้วย Blockchain และ Smart Contract</td><td>ทดสอบระบบในปี 2017</td><td>Data Record</td></tr>
<tr><td rowspan="2">สวิตเซอร์แลนด์</td><td>ชำระค่าธรรมเนียมด้วยเงินดิจิทัล เช่น Bitcoin</td><td>ใช้งานจริงตั้งแต่ 2016</td><td>Cryptocurrency</td></tr>
<tr><td>Digital Identity ตามหลัก Self-Sovereign Identity</td><td>ประกาศ 2017</td><td>Identity</td></tr>
<tr><td rowspan="3">ยูเครน</td><td>ลงคะแนนเลือกตั้ง e-Vox (Ethereum Blockchain-Based Election Platform)</td><td>ประกาศ 2016</td><td>Data Record</td></tr>
<tr><td>ประมูลแบบดิจิทัล (Blockchain-Based Auction System)</td><td>ประกาศ 2016</td><td>—</td></tr>
<tr><td>จดทะเบียนที่ดิน</td><td>ประกาศ 2017</td><td>Data Record</td></tr>
<tr><td rowspan="3">อังกฤษ</td><td>จ่ายสวัสดิการภาครัฐ</td><td>ประกาศ 2016 ทดสอบสำเร็จ</td><td>Social Welfare</td></tr>
<tr><td>บริการภาครัฐต่าง ๆ</td><td>ใช้งานจริงตั้งแต่ 2016</td><td>—</td></tr>
<tr><td>ชำระเงินระหว่างธนาคาร</td><td>ประกาศ 2017</td><td>การเงิน</td></tr>
<tr><td rowspan="5">สหรัฐอเมริกา</td><td>แลกเปลี่ยนข้อมูลด้านสุขภาพ</td><td>ประกาศ 2016 ทดสอบนำร่อง</td><td>Data Record</td></tr>
<tr><td>อนุญาตซื้อขายหุ้น Bitcoin</td><td>ประกาศ 2015</td><td>การเงิน</td></tr>
<tr><td>Smart Contract มีผลบังคับใช้ทางกฎหมาย</td><td>กฎหมายรัฐแอริโซนา มีผล 2017</td><td>Governance</td></tr>
<tr><td>ใช้ Blockchain กับตลาดหลักทรัพย์ ซื้อขายหุ้นและเก็บธุรกรรมได้ถูกกฎหมาย</td><td>กฎหมายรัฐเดลาแวร์ มีผล 2017</td><td>Governance</td></tr>
<tr><td>Identity Management เก็บสูติบัตร รัฐอิลลินอยส์</td><td>ประกาศ 2017</td><td>Identity</td></tr>
<tr><td>ไต้หวัน</td><td>พิสูจน์และยืนยันตัวตนอิเล็กทรอนิกส์ (Citizen Identification)</td><td>ระหว่างการพัฒนา</td><td>Identity</td></tr>
<tr><td>ญี่ปุ่น</td><td>ให้ Bitcoin/Cryptocurrency ชำระหนี้ได้ตามกฎหมาย</td><td>ประกาศ 2016</td><td>Cryptocurrency</td></tr>
<tr><td>ยิบรอลตาร์</td><td>ใช้ Blockchain กับตลาดหลักทรัพย์ ถูกกฎหมาย</td><td>ประกาศ 2017</td><td>การเงิน</td></tr>
<tr><td>บราซิล</td><td>จดทะเบียนที่ดิน</td><td>ประกาศ 2016</td><td>Data Record</td></tr>
<tr><td>เซียร์ราลีโอน</td><td>ลงคะแนนเลือกตั้ง</td><td>ประกาศ 2018 อยู่ระหว่าง Proof-of-Concept</td><td>Data Record</td></tr>
<tr><td>อินเดีย</td><td>จดทะเบียนที่ดิน</td><td>ประกาศ 2017</td><td>Data Record</td></tr>
</tbody></table></div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> คอลัมน์ “กลุ่มหลัก” เป็นการจัดเพื่อช่วยทบทวนในเว็บนี้ ตารางในหนังสือไม่มีคอลัมน์นี้ บางโครงการคาบเกี่ยวหลายกลุ่ม; “ประกาศ” ≠ “ใช้งานจริง” — อ่านสถานะให้ละเอียด</aside>`,
  confusions: [ "“ประกาศ” ไม่ได้แปลว่าใช้งานจริงแล้ว", "ฮอนดูรัสเป็นตัวอย่างโครงการที่ล้มเหลว", "Proof-of-Concept = ขั้นทดลองพิสูจน์แนวคิด (สิงคโปร์, เซียร์ราลีโอน)" ],
  recall: [ { q: "โครงการจดทะเบียนที่ดินของประเทศใดที่หนังสือระบุว่าล้มเหลว", a: "ฮอนดูรัส (ประกาศปี 2015) (หน้า 180)" } ],
  summary: [ "สถานะมีหลายระดับ: ประกาศ / ระหว่างดำเนินการ / ทดสอบ / Proof-of-Concept / ใช้งานจริง / ล้มเหลว", "เอสโตเนียใช้งานจริงหลายระบบตั้งแต่ 2015; ไทย e-LG ใช้จริงตั้งแต่ 2019" ]
}
]);
