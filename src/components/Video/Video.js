import React from "react";
import styles from "./Video.module.css"; 


import thevideo from '../../assets/images/awesome-video.mp4'

const VideoSection = () => {
  return (
    <div className={styles.video}>
      <video autoPlay muted loop className={styles.videoPlayer}>
        <source src={thevideo} type="video/mp4" />
      </video>
      <div className={styles.text}>
        <h2>Super Awesome Video Here</h2>
        <p>It's All You Need</p>
        <button>See More</button>
      </div>
    </div>
  );
};

export default VideoSection;
