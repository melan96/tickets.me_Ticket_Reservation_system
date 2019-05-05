import React, { Component } from "react";
import axios from "axios";

class UserContactInfo extends Component {
  state = {
    userFullName: "",
    userEmail: "",
    userMobileNumber: "",
    userAddressLine01: "",
    userAddressLine02: "",
    userAddressLine03: ""
  };
  onFieldChange = input => e => {
    console.log("User Form Change captured ..");
    console.log(e.target.value);
    this.setState({
      [input]: e.target.value
    });
  };

  contToNextBtn = e => {
    e.preventDefault();
    const formData = {
      userFullName: this.state.userFullName,
      userEmail: this.state.userEmail,
      userMobileNumber: "Melan Rashitha Dias",
      userAddressLine01: "Melan Rashitha Dias",
      userAddressLine02: "Melan Rashitha Dias",
      userAddressLine03: " Kandana "
    };
    axios
      .post("http://localhost:4001/senduser", formData)
      .then(function(response) {
        console.log("success", response.data);
      });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-heading"> Contact Informations </div>
            <div className="panel-body">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  onChange={this.onFieldChange("userFullName")}
                />
                <br />
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={this.onFieldChange("userEmail")}
                />

                <br />

                <label htmlFor="mobileNumber"> Mobile Number </label>
                <input
                  type="number"
                  className="form-control"
                  id="fullName"
                  placeholder="+94 711234218"
                  onChange={this.onFieldChange("userMobileNumber")}
                />

                <br />

                <label htmlFor="address-line01"> Street Number </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line01"
                  placeholder="Street number"
                  onChange={this.onFieldChange("userAddressLine01")}
                />
                <br />
                <label htmlFor="address-line02"> Street Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line02"
                  placeholder="Street Name"
                  onChange={this.onFieldChange("userAddressLine02")}
                />

                <br />
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
        </div>
      </div>
    );
  }
}

export default UserContactInfo;
