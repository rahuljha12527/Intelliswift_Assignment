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
          <strong>Set United State time:</strong>
          <input type="text" placeholder="20:16:12" />

          <button className="space" onClick={this.clickHandler}>
            Submit
          </button>
        </div>

        <div className="time">
          <div className="Us">
            <label>United State:</label>
            <strong>{this.state.USTime}</strong>
          </div>
          <div className="Us">
            <label>London:</label>

            <strong>{this.state.date.toLocaleTimeString('en-GB',{timeZone:'Europe/London'})}</strong>
          </div>
          <div className="India">
            <label>India:</label>
            <strong>
              {this.state.date.toLocaleTimeString([], { hour12: false })}
            </strong>
            {this.callMe()}
          </div>
        </div>

        <div className="horizontal-bar"></div>

        <div className="Settings">
        
          <div>
            Time differnce for <strong>London:</strong>
            <input type="text" placeholder="5"  className="but"/>
            <button className="but">Submit</button>
          </div>
          <div className="India">
            Time differnce for <strong>India:</strong>
            <input type="text" placeholder="13" className="but" />
            <button className="but">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WorldClock;
