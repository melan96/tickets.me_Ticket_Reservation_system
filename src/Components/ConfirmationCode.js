import React, { Component } from "react";

class ConfirmationCode extends Component {
  state = {
    confirmationCode: String
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading ">Confirm Email</div>
          <div className="panel-body">
            <label htmlFor="address-line03"> City </label>
            <input
              type="text"
              className="form-control"
              id="address_line03"
              placeholder="City"
              onChange={this.onFieldChange("userAddressLine03")}
            />
            <br />
            <div style={{ float: "right" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.contToNextBtn}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationCode;
