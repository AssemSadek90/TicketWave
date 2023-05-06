import { useEffect, useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayEvents from './DisplayCreatorEvents';
import EventsListNavBar from './EventsListNavBar';
import './EventsList.css';
import server from '../server';

const CreatorEvent = () => {
  //const userID = localStorage.getItem('userID');
  const userID = 1;
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    server
      .get(`/events/list/`, requestOptions)
      .then((response) => {
        const data = response.data.results;
        if (data) setEvents(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <EventsListNavBar />
      </div>
      <DisplayEvents eventsData={events} />
    </div>
  );
};

export default CreatorEvent;
