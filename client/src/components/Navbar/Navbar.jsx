import React from "react";
import style from './Banner.module.css';
import { Link } from "react-router-dom";
import Register from "./Register";
import ProfileNav from "./ProfileNav";
const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  
  
    return (
      <div className={style.Container}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div style={{height:'60px'}} className="container">
            <Link style={{textDecoration:'none'}}
            className={style.navbarBrand} to='/'>
              DronaEdu
            </Link>      
            <ul className="navbar-nav mx-auto">
              <li  className={style.items}>
                <Link style={{color:'#000'}}className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className={style.items}>
                <Link style={{color:'#000'}} className="nav-link" to="/course">
                  Courses
                </Link>
              </li>
              <li className={style.items}>
                <Link style={{color:'#000'}}className="nav-link" to="/mentors">
                  Mentors
                </Link>
              </li>
              <li className={style.items}>
                <Link style={{color:'#000'}} className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>        
            {isLoggedIn ?  <ProfileNav />   : <Register />  }
      </div>
    </nav>
        </div>
      );
    }

export default Navbar;
