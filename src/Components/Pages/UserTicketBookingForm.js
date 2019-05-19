import React, { Component } from "react";
import TicketBasicInformation from "../TicketBasicInformation";
import ConfirmationCode from "../ConfirmationCode";
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
    mobileNumber: "",
    price: "",
    userFullName: "",
    userEmail: "",
    userMobileNumber: "",
    userAddressLine01: "-default-",
    userAddressLine02: "",
    userAddressLine03: "",
    secretVerifyEmailKey: ""
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
    console.log("onFieldFunctionExecuted  -> " + e.target.value);
    console.log(e.target.value);
    this.setState({
      [input]: e.target.value
    });
    console.log(
      "onFieldFunctionExecuted STATE -> " + JSON.stringify(this.state.to)
    );
  };

  //userVerificationKeyUpdate
  onKeyGenerate = input => {
    this.setState({
      secretVerifyEmailKey: input
    });

    console.log(
      "Generated KEY STATE -> " +
        JSON.stringify(this.state.secretVerifyEmailKey)
    );
  };

  render() {
    const { pageCode } = this.state;
    const {
      from,
      to,
      numberOfPassengers,
      date,
      email,
      mobileNumber,
      userEmail,
      userMobileNumber,
      userAddressLine01,
      userAddressLine02,
      userAddressLine03,
      secretVerifyEmailKey
    } = this.state;
    const values = {
      from,
      to,
      numberOfPassengers,
      date,
      email,
      mobileNumber,
      userEmail,
      userMobileNumber,
      userAddressLine01,
      userAddressLine02,
      userAddressLine03,
      secretVerifyEmailKey
    };

    switch (pageCode) {
      case 1:
        return (
          <TicketBasicInformation
            nextPage={this.nextPage}
            onFieldChange={this.onFieldChange}
            values={values}
          />
        );
      case 2:
        return (
          <TrainSheduleTable
            values={values}
            nextPage={this.nextPage}
            onFieldChange={this.onFieldChange}
          />
        );
      case 3:
        return (
          <UserContactInfo
            values={values}
            nextPage={this.nextPage}
            onFieldChange={this.onFieldChange}
          />
        );
      case 4:
        return <ConfirmationCode />;
    }
  }
}

export default UserTicketBookingForm;
