import React from 'react';
import EventsListCreator from './EventsList';
import EventsListNavBar from './EventsListNavBar';

export default function DisplayEvents(props) {
  // assume the props.events an array of objects
  const events = props.eventsData;

  return (
    <div>
      <div>
        <EventsListCreator eventsData={events.slice(0, 8)} />
      </div>
    </div>
  );
}
