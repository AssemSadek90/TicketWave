import React, { useState } from 'react';
import styles from './Displayevents.module.css';
import EventItem from './EventItem';

function DisplayEvents(props) {
  const [displayAll, setDisplayAll] = useState(false);
  function handleClickButton() {
    setDisplayAll(true);
  }

  // assume the props.events an array of objects
  const events = props.eventsData;

  // calculate the number of rows needed to display all events, each row should have at most 4 events
  const numRows = Math.ceil(events.length / 4);
  console.log(numRows);

  // create an array of row arrays, where each inner row array contains up to 4 events
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const startIdx = i * 4;
    const endIdx = startIdx + 4;
    const row = events.slice(startIdx, endIdx);
    rows.push(row);
  }
  console.log(rows);

  // map each row array to a <div> element with class "event-row", which contains up to 4 <EventItem> elements.
  const eventRows = rows.map((row, i) => {
    const eventItems = row.map((event) => {
      return (
        <EventItem
          imageSrc={event.path}
          location={event.location}
          date={event.date}
          title={event.title}
        />
      );
    });

    return (
      <div className={styles.event_row} key={i}>
        {eventItems}
      </div>
    );
  });

  return (
    <div className={styles.entertainment_events}>
      <h2>events in location</h2>
      {displayAll ? (
        <>{eventRows}</>
      ) : (
        <>
          {eventRows[0]}
          <button
            className={styles.see_more_button}
            onClick={handleClickButton}
          >
            see more
          </button>
        </>
      )}
    </div>
  );
}

export default DisplayEvents;
