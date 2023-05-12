/**
@module EventDetailsPage
*/
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import EventDetails from "./EventDetails";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import server from "../server";
import { isValidSession } from "../Credentials/Credentials";
import NANavbar from "../NavBar/NANavbar";
/**
Event details page component
@function
@returns {JSX.Element} EventDetailsPage component
*/
function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  /**
Fetches the event data from the server
@async
@function
@param {string} id - Event ID
@returns {Promise<void>} - Promise object representing the completion of the fetch operation
*/
  async function fetchEvent(id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_NAME}/events/retrieve/${id}`,
      { headers }
    );
    if (response.status !== 200) {
      // redirect to 404 page
    }
    const data = await response.json();
    setEvent(data);
  }

  useEffect(() => {
    fetchEvent(eventId);
  }, [eventId]);
  console.log(event);
  return (
    <div>
      {isValidSession()?<Navbar />:<NANavbar />}
      {event && <EventDetails event={event} />}
      <Footer />
    </div>
  );
}

export default EventDetailsPage;
