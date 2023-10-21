import React from 'react'
import AdminHome from './AdminHome'
import Button from 'react-bootstrap/Button';

import { FcBusinessman } from "react-icons/fc";
const LandingAdmin = () => {
    return (
        <>
            <div className="container-fluid " style={{ backgroundColor: '#EDF5FD' }}>
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block  sidebar " style={{ height: '650px' , backgroundColor:'white'}}>
                        <AdminHome />
                    </nav>

                    <main className="col-md-8 ms-sm-auto col-lg-10 px-md-4 ">
                        {/* Main content */}
                        <div className="container p-3">
                            <h2>DASHBOARD</h2>
                            <hr />
                        </div>
                        <div className="div">
                            <div className="row">
                                <div className="col">
                                    <div className="col">
                                        <Button variant="light"><div className="col"style={{color:'#7D7FAE ', fontWeight:'bolder'}}><FcBusinessman />Students
                                        
                                        </div>
                                        <div className="col"><h5>5263</h5></div>
                                        </Button>


                                    </div>
                                </div>
                                <div className="col">
                                    <Button variant="light"><div className="col"style={{color:'#7D7FAE ', fontWeight:'bolder'}}> Teachers</div>
                                    <div className="col"><h5>56</h5></div></Button>
                                </div>

                                <div className="col">
                                    <Button variant="light"><div className="col"style={{color:'#7D7FAE ', fontWeight:'bolder'}}>Courses</div>
                                    <div className="col"><h5>100</h5></div>
                                    </Button>
                                </div>
                            </div>
                           <div className="row">
                            <div className="col">
                            
                            </div>
                            <div className="col" >
                            

                            </div>
                           </div>
                        </div>

                    </main>
                </div>



            </div>

        </>
    )
}

export default LandingAdmin