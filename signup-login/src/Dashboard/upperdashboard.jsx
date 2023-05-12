/**
 * Renders an upper dashboard with netsales data.
 * @returns {JSX.Element} The JSX element containing the upper dashboard.
 */
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Netsales from './Netsales';
import server from '../server';

function upperdashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [event_id, setevent_id] = useState('');
  // fetch("http://localhost:3000/events")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setEvent_id(data[0]);
  //   })
  //   .catch((error) => console.error(error));
  localStorage.setItem('Event_id', 2);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const Event_id = localStorage.getItem('Event_id');

    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    server
      .get(`/events/private/retrieve/${Event_id}`, requestOptions)
      .then((response) => {
        const data = response.data;
        //console.log('data', data);
        if (data) {
          setevent_id(data);
          console.log(data);
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

  ////////Backend/////
  //      const accessToken = localStorage.getItem("accessToken");
  //   const Event_id = localStorage.getItem("Event_id");

  //   const requestOptions = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   // Create an array of promises for the two GET requests
  //   const promises = [
  //     server.get(`/events/retrieve/${Event_id}`, requestOptions),
  //     server.get(`/events/price/${Event_id}`, requestOptions),
  //          server.get(`/events/sales_by_ticket/${Event_id},requestOptions)
  // `);
  //   ];

  //   Promise.all(promises)
  //     .then((responses) => {
  //       // Process the response data from the first GET request
  //       const retrieveData = responses[0].data;
  //       if (retrieveData) {
  //         setevent_id(retrieveData);
  //         console.log(retrieveData);
  //       }

  //       // Process the response data from the second GET request
  //       const priceData = responses[1].data.results;
  //       if (priceData) {
  //         // Process the data from the second GET request
  //         console.log(priceData);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  //  //  eslint-disable-next-line react-hooks/rules-of-hooks
  // const [Nsales, setNsales] = useState("");
  // //  eslint-disable-next-line react-hooks/rules-of-hooks
  // const [Sold, setSold] = useState("");

  // //  eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   const requestOptions = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   server
  //     .get(`/events/total_sales/${Event_id}`)

  //     .then((response) => {
  //       setNsales(response.data["total sales"]);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.error(error));

  //   server
  //     .get(`/events/amount_of_tickets_sold/${Event_id}`,)
  //     .then((response) => {
  //       setSold(response.data["tickets sold"]);
  //       console.log(response.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  // return (
  //   <div className="eds-data-table__wrapper">
  //     <div className="cards-carousel eds-g-cell eds-g-cell-12-12">
  //       <Netsales
  //         Nsales={Nsales}
  //         Sold={Sold}
  //         Paid={0}
  //         Tickets={0}
  //         Gross={0}
  //         Free={0}
  //       />
  //     </div>
  return (
    <div className="eds-data-table__wrapper">
      <div className="cards-carousel eds-g-cell eds-g-cell-12-12">
        <Netsales
          Nsales={event_id.sales}
          Sold={event_id.ticketsSold}
          Paid={event_id.paid}
          Tickets={event_id.Tickets}
          Gross={event_id.gross}
          Free={event_id.Free}
        />
      </div>
      <div className="eds-g-cell eds-g-cell-12-12 eds-g-cell-sm-4-12"></div>
    </div>
  );
}

export default upperdashboard;
