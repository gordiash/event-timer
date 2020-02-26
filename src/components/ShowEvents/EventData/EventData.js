import React from "react";
import Popup from "../../PopUp/PopUp";
import "./EventData.css";

class EventData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.eventDate,
      timeToEnd: {},
      togglePopup: false
    };
  }

  togglePopup = () => {
    this.setState({ togglePopup: !this.state.togglePopup });
  };

  thick = dateString => {
    const now = new Date();
    const date = new Date(dateString);
    const difference = date - now;

    let timeLeft = {};

    if (difference > 0 || difference < 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    if (this.state.timeToEnd.hours < 0) {
      this.setState({
        timeToEnd: {
          ...this.state.timeToEnd,
          days: timeLeft.days,
          hours: timeLeft.hours,
          minutes: timeLeft.minutes,
          seconds: timeLeft.seconds
        }
      });
    } else {
      this.setState({
        timeToEnd: {
          ...this.state.timeToEnd,
          days: timeLeft.days,
          hours: timeLeft.hours,
          minutes: timeLeft.minutes,
          seconds: timeLeft.seconds
        }
      });
    }

    console.log(this.state.timeToEnd.hours);
    return timeLeft;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.thick(this.state.timer);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const timing = [];

    Object.keys(this.state.timeToEnd).map(x => {
      timing.push(
        <span>
          {this.state.timeToEnd[x]} {x}{" "}
        </span>
      );
    });

    return this.state.timeToEnd.hours < 0 ? (
      !this.state.togglePopup ? (
        <Popup
          delete = {()=>this.props.deleteEvent(this.props.eventName)}
          togglePopup={this.togglePopup}
          text={"Please place event time at least 24h ahead."}
        />
      ) : null
    ) :
    (
      <div className="card text-white bg-dark col-7">
        <header className="row card-header d-flex align-items-center col-sm-12">
          <h3 className="card-title text-center col-10 col-sm-11">
            {this.props.eventName}
          </h3>
          <button
            onClick={() => {
              this.props.deleteEvent(this.props.eventName);
            }}
            type="button"
            className=" btn btn-dark col-1 col-sm-1"
            aria-label="Close"
          >
            <span aria-hidden="true" className=" large">
              &times;
            </span>
          </button>
        </header>
        <section className="card-body align-middle">
          <p className="card-text text-center font-weight-bold">
            Time till event: {timing}
          </p>
        </section>
      </div>
    );
  }
}

export default EventData;
