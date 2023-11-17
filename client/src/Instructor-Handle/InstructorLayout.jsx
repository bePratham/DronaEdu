import React from 'react';
import FooterFLow from '../components/Footer/Footer';
import Navbar from "./Navbar/Navbar";
import SideBar from './SideBar/SideBar';
const Layout = ({children}) => {
    return (
      <div style={{overflowX: 'auto'}} >
        <Navbar />
        <div style={{display:'flex',gap:'30px',marginTop:'100px' ,backgroundColor:'#EAF2F8'}}>
        <SideBar/>
        {children}
        </div>
        <FooterFLow/>
      </div>
    );
  };
  
  export default Layout;