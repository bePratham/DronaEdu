import React from 'react';
import style from './Navbar.module.css'
import drona from './Dronaedu.png'
import bell from './bell.png'
import { Link } from "react-router-dom";
import ProfileNav from './ProfileNav/ProfileNav';
function Navbar() {
  return (
    <div className={style.navbar}>
      <img src={drona} width={'150px'} style={{marginTop:'-70px'}} alt="Logo" className="logo" />
      <div className={style.right}>
        <Link to="/instructor-page" className={style.navLink}>Home</Link>
        <a href="/courses" className={style.navLink}>Courses</a>
      <div className={style.notification}>
        <img width={'45px'} height={'45px'} style={{marginTop:'-10px'}} src={bell} alt="" />
      </div>
      <div className={style.userInfo}>
        <ProfileNav/>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
