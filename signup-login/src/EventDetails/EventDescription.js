const EventDescription = (props) => {
  return (
    <>
      <small>
        <time className="fw-bold">{props.event.start_time}</time>
      </small>
      <h1 className="display-4 fw-bold mb-4">{props.event.name}</h1>
      <div className="mb-5">
        <small>
          <small className="fw-bold">{props.event.summary}</small>
        </small>
      </div>
    </>
  );
};

export default EventDescription;
