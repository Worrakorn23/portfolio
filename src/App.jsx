import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import profile from './assets/profile.png'
import axios from 'axios';

const endpoint = 'https://sheetdb.io/api/v1/xy9jp2v8n33zt'

function App() {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState([])
  
  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
    })
    console.log('success', d)
  }

  useEffect(() =>{
    callApi()
  },[])

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={profile}/>

        <Title title="Worrakorn Boongerd (Q)">
          <h3>Graphic Design</h3>
        </Title>

        <Title title="Contact">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/09/23").format("D MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66649614117
          </p>
          <button onClick={() => setHide(!hide)}>{hide ? 'Show': 'Hide'}</button>
          <p>Email : s64122202065@ssru.ac.th</p>
          <p>www.s64122202065@ssru.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut veritatis consequatur illo excepturi nostrum, cumque culpa ut consequuntur velit quibusdam aspernatur possimus similique exercitationem reiciendis accusantium recusandae accusamus error!</p>
        </Title>

        <Title title="Work Experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum suscipit optio iure rem explicabo, et facilis dolorum saepe reiciendis dolorem alias corrupti? Voluptas, illo incidunt obcaecati modi dolorem doloremque.</p>
        </Title>

        <Title title="Skills">
          <p>• Adobe Photoshop</p>
          <p>• Adobe Illustrator</p>
          <p>• Microsoft Office</p>
          <p>• Canva</p>
          <p>• โปรแกรมเบื้องต้น-ความรู้ใน PC</p>
        </Title>

      </div>
    </main>
  )
}

export default App
