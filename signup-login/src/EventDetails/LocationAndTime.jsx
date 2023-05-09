import styles from "./LocationAndTime.module.css";
import { useState, useEffect } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
/**
 * A React component that displays the date, time, and location of an event.
 * @param {Object} props - The component props.
 * @param {Object} props.event - The event object containing the start and end time and venue ID.
 * @param {boolean} isMobile - A boolean value indicating whether the device is a mobile device.
 * @returns {JSX.Element} - A JSX element representing the component.
 */
export default function LocationAndTime(props, isMobile) {
  const [venue, setVenue] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  /**
   * Returns the formatted start time of the event.
   * @returns {string} - A string representing the formatted start time.
   */
  const realStart = () => {
    const date = new Date(props.event.start);
    const monthName = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    let hour = date.getHours();
    const amPm = hour < 12 ? "am" : "pm";
    hour = hour % 12 || 12;
    const minute = date.getMinutes();

    return `${monthName} ${day} · ${hour}:${minute
      .toString()
      .padStart(2, "0")} ${amPm}`;
  };
  /**
   * Returns the formatted end time of the event.
   * @returns {string} - A string representing the formatted end time.
   */
  const realEnd = () => {
    const date = new Date(props.event.end);
    const monthName = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    let hour = date.getHours();
    const amPm = hour < 12 ? "am" : "pm";
    hour = hour % 12 || 12;
    const minute = date.getMinutes();

    return `${monthName} ${day} · ${hour}:${minute
      .toString()
      .padStart(2, "0")} ${amPm}`;
  };
  /**
   * Fetches the venue data for the event.
   * @returns {void}
   */
  useEffect(() => {
    async function fetchVenue() {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_NAME}/venues/retrieve/${props.event.venue}`,
        { headers }
      );
      const data = await response.json();
      setVenue(data);
    }
    fetchVenue();
  }, [props.event.venue]);

  return (
    <>
      <h2 className="h4 fw-bold mb-2">When and where</h2>
      <div className="d-flex justify-content-between pb-3 pt-3 mb-5">
        <div className="d-flex flex align-items-start">
          <div className={styles.bg_icon + " p-2 rounded-3 me-2"}>
            <AiTwotoneCalendar className="text-primary fs-5" />
          </div>
          <div className="d-block">
            <h3 className="h6 fw-bold">Date and time</h3>
            <p>
              <small className="text-body-secondary text-muted">
                <small>{realStart() + " - " + realEnd()}</small>
              </small>
            </p>
          </div>
        </div>

        {venue && (
          <>
            <div className="border" style={{ height: "40px" }}></div>
            <div className="d-flex flex align-items-start w-50">
              <div className="">
                <div className={styles.bg_icon + " p-2 rounded-3 me-2"}>
                  <IoLocationSharp className="text-primary fs-5" />
                </div>
              </div>
              <div className="">
                <h3 className="h6 fw-bold">Location</h3>
                <small className="text-body-secondary text-muted">
                  <small className="fw-bold">{venue.name}</small>
                  <br></br>
                  <small>{venue.address}</small>
                </small>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
