import React from 'react'
import Page1 from './Pages/Sec1/Page'
import Page2 from './Pages/Sec2/Page'
import Page3 from './Pages/Sec3/Page'
const Main = () => {
  return (
    <div  style={{background:' var(--background, #E7ECFC)',padding:'74px',
    width:'100%'}}>
      <Page1/>
      <Page2/>
      <Page3/>
    </div>
  )
}

export default Main;