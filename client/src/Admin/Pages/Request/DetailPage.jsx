import React from 'react'
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import data from '../../../assets/data.json';
const DetailPage = () => {
    const {id} = useParams();
    const formData = data.Courses.find((course) => course.id ===parseInt(id));
  return (
    <div>
        <div className={styles.heading}>
               Request   
            <hr />
        </div>
        {/* DETAILSSSSs*/}
        <div className={styles.formRow}>
          <div className={styles.formField}>
            {formData.title}
          </div>
          <div className={styles.formField}>
            {formData.brand}
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formField}>
            Email
          </div>
          <div className={styles.formField}>
            D.O.B
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            {formData.discountPercentage}
          </div>
          <div className={styles.formField}>
            {formData.category}
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            {formData.rating}
          </div>
          <div className={styles.formField}>  
          View Resume
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            {formData.category}
          </div>
          <div className={styles.formField}>
            Additional document
          </div>
        </div>
       <div className={styles.formRow}>
       <div style={{display:'flex',flexDirection:'column',gap:'10px',width:'100%'}}>
          <div className={styles.formField}>
            profile link
          </div>
          <div className={styles.formField}>
            {formData.stock}
          </div>
        </div>
        <div className={styles.formField}>
        {formData.description}
        </div>
       </div>
       <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <button id={styles.dec}>Decline</button>
        <button id={styles.accept}>Accept</button>
       </div>
    </div>
  )
}

export default DetailPage