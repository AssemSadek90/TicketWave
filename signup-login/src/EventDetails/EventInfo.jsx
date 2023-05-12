import YoutubeEmbed from "./YoutubeEmbed";
import { BsClockHistory } from "react-icons/bs";
import { TfiTicket } from "react-icons/tfi";
import styles from "./EventInfo.module.css";
/**

A component that displays information about an event, including its duration,
ticket type, description, and an embedded YouTube video.
@param {Object} props - The props passed to the component.
@param {Object} props.event - An object representing the event to display.
@param {string} props.event.start - The start time of the event in ISO 8601 format.
@param {string} props.event.end - The end time of the event in ISO 8601 format.
@param {string} props.event.video_url - The URL of the YouTube video to embed.
@param {string} props.event.description - A description of the event.
@param {boolean} isMobile - Whether the component is being displayed on a mobile device.
@returns {JSX.Element} - A React component that displays information about the event.
*/
export default function EventInfo(props, isMobile) {
  /**
  Calculates the duration of the event based on its start and end times.
  @returns {string} - A string representing the duration of the event.
  */
  const duration = () => {
    const startDate = new Date(props.event.start);
    const endDate = new Date(props.event.end);

    const timeDifferenceInMs = endDate.getTime() - startDate.getTime();
    const seconds = Math.floor(timeDifferenceInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const hoursRemaining = hours % 24;
    const daysText = days > 0 ? `${days} days ` : "";
    const hoursText = hoursRemaining > 0 ? `${hoursRemaining} hours` : "";

    return `${daysText}${hoursText}`;
  };
  return (
    <>
      <div>
        <div>
          <h2 className="h4 fw-bold mb-2">About this event</h2>
        </div>
        <div className="d-flex justify-content-evenly mb-3 mt-3">
          <div className={styles.time_ticket + ""}>
            <span>
              <BsClockHistory className="text-primary fs-5 m-3" />
            </span>
            <span className="fw-bold">
              <small>{duration()}</small>
            </span>
          </div>

          <div className={styles.time_ticket + ""}>
            <span>
              <TfiTicket className="text-primary fs-5 m-3" />
            </span>
            <span className="fw-bold">
              <small>Mobile eTicket</small>
            </span>
          </div>

          <div className={styles.time_ticket + ""}></div>
        </div>

        <div>
          <p className="text-body-secondary text-muted">
            {props.event.description}
          </p>

          <div className="mt-4">
            <YoutubeEmbed embedId={props.event.video_url} />
          </div>
        </div>
      </div>
    </>
  );
}
