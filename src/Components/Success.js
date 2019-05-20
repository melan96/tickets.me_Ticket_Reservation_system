import React, { Component } from "react";
import logo from "../assets/ticketsMELOGO.png";

class Success extends Component {
  state = {};

  getusername() {
    var name = this.props.values.userEmail.split("@");
    return name[0];
  }
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-6 col-sm-offset-3">
            <br />
            <br /> <h2 style={{ color: "#0fad00" }}>Success</h2>
            <img src={logo} style={{ height: "90px", width: "90px" }} />
            <h3>Dear, {this.getusername()}</h3>
            <p style={{ fontSize: 20, color: "#5C5C5C" }}>
              Thank you for shopping with us.We have sent you an email "
              {this.props.values.userEmail}" with your details Please go to your
              above email now and login.
            </p>
            <a href className="btn btn-success">
              {" "}
              &nbsp; &nbsp; Log in &nbsp; &nbsp;{" "}
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
