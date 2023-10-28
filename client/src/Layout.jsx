import React from 'react';
import FooterFLow from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
const Layout = ({ children }) => {
    return (
      <div >
        <Navbar />
        {children}
        <FooterFLow/>
      </div>
    );
  };
  
  export default Layout;
  // style={{width:'1440px'}}