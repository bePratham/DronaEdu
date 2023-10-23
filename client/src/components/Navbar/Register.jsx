import React from 'react'
import style from './Banner.module.css';
import { Link } from "react-router-dom";
import instructor from './instructor.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ComingSoonPage from '../../assets/Pages/coming soon/ComingSoonPage.jsx';
const Register = () => {
  return (
     <div className={`${style.buttons}  d-flex`}>
    <Link to='/signin'
    style={{background:'#EEE',border:'none',color:'#000'}}
    className={`btn btn-outline-primary me-2`}>Sign In</Link>
    <div className="btn-group">
<button
  type="button"
  className="btn btn-primary dropdown-toggle"
  data-bs-toggle="dropdown"
  aria-expanded="false"
>
  Register
</button>
<ul  className="dropdown-menu" >
  <div className={style.menu}>
  I'm
    <li  >
      <Link style={{textDecoration:'none'}} to="/signup">
      👩‍🎓  Student
      </Link>
    </li>
    <li>
      <Link style={{textDecoration:'none'}} to="/Registration-Page">
       <img height={'30px'} src={instructor} alt="" /> Instructor
      </Link>
    </li>
    <li>
      <Popup
      trigger={<button style={{border:'none'}} className="button"> 🏫 School</button>}
      modal
      nested
      position="center center"
    > 
    <ComingSoonPage/>
        </Popup>
  </li>
  </div>
</ul>
</div>
</div>
  )
}

export default Register