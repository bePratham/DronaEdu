import React, { useState } from 'react'
import style from './style.module.css'
import data from '../../../../../assets/data.json';
import Card from '../../../../../assets/Cards/SmallCard/Card'
import back from '../../../../../assets/icons/Outline.svg'
import next from '../../../../../assets/icons/next.svg'
const Page = () => {
    const courses=data.Courses;
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(8);
    const lastpostIndex=currentPage*postsPerPage;
    const firstpostIndex=lastpostIndex-postsPerPage;
    const currentPost=courses.slice(firstpostIndex,lastpostIndex);
    const noOfPages=Math.ceil(courses.length/postsPerPage);
  return (
    <div className={style.Container}>
        <div className={style.others}>
            <h1 style={{
                color:'#0A033C'
            }}>
                Other Courses 
            </h1>
            <div className={style.sortby}>
                Sort by: &#160;
                <select style={{border:'none',width:'250px'}} name="sortby" id="sort">
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                </select>
            </div>
        </div>
        <div style={{marginTop:'30px'}}>
            <Card courses={currentPost} /> 
            <div  className={style.Pagination}>
                <button onClick={()=>{ if(currentPage>1) setCurrentPage(currentPage-1)}} 
                 style={{border:'none'}}>
                    <img width={'44px'} src={back} alt="" />
                </button>
                <p style={{fontSize:'30px',lineHeight:'150%'}}>
                Page {currentPage} of {noOfPages}
                </p>
                <button onClick={()=>{if(currentPage<noOfPages) setCurrentPage(currentPage+1)} }
                style={{border:'none' , backgroundColor:'#3465E1',borderRadius:'7px'}}>
                    <img width={'44px'} src={next} alt="" />
                </button>
            </div>
           
        </div>
    </div>
  )
}

export default Page