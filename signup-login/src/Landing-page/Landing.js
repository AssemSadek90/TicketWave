import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import server from '../server';
import DisplayEvents from './DisplayEvents/Displayevents';
import '../App.css';

const Home = () => {
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
      <Navbar />
      <DisplayEvents test-id="event-container" eventsData={events} />
    </div>
  );
};

export default Home;
