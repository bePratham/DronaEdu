import React from 'react'
import style from './style.module.css'
import Create from './create.png'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const AddCourse = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('addBatch')
  }
  return (
    <div className={style.Container}>
      <div className={style.Rectangle}>
            <h1 style={{fontWeight:'600'}}>
              Add Course
            </h1>
            <h3>
            To start teaching you would have to add a course first
            </h3>
            <button onClick={handleClick} className={style.Create}>
                Create New <img src={Create} alt="" />
            </button>
      </div>
      <div className={style.CARDS}>
          <Card heading={"Schedule a Batch"} text={"Add a group from here to expand your reach"} name={"Add Batch"} 
              navigateTo={'addBatch'}/>
          <Card heading={"Add Assignment"} text={"Add assignment for your learners"} name={"Add"} navigateTo={'addAssignment'}/>
          <Card  heading={"Add Materials"} text={"Add materials for your learners"} name={"Add"} navigateTo={'addMaterial'}/>
      </div>
    </div>
  )
}

export default AddCourse