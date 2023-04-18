import { useState } from "react";
import styles from "./AsideBooking.module.css";

export default function AsideBooking({ openOverlay }) {
  const maxTicket = 10;
  const minTicket = 1;

  const [count, setCount] = useState(1);

  let ticketCounter = {
    increment() {
      if (count < maxTicket) {
        setCount(count + 1);
      }
    },
    decrement() {
      if (count > minTicket) {
        setCount(count - 1);
      }
    },
  };

  return (
    <>
      <div className={styles.aside_card}>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <strong>Registration</strong>
          </span>
          <span className="d-flex justify-content-end align-items-center">
            <button
              className={styles.registration_buttons}
              id="decrement-button"
              onClick={() => ticketCounter.decrement()}
            >
              -
            </button>
            {count}
            <button
              className={styles.registration_buttons}
              id="increment-button"
              onClick={() => ticketCounter.increment()}
            >
              +
            </button>
          </span>
        </div>

        <div>
          <strong>Free</strong>
        </div>
      </div>

      <div>
        <button
          className={styles.booking_button}
          id="booking-button"
          onClick={() => openOverlay(true)}
        >
          Reserve a spot
        </button>
      </div>
    </>
  );
}
