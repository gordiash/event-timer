import React from "react";

export default function PopUp(props) {
  return (
    <div className="card-header row col-7 mt-5">
      <p className="text-center font-weight-bold col-11 align-self-center mb-0">
        {props.text}
      </p>
      <button
        onClick={props.togglePopup, props.delete}
        type="button"
        className=" btn btn-dark col-1"
        aria-label="Close"
      >
        X
      </button>
    </div>
  );
}
