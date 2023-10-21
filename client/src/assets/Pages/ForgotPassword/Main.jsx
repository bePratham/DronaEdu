import React from 'react'
import { Routes, Route } from 'react-router-dom';
import forgotimage from '../../images/forgotpage.png';
import style from './style.module.scss';
import ForgotPassword from './ForgotPassword';
import OTP from './OTP';
import PasswordChange from './PasswordChange';
import PasswordChangeSuccess from './PasswordChangeSuccess.jsx';
import LoginPage from '../../../components/Login&SignUp/Login/login';
const Main = () => {
  return (
    <div className={style.container}>
    <div className={`${style.section} ${style.section1}`}>
    <img src={forgotimage} alt="forgot image" />
  </div>
  <div className={style.componentContainer}>
        <Routes>
          <Route path="/" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/passwordChange" element={<PasswordChange />} />
          <Route path="/passwordChangeSuccessFul" element={<PasswordChangeSuccess />} />
          <Route path="/signin" element={<LoginPage />} /> 
        </Routes>
      </div>
  </div>
  )
}

export default Main;