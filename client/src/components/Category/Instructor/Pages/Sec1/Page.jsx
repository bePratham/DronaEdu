import React from 'react'
import style from './style.module.css'
import instruct from '../../../../../assets/images/InstructorPage.png'
const Page = () => {
  return (
    <div >
          <div className={style.Box1}>
            <p className={style.smalltext}>
            Home | <span style={{color:'#5471D9'}}>Our Mentors</span>
            </p>
            <div className={style.text}>
            Dronaedu has the <br/>
              qualified mentor
            </div>
            <div>
                <img width={'423px'} src={instruct} alt="" />
            </div>
          </div>
          <h1 style={{fontFamily:'700',fontSize:'64px'}}>
          Our Instructors
          </h1>
    </div>
  )
}

export default Page