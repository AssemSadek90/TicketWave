import EventsListItem from './EventsListItem';
import './EventsList.css';

export default function EventsListCreator(props) {
  //console.log(props.eventsData);
  const eventsList = props.eventsData.map((ev, key) => (
    <EventsListItem key={key} event={ev} id={`event-${key}`} />
  ));
  return eventsList;
}
