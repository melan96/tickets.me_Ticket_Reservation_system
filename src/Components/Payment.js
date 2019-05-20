import React, { Component } from "react";

class Payment extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default credit-card-box">
            <div className="panel-heading display-table">
              <div className="row display-tr">
                <h2 className="panel-title display-td">
                  Payment Gateway : Tickets Me
                </h2>

                <h5 style={{ color: "green" }}>
                  Your Ticket Price : {this.props.values.price} LKR
                  <br /> You Booking is Train from {
                    this.props.values.from
                  } to {this.props.values.to}
                </h5>
                <div className="display-td">
                  <img
                    className="img-responsive pull-right"
                    src="http://i76.imgup.net/accepted_c22e0.png"
                  />
                </div>
              </div>
            </div>
            <div className="panel-body">
              <form role="form" id="payment-form">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="form-group">
                      <label htmlFor="cardNumber">CARD NUMBER</label>
                      <div className="input-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="cardNumber"
                          placeholder="Valid Card Number"
                          autoComplete="cc-number"
                          required
                          autofocus
                        />
                        <span className="input-group-addon">
                          <i className="fa fa-credit-card" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-7 col-md-7">
                    <div className="form-group">
                      <label htmlFor="cardExpiry">
                        <span className="hidden-xs">EXPIRATION</span>
                        <span className="visible-xs-inline">EXP</span> DATE
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="cardExpiry"
                        placeholder="MM / YY"
                        autoComplete="cc-exp"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-right">
                    <div className="form-group">
                      <label htmlFor="cardCVC">CV CODE</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="cardCVC"
                        placeholder="CVC"
                        autoComplete="cc-csc"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="form-group">
                      <label htmlFor="couponCode">
                        NIC Number (Only for Gov. Employees)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="couponCode"
                        placeholder="10% off for Gov.Employees"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <button
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                    >
                      Start Subscription
                    </button>
                  </div>
                </div>
                <div className="row" style={{ display: "none" }}>
                  <div className="col-xs-12">
                    <p className="payment-errors" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
