import React from "react";
import styles from "./Banner.module.css";
import MEVS from "./MEVS.avif";

function Banner() {
  return (
    <div className={styles.image_container}>
      <img src={MEVS} alt="banner" className={styles.image_cover}></img>
      <img
        src={MEVS}
        alt="foreground"
        className={styles.foreground_image}
      ></img>
    </div>
  );
}

export default Banner;
