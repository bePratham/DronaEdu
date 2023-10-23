import React,{useState} from 'react'
import style from './style.module.css'
import data from '../../../../../assets/data.json'
import Card from '../../../../../assets/Cards/InstructorCard/Card'
import back from '../../../../../assets/icons/Outline.svg'
import next from '../../../../../assets/icons/next.svg'
const Page = () => {
  const courses=data.Courses;
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(12);
  const lastpostIndex=currentPage*postsPerPage;
  const firstpostIndex=lastpostIndex-postsPerPage;
  const currentPost=courses.slice(firstpostIndex,lastpostIndex);
  const noOfPages=Math.ceil(courses.length/postsPerPage);
  return (
    <div>
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
  )
}

export default Page