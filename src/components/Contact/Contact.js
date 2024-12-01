import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.mainHeading}>
          <h2>Contact Us</h2>
          <p>
            We're here to help! Feel free to reach out with any questions or inquiries, and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className={styles.content}>
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <input
              className={styles.mainInput}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className={styles.mainInput}
              type="email"
              name="mail"
              placeholder="Your Email"
              required
            />
            <textarea
              className={styles.mainInput}
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
          <div className={styles.info}>
            <h4>Get In Touch</h4>
            <span className={styles.phone}>+1 123.456.789</span>
            <span className={styles.phone}>+1 987.654.321</span>
            <h4>Where We Are</h4>
            <address>
              1234 Example Street<br />
              New York, NY 10001<br />
              USA
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
