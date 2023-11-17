import React,{useState} from 'react'
import style from './style.module.css';
const Button = ({text, selected, onClick}) => {
  return (
    <button style={{border:'none'}}  className={`${style.Button} ${selected  ? style.clicked : ''}`}
    onClick={onClick}>
            {text}
    </button>
  )
}

export default Button;