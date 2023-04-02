import React from 'react';
import './Displayevents';

export default function EventItem(props) {
  return (
    <div className="event-element" style={{}}>
      <svg className="event-image" width="100%" height="70%">
        <image href={props.imageSrc} width="100%" height="100%" />
      </svg>
      <div className="event-details" style={{ marginTop: '10px' }}>
        <p style={{ fontWeight: 'bold' }}>{props.location}</p>
        <p>{props.date}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
