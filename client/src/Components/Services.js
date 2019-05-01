import React, { Component } from "react";
import "../Css/Services.css";
import CarouselUS from '../Components/CarouselUs';
export default class Services extends Component {
  render() {
    return (
      <div id="Services" className="Services" >
       <h1 className="Services_Header">What We Do</h1>
       <br/>
       <div className="Head1">There is a sweet spot in digital marketing: the place where logic meets magic. 
        When right and left brain are working together in just the right balance you can achieve outcomes that are really extraordinary. 
        Outcomes that will not only help you perform,
        but outperform your own expectations, the competition, and the market.</div>
       <br/>
       <CarouselUS/>
      </div>
    );
  }
}
