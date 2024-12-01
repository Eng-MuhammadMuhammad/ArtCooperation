import React, { useState } from 'react';
import styles from './Header.module.css';
import logophoto from '../../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu state
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/Home" className={styles.logo}>
          <img src={logophoto} alt="Logo" className={styles.logoImage} />
        </a>
        <nav className={styles.nav}>
          <i
            className={`fas fa-bars ${styles.toggleMenu}`}
            onClick={toggleMenu} 
          ></i>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
            <li><a className={`${styles.navLink} ${styles.active}`} href="/Home">Home</a></li>
            <li><a className={styles.navLink} href="/Services">Services</a></li>
            <li><a className={styles.navLink} href="/Portfolio">Portfolio</a></li>
            <li><a className={styles.navLink} href="/About">About</a></li>
            <li><a className={styles.navLink} href="/Pricing">Pricing</a></li>
            <li><a className={styles.navLink} href="/Contact">Contact</a></li>
          </ul>
          <div className={styles.form}>
            <i className="fas fa-search"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
