import React, { useState } from "react";
import styles from "./EventDetails.module.css";
import Popup from "../Booking-popup/Booking-popup";
import EventDescription from "./EventDescription";
import LocationAndTime from "./LocationAndTime";
import EventInfo from "./EventInfo";
import SocialShare from "./SocialShare";
import AsideBooking from "./AsideBooking";
import Banner from "./Banner/Banner";

function EventDetails({ event }) {
  const isMobile = window.matchMedia("(max-width: 960px").matches;
  const [showOverlay, setShowOverlay] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <>
      <Banner event={event} />

      <div className={styles.main_body}>
        {showOverlay && (
          <Popup
            event={event}
            closeOverlay={setShowOverlay}
            count={count}
            isMobile={isMobile}
          />
        )}

        <div className={styles.left_part}>
          <EventDescription event={event} isMobile={isMobile} />

          <LocationAndTime event={event} isMobile={isMobile} />

          <div>
            <EventInfo event={event} isMobile={isMobile} />

            <SocialShare event={event} isMobile={isMobile} />
          </div>
        </div>

        <div className={styles.aside_booking_container}>
          {event.fully_booked === false ? (
            <AsideBooking
              openOverlay={setShowOverlay}
              alterCount={setCount}
              count={count}
              event={event}
              isMobile={isMobile}
            />
          ) : (
            <h3>Event fully booked</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default EventDetails;
