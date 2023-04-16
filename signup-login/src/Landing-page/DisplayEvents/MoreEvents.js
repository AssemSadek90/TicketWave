import EventsList from './EventList';
import styles from './Displayevents.module.css';
import { useState } from 'react';

export default function MoreEvents(props) {
  const [displayAll, setDisplayAll] = useState(false);
  function handleClickButton() {
    setDisplayAll(true);
  }
  return (
    <div>
      <h2 data-testid="events-header">More Events</h2>
      {displayAll ? (
        <div className={styles.entertainment_events}>
          <EventsList eventsData={props.events.slice(8)} />
        </div>
      ) : (
        <>
          <div className={styles.entertainment_events}>
            <EventsList eventsData={props.events.slice(8, 12)} />
          </div>
          {props.events[12] && (
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
