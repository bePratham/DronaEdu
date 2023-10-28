import {  Routes, Route,useLocation } from "react-router-dom"; 
import LoginPage from "./components/Login&SignUp/Login/login";
import SignUpPage from "./components/Login&SignUp/SignUp/signup";
import Home from "./components/Category/Home/Home";
import About from "./components/Category/About/Main";
import Course from "./components/Category/Course/MainCoursePage";
import Instructor from "./components/Category/Instructor/Main";
import NoPage from "./assets/Pages/Nopage/Nopage";
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
import { useUser } from "./ContextProvider";
import LandingAdmin from './Admin/LandingAdmin'
function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const { user } = useUser();
  let location = useLocation();
  useEffect(() => { 
    window.scrollTo({top : 0,behavior: "smooth"});
  }, [location]);
   return <Routes>   
          <Route   path="/" element={  <Layout>    <Home />    </Layout>  } />
          <Route   path="Home" element={  <Layout> { isLoggedIn ? <StudentPage /> : <Home />} </Layout>  } />
          <Route  path="/course" element={ <Layout> <Course/> </Layout> } /> 
          <Route  path="/course/:id" element={ <Layout> <MainCoursePageDetail/> </Layout> } /> 
          <Route  path="/mentors" element={ <Layout> <Instructor/> </Layout> } /> 
          <Route  path="/about" element={ <Layout> <About/> </Layout> } /> 
          <Route  path="/help" element={ <Layout> <Help/> </Layout> } /> 
          <Route path="/instructor-detail/:courseId" element={<Layout> <InstructorPage/> </Layout>} />
        <Route path="signin" element={<LoginPage/>} />
        <Route path="signup" element={<SignUpPage/>} />
        <Route path="forgot-password/*" element={<Main/>}/>
        <Route path="/Registration-Page" element={<EducatorForm/>}/>
        <Route
            path="studentpage"
            element={
              <Layout>
                <PrivateRoute
                  isAuthenticated={isLoggedIn}
                  element={<StudentPage />}
                  redirectTo="/signin"
                />           
              </Layout>
            }
            />   
        <Route
            path="profile"
            element={
              <Layout>
                <PrivateRoute
                  isAuthenticated={isLoggedIn}
                  element={<ProfilePage />}
                  redirectTo="/signin"
                />           
              </Layout>
            }
            />   
           <Route path = "/admin/*" element={ isLoggedIn && user.position==='admin'? <LandingAdmin/>:<SignUpPage/>}/>
            <Route  path="/instructor-page/*" element={ isLoggedIn && user.position==='instructor'? <InstrutorRoutes/>:<EducatorForm/>} /> 
          <Route path="*" element={<NoPage />} />    
          </Routes>
   
}
export default App;
