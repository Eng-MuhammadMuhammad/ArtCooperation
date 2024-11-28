import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <div className="container">
        <div className={styles.mainHeading}>
          <h2>Pricing</h2>
          <p>
            Choose the perfect plan for your business. Whether you're just getting started or you're looking to scale,
            we have the right package for you.
          </p>
        </div>
        <div className={styles.plans}>
          <div className={styles.plan}>
            <div className={styles.head}>
              <h3>Basic</h3>
              <span>19</span>
            </div>
            <ul>
              <li>1 Website</li>
              <li>5 GB Storage</li>
              <li>24/7 Support</li>
              <li>Email Support</li>
            </ul>
            <div className={styles.foot}>
              <a href="/">Buy Now</a>
            </div>
          </div>
          <div className={styles.plan}>
            <div className={styles.head}>
              <h3>Premium</h3>
              <span>29</span>
            </div>
            <ul>
              <li>3 Websites</li>
              <li>15 GB Storage</li>
              <li>24/7 Support</li>
              <li>Phone & Email Support</li>
            </ul>
            <div className={styles.foot}>
              <a href="/">Buy Now</a>
            </div>
          </div>
          <div className={styles.plan}>
            <div className={styles.head}>
              <h3>Pro</h3>
              <span>39</span>
            </div>
            <ul>
              <li>10 Websites</li>
              <li>50 GB Storage</li>
              <li>24/7 Support</li>
              <li>Dedicated Account Manager</li>
            </ul>
            <div className={styles.foot}>
              <a href="/">Buy Now</a>
            </div>
          </div>
          <div className={styles.plan}>
            <div className={styles.head}>
              <h3>Platinum</h3>
              <span>49</span>
            </div>
            <ul>
              <li>Unlimited Websites</li>
              <li>100 GB Storage</li>
              <li>24/7 Support</li>
              <li>Dedicated Account Manager</li>
              <li>Priority Support</li>
            </ul>
            <div className={styles.foot}>
              <a href="/">Buy Now</a>
            </div>
          </div>
        </div>
        <p className={styles.contactText}>Contact us if you have a special request</p>
        <a href="/" className={styles.contactLink}>Contact Us</a>
      </div>
    </div>
  );
}

export default Pricing;
