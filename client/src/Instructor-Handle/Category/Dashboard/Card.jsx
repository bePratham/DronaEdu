import React from 'react'
import style from './style.module.css'
const Card = ({color,name,icon,number}) => {
  return (
    <div className={style.card} style={{backgroundColor:`${color}`}}>
        <p>
            {name}
        </p>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <img src={icon} alt="" />
                   {number}
        </div>
    </div>
  )
}

export default Card