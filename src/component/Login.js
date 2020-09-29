import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import WorldClock from "./WorldClock";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loggedIn: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "rahuljha12527@gmail.com" && password === "1234") {
      this.setState({
        loggedIn: true,
      });
    }
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <>
        {loggedIn ? (
          <WorldClock />
        ) : (
          <form className="login-form">
            <span className="login-signup-header">Log In</span>
            <div className="field">
              
              <input
                type="email"
                placeholder="Email"
                required
                onChange={this.handleEmailChange}
              />
            </div>  
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="field">
              <button onClick={this.handleFormSubmit}>LogIn</button>
            </div>
          </form>
        )}
      </>
    );
  }
}

export default Login;
