import React, { Component } from "react";

class TrainTicketsForm extends Component {
  constructor() {
    super();
    this.state = {
      containsData: "UUID Data DOR"
    };
  }
  routeChange = () => {
    alert("this clicked");
  };
  render() {
    //This component holds the BasicTickets Infomations Forms Structure
    return (
      <div>
        <div className="container-fluid">
          <div className="panel panel-default">
            <div className="panel-heading">Tickets Informations</div>
            <div className="panel-body" />
            <div className="container form-group">
              <label htmlFor="sel1">Select Your Nearest Train Station</label>
              <select className="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>{this.state.containsData}</option>
              </select>
              <br /> <br /> <br />
              <label htmlFor="sel2">Select Your Destination</label>
              <select className="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <div style={{ paddingTop: "20px" }}>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ display: "block", margin: "auto" }}
                  onClick={this.routeChange}
                >
                  Book your Tickets Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainTicketsForm;
