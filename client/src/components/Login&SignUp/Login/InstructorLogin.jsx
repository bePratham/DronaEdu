import GIRLPIC from '../SignUp/girl raising hand.jpg'
import style from './style.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React,{useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useUser } from '../../../ContextProvider';
import {MDBContainer, MDBCol,MDBRow, MDBBtn,MDBCheckbox}from 'mdb-react-ui-kit';
import TakeInput from '../../Forms/PasswordInput/TakeInput';
function StudentLogin() {
  const navigate = useNavigate()
  const { loginDetail } = useUser(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const handleLogin = () => {
    
    const requestBody = {
      
      "email": email,
      "password": password,
    
    };

    login(requestBody);
  };
  const login = async (requestBody) => {
    
    try {
      const response = await fetch("http://localhost:8080/api/auth/instructorSignIn", {
      method: 'POST',    
      headers: {
        'Content-Type': 'application/json',    
      },
      body: JSON.stringify(requestBody),
    });
    const instructor=await response.json();

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('instructorLoggedIn', 'true');
        localStorage.setItem('userId', instructor.instructorDetail.id);
        loginDetail(instructor.instructorDetail.id);
        console.log("User has been signed in successfully.");
        navigate("/Instructor-page");
      } else {
        console.error('Unexpected response status:', response.status);
        setLoginError("Signin failed. Please try again later." ,response.status);
      
      }
    } catch (error) {
     
      console.error("An error occurred during login:", error);
      setLoginError("An error occurred. Please try again later.");
    
    }
  };
  return (
    <MDBContainer className={style.container}>
      <MDBRow > 
        <MDBCol  col='10' md='6'>
          <img src={GIRLPIC}
          style={{
            height:'106%',
            borderRadius:'30px'
          }}
          className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol className={style.loginSide} >
            <p className={style.welcome}> 
              Welcome to Dronaa
            </p>
            <button className={style.googleButton}>
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google Icon" className={style.googleIcon} />
                  Sign in with Google
              </button>

          <div className={`${style.divider} d-flex align-items-center my-4`}>
            <p className="text-center fw-light mx-3 mb-0">
              Or signin with your email</p>
          </div>
          <p>Email</p>
          <input type="email"name='email' className={style.inputField}
           placeholder="✉️ email" 
           value={email}
          onChange={ (e) => {setEmail(e.target.value)}}
           />
          <p>
            Password
          </p>
          <TakeInput
              placeholder={"🔐 Password"}
              onchange={(e) => setPassword(e.target.value)}
            />
          <MDBBtn  style={{ borderRadius: '20px' }} className="mb-4 w-100" 
           onClick={handleLogin}
          size="lg">Sign in</MDBBtn>
            {loginError && <p className="text-danger">{loginError}</p>}
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default StudentLogin;