import React, { Component } from "react";
import TrainRecord from "./TrainRecord";
import axios from "axios";

class TrainSheduleTable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.values.to);
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <h1>Your Start : {JSON.stringify(this.props.values.to)}</h1>;
  }
}

export default TrainSheduleTable;
