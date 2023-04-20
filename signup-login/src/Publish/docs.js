import React, { useState, useEffect } from "react";
import Header from "./Header";
import"./ticket-icon.jpg";
import RadioApp from './radio1';
import EventImage from "./image";
import Upper from "./upper part";
import "./Publish.css";

/**
 * A React functional component that renders a preview of an event
 *
 * @function
 * @returns {JSX.Element} The component's markup.
 */
function Publish() {

  /**
   * The state variable for the event ID, initially an empty string.
   *
   * @typedef {Object} EventIdState
   * @property {string} Event_id - The event ID.
   */

  /**
   * The state variable for the event ID.
   *
   * @type {EventIdState}
   * @function
   * @name Event_id
   * @param {string} value - The new value of the state variable.
   * @returns {void}
   */
  const [Event_id, setEvent_id] = useState("");

  /**
   * Fetches the event data from the backend and updates the `Event_id` state.
   *
   * @function
   * @name fetchEventData
   * @returns {void}
   */
  // function fetchEventData() {
  //   fetch('http://localhost:3000/Event_id')
  //     .then(response => response.json())
  //     .then(data => {
  //       setEvent_id(data)
  //     })
  //     .catch(error => console.error(error));
  // }

  //  useEffect(() => {
  //   fetchEventData();
  // }, []);

  /**
   * Renders the `Publish` component.
   *
   * @function
   * @name Publish
   * @returns {JSX.Element} The component's markup.
   */
  return (
    <div className='publish-preview'>
      <Header />
      <article id='event-preview-card' className='event-preview-card'>
        <EventImage logo={Event_id.logo} />
        <Upper
          price={Event_id.price}
          Name={Event_id.Name}
          Availability={Event_id.Availability}
          created={Event_id.created}
          EventState={Event_id.online_event}
        />
      </article>
      <div className='eds-g-group publish-preview__container'>
        <RadioApp />
      </div>
    </div>
  );
}

export default Publish;
