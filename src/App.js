import React, { Component } from 'react';

import './App.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.tick = this.tick.bind(this);
    this.getDays = this.getDays.bind(this);
    this.getHours = this.getHours.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
    this.getDays = this.getDays.bind(this);

    this.state = {
      counter: 25*60*1000,
      days: 0,
      hours: 0,
      minutes: 25,
      seconds: 0
    };
  }
  getDays() {
    return Math.floor( this.state.counter/(1000*60*60*24) );
  }
  getHours() {
    return;
  }
  getMinutes() {
    return;
  }
  getSeconds() {
    return Math.floor((this.state.counter/1000)%60);
  }

  tick() {
    var counterNew = this.state.counter-1000;
    this.setState({
      counter: counterNew,
       days: Math.floor( counterNew/(1000*60*60*24)),
       hours: Math.floor( (counterNew/(1000*60*60)) % 24 ),
       minutes: Math.floor( (counterNew/1000/60) % 60 ),
       seconds: Math.floor((counterNew/1000)%60)
    });
    this.forceUpdate();
  }  

  componentWillUnmount() {
  clearInterval(this.interval);
}

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <button>start clock</button>
      <h1> counting down: </h1>
      <p>{this.state.counter}</p>
      <p>{this.state.days} days</p>
      <p>{this.state.hours} hours</p>
      <p>{this.state.minutes} minutes</p>
      <p>{this.state.seconds} seconds</p>
      </div>
    );
  }
}

export default Clock;
