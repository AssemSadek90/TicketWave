import EventItem from './EventItem';

export default function EventsList(props) {
  const eventsList = props.eventsData.map((ev) => <EventItem event={ev} />);
  return eventsList;
}
