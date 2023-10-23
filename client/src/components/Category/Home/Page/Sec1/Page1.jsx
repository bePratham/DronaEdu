import React from 'react'
import style from './style.module.css';
const Page = () => {
  return (
    <div> 
         <div className={style.section1}>  
            <div className={style.container1}>
            <div className={style.transparentCircle}></div>
            <p className={style.text1}>
              Crafting<br />
              &emsp;&emsp;&emsp;Curricular<br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Compasses <br />
               </p>
               <p className={style.text2}>
               Navigating from Sheets of Untapped <br />
                Potential to Epics of Enlightened <br />Success.
               </p>
               <button className={style.getStartedButton}>Get Started</button>
            </div>
            <div className={style.container2}></div>
        </div>
            <div className={style.WhatIs}>
              <h1 className={style.h1}>What is Dronaedu? </h1>
              <p className={style.text3}>
              Step into the future with Drona.edu: The Digital Nexus for Modern Learners. 
              Thoughtfully designed with students at the core, Drona.edu integrates every facet of your online 
              education, seamlessly merging assignments and quizzes into one cohesive platform. Embrace efficiency
               and precision, and with our intuitive dashboard, navigate your educational milestones with unparalleled
                clarity and confidence.
              </p>
            </div>
      </div>
  )
}

export default Page;






  {/* <div className={style.containerXD}>
            <div className={style.CircleContent}> */}
    
           {/* </div>
        </div> */}
       