import EventItem from './EventItem';

export default function EventsList(props) {
  console.log(props);
  const eventsList = props.eventsData.map((ev) => <EventItem event={ev} />);
  console.log(eventsList);
  return eventsList;
}
