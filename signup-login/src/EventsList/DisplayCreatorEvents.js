import React from 'react';
import EventsListCreator from './EventsListCreator';

/**
 * Component for displaying events.
 * @component
 * @param {Object} props - The props object containing the events data.
 * @returns {JSX.Element} JSX representation of the component.
 */
export default function DisplayEvents(props) {
  /**
   * The array of events data.
   * @type {Array}
   */
  const events = props.eventsData;

  return (
    <div>
      <div>
        <EventsListCreator eventsData={events} />
      </div>
    </div>
  );
}
