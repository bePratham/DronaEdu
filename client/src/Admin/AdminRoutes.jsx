import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import ReqListPage from './Pages/Request/ReqListPage'
import DetailPage from './Pages/Request/DetailPage'
import Course from './Pages/Courses/Main';
import SetCoursePrice from './Pages/Courses/SetCoursePrice.jsx'
const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout> <Dashboard/> </Layout> }/>
        <Route path='/dashboard' element={<Layout> <Dashboard/> </Layout> }/>
        <Route path='/student' element={<Layout>  </Layout> }/>
        <Route path='/coupon' element={<Layout>  </Layout> }/>
        <Route path='/activity' element={<Layout>  </Layout> }/>
        <Route path='/request' element={<Layout> <ReqListPage/> </Layout> }/>
        <Route path='/request/:id' element={<Layout> <DetailPage/> </Layout> }/>
        <Route path='/course' element={<Layout> <Course/> </Layout> }/>
        <Route path='/course/setPrice/:id' element={<Layout> <SetCoursePrice/> </Layout> }/>
        <Route path='/teacher' element={<Layout>  </Layout> }/>
    </Routes>
  )
}

export default AdminRoutes