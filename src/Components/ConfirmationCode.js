import React, { Component } from "react";
import axios from "axios";

class ConfirmationCode extends Component {
  state = {
    confirmationCode: ""
  };

  constructor(props) {
    super(props);
  }
  userEmailConfirmationSecretKey = 0;
  componentDidMount() {
    axios
      .get("http://localhost:4001/getKey")
      .then(res => {
        this.setState(
          {
            confirmationCode: JSON.stringify(res.data.confirmation)
          },
          function() {
            console.log("State saved to ->" + this.state.confirmationCode);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  OnClickVerifyKey = () => {
    let userInputKey = document.getElementById("confirmkey").value;

    if (userInputKey == this.state.confirmationCode) {
      alert("Success ...");
      this.props.nextPage();
    } else {
      alert("Your Verification Key is Invalid");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading ">Confirm Email</div>
          <div className="panel-body">
            <label htmlFor="address-line03"> Confirm key </label>
            <input
              type="text"
              className="form-control"
              id="confirmkey"
              placeholder="XXXXXX"
            />
            <br />

            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={this.OnClickVerifyKey}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationCode;
