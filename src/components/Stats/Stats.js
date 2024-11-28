import React from "react";
import styles from "./Stats.module.css";

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.box}>
          <i className="fas fa-mug-hot"></i>
          <div className={styles.number}>1,236</div>
          <p>Coffee Drinks</p>
        </div>
        <div className={styles.box}>
          <i className="far fa-folder"></i>
          <div className={styles.number}>256</div>
          <p>Completed Projects</p>
        </div>
        <div className={styles.box}>
          <i className="far fa-envelope"></i>
          <div className={styles.number}>1,743</div>
          <p>Mail Sent</p>
        </div>
        <div className={styles.box}>
          <i className="fas fa-trophy"></i>
          <div className={styles.number}>17</div>
          <p>Awards Received</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
