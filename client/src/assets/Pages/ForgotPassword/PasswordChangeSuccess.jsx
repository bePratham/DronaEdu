import React from 'react'
import { useNavigate } from 'react-router-dom';
import success from '../../images/Successmark.svg'
import style from './style.module.scss'
const PasswordChangeSuccess = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/signin')
  }
  return (
    <div style={{paddingTop:'20%'}} className={`${style.section} ${style.section2}`}>
        <img src={success} alt="" />
        <h1>
          Password Changed !!
        </h1>
        <p>
          Your Password has been changed successfully
        </p>
        <button onClick={handleClick} className={style.customButton} to='/signin' >
            Back to Login
        </button>
   </div>
  )
}

export default PasswordChangeSuccess