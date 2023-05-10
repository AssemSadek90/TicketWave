import React, { useEffect, useState } from 'react';
import styles from './Displayevents.module.css';
import './Displayevents';
import { Navigate, useNavigate } from 'react-router-dom';

/**
 * Displays an event item, including its image, start date, ID, and summary.
 * When clicked, the event ID is stored in local storage and the user is
 * navigated to the event details page.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.event - The event object to display.
 * @param {string} props.event.path - The URL path of the event image.
 * @param {string} props.event.start - The start date of the event.
 * @param {number} props.event.id - The unique ID of the event.
 * @param {string} props.event.summary - The summary description of the event.
 * @return {JSX.Element} The rendered component.
 */
export default function EventItem(props) {
  const eventLink = '/event-details/' + props.event.id;
  const realStart = () => {
    const date = new Date(props.event.start);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    let hour = date.getHours();
    const amPm = hour < 12 ? 'am' : 'pm';
    hour = hour % 12 || 12;
    const minute = date.getMinutes();

    return `${monthName} ${day} · ${hour}:${minute
      .toString()
      .padStart(2, '0')} ${amPm}`;
  };

  return (
    <div id="event-element" className={styles.event_element}>
      <a href={eventLink}>
        <svg
          id="event-poster"
          className={styles.event_image}
          width="100%"
          height="50%"
        >
          <image href={props.event.url} width="100%" height="100%" />
        </svg>
        <div id="event-details" className={styles.event_details}>
          <p id="event-detail-1" className={styles.event_detail_1}>
            {props.event.name && props.event.name.slice(0, 24)}
            {props.event.name[24] && '...'}
          </p>
          <p id="event-detail-2" className={styles.event_detail_2}>
            {realStart()}
          </p>
          <p id="event-detail-3" className={styles.event_detail_3}>
            {props.event.organizer}
          </p>
          <p id="event-detail-3" className={styles.event_detail_4}>
            {props.event.description && props.event.description.slice(0, 24)}
            {props.event.description[24] && '...'}
          </p>
        </div>
      </a>
    </div>
  );
}
