import React from 'react';
import styles from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.container}>
        <form action="">
          <i className="far fa-envelope fa-lg"></i>
          <input type="email" name="mail" placeholder="Your Email" />
          <input type="submit" value="Subscribe" />
        </form>
        <p>
        Stay updated with our latest news, offers, and product launches.
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
