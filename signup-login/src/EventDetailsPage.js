import React, {Component} from 'react';
import './EventDetailsPage.css';
import NavigationBar from './NavigationBar/NavigationBar';
import EventDetails from './EventDetails/EventDetails';
import Banner from './Banner/Banner'

class EventDetailsPage extends Component{


  render (){ 

    return ( 
    <body>
      <NavigationBar />
      <Banner />
      <EventDetails />
    </body>
  );
}}

export default EventDetailsPage;
