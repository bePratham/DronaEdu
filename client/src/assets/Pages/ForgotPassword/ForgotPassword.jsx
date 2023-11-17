import React,{useState} from 'react';
import style from './style.module.scss';
import Message from './Message';
import personalost from '../../images/personlost.png';
import EmailInput from '../../../components/Forms/EmailFroms/EmailInput';
import { Link,useNavigate   } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate=useNavigate();
  const handleSendClick = () => {
    if (isValidEmail(email)) {
      setEmailError('');
      navigate(`otp`);
    } else {
      setEmailError('Invalid email');
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  return (
   
    <div className={`${style.section} ${style.section2}`}>
     <img width='179px' height='178px'src={personalost} alt="" />
     <Message/>
     <EmailInput
     email={email}
     setEmail={setEmail}
     emailError={emailError}
     setEmailError={setEmailError}
     handleClick={handleSendClick}
     />
     <button className={style.customButton }
    onClick={handleSendClick}
    >SEND </button>
    
        <p style={{  marginTop:'6%' }}
        className={style.message2}>Already have an account? <Link to='/signin' style={{
          color: '#2A57FD',fontWeight: '700'
        }}> SING IN</Link> </p>
    </div>
  )
}

export default ForgotPassword;