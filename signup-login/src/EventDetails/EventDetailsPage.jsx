import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/Navbar';
import EventDetails from './EventDetails';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  async function fetchEvent(id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_NAME}/events/retrieve/${id}`
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

  return (
    <div>
      <Navbar />
      {event && <EventDetails event={event} />}
      <Footer />
    </div>
  );
}

export default EventDetailsPage;
