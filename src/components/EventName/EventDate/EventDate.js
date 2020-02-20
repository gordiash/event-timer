import React from 'react'

export default function EventDate(props) {
    return (
        <div>
            <input type='date' className="form-control" value={props.eventDate} onChange={props.getEventDate} min={Date.now()} />
            
        </div>
    )
}
