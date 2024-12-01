import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.mainHeading}>
          <h2>Portfolio</h2>
          <p>
            Welcome to my portfolio, where creativity meets craftsmanship.
          </p>
        </div>
        <ul className={styles.shuffle}>
          <li className={`${styles.active}`}>All</li>
          <li>App</li>
          <li>Photo</li>
          <li>Web</li>
          <li>Print</li>
        </ul>
      </div>
      <div className={styles.imgsContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className={styles.box}>
            <img 
              src={require(`../../assets/images/shuffle-0${num}.jpg`)} 
              alt="Portfolio_photo" 
            />
            <div className={styles.caption}>
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/" className={styles.more}>
        More
      </a>
    </div>
  );
};

export default Portfolio;
