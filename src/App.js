import React, { Component } from "react";
import NavigationBar from "./Components/NavigationBar";
import ImageSlider from "./Components/ImageSlider";
import AboutUs from "./Components/Pages/AboutUs";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import TrainTicketsForm from "./Components/Pages/TrainTicketsForm";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/" component={Home} />
        <Route exact path="/tickets" component={TrainTicketsForm} />
      </BrowserRouter>
    );
  }
}

export default App;
