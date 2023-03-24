import React, { useState } from "react";
import"./publish.css"
import Header from "./Header";
import"./ticket-icon.jpg";
import RadioApp from './radio1';
import EventImage from "./image";
import Upper from "./upper part";

function Publish() {
    const [Event_id, setEvent_id] = useState("");

    // fetch the data from the API OR BackEnd

  fetch('http://localhost:3000/Event_id')
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    setEvent_id(data)
  })
  .catch(error => console.error(error));


  // var EventID = Event_id.ID;
  // var Image = "";
  // var Title = Event_id.EventName;
  // var EventState = Event_id.EventState;
  // var EventDate = "Date";
  //   var Price = Event_id.price;
  // var Availability = Event_id.Availability;

  return <div className='publish-preview'>
    <Header />
    <article id='event-preview-card' className='event-preview-card'>
     <EventImage img={Event_id.logo}/>
     <Upper  price={Event_id.price}  Name={Event_id.Name} Availability={Event_id.Availability}   created={Event_id.created} EventState={Event_id.online_event}/>
    {/* <section className="event-preview-card__content">
      <h1 className='eds-text-bl'> {Title}</h1>
      <div  className="event-preview-card__date eds-text--truncate eds-l-mar-top-1">{EventDate}</div>
      <div className="event-preview-card__venue eds-text--truncate eds-l-mar-top-1">{EventState}</div>
      {/* <Monda Price={Price} Availability={Availability}  ></Monda> */}
      {/* <div className='eds-vector-image'>
        <svg  className='icon-1'    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,10V6c0-1.11-0.9-2-2-2H4C2.9,4,2.01,4.89,2.01,6v4C3.11,10,4,10.9,4,12s-0.89,2-2,2v4c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-4c-1.1,0-2-0.9-2-2S20.9,10,22,10z M13,17.5h-2v-2h2V17.5z M13,13h-2v-2h2V13z M13,8.5h-2v-2h2V8.5z"/></g></g></g> </svg>
        <i className='eds-vector' > {Price}   </i> 
        <svg className='icon-1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> 
        <i className='eds-vector'> {Availability}</i>
      </div>
    </section> */} 
    </article>
    <div className='eds-g-group publish-preview__container'>
    <RadioApp/>
    </div>
    </div>
    }

export default Publish
