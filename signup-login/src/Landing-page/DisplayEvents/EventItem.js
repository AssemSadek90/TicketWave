import React from 'react';
import styles from './Displayevents.module.css';
import './Displayevents';

export default function EventItem(props) {
  return (
    <div className={styles.event_element} style={{}}>
      <svg className={styles.event_image} width="100%" height="70%">
        <image href={props.imageSrc} width="100%" height="100%" />
      </svg>
      <div className={styles.event_details} style={{ marginTop: '10px' }}>
        <p style={{ fontWeight: 'bold' }}>{props.location}</p>
        <p>{props.date}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
