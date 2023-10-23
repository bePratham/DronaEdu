import React, { useState } from 'react';
import style from './style.module.css'
import CardSlider from './CardSlider';
import data from '../../../../assets/data.json';
const Page = () => {
    const courses=data.Courses.slice(7,15);
  return (
    <div className={style.Main}>
        <h1 style={{marginLeft:'50px'}}>
            Our Team
        </h1>
        <CardSlider courses={courses}/>
    </div>
  )
}

export default Page