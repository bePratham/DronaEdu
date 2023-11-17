import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

const Card = ({ courses }) => {
  const navigate = useNavigate();
  const handleClick = (course) => { 
    // navigate(`/instructor-detail/${course.id}/`); //NAVIGATE TO ITS MENTOR PAGE
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
            style={{backgroundColor:'#fff'}}
            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png"
            // src={course.thumbnail}
            alt={course.title}
          />
          <h2 style={{ fontSize: '16px', color: '#0A033C', marginTop: '10px' }}>
            Name
            {/* {course.title} */}
          </h2>
          {/* <p>{course.brand}</p> */}
          <p>Field</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
