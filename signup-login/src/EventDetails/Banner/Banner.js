import React from "react";
import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={styles.image_container}>
      <img
        src={props.event.logo}
        alt="banner"
        className={styles.image_cover}
      ></img>
      <img
        src={props.event.logo}
        alt="foreground"
        className={styles.foreground_image}
      ></img>
    </div>
  );
}

export default Banner;
