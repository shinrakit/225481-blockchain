/* summary.js — สรุปก่อนสอบ (ใช้ทบทวนหลังอ่านบทเรียนเต็ม ไม่ใช่เนื้อหาหลัก) */
window.BC = window.BC || {};
BC.examSummary = [
{
  id: "s-def", title: "1. คำจำกัดความที่ต้องแยกให้ออก",
  html: `
<div class="table-wrap"><table>
<thead><tr><th>คำ</th><th>สาระ</th><th>หน้า</th></tr></thead><tbody>
<tr><td>Blockchain</td><td>Shared Database / DLT ทุกคนเห็นชุดเดียวกัน บันทึกแล้วแก้ไม่ได้; Cryptography + Distributed Computing; 2008 Satoshi Nakamoto</td><td>13, 19</td></tr>
<tr><td>Node</td><td>อุปกรณ์ต่ออินเทอร์เน็ตและประมวลผลได้; Full/Light = เก็บสำเนา, Consensus Node = ตรวจ</td><td>17, 22</td></tr>
<tr><td>Ledger / Chain</td><td>บัญชีธุรกรรมที่สำเนาให้ทุก Node / หลักการจดจำทุกธุรกรรมและแจกจ่าย Ledger กู้จาก Node อื่นได้</td><td>17, 33</td></tr>
<tr><td>Block</td><td>Header + Data; 7 ส่วน: หมายเลข, Timestamp, Nonce, Difficulty Target, Previous Hash, Data, Merkle Root</td><td>26–28</td></tr>
<tr><td>Hash</td><td>ทางเดียว เฉพาะตัว ยาวคงที่ — ย้อนกลับไม่ได้ (ไม่ใช่การเข้ารหัส/ลายเซ็น)</td><td>14, 28</td></tr>
<tr><td>Previous / Current Hash</td><td>Previous = Current Hash ของ Block ก่อนหน้า (อุปมาเป็นลายเซ็น) / Current = Hash ของข้อมูลทั้ง Block</td><td>13, 28</td></tr>
<tr><td>Nonce / Target / Difficulty</td><td>Nonce = ค่าที่เปลี่ยน; Hash(Header) ≤ Target; Difficulty = 0x00ffff…/CurrentTarget; ปรับทุก 2016 Blocks (~2 สัปดาห์)</td><td>27–30</td></tr>
<tr><td>Merkle Root</td><td>Top hash ของ Hash Tree ของทุกธุรกรรมใน Block (32 ไบต์ในตัวอย่าง Bitcoin)</td><td>16, 31–32</td></tr>
<tr><td>Consensus</td><td>ความเห็นชอบร่วม ให้ข้อมูลถูกต้อง ชุดเดียวกัน ลำดับตรงกัน</td><td>14, 33</td></tr>
<tr><td>Validation</td><td>ตรวจทบทวนทั้งระบบ/ทุก Node; 3 จุดประสงค์</td><td>36</td></tr>
<tr><td>Smart Contract</td><td>โปรแกรมทำตามข้อตกลงอัตโนมัติเมื่อเงื่อนไขเกิด ไม่มีคนกลาง; Nick Szabo 1994</td><td>17, 53</td></tr>
<tr><td>Oracle</td><td>แหล่งข้อมูลภายนอกที่เชื่อถือได้ให้ Smart Contract อ้างอิง (ระดับน้ำ → ประกันอุทกภัย)</td><td>17</td></tr>
<tr><td>DAO</td><td>ขั้นสูงสุด คอมพิวเตอร์บริหารเอง; ต้องมี Contractor; Proposal = Smart Contract + ภาษาธรรมดา</td><td>58–59</td></tr>
<tr><td>Proof of Existence</td><td>เก็บ Cryptographic Digest + เวลาส่ง ไม่ใช่ต้นฉบับ</td><td>52</td></tr>
<tr><td>Self-Sovereign Identity</td><td>เจ้าของเก็บข้อมูลตัวตนบนอุปกรณ์ตนเอง ไม่มีคนกลาง; Privacy Engine เลือกแชร์</td><td>83–84</td></tr>
<tr><td>On Chain / Off Chain</td><td>ข้อมูลจริงบนเชน / Pointer-ลิงก์เข้ารหัส อ่านด้วย Private Key (X-Ray, MRI)</td><td>143</td></tr>
</tbody></table></div>`
},
{
  id: "s-process", title: "2. กระบวนการ/ลำดับ",
  html: `
<ul>
<li><b>4 ขั้นตอนหลัก:</b> Create → Broadcast → Validation → Add to Chain (อย่างน้อยต้องมี 4 ขั้นนี้) — หน้า 23–24</li>
<li><b>การหา Nonce:</b> เปลี่ยน Nonce ใน Header → คำนวณ Hash → จน ≤ Target → ผู้หาได้ก่อนยืนยัน Block → Hash นั้นเป็น Current Hash — หน้า 29</li>
<li><b>แก้ข้อมูลย้อนหลัง:</b> Hash ใหม่ไม่ตรง Previous Hash ใน Block ถัดไป → ต้องทำ PoW ใหม่ทุก Block ถัดไปพร้อมกัน → Node อื่นไม่ยอมรับ ถูกแยกจาก Chain หลัก — หน้า 14, 32, 45</li>
<li><b>6 คำถามเลือกใช้:</b> แชร์ชุดเดียวกัน? → ผู้สร้าง > 1? → ต้อง Immutability? → ไม่ใช่ PII? → ต้องการเชื่อใจโดยไม่มีคนกลาง? → ต้องรับประกันไม่ถูกปลอม? — ตกข้อ 3/4 = ไม่ควรใช้; ตกข้อ 1/2/5/6 = ไม่จำเป็น — หน้า 47</li>
<li><b>DAO:</b> Proposal → ตรวจขัดผลประโยชน์/คุณสมบัติ → เข้าบัญชีรับเงิน — หน้า 59</li>
<li><b>บูรณาการด้วย Blockchain:</b> เรียกบริการ → แจก Smart Contract ไป Node → หน่วยงานทำครบเงื่อนไข + Consensus → สำเนาทุก Node — หน้า 143–144</li>
<li><b>ตรวจคนเข้าเมือง:</b> กองบังคับการ ตม. สร้าง Smart Contract → หน่วยงานขอข้อมูล → ตรวจทะเบียน (มี/ไม่มี) → ครบเงื่อนไขสำเนาทุก Node → สำนักงาน ตม. ปรับทะเบียน — หน้า 150</li>
<li><b>ส่งต่อผู้ป่วย:</b> รพ. A refer → ดึงประวัติ (B) → แจ้ง C → C accept/reject; สิทธิ์ข้อมูล: RequestProfile → ApproveRequest (ผู้ป่วย) → ClearProfile (หมดเวลา) — หน้า 160–164</li>
</ul>`
},
{
  id: "s-compare", title: "3. ตารางเปรียบเทียบ",
  html: `
<h4>Consensus</h4>
<div class="table-wrap"><table><thead><tr><th>กลไก</th><th>หลัก</th><th>ผู้ตรวจ</th><th>ตัวอย่างในหนังสือ</th></tr></thead><tbody>
<tr><td>PoW</td><td>แก้โจทย์คณิตศาสตร์</td><td>Miner (ได้ค่าตอบแทน)</td><td>Bitcoin</td></tr>
<tr><td>PoS</td><td>วางสินทรัพย์</td><td>Validator ผู้วางมากมีโอกาสมาก</td><td>Ethereum (หน้า 34)</td></tr>
<tr><td>PoA</td><td>สิทธิ์ผู้ที่เชื่อถือได้ ระบุชื่อ หมุนเวียน</td><td>บัญชีที่ได้รับอนุมัติ</td><td>—</td></tr>
<tr><td>PBFT</td><td>เสียงข้างมาก 3f+1</td><td>Validator</td><td>HyperLedger</td></tr>
</tbody></table></div>
<h4>ประเภท Blockchain</h4>
<div class="table-wrap"><table><thead><tr><th></th><th>Public</th><th>Private</th><th>Consortium</th></tr></thead><tbody>
<tr><td>เข้าร่วม</td><td>ทุกคน ไม่ต้องขออนุญาต</td><td>เฉพาะผู้ได้รับอนุญาต ในองค์กร</td><td>เฉพาะกลุ่ม อนุญาตจากตัวแทน</td></tr>
<tr><td>ตัวอย่าง</td><td>Bitcoin, Ethereum</td><td>Hyperledger, Corda, Tendermint</td><td>Japanese Bank, R3CEV</td></tr>
<tr><td>ตารางที่ 1</td><td>Fluid, Distributed Consensus, ส่วนใหญ่แก้ไม่ได้, PoW</td><td colspan="2">Static/Semi-Static, Centralized/Semi-Centralized Trust, อาจแก้/กึ่งแก้ได้</td></tr>
</tbody></table></div>
<h4>คุณลักษณะ 3 ประการ</h4>
<p>Data Integrity (Immutability) · Data Transparency (เข้าถึงจาก Node ตนเอง) · Availability (Node ทำงานแทนกัน) — หน้า 45–46</p>
<h4>Smart Contract</h4>
<p>จุดเด่น: Security, Automation, Standardization · เหมาะ: ข้อมูลห้ามแก้, ธุรกรรมอัตโนมัติ, ต้องเก็บประวัติ, ลดค่าตัวกลาง · ข้อจำกัด: Human Error, Immutable, Confidence, Cost — หน้า 54–57</p>
<h4>ESB vs Blockchain</h4>
<div class="table-wrap"><table><thead><tr><th>ESB (SOA)</th><th>Government Blockchain Network</th></tr></thead><tbody>
<tr><td>ตัวกลางส่งข้อมูลผ่าน API; ผู้ให้เปลี่ยน → กระทบผู้ใช้; ตรวจพารามิเตอร์ทุกครั้ง; ความปลอดภัยต่างกัน; ต้องแลก CA; โครงสร้างแพง; ทีม SLA; MOU/พัฒนานาน</td><td>P2P; Node เก็บชุดเดียวกัน; Consensus; CA รับรองธุรกรรม; Smart Contract กำหนดหน้าที่; Node อิสระ ไม่กระทบกัน; APIs มาตรฐาน; Auditability</td></tr>
</tbody></table></div>`
},
{
  id: "s-gov", title: "4. ภาครัฐ: วัตถุประสงค์ ประโยชน์ ข้อจำกัด กลุ่มการใช้งาน",
  html: `
<ul>
<li><b>วัตถุประสงค์ 4:</b> Social Welfare (อังกฤษ Digital Wallet) · e-Government (เอสโตเนีย e-Estonia, X-Road 2001) · Transparency (ญี่ปุ่น จัดซื้อจัดจ้าง) · National Security (อังกฤษ โครงสร้างพื้นฐานสำคัญ) — หน้า 64–69</li>
<li><b>ประโยชน์ 2:</b> Transparency (เป็นเจ้าของข้อมูล FOIA แต่ต้องไม่ละเมิดความเป็นส่วนตัว) · Tamper-Proof (แต่ต้องชั่งต้นทุน) — หน้า 70–73</li>
<li><b>ข้อจำกัด:</b> Right to Privacy (GDPR/Right to be Forgotten) · Copyright (ลบไม่ได้ + Anonymous; DMCA) · Censorship · ต้นทุน: ส่วนใหญ่ใช้ Private; Public Hardware/Maintenance/Miner/พลังงานเท่าเมือง 1.5 แสน–10 ล้านคน; Private ถูกกว่า Public แต่แพงกว่ารวมศูนย์ — หน้า 74–79</li>
<li><b>3 กลุ่ม:</b> Identity Management · Data Record Management · Transaction Traceability — หน้า 82</li>
<li><b>ภาพรวม:</b> >30 ประเทศ; CIO 22% วางแผน (9%+13%), 42% On the Radar — หน้า 61–63</li>
</ul>`
},
{
  id: "s-cases", title: "5. กรณีศึกษา (ปัญหา → ใช้ตรงไหน → ประโยชน์)",
  html: `
<div class="table-wrap wide"><table><thead><tr><th>กรณี</th><th>กลุ่ม</th><th>สาระย่อ</th></tr></thead><tbody>
<tr><td>อิลลินอยส์ + Evernym</td><td>Identity</td><td>สูติบัตรทารก, Biometric เข้ารหัส+ลายเซ็นดิจิทัล, เข้าถึงเฉพาะผู้ได้รับอนุญาต, กัน Identity Theft</td></tr>
<tr><td>UN + Accenture + Microsoft / WFP</td><td>Identity</td><td>ผู้อพยพ 29 ประเทศ 1.3 ล้าน → 7 ล้าน (2020); ลายนิ้วมือ ม่านตา; คูปองแทนเงินสด</td></tr>
<tr><td>Land Registry อินเดีย</td><td>Data Record</td><td>ข้อพิพาทที่ดิน; จด/โอนกรรมสิทธิ์สินทรัพย์สภาพคล่องต่ำ</td></tr>
<tr><td>ดูไบ + NMC Healthcare + Guardtime</td><td>Data Record</td><td>EHR แชร์ระหว่าง รพ. รักษาต่อเนื่อง ฉุกเฉิน</td></tr>
<tr><td>ดูไบ DMCC Kimberley Certificates</td><td>Data Record</td><td>ใบรับรองเพชร ตรวจเหมือง → ผู้ค้าปลีก ลดเพชรขัดแย้ง</td></tr>
<tr><td>i-Voting เอสโตเนีย</td><td>Data Record</td><td>2005 → 2007 → 2015; ประทับเวลาบัตร = Proof of Existence; เข้ารหัสปกปิดตัวตน</td></tr>
<tr><td>Food Safety จีน</td><td>Traceability</td><td>IoT + Real Time + HACCP</td></tr>
<tr><td>Pharmaceutical อินเดีย</td><td>Traceability</td><td>ยาปลอม ระบุโรงงาน แจ้งเตือน</td></tr>
<tr><td>Industrial Hemp โคโลราโด</td><td>Traceability</td><td>ใบอนุญาต บังคับใช้กฎหมาย รายได้</td></tr>
<tr><td>Tax Compliance EU</td><td>Traceability</td><td>Invoice/Tax Refund แก้ไม่ได้ กันทุจริต</td></tr>
<tr><td>e-LG ไทย (BCI)</td><td>Traceability (กรณี 5)</td><td>3–7 วัน → ≤ 1 วัน; e-GP อนุมัติเร็วสุด 10 นาที; Host2Host → ระบบเดียว; 17 ธนาคาร 10 บริษัท</td></tr>
<tr><td>ตรวจคนเข้าเมือง (ไทย ตัวอย่างจำลอง)</td><td>บทที่ 3</td><td>Smart Contract ข้ามหน่วยงาน มี/ไม่มี; Read & Write = สำนักงาน ตม.</td></tr>
<tr><td>e-Referral (ไทย ต้นแบบ)</td><td>บทที่ 3</td><td>สพร. + สปสช. เขต 13; 4 Nodes; ฐานข้อมูลเสมือน G-Cloud; ข้อมูลสมมติ; Fabric 1.0</td></tr>
</tbody></table></div>`
},
{
  id: "s-success", title: "6. ปัจจัยความสำเร็จ / วิสัยทัศน์ / โครงสร้าง",
  html: `
<ul>
<li><b>ปัจจัยสำเร็จภาครัฐ 5 ด้าน (บทที่ 2):</b> National Blockchain Council (เนเธอร์แลนด์ >20 หน่วยงาน; BCI ไทย 2019 6 ธนาคาร; UAE GBC 2016) · Ecosystem (ดูไบ) · Governance (กฎหมายสหรัฐฯ 5 กลุ่ม) · Standards (ISO/TC 307 7 หมวด) · Capacity Building (27 มหาวิทยาลัย)</li>
<li><b>ดูไบ:</b> 3 เป้าหมาย Government Efficiency / Industries Creation / International Leadership; 7 โครงการ (สุขภาพ เพชร ที่ดิน ตัวตน พินัยกรรม แต้มท่องเที่ยว นำเข้า-ส่งออก)</li>
<li><b>วิสัยทัศน์ไทย 4 ประการ:</b> Government Integration · Smart Operation · Citizen-centric Services · Driven Transformation</li>
<li><b>เทคโนโลยี 9 กลุ่ม:</b> VR/AR, Advanced GIS, Big Data, Smart Machine/AI, Open Any Data, Cyber Security, Cloud, IoT, Blockchain/DLT</li>
<li><b>ตารางที่ 3:</b> ยุทธศาสตร์ 1–4 รวม 17 ขีดความสามารถ (ไม่มีแถวยุทธศาสตร์ที่ 5)</li>
<li><b>องค์ประกอบบูรณาการ 4:</b> Access Control Application · Local Database · Services/Microservices · Blockchain Cluster</li>
<li><b>ปัจจัยต่อยอด e-Referral 4:</b> Health Data Standard · Cooperation (HIS) · IT Infrastructure (Storage, Hospital Interface, การสื่อสาร) · Human Resource (ผู้บริหาร, Sys Admin, Operators, Auditors)</li>
</ul>`
},
{
  id: "s-numbers", title: "7. ตัวเลขที่มีความหมาย (ตามหนังสือ)",
  html: `
<div class="table-wrap"><table><thead><tr><th>ตัวเลข</th><th>ความหมาย</th></tr></thead><tbody>
<tr><td>2008 / 2009 / 1994</td><td>เสนอ Blockchain (Nakamoto) / เริ่มแลกเปลี่ยนเงินดิจิทัล / Smart Contract (Szabo)</td></tr>
<tr><td>4, 4, 7, 3, 6</td><td>ขั้นตอน / องค์ประกอบ / ส่วนของ Block / คุณลักษณะ / คำถามเลือกใช้</td></tr>
<tr><td>2016 Blocks (~2 สัปดาห์)</td><td>รอบปรับ Difficulty</td></tr>
<tr><td>32 ไบต์</td><td>ขนาด Merkle Root ในตัวอย่าง Bitcoin</td></tr>
<tr><td>3f+1</td><td>จำนวน Validator ของ PBFT</td></tr>
<tr><td>0.025%, 474 ล้าน, +59%</td><td>WEF 2015: สัดส่วนต่อ GDP โลก, การลงทุน 2015</td></tr>
<tr><td>>30, 22%, 42%</td><td>ประเทศที่ใช้, CIO วางแผน, On the Radar</td></tr>
<tr><td>1.5 แสน–10 ล้านคน</td><td>พลังงาน Public Blockchain เทียบเมือง</td></tr>
<tr><td>3–7 วัน / ≤ 1 วัน / 10 นาที</td><td>LG กระดาษ / e-LG / อนุมัติบน e-GP</td></tr>
<tr><td>17 ธนาคาร + 10 บริษัท; 6 ธนาคาร</td><td>ผู้ใช้ e-LG; ผู้ร่วมลงทุน BCI</td></tr>
<tr><td>500,000 ฉบับ / 1.35 ล้านล้านบาท</td><td>LG ต่อปี / วงเงินรวม</td></tr>
<tr><td>7 หมวด ISO/TC 307; 5 กลุ่มกฎหมายสหรัฐฯ; 27 มหาวิทยาลัย</td><td>มาตรฐาน / Governance / Capacity</td></tr>
<tr><td>17 ขีดความสามารถ, 9 เทคโนโลยี, 4 Nodes, 13 แฟ้ม, 8 REST API, 5 กลุ่ม API Server</td><td>บทที่ 3</td></tr>
</tbody></table></div>`
},
{
  id: "s-confuse", title: "8. จุดที่มักสับสน",
  html: `
<ul>
<li>Node ไม่อยู่ใน 4 องค์ประกอบ (Block, Chain, Consensus, Validation) แต่เป็นโครงสร้างพื้นฐานสำคัญ</li>
<li>แก้ Block หนึ่ง → Hash ของ Block ถัดไป “ไม่เปลี่ยนเอง” แต่ลิงก์ไม่ตรง ต้องทำ PoW ใหม่ทุก Block</li>
<li>Hash ≠ การเข้ารหัส ≠ ลายเซ็นดิจิทัล; Previous Hash “เปรียบได้กับ” ลายเซ็น</li>
<li>Nonce ≠ Hash; Target ต่ำ → Difficulty สูง</li>
<li>Validation (ตรวจถูกต้อง) vs Consensus (ตกลงยอมรับร่วม) — หนังสือหน้า 24 และ 36 เขียนความสัมพันธ์ไม่ตรงกัน</li>
<li>Transparency ≠ เปิดข้อมูลส่วนบุคคล; PII ไม่ควรขึ้นเชนแม้เข้ารหัส</li>
<li>Immutability ป้องกันการแก้บันทึก ≠ รับรองว่าข้อมูลที่ใส่ครั้งแรกจริง (Oracle ต้องเชื่อถือได้)</li>
<li>“เขียน” = เพิ่มรายการใหม่; เพิกถอนสิทธิ์ ≠ ลบประวัติ</li>
<li>e-LG (บริการจริง บทที่ 2) ≠ e-Referral (ต้นแบบ ข้อมูลสมมติ บทที่ 3)</li>
<li>REST API 8 ตัว (อัตโนมัติ) ≠ API Server 5 กลุ่ม (Middle Tier)</li>
<li>ApproveRequest (ผู้ป่วยอนุญาต) ≠ Approve (รพ. ปลายทางรับส่งต่อ)</li>
<li>ปัจจัยสำเร็จภาครัฐ 5 ด้าน (บทที่ 2) ≠ ปัจจัยต่อยอด e-Referral 4 ด้าน (บทที่ 3)</li>
</ul>`
}
];
