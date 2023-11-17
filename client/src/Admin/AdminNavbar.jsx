import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import style from './style.module.css'
import logo from './Images/Logo.png'
import dashboard from './Images/dashb.svg'
import act from './Images/act.png'
import Coupon from './Images/coupon.png'
import Course from './Images/Courses.png'
import req from './Images/req.png'
import Student from './Images/student.png'
import teacher from './Images/teacher.png'
import logout from './Images/logout.svg'
const AdminHome = () => {
  const navigate=useNavigate();
  const divData = [
    { id: 1, name: 'Dashboard', imageSrc: dashboard },
    { id: 2, name: 'Student', imageSrc: Student },
    { id: 3, name: 'Teacher', imageSrc: teacher },
    { id: 4, name: 'Coupon', imageSrc: Coupon },
    { id: 5, name: 'Activity', imageSrc: act },
    { id: 6, name: 'Request', imageSrc: req },
    { id: 7, name: 'Course', imageSrc: Course },
    { id: 8, name: 'Logout', imageSrc: logout },
  ];
  const [selectedId, setSelectedId] = useState(1);
  const handleDivClick = (id) => {
    if (selectedId === id) 
      setSelectedId(id);
     else{ 
      const item = divData.find((item) => item.id === id);
      if(item.id===8){
          localStorage.removeItem('isLoggedIn');
      navigate('/');
      window.location.reload();
        }
      setSelectedId(id);
      navigate(`/admin/${item.name}`);
    }
    };
  return (
    <div>
        <h2 style={{ display: 'flex', alignItems: 'center', fontWeight: '400',fontSize:'40px'  }}>
            <img src={logo} width={'64px'} alt="" /> Dronaedu
          </h2>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {divData.map((item) => (
                <div
                  key={item.id}
                  className={`${style.optBut} ${selectedId === item.id ? style.selected : ''}`}
                  onClick={() => handleDivClick(item.id)}
                >
                  <img src={item.imageSrc} alt="" /> &nbsp;
                  {item.name}
                </div>
              ))}
            </div>

    </div>
  )
}

export default AdminHome