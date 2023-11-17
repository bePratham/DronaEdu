import style from './style.module.css'
import React from 'react'
import img1 from '../../../../../assets/images/pic1.png';
import icon1 from '../../../../../assets/icons/icon5.svg';
const Page = () => {
  return (
    <div className={style.MainContainer}>
        <div className={style.leftSide}>
        <div className={style.p1}>
            <p className={style.text1}>                
        <span style={{color: '#33EFA0'}}>Tools </span> For Teachers And Learners
            </p>
            <div className={style.p2}>
            <p>
            Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.
            </p>
            </div>
        </div>
        </div>
        <div>
        <div className={style.rightSide}>
            <div className={style.image}>
            <img height={'696.57px'} src={img1} alt="Hello" />
                <img style={{marginTop:'-360%'}} src={icon1} alt="" />
            </div>
        </div>
        </div>
        </div>
  )
}

export default Page;