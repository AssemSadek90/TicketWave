/**
A functional React component that displays a banner with a foreground image over a background image.
@component
@param {Object} props - The component props.
@param {Object} props.event - The event object containing the banner logo and foreground image.
@param {string} props.event.logo - The URL of the banner logo image.
@param {string} props.event.foreground - The URL of the foreground image to overlay on the banner.
@returns {JSX.Element} A React component that displays a banner with a foreground image over a background image.
*/
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
