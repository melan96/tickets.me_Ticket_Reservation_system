import React, { Component } from "react";
import TicketBasicInformation from "../TicketBasicInformation";
import UserContactInfo from "../UserContactInfo";
import TrainSheduleTable from "../TrainSheduleTable";

class UserTicketBookingForm extends Component {
  state = {
    pageCode: 1,
    from: "",
    to: "",
    numberOfPassengers: "",
    date: "",
    email: "",
    mobileNumber: ""
  };

  //proceed to NextPage
  nextPage = () => {
    console.log("nextPageExecuted");
    const { pageCode } = this.state;
    this.setState({
      pageCode: pageCode + 1
    });
  };

  //backpage
  backPage = () => {
    const { pageCode } = this.state;
    this.setState({
      pageCode: pageCode - 1
    });
  };

  //onFieldChange capture
  onFieldChange = input => e => {
    console.log("onFieldFunctionExecuted");
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { pageCode } = this.state;
    const {
      from,
      to,
      numberOfPassengers,
      date,
      email,
      mobileNumber
    } = this.state;
    const values = { from, to, numberOfPassengers, date, email, mobileNumber };

    switch (pageCode) {
      case 1:
        return (
          <TicketBasicInformation
            nextPage={this.nextPage}
            onFieldChange={this.onFieldChange}
          />
        );
      case 2:
        return <TrainSheduleTable />;
    }
  }
}

export default UserTicketBookingForm;