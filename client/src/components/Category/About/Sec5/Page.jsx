import React, { useState } from 'react';
import style from './style.module.css';
import leftSide from '../../../../assets/images/leftSideOfsuscribe.png'
import rightSide from '../../../../assets/images/RightSideOfsuscrible.png'
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
                    <h1 style={{textAlign:'center'}}>
                    Enter you email to get in touch with us
                    </h1>
                <div style={{position:'relative', width: '532px' }}>
                    <input className={style.input} onChange={(e)=>setEmail(e.target.value)} 
                        type="email" name="" id="" placeholder='enter your email' />
                    <button className={style.button}> SUSCRIBE</button>
                </div>
                </div>
                <img src={rightSide} alt="" />
        </div>
    </div>
  )
}

export default Page