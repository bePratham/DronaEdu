import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
const Card = (key) => {
  const navigate=useNavigate();
  const detail=key.course;
  const handleClick=(id)=>{
    navigate(`${id}`);
  }
  return (
    <div className={style.card}>
        <div className={style.image}>
          <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src={detail.thumbnail} alt="" />
        </div>
        <div >
          <div style={{display:'flex',gap:'50px'}}>
            <p>Name</p> <p><b>{detail.title}</b></p>
          </div>
          <div style={{display:'flex',gap:'50px'}}>
          <p>Email</p> <p><b>email@gmail.com</b></p>
          </div>
          <div style={{display:'flex',gap:'40px'}}>
          <p>Phn no</p> <p><b>{detail.price}</b></p>
          </div>
          <div style={{display:'flex',gap:'25px'}}>
          <p>Expertise</p> <p><b>{detail.category}</b></p>
          </div>
          <div style={{display:'flex',gap:'14px'}}>
          <p>Experience</p> <p><b>{detail.rating} years</b></p>
          </div>        
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <button onClick={()=>handleClick(detail.id)}>View</button>
            <button>Accept</button>
        </div>
    </div>
  )
}

export default Card