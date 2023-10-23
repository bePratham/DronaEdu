import React from 'react'
import style from './style.module.css'
import becomeTeacher from '../../../../../assets/images/BecomeATeacher.jpeg'
const Page = () => {
  const boxStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',  
    background: 'rgba(255, 255, 255, 0.8)', 
    padding: '10px', 
    borderRadius: '5px', 
  };
  
  return (
    <div style={{ position: 'relative' }}>
    <img height={'763px'} width={'1254px'} src={becomeTeacher} alt="" />
    <div className={style.Box} style={boxStyle}>
      Become a <span style={{ fontWeight: '700' }}>Teacher</span>, Share your knowledge with thousands of students
    </div>
  </div>
  )
}

export default Page