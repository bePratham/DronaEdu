import React from 'react';
import Navbar from "./AdminNavbar";
import styles from './style.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.children}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
