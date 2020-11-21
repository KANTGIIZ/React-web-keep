import Wordcard from '../components/wordcard'
import { Button, Row, Col, Input, Select } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';

const Styledrapper = styled.div`
   padding: 20px 10%;

   @media(max-width: 425px){
     padding:20px 10%;
   }

   .select-types{
    width: 100%; 
   }

   .from-item{
     margin: 10px;
   }
`
function Homepage() {

  const vocabs = [{ "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] }, { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }]

  const [word, setword] = useState("");
  const [types, settypes] = useState("[]");
  const [meanings, setmeanings] = useState("");

  const [number, setNumber] = useState(10);

  const [datalist, setDatadetail] = useState(vocabs)

  const typesoptions = [
    { lable: 'noun', value: 'noun' },
    { lable: 'verb', value: 'verb' },
    { lable: 'adjective', value: 'adjective' },
    { lable: 'adverb', value: 'adverb' },
    { lable: 'preposition', value: 'preposition' },
    { lable: 'conjuntion', value: 'conjuntion' },
  ]


  const handleclick = () => {
    setDatadetail([...datalist, {
      word: word,
      types: types,
      meanings: meanings.split(",").map((item) => item.trim())
    }]);
  }

  const handleDelete = (index) => {
    const newArr = datalist.filter((data, id) => {
      return id !== index
    })
    setDatadetail(newArr)
  }

  console.log(number);
  return (
    <Styledrapper >
      <h1>My Vocabularies</h1>

      <div>

        <div className="from-item">
          <div>
            <label htmlFor='word-input'>Word</label>
          </div>
          <Input
            id='word-input'
            placeholder="English word"
            onChange={(e) => { setword(e.target.value) }}
          />
        </div>

        <div className="from-item">
          <div>
            <label htmlFor='select-type'>Types</label>
          </div>
          <Select
            className="select-types"
            type="primary"
            id="select-type"
            placeholder="Typs Selects"
            options={typesoptions}
            mode="multiple"
            onChange={(values) => { settypes(values) }}
          />
        </div>

        <div className="from-item">
          <div>
            <label htmlFor='meanings'>Meanings</label>
          </div>
          <Input
            id='meanings'
            placeholder="Push meaning"
            onChange={(e) => { setmeanings(e.target.value) }}
          />
        </div>

      </div>

      <Button className="from-item" onClick={handleclick} >Add Vocab</Button>

      <Row gutter={[16, 24]}>
        {datalist.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Wordcard {...item} onDelete={() => {handleDelete(index)}} />
            </Col>
          )
        })}
      </Row>
    </Styledrapper>
  );
}

export default Homepage;
