/**
 * A React component that renders an image for an event preview card.
 *
 * @param {Object} Event_id - An object representing the event, including a `logo` property that specifies the URL of the event's logo.
 * @returns {JSX.Element} The rendered image component.
 */
import React from "react";
function EventImage(Event_id) {
  return (
    <aside className="event-preview-card__image-container">
      <img className="imgEvent" src={Event_id.logo} alt=""></img>
      <div className="event-preview-card__image-placeholder"></div>
    </aside>
  );
}
export default EventImage;
