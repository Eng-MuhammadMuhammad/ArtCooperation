import React from "react";
import styles from "./About.module.css";

import aboutphoto from '../../assets/images/about.png'

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className="main-heading">
          <h2>About Us</h2>
          <p>
            <p>
              Founded with the vision to drive meaningful change, we bring
              expertise and passion to every challenge. Our team values
              excellence, collaboration, and customer satisfaction, ensuring we
              meet the unique needs of each client. Join us as we continue to
              push boundaries and create lasting solutions.
            </p>
          </p>
        </div>
        <img
          src={aboutphoto}
          alt="About Us"
          className={styles.aboutImage}
        />
      </div>
    </div>
  );
};

export default About;
