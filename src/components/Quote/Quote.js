import React from "react";
import styles from "./Quote.module.css"; 

const Quote = () => {
  return (
    <div className={styles.quote}>
      <div className={styles.container}>
        <q>"Success is not final, failure is not fatal: It is the courage to continue that counts."</q>
        <span>Winston Churchill</span>
      </div>
    </div>
  );
};

export default Quote;
