import React from 'react'
import style from './style.module.css'
import student from '../../Images/studentno.png'
import coursesno from '../../Images/coursesno.png'
import teacherno from '../../Images/teacherno.png'
const Dashboard = () => {
    const card=[
        {name:'Students',number:0,icon: student },
        {name:'Teacher',number:0,icon: coursesno},
        {name:'Courses',number:0,icon:teacherno },
    ]
  return (
    <div>
        <div className={style.heading}>
               Dashboard   
            <hr />
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          {card.map((item,index) => (
        <div key={index} className={style.card}>
            <div style={{display:'flex',justifyContent:'center',borderRadius:'50%',backgroundColor:'#CCCCFF',height:'69px',padding:'10px'}} key={item.name}>
              <img src={item.icon} alt="" /> 
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <p> {item.name} </p>
              <p> {item.number} </p>
            </div>
        </div>
            ))}
        </div>
    </div>
  )
}

export default Dashboard