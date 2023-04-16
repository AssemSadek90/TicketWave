import EventItem from './EventItem';

/**
 *A React functional component that renders a list of events using the EventItem component.
 *@param {object} props - Component props
 *@param {array} props.eventsData - An array of event objects to be rendered
 *@returns {JSX.Element} - A list of event items
 */
export default function EventsList(props) {
  //console.log(props.eventsData);
  const eventsList = props.eventsData.map((ev, key) => (
    <EventItem key={key} event={ev} />
  ));
  return eventsList;
}
