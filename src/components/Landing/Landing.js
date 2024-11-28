import React from "react";
import styles from "./Landing.module.css"; 

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        <div className={styles.content}>
          <h2>
            Discover the Art of Creativity<br />
            We Are Kasper, Masters of Expression.
          </h2>
          <p>
            At Kasper, we believe in transforming imagination into reality. Our team of visionary artists crafts unique pieces that inspire, evoke emotion, and push boundaries. From digital art to mixed media, we bring passion to every project, creating unforgettable visual experiences.
          </p>
        </div>
      </div>
      <i className={`fas fa-angle-left ${styles.changeBackground} ${styles.faAngleLeft} fa-2x`}></i>
      <i className={`fas fa-angle-right ${styles.changeBackground} ${styles.faAngleRight} fa-2x`}></i>
      <ul className={styles.bullets}>
        <li></li>
        <li className={styles.active}></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Landing;
