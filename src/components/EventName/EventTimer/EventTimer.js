import React from "react";
import EventName from "../EventName";
import EventDate from "../EventDate/EventDate";
import "./EventTimer.css"

export default function EventTimer(props) {
  return (
    <div className="wrapper">
      <EventName
        getEventName={props.getEventName}
        eventName={props.eventName}
      />
      <EventDate
        getEventDate={props.getEventDate}
        eventDate={props.eventDate}
      />
      <button className="btn btn-lg btn-success mt-3" onClick={props.startCounting}>Start</button>
    </div>
  );
}
