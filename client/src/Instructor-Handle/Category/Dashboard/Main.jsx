import React from 'react'
import Card from './Card'
import style from './style.module.css'
import people from './icons/people.png'
import cour from './icons/cour.png'
import batch from './icons/batch.png'
const Main = () => {
  return (
    <div className={style.container}>
        <div style={{display:'flex',gap:'30px'}}>
            <Card color={'#FFA500'} icon={people} name={"Enrollments"} number={"20"} />
            <Card color={'#2980B9'} icon={batch} name={"Batches"} number={"4"} />
            <Card color={'#1ABC9C'} icon={cour} name={"Enrollments"} number={"20"} />       
        </div>   
        <h1 style={{color:'#2C3E50' , marginTop:'20px'}}>Upcoming Schedule</h1>
        <div>   
            <input type="text" placeholder='🔍 Search'/>
        </div>
    </div>
  )
}

export default Main