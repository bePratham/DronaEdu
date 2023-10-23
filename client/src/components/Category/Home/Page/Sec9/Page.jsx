import React from 'react'
import style from './style.module.css'
import women from '../../../../../assets/images/women.png'
import arrow from '../../../../../assets/icons/arrow.svg'
const Page = () => {
  return (
         <div style={{height:'46vmax'}}>
      <div className={style.seemoreBox}>
            <div className={style.seemore}> 
            See more feature
        </div>
      </div>
                <div className={style.Container}>
                    <div className={style.leftSide}>
                        <div className={style.text1}>
                        What They Say?
                        </div>
                        <div className={style.text2}>
                        DRONA.EDU has got more than 100k positive ratings from our users around the world. 
                        </div>
                        <div className={style.text2}>
                        Some of the students and teachers were greatly helped by the Skilline.
                        </div>
                        <div className={style.text2}>
                        Are you too? Please give your assessment
                        </div>
                        <div className={style.write}>
                        Write your assessment <img style={{marginLeft:'10%', marginRight:'-15%'}}  src={arrow} alt="" />
                        </div>
                    </div>
                    <div className={style.rightSide}>
                    <div className={style.image}>
                        <img src={women} alt="" />
                    </div>
                    </div>
                </div>

         </div>   
  )
}

export default Page
     