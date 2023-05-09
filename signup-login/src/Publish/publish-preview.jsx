import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./ticket-icon.jpg";
import RadioApp from "./radio1";
import EventImage from "./image";
import Upper from "./upper part";
import server from "../server";
import "./Publish.css";

function Publish() {
  // const event_id= localStorage.getItem('event_id');

  const [event_id, setevent_id] = useState("");
  // const dateObject = new Date(event_id.created);
  const [dateObject, setdateObject] = useState(new Date());
  // fetch the data from the API OR BackEnd
  localStorage.setItem("Event_id", 2);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const Event_id = localStorage.getItem("Event_id");

    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    server
      .get(`/events/retrieve/${Event_id}`, requestOptions)
      .then((response) => {
        const data = response.data;
        //console.log('data', data);
        if (data) {
          setevent_id(data);
          console.log(data);
          const dates = new Date(data.created);
          setdateObject(dates);
          //console.log('orders', orders);
        }
        // return server.get(`/events/price/${Event_id}`, requestOptions);
        // })
        // .then((response) => {
        //   const data = response.data.results;
        //   //console.log('data', data);
        //   if (data) {
        //     setevent_id(data);
        //     console.log(data);
        //     //console.log('orders', orders);
        //   }
      })
      .catch((error) => console.log(error));
    //console.log('orders', orders);
  }, []);

  // Promise.all([
  //   server.get(`/events/retrieve/${Event_id}`, requestOptions),
  //   server.get(`/events/price/${Event_id}`, requestOptions),
  // ])
  //   .then((responses) => {
  //     const eventData = responses[0].data;
  //     const priceData = responses[1].data;
  //     if (eventData && priceData) {
  //       setevent_id(eventData);
  //       console.log(eventData);
  //       const dates = new Date(eventData.created);
  //       setdateObject(dates);
  //       setPrice(priceData);
  //     }
  //   })
  //   .catch((error) => console.log(error));

  //   useEffect(() => {
  //   // const id=localStorage.getItem('event_id')
  //   const id=1;
  //   // const event_id= localStorage.getItem('event_id');
  //   fetch(`http://localhost:3000/Event/?id=${id}`)
  //   // fetch('http://localhost:3000/Event/?id=${event_id}')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setevent_id(data[0])
  //     const dates=new Date(data[0].created);
  //     setdateObject(dates)
  //     console.log(data[0].created)
  //   })
  //   .catch(error => console.error(error))
  //  }, []);
  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   const requestOptions = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };})
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
  //   useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   const requestOptions = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   Promise.all([
  //     server.get(`/events/retrieve/${event_id}`, requestOptions),
  //     server.get(`/events/price/${event_id}`, requestOptions),
  //   ])
  //     .then((responses) => {
  //       const data = responses.map((response) => response.data.results);

  //       if (data) {
  //         setevent_id(data);
  //         console.log(data);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="publish-preview">
      <Header />
      <article id="event-preview-card" className="event-preview-card">
        <EventImage logo={event_id.logo} />
        <Upper
          price={event_id.price}
          Name={event_id.name}
          capacity={event_id.capacity}
          created={dateObject.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "2-digit",
          })}
          status={event_id.status}
        />
      </article>
      <div className="eds-g-group publish-preview__container">
        <RadioApp />
      </div>
    </div>
  );
}

export default Publish;
