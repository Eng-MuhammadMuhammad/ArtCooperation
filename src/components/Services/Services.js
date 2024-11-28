import React from "react";
import styles from "./Services.module.css"; 

const Services = () => {
  return (
    <div className={styles.services}>
      <div className="container">
        <div className={styles.mainHeading}>
          <h2>Our Services</h2>
          <p>
            At Kasper, we bring creativity and innovation to every project.
          </p>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.srvBox}>
            <i className={`fas fa-desktop fa-3x ${styles.icon}`}></i>
            <div className={styles.text}>
              <h3>Web Design & Development</h3>
              <p>
                Our team specializes in creating responsive, user-friendly websites that are both functional and visually appealing. We use the latest technologies to deliver seamless user experiences.
              </p>
            </div>
          </div>
          <div className={styles.srvBox}>
            <i className={`fas fa-cog fa-3x ${styles.icon}`}></i>
            <div className={styles.text}>
              <h3>App Development</h3>
              <p>
                We build custom mobile apps that are designed to solve real problems. Our apps are intuitive, fast, and designed to scale with your business needs.
              </p>
            </div>
          </div>
          <div className={styles.srvBox}>
            <i className={`fas fa-pencil-ruler fa-3x ${styles.icon}`}></i>
            <div className={styles.text}>
              <h3>Graphic Design</h3>
              <p>
                From branding to print design, our team creates beautiful and engaging graphics that communicate your message effectively and stand out in the market.
              </p>
            </div>
          </div>
          <div className={styles.srvBox}>
            <i className={`fas fa-camera fa-3x ${styles.icon}`}></i>
            <div className={styles.text}>
              <h3>Photography & Videography</h3>
              <p>
                We offer professional photography and videography services to capture the essence of your brand. Our visuals tell your story in a way that resonates with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
