import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

const Card = ({ courses }) => {
  const navigate = useNavigate();
  const handleClick = (course) => { 
    navigate(`/instructor-detail/${course.id}/`);
  };
  return (
    <div className={style.cardContainer}>
      {courses.map((course, index) => (
        <div
          onClick={() => handleClick(course)}
          className={style.button}
          key={index}
        >
          <img
            width={'290px'}
            height={'270px'}
            src={course.thumbnail}
            alt={course.title}
          />
          <h2 style={{ fontSize: '16px', color: '#0A033C', marginTop: '10px' }}>
            {course.title}
          </h2>
          <p>{course.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
