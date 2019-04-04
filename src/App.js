import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import React, { Component } from "react";

//Classes
import NavBarMob from "./Components/NavBarMob";
import Clients from "./Components/Clients";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import ControlledCarousel from "./Components/ControlledCarousel";
import ScrollAnimation from 'react-animate-on-scroll';
import MemberList2 from "./Components/MemberList2";
import Padd from "./Components/Padd";
import MapContainer from "./Components/MapContainer";
import CarouselUS from './Components/CarouselUs';

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
            <ControlledCarousel />
            <ScrollAnimation animateIn="zoomIn" animateOnce="true" delay="100" >
              <Services />
            </ScrollAnimation>
            <CarouselUS/>
            <Clients />
            <Padd />
            <ScrollAnimation animateIn="zoomIn" animateOnce="true" delay="100" >
              <MemberList2 />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true" delay="100" >
              <AboutUs />
            </ScrollAnimation>
            <Padd/>
            <ContactUs />
            <MapContainer/>
            <Footer />
            
          </div>
        </div>
      );
  }
}
