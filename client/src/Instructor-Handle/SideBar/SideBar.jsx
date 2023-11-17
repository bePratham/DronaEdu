import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import style from './style.module.css'
import add from './icons/Add.png'
import cour from './icons/Books.png'
import dash from './icons/dash.png'
import refer from './icons/Refer.png'
import man from './icons/man.png'
import feedback from './icons/feedback.png'
import batch from './icons/batches.png'
const SideBar = () => {
  const navigate=useNavigate();
  const [activeButton, setActiveButton] = useState('');
  const handleButtonClick=(route)=>{
    navigate(`/${route}`);
    const check=route.substring(16,route.length);
    console.log(check);
    setActiveButton(check);
  }
  return (
    <div className={style.container}>
      <button onClick={() => handleButtonClick('instructor-page/')} className={style.Addbutton}>
        <img height={'60px'} src={add} alt="" />  Add
      </button>
      <button onClick={() => handleButtonClick('instructor-page/dashboard')} className={`${style.button}
                         ${activeButton === 'dashboard' ? style.activeButton : ''}`}>
        <img height={'60px'} src={dash} alt="" />  Dashboard
      </button>
      <button onClick={() => handleButtonClick('instructor-page/refer')} className={`${style.button} 
                        ${activeButton === 'refer' ? style.activeButton : ''}`}>
        <img height={'60px'} src={refer} alt="" />  Refer & Earn
      </button>
      <button onClick={() => handleButtonClick('instructor-page/Mycourses')} className={`${style.button} 
                        ${activeButton === 'Mycourses' ? style.activeButton : ''}`}>
        <img height={'60px'} src={cour} alt="" />  My courses
      </button>
      <button onClick={() => handleButtonClick('instructor-page/batches')} className={`${style.button}
                         ${activeButton === 'batches' ? style.activeButton : ''}`}>
        <img height={'60px'} src={batch} alt="" />  All Batches
      </button>
      <button onClick={() => handleButtonClick('instructor-page/feedback')} className={`${style.button} 
                        ${activeButton === 'feedback' ? style.activeButton : ''}`}>
        <img height={'60px'} src={feedback} alt="" /> Feedback
      </button>
      <button onClick={() => handleButtonClick('instructor-page/Student')} className={`${style.button} 
                        ${activeButton === 'Student' ? style.activeButton : ''}`}>
        <img height={'60px'} src={man} alt="" />  Student
      </button>
    </div>
  )
}

export default SideBar