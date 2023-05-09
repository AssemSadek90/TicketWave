import React from 'react';
import styles from './Displayevents.module.css';
import EventsList from './EventList';
import CategoriesNav from './Categories';
import MoreEvents from './MoreEvents';
import Location from '../Location/Location';

/**
 * DisplayEvents is a React component that displays a list of events, sorted by category.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.eventsData - An array of objects representing the events to display.
 *
 * @returns {JSX.Element} A React component that displays the categories navbar and a list of events.
 */
export default function DisplayEvents(props) {
  // assume the props.events an array of objects
  const events = props.eventsData;

  return (
    <div>
      <h2 id="events-header" className={styles.events_header}>
        Events In {<Location />}
      </h2>
      <div id="event-display-container" className={styles.entertainment_events}>
        <EventsList eventsData={events.slice(0, 8)} />
      </div>
      {events[8] && <MoreEvents events={events} header="more events" />}
    </div>
  );
}
