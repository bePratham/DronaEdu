import React, { useState } from 'react';
import style from '../../Login&SignUp/SignUp/style.module.css'

const TakeInput = ({ placeholder,onchange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const passwordInputType = showPassword ? 'text' : 'password';
  return (
    <div className={style.inputFieldContainer}>
      <div className={style.inputFieldWithButton}>
        <input
          type={passwordInputType}
          name='password'
          className={style.inputField}
          placeholder={placeholder}
          onChange={onchange}
        />
        <button
          className={style.togglePasswordButton}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <span>
              <img
                width='25'
                height='25'
                src='https://img.icons8.com/windows/32/closed-eye.png'
                alt='closed-eye'
              />
            </span>
          ) : (
            <span>
              <img
                width='25'
                height='25'
                src='https://img.icons8.com/material-outlined/24/visible--v1.png'
                alt='open eye'
              />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default TakeInput;
