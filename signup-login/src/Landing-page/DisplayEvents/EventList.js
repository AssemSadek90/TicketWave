import EventItem from './EventItem';

export default function EventsList(props) {
  //console.log(props.eventsData);
  const eventsList = props.eventsData.map((ev, key) => (
    <EventItem key={key} event={ev} />
  ));
  return eventsList;
}
