/**
 * Renders an upper dashboard with netsales data.
 * @returns {JSX.Element} The JSX element containing the upper dashboard.
 */
import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Netsales from './Netsales';
import server from '../server';
import REACT_APP_SERVER_NAME from '../server';

function upperdashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [event_id, setevent_id] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newEvent, setNewEvent] = useState('');
  var eventDashboard = {};
  var gross = {};
  var cap = {};
  var tickets_Sold = {};
  async function fetchTotalSales(event_id) {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const Event_id = localStorage.getItem('Event_id');
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await server.get(
        `/events/total_sales/${Event_id}/`,
        requestOptions
      );
      const totalSales = response.data; // Assuming the response contains the total sales
      gross = totalSales;
      eventDashboard.gross = gross['total sales'];
      //console.log('totalSales', totalSales);
      //gross.push(totalSales);
      //console.log('gross', gross);
      return totalSales;
    } catch (error) {
      console.error(`Failed to retrieve total sales for event ID`, error);
      return null;
    }
  }

  async function fetchCapacity(event_id) {
    const id = localStorage.getItem('Event_id');
    try {
      const accessToken = localStorage.getItem('accessToken');
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };
      console.log('fetching');
      const response = await server.get(
        `/events/private/retrieve/${id}/`,
        requestOptions
      );
      console.log('response', response);
      //console.log('cap', response.data.capacity);
      const data = response.data;
      const capacity = data.capacity;
      console.log('cap', cap);
      eventDashboard.capacity = capacity;
      //console.log('cap', cap);
      return capacity;
    } catch (error) {
      console.error(`Failed to retrieve capacity for event ID `, error);
      return null;
    }
  }

  async function fetchTicketsSold(event_id) {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const Event_id = localStorage.getItem('Event_id');
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await server.get(
        `/events/amount_of_tickets_sold/${Event_id}/`,
        requestOptions
      );
      const tickets_Sold = response.data;
      //console.log('ticketsSold', ticketsSold);
      //tickets.push(ticketsSold);
      //console.log('tickets', tickets);
      eventDashboard.ticketsSold = tickets_Sold['tickets sold'];
      console.log('ticketsSold', tickets_Sold);
      console.log('ticketsSoldev', eventDashboard.ticketsSold);
      if (eventDashboard.ticketsSold === undefined) {
        eventDashboard.ticketsSold = tickets_Sold['ticketsSold'];
        console.log('ticketsSoldreal', tickets_Sold);
      }
      console.log('eventdata', eventDashboard);
      return tickets_Sold;
    } catch (error) {
      console.error(`Failed to retrieve tickets sold for event ID`, error);
      return null;
    }
  }

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
      .get(`/events/retrieve/${Event_id}`, requestOptions)
      .then((response) => {
        const data = response.data;
        //console.log('data', data);
        if (data) {
          setevent_id(data);
          eventDashboard = data;
          console.log('eventdata', eventDashboard);
          //console.log('orders', orders);
        }
      })
      .then(() => {
        console.log('fetchTotalSales');
        // if (REACT_APP_SERVER_NAME === 'https://ticketwave.me/api') {
        console.log('yeahh');
        return fetchTotalSales(eventDashboard);
        //}
      })
      .then(() => {
        console.log('fetchCapacity');
        //if (REACT_APP_SERVER_NAME === 'https://ticketwave.me/api') {
        console.log('yeahh');
        return fetchCapacity(eventDashboard);
        //}
      })
      .then(() => {
        console.log('fetchTicketsSold');
        //if (REACT_APP_SERVER_NAME === 'https://ticketwave.me/api') {
        console.log('yeahh');
        return fetchTicketsSold(eventDashboard);
        //}
      })
      .then(() => {
        setNewEvent(eventDashboard);
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
          Nsales={newEvent.gross}
          Sold={newEvent.ticketsSold}
          Paid={newEvent.paid}
          Tickets={newEvent.capacity}
          Gross={newEvent.gross}
          Free={newEvent.free}
        />
      </div>
      <div className="eds-g-cell eds-g-cell-12-12 eds-g-cell-sm-4-12"></div>
    </div>
  );
}

export default upperdashboard;
