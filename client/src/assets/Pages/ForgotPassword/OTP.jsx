import React from 'react'
import style from './style2.module.css';
import OTPInput from './OTPInput';
const OTP = () => {
  return (
    <div style={{background:'#EEEEE',display:'flex',justifyContent:'center',
            alignItems:'center',height:'100vh'}}>
        <div className={style.Box}>
            <div className={style.heading}>
            Verification
            </div>
            <p className={style.text1}>
            Enter your 4 digits code that you received on your email. 
            </p>
            <div className={style.otpsection}>
                <OTPInput/>
            </div>
        </div>
    </div>
    
  )
}

export default OTP