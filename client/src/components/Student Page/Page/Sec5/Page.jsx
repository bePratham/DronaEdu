import React from 'react'
import style from './style.module.css';
import feedback from '../../../../assets/images/Feedback.png'
const Page = () => {
  return (
    <div>
     
        <div className={style.feedback}>
            Feedback
            <p style={{fontSize:'64px' , fontWeight:'800'}}>
                What Are Students Say
            </p>
        </div>
       <div className={style.Say}>
            <img style={{width:'395px' , height:'321px'}} src={feedback} alt="" />
            <div className={style.text1}>
            The Instructor was knowledgeable and engaging I learn a lot in this course
            </div>
       </div>

    </div>
  )
}

export default Page