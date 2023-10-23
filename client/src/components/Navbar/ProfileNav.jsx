import React, { useState } from 'react';
import style from './Banner.module.css';
import { useUser } from '../../ContextProvider';
import { useNavigate,Link } from 'react-router-dom';
const ProfileNav = () => {
  const { user } = useUser();
  const navigate=useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const dropdownStyle = {
    position: 'absolute',
    top: '90%',
    right:'11%',
    zIndex: 1, 
    display: isDropdownOpen ? 'block' : 'none',
  };  
    const handleLogOut=()=>{
      localStorage.removeItem('isLoggedIn');
      navigate('/');
      window.location.reload();
    }
  return (
    <div className={style.profile}>
      <div className={style.profileImageContainer}>  
        <img  onClick={toggleDropdown}  style={{borderRadius:'50%'}}
        height={'56px'} width={'56px'}
          src={user.image}
          alt="UserImage"  />

        <div style={dropdownStyle} onBlur={closeDropdown}>
          <ul style={{listStyleType:'none'}}> 
            <li>
            <Link className={style.li}to="/profile">
               My Profile</Link>
            </li>
            <li>
            <Link className={style.li}to="/course">My Courses</Link>
            </li>
            <li>
            <Link className={style.li}to="/">Purchase</Link>
            </li>
            <li>
            <Link onClick={handleLogOut} className={style.li}to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      {user.name}
    </div>
  );
};

export default ProfileNav;
