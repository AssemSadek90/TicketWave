import YoutubeEmbed from "./YoutubeEmbed";
import { BsClockHistory } from "react-icons/bs";
import { TfiTicket } from "react-icons/tfi";
import styles from "./EventInfo.module.css";

export default function EventInfo(props) {
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
              <small>2 days 12 hours</small>
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
            <YoutubeEmbed
              test-id="youtube-video"
              embedId={props.event.videoURL}
            />
          </div>
        </div>
      </div>
    </>
  );
}
