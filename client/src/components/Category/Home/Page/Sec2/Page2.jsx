import React from 'react'
import style from './style.module.css'
import img3 from '../../../../../assets/images/img1.png'
import img2 from '../../../../../assets/images/img2.png'
import img1 from '../../../../../assets/images/img3.png'
const Page2 = () => {
  return (
    <div className={style.imageGrid}>
    <div className={style.imageContainer}>
    <div className={style.imageInner}>
          <img className={style.img} src={img1} alt="Image 1" />
          <div className={style.textContainer}>
            <p>FOR <br />  INSTRUCTORS</p>
            <button className={style.button}>Start a class today</button>
          </div>
        </div>
    </div>
    <div className={style.imageContainer}>
    <div className={style.imageInner}>
          <img className={style.img}  src={img2} alt="Image 2" />
          <div className={style.textContainer}>
            <p>FOR <br /> STUDENT</p>
            <button className={style.button}>Start a class today</button>
          </div>
    </div>
    </div>
    <div className={style.singleImagecontainer}>
    <div className={style.imageInner}>
          <img className={style.img} src={img3} alt="Image 3" />
          <div className={style.textContainer}>
            <p>FOR <br />  SCHOOLS</p>
            <button className={style.button}>Start a class today</button>
          </div>
          
          </div>
  </div>
  </div>
);
}

export default Page2;