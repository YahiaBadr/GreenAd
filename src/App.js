import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component } from "react";

//Classes
import NavBarMob from "./Components/NavBarMob";
import Clients from "./Components/Clients";
import BodyText from "./Components/BodyText";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import ControlledCarousel from "./Components/ControlledCarousel";
import FlipImageY from "./Components/FlipImageY";
import FlipImageX from "./Components/FlipImageX";
import MemberList from "./Components/MemberList";
import MemberList2 from "./Components/MemberList2";
import Padd from "./Components/Padd";

export default class App extends Component {
  render() {
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
      return (
        <div onLoad={showPage}>
          <div id="loader" />
            
          <div id="myDiv">
            <NavBarMob />
            <Padd />
            <ControlledCarousel />
            <Padd />
            <BodyText />
            <Padd />
            <Clients />
            <Padd />
            <ContactUs />
            <Padd />
            <MemberList2 />
            <Footer />
          </div>
        </div>
      );
  }
}
