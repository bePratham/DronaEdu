import React, { useState } from 'react';
import style from './style2.module.css';
import verify from '../../../assets/icons/verify.svg';
import TakeInput from '../../../components/Forms/PasswordInput/TakeInput';
import { useNavigate } from 'react-router-dom';

const PasswordChange = () => {
  const navigate=useNavigate();
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const isValid = () => {
    if (pass !== confirmPass) {
      setError("Passwords didn't match.");
    } else if (pass.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
        navigate('/forgot-password/passwordChangeSuccessFul');
    }
  };
  const handleClick = () => {
    isValid();
  };
  return (
    <div style={{ background: '#EEEEE', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className={style.Box}>
        <div className={style.verify}>
          <img src={verify} alt="" />
        </div>
        <p style={{ fontSize: '24px', color: '#060302' }} className={style.heading}>
          Change Password
        </p>
        <p style={{ marginTop: '-5vh' }} className={style.text1}>
          Your password length consists of 6 characters.
        </p>
        <div style={{ marginLeft: '30px', marginTop: '7%', width: '85%', alignContent: 'center' }}>
        <TakeInput
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Password"
          />
          <TakeInput
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirm Password"   
          />
          <button className={style.save} onClick={handleClick}>Save Password</button>
          {error && <p className={style.error}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
