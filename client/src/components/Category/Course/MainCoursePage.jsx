import React from 'react'
import img from './bg.svg'
import Page1 from './Page/Sec1/Page';
import Page2 from './Page/Sec2/Page';
import Page3 from './Page/Sec3/Page';
import Page4 from './Page/Sec4/Page';
import ComingSoonPage from './ComingSoonPage.jsx'
const MainCoursePage = () => {
  return (
    <div style={{
      background: '#F7F5FA'
    }}>
      <Page1/>

      <ComingSoonPage bgColor="rgb(240 217 194)" illustration={img}/>

      {/* <Page2/>
      <Page3/>
      <Page4/> */}

    </div>
  )
}

export default MainCoursePage