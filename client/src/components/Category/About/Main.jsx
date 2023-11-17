import React from 'react';
import Page1 from './Sec1/Page'
import Page2 from './Sec2/Page'
import Page3 from './Sec3/Page'
import Page4 from './Sec4/Page'
import Page5 from './Sec5/Page'
const Main = () => {
  return (
    <div style={{backgroundColor:'#FFF'}}>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
    </div>
  )
}

export default Main