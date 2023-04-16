import React from 'react';
import styles from './Displayevents.module.css';
import EventsList from './EventList';
import CategoriesNav from './Categories';
import MoreEvents from './MoreEvents';

function DisplayEvents(props) {
  // assume the props.events an array of objects
  const events = props.eventsData;

  return (
    <div>
      <CategoriesNav />
      <h2 data-testid="events-header">Events In Cairo</h2>
      <div
        data-testid="event-display-container"
        className={styles.entertainment_events}
      >
        <EventsList eventsData={events.slice(0, 8)} />
      </div>
      {events[8] && <MoreEvents events={events} />}
    </div>
  );
}

export default DisplayEvents;
