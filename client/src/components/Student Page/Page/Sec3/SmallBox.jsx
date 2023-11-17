import React from 'react'


import style from './style.module.css'
const SmallBox = ({pic,Text}) => {
  return (
    <div className={style.Live}>
    <img style={{
        margin:'10px',
        marginBottom:'10px',
        borderRadius:'30%'
    }} src={pic} alt="" />
    <p className={style.text2}>
       {Text}
    </p>
</div>
  )
}

export default SmallBox;