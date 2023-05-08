import React, { useState,useEffect } from "react";
import Header from "./Header";
import"./ticket-icon.jpg";
import RadioApp from './radio1';
import EventImage from "./image";
import Upper from "./upper part";
import server from '../server';
import "./Publish.css";

function Publish() {
  const [event_id, setevent_id] = useState("");
  const dateObject = new Date(event_id.created);

    // fetch the data from the API OR BackEnd
  
  fetch('http://localhost:3000/Event_id')
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    setevent_id(data[0])
  })
  .catch(error => console.error(error));
    useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };})
  //   server
  //     .get(`/events/retrieve/${event_id}`, requestOptions)
  //     .then((response) => {
  //       const data = response.data.results;
  //       //console.log('data', data);
  //       if (data) {
  //         setevent_id(data);
  //         console.log(data);
  //         //console.log('orders', orders);
  //       }
  //     })
  //     .then(() => {
  //     server
  //     .get(`/events/price/${event_id}`, requestOptions)
  //     .then((response) => {
  //       const data = response.data.results;
  //       //console.log('data', data);
  //       if (data) {
  //         setevent_id(data);
  //         console.log(data);
  //         //console.log('orders', orders);
  //       }
  //     })
  //     })
  //     .catch((error) => console.log(error));
  //   //console.log('orders', orders);
  // }, []);

  return <div className='publish-preview'>
    <Header />
    <article id='event-preview-card' className='event-preview-card'>
     <EventImage logo={event_id.logo}/>
     <Upper  price={event_id.Price}  Name={event_id.Name} capacity={event_id.capacity}   created={dateObject.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' })} status={event_id.status}/>
    </article>
    <div className='eds-g-group publish-preview__container'>
    <RadioApp/>
    </div>
    </div>
    }

export default Publish;
