import React from 'react'
import onOnon from '../../../../../assets/images/onOnon.png'
import hand from '../../../../../assets/icons/handRaise.svg'
import style from './style.module.css'
const Page = () => {
  return (
    <div><div className={style.MainContainer}>
        <div  className={style.leftSide}>  
        <img src={onOnon} alt="" />
        </div>
        <div className={style.rightSide}>
            <div className={style.text}>
            One-on-One <p style={{color: '#7290FA'}}>Discussions &nbsp; <span className={style.raiseHand}>
            <img src={hand} alt="" />
            </span>
                </p> 
            </div>
            <div className={style.text2}>
            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </div>
        </div>
        </div></div>
  )
}

export default Page