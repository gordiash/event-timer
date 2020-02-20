import React from "react";
import "./EventData.css";

class EventData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.eventDate,
      timeToEnd: {}
    };
  }

  thick = dateString => {
    const now = new Date();
    const date = new Date(dateString);
    const difference = date - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    this.setState({
      timeToEnd: {
        ...this.state.timeToEnd,
        days: timeLeft.days,
        hours: timeLeft.hours,
        minutes: timeLeft.minutes,
        seconds: timeLeft.seconds
      }
    });

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

    return (
      <div className="card text-white bg-dark">
        <header className="row card-header d-flex align-items-center col-sm-12">
          <h3 className="card-title text-center col-10">{this.props.eventName}</h3>
          <button
            onClick={() => {
              this.props.deleteEvent(this.props.eventName);
            }}
            type="button"
            className=" btn btn-dark"
            aria-label="Close"
          >
            <span aria-hidden="true" className=" large">&times;</span>
          </button>
        </header>
        <section className="card-body align-middle">
          <p className="card-text text-center font-weight-bold">Time till event: {timing}</p>
        </section>
      </div>
    );
  }
}

export default EventData;
