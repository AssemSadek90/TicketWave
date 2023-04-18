import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import server from '../server';
import DisplayEvents from './DisplayEvents/Displayevents';
import '../App.css';

/**
 * Represents the Home component, which displays the main page of the application.
 * @returns {JSX.Element} The Home component UI.
 */
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
    //this svg is temporary and is going to be replaced
    <div>
      <Navbar />
      <svg style={{ width: '100%', height: '400px' }}>
        <image
          href="https://cdn.evbstatic.com/s3-build/fe/build/images/6c5d49c679ae35c60ad2a035492632d3-1_tablet_1067x470.jpg"
          width="100%"
          height="100%"
        />
      </svg>
      <DisplayEvents id="event-container" eventsData={events} />
    </div>
  );
};

export default Home;
