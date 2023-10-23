import style from './style.module.css';
import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TakeInput from '../../Forms/PasswordInput/TakeInput';
import { Link } from 'react-router-dom';
import img from './girl raising hand.jpg'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function SignUpPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleTermsCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };
    const validateEmail = () => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address');
      } else {
        setError('');
      }
}
  const handleSignUp = () => {
    validateEmail()
    if(password!==confirmPassword)
      setError("*Both Password are not equal")
    else if (!fullName || !email || !password || !confirmPassword) {
      setError("*All fields are required.");
    } else if (!termsAccepted) {
      setError("Please accept the terms and conditions to sign up.");
    } else {
      setError("");
      console.log("User has accepted terms and can sign up.");
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
    }
  };

  return (
    <MDBContainer className={style.container}>
      <MDBRow >
        <MDBCol col='10' md='6'>
          <img src={img}
            style={{
              height: '96%',
              borderRadius: '30px'
            }}
            className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol className={style.loginSide} >
          <p className={style.welcome}>
            Welcome to Dronaa
          </p>
          <button className={style.googleButton}>
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google Icon" className={style.googleIcon} />
            Signup with Google
          </button>
          <div className={`${style.divider} d-flex align-items-center my-4`}>
            <p className="text-center fw-light mx-3 mb-0">
              Or Fill up your details</p>
          </div>
          <p>Full Name</p>
          <input
            type="text"
            name='name'
            className={style.inputField}
            placeholder="👤 Enter Your Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <p>Email</p>
          <input
            type="email"
            name='email'
            className={style.inputField}
            value={email}
            placeholder="✉️ email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
         <TakeInput
         value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="🔒 Password"
              type="password"
            />
          <p>Confirm Password</p>
                <TakeInput
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder=" 🔒Confirm Password"
                  type="password"
                />
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <MDBCheckbox name='flexCheck' value=''
              id='flexCheckDefault' label='I agreed to the '
              onChange={handleTermsCheckboxChange}
            />
            <a style={{ fontWeight: 'bold', marginLeft: '5px' }} href="#">Terms & Conditions</a>
          </p>
          {error && <p className={style.error}>{error}</p>}
          <MDBBtn style={{ borderRadius: '20px' }}
            className="mb-4 w-100" size="lg"
            onClick={handleSignUp}
            disabled={!termsAccepted}
          >
            Sign up
          </MDBBtn>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Already have an account?
            <Link to="/signin">Sign in</Link>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUpPage;
