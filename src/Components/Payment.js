import React, { Component } from "react";

class Payment extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* You can make it whatever width you want. I'm making it full width
on <= small devices and 4/12 page width on >= medium devices */}

          {/* CREDIT CARD FORM STARTS HERE */}
          <div className="panel panel-default credit-card-box">
            <div className="panel-heading display-table">
              <div className="row display-tr">
                <h3 className="panel-title display-td">
                  Payment Gateway : Tickets Me
                </h3>
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
                      <label htmlFor="couponCode">COUPON CODE</label>
                      <input
                        type="text"
                        className="form-control"
                        name="couponCode"
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
          {/* CREDIT CARD FORM ENDS HERE */}
        </div>
      </div>
    );
  }
}

export default Payment;
