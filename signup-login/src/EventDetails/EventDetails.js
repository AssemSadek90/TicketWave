import React, { useState, useEffect } from "react";
import styles from "./EventDetails.module.css";
import Popup from "../Booking-popup/Booking-popup";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import EventDescription from "./EventDescription";
import LocationAndTime from "./LocationAndTime";
import EventInfo from "./EventInfo";
import SocialShare from "./SocialShare";
import AsideBooking from "./AsideBooking";

function EventDetails() {
  const mock = new MockAdapter(axios);

  const id = 1;
  const [event1, setEvent] = useState({});

  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`http://localhost:4000/events?id=${id}`);
      const eventData = await response.json();
      setEvent(eventData);
    }
    fetchEvent();
  }, []);
  const event = {
    id: 1,
    name: "Middle East Vape Show 2023",
    summary:
      "The most anticipated Vape Show in the Middle East, it's time to bring your Vape Business and Products to the next level.",
    description:
      "Will be held 3 days from 6 to 8 July 2023, after the success of the 1st event in Bahrain this year with a new atmosphere it will be held in Cairo, Egypt. We choose Egypt International Exhibition Center as the best venue in Cairo for MEVS 2023.",
    start_time: "July 6 · 10am",
    end_time: " July 8 · 10pm EET",
    url: "https://www.eventbrite.com/e/middle-east-vape-show-2023-tickets-512820940237?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb",
    created: "2023-03-22T10:00:00",
    changed: "2023-03-22T12:00:00",
    videoURL: "R63RiKdiB2o",
    published: true,
    online_event: false,
    logo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F438303329%2F1343904084043%2F1%2Foriginal.20230203-023453?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=69cab150771ec45eb6ed627fbf66039d",
    venue: {
      name: "Egypt International Exhibition Center - EIEC",
      address:
        "El-Moshir Tantawy Axis Al Hay Al Asher, Cairo Governorate 4440301",
      latitude: 37.7749,
      longitude: -122.4194,
    },
  };

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <div className={styles.main_body}>
        {showOverlay && <Popup closeOverlay={setShowOverlay} />}

        <div className={styles.left_part}>
          <EventDescription event={event} />

          <LocationAndTime event={event} />

          <div>
            <EventInfo event={event} />

            <SocialShare event={event} />
          </div>
        </div>

        <div className={styles.aside_booking_container}>
          <AsideBooking openOverlay={setShowOverlay} />
        </div>
      </div>
    </>
  );
}

export default EventDetails;
