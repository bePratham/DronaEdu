import React from 'react'
import { Routes,Route } from 'react-router-dom'
import InstructorLayout from './InstructorLayout';
import Dashboard from './Category/Dashboard/Main'
import Refer from "./Category/Refer";
import Add from "./Category/AddCourse/Landing Page/Add";
import AddAssignmentForm from "./Category/AddCourse/Add Assignment/AddAssignment";
import AddMaterialForm from "./Category/AddCourse/Add Assignment/AddMaterial"; 
import MyCourses from './Category/MyCourses/MyCourses';
import AddCourse from './Category/AddCourse/Create New/AddCourse';
import Batches from './Category/AllBatches/AllBatches';
const InstrutorRoutes = () => {
  return (
    <Routes>
    <Route  path="/" element={ <InstructorLayout> <Add/> </InstructorLayout> } /> 
    <Route  path="/addCourse" element={ <InstructorLayout> <AddCourse/> </InstructorLayout> } /> 
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