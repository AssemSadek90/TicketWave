import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import EventDetails from './EventDetails';
import Banner from './Banner/Banner';

class EventDetailsPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Banner />
        <EventDetails />
      </div>
    );
  }
}

export default EventDetailsPage;
