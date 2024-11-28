import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.mainHeading}>
          <h2>Contact Us</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        <div className={styles.content}>
          <form action="">
            <input className={styles.mainInput} type="text" name="name" placeholder="Your Name" />
            <input className={styles.mainInput} type="email" name="mail" placeholder="Your Email" />
            <textarea className={styles.mainInput} name="message" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" />
          </form>
          <div className={styles.info}>
            <h4>Get In Touch</h4>
            <span className={styles.phone}>+00 123.456.789</span>
            <span className={styles.phone}>+00 123.456.789</span>
            <h4>Where We Are</h4>
            <address>Awesome Address 17<br />New York, NYC<br />123-4567-890<br />USA</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
