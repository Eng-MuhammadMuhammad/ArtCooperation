import React from "react";
import styles from "./Skills.module.css"; // Importing CSS module

const Skills = () => {
  return (
    <div className={styles.ourSkills}>
      <div className={styles.container}>
        
        {/* Testimonials Section */}
        <div className={styles.testimonials}>
          <h3>Testimonials</h3>
          <p>
            "Our clients' success stories speak volumes. Here's what they have to say about working with us."
          </p>
          <div className={styles.content}>
            <img src="images/skills-01.jpg" alt="User Testimonial" />
            <div className={styles.text}>
              "Working with this team was a game-changer. Their expertise and dedication helped us achieve our project goals ahead of schedule."
              <p>Sarah Lee, Project Manager</p>
            </div>
          </div>
          
          <div className={styles.content}>
            <img src="images/skills-02.jpg" alt="User Testimonial" />
            <div className={styles.text}>
              "Exceptional service and attention to detail. They went above and beyond to ensure our satisfaction."
              <p>Mike Johnson, CEO</p>
            </div>
          </div>
          
          <div className={styles.content}>
            <img src="images/skills-01.jpg" alt="User Testimonial" />
            <div className={styles.text}>
              "Working with this team was a game-changer. Their expertise and dedication helped us achieve our project goals ahead of schedule."
              <p>Sarah Lee, Project Manager</p>
            </div>
          </div>
          
          
          <ul className={styles.bullets}>
            <li></li>
            <li className={styles.active}></li>
            <li></li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className={styles.skills}>
          <h3>Skills</h3>
          <p>
            "Our team possesses a versatile set of skills, enabling us to deliver outstanding results across a range of disciplines."
          </p>
          <div className={styles.progHolder}>
            <h4>Adobe Creative Suite</h4>
            <div className={styles.prog}>
              <span style={{ width: "90%" }} data-progress="90%"></span>
            </div>
          </div>
          <div className={styles.progHolder}>
            <h4>HTML &amp; CSS</h4>
            <div className={styles.prog}>
              <span style={{ width: "85%" }} data-progress="85%"></span>
            </div>
          </div>
          <div className={styles.progHolder}>
            <h4>JavaScript & React</h4>
            <div className={styles.prog}>
              <span style={{ width: "80%" }} data-progress="80%"></span>
            </div>
          </div>
          <div className={styles.progHolder}>
            <h4>PHP & Laravel</h4>
            <div className={styles.prog}>
              <span style={{ width: "90%" }} data-progress="90%"></span>
            </div>
          </div>
          <div className={styles.progHolder}>
            <h4>Python & Django</h4>
            <div className={styles.prog}>
              <span style={{ width: "75%" }} data-progress="75%"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
