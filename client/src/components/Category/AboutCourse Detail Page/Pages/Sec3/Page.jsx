import React from 'react'
import style from './style.module.css'
import data from '../../../../../assets/data.json';
import star from '../../../../../assets/icons/Star.svg'
import dis from '../../../../../assets/images/disscusion.png'
import meet from '../../../../../assets/images/meet.png'
import {Link, useParams } from 'react-router-dom';

const Page = () => {
  const instructor=data.Courses[50];
  const {id}=useParams();
  return (
    <div style={{marginTop:'5%'}}>
        <h1 >
        About Educator 
        </h1>
        <div className={style.Box}>
            <img  width={'310px'} src={instructor.thumbnail} alt="" />
            <div className={style.rightSide}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10%'}}>
                <div>
                      <h1>
                        {instructor.brand}
                      </h1>
                      {instructor.rating }
                  </div>
                  <div>
                    <button className={style.button}>
                    <Link style={{textDecoration:'none',color:'#FFF'}} to={`/instructor-detail/${id}`}>
                      View more
                    </Link>
                    </button>
                  </div>
                </div>
                  <p style={{fontSize:'23px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis earum officia odit unde cupiditate, culpa beatae enim eos ullam libero corrupti, dolorum velit non ad corporis sint ea! Rem.
                  </p> 
              </div>
        </div>
        <h1>
          Overall Rating
        </h1>
        <div style={{marginLeft:'20px'}}>
          <span className={style.rating}>{instructor.rating}&#160;<img src={star} alt="" /></span> <br />
          <img width={'413.505px'} src={dis} alt="" />
          <img width={'725px'} src={meet} alt="" />
        </div>
    </div>
  )
}

export default Page