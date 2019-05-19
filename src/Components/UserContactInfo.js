import React, { Component } from "react";
import axios from "axios";

class UserContactInfo extends Component {
  contToNextBtn = e => {
    e.preventDefault();
    const { values } = this.props;
    const formData = {
      userFullName: values.userFullName,
      userEmail: values.userEmail,
      userMobileNumber: values.userMobileNumber,
      userAddressLine01: values.userAddressLine01,
      userAddressLine02: values.userAddressLine02,
      userAddressLine03: values.userAddressLine03
    };

    axios
      .post("http://localhost:4001/senduser", formData)
      .then(function(response) {
        console.log("success", response.data);
      });
    this.props.nextPage();
  };

  render() {
    const { onFieldChange } = this.props;
    const { value } = this.props;
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
                  onChange={onFieldChange("userFullName")}
                />
                <br />
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={onFieldChange("userEmail")}
                />

                <br />

                <label htmlFor="mobileNumber"> Mobile Number </label>
                <input
                  type="number"
                  className="form-control"
                  id="fullName"
                  placeholder="+94 711234218"
                  onChange={onFieldChange("userMobileNumber")}
                />

                <br />

                <label htmlFor="address-line01"> Street Number </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line01"
                  placeholder="Street number"
                  onChange={onFieldChange("userAddressLine01")}
                />
                <br />
                <label htmlFor="address-line02"> Street Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line02"
                  placeholder="Street Name"
                  onChange={onFieldChange("userAddressLine02")}
                />

                <br />
                <label htmlFor="address-line03"> City </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line03"
                  placeholder="City"
                  onChange={onFieldChange("userAddressLine03")}
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
