import React from 'react'
import style from './style.module.css'
import data from '../../../../../assets/data.json';
import { useParams } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import BuyOrWatch from './BuyOrWatch';
const Page = () => {
    const {id} = useParams();
    const selectedCourse = data.Courses.find((course) => course.id ===parseInt(id));
  if (!selectedCourse) {
    return <h1>Course not found.</h1>;
  }
  return (  
        <div className={style.Container}>
            <div className={style.Parent}>
        <div className={style.FirstBox}>
            <p className={style.heading1}>
                    Beginner &nbsp; \ &nbsp; <span style={{fontWeight:'900', color:'#080110'}}>{selectedCourse.brand}</span>
            </p>
     
        <img style={{marginTop:'35px',marginLeft:'43px'}} 
            height={'440px'}    width={'733px'} src={selectedCourse.thumbnail} alt="" />
        <h2 className={style.heading2}>
        Introduction to {selectedCourse.brand}
        </h2>
            </div>
            <div className={style.FirstBox}>
            <h1 className={style.heading1} style={{fontWeight:'900',color:'#000',marginTop:'30px'}}> 
                Course details
            </h1>
            <div className={style.details}>
                <ul style={{listStyleType:'none'}} className={style.list}>
                    <li>Price <p>$ {selectedCourse.price}</p></li>
                    <li>Instructor <p>{selectedCourse.brand}</p></li>
                    <li>Lessons   <p>{selectedCourse.title}</p></li>
                    <li>Dusration   <p>{selectedCourse.discountPercentage} hours</p></li>
                    <li>Rating   <p>{selectedCourse.rating}</p></li>
                    <li>Language   <p>{selectedCourse.category}</p></li>
                </ul>
                <div style={{display:'flex',
                     flexDirection:'column',
                     gap:'20px',
                    alignItems:'center'}}>
                <button id='watch' className={style.button}>Watch Demo</button>
                <BuyOrWatch/>                 
                </div>
            </div>
            </div>
        </div>
    </div>
   )
}

export default Page