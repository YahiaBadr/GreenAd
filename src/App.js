import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component } from "react";

//Classes
import NavBar from "./Components/NavBar";
import NavBarMob from "./Components/NavBarMob";
import Clients from "./Components/Clients";
import BodyText from "./Components/BodyText";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import ControlledCarousel from "./Components/ControlledCarousel";


export default class App extends Component {
  render() {
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
    if (window.screen.width >= 800) {
      return (
        <div onLoad={showPage}>
          <div id="loader" />

          <div id="myDiv">
            <NavBar />
            <ControlledCarousel />
            <BodyText />
            <Clients />
            <ContactUs />
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div onLoad={showPage}>
          <div id="loader" />
          <div id="myDiv">
            <NavBarMob />
            <ControlledCarousel />
            <BodyText />
            <Clients />
            <ContactUs />
            <Footer />
          </div>
        </div>
      );
    }
  }
}