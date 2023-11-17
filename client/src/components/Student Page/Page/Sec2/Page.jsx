import style from './style.module.css'
import React from 'react'
import BestCourseCard from '../../../../assets/Cards/BestCourses/Card.jsx'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className={style.Container}>
            <div className={style.text1}>
                Our Courses
            </div>
            <div className={style.text1}>
                <p className={style.heading}>
                Browse Our Best Courses
                </p>
            </div>
            <div className={style.cardGrid}>
              <BestCourseCard/>
             </div>
             <div className={style.buttonContainer}>
                  <div className={style.button}>
                    <Link
                      style={{
                        color: '#FFF',
                        fontSize: '30px',
                        fontWeight: '500',
                        lineHeight: '64px',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                      to='/Courses'
                    >
                      Explore Courses
                    </Link>
                  </div>
                </div>
    </div>
  )
}

export default Page