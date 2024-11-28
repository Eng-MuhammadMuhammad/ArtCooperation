import React from "react";
import styles from "./Design.module.css"; 

const Design = () => {
  return (
    <div className={styles.design}>
      <div className={styles.overlay}></div>
      <div className={styles.image}>
        <img src="images/mobile.png" alt="Mobile" />
      </div>
      <div className={styles.text}>
        <h2>Our Design Comes With...</h2>
        <ul>
          <li>Responsive Design</li>
          <li>Modern And Clean Design</li>
          <li>Clean Code</li>
          <li>Browser Friendly</li>
        </ul>
      </div>
    </div>
  );
};

export default Design;