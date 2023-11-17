import React, { useState } from 'react';
import data from '../../../assets/data.json';
import Card from './Card.jsx';
import style from './style.module.css'
const Course = () => {
    const courses = data.Courses;
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = courses.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <h2>Courses Request</h2>
    <hr />
    <div style={{gap:'50px'}}>
    <div className={style.Cards}>
      {currentCards.map((course) => (
          <Card key={course.id} course={course} />
          ))}
    </div>
      {/* <div>
        {Array.from({ length: Math.ceil(courses.length / cardsPerPage) }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
            </button>
            ))}
        </div> */}
    </div>
        </>
  )
}

export default Course