import React, { useState } from 'react';
import style from '../Navbar.module.css';
import {useNavigate} from 'react-router-dom'
import { useUser } from '../../../ContextProvider';
const ProfileNav = () => {
  const { user,logout } = useUser();
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
    marginTop:'10px',   
    zIndex: 4,
    borderRadius:'20px',
    background:'blur',
    display: isDropdownOpen ? 'block' : 'none',
  };
    const handleLogOut=()=>{
      logout();
      navigate('/');
      window.location.reload();
    }
  return (
    <div className={style.profile}>
      <div className={style.profileImageContainer}>     
        <img  onClick={toggleDropdown} style={{ borderRadius: '50%' }}
        height={'66px'} width={'66px'}
          // src={user.image}
          alt="UserImage"  
          />
         
        <div style={dropdownStyle} onBlur={closeDropdown}>
          <ul>
            <li>
              <a href="/profile">My Profile</a>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
      {user.username}
    </div>
  );
};

export default ProfileNav;
