import React, { Component } from "react";
import { Switch } from "react-router-dom";

class NavigationBar extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  Booking.Me
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">Booking Tickets</a>
                </li>
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              {/* <button
                className="btn btn-danger navbar-btn"
                style={{ float: "right" }}
              >
                Login
              </button> */}
            </div>
          </nav>
        </Switch>
      </div>
    );
  }
}

export default NavigationBar;
