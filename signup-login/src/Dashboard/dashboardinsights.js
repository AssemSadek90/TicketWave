import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Upperdashboard from './upperdashboard';
import Share from './Share';
import Sales from './Sales';
import server from '../server';

/**
 * Renders a dashboard UI that displays various insights and data related to an event.
 * @function
 * @returns {JSX.Element} - The dashboard UI.
 */
function dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Event_id, setEvent_id] = useState('');
  /**
   * Fetches event data from the server and updates the state with the data.
   * @function
   * @returns {void}
   */
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
          setEvent_id(data);
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
  //  function fetchEventData(){
  //  fetch('http://localhost:3000/Event_id')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  //   setEvent_id(data[0])
  // })
  // .catch(error => console.error(error));}
  //   // Call the fetchEventData function once when the component mounts.
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useEffect(() => {
  //   fetchEventData();
  // }, []);
  return (
    /**
     * The dashboard UI that displays various insights and data related to an event.
     * @returns {JSX.Element} - The dashboard UI.
     */
    <div className="eds-l-mar-bot-8 snipcss-gpf4c layout">
      <div
        className="dashboard-insights eds-g-grid st-current snipcss-ynrSv"
        data-testid="dashboard-insights"
      >
        <div className="eds-g-cell eds-g-cell-12-12 eds-text-hm__title dashboard-main-title eds-l-pad-hor-3">
          <h1 className="st-hover">Dashboard</h1>
        </div>
        <Upperdashboard />
        <Share EventURL={Event_id.url} />
        <Sales />
      </div>
    </div>
  );
}

export default dashboard;
