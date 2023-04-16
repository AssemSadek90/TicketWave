import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import server from '../server';
import DisplayEvents from './DisplayEvents/Displayevents';
import '../App.css';

const Home = () => {
  const [events, setEvents] = useState([]);
  const userId = parseInt(localStorage.getItem('userId'));
  useEffect(() => {
    server.get(`/events/list`).then((response) => {
      const primarydata = response.data;
      const data = primarydata.results;
      if (data) setEvents(data);
      //console.log(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <DisplayEvents data-testid="event-container" eventsData={events} />
    </div>
  );
};

export default Home;
