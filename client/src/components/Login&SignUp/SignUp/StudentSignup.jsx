import style from './style.module.css';
import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TakeInput from '../../Forms/PasswordInput/TakeInput';
import { Link, useNavigate } from 'react-router-dom';
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
  
  const navigate=useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [studentId, setStudentId] = useState('');

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
  
const SignUpService = async (request) => {
    
  try {
  
      const response = await fetch("http://localhost:8080/api/auth/StudentSignUp", {
    
      method: 'POST',    
      headers: {
        'Content-Type': 'application/json',    
      },
    
      body: JSON.stringify(request),
    
    });

    const responseData = await response.json();
    
    return { status: response.status, data: responseData };
  } 
  catch (error) {
  
    console.error("An error occurred during the fetch:", error);
  
    throw error; 
  
  }
};
const handleSignUp = async (e) => {

  validateEmail();

        if (password !== confirmPassword) {
        setError("*Both Passwords are not equal");
  }      
  else if (!fullName || !email || !password || !confirmPassword) {
        setError("*All fields are required.");
  }   
  else if (!termsAccepted) {
        setError("Please accept the terms and conditions to sign up.");
  } 
  else {
        setError("");
    const requestBody = {
      username: fullName,
      email: email,
      password: password,
    
    };

    try {
      
      const response = await SignUpService(requestBody);
      console.log(response);
      if (response.status === 200) {
        const responseData=response.data
        console.log(responseData);

        if (responseData) {
          
          const studentId = responseData;
          setStudentId(studentId);
          
          console.log("User has been signed up successfully. Student ID:", studentId);

          
          navigate("Student-Information", { state: { studentId } });
       
        } else {
       
          setError("Unexpected response format. Please try again later.");
       
        }
      } 
      else if (response.status === 400) {
      
        setError(response.data.error || "Signup failed. User already exists.");
      }
       else if (response.status === 401) {
      
        setError("Wrong email format.");
      }
       else {
      
        setError("Unexpected error occurred. Please try again later.");
      }
    } 
    catch (error) {
    
      setError("An error occurred. Please try again later.");
    
    }
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
              onchange={(e) => setPassword(e.target.value)}
              placeholder="🔒 Password"
              type="password"
            />
          <p>Confirm Password</p>
                <TakeInput
                  value={confirmPassword}
                  onchange={(e) => setConfirmPassword(e.target.value)}
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
            <Link to="/StudentSignin">Sign in</Link>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUpPage;
