import React, { Component } from "react";
import axios from "axios";

class TrainSheduleTable extends Component {
  state = {
    traindata: []
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios
      .get("http://localhost:4001/getd")
      .then(res => {
        this.setState({
          traindata: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.traindata.map(item => {
            return (
              <div className="container">
                <div className="panel panel-default">
                  <div className="panel-heading ">TRAIN TO </div>
                  <div className="panel-body">
                    <p>To -> Details</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TrainSheduleTable;
