import React, { Component } from "react";
import "../Css/CarouselUs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Css/NavBarW3.css'
export default class CarouselUs extends Component {
  render() {
    return (
      <div class="navbar">
        <a class="active">
          <i class="fa fa-fw fa-home" /> Home
        </a>
        <a>
          <i class="fa fa-fw fa-search" /> Search
        </a>
        <a>
          <i class="fa fa-fw fa-envelope" /> Contact
        </a>
        <a>
          <i class="fa fa-fw fa-user" /> Login
        </a>
      </div>
    );
  }
}
