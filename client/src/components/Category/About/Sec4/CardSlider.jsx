import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
const CourseSlider = ({ courses }) => {
  const settings = {
    dots: true, 
    infinite: true,
    autoplay: true, 
    speed: 3000, 
    slidesToShow: 4, 
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 4, 
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {courses.map((course,key) => (
        <Card course={course}
          key={key}
        />    
      ))}
    </Slider>
  );
};
export default CourseSlider;
