import React, { Component } from "react";

class UserContactInfo extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-heading"> Contact Informations </div>
            <div className="panel-body">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control" id="fullName" />
                <br />
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" id="email" />

                <br />

                <label htmlFor="mobileNumber"> Mobile Number </label>
                <input
                  type="number"
                  className="form-control"
                  id="fullName"
                  placeholder="+94 711234218"
                />

                <br />

                <label htmlFor="address-line01"> Street Number </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line01"
                  placeholder="Street number"
                />
                <br />
                <label htmlFor="address-line02"> Street Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line02"
                  placeholder="Street Name"
                />

                <br />
                <label htmlFor="address-line03"> City </label>
                <input
                  type="text"
                  className="form-control"
                  id="address_line03"
                  placeholder="City"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserContactInfo;
