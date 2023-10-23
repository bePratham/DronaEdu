import React from 'react'
import style from './style.module.css'
import student from '../../../../../assets/images/page3img.jpeg'
const Page3 = () => {
  return (
    <div>
        <div className={style.textAndimage}>
            <div className={style.textSection}>
              <p className={style.heading}>Everything you can do in a physical classroom, 
                you can do with Drona.edu</p>
              <p className={style.text1}>  School management software helps traditional and online schools 
                manage scheduling, attendance, payments and virtual classrooms all in one secure
                     cloud-based system. </p>
         </div>

    <div className={style.imageSection}>
      <img src={student} alt="Image" />
         </div>
     </div>
  </div>
  )
}

export default Page3;