import EventsList from './EventList';
import styles from './Displayevents.module.css';
import { useState } from 'react';

/**
 * Displays a list of events, with an option to expand and view more events.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.events - An array of event objects to display.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function MoreEvents(props) {
  /**
   * React state to keep track of whether all events should be displayed or not.
   */
  const [displayAll, setDisplayAll] = useState(false);

  /**
   * Click event handler for the "see more" button. Sets the displayAll state to true, so that all events are displayed.
   */
  function handleClickButton() {
    setDisplayAll(true);
  }

  /**
   * Renders a list of events. Displays only the first 4 events by default, and displays all events when the "see more" button is clicked.
   */
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
