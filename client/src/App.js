import {  Routes, Route,useLocation } from "react-router-dom"; 
import AdminLogin from "./components/Login&SignUp/Login/AdminLogin.jsx";

import InstructorLogin from "./components/Login&SignUp/Login/InstructorLogin.jsx";
import InstructorSignup from "./components/Login&SignUp/SignUp/InstructorSignup.jsx"

import StudentLogin from "./components/Login&SignUp/Login/StudentLogin.jsx";
import StudentSignUpPage from "./components/Login&SignUp/SignUp/StudentSignup.jsx";

import Home from "./components/Category/Home/Home";
import About from "./components/Category/About/Main";
import Course from "./components/Category/Course/MainCoursePage";
import Instructor from "./components/Category/Instructor/Main";
import Layout from "./Layout";
import MainCoursePageDetail from "./components/Category/AboutCourse Detail Page/Main"
import Help from "./components/Help/Help";
import Main from "./assets/Pages/ForgotPassword/Main";
import PrivateRoute from "./PrivateRoute.jsx";
import StudentPage from "./components/Student Page/Student";
import InstructorPage from './components/Instructor/Main'
import { useEffect } from "react";
import InstrutorRoutes from "./Instructor-Handle/Routes";
import ProfilePage from "./Profile/ProfilePage";
import EducatorForm from "./assets/Pages/Educator Information/EducatorInformation";

import StudentForm from "./assets/Pages/Student Information/Form.jsx";
import AdminRoutes from "./Admin/AdminRoutes.jsx";
import NoPage from "./assets/Pages/Nopage/Nopage";
function App() {
  const studentLoggedIn = localStorage.getItem('studentLoggedIn') === 'true';
  const InstructorLoggedIn = localStorage.getItem('instructorLoggedIn') === 'true';
  let location = useLocation();
  useEffect(() => { 
    window.scrollTo({top : 0,behavior: "smooth"});
  }, [location]);
   return <Routes>   
          <Route   path="/" element={  <Layout>    <Home />    </Layout>  } />
          <Route   path="Home" element={  <Layout> { studentLoggedIn ? <StudentPage /> : <Home />} </Layout>  } />
          <Route  path="/course" element={ <Layout> <Course/> </Layout> } /> 
          <Route  path="/course/:id" element={ <Layout> <MainCoursePageDetail/> </Layout> } /> 
          <Route  path="/mentors" element={ <Layout> <Instructor/> </Layout> } /> 
          <Route path="/instructor-detail/:courseId" element={<Layout> <InstructorPage/> </Layout>} />
          <Route  path="/about" element={ <Layout> <About/> </Layout> } /> 
          <Route  path="/help" element={ <Layout> <Help/> </Layout> } /> 

        <Route path="AdminSignin" element={<AdminLogin/>} />

        <Route path="StudentSignin" element={ <>{ studentLoggedIn ? <Layout> <StudentPage /> </Layout>  :<StudentLogin/>}</> }/>
        <Route path="Studentsignup" element={<StudentSignUpPage/>} />
        <Route path="Studentsignup/Student-Information" element={<StudentForm/>}/>

        <Route path="InstructorSignin" element={<>{ InstructorLoggedIn ? <Layout> <InstructorPage /> </Layout>  :<InstructorLogin/>}</>} />
        <Route path="InstructorSignup" element={<InstructorSignup/>} />
        <Route path="/InstructorSignup/Registration-Page" element={<EducatorForm/>}/>

        <Route path="forgot-password/*" element={<Main/>}/>

        <Route
            path="studentpage"
            element={
              <Layout>
                <PrivateRoute
                  isAuthenticated={studentLoggedIn}
                  element={<StudentPage />}
                  redirectTo="/StudentSignin"
                />           
              </Layout>
            }
            />   
        <Route
            path="profile"
            element={
              <Layout>
                <PrivateRoute
                  isAuthenticated={studentLoggedIn||InstructorLoggedIn}
                  element={<ProfilePage />}
                  redirectTo="/Home"
                />           
              </Layout>
            }
            />   
           <Route path = "/admin/*" element={ <AdminRoutes/>}/>
           {/* <Route path = "/admin/*" element={ isLoggedIn && user.position==='admin'? <AdminRoutes/>:<SignUpPage/>}/> */}
            <Route  path="/instructor-page/*" element={ InstructorLoggedIn ? <InstrutorRoutes/>:<InstructorLogin/>} /> 
          <Route path="*" element={<NoPage />} />    
          </Routes>
   
}
export default App;
