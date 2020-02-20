import React from 'react'

export default function EventDate(props) {
    return (
        <div className="col-8 col-sm-2">
            <input type='date' className="form-control" value={props.eventDate} onChange={props.getEventDate} min={Date.now()} />
            
        </div>
    )
}
