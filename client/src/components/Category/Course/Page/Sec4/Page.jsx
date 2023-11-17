import React, { useState } from 'react';
import style from './style.module.css';
import leftSide from '../../../../../assets/images/leftSideOfsuscribe.png'
import rightSide from '../../../../../assets/images/RightSideOfsuscrible.png'
const Page = () => {
    const [email,setEmail]=useState();
    const handleClick=()=>{
            
    }
  return (
    <div style={{
        padding:'30px'
    }}>
        <div className={style.box}>
            
                <img src={leftSide} alt="" />
                <div className={style.container}>
                    <h1 >
                    Subscribe To Get Update Of <br />
                    &#160; &nbsp;&nbsp;&nbsp;   &nbsp;Every New Courses
                    </h1>
                    <p style={{ marginTop:'3vh'}}>
                    20k+ students daily learn with Dronaa. Subscribe for new courses.
                    </p>
                <div style={{display:'flex' }}>
                    <input className={style.input} onChange={(e)=>setEmail(e.target.value)} 
                        type="email" name="" id="" placeholder='enter your email' />
                    <button className={style.button}> Suscribe</button>
                </div>
                </div>
                <img src={rightSide} alt="" />
        </div>
    </div>
  )
}

export default Page