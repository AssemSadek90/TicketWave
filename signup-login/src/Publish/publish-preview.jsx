import React, { useState } from "react";
import Header from "./Header";
import"./ticket-icon.jpg";
import RadioApp from './radio1';
import EventImage from "./image";
import Upper from "./upper part";
import "./Publish.css";

function Publish() {
  const [Event_id, setEvent_id] = useState("");

    // fetch the data from the API OR BackEnd

  fetch('http://localhost:3000/Event_id')
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    setEvent_id(data[0])
  })
  .catch(error => console.error(error));
  return <div className='publish-preview'>
    <Header />
    <article id='event-preview-card' className='event-preview-card'>
     <EventImage logo={Event_id.logo}/>
     <Upper  price={Event_id.Price}  Name={Event_id.Name} Availability={Event_id.Availability}   created={Event_id.created} EventState={Event_id.online_event}/>
    </article>
    <div className='eds-g-group publish-preview__container'>
    <RadioApp/>
    </div>
    </div>
    }

export default Publish
