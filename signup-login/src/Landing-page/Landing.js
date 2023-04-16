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
      <svg style={{ width: '100%', height: '400px' }}>
        <image
          href="https://cdn.evbstatic.com/s3-build/fe/build/images/6c5d49c679ae35c60ad2a035492632d3-1_tablet_1067x470.jpg"
          width="100%"
          height="100%"
        />
      </svg>
      <DisplayEvents data-testid="event-container" eventsData={events} />
    </div>
  );
};

export default Home;
