import React, { Component } from 'react';
import NavBar from '../NavBar/Navbar'
import EventDetails from './EventDetails';
import Banner from './Banner/Banner';

class EventDetailsPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <EventDetails />
      </div>
    );
  }
}

export default EventDetailsPage;
