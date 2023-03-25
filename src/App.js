import React, {Component} from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar';
import EventDetails from './EventDetails/EventDetails';
import Banner from './Banner/Banner'

class App extends Component{


  render (){ 

    return ( 
    <body>
      <NavigationBar />
      <Banner />
      <EventDetails />
    </body>
  );
}}

export default App;
