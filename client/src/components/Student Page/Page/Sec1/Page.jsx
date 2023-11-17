import React from 'react'
import style from './style.module.css';
const Page = () => {
  return (
    <div> 
         <div className={style.section1}>  
            <div className={style.container1}>
            <div className={style.transparentCircle}></div>
            <p className={style.text1}>
              Get ready to express<br />
             yourself in a whole new <br />
              way<br />
               </p>
               <button className={style.getStartedButton}>Explore Courses</button>
            </div>
            <div className={style.container2}></div>
        </div>
           
      </div>
  )
}

export default Page;
       