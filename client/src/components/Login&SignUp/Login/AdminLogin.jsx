import GIRLPIC from '../SignUp/girl raising hand.jpg'
import style from './style.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React,{useState} from 'react';
import usersData from '../../../userData';
import { Link, useNavigate  } from 'react-router-dom';
import { useUser } from '../../../ContextProvider';
import {MDBContainer, MDBCol,MDBRow, MDBBtn,MDBCheckbox}from 'mdb-react-ui-kit';
import TakeInput from '../../Forms/PasswordInput/TakeInput';
function StudentLogin() {
  const navigate = useNavigate()
  const { login } = useUser(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const handleLogin = () => {
    
    const user = usersData.find((user) => user.email === email && user.password === password);  
   if(user){
      login(user);
      localStorage.setItem('isLoggedIn','true');
      localStorage.setItem('userData', JSON.stringify(user));
      if(user.position==='instructor')
      navigate('/instructor-page')
      else if(user.position==='admin')
      navigate('/admin/');
      else
        navigate('/studentpage');
   }else{
    setLoginError('Invalid email or password');
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