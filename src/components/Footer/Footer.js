import React from 'react';
import styles from './Footer.module.css'; 

import logophoto from '../../assets/images/logo.png'

const Footer = () => {
  // Get the current month and year
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' }); 
  const year = date.getFullYear(); 
  
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={logophoto} alt="Logo" />
        <p>We Are Social</p>
        <div className={styles.socialIcons}>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-home"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p className={styles.copyright}>
          &copy; {month} {year} <span className={styles.bold}>Kasper</span> All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
