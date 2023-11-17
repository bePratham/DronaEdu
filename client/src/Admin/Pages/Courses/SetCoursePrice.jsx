import React from 'react'
import style from './style.module.css'
import { useParams } from 'react-router-dom';
import data from '../../../assets/data.json';
const SetCoursePrice = () => {
  const {id} = useParams();
  const formData = data.Courses.find((course) => course.id ===parseInt(id));
  return (
    <div>
      <h2>Set Course Price</h2>
      <hr />
      <h3>Introduction to {formData.title}</h3>
      Lesson :
      <p>Group Session : <input type="number" name="Gprice" id="Gprice" /></p>
      <p>One on One Session : <input type="number" name="Oneprice" id="Oneprice" /></p>
      <button>Create</button>
    </div>
  )
}

export default SetCoursePrice