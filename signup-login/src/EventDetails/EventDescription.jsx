/**
 * A functional component that displays an event's date, name, and summary.
 * @param {object} props - The props object that contains event details.
 * @param {boolean} isMobile - A boolean that indicates whether the device is mobile or not.
 * @returns {JSX.Element} The event description element.
 */
const EventDescription = (props, isMobile) => {
  /**
   * A function that returns the formatted start date of the event.
   * @returns {string} The formatted start date.
   */
  function realStart() {
    const date = new Date(props.event.start);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = date.getMonth();
    const day = date.getDate();
    return `${monthNames[monthIndex]} ${day}`;
  }
  return (
    <>
      <small>
        <h6 className="fw-bold">{realStart()}</h6>
      </small>
      <h1 className="display-5 fw-bold mb-4">{props.event.name}</h1>
      <div className="mb-5">
        <small>
          <small className="fw-bold">{props.event.summary}</small>
        </small>
      </div>
    </>
  );
};

export default EventDescription;
