import React, { Component } from "react";

class WorldClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      USTime: "16:26:12",
      londonTime: "10:26:11",
    };
  }

  callMe() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  clickHandler = (event) => {
    this.setState({
      USTime: "20:16:12",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="US-Time">
          <label>Set United State time:</label>
          <input type="text" />

          <button onClick={this.clickHandler}>Submit</button>
        </div>

        <div className="time">
          <div className="Us">
            <label>United State:</label>
            <label>{this.state.USTime}</label>
          </div>
          <div className="Us">
            <label>London:</label>

            <label>{this.state.londonTime}</label>
          </div>
          <div className="India">
            <label>India:</label>
            <label>{this.state.date.toLocaleTimeString([], { hour12: false })}</label>
            {this.callMe()}
          </div>
        </div>
      </div>
    );
  }
}

export default WorldClock;
