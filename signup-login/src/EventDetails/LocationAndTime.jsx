import styles from "./LocationAndTime.module.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function LocationAndTime(props, isMobile) {
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

        <div className="d-flex flex align-items-start w-50">
          <div className={styles.location_container}>
            <div className={styles.bg_icon + " p-2 rounded-3 me-2"}>
              <IoLocationSharp className="text-primary fs-5" />
            </div>
          </div>
          <div className="">
            <h3 className="h6 fw-bold">Location</h3>
            <small className="text-body-secondary text-muted">
              <small className="fw-bold">{props.event.venue.name}</small>
              <br></br>
              <small>{props.event.venue.address}</small>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
