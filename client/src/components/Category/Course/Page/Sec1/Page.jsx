import style from './style.module.css'
import React from 'react'
import maginfy from '../../../../../assets/icons/maginfy.png'
import studying from '../../../../../assets/images/studing.png'
const Page = () => {
  return (
    <div className={style.Container}>
        <div className={style.FirstBox}>
            <p className={style.heading1}>
                    Home &nbsp; \ &nbsp; <span style={{fontWeight:'900', color:'#080110'}}>    Courses</span>
            </p>
        <div className={style.leftSide}>
            <div className={style.heading2}>
            Dronaa Courses <br />
                For All Standards
            </div>
            <div className={style.SearchBar}>
            <div >
                    <select className={style.DropDown}> 
                    <option value="option1">Beginner</option>
                    <option value="option2">Intermediate</option>
                    <option value="option3">Advance</option>
                    </select>
                </div>

                <div >
                    <input className={style.SearchInput} type="text" placeholder="Course" />
                </div>

                <div className={style.SearchButton}>
                    <button style={{
                        border:'none',display:'flex',backgroundColor:'#3465E1',color:'#EEE',
                        lineHeight:'25px',gap:'5px'
                    }}> <img width={'25px'} src={maginfy} alt="" /> Search</button>
                </div>

            </div>
        </div>
        <img src={studying} alt="" />
        </div>
    </div>
  )
}

export default Page