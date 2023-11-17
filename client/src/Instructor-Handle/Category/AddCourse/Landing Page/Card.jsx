import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
const Card = ({heading,text,name,navigateTo}) => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate(navigateTo)
  }
  return (
    <div className={style.Card}>
        <div style={{height:'250px'}}>
        <h2 style={{fontWeight:'600'}}>
            {heading}
        </h2>
        <h4>
            {text}
        </h4>
        </div>
        <button onClick={handleClick} className={style.button}>
            {name}
        </button>
    </div>
  )
}

export default Card