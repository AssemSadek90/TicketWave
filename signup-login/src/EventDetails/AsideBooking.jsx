import styles from "./AsideBooking.module.css";
/** 
A functional component for displaying event registration and booking details
@param {Object} props - The props object
@param {function} props.openOverlay - A function to open an overlay for booking
@param {function} props.alterCount - A function to alter the ticket count
@param {number} props.count - The current count of tickets selected
@param {Object} props.event - The event object containing information about the event
@param {boolean} props.isMobile - A boolean indicating whether the user is on a mobile device
@returns {JSX.Element} - The JSX element to be rendered
*/
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
    <div className="sticky-top card p-3 rounded-4" style={{ top: "24px" }}>
      <div className="">
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
    </div>
  );
}
