import React,{useState} from 'react'
import Page1 from './Pages/Sec1/Page'
import Page2 from './Pages/Sec2/Page'
import Page3 from './Pages/Sec3/Page'
const StudentPage = () => {

  return (
    <div style={{backgroundColor:'#E7ECFC', padding:'55px'}}>
        <Page1 />
        <Page2  />
        <Page3 />
    </div>
  )
}

export default StudentPage