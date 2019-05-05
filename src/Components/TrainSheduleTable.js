import React, { Component } from "react";
import axios from "axios";

class TrainSheduleTable extends Component {
  state = {
    traindata: [],
    price: String
  };

  contToNextBtn = e => {
    this.setState(
      {
        price: this.state.traindata[3]
      },
      () => {
        console.log(JSON.stringify(this.state.price));

        this.props.nextPage();
      }
    );
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios
      .get("http://localhost:4001/getda")
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
                  <div className="panel-heading ">
                    TRAIN TO {JSON.stringify(item.to)}
                  </div>

                  <div className="panel-body">
                    <h5>To : {JSON.stringify(item.to)}</h5>
                    <h5>From : {JSON.stringify(item.from)}</h5>
                    <h5>Train Numer : {JSON.stringify(item.trainNumber)}</h5>
                    <h5>Price (LKR) : {JSON.stringify(item.Price)}</h5>

                    <div style={{ float: "right" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.contToNextBtn}
                      >
                        Book Now
                      </button>
                    </div>
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
