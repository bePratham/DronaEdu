import React from 'react';
import style from './style.module.css';

const Card = ({ course }) => {
  return (
    <div className={style.cardContainer}>
          <img style={{
              borderRadius: '14px 14px 0px 0px',
              background: 'lightgray 50% / cover no-repeat, #C4C4C4'
          }} width={'290px'} height={'270px'} src={course.thumbnail} alt={course.title} />
          <h2 style={{ fontSize: '16px', color: '#0A033C' ,marginTop:'10px' }}>{course.title}</h2>
          <p>{course.brand}</p>
        </div>
  );
};

export default Card;
