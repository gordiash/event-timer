import React from "react";
import "./App.css";

import EventTimer from "./components/EventName/EventTimer/EventTimer";
import ShowEvents from "./components/ShowEvents/ShowEvents";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList:[],
      eventName: "",
      eventDate: "",
      isStarted: false
    };
  }

  componentDidMount(){
    this.events = JSON.parse(localStorage.getItem('event'))
    
    if(localStorage.getItem('event')){
      this.setState({
      eventList: this.events.eventList,
      eventName: this.events.eventName,
      eventDate: this.events.eventDate,
      isStarted: this.events.isStarted,
    })
    }else{
      this.setState({
        eventList: [],
        eventName: '',
        eventDate: '',
        isStarted: false,
      })
    }
    
    
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.eventList.length !== this.state.eventList.length){
      const json =JSON.stringify(this.state)
      localStorage.setItem("event", json)
    }

  }

  getEventName = e => {
    this.setState({
      eventName: e.target.value
    });
  };
  getEventDate = e => {
    this.setState({
      eventDate: e.target.value
    });
  };

  startCounting = () => { 
    let newList = [...this.state.eventList]

    newList.push(this.state.eventName)

    this.setState({
      isStarted: !this.state.isStarted,
      eventList: newList,
      eventName: ""
      
    });

    
  };

  deleteEvent = name => {
    const events = [...this.state.eventList];
    const eventIndex = events.indexOf(name) 

    events.splice(eventIndex,1)

    this.setState({
      eventList: events
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-3">Event timer</h1>

        <EventTimer
          eventDate={this.state.eventDate}
          eventName={this.state.eventName}
          getEventName={this.getEventName}
          getEventDate={this.getEventDate}
          startCounting={this.startCounting}
        />

        <ShowEvents
          eventDate={this.state.eventDate}
          deleteEvent={this.deleteEvent}
          eventList={this.state.eventList}
        />
      </div>
    );
  }
}

export default App;
