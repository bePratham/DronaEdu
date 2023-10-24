import React from 'react'
import Card from './Dashboard/Card'
import style from './Dashboard/style.module.css'
import money from './Dashboard/icons/money.png'
import copy from './Dashboard/icons/copy.png'
import student from './Dashboard/icons/student.png'
const Refer = () => {
  return (
    <div className={style.container}>
        <div style={{display:'flex',gap:'30px'}}>
            <Card color={'#FFA500'} icon={money} name={"Total Earning"} />
            <Card color={'#2980B9'} icon={student} name={"Student's Referred"}  />
            <Card color={'#1ABC9C'} icon={copy} name={"My Coupon Code"} />       
        </div>    
    </div>
  )
}

export default Refer