import styles from "./AsideBooking.module.css";

export default function AsideBooking({
  openOverlay,
  alterCount,
  count,
  event,
  isMobile,
}) {
  const maxTicket = 10;
  const minTicket = 1;

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
              onClick={() =>
                count > minTicket ? alterCount(count - 1) : alterCount(count)
              }
            >
              -
            </button>
            {count}
            <button
              className={styles.registration_buttons}
              id="increment-button"
              onClick={() =>
                count < maxTicket ? alterCount(count + 1) : alterCount(count)
              }
            >
              +
            </button>
          </span>
        </div>

        <div>
          {event.free === true ? (
            <strong>Free</strong>
          ) : (
            <strong>${event.price}</strong>
          )}
        </div>
      </div>

      <div>
        <button
          className={styles.booking_button}
          id="booking-button"
          onClick={() => openOverlay(true)}
        >
          {event.free === true ? (
            <small>Reserve a spot</small>
          ) : (
            <small>Checkout for ${event.price * count}</small>
          )}
        </button>
      </div>
    </>
  );
}
