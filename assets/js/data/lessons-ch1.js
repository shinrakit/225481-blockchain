/* lessons-ch1.js — บทเรียนบทที่ 1 (เรียบเรียงใหม่จากหนังสือ ไม่ได้คัดลอกคำต่อคำ) */
BC.addTopics(1, [
{
  id: "ch1-intro",
  title: "Blockchain คืออะไร และเริ่มต้นจากที่ใด",
  pages: [19, 21],
  refs: [ { pages: [13], heading: "อภิธานศัพท์: Blockchain" }, { pages: [19, 21], heading: "เทคโนโลยี Blockchain" } ],
  objectives: [
    "อธิบายความหมายของ Blockchain ตามหนังสือได้ด้วยคำของตัวเอง",
    "บอกได้ว่า Blockchain อาศัยหลักการ 2 อย่างใดเพื่อสร้างความน่าเชื่อถือ",
    "อธิบายได้ว่าทำไมระบบจึงไม่ต้องมีตัวกลางคอยเก็บรายการธุรกรรม"
  ],
  body: `
<h3>คำอธิบาย</h3>
<p>หนังสือนิยาม <b>Blockchain</b> ว่าเป็นเทคโนโลยีการจัดเก็บข้อมูลแบบ <b>Shared Database</b> (ฐานข้อมูลที่แชร์ร่วมกัน) หรือที่รู้จักกันในชื่อ <b>Distributed Ledger Technology (DLT)</b> เป็นรูปแบบการบันทึกที่รับประกันว่าข้อมูลที่บันทึกไปแล้วจะไม่ถูกเปลี่ยนแปลงหรือแก้ไข และ <b>ผู้ใช้ทุกคนเห็นข้อมูลชุดเดียวกัน</b></p>
<p>กลไกความน่าเชื่อถือเกิดจากการใช้ 2 สิ่งร่วมกัน คือ <b>Cryptography</b> (วิทยาการเข้ารหัส/การทำ Hash) และ <b>Distributed Computing</b> (การประมวลผลแบบกระจายหลายเครื่อง)</p>
<h3>จุดเริ่มต้น</h3>
<p>แนวคิดเกิดขึ้นครั้งแรกในปี <b>2008</b> จากเอกสาร <i>Bitcoin: A Peer-to-Peer Electronic Cash System</i> ของ <b>Satoshi Nakamoto</b> ซึ่งเสนอ Platform สำหรับแลกเปลี่ยนเงินดิจิทัลชื่อ <b>Bitcoin</b> อย่างปลอดภัย โดย<b>ไม่จำเป็นต้องมีคนกลาง</b> เช่น ธนาคาร ต่อมาผู้เชี่ยวชาญยอมรับว่าเทคโนโลยีนี้นำไปใช้ได้กว้างกว่าการเงิน รวมถึงภาครัฐ</p>
<h3>ทำไมจึงไม่ต้องมีตัวกลาง (เหตุและผล)</h3>
<ol class="flow">
  <li><b>ทุกข้อมูลเชื่อมโยงกันทั้งระบบ</b> และเมื่อมีธุรกรรมใหม่ต้องประกาศให้ทุกเครื่องรับรู้</li>
  <li>ธุรกรรมต้อง<b>ผ่านการตรวจสอบ (Consensus) จากทั้งเครือข่าย</b>ก่อน จึงบันทึกลง Block ได้</li>
  <li>ข้อมูลทั้งหมดถูก<b>กระจายไปเก็บที่เครื่องสมาชิกทุกคน</b></li>
  <li>ถ้ามีคนสร้างธุรกรรมปลอม ข้อมูลจะ<b>ขัดแย้งกับสำเนาของสมาชิกอื่น</b> ระบบจึงไม่อนุญาต</li>
  <li>เฉพาะรายการที่<b>ทุกคนยอมรับ</b>จึงถูกบันทึก และบันทึกแล้ว<b>แก้ย้อนหลังไม่ได้</b> → ความน่าเชื่อถือสูง</li>
</ol>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> นึกถึงสมุดบัญชีที่ทุกคนในกลุ่มมีสำเนาเหมือนกัน ถ้าใครแอบเขียนรายการเพิ่มในสมุดตัวเอง สมุดของคนอื่นจะไม่ตรงกับเล่มนั้นทันที จึงไม่มีใครยอมรับรายการนั้น</aside>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> “แก้ไขย้อนหลังไม่ได้” หมายถึงการปลอมแปลงบันทึกเดิมทำได้ยากและถูกตรวจพบ ไม่ได้หมายความว่าข้อมูลที่ใส่เข้าไปครั้งแรกเป็นความจริงเสมอ</aside>`,
  confusions: [
    "DLT/Shared Database คือชื่อเรียกรูปแบบการจัดเก็บ ไม่ใช่ “ฐานข้อมูลรวมศูนย์” ที่มีเจ้าของคนเดียว",
    "ปี 2008 + Satoshi Nakamoto = จุดเริ่มต้น Blockchain/Bitcoin ส่วนปี 1994 + Nick Szabo = แนวคิด Smart Contract (หน้า 53)",
    "Cryptocurrency เริ่มแลกเปลี่ยนจริงในปี ค.ศ. 2009 (หน้า 51) ต่างจากปีที่เสนอแนวคิด (2008)"
  ],
  recall: [
    { q: "Blockchain อาศัยหลักการ 2 อย่างใดในการสร้างกลไกความน่าเชื่อถือ", a: "Cryptography และ Distributed Computing (หน้า 13, 19)" },
    { q: "ถ้ามีผู้พยายามสร้างธุรกรรมปลอม ทำไมระบบจึงไม่ยอมรับ", a: "เพราะข้อมูลปลอมจะขัดแย้งกับสำเนาในเครื่องสมาชิกอื่นที่ต้องมีข้อมูลเหมือนกันทั้งหมด และต้องผ่านการตรวจสอบจากทั้งเครือข่ายก่อนบันทึก (หน้า 21)" }
  ],
  summary: [
    "Blockchain = Shared Database / DLT ทุกคนเห็นข้อมูลชุดเดียวกัน บันทึกแล้วแก้ย้อนหลังไม่ได้",
    "ความน่าเชื่อถือ = Cryptography + Distributed Computing",
    "เริ่ม 2008 โดย Satoshi Nakamoto (Bitcoin) ไม่ต้องมีคนกลาง"
  ]
},
{
  id: "ch1-systems",
  title: "รูปแบบระบบ Centralised, Decentralised, Distributed และบัญชีแบบกระจาย",
  pages: [19, 22],
  refs: [ { pages: [19], heading: "รูปภาพที่ 1: ระบบแบบ Centralised, Decentralised และ Distributed", figureOrTable: "รูปภาพที่ 1" }, { pages: [20], heading: "รูปภาพที่ 2: การเชื่อมโยงข้อมูลของเทคโนโลยี Blockchain", figureOrTable: "รูปภาพที่ 2" }, { pages: [22], heading: "หลักการทำงานของเทคโนโลยี Blockchain" } ],
  objectives: [
    "แยกความแตกต่างของระบบ 3 รูปแบบในรูปภาพที่ 1 ได้",
    "เปรียบเทียบบัญชีแบบรวมศูนย์ (Centralised Ledger) กับบัญชีแบบกระจาย (Distributed Ledger)"
  ],
  body: `
<h3>ระบบ 3 รูปแบบ (รูปภาพที่ 1 ปรับปรุงจาก Baran, 1964)</h3>
<div class="diagram-row" role="img" aria-label="แผนภาพเปรียบเทียบระบบสามแบบ">
  <figure class="mini-net"><svg viewBox="0 0 120 120" aria-hidden="true"><g class="edge"><line x1="60" y1="60" x2="20" y2="20"/><line x1="60" y1="60" x2="100" y2="20"/><line x1="60" y1="60" x2="20" y2="100"/><line x1="60" y1="60" x2="100" y2="100"/><line x1="60" y1="60" x2="60" y2="12"/><line x1="60" y1="60" x2="60" y2="108"/></g><circle class="hub" cx="60" cy="60" r="11"/><g class="node"><circle cx="20" cy="20" r="6"/><circle cx="100" cy="20" r="6"/><circle cx="20" cy="100" r="6"/><circle cx="100" cy="100" r="6"/><circle cx="60" cy="12" r="6"/><circle cx="60" cy="108" r="6"/></g></svg><figcaption><b>Centralised</b><br>ทุกเครื่องผูกกับศูนย์กลางเดียว</figcaption></figure>
  <figure class="mini-net"><svg viewBox="0 0 120 120" aria-hidden="true"><g class="edge"><line x1="35" y1="40" x2="85" y2="40"/><line x1="35" y1="40" x2="60" y2="85"/><line x1="85" y1="40" x2="60" y2="85"/><line x1="35" y1="40" x2="10" y2="15"/><line x1="35" y1="40" x2="10" y2="60"/><line x1="85" y1="40" x2="110" y2="15"/><line x1="85" y1="40" x2="110" y2="60"/><line x1="60" y1="85" x2="40" y2="110"/><line x1="60" y1="85" x2="80" y2="110"/></g><g class="hub"><circle cx="35" cy="40" r="9"/><circle cx="85" cy="40" r="9"/><circle cx="60" cy="85" r="9"/></g><g class="node"><circle cx="10" cy="15" r="5"/><circle cx="10" cy="60" r="5"/><circle cx="110" cy="15" r="5"/><circle cx="110" cy="60" r="5"/><circle cx="40" cy="110" r="5"/><circle cx="80" cy="110" r="5"/></g></svg><figcaption><b>Decentralised</b><br>มีศูนย์ย่อยหลายจุด</figcaption></figure>
  <figure class="mini-net"><svg viewBox="0 0 120 120" aria-hidden="true"><g class="edge"><line x1="20" y1="20" x2="60" y2="15"/><line x1="60" y1="15" x2="100" y2="20"/><line x1="20" y1="20" x2="25" y2="60"/><line x1="60" y1="15" x2="60" y2="60"/><line x1="100" y1="20" x2="95" y2="60"/><line x1="25" y1="60" x2="60" y2="60"/><line x1="60" y1="60" x2="95" y2="60"/><line x1="25" y1="60" x2="20" y2="100"/><line x1="60" y1="60" x2="60" y2="105"/><line x1="95" y1="60" x2="100" y2="100"/><line x1="20" y1="100" x2="60" y2="105"/><line x1="60" y1="105" x2="100" y2="100"/></g><g class="node"><circle cx="20" cy="20" r="6"/><circle cx="60" cy="15" r="6"/><circle cx="100" cy="20" r="6"/><circle cx="25" cy="60" r="6"/><circle cx="60" cy="60" r="6"/><circle cx="95" cy="60" r="6"/><circle cx="20" cy="100" r="6"/><circle cx="60" cy="105" r="6"/><circle cx="100" cy="100" r="6"/></g></svg><figcaption><b>Distributed</b><br>ทุกเครื่องเชื่อมกันเอง ไม่มีศูนย์กลาง</figcaption></figure>
</div>
<p>หนังสือใช้ภาพนี้ประกอบการอธิบายว่า Blockchain ทำงานแบบ <b>กระจาย (Distributed)</b> คือไม่มีเครื่องใดเป็นศูนย์กลางหรือเครื่องแม่ข่าย ไม่ถูกควบคุมโดยคนเพียงคนเดียว (หน้า 22)</p>
<h3>บัญชีรวมศูนย์ vs บัญชีแบบกระจาย (รูปภาพที่ 2)</h3>
<div class="table-wrap"><table>
<thead><tr><th>ประเด็น</th><th>Centralised Ledger</th><th>Distributed Ledger (Blockchain)</th></tr></thead>
<tbody>
<tr><td>ผู้เก็บบัญชี</td><td>ตัวกลางรายเดียว</td><td>ทุก Node มีสำเนาฐานข้อมูล</td></tr>
<tr><td>เมื่อมีธุรกรรมใหม่</td><td>แจ้งตัวกลาง</td><td>ประกาศให้ทุกเครื่องรับรู้ แล้วตรวจสอบ (Consensus) ก่อนบันทึก</td></tr>
<tr><td>การอัปเดต</td><td>ตัวกลางแก้ไข</td><td>ทุก Node อัปเดตอัตโนมัติ สำเนาต้องถูกต้องตรงกัน</td></tr>
<tr><td>การปลอมรายการ</td><td>ขึ้นกับการควบคุมของตัวกลาง</td><td>ขัดแย้งกับสำเนาของสมาชิกอื่น จึงไม่ถูกยอมรับ</td></tr>
</tbody></table></div>
<aside class="note note-book"><strong>จากหนังสือ</strong> การทำงานของ Blockchain อาศัยการจัดเก็บแบบกระจายศูนย์ (Distributed Ledger Technology) ทุกข้อมูลเชื่อมโยงกันทั้งระบบ และเมื่อมีธุรกรรมใหม่ต้องประกาศบอกทุกเครื่อง (หน้า 20)</aside>`,
  confusions: [
    "Decentralised ยังมีศูนย์ย่อยหลายศูนย์ ส่วน Distributed ไม่มีศูนย์กลาง ทุกเครื่องเชื่อมกันเอง",
    "“กระจาย” ไม่ได้แปลว่าใครก็แก้ข้อมูลในเครื่องตัวเองแล้วมีผล — สำเนาต้องตรงกับคนอื่นและผ่าน Consensus"
  ],
  recall: [
    { q: "ในระบบบัญชีแบบกระจาย เมื่อมีธุรกรรมใหม่จะเกิดอะไรขึ้นก่อนบันทึกลง Block", a: "ประกาศให้ทุกเครื่องรับรู้ แล้วต้องผ่านการตรวจสอบ (Consensus) จากทั้งเครือข่ายก่อน (หน้า 20–21)" }
  ],
  summary: [
    "Centralised = ศูนย์เดียว; Decentralised = หลายศูนย์ย่อย; Distributed = ไม่มีศูนย์กลาง",
    "Blockchain = Distributed Ledger ทุก Node มีสำเนา อัปเดตอัตโนมัติ และต้องตรงกัน"
  ]
},
{
  id: "ch1-node-ledger",
  title: "Node, Ledger และ Chain",
  pages: [17, 33],
  refs: [ { pages: [17], heading: "อภิธานศัพท์: Ledger, Node" }, { pages: [22], heading: "เชิงอรรถ 1: Node" }, { pages: [33], heading: "Chain" } ],
  objectives: [
    "อธิบายความหมายของ Node และจำแนกประเภทของ Node ตามหนังสือ",
    "อธิบายว่า Ledger และ Chain ช่วยให้ระบบกู้ข้อมูลได้อย่างไร"
  ],
  body: `
<h3>Node</h3>
<p><b>Node</b> คืออุปกรณ์ในเครือข่าย Blockchain เช่น คอมพิวเตอร์ โทรศัพท์ หรืออุปกรณ์อื่นที่<b>เชื่อมต่ออินเทอร์เน็ตและประมวลผลได้</b> เป็นโครงสร้างพื้นฐานสำคัญในการกระจายและเชื่อมโยงเครือข่ายให้ระบบทำงานได้</p>
<div class="table-wrap"><table>
<thead><tr><th>ประเภท Node (ตามหนังสือ)</th><th>หน้าที่</th></tr></thead>
<tbody>
<tr><td><b>Full Node</b> และ <b>Light Node</b></td><td>ทำหน้าที่<b>จัดเก็บสำเนาข้อมูลเท่านั้น</b></td></tr>
<tr><td><b>Consensus Node</b></td><td>ทำหน้าที่<b>ตรวจสอบความถูกต้องเท่านั้น</b></td></tr>
</tbody></table></div>
<p>ในบทที่ 3 (หน้า 143) หน่วยงานที่เข้าร่วมเครือข่ายบูรณาการต้องมี Node ในรูปแบบ Light Node หรือ Full Node</p>
<h3>Ledger</h3>
<p><b>Ledger</b> คือบัญชีประวัติการทำธุรกรรม ซึ่งถูกบันทึกและ<b>ทำสำเนาแจกจ่ายให้ทุก Node</b> ในเครือข่าย</p>
<h3>Chain</h3>
<p><b>Chain</b> คือหลักการจดจำทุกธุรกรรมของทุกคนในระบบ แล้วจัดทำเป็นสำเนาบัญชี Ledger แจกจ่ายให้ทุก Node เพื่อให้ทุกคนรู้ว่ามีธุรกรรมอะไรเกิดขึ้นบ้าง<b>ตั้งแต่เปิดระบบ</b></p>
<aside class="note note-book"><strong>จากหนังสือ (เหตุและผล)</strong> แม้ Node ใด Node หนึ่งเสียหาย ก็สามารถยืนยันหรือกู้ข้อมูล Ledger จาก Node อื่นกลับมาอัปเดตให้ทั้งระบบได้เหมือนเดิม (หน้า 33)</aside>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> หน้า 25 นับองค์ประกอบ 4 อย่างเป็น Block, Chain, Consensus, Validation โดยไม่มี Node — เป็นการจัดหมวดของหนังสือ ไม่ได้แปลว่า Node ไม่สำคัญ เพราะหน้า 17 และ 22 เรียก Node ว่าโครงสร้างพื้นฐานที่สำคัญ</aside>`,
  confusions: [
    "Full/Light Node = เก็บสำเนา; Consensus Node = ตรวจสอบความถูกต้อง",
    "Ledger คือบัญชี/ประวัติธุรกรรม ส่วน Node คืออุปกรณ์ที่ถือสำเนา Ledger"
  ],
  recall: [
    { q: "หนังสือแบ่ง Node ออกเป็นกี่กลุ่ม อะไรบ้าง", a: "2 กลุ่ม: Node ที่เก็บสำเนาข้อมูลเท่านั้น (Full Node, Light Node) และ Node ที่ตรวจสอบความถูกต้องเท่านั้น (Consensus Node) (หน้า 17, 22)" },
    { q: "ถ้า Node หนึ่งเสียหาย ระบบจะทำอย่างไร", a: "กู้ข้อมูล Ledger จาก Node อื่นกลับมาอัปเดตให้เหมือนเดิม (หน้า 33)" }
  ],
  summary: [
    "Node = อุปกรณ์ที่ต่ออินเทอร์เน็ตและประมวลผลได้",
    "Full/Light Node เก็บสำเนา; Consensus Node ตรวจความถูกต้อง",
    "Ledger ถูกสำเนาให้ทุก Node → กู้คืนจาก Node อื่นได้"
  ]
},
{
  id: "ch1-workflow",
  title: "หลักการทำงาน 4 ขั้นตอน: Create → Broadcast → Validation → Add to Chain",
  pages: [22, 24],
  refs: [ { pages: [22, 23], heading: "หลักการทำงานของเทคโนโลยี Blockchain" }, { pages: [23, 24], heading: "รูปภาพที่ 3: หลักการทำงานของเทคโนโลยี Blockchain", figureOrTable: "รูปภาพที่ 3" } ],
  objectives: [
    "เรียงลำดับ 4 ขั้นตอนหลักและอธิบายสิ่งที่เกิดขึ้นในแต่ละขั้น",
    "อธิบายว่าทำไมแพลตฟอร์มจริงอาจมีขั้นตอนต่างไป แต่ต้องมี 4 ขั้นนี้"
  ],
  body: `
<p>ฐานข้อมูลถูกแชร์ให้ทุก Node ไม่มีเครื่องใดเป็นศูนย์กลาง ทุก Node ได้รับสำเนาและอัปเดตอัตโนมัติเมื่อมีข้อมูลใหม่ การบรรจุข้อมูลลง Block อาศัย Cryptography และ Consensus จากสมาชิก โดยแต่ละเครือข่ายกำหนดกฎเกณฑ์ตรวจสอบที่เรียกว่า <b>Consensus Protocol</b> หรือ <b>Consensus Mechanism</b></p>
<h3>แผนภาพลำดับ (รูปภาพที่ 3)</h3>
<ol class="flow flow-steps">
  <li><span class="step-tag">ขั้นที่ 1</span><b>CREATE</b> — สร้าง Block ที่บรรจุคำสั่งขอทำรายการธุรกรรม <span class="muted">(ตัวอย่างในภาพ: A ต้องการโอนเงินให้ B → ธุรกรรมถูกแทนด้วย “block” ออนไลน์)</span></li>
  <li><span class="step-tag">ขั้นที่ 2</span><b>BROADCAST</b> — กระจาย Block ใหม่ให้ทุก Node และบันทึกรายการลง Ledger ของทุก Node เพื่ออัปเดตว่ามี Block ใหม่</li>
  <li><span class="step-tag">ขั้นที่ 3</span><b>VALIDATION</b> — Node อื่น ๆ ยืนยันและตรวจสอบข้อมูลของ Block ว่าถูกต้องตามเงื่อนไข (หนังสือหน้า 24 ระบุว่ากระบวนการ Consensus ถือเป็นส่วนหนึ่งของ Validation)</li>
  <li><span class="step-tag">ขั้นที่ 4</span><b>ADD TO CHAIN</b> — นำ Block มาเรียงต่อจาก Block ก่อนหน้า ได้บันทึกที่ลบไม่ได้และโปร่งใส <span class="muted">(ในภาพ: เงินจึงย้ายจาก A ไป B)</span></li>
</ol>
<aside class="note note-book"><strong>จากหนังสือ</strong> การออกแบบระบบจริงอาจมีขั้นตอนแตกต่างไปตามผู้ผลิตหรือ Platform แต่<b>อย่างน้อยต้องมี 4 ขั้นตอนหลักนี้</b> ซึ่งเป็นหัวใจของการทำงาน Blockchain (หน้า 24)</aside>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> หน้า 24 บอกว่า Consensus เป็นส่วนหนึ่งของ Validation แต่หน้า 36 กลับเขียนว่า Validation เป็นส่วนหนึ่งของ Consensus แบบ Proof-of-Work ถ้อยคำสองจุดนี้ไปคนละทิศ จึงควรจำ “บทบาท” แทน: Validation = ตรวจว่าถูกต้องตามเงื่อนไข; Consensus = สมาชิกเห็นชอบและยอมรับร่วมกันว่าจะบันทึก</aside>`,
  confusions: [
    "ชื่อขั้นตอนต้องเป็น Create, Broadcast, Validation, Add to Chain — Start/End เป็นจุดเริ่ม/จบของแผนภาพ ไม่ใช่ขั้นตอน",
    "Broadcast มาก่อน Validation: กระจายให้ทุก Node รู้ก่อน แล้ว Node อื่นจึงตรวจสอบ"
  ],
  recall: [
    { q: "เรียงขั้นตอนหลัก 4 ขั้นของ Blockchain", a: "Create → Broadcast → Validation → Add to Chain (หน้า 23–24)" },
    { q: "ใครเป็นผู้ตรวจสอบในขั้น Validation", a: "Node อื่น ๆ ในระบบ ตรวจว่าข้อมูลของ Block ถูกต้องตามเงื่อนไข (หน้า 24)" }
  ],
  summary: [
    "Create (สร้าง Block คำขอ) → Broadcast (กระจาย/ลง Ledger ทุก Node) → Validation (Node อื่นตรวจ) → Add to Chain (ต่อท้าย Block ก่อนหน้า)",
    "แพลตฟอร์มอาจต่างกัน แต่อย่างน้อยต้องมี 4 ขั้นนี้"
  ]
},
{
  id: "ch1-components",
  title: "องค์ประกอบ 4 อย่างของ Blockchain และการเชื่อม Block ถึง Genesis Block",
  pages: [25, 26],
  refs: [ { pages: [25], heading: "รูปภาพที่ 4: องค์ประกอบของเทคโนโลยี Blockchain", figureOrTable: "รูปภาพที่ 4" }, { pages: [26], heading: "รูปภาพที่ 5: โครงสร้างการเชื่อมโยง Block", figureOrTable: "รูปภาพที่ 5" } ],
  objectives: [
    "ระบุองค์ประกอบ 4 อย่างตามการจัดหมวดของหนังสือ",
    "อธิบายว่าการเชื่อม Block ด้วย Hash ทำให้ตรวจสอบย้อนกลับได้อย่างไร"
  ],
  body: `
<h3>องค์ประกอบ 4 อย่าง (รูปภาพที่ 4)</h3>
<div class="chips"><span class="chip">1) Block</span><span class="chip">2) Chain</span><span class="chip">3) Consensus</span><span class="chip">4) Validation</span></div>
<div class="table-wrap"><table>
<thead><tr><th>องค์ประกอบ</th><th>บทบาทโดยย่อ</th><th>อ่านต่อ</th></tr></thead>
<tbody>
<tr><td>Block</td><td>ชุดบรรจุข้อมูล (Header + Data)</td><td><a href="#topic/ch1-block">โครงสร้าง Block</a></td></tr>
<tr><td>Chain</td><td>จดจำทุกธุรกรรม ทำสำเนา Ledger ให้ทุก Node</td><td><a href="#topic/ch1-node-ledger">Node, Ledger, Chain</a></td></tr>
<tr><td>Consensus</td><td>ข้อตกลง/ความเห็นชอบร่วมกันของสมาชิก</td><td><a href="#topic/ch1-consensus">Consensus</a></td></tr>
<tr><td>Validation</td><td>การตรวจสอบความถูกต้องทั้งระบบและทุก Node</td><td><a href="#topic/ch1-validation">Validation</a></td></tr>
</tbody></table></div>
<h3>การเชื่อม Block (รูปภาพที่ 5)</h3>
<div class="chain-diagram" role="img" aria-label="Block01 ถึง Block03 แต่ละ Block เก็บ Hash ของ Header ก่อนหน้า">
  <div class="blk"><div class="blk-h">Block01 Header</div><div>Hash(Previous Block Header)</div><div>Timestamp</div><div>Nonce</div><div>Hash of Block Data</div><div class="blk-d">Block Data (Transaction List)</div></div>
  <div class="arrow" aria-hidden="true">→</div>
  <div class="blk"><div class="blk-h">Block02 Header</div><div>Hash(Block01 Header)</div><div>Timestamp</div><div>Nonce</div><div>Hash of Block Data</div><div class="blk-d">Block Data</div></div>
  <div class="arrow" aria-hidden="true">→</div>
  <div class="blk"><div class="blk-h">Block03 Header</div><div>Hash(Block02 Header)</div><div>Timestamp</div><div>Nonce</div><div>Hash of Block Data</div><div class="blk-d">Block Data</div></div>
</div>
<p>แต่ละ Block เชื่อมไปยัง Block ก่อนหน้าด้วยค่า Hash ของ Block ก่อนหน้าเสมอ และเรียงต่อกันเป็น Chain ทำให้<b>ยากต่อการปลอมแปลงแก้ไข</b> และ<b>ตรวจสอบความถูกต้องได้ทุก Block ตลอดทั้ง Chain ย้อนกลับไปจนถึง Block เริ่มต้น (Genesis Block)</b></p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> Node ไม่อยู่ในรายการ 4 องค์ประกอบของหน้า 25 แต่ไม่ได้แปลว่า Node ไม่สำคัญต่อเครือข่าย (หน้า 17, 22)</aside>`,
  confusions: [
    "องค์ประกอบ 4 อย่าง ≠ 4 ขั้นตอนการทำงาน: องค์ประกอบคือ Block, Chain, Consensus, Validation ส่วนขั้นตอนคือ Create, Broadcast, Validation, Add to Chain (Validation อยู่ทั้งสองรายการ)",
    "Genesis Block = Block เริ่มต้นของ Chain ไม่ใช่ Merkle Root"
  ],
  recall: [
    { q: "องค์ประกอบ 4 อย่างตามหนังสือหน้า 25 คืออะไร", a: "Block, Chain, Consensus, Validation" },
    { q: "การตรวจสอบย้อนกลับไปได้ไกลถึง Block ใด", a: "Block เริ่มต้น หรือ Genesis Block (หน้า 25)" }
  ],
  summary: [
    "องค์ประกอบ = Block, Chain, Consensus, Validation",
    "Block เชื่อมด้วย Hash ของ Block ก่อนหน้า → ตรวจย้อนถึง Genesis Block ได้"
  ]
},
{
  id: "ch1-block",
  title: "โครงสร้าง Block: Header, Data และข้อมูล 7 ส่วน",
  pages: [26, 28],
  refs: [ { pages: [13], heading: "อภิธานศัพท์: Block, Previous Hash, Current Hash" }, { pages: [26], heading: "Block คือ ชุดบรรจุข้อมูล" }, { pages: [27, 28], heading: "รูปภาพที่ 6: โครงสร้างภายใน Block ของ Bitcoin", figureOrTable: "รูปภาพที่ 6" } ],
  objectives: [
    "แยก Block Header กับ Block Data และบอกสิ่งที่อยู่ในแต่ละส่วน",
    "อธิบายข้อมูล 7 ส่วนของ Block ตามตัวอย่าง Bitcoin",
    "แยก Previous Hash กับ Current Hash"
  ],
  body: `
<p><b>Block</b> คือชุดบรรจุข้อมูล แบ่งเป็น 2 ส่วน:</p>
<div class="table-wrap"><table>
<thead><tr><th>ส่วน</th><th>ใช้ทำอะไร</th><th>ตัวอย่าง</th></tr></thead>
<tbody>
<tr><td><b>Block Header</b></td><td>บอกให้ผู้อื่นทราบว่าภายในบรรจุอะไร เก็บข้อมูลประจำ Block</td><td>หมายเลข Block, Nonce, Previous Hash, Current Hash</td></tr>
<tr><td><b>Block Data</b></td><td>บรรจุข้อมูลที่ต้องการเก็บ</td><td>ข้อมูลจำนวนเงิน การโอนเงิน ประวัติการรักษาพยาบาล ธุรกรรมต่าง ๆ</td></tr>
</tbody></table></div>
<h3>ข้อมูล 7 ส่วนของ Block (ตามตัวอย่างโครงสร้าง Bitcoin รูปภาพที่ 6)</h3>
<div class="table-wrap"><table>
<thead><tr><th>#</th><th>ส่วน</th><th>ความหมายตามหนังสือ</th></tr></thead>
<tbody>
<tr><td>1</td><td>หมายเลข Block</td><td>เลขจำนวนเต็มเรียง 1, 2, 3 … บอกลำดับก่อนหลังและการอยู่ติดกัน</td></tr>
<tr><td>2</td><td>Timestamp</td><td>เวลาที่ Block ถูกสร้าง</td></tr>
<tr><td>3</td><td>Nonce</td><td>ค่าที่ใช้ค้นหา Hash ของ Block ตามกฎ (Proof-of-Work) — แสดงให้คนอื่นเห็นว่าได้ “ทำงาน” ตามกฎแล้ว</td></tr>
<tr><td>4</td><td>Difficulty Target</td><td>ระดับความยากที่ใช้ในการค้นหา Nonce — Hash ที่ได้ต้องต่ำกว่าค่านี้</td></tr>
<tr><td>5</td><td>Previous Hash</td><td>Current Hash ของ Block ก่อนหน้า เก็บไว้ใน Block ถัดไปเสมอ</td></tr>
<tr><td>6</td><td>Data</td><td>ข้อมูลที่บันทึก เช่น Transaction ต่าง ๆ</td></tr>
<tr><td>7</td><td>Merkle Root</td><td>Hash ของ Transactions ทั้งหมดใน Block ด้วย Hash Tree ได้ค่า 32 ไบต์</td></tr>
</tbody></table></div>
<h3>Previous Hash กับ Current Hash</h3>
<ul>
<li><b>Current Hash</b> = Hash ของข้อมูลทั้งหมดใน Block นั้น รวมถึง Previous Hash ที่อยู่ใน Block นั้นด้วย</li>
<li><b>Previous Hash</b> = Current Hash ของ Block ก่อนหน้า ถ้าข้อมูลใน Block ก่อนหน้าถูกแก้ ค่า Hash จะไม่เท่ากัน</li>
</ul>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> หนังสือ “เปรียบ” Previous Hash ว่าเป็นเหมือน Digital Signature ของ Block ก่อนหน้า (หน้า 13, 28) — เป็นการอุปมาเพื่อให้เห็นว่าเป็นค่าที่บ่งบอกตัวตนของ Block ก่อนหน้า ไม่ได้แปลว่า Hash คือลายเซ็นดิจิทัล นอกจากนี้แต่ละแพลตฟอร์มอาจใช้ชื่อเรียกต่างกัน</aside>`,
  confusions: [
    "Previous Hash อยู่ใน Block ถัดไปเสมอ (เก็บค่าของ Block ก่อนหน้า) ไม่ได้อยู่ใน Block ก่อนหน้าเอง",
    "Merkle Root สรุป Transactions ภายใน Block ตัวเอง ส่วน Previous Hash เชื่อมไป Block ก่อนหน้า",
    "Timestamp = เวลาสร้าง Block; หมายเลข Block = ลำดับ"
  ],
  recall: [
    { q: "Block แบ่งออกเป็นกี่ส่วน แต่ละส่วนทำอะไร", a: "2 ส่วน: Block Header บอกว่าภายในบรรจุอะไร/ข้อมูลประจำ Block และ Block Data บรรจุข้อมูลจริง (หน้า 26)" },
    { q: "ข้อมูล 7 ส่วนของ Block มีอะไรบ้าง", a: "หมายเลข Block, Timestamp, Nonce, Difficulty Target, Previous Hash, Data, Merkle Root (หน้า 27–28)" }
  ],
  summary: [
    "Block = Header (ข้อมูลประจำ Block) + Data (ธุรกรรม)",
    "7 ส่วน: หมายเลข, Timestamp, Nonce, Difficulty Target, Previous Hash, Data, Merkle Root",
    "Previous Hash = Current Hash ของ Block ก่อนหน้า (อุปมาว่าเหมือนลายเซ็น)"
  ]
},
{
  id: "ch1-hash",
  title: "Hash Function และเหตุที่การแก้ข้อมูลย้อนหลังทำได้ยาก",
  pages: [13, 32],
  refs: [ { pages: [14], heading: "อภิธานศัพท์: Hash Value, Proof-of-Work" }, { pages: [28], heading: "เชิงอรรถ 3: Hash Value" }, { pages: [32], heading: "Proof-of-Work และความปลอดภัยของการบันทึก" }, { pages: [45], heading: "ความถูกต้องเที่ยงตรงของข้อมูล (Data Integrity)" } ],
  objectives: [
    "บอกคุณสมบัติของ Hash Function ตามหนังสือ 3 ข้อ",
    "อธิบายลำดับเหตุการณ์เมื่อมีผู้แก้ข้อมูลใน Block ที่บันทึกแล้วได้ถูกต้อง",
    "แยก Hash ออกจากการเข้ารหัสและลายเซ็นดิจิทัล"
  ],
  body: `
<h3>Hash Function</h3>
<p>การทำ Hash Function คือนำข้อมูลต้นฉบับผ่านกระบวนการทางคณิตศาสตร์ ได้ผลลัพธ์เรียกว่า <b>Hash Value</b> มีคุณสมบัติ:</p>
<ol>
<li><b>ฟังก์ชันทางเดียว</b> — ย้อนกลับเพื่อให้ได้ข้อมูลเดิมไม่ได้</li>
<li>ผลลัพธ์มี<b>ลักษณะเฉพาะของข้อมูล</b> — ข้อมูลเปลี่ยน Hash ก็เปลี่ยน</li>
<li><b>ความยาวคงที่เสมอ</b> ไม่ว่าข้อมูลต้นฉบับยาวเท่าใด</li>
</ol>
<h3>ลำดับเหตุการณ์เมื่อมีผู้แก้ข้อมูลใน Block ที่บันทึกแล้ว</h3>
<ol class="flow flow-steps">
<li>ข้อมูลใน Block <i>n</i> ถูกแก้ → ถ้าคำนวณ Hash ใหม่จะได้<b>ค่าไม่เท่าเดิม</b> (เพราะ Hash มีลักษณะเฉพาะของข้อมูล)</li>
<li>Block <i>n+1</i> เก็บ Previous Hash ค่าเดิมไว้ → <b>ไม่ตรงกับค่าใหม่</b> ลิงก์ของ Chain จึงขาด ตรวจพบได้</li>
<li>ถ้าผู้แก้อยากให้เชนดูสอดคล้อง ต้อง<b>คำนวณ/ทำ Proof-of-Work ใหม่ให้ทุก Block ถัด ๆ ไป</b> และต้องทำ<b>พร้อมกันในทุก Block</b> ภายในเวลาจำกัด — หนังสือบอกว่ายากและแทบเป็นไปไม่ได้ (หน้า 14, 32)</li>
<li>Node อื่นยังถือสำเนาเดิม Node ที่ข้อมูลต่างไป<b>สร้าง Consensus กับ Node อื่นไม่ได้</b> และถูกแยกออกจาก Chain หลักในที่สุด (หน้า 45)</li>
</ol>
<aside class="note note-book"><strong>จากหนังสือ</strong> เป้าหมายของ Proof-of-Work คือป้องกันการโจมตีโดย<b>เพิ่มต้นทุนทางเศรษฐศาสตร์ให้ผู้โจมตี</b>จนไม่คุ้มค่าที่จะโจมตี (หน้า 14)</aside>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> ระบบไม่ได้ “แก้ Hash ของ Block ถัดไปให้อัตโนมัติ” และเครือข่ายไม่ได้ยอมรับข้อมูลที่ถูกแก้ทันที — ความไม่ตรงกันของ Hash คือสิ่งที่ทำให้ตรวจพบการแก้ไข (ดูหมายเหตุแนวข้อสอบเดิมข้อ 24)</aside>
<aside class="note note-caution"><strong>Hash ≠ การเข้ารหัส ≠ ลายเซ็นดิจิทัล</strong> Hash ย้อนกลับไม่ได้ จึงไม่มี “กุญแจถอดรหัส” Hash เพื่อกู้เอกสาร ส่วนการเข้ารหัสด้วย Public/Private Key และ Digital Signature เป็นกลไกอื่นที่หนังสือกล่าวถึงในบริบทเช่น Self-Sovereign Identity (หน้า 84–85) และ e-Referral (หน้า 164)</aside>`,
  confusions: [
    "Hash ย้อนกลับไม่ได้ และความยาวคงที่ — ไม่ใช่ “ความยาวเท่ากับข้อมูล”",
    "การแก้ Block หนึ่งไม่ทำให้ Hash ของ Block อื่นเปลี่ยนเอง แต่ทำให้ลิงก์ไม่ตรง",
    "Previous Hash “เปรียบได้กับ” ลายเซ็น — เป็นอุปมา"
  ],
  recall: [
    { q: "คุณสมบัติของ Hash Function ตามหนังสือมีอะไรบ้าง", a: "เป็นฟังก์ชันทางเดียว ผลลัพธ์มีลักษณะเฉพาะของข้อมูล และมีความยาวคงที่เสมอ ย้อนกลับเป็นข้อมูลเดิมไม่ได้ (หน้า 14, 28)" },
    { q: "ทำไมการแก้ข้อมูลใน Block เก่าจึงต้องทำ PoW ใหม่หลาย Block", a: "เพราะ Hash ของ Block ที่แก้เปลี่ยน ทำให้ไม่ตรงกับ Previous Hash ใน Block ถัดไป ถ้าจะให้ทั้งเชนสอดคล้องต้องทำ PoW ใหม่ทุก Block ถัดไปพร้อมกัน (หน้า 14, 32)" }
  ],
  summary: [
    "Hash: ทางเดียว, เฉพาะตัว, ยาวคงที่",
    "แก้ Block → Hash ใหม่ไม่ตรง Previous Hash ถัดไป → ต้องทำ PoW ใหม่ทุก Block พร้อมกัน → แทบเป็นไปไม่ได้ และ Node อื่นไม่ยอมรับ"
  ]
},
{
  id: "ch1-nonce",
  title: "Nonce, Target และ Difficulty",
  pages: [27, 30],
  refs: [ { pages: [13], heading: "อภิธานศัพท์: Nonce" }, { pages: [29], heading: "วิธีการคำนวณหาค่า Nonce" }, { pages: [30], heading: "รูปภาพที่ 7 และสูตร Difficulty", figureOrTable: "รูปภาพที่ 7" } ],
  objectives: [
    "อธิบายว่า Nonce คืออะไร และการหา Nonce ทำอย่างไร",
    "แยก Nonce, Hash และ Target ออกจากกัน",
    "อธิบายการปรับ Difficulty ทุก 2016 Blocks ตามหนังสือ"
  ],
  body: `
<h3>การหา Nonce</h3>
<p>กฎของระบบ (Proof-of-Work) คือ <b>“จงทำให้ Hash ของ Block_Header มีค่า &lt;= Target”</b> โดยวาง <b>Nonce</b> ไว้ใน Block Header แล้ว<b>วนเปลี่ยนค่าไปเรื่อย ๆ</b> จนกว่า Hash ที่คำนวณได้จะต่ำกว่า Target</p>
<ul>
<li>ใครหาได้ก่อน<b>เป็นผู้ชนะ</b> คือผู้ได้ยืนยันความถูกต้องของ Block นั้น</li>
<li>Hash ที่ได้จากการหา Nonce สำเร็จจะ<b>ใช้เป็น Current Hash</b> ของ Block นั้นทันที</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>คำ</th><th>บทบาท</th></tr></thead>
<tbody>
<tr><td><b>Nonce</b></td><td>ค่าที่<b>ลองเปลี่ยน</b> (หนังสือใช้คำว่า “ถูกสุ่มขึ้นมา”) เพื่อค้นหา Hash ที่ผ่านกฎ</td></tr>
<tr><td><b>Hash</b></td><td><b>ผลลัพธ์</b>ที่คำนวณจาก Block Header (ซึ่งมี Nonce อยู่ด้วย)</td></tr>
<tr><td><b>Target</b></td><td><b>เกณฑ์</b>ที่ Hash ต้องต่ำกว่าหรือเท่ากับ</td></tr>
</tbody></table></div>
<h3>สูตร Difficulty (หน้า 30)</h3>
<div class="formula">Difficulty = <span class="frac"><span>0x00ffff000…000</span><span>CurrentTarget</span></span></div>
<p>จากสูตร Difficulty เป็น<b>ค่าคงที่หารด้วย Target ปัจจุบัน</b> ดังนั้นถ้า Target ต่ำลง (หาค่า Hash ที่ผ่านเกณฑ์ได้ยากขึ้น) ค่า Difficulty จะสูงขึ้น</p>
<h3>การปรับทุก 2016 Blocks</h3>
<ul>
<li>คำนวณค่าใหม่ทุก <b>2016 Blocks (ประมาณ 2 สัปดาห์)</b></li>
<li>ถ้า 2016 Blocks ที่ผ่านมา<b>ใช้เวลาเกิน 2 สัปดาห์</b> → <b>ลด Difficulty</b></li>
<li>ถ้า<b>ใช้เวลาน้อยกว่า 2 สัปดาห์</b> → <b>เพิ่ม Difficulty</b></li>
</ul>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> ถ้าเครื่องในเครือข่ายเร็วขึ้นจนสร้าง 2016 Blocks เสร็จใน 10 วัน รอบถัดไประบบจะปรับ Difficulty ขึ้นเพื่อให้กลับสู่จังหวะประมาณ 2 สัปดาห์</aside>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> หน้า 13 และ 29 เขียนว่า “Target หรืออีกชื่อหนึ่งคือ Difficulty” แต่สูตรหน้า 30 แสดงว่าสองค่านี้<b>สัมพันธ์แบบผกผัน</b> จึงไม่ควรสรุปว่าเพิ่ม Target = เพิ่ม Difficulty และหน้า 36 เขียนว่า “ค่า Nonce ซึ่งก็คือค่า Hash” ซึ่งเป็นถ้อยคำที่ปนกัน — Nonce คือค่าที่ลองเปลี่ยน ส่วน Hash คือผลลัพธ์</aside>
<h3>ตัวอย่าง Block Information ของ Bitcoin (รูปภาพที่ 7)</h3>
<p>ภาพแสดงข้อมูลแบบ JSON มีฟิลด์ <code>ver</code>, <code>prev_block</code>, <code>merkle_root</code>, <code>time</code>, <code>bits</code> และ <code>nonce</code> (วงไว้) เพื่อให้เห็นว่า Nonce อยู่ใน Header ร่วมกับ Previous Hash และ Merkle Root</p>`,
  confusions: [
    "Nonce ≠ Hash: Nonce คืออินพุตที่เปลี่ยน, Hash คือผลลัพธ์",
    "Target ต่ำ → Difficulty สูง (ตามสูตร) ไม่ใช่สองชื่อของค่าเดียวกันในเชิงตัวเลข",
    "ช้ากว่า 2 สัปดาห์ → ลด Difficulty; เร็วกว่า → เพิ่ม Difficulty"
  ],
  recall: [
    { q: "กฎการหา Nonce ตามหนังสือเขียนว่าอย่างไร", a: "จงทำให้ Hash ของ Block_Header มีค่า <= Target โดยเปลี่ยน Nonce ไปเรื่อย ๆ (หน้า 29)" },
    { q: "ถ้า 2016 Blocks ล่าสุดใช้เวลาเกิน 2 สัปดาห์ ระบบจะทำอย่างไร", a: "ลดค่า Difficulty ลง (หน้า 30)" }
  ],
  summary: [
    "Hash(Block Header) <= Target; เปลี่ยน Nonce จนผ่าน → ผู้หาได้ก่อนยืนยัน Block; Hash นั้น = Current Hash",
    "Difficulty = ค่าคงที่ / CurrentTarget",
    "ปรับทุก 2016 Blocks (~2 สัปดาห์)"
  ]
},
{
  id: "ch1-merkle",
  title: "Merkle Root และ Hash Tree",
  pages: [28, 32],
  refs: [ { pages: [16], heading: "อภิธานศัพท์: Merkle Root" }, { pages: [28], heading: "ข้อ 7 Merkle Root" }, { pages: [31, 32], heading: "รูปภาพที่ 8: หลักการ Hash ข้อมูลชุดใหญ่โดยใช้รูปแบบ Hash Tree", figureOrTable: "รูปภาพที่ 8" } ],
  objectives: [
    "อธิบายว่า Merkle Root คือค่าใดใน Hash Tree",
    "อธิบายว่าทำไม Hash Tree เหมาะกับ Block ที่รวมหลายธุรกรรม"
  ],
  body: `
<p><b>Merkle Root</b> คือค่า Hash ของ Transactions ทั้งหมดใน Block โดยใช้วิธี Hash ข้อมูลชุดใหญ่แบบ <b>Hash Tree</b> จน Transactions ทั้งหมดกลายเป็น Hash Value <b>ขนาด 32 ไบต์</b> (ในตัวอย่าง Bitcoin) และแสดงอยู่ใน Block Information</p>
<h3>รูปภาพที่ 8: Hash Tree</h3>
<div class="tree" role="img" aria-label="Hash Tree: Data block 8 ชิ้น ถูก Hash เป็นคู่ขึ้นไปจนเหลือ Top hash">
  <div class="tree-row"><span class="tn top">Top hash (Merkle Root)</span></div>
  <div class="tree-row"><span class="tn">Hash 0</span><span class="tn">Hash 1</span></div>
  <div class="tree-row"><span class="tn">Hash 0-0</span><span class="tn">Hash 0-1</span><span class="tn">Hash 1-0</span><span class="tn">Hash 1-1</span></div>
  <div class="tree-row small"><span class="tn">0-0-0</span><span class="tn">0-0-1</span><span class="tn">0-1-0</span><span class="tn">0-1-1</span><span class="tn">1-0-0</span><span class="tn">1-0-1</span><span class="tn">1-1-0</span><span class="tn">1-1-1</span></div>
  <div class="tree-row small"><span class="tn data">Data 000</span><span class="tn data">001</span><span class="tn data">002</span><span class="tn data">003</span><span class="tn data">004</span><span class="tn data">005</span><span class="tn data">006</span><span class="tn data">007</span></div>
</div>
<p>Hash แต่ละชิ้นข้อมูล → นำคู่ Hash มา Hash รวมกันเป็นชั้นบน → ทำซ้ำจนเหลือ<b>ค่าบนสุดค่าเดียว = Merkle Root</b></p>
<h3>ใช้เมื่อใด (เหตุและผล)</h3>
<p>Hash Tree ใช้กับการออกแบบ Block ที่<b>รวบ Transaction ที่เกิดขึ้นในเวลาไล่เลี่ยกันไว้ใน Block เดียวกัน</b> ได้ค่าสรุปเดียวที่แทนธุรกรรมทั้งชุด</p>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> ถ้าธุรกรรมใดธุรกรรมหนึ่งใน 8 รายการถูกแก้ Hash ของรายการนั้นจะเปลี่ยน แล้วส่งผลให้ Hash ชั้นบนที่คำนวณใหม่และ Merkle Root ใหม่ไม่ตรงกับค่าที่บันทึกไว้</aside>`,
  confusions: [
    "Merkle Root ≠ Genesis Block และ ≠ Hash ของ Block ก่อนหน้า",
    "32 ไบต์เป็นขนาดในตัวอย่าง Bitcoin ที่หนังสือยก"
  ],
  recall: [
    { q: "Merkle Root คือค่าใดใน Hash Tree", a: "ค่า Hash ที่อยู่บนสุดของ Hash Tree ซึ่งสรุป Transactions ทั้งหมดใน Block (หน้า 32)" }
  ],
  summary: [
    "Merkle Root = Top hash ของ Hash Tree ของทุก Transaction ใน Block (32 ไบต์ในตัวอย่าง Bitcoin)",
    "ใช้เมื่อรวมหลายธุรกรรมที่เกิดใกล้กันไว้ใน Block เดียว"
  ]
},
{
  id: "ch1-consensus",
  title: "Consensus: PoW, PoS, PoA และกลไกอื่น",
  pages: [33, 35],
  refs: [ { pages: [14, 15], heading: "อภิธานศัพท์: Consensus, Proof-of-Work, Proof-of-Stake, Proof-of-Authority" }, { pages: [33, 35], heading: "Consensus" } ],
  objectives: [
    "อธิบายความหมายของ Consensus",
    "เปรียบเทียบ PoW, PoS และ PoA ว่าใช้อะไรสร้างความเชื่อถือ ใครเป็นผู้ตรวจ และได้อะไรตอบแทน",
    "บอกได้ว่าการเลือกกลไกขึ้นกับอะไร"
  ],
  body: `
<p><b>Consensus</b> คือการกำหนดข้อตกลงและความเห็นชอบร่วมกันระหว่างสมาชิกในเครือข่าย สมาชิกต้องยอมรับกฎระเบียบร่วมกัน ด้วยกลไกควบคุมความถูกต้องของข้อมูลในทุก Node ผ่านอัลกอริทึม เพื่อให้ข้อมูล<b>ถูกต้อง เป็นชุดเดียวกัน และมีลำดับการจัดเก็บตรงกัน</b></p>
<div class="table-wrap"><table>
<thead><tr><th>กลไก</th><th>สร้างความเชื่อถือด้วย</th><th>ผู้ตรวจ/ผู้ได้สิทธิ์</th><th>สิ่งตอบแทน/ลักษณะเด่น</th><th>ตัวอย่างในหนังสือ</th></tr></thead>
<tbody>
<tr><td><b>Proof-of-Work (PoW)</b></td><td>แก้ปัญหาคณิตศาสตร์ซับซ้อนที่ใช้เวลา</td><td>Nodes ที่เรียกว่า Miner</td><td>Miner ได้ค่าตอบแทน; การแก้ข้อมูลย้อนหลังต้องแก้ Block ถัดไปด้วย → ต้นทุนผู้โจมตีสูง</td><td>Bitcoin (Public) หน้า 34</td></tr>
<tr><td><b>Proof-of-Stake (PoS)</b></td><td>การวาง “สินทรัพย์” ของผู้ตรวจสอบ (Validator)</td><td>ผู้วางสินทรัพย์มากมีโอกาสสูงได้สิทธิ์เขียน Block ถัดไป</td><td>ได้ค่าธรรมเนียมการดำเนินงานเป็นรางวัล</td><td>Ethereum (Public) ตามตัวอย่างหน้า 34</td></tr>
<tr><td><b>Proof-of-Authority (PoA)</b></td><td>ข้อตกลงกำหนดสิทธิ์ผู้ใช้/องค์กรที่เชื่อถือได้ ระบุชื่ออย่างเป็นทางการ</td><td>บัญชีที่ได้รับอนุมัติ = Validator</td><td>หมุนเวียนสิทธิ์เพื่อกระจายความรับผิดชอบ สร้างความสัมพันธ์ระหว่างหน่วยงานอย่างเป็นธรรม</td><td>—</td></tr>
<tr><td><b>PBFT</b></td><td>หลักการเสียงข้างมาก</td><td>Validator 3f+1 Node</td><td>ทนต่อผู้ตรวจที่ทำงานไม่ได้ f ราย</td><td>HyperLedger (Private) หน้า 35 — <a href="#topic/ch1-pbft">ดูหัวข้อ PBFT</a></td></tr>
</tbody></table></div>
<p>นอกจากนี้ยังมีกลไกอื่น เช่น Ledger Based, Proprietary Distributed Ledger Consensus, Federated Consensus, N2N, Delegated Proof of Stake และ Round Robin <b>การเลือกใช้ขึ้นกับความเหมาะสมของ Blockchain แต่ละประเภทและแนวทางการออกแบบระบบ</b> (หน้า 35)</p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> ตัวอย่างแพลตฟอร์มเป็นบริบทของหนังสือฉบับนี้ และไม่สอดคล้องกันทุกจุด: หน้า 34 ยก Ethereum เป็นตัวอย่าง PoS แต่ตารางที่ 1 หน้า 42 ใส่ Ethereum ในคอลัมน์ Permissionless ที่ใช้ Proof of Work ควรจำ “หลักการของกลไก” เป็นหลัก</aside>`,
  confusions: [
    "PoW = งานคำนวณ; PoS = วางสินทรัพย์; PoA = สิทธิ์ของผู้ที่เชื่อถือได้ + หมุนเวียน; PBFT = เสียงข้างมาก 3f+1",
    "Miner เป็นคำของ PoW; Validator ใช้กับ PoS/PoA/PBFT",
    "Consensus ไม่ใช่การเข้ารหัส และไม่ใช่ Node"
  ],
  recall: [
    { q: "ใน PoS ใครมีโอกาสได้สิทธิ์เขียน Block ถัดไปสูง", a: "ผู้ตรวจสอบที่วางสินทรัพย์จำนวนมาก (หน้า 34)" },
    { q: "PoA กระจายความรับผิดชอบอย่างไร", a: "ใช้รูปแบบการหมุนเวียนสิทธิระหว่างผู้ตรวจสอบที่ได้รับอนุมัติ (หน้า 35)" }
  ],
  summary: [
    "Consensus = ความเห็นชอบร่วม ให้ทุก Node ถูกต้อง ชุดเดียวกัน ลำดับตรงกัน",
    "PoW งานคำนวณ (Miner) | PoS วางสินทรัพย์ | PoA ผู้มีสิทธิ์ที่เชื่อถือได้ หมุนเวียน | PBFT เสียงข้างมาก",
    "เลือกกลไกตามประเภทและการออกแบบ"
  ]
},
{
  id: "ch1-pbft",
  title: "PBFT และสูตร 3f+1",
  pages: [15, 35],
  refs: [ { pages: [15], heading: "อภิธานศัพท์: Practical Byzantine Fault Tolerance (PBFT)" }, { pages: [35], heading: "Practical Byzantine Fault Tolerance (PBFT)" } ],
  objectives: [
    "อธิบายความหมายของ f และ 3f+1",
    "คำนวณจำนวน Validator ขั้นต่ำ หรือจำนวน f สูงสุดจากจำนวน Node ได้"
  ],
  body: `
<p><b>Practical Byzantine Fault Tolerance (PBFT)</b> เป็นกระบวนการ Consensus ที่ใช้<b>หลักการเสียงข้างมาก</b> ต้องมีผู้ตรวจสอบ (Validator) ทั้งสิ้น <b>3f+1 Node</b> เพื่อรับประกันความถูกต้องของระบบ โดย <b>f คือจำนวนผู้ตรวจสอบที่ไม่สามารถทำงานได้ในขณะนั้น</b></p>
<h3>วิธีคิด</h3>
<div class="table-wrap"><table>
<thead><tr><th>ต้องการทนผู้ตรวจที่ทำงานไม่ได้ (f)</th><th>Validator ขั้นต่ำ = 3f+1</th></tr></thead>
<tbody>
<tr><td>f = 1</td><td>3(1)+1 = <b>4</b></td></tr>
<tr><td>f = 2</td><td>3(2)+1 = <b>7</b></td></tr>
<tr><td>f = 3</td><td>3(3)+1 = <b>10</b></td></tr>
</tbody></table></div>
<p><b>กลับทาง:</b> ถ้ามี N Node ค่า f สูงสุด = จำนวนเต็มที่มากที่สุดซึ่ง 3f+1 ≤ N เช่น N = 7 → f = 2; N = 9 → 3f+1 ≤ 9 → f ≤ 2.67 → f = 2</p>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> หน่วยงาน 5 แห่งตั้งเครือข่าย PBFT แห่งละ 1 Node: 3f+1 ≤ 5 → f = 1 หมายความว่าระบบยังรับประกันความถูกต้องได้ถ้ามีผู้ตรวจทำงานไม่ได้ 1 ราย</aside>
<aside class="note note-book"><strong>จากหนังสือ</strong> ยกตัวอย่าง HyperLedger ซึ่งเป็น Private Blockchain ใช้วิธีการยืนยันรายการแบบ PBFT (หน้า 35)</aside>`,
  confusions: [
    "f คือจำนวนผู้ตรวจที่ “ทำงานไม่ได้ในขณะนั้น” ไม่ใช่จำนวนผู้ตรวจทั้งหมด",
    "3f+1 คือจำนวนผู้ตรวจ “ทั้งสิ้น” ที่ต้องมี"
  ],
  recall: [
    { q: "ถ้าต้องการให้ระบบ PBFT ทนผู้ตรวจที่ทำงานไม่ได้ 2 ราย ต้องมี Validator อย่างน้อยกี่ Node", a: "3(2)+1 = 7 Node" },
    { q: "ระบบ PBFT ที่มี 10 Node ทน f ได้สูงสุดเท่าใด", a: "3f+1 ≤ 10 → f = 3" }
  ],
  summary: [
    "PBFT = เสียงข้างมาก ต้องมี Validator 3f+1",
    "f = จำนวนผู้ตรวจที่ทำงานไม่ได้ในขณะนั้น"
  ]
},
{
  id: "ch1-validation",
  title: "Validation: จุดประสงค์ 3 ประการ และสิ่งที่ตรวจ",
  pages: [24, 36],
  refs: [ { pages: [24], heading: "ขั้นตอนที่ 3 VALIDATION" }, { pages: [36], heading: "Validation" } ],
  objectives: [
    "บอกจุดประสงค์ 3 ประการของ Validation",
    "ยกตัวอย่างสิ่งที่ใช้ตรวจความถูกต้องของแต่ละ Block",
    "แยกบทบาทของ Validation กับ Consensus"
  ],
  body: `
<p><b>Validation</b> คือการตรวจสอบความถูกต้องแบบทบทวน<b>ทั้งระบบและทุก Node</b> เพื่อให้แน่ใจว่าไม่มีข้อผิดพลาดไม่ว่าจากส่วนใด</p>
<h3>จุดประสงค์ 3 ประการ</h3>
<ol>
<li>วิธีการในการ<b>ยอมรับ/ปฏิเสธ</b>รายการใน Block นั้น ๆ</li>
<li>วิธีการตรวจสอบที่<b>ทุกคนในระบบยอมรับร่วมกัน</b></li>
<li>วิธี<b>ตรวจสอบความถูกต้องของแต่ละ Block</b> เช่น
  <ul>
  <li><b>หมายเลข Block</b>: ตรวจ Block ก่อนหน้าที่ติดกันก่อนว่าถูกต้อง และเวลาที่ Block ถูกสร้างต้องมากกว่าเวลาของ Block ก่อนหน้า</li>
  <li><b>ค่า Nonce</b>: ตรวจผลที่ได้จาก Proof-of-Work</li>
  <li><b>Previous Hash และ Current Hash</b>: สถานะเริ่มต้นใน Block ต้องตรงกับสถานะสุดท้ายของ Block ก่อนหน้า</li>
  </ul></li>
</ol>
<p>ขั้นตอนตรวจอาจมากกว่านี้ตามการออกแบบการเก็บข้อมูลใน Block ของแต่ละค่าย เช่น หนังสือยกว่า<b>ค่าย Ethereum มีขั้นตอน Validation 5 ขั้นตอน</b>ที่สัมพันธ์กับการเก็บข้อมูลใน Block</p>
<h3>Validation กับ Consensus ต่างกันอย่างไร</h3>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Validation</th><th>Consensus</th></tr></thead>
<tbody>
<tr><td>คำถามหลัก</td><td>รายการ/Block นี้ “ถูกต้องตามเงื่อนไข” หรือไม่</td><td>สมาชิก “เห็นชอบร่วมกัน” ว่าจะบันทึกอะไร ลำดับใด</td></tr>
<tr><td>สิ่งที่ใช้</td><td>กฎตรวจ เช่น ลำดับเวลา Nonce Hash</td><td>อัลกอริทึม เช่น PoW, PoS, PoA, PBFT</td></tr>
</tbody></table></div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> หน้า 24 ว่า “Consensus ถือว่าเป็นส่วนหนึ่งของ Validation” แต่หน้า 36 ว่า Validation “คือส่วนหนึ่งของ Consensus ที่เรียกว่า Proof-of-Work” ทั้งสองทำงานเกี่ยวเนื่องกัน แต่ไม่ควรสรุปว่า Validation ทุกแพลตฟอร์มเท่ากับ PoW และหน้า 36 ยังเขียน “ค่า Nonce ซึ่งก็คือค่า Hash” ซึ่งควรแยกตามหัวข้อ Nonce</aside>`,
  confusions: [
    "Validation ตรวจความถูกต้อง; Consensus คือการตกลงยอมรับร่วม",
    "เวลาของ Block ใหม่ต้องมากกว่า Block ก่อนหน้า"
  ],
  recall: [
    { q: "จุดประสงค์ 3 ประการของ Validation คืออะไร", a: "วิธียอมรับ/ปฏิเสธรายการใน Block, วิธีตรวจที่ทุกคนยอมรับร่วมกัน, วิธีตรวจความถูกต้องของแต่ละ Block (หน้า 36)" }
  ],
  summary: [
    "Validation = ตรวจทบทวนทั้งระบบ/ทุก Node",
    "ตรวจ: หมายเลข/เวลา Block, Nonce, Previous/Current Hash",
    "Ethereum (ตามหนังสือ) มี 5 ขั้นตอน Validation"
  ]
},
{
  id: "ch1-types",
  title: "ประเภทของ Blockchain: Public, Private, Consortium",
  pages: [37, 40],
  refs: [ { pages: [15, 16], heading: "อภิธานศัพท์: Public/Private/Consortium Blockchain" }, { pages: [37, 40], heading: "ประเภทของ Blockchain (รูปภาพที่ 9–10)", figureOrTable: "รูปภาพที่ 9, 10" } ],
  objectives: [
    "จำแนก 3 ประเภทตามข้อกำหนดการเข้าร่วมเป็นสมาชิก",
    "เลือกประเภทให้เหมาะกับสถานการณ์และบอกเหตุผลได้"
  ],
  body: `
<p>หนังสือแบ่งเป็น 3 ประเภท<b>โดยพิจารณาจากข้อกำหนดในการเข้าร่วมเป็นสมาชิกของเครือข่าย</b></p>
<div class="table-wrap"><table>
<thead><tr><th></th><th>Public (Permissionless)</th><th>Private (Permissioned)</th><th>Consortium</th></tr></thead>
<tbody>
<tr><td>ใครเข้าได้</td><td>ทุกคน อ่านและทำธุรกรรมได้อิสระ ไม่ต้องขออนุญาต</td><td>เฉพาะผู้ได้รับอนุญาต ส่วนใหญ่ใช้ภายในองค์กร</td><td>เฉพาะกลุ่ม ต้องได้รับอนุญาตจากตัวแทนก่อน</td></tr>
<tr><td>การมองเห็นธุรกรรม</td><td>ทุกคนในเครือข่ายเห็นรายการธุรกรรม</td><td>จำกัดเฉพาะในเครือข่ายสมาชิก</td><td>ข้อมูลเป็นความลับ/ข้อมูลภายใน เปิดทั้งหมดต่อสาธารณะไม่ได้</td></tr>
<tr><td>ผู้กำหนดเกณฑ์</td><td>ธุรกรรมใหม่ต้องผ่าน Consensus จากสมาชิก</td><td>มี Node หลักตัดสินใจเลือกเกณฑ์ตรวจสอบ ผู้เข้าร่วมตกลงเปลี่ยนเกณฑ์ได้</td><td>ผสมแนวคิด Public และ Private</td></tr>
<tr><td>เหมาะกับ</td><td>ระบบเปิด</td><td>ข้อมูลลับ/ไม่ต้องการเผยแพร่ภายนอก; งานระหว่างองค์กรธุรกิจหรือองค์กรภาครัฐ</td><td>องค์กรธุรกิจเดียวกันที่แลกเปลี่ยนข้อมูลกันสม่ำเสมอ</td></tr>
<tr><td>ข้อพิจารณา</td><td>—</td><td>ต้องลงทุนโครงสร้างพื้นฐาน อุปกรณ์ เครือข่าย องค์ความรู้ และดูแลรักษา</td><td>—</td></tr>
<tr><td>ตัวอย่างในหนังสือ</td><td>Bitcoin, Ethereum</td><td>Hyperledger, Corda, Tendermint</td><td>เครือข่ายระหว่างธนาคาร เช่น Japanese Bank, R3CEV</td></tr>
</tbody></table></div>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> โรงพยาบาลรัฐหลายแห่งต้องการแชร์ข้อมูลการส่งต่อผู้ป่วยกันเอง โดยไม่เปิดให้คนทั่วไปเข้าร่วม — ลักษณะนี้ไม่ใช่ Public เพราะต้องจำกัดสมาชิกและข้อมูลเป็นความลับ (เทียบกับ e-Referral บทที่ 3 ที่ใช้ Hyperledger Fabric แบบ Permissioned)</aside>`,
  confusions: [
    "Permissionless = Public; Permissioned = Private (และกลุ่มที่ต้องขออนุญาต)",
    "Consortium ไม่ใช่ “เปิดให้ทุกคน” — ต้องได้รับอนุญาตจากตัวแทน",
    "หนังสือไม่ได้ใช้คำ Hybrid ในการแบ่งประเภท"
  ],
  recall: [
    { q: "เกณฑ์ที่หนังสือใช้แบ่งประเภท Blockchain คืออะไร", a: "ข้อกำหนดในการเข้าร่วมเป็นสมาชิกของเครือข่าย (หน้า 37)" },
    { q: "ทำไม Private Blockchain จึงเหมาะกับข้อมูลลับ", a: "เพราะเข้าได้เฉพาะผู้ได้รับอนุญาต ข้อมูลจำกัดในเครือข่ายสมาชิก และ Node หลักกำหนดเกณฑ์ได้ (หน้า 39)" }
  ],
  summary: [
    "Public = ทุกคน (Bitcoin, Ethereum)",
    "Private = ผู้ได้รับอนุญาต ภายในองค์กร (Hyperledger, Corda, Tendermint)",
    "Consortium = เฉพาะกลุ่มธุรกิจเดียวกัน (Japanese Bank, R3CEV)"
  ]
},
{
  id: "ch1-table1",
  title: "ตารางที่ 1: เปรียบเทียบคุณสมบัติ Blockchain แต่ละประเภท",
  pages: [41, 44],
  refs: [ { pages: [41, 44], heading: "ตารางที่ 1: ตารางเปรียบเทียบคุณสมบัติของเทคโนโลยี Blockchain ในแต่ละประเภท", figureOrTable: "ตารางที่ 1" } ],
  objectives: [
    "อ่านตารางที่ 1 แบบแยกแถวและคอลัมน์ได้",
    "ระบุแนวโน้มจากซ้ายไปขวา: การควบคุมรวมศูนย์ → กระจาย, สมาชิกคงที่ → เปลี่ยนได้, แก้ไขได้ → แก้ไขไม่ได้"
  ],
  body: `
<p>ตารางที่ 1 (ปรับปรุงจาก Zheng, Xie, Dai &amp; Wang, 2016) แบ่ง 4 คอลัมน์ ซึ่งละเอียดกว่าการแบ่ง 3 ประเภทในหน้า 37</p>
<div class="table-wrap wide"><table>
<thead><tr><th>คุณลักษณะ</th><th>Private Permissioned</th><th>Public Permissioned: Single Industry</th><th>Public Permissioned: Multi-Industry</th><th>Permissionless (Public)</th></tr></thead>
<tbody>
<tr><td>อำนาจ การควบคุม ความน่าเชื่อถือ</td><td>บริหารบัญชีภายในองค์กรเดียว (Centralized Trust)</td><td>มีประโยชน์อุตสาหกรรมเป็นสำคัญ เปิดใช้สาธารณะจำกัดภายในอุตสาหกรรม (Semi-Centralized Trust)</td><td>มีประโยชน์อุตสาหกรรมเป็นสำคัญ และเปิดใช้แบบสาธารณะ (Semi-Centralized Trust)</td><td>เครือข่ายกระจายศูนย์ ไม่มีระบบข้อมูลกลาง (Distributed Consensus)</td></tr>
<tr><td>บริบททางธุรกิจ</td><td>ภายในองค์กรเท่านั้น (Intra-Company)</td><td>ระหว่างบริษัท/ภายในอุตสาหกรรม (Inter-Company)</td><td>ระหว่างบริษัท/ข้ามอุตสาหกรรม (Inter-Company)</td><td>บริษัทและบุคคลทั่วไปในระบบนิเวศ (Inter-Entity)</td></tr>
<tr><td>สิทธิ์การเข้าถึง</td><td>วัตถุประสงค์เดียวของหนึ่งองค์กร</td><td>อุตสาหกรรมเดี่ยว</td><td>อุตสาหกรรม/วัตถุประสงค์หลายแบบ</td><td>ผู้เข้าร่วมหลายอุตสาหกรรม ผู้ศึกษาค้นคว้า และผู้ใช้งานหลายประเภท</td></tr>
<tr><td>การเป็นสมาชิก</td><td>Static</td><td>Static</td><td>Semi-Static</td><td>Fluid</td></tr>
<tr><td>ความรับผิดชอบ/สถานะทางกฎหมาย</td><td>ผู้รับผิดชอบตามกฎหมาย</td><td>ผู้รับผิดชอบตามกฎหมาย และอาจได้รับการควบคุม</td><td>ผู้รับผิดชอบตามกฎหมาย และอาจได้รับการควบคุม</td><td>จำกัด/ไม่มีกฎหมายรับรอง ผู้ใช้ไม่ได้รับการควบคุม</td></tr>
<tr><td>รูปแบบการนำไปใช้ (Deployment)</td><td>อาจแก้ไขได้</td><td>กึ่งแก้ไขได้</td><td>กึ่งแก้ไขได้</td><td>ส่วนใหญ่แก้ไขไม่ได้</td></tr>
<tr><td>การบันทึกความไม่เปลี่ยนแปลง (Record Immutability)</td><td>อาจแก้ไขได้</td><td>กึ่งแก้ไขได้</td><td>กึ่งแก้ไขได้</td><td>ส่วนใหญ่แก้ไขไม่ได้</td></tr>
<tr><td>Consensus Mechanism</td><td>PoS, Federated BFT Agreement, Proof of Authority, Proof of Identity</td><td>PoS, PBFT, Deposit-Based, Federated Byzantine Agreement</td><td>PoS, PBFT, Deposit-Based, Federated Byzantine Agreement</td><td>Proof of Work (Bitcoin, Ethereum, etc.)</td></tr>
</tbody></table></div>
<p class="muted">ตัวอย่างฝั่ง Permissioned ที่ตารางระบุ: Ethereum Kovan Testnet, POA Chain, R3 (Banks), EWF (Energy), B3i (Insurance), Corda</p>
<h3>ข้อดีและข้อเสีย (แถวสุดท้ายของตาราง)</h3>
<div class="table-wrap"><table>
<thead><tr><th></th><th>กลุ่ม Permissioned (3 คอลัมน์แรก)</th><th>Permissionless (Public)</th></tr></thead>
<tbody>
<tr><td>ข้อดี</td><td>รับรองความถูกต้อง/ความปลอดภัยด้วยสิทธิ์ผู้ใช้ที่ไว้วางใจได้; ปรับปรุงโปรโตคอลและเครือข่ายได้; ค่าใช้จ่ายจัดการเครือข่ายและการใช้งานร่วมกัน; การกำกับดูแลและบังคับใช้นโยบาย; การกำกับดูแลกฎระเบียบ; พัฒนามาตรฐานและการควบคุม; ทำงานเร็วขึ้น; ปกป้องข้อมูล สินค้า บริการ กลยุทธ์ให้มั่นคงปลอดภัย</td><td>ข้อมูลทั้งหมดเป็นข้อมูลสาธารณะ; ป้องกันการถูกโจมตี; ไม่มีศูนย์กลางควบคุม; ไม่แยกผู้ใช้ออกจากนักพัฒนา; ระบบนิเวศเติบโตผ่านเครือข่าย; Opensource; มีนักพัฒนาร่วมกันพัฒนา</td></tr>
<tr><td>ข้อเสีย</td><td>จุดเดียวของความล้มเหลว (Single Point of Failure); อาจเปิดแหล่งที่มาไม่ได้; ต้องเสริมรูปแบบธุรกิจและกระบวนการเดิม; ต้องดูแลระบบและมีค่าใช้จ่าย; ผู้จัดหาเป็นศูนย์ข้อมูลกลาง; ทรัพยากรบุคคลพัฒนาซอฟต์แวร์จำกัด; ต้องมีมติ/ข้อตกลงเป็นเอกฉันท์ขององค์กร</td><td>รองรับการขยายขนาดธุรกรรมได้ยาก ทำให้ล่าช้า; การกำกับดูแลซับซ้อน; มีผู้เกี่ยวข้องที่ไม่น่าเชื่อถือ; ศักยภาพในการตรวจสอบธุรกรรม (Miner); ศักยภาพบางประการที่อาจผิดกฎหมาย; ต้องมีสิ่งจูงใจทางการเงินเพื่อรักษาเครือข่าย</td></tr>
</tbody></table></div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> แถว Record Immutability ของ Private ระบุว่า “อาจแก้ไขได้” ขณะที่หน้า 45 กล่าวว่าข้อมูลบน Blockchain แก้ไม่ได้ — ให้เข้าใจว่าเครือข่ายที่ควบคุมโดยองค์กรเดียวมีอำนาจกำหนด/เปลี่ยนเกณฑ์ได้มากกว่า ความแข็งแรงของ Immutability จึงขึ้นกับประเภทเครือข่าย ไม่ได้แปลว่าผู้มีสิทธิ์เขียนลบประวัติได้ตามใจ</aside>`,
  confusions: [
    "Membership: Static → Static → Semi-Static → Fluid (จากซ้ายไปขวา)",
    "Single Point of Failure เป็นข้อเสียของกลุ่ม Permissioned ในตารางนี้ ส่วน Scalability เป็นข้อเสียของ Permissionless",
    "Permissionless ในตารางจับคู่กับ Proof of Work"
  ],
  recall: [
    { q: "การเป็นสมาชิกของ Permissionless (Public) ในตารางที่ 1 เป็นแบบใด", a: "Fluid (หน้า 42)" },
    { q: "ข้อเสียข้อแรกของ Public ในตารางที่ 1 คืออะไร", a: "ปัญหาความสามารถในการรองรับการปรับขยายขนาดธุรกรรม ทำให้ธุรกรรมล่าช้า (หน้า 44)" }
  ],
  summary: [
    "ซ้าย → ขวา: Centralized Trust → Distributed Consensus; Static → Fluid; อาจแก้ไขได้ → ส่วนใหญ่แก้ไม่ได้",
    "Permissioned: เร็ว ควบคุม/กำกับได้ แต่มีจุดล้มเหลวเดียว; Permissionless: เปิด ต้านการโจมตี แต่ขยายขนาดยาก กำกับยาก"
  ]
},
{
  id: "ch1-properties",
  title: "คุณลักษณะพื้นฐาน 3 ประการ: Integrity, Transparency, Availability",
  pages: [45, 46],
  refs: [ { pages: [45, 46], heading: "คุณลักษณะพื้นฐานที่สำคัญของเทคโนโลยี Blockchain" } ],
  objectives: [
    "อธิบายที่มาของคุณลักษณะ 3 ประการจากการออกแบบ Block + Hash + กระจายทุก Node",
    "จับคู่สถานการณ์กับคุณลักษณะที่เกี่ยวข้อง"
  ],
  body: `
<p>การเก็บข้อมูลเป็น Block เชื่อมด้วย Hash Function และกระจายให้ทุก Node เก็บ ทำให้เกิดคุณสมบัติสำคัญ 3 ประการ (Serrano, 2017)</p>
<div class="table-wrap"><table>
<thead><tr><th>คุณลักษณะ</th><th>เกิดจาก (เหตุ)</th><th>ผล</th></tr></thead>
<tbody>
<tr><td><b>ความถูกต้องเที่ยงตรงของข้อมูล (Data Integrity)</b></td><td>เชื่อม Block ปัจจุบันกับ Block ก่อนหน้าด้วย Hash + ทุก Node เก็บ</td><td>ข้อมูลที่บันทึกแล้วแก้ไขไม่ได้ (<b>Immutability</b>) ถ้ามีการแก้จะรู้ทันทีเพราะ Node นั้นต่างจาก Node อื่น สร้าง Consensus ไม่ได้ และถูกแยกออกจาก Chain หลัก</td></tr>
<tr><td><b>ความโปร่งใสในการเข้าถึงข้อมูล (Data Transparency)</b></td><td>ทุก Node เก็บข้อมูลเดียวกัน ไม่มีตัวกลางที่มีอำนาจผู้เดียว</td><td>เข้าถึงข้อมูลได้จาก Node ตัวเองทันที ไม่ต้องร้องขอจากตัวกลาง</td></tr>
<tr><td><b>ความสามารถในการทำงานต่อเนื่อง (Availability)</b></td><td>ทุก Node เก็บข้อมูลเดียวกัน</td><td>ทำงานแทนกันได้เมื่อมี Node ใช้งานไม่ได้ และระบบคัดลอกสำเนาให้ตรงกันเมื่อ Node กลับมา</td></tr>
</tbody></table></div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong>
<ul>
<li><b>Transparency ≠ เปิดเผยข้อมูลส่วนบุคคลให้ทุกคน</b> — หนังสือเองระบุว่าไม่ควรนำข้อมูลอ่อนไหว/PII ขึ้น Blockchain แม้เข้ารหัส (หน้า 47) และการเปิดข้อมูลภาครัฐต้องไม่ละเมิดความเป็นส่วนตัว (หน้า 71)</li>
<li><b>Integrity ป้องกันการแก้บันทึก</b> แต่ไม่ได้รับรองว่าข้อมูลที่ใส่ครั้งแรกถูกต้องตามความจริงเสมอ จึงต้องมีการตรวจสอบก่อนบันทึก และ Smart Contract อาจต้องอ้างอิงแหล่งข้อมูลภายนอกที่เชื่อถือได้ (Oracle หน้า 17)</li>
</ul></aside>`,
  confusions: [
    "Immutability อยู่ภายใต้ Data Integrity",
    "Availability เกี่ยวกับการทำงานแทนกันได้ ไม่ใช่ความเร็ว"
  ],
  recall: [
    { q: "Node ที่ข้อมูลถูกแก้จะเป็นอย่างไรตามหน้า 45", a: "มีข้อมูลต่างจาก Node อื่น สร้าง Consensus ไม่ได้ และถูกแยกออกจาก Chain หลักในที่สุด" },
    { q: "ถ้า Node หนึ่งล่ม ผู้ใช้ยังใช้บริการได้เพราะคุณลักษณะใด", a: "Availability — Node อื่นทำงานแทนได้ และระบบซิงก์สำเนาเมื่อ Node กลับมา (หน้า 46)" }
  ],
  summary: [
    "Integrity (Immutability) | Transparency (เข้าถึงจาก Node ตัวเอง) | Availability (Node ทำงานแทนกัน)",
    "โปร่งใส ≠ เปิดข้อมูลส่วนบุคคล; แก้ไม่ได้ ≠ ข้อมูลจริงเสมอ"
  ]
},
{
  id: "ch1-criteria",
  title: "เกณฑ์การพิจารณาเลือกใช้ Blockchain: 6 คำถาม",
  pages: [47, 47],
  refs: [ { pages: [47], heading: "รูปภาพที่ 11: กระบวนการตัดสินใจก่อนการนำเทคโนโลยี Blockchain มาใช้งาน", figureOrTable: "รูปภาพที่ 11" } ],
  objectives: [
    "เรียง 6 คำถามและบอกผลเมื่อคำตอบเป็น “ไม่ใช่” ในแต่ละข้อ",
    "ใช้เกณฑ์ตัดสินโจทย์สถานการณ์ได้พร้อมเหตุผล"
  ],
  body: `
<p>รูปภาพที่ 11 (ปรับปรุงจาก Yaga et al., 2018) เป็นผังตัดสินใจ: ตอบ <b>“ใช่”</b> แล้วไปคำถามถัดไป ถ้าตอบ <b>“ไม่ใช่”</b> ข้อใด จะได้ข้อสรุปของข้อนั้นทันที ถ้าใช่ครบทั้ง 6 ข้อ → <b>ควรใช้ Blockchain</b></p>
<ol class="decision">
<li><div class="dq">ต้องการแชร์ข้อมูลชุดเดียวกันให้ผู้เกี่ยวข้องทั้งระบบหรือไม่?</div><div class="dno">ไม่ใช่ → <b>ไม่จำเป็นต้องใช้</b> (Blockchain ช่วยให้ข้อมูลถูกต้องตรงกันและไม่ถูกแก้เมื่อเวลาผ่านไป)</div></li>
<li><div class="dq">การสร้างรายการข้อมูลมีผู้เกี่ยวข้องมากกว่า 1 รายหรือไม่?</div><div class="dno">ไม่ใช่ (สร้างโดยคน/องค์กรเดียว) → <b>ไม่จำเป็นต้องใช้</b> เพราะ Blockchain สร้างมาเพื่อแก้ปัญหาความไม่ไว้วางใจระหว่างกัน (Trustless)</div></li>
<li><div class="dq">ต้องการบันทึกรายการที่เปลี่ยนแปลง แก้ไข หรือลบไม่ได้ นอกจากเพิ่มรายการใหม่ (Immutability) หรือไม่?</div><div class="dno">ไม่ใช่ (ต้องอัปเดต/แก้ไขอยู่เสมอ) → <b>ไม่ควรใช้</b> เพราะข้อมูลบน Blockchain แก้ไม่ได้</div></li>
<li><div class="dq">ข้อมูลที่จะบันทึกต้องไม่เป็นข้อมูลอ่อนไหว/ข้อมูลที่ระบุตัวบุคคลได้ ใช่หรือไม่?</div><div class="dno">ไม่ใช่ (เป็นข้อมูลอ่อนไหว/PII) → <b>ไม่ควรใช้ แม้ข้อมูลจะถูกเข้ารหัสก็ตาม</b></div></li>
<li><div class="dq">ต้องการระบบที่สร้างความเชื่อใจระหว่างผู้สร้างข้อมูลโดยไม่ต้องมีคนกลางควบคุมหรือไม่?</div><div class="dno">ไม่ใช่ (เชื่อใจกันอยู่แล้ว) → <b>ไม่จำเป็นต้องใช้</b> เพราะ Blockchain ออกแบบมาแก้ปัญหาความไม่เชื่อใจกันโดยไม่ต้องมีคนกลาง</div></li>
<li><div class="dq">ต้องการระบบที่รับประกันว่าข้อมูลที่ผ่านการอนุมัติร่วมกันแล้วจะไม่ถูกปลอมแปลงหรือแก้ไขหรือไม่?</div><div class="dno">ไม่ใช่ (ไม่ต้องพิสูจน์ว่าเกิดอะไรกับข้อมูล/ข้อมูลถูกแก้หรือไม่ — Data Provenance) → <b>ไม่จำเป็นต้องใช้</b></div></li>
</ol>
<div class="callout-yes">ใช่ครบ 6 ข้อ → ควรใช้เทคโนโลยี Blockchain</div>
<aside class="note note-example"><strong>ตัวอย่างสมมติเพื่ออธิบาย</strong> หน่วยงานเดียวเก็บสถิติภายในที่ต้องแก้ตัวเลขทุกสัปดาห์ → ตกตั้งแต่ข้อ 2 (ผู้สร้างข้อมูลรายเดียว) และข้อ 3 (ต้องแก้บ่อย) จึงไม่จำเป็น/ไม่ควรใช้</aside>
<aside class="note note-caution"><strong>สังเกตคำ</strong> ข้อ 3 และ 4 ใช้คำว่า “ไม่ควรใช้” (ใช้แล้วเกิดปัญหา) ส่วนข้อ 1, 2, 5, 6 ใช้คำว่า “ไม่จำเป็นต้องใช้” (ใช้ไปก็ไม่ได้ประโยชน์ที่ Blockchain ออกแบบมา)</aside>`,
  confusions: [
    "ข้อ 4 ถามกลับด้าน: “ต้องไม่เป็นข้อมูลอ่อนไหว ใช่หรือไม่” — ถ้าเป็น PII คำตอบคือ “ไม่ใช่” → ไม่ควรใช้",
    "การเข้ารหัสไม่ทำให้ PII เหมาะจะขึ้น Blockchain ตามเกณฑ์นี้",
    "Trustless = แก้ปัญหาความไม่ไว้วางใจกัน ไม่ได้แปลว่าไม่มีความเชื่อถือ"
  ],
  recall: [
    { q: "ข้อมูลต้องแก้ไขบ่อย ควรใช้ Blockchain หรือไม่ เพราะอะไร", a: "ไม่ควรใช้ เพราะข้อมูลบน Blockchain แก้ไขไม่ได้ (คำถามข้อ 3 หน้า 47)" },
    { q: "ข้อมูลระบุตัวบุคคลที่เข้ารหัสแล้วควรขึ้น Blockchain หรือไม่", a: "ไม่ควร ถึงแม้ข้อมูลจะถูกเข้ารหัสก็ตาม (คำถามข้อ 4 หน้า 47)" }
  ],
  summary: [
    "1 แชร์ชุดเดียวกัน 2 ผู้สร้าง >1 ราย 3 ต้อง Immutability 4 ไม่ใช่ PII 5 ต้องการความเชื่อใจโดยไม่มีคนกลาง 6 ต้องรับประกันไม่ถูกปลอม (Provenance)",
    "ข้อ 3, 4 ตก → ไม่ควรใช้; ข้อ 1, 2, 5, 6 ตก → ไม่จำเป็น"
  ]
},
{
  id: "ch1-apps",
  title: "รูปแบบการประยุกต์ใช้: ภาพรวม, Cryptocurrency, Proof of Services, Proof of Existence",
  pages: [48, 52],
  refs: [ { pages: [48, 49], heading: "รูปแบบการประยุกต์ใช้เทคโนโลยี Blockchain (รูปภาพที่ 12)", figureOrTable: "รูปภาพที่ 12" }, { pages: [50], heading: "รูปภาพที่ 13: การจำแนกกลุ่ม Blockchain Application", figureOrTable: "รูปภาพที่ 13" }, { pages: [51, 52], heading: "เงินดิจิทัล / บริการพิสูจน์ทราบ" } ],
  objectives: [
    "สรุปภาพรวมสถานะการใช้งานตามข้อมูลที่หนังสืออ้าง",
    "แยกกลุ่ม Cryptocurrency กับ Proof of Services และอธิบาย Proof of Existence"
  ],
  body: `
<h3>ภาพรวม (ตามข้อมูลในหนังสือ)</h3>
<ul>
<li>World Economic Forum Survey (2015): มูลค่าธุรกรรมบน Blockchain รวม Bitcoin เพียง <b>0.025% ของ GDP โลก</b> (ประมาณสองหมื่นล้านเหรียญสหรัฐ เทียบ GDP โลก 80 ล้านล้านเหรียญ) แต่แนวโน้มจะโตก้าวกระโดดภายใน 10 ปี</li>
<li>ปี 2015 การลงทุนธุรกิจเกี่ยวกับ Blockchain สูงถึง <b>474 ล้านดอลลาร์สหรัฐ โตขึ้น 59%</b> จากปีก่อน</li>
<li>ขยายจากการเงินการธนาคารไปหลายภาคส่วน (รูปภาพที่ 12) เช่น Supply Chain ประกันภัย สุขภาพ การศึกษา เพลงออนไลน์ การออกเสียง ภาครัฐ ฯลฯ</li>
</ul>
<h3>4 กลุ่มของ Blockchain Application (รูปภาพที่ 13 ปรับปรุงจาก Umeh, 2016)</h3>
<p>จัดกลุ่มได้ 4 กลุ่ม เรียงตาม<b>ความซับซ้อนและเวลาในการพัฒนาที่เพิ่มขึ้น</b>:</p>
<div class="table-wrap"><table>
<thead><tr><th>กลุ่ม (ป้ายในภาพที่ 13)</th><th>ตัวอย่างงานในภาพ</th><th>ตัวอย่างระบบในภาพ</th></tr></thead>
<tbody>
<tr><td>1. Cryptocurrency (เงินดิจิทัล)</td><td>Transfers, Payments, Tips, Crowd Funding</td><td>Bitcoin, Coinbase</td></tr>
<tr><td>2. “Proof of” Services (บริการพิสูจน์ทราบ)</td><td>Identity, Ownership, Membership, Voting</td><td>OneName, Mine, Streamium, OpenBazaar, Swarm</td></tr>
<tr><td>3. Smart Contracts (สัญญาอัจฉริยะ)</td><td>Wagers, Bounties, Family trust, Escrows</td><td>(Ethereum) Mist, SmartContract, Secure Asset Exchange</td></tr>
<tr><td>4. Decentralised Autonomous Organizations (ระบบ/บริการอัตโนมัติ)</td><td>Transportation, Healthcare, Online Storage, Mesh Networks</td><td>Lo Zooz, Storj, MaidSafe, OpenGarden, Bitnation</td></tr>
</tbody></table></div>
<h3>เงินดิจิทัล (Cryptocurrency)</h3>
<p>สกุลเงินดิจิทัลที่มีมูลค่าเหมือนธนบัตร ใช้เป็นสื่อกลางแลกเปลี่ยนแบบดิจิทัล การแลกเปลี่ยนแบบดิจิทัลเริ่มในปี <b>ค.ศ. 2009</b> พัฒนาเพื่อบริการทางการเงินทั้งการโอนและการจ่าย เช่น <b>Bitcoin และ Ripple</b></p>
<h3>บริการพิสูจน์ทราบ (Proof of Services)</h3>
<p>ใช้ Blockchain บรรจุข้อมูลแบบอัตโนมัติ เช่น <b>เอกลักษณ์ (Identity) กรรมสิทธิ์ (Ownership) สมาชิกภาพ (Membership)</b> มักใช้โดยหน่วยงานภาครัฐที่บริการประชาชน</p>
<ul>
<li>MIT Digital Currency Initiative ร่วมหลายภาคส่วนรวมถึงภาครัฐ ทำโครงการนำร่อง: ใบสูติบัตร ใบมรณบัตร ใบอนุญาตประกอบธุรกิจ ชื่อสถานประกอบการ วุฒิการศึกษา</li>
<li>บริการยืนยันเอกลักษณ์ (Identity Based Service) โดย BitNation พัฒนา A World Citizenship ID บน Blockchain Protocol</li>
</ul>
<h3>Proof of Existence (Proof of Service อีกประเภท)</h3>
<p>พิสูจน์การมีอยู่จริงของเอกสาร โดยเก็บ<b>ข้อมูลโดยสรุปของเอกสาร (Cryptographic Digest)</b> และ<b>เวลาที่ส่งเอกสารไปยังผู้รับ</b> ลง Blockchain — <b>ไม่ได้เก็บเอกสารต้นฉบับ</b> จึงมั่นใจว่าเอกสารที่ได้รับถูกต้อง และไม่ต้องกังวลเรื่องความเป็นส่วนตัว</p>
<p class="muted">เชื่อมโยง: i-Voting เอสโตเนีย (บทที่ 2 หน้า 92) ใช้ Proof of Existence ประทับเวลาบัตรลงคะแนน และประโยชน์ด้าน Proof of Existence ในตัวอย่างตรวจคนเข้าเมือง (บทที่ 3 หน้า 151)</p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> รูปภาพที่ 13 วาง Bitnation ไว้ในคอลัมน์ที่ 4 ขณะที่หน้า 51 ยก BitNation เป็นตัวอย่าง Proof of Services — ใช้ข้อความหน้า 51 เป็นหลักเมื่อพูดถึง World Citizenship ID</aside>`,
  confusions: [
    "Proof of Services = Identity/Ownership/Membership; Cryptocurrency = โอน/จ่ายเงิน",
    "Proof of Existence เก็บ Digest + เวลา ไม่ใช่ตัวเอกสาร",
    "0.025% คือสัดส่วนต่อ GDP โลก (WEF 2015)"
  ],
  recall: [
    { q: "Proof of Existence เก็บอะไรลง Blockchain", a: "ข้อมูลโดยสรุปของเอกสาร (Cryptographic Digest) และเวลาที่จัดส่งเอกสาร ไม่ใช่ต้นฉบับ (หน้า 52)" },
    { q: "4 กลุ่ม Application เรียงตามอะไร", a: "ความซับซ้อนและเวลาในการพัฒนาที่เพิ่มขึ้น (รูปภาพที่ 13)" }
  ],
  summary: [
    "4 กลุ่ม: Cryptocurrency → Proof of Services → Smart Contract → Autonomous Systems (ซับซ้อนขึ้น)",
    "Cryptocurrency เริ่ม 2009 (Bitcoin, Ripple)",
    "Proof of Services: Identity/Ownership/Membership; Proof of Existence = Digest + เวลา"
  ]
},
{
  id: "ch1-smart-contract",
  title: "สัญญาอัจฉริยะ (Smart Contract): ความหมาย จุดเด่น ความเหมาะสม ข้อจำกัด",
  pages: [53, 57],
  refs: [ { pages: [16, 17], heading: "อภิธานศัพท์: Ethereum, Smart Contract" }, { pages: [53, 57], heading: "สัญญาอัจฉริยะ (Smart Contract)" } ],
  objectives: [
    "อธิบายความหมายและหลักการของ Smart Contract",
    "บอกจุดเด่น 3 ประการ งานที่เหมาะ 4 แบบ และข้อจำกัด 4 ประการ",
    "ประเมินได้ว่างานใดเหมาะ/ไม่เหมาะกับ Smart Contract"
  ],
  body: `
<p><b>สัญญาอัจฉริยะ</b> คือโปรแกรมคอมพิวเตอร์ที่<b>ดำเนินการตามข้อตกลงโดยอัตโนมัติทันทีที่เกิดเหตุการณ์ตามเงื่อนไข</b>ที่ระบุไว้ล่วงหน้า <b>โดยไม่ต้องมีคนกลาง</b> คิดค้นในปี <b>1994 โดย Nick Szabo</b> เงื่อนไขของสัญญาถูกเก็บในรูป Code คอมพิวเตอร์บนเครือข่าย Blockchain</p>
<h3>ตัวอย่างจากหนังสือ</h3>
<ul>
<li>โอนเงินค่าลิขสิทธิ์ซอฟต์แวร์อัตโนมัติเมื่อจำนวนผู้ใช้ถึงระดับที่ตกลง</li>
<li>โอนเงินค่าโฆษณาอัตโนมัติเมื่อยอดคนดูถึงระดับที่ตกลง</li>
<li>โอนคูปองส่วนลดให้ลูกค้าเมื่อถึงวันที่ใช้ได้</li>
<li>จ่ายค่าบทความทุกครั้งที่ผู้อ่านถึงระดับที่ตกลงกับนักเขียน</li>
</ul>
<p>Ethereum และ Codius เปิดใช้ Smart Contract — The Ethereum Project เป็นตัวอย่าง Smart Contract เต็มรูปแบบบน <b>Public Blockchain</b> ส่วนตัวอย่างอื่นเป็นแบบ <b>Private/Permissioned</b> ที่ติดต่อเฉพาะ Node ที่รู้จักและเชื่อถือได้เพื่อเพิ่มความปลอดภัย</p>
<p><b>แก้ปัญหา:</b> ความไม่ไว้วางใจระหว่างคู่สัญญา การฉ้อโกง การบิดเบือนสัญญา และข้อพิพาทจากการตีความสัญญาต่างกัน</p>
<h3>จุดเด่น 3 ประการ</h3>
<div class="table-wrap"><table><tbody>
<tr><th>ความปลอดภัย (Security)</th><td>กระจายไปยังสมาชิกในเครือข่าย จึงไม่สูญหายหรือถูกเปลี่ยนเงื่อนไขโดยไม่ได้รับอนุญาต</td></tr>
<tr><th>ความเป็นอัตโนมัติ (Automation)</th><td>ทำตามข้อตกลงทันทีเมื่อเกิดเหตุการณ์ตามเงื่อนไข ไม่ต้องมีคนกลาง</td></tr>
<tr><th>ความเป็นมาตรฐาน (Standardization)</th><td>ทั้งระบบทำงานภายใต้เงื่อนไขมาตรฐานเดียวกันตามที่กำหนดใน Smart Contract</td></tr>
</tbody></table></div>
<h3>ลักษณะงานที่เหมาะสม 4 แบบ</h3>
<ol>
<li>ข้อมูลที่ไม่ต้องการให้แก้ หรือแก้/เพิ่มได้เฉพาะผู้ได้รับอนุญาต เช่น ข้อมูลยืนยันบุคคล ข้อมูลสินทรัพย์มีมูลค่า</li>
<li>ธุรกรรมที่ต้องดำเนินการอัตโนมัติตามเงื่อนไขโดยไม่มีตัวกลางควบคุม/ตัดสินใจ เช่น การแลกเปลี่ยนสินทรัพย์</li>
<li>งานที่ต้องเก็บประวัติธุรกรรมเพื่อสืบย้อนหรือตรวจสอบ เช่น ประวัติการรักษาทางการแพทย์ ประวัติการถ่ายโอนสินทรัพย์</li>
<li>งานที่ต้องการลดค่าใช้จ่ายกรณีมีตัวกลาง ใช้ได้กับหน่วยงานที่มีบุคลากร/สาขาจำนวนมาก</li>
</ol>
<h3>ข้อจำกัด 4 ประการ</h3>
<div class="table-wrap"><table><tbody>
<tr><th>ความผิดพลาดจากมนุษย์ (Human Error)</th><td>สร้าง Smart Contract คือการเขียนโปรแกรม ถ้าทดสอบไม่พอจะทำงานผิดพลาด และเสียหายเป็นวงกว้าง</td></tr>
<tr><th>ความยากต่อการเปลี่ยนแปลง (Immutable)</th><td>ปรับปรุงเวอร์ชันยาก เพราะลงทะเบียนและเชื่อมต่อระบบที่เกี่ยวข้องแล้ว ถ้าเปลี่ยนต้องเปลี่ยนการเชื่อมต่อใหม่ทั้งหมด</td></tr>
<tr><th>ความเชื่อมั่น (Confidence)</th><td>ยังขาดการรับรองด้านกฎหมายเกี่ยวกับธุรกรรมผ่าน Smart Contract (ตามหนังสือฉบับนี้)</td></tr>
<tr><th>ค่าใช้จ่าย (Cost)</th><td>ต้องใช้บุคลากรประสบการณ์สูงพัฒนา Smart Contract และส่วนเชื่อมต่อ</td></tr>
</tbody></table></div>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> “Immutable” เป็นทั้งจุดแข็งของข้อมูลบน Blockchain และเป็น<b>ข้อจำกัด</b>ของตัว Smart Contract (แก้โปรแกรมยาก) — อย่าสลับกับจุดเด่น 3 ประการ</aside>`,
  confusions: [
    "จุดเด่น = Security, Automation, Standardization; ข้อจำกัด = Human Error, Immutable, Confidence, Cost",
    "Nick Szabo 1994 (Smart Contract) ≠ Satoshi Nakamoto 2008 (Blockchain)",
    "Smart Contract ใช้ได้ทั้งบน Public และ Private/Permissioned"
  ],
  recall: [
    { q: "จุดเด่น 3 ประการของ Smart Contract", a: "ความปลอดภัย ความเป็นอัตโนมัติ ความเป็นมาตรฐาน (หน้า 54)" },
    { q: "ข้อจำกัด Confidence หมายถึงอะไร", a: "ยังขาดการรับรองด้านกฎหมายที่เกี่ยวข้องกับธุรกรรมผ่าน Smart Contract (หน้า 57)" }
  ],
  summary: [
    "Smart Contract = โปรแกรมทำตามข้อตกลงอัตโนมัติเมื่อเงื่อนไขเกิด ไม่ต้องมีคนกลาง (Nick Szabo 1994)",
    "เด่น: Security/Automation/Standardization | จำกัด: Human Error/Immutable/Confidence/Cost",
    "เหมาะ: ข้อมูลห้ามแก้, ธุรกรรมอัตโนมัติ, ต้องเก็บประวัติ, ลดค่าตัวกลาง"
  ]
},
{
  id: "ch1-oracle-dao",
  title: "Oracle และ DAO (ระบบ/บริการอัตโนมัติ)",
  pages: [58, 59],
  refs: [ { pages: [17], heading: "อภิธานศัพท์: Oracle" }, { pages: [58, 59], heading: "ระบบ/บริการอัตโนมัติ (Decentralized Autonomous Systems/Services)" } ],
  objectives: [
    "อธิบายบทบาทของ Oracle ต่อ Smart Contract",
    "อธิบายแนวคิด DAO และเหตุที่ต้องมี Contractor และ Proposal"
  ],
  body: `
<h3>Oracle</h3>
<p><b>Oracle</b> คือแหล่งข้อมูลที่เชื่อถือได้จาก<b>ภายนอกระบบ Blockchain</b> (Trusted 3rd Party Source) ที่ Smart Contract นำมาอ้างอิงเพื่อบังคับใช้สัญญา เช่น <b>แหล่งข้อมูลระดับน้ำ</b>ของแต่ละพื้นที่ให้กรมธรรม์ประกันอุทกภัยที่เขียนด้วย Smart Contract ใช้เคลมอัตโนมัติ</p>
<p class="muted">เหตุผล: Smart Contract ทำงานอัตโนมัติตามเงื่อนไข แต่ข้อเท็จจริงบางอย่างเกิดนอกเครือข่าย จึงต้องมีแหล่งข้อมูลที่เชื่อถือได้ส่งเข้ามา ในบทที่ 3 ตารางที่ 3 (ขีดความสามารถที่ 15) ก็กล่าวถึงการสร้างข้อมูลที่น่าเชื่อถือ (Oracle) สำหรับระบบจำลองภัยธรรมชาติ</p>
<h3>DAO — องค์กรอัตโนมัติกระจายศูนย์</h3>
<p>ระบบ/บริการอัตโนมัติถูกมองเป็น<b>พัฒนาการขั้นสูงสุด</b>ของ Application บน Blockchain คือทำให้<b>คอมพิวเตอร์คุยกันเองเพื่อบริหารกิจการอัตโนมัติ</b> โดยไม่ต้องอาศัยการตัดสินใจของมนุษย์ เรียกว่า <b>Decentralized Autonomous Organization (DAO)</b> โดยแปลงสัญญาและข้อตกลงทั้งหมดขององค์กรให้อยู่ในรูป Smart Contracts</p>
<ol class="flow flow-steps">
<li>Smart Contract เป็นแค่ชุดคำสั่ง ผลิตสินค้า เขียนโค้ด หรือกวาดถนนเองไม่ได้ → จึงต้องมี <b>ผู้รับเหมา (Contractor)</b></li>
<li>DAO เปิดให้ใครก็ได้ส่ง <b>ข้อเสนอ (Proposal)</b> พัฒนา/ผลิตสินค้าหรือบริการ ในรูป Smart Contract แนบข้อเสนอภาษาธรรมดา</li>
<li>ตรวจว่าข้อเสนอ<b>ขัดผลประโยชน์ของ DAO</b> หรือไม่ และมี<b>คุณสมบัติครบ</b>ตามที่ DAO ระบุหรือไม่</li>
<li>ข้อเสนอที่ผ่านถูกเติมเข้า<b>รายชื่อบัญชีที่มีสิทธิได้รับเงินจาก DAO</b></li>
</ol>
<p>หนังสือสรุปว่า DAO เกิดขึ้นได้ โดยเฉพาะเมื่อพัฒนาควบคู่กันระหว่าง Blockchain และ<b>ปัญญาประดิษฐ์ (AI)</b></p>
<aside class="note note-caution"><strong>ข้อควรระวังในการตีความ</strong> Oracle ไม่ได้ทำให้ข้อมูลภายนอก “จริงเสมอ” — Smart Contract จะเชื่อถือได้เท่ากับแหล่งข้อมูลที่อ้างอิง หนังสือจึงใช้คำว่า “แหล่งข้อมูลที่เชื่อถือได้”</aside>`,
  confusions: [
    "Oracle = แหล่งข้อมูลภายนอกที่ Smart Contract อ้างอิง ไม่ใช่ Node ตรวจสอบ",
    "DAO ยังต้องพึ่ง Contractor สำหรับงานจริง"
  ],
  recall: [
    { q: "ทำไม DAO ต้องมี Contractor", a: "เพราะ Smart Contract เป็นเพียงชุดคำสั่ง ไม่มีศักยภาพผลิตสินค้า เขียนโค้ด หรือกวาดถนนเองได้ (หน้า 58–59)" },
    { q: "ยกตัวอย่าง Oracle ตามหนังสือ", a: "แหล่งข้อมูลระดับน้ำให้กรมธรรม์ประกันอุทกภัยแบบ Smart Contract เคลมอัตโนมัติ (หน้า 17)" }
  ],
  summary: [
    "Oracle = แหล่งข้อมูลภายนอกที่เชื่อถือได้สำหรับ Smart Contract",
    "DAO = ขั้นสูงสุด คอมพิวเตอร์บริหารเอง; Proposal (Smart Contract + ภาษาธรรมดา) → ตรวจ → บัญชีรับเงิน; ต้องมี Contractor; เป็นไปได้มากขึ้นกับ AI"
  ]
}
]);
