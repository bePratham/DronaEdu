import React from 'react'
import style from './style.module.css'
import scene from '../../../../../assets/images/Scene.png'
import send from '../../../../../assets/images/send.svg'
import answer from '../../../../../assets/images/answer.png'
const Page = () => {
  return (
    <div>
        <div className={style.MainContainer}>
        <div className={style.card}>
         <div className={style.Ques}>
            <p className={style.question}>
            Question
                </p>
            </div>
            <div>
                <p className={style.text1}>
                True or false? This play takes place in Italy 
                </p>
            </div>
            <div className={style.image}>
                <img style={{borderRadius:'18px'}} width={'420.7px'} src={scene} alt="" />
            </div>
            <div className={style.answer}>
                <img src={send} alt="" />
                <img src={answer} alt="" />
            </div>
            </div>
            <div className={style.rightSide}>
                    <div className={style.Asses}>
                    <span>
                        Assessments, <p style={{color: '#7290FA'}}>Quizzes, </p> Tests 
                        </span>
                    </div>
                    <div className={style.text2}> 
                    Easily launch live assignments, quizzes, and tests.
                    Student results are automatically entered in the online gradebook.
                    </div>
            </div>
        </div>
    </div>
  )
}
export default Page