import React, { useState } from 'react'
import style from './style.module.css'
import add from '../../icons/AddToCart.png'
import added from '../../icons/AddedToCart.png'
import {Link} from 'react-router-dom';
const Card = ({courses}) => {
  const [cart, setCart] = useState(Array(courses.length).fill(true));

  const handleClick = (index) => {
     const newCart = [...cart];
    newCart[index] = !newCart[index];
    setCart(newCart);
  };
  return (
    <div className={style.showCard}>
      {courses.map((course, index) => (
        <div className={style.WholeCard} key={index}>
          <div className={style.CardBox}>
            <div className={style.image}>
              <Link to={`${course.id}`}>
                <img width={'160px'} height={'103px'} src={course.thumbnail} alt="" />
              </Link>
            </div>
            <div className={style.RightSide}>
              <Link to={`${course.id}`}>
                <h1 className={style.h1}>{course.title}</h1>
              </Link>
              {course.rating}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ color: '#FF6652', fontWeight: '600' }}>$ &#160; {course.price}</p>
                <button style={{ width: '44px' ,border:'none'}} onClick={() => handleClick(index)}>
                  <img src={cart[index] ? add : added} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card;