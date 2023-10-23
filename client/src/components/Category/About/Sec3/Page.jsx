import React from 'react'
import style from './style.module.css'
import {Link} from 'react-router-dom'
import mobile from '../../../../assets/images/AboutUS/mobile.png'
import menu from '../../../../assets/images/AboutUS/menu.png'
import multiple from '../../../../assets/images/AboutUS/multiple.png'
import rocket from '../../../../assets/images/AboutUS/rocket.png'
const Page = () => {
  return (
    <>
    <div className={style.Box}> 
    <div className={style.b1}>
            <p className={style.h1}>
            Drona edu provides the following services
            </p>
            <p className={style.text}>
            Drona.edu, seasoned in mobile and web development with
             numerous projects under its belt, 
            offers live classes and diverse domain workshops.
            </p>
            <button className={style.button}> <Link style={{textDecoration:'none'}} to='/help'> Contact us</Link></button>
      </div>    
      <div className={style.b2}>
          <div className="grid-item">
              <img src={menu} alt="" />&#160;&#160;&#160;&#160;Web Application
          </div>
          <div className="grid-item">
              <img src={rocket} alt="" />&#160;&#160;&#160;&#160;
              SEO
          </div>
          <div className="grid-item">
              <img src={mobile} alt="" />&#160;&#160;&#160;&#160;Mobile Application
          </div>
          <div className="grid-item">
              <img src={multiple} alt="" />&#160;&#160;&#160;&#160;AR / VR
          </div>
</div>

    </div>
    </>
  )
}

export default Page