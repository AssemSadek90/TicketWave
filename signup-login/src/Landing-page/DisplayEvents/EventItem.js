import React from 'react';
import styles from './Displayevents.module.css';
import './Displayevents';

/**
 * A functional component that displays an event item, including its image,
 * start date, ID, and summary. The displayed information is to be updated.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.event - The event object to display.
 * @param {string} props.event.path - The URL path of the event image.
 * @param {string} props.event.start - The start date of the event.
 * @param {number} props.event.id - The unique ID of the event.
 * @param {string} props.event.summary - The summary description of the event.
 * @return {JSX.Element} The rendered component.
 */
export default function EventItem(props) {
  console.log(props);
  return (
    <div id="event-element" className={styles.event_element} style={{}}>
      <svg
        id="event-poster"
        className={styles.event_image}
        width="100%"
        height="70%"
      >
        <image href={props.event.path} width="100%" height="100%" />
      </svg>
      <div
        id="event-details"
        className={styles.event_details}
        style={{ marginTop: '10px' }}
      >
        <p id="event-detail-1" style={{ fontWeight: 'bold' }}>
          {props.event.start}
        </p>
        <p id="event-detail-2">{props.event.id}</p>
        <p id="event-detail-3">{props.event.organizer}</p>
      </div>
    </div>
  );
}
