import React from 'react';
import EventsListCreator from './EventsListCreator';

export default function DisplayEvents(props) {
  // assume the props.events an array of objects
  const events = props.eventsData;

  return (
    <div>
      <div>
        <EventsListCreator eventsData={events} />
      </div>
    </div>
  );
}
