import React, { useState } from 'react';
import Email from '../../../assets/icons/email.png';
import style from './style.module.css'
const EmailInput = ( { email, setEmail, emailError,setEmailError, handleClick } ) => {
   const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  return (
    <div><div style={{position:' relative'}}>
    <span className={style.customIcon}><img style={{
      width:'58px', height:'51.002px'
    }} src={Email} alt="" /></span>
    <input  type="email"
          className={style.customInput}
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}/>
        {emailError && <div className={style.error}>{emailError}</div>}
    </div>
    </div>
  )
}

export default EmailInput