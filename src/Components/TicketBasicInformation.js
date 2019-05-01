import React, { Component } from "react";

class TicketBasicInformation extends Component {
  contToNext = e => {
    this.props.nextPage();
  };

  render() {
    const { onFieldChange } = this.props;
    return (
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-heading"> Ticket Information Form </div>
          <div className="panel-body">
            <div className="form-group">
              <label htmlFor="sel1">From :</label>
              <select
                className="form-control"
                id="sel1"
                onChange={onFieldChange("to")}
              >
                <option>Kandana</option>
                <option>Matara</option>
                <option>Badulla</option>
                <option>Negombo</option>
              </select>

              <br />
              <div className="form-group">
                <label htmlFor="sel1">To</label>
                <select
                  className="form-control"
                  onChange={onFieldChange("from")}
                >
                  <option>Kandana</option>
                  <option>Matara</option>
                  <option>Badulla</option>
                  <option>Negombo</option>
                </select>
                <br />
                <button
                  className="btn btn-danger navbar-btn"
                  style={{ float: "right" }}
                  onClick={this.contToNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const myFunc = e => {
  e.preventDefault();
  alert("a");
};

export default TicketBasicInformation;
