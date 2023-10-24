import React from 'react'
import { Routes,Route } from 'react-router-dom'
import InstructorLayout from './InstructorLayout';
import Dashboard from './Category/Dashboard/Main'
import Refer from "./Category/Refer";
import AddCourse from "./Category/AddCourse/Main Add/Add Course";
import AddAssignmentForm from "./Category/AddCourse/Add Assignment/AddAssignment";
import AddMaterialForm from "./Category/AddCourse/Add Assignment/AddMaterial"; 
import MyCourses from './Category/MyCourses/MyCourses';
import AddBatch from './Category/AddCourse/Create New/AddBatch';
import Batches from './Category/AllBatches/AllBatches';
const InstrutorRoutes = () => {
  return (
    <Routes>
    <Route  path="/" element={ <InstructorLayout> <AddCourse/> </InstructorLayout> } /> 
    <Route  path="/addBatch" element={ <InstructorLayout> <AddBatch/> </InstructorLayout> } /> 
    <Route  path="/addAssignment" element={ <InstructorLayout> <AddAssignmentForm/> </InstructorLayout> } /> 
    <Route  path="/addMaterial" element={ <InstructorLayout> <AddMaterialForm/> </InstructorLayout> } /> 
    <Route  path="/dashboard" element={ <InstructorLayout> <Dashboard/> </InstructorLayout> } /> 
    <Route  path="/mycourses" element={ <InstructorLayout> <MyCourses/> </InstructorLayout> } /> 
    <Route  path="/refer" element={ <InstructorLayout> <Refer/>  </InstructorLayout> } /> 
    <Route  path="/feedback" element={ <InstructorLayout>  </InstructorLayout> } /> 
    <Route  path="/batches" element={ <InstructorLayout> <Batches/> </InstructorLayout> } /> 
    <Route  path="/student" element={ <InstructorLayout>  </InstructorLayout> } /> 
    </Routes>
  )
}

export default InstrutorRoutes