import React, { useState } from 'react';
import styles from './Displayevents.module.css';
import EventsList from './EventList';
import CategoriesNav from './Categories';

function DisplayEvents(props) {
  const [displayAll, setDisplayAll] = useState(false);
  function handleClickButton() {
    setDisplayAll(true);
  }

  // assume the props.events an array of objects
  const events = props.eventsData;

  return (
    <div>
      <svg>
        <image
          href="https://cdn.evbstatic.com/s3-build/fe/build/images/6c5d49c679ae35c60ad2a035492632d3-1_tablet_1067x470.jpg"
          width="100%"
          height="100%"
        />
      </svg>
      <CategoriesNav />
      <h2 data-testid="events-header">Events In Cairo</h2>
      <div
        data-testid="event-display-container"
        className={styles.entertainment_events}
      >
        <EventsList eventsData={events.slice(0, 8)} />
      </div>
      <h2 data-testid="events-header">More Events</h2>
      {displayAll ? (
        <div className={styles.entertainment_events}>
          <EventsList eventsData={events.slice(8)} />
        </div>
      ) : (
        <>
          <div className={styles.entertainment_events}>
            <EventsList eventsData={events.slice(8, 12)} />
          </div>
          {events[12] && (
            <button
              data-testid="see-more-button"
              className={styles.see_more_button}
              onClick={handleClickButton}
            >
              see more
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default DisplayEvents;
