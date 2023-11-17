import React from 'react'
import nopage from './Nopage.png'
import style from './style.module.css'
const Nopage = () => {
  return (
    <div className={style.BOX}>
        <div className={style.b1}>
          <h1 className={style.heading}>
          Aww.....Don’t Cry.
          </h1>
          It is just a 404 Error! 
        </div>
        <img src={nopage} alt="" />
    </div>
  )
}

export default Nopage