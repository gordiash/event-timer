import React from "react";
import EventData from "./EventData/EventData";
import "./ShowEvents.css"

export default function ShowEvents(props) {
  return (
    <div className="container">
        {
          props.eventList.length ?
         
          props.eventList.map(item=>(
            
            <EventData
            key={item}
            eventName={item}
            eventDate={props.eventDate}
            deleteEvent={props.deleteEvent}
          />
          ))
          :
          null
        }

    </div>
  );
}
