import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import { Link} from 'react-router-dom';
import style from './style2.module.css';
function OTPTake() {
  const [OTP, setOTP] = useState("");
  return (
    <div >
      <OTPInput  style={{display:'flex', justifyContent:'center'}}  value={OTP} onChange={setOTP} autoFocus OTPLength={4} 
            otpType="number" disabled={false} secure />
        <div className={style.continue}>
          <Link style={{color:'#EEE'}}to='/forgot-password/passwordChange'>
        CONTINUE
          </Link>
        </div>
        <div className={style.resend}>
        <p>
        If you didn’t receive a code!
        </p>
      <ResendOTP 
      style={{color:'#F2451C'}}
      onResendClick={() => console.log("Resend clicked")} />
    </div>
    </div>
  );
}
export default OTPTake;