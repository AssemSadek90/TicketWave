import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import server from '../server';
import DisplayEvents from './DisplayEvents/Displayevents';
import '../App.css';

const Home = () => {
  const [events, setEvents] = useState([]);
  const userId = parseInt(localStorage.getItem('userId'));
  useEffect(() => {
    server.get(`/eventsData`).then((response) => {
      const data = response.data;
      if (data) setEvents(data);
      // console.log(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <DisplayEvents test-id="event-container" eventsData={events} />
    </div>
  );
};

export default Home;
