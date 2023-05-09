import EventsListItem from './EventsListItem';
import './EventsList.css';

/**
 * Component for creating a list of events.
 * @component
 * @param {Object} props - The props object containing the events data.
 * @returns {Array<JSX.Element>} Array of JSX elements representing the events list.
 */
export default function EventsListCreator(props) {
  //console.log(props.eventsData);
  /**
   * Array of JSX elements representing the events list.
   * @type {Array<JSX.Element>}
   */
  const eventsList = props.eventsData.map((ev, key) => (
    <EventsListItem key={key} event={ev} id={`event-${key}`} />
  ));

  return eventsList;
}
