import React,{useState} from 'react'
import styles from './style.module.css'
import { useParams } from 'react-router-dom';
import data from '../../assets/data.json'
import Icons from './Icons';

const InstructorPage = () => {
    const { courseId } = useParams();
    const courses=data.Courses;
    const course = courses.find((c) => c.id === parseInt(courseId));
    const links=course.links;
    const [activeButton, setActiveButton] = useState(0);
    const handleButtonClick = (buttonIndex) => {
      setActiveButton(buttonIndex);
    };
    if (!course) {
        return <h1>Loading...</h1>;
      }
  return (
    <div className={styles.Container}>
     <div className={styles.page} >
      <div className={styles.leftColumn}>
        <img width={'220px'} height={'250px'} style={{borderRadius:'20px'}}
         src={course.thumbnail} alt="Left Image" />
      </div>
      <div className={styles.middleColumn}>
          <h1 style={{width:'100px'}}>{course.brand}</h1>
      </div>
      <div className={styles.rightColumn}> 
        <h1>Stars...</h1>
        <h4>( {course.rating} Review )</h4>
         </div>
    </div>
    <div className={styles.normalDiv}>
      <div className={styles.leftSide}>
        <div className={styles.buttonContainer}>
        <button
        className={`${styles.button} ${activeButton === 0 ? styles.activeButton : ''}`}
        onClick={() => handleButtonClick(0)}
      >
        About
      </button>
      <button
        className={`${styles.button} ${activeButton === 1 ? styles.activeButton : ''}`}
        onClick={() => handleButtonClick(1)}
      >
        Courses
      </button>
      <button
        className={`${styles.button} ${activeButton === 2 ? styles.activeButton : ''}`}
        onClick={() => handleButtonClick(2)}
      >
        Review
          </button>
        </div>
        <div style={{marginTop:'5%'}}>
          <h1>About {course.name}</h1>
          <p>
            {course.description}
          </p>
        </div>
        
      </div>
      <div className={styles.rightSide}>
        <div style={{display :'flex',justifyContent:'space-between'}}>Total Course <p className={styles.p}>{course.stock}</p></div>
        <div style={{display :'flex',justifyContent:'space-between'}}>Rating <p className={styles.p}>{course.rating}</p></div>
        <div style={{display :'flex',justifyContent:'space-between'}}>Experiences <p className={styles.p}>{course.id} Years</p> </div>
        <div style={{display :'flex',justifyContent:'space-between'}}>Graduated <p className={styles.p}>Yes</p> </div>
        <div style={{display :'flex',justifyContent:'space-between'}}>Language <p className={styles.p}>English</p> </div>
        <div style={{display :'flex',justifyContent:'space-between'}}>Social    <Icons />   </div>
      </div>
    </div>
    </div>
  )
}

export default InstructorPage