import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/Navbar";
import EventDetails from "./EventDetails";
import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  async function fetchEvent(id) {
    const response = await fetch(`http://localhost:4000/events?id=${id}`);
    if (response.status !== 200) {
      // redirect to 404 page
    }
    const data = await response.json();
    setEvent(data[id - 1]);
  }

  useEffect(() => {
    fetchEvent(eventId);
  }, [eventId]);

  return (
    <div>
      <NavBar />
      {event && <EventDetails event={event} />}
    </div>
  );
}

export default EventDetailsPage;
