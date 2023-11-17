import React from 'react';
import style from './style.module.scss'
const Message = () => {
  return (
    <div className={style.textContainer}> 
    <p className={style.message}>Forgot Your Password?</p>
    <p className={style.message2}>Don't worry our team will help you to Login again</p>
    <p className={style.mail}>Enter Your Email Address</p>
    </div>
  )
}

export default Message;