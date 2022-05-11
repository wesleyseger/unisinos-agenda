import React from 'react';
import './styles.css';

export default function BigEventCard({ event }) {
  return (
    <div className="big-event-card">
      <h1>
        {event.time}
      </h1>
      <h3>
        • {event.title}
      </h3>
    </div>
  )
}