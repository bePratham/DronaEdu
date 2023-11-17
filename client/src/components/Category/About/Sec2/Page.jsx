import React from 'react'
import style from './style.module.css'
import right2 from '../../../../assets/images/AboutUS/3.png'
const Page = () => {
  return (
    <div className={style.Box}>
        <div style={{marginLeft:'8%'}} >
          <h1 >
        Thrive Virtually: Where Healthy  Work Culture Meets Live Learning.
          </h1>
          <p className={style.text}>
          Drona.edu boasts a seasoned team adept in crafting web and mobile applications. 
          With an impressive portfolio of finished projects, we excel in developing apps for premier
           platforms like Android and IOS. Your vision, our expertise—Drona.edu transforms ideas into digital realities.
          </p>
        </div>
        <img style={{marginTop:'-5.4%'}} src={right2} alt="" />
    </div>
           
  )
}

export default Page