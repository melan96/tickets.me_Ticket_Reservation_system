import React, { Component } from "react";
import image from "../assets/mountains.jpg";

class ImageSlider extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img src={image} alt="Los Angeles" />
              <div className="center">
                <div style={{ verticalAlign: "middle" }}>
                  <a href="/tickets">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{ position: "absolute", top: "50%", right: "50%" }}
                    >
                      Book your Tickets Now!
                    </button>
                  </a>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-warning btn-lg "
                    style={{ position: "absolute", top: "50%", right: "30%" }}
                  >
                    Check your Reservations
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
