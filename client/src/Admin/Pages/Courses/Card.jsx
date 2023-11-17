import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
const Card = (key) => {
  const navigate=useNavigate();
  const detail=key.course;
  const handleAccept=(id)=>{
    navigate(`setPrice/${id}`);
  }
  const handleView=(id)=>{
    navigate(`courseDetail/${id}`);
  }
  return (
    <div className={style.card}>
        <div className={style.image}>
          <img width={'120px'} height={'120px'} style={{borderRadius:'10px'}} src={detail.thumbnail} alt="" />
        </div>
        <div>
            <h3>{detail.title}</h3>
            <h6>Instructor : </h6>
            <h6>Start Date : </h6>
            <h6>Sessions : </h6>
        </div>
        <div style={{display:'flex',gap:'16px', marginLeft: 'auto',marginTop:'auto'}}>
            <button onClick={()=>handleView(detail.id)}>View</button>
            <button onClick={()=>handleAccept(detail.id)}>Accept</button>
        </div>
    </div>
  )
}

export default Card