import React from 'react'
import "./EventName.css"

export default function EventName(props) {
    return (
        <div className="EventName__Input col-10">
            <input placeholder='Type event name' className="form-control " value={props.eventName} onChange={props.getEventName}></input>
        </div>
    )
}
