import React from 'react';
import { BiSolidDashboard, BiLogOut } from 'react-icons/bi';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { AiFillSetting } from 'react-icons/ai';
import { RiCoupon2Fill } from 'react-icons/ri';
import { PiStudentFill } from 'react-icons/pi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const AdminHome = () => {
    const navigate=useNavigate()
    const handleLogOut=()=>{
        localStorage.removeItem('isLoggedIn');
        navigate('/');
        window.location.reload();
      }
    return (
        <>
            <nav id="sidebar" className="" style={{backgroundColor:'white'}}>
                <div className="position-sticky">
                    <ul className="nav flex-column">
                        <div className="container p-2  mb-2">
                            <h4>Drona edu</h4>
                        </div>
                        <li className="nav-item">

                            <a
                                className="nav-link btn btn-light  text-left"
                                href="#"
                                role="button"
                            >
                                <Button variant="primary"><BiSolidDashboard /> Dashboard</Button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-light text-left"
                                href="#"
                                role="button"
                            >
                                <Button variant="secondary"> <PiStudentFill /> Student</Button>

                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-light text-left"
                                href="#"
                                role="button"
                            >
                                <Button variant="secondary">    <FaChalkboardTeacher /> Teacher</Button>

                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-light text-left"
                                href="#"
                                role="button"
                            >
                                <Button variant="secondary"> <RiCoupon2Fill /> Coupon</Button>
                                
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-light text-left"
                                href="#"
                                role="button"
                            >
                                <Button variant="secondary"> <TbActivityHeartbeat /> Activity</Button>
                               
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-light text-left"
                                href="#"
                                role="button"
                            >
                                <Button variant="secondary"> <AiFillSetting /> Settings</Button>
                                
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link btn btn-light text-left"
                                href="#"
                                role="button"
                            >
                                <Button onClick={handleLogOut} variant="secondary"><BiLogOut /> Logout</Button>
                                
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default AdminHome;
