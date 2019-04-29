import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Css/ControlledCarousel.css";
import "../Css/MemberList.css";
// import FlipImageY from "./FlipImageY";
import FlipImageX from "./FlipImageX";

export default class MemberList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div id="Home">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <FlipImageX imageSrc="https://www.w3schools.com/images/w3schools_green.jpg" />
            {/* <FlipImageX imageSrc="https://www.w3schools.com/images/w3schools_green.jpg"/>
                <FlipImageX imageSrc="https://www.w3schools.com/images/w3schools_green.jpg"/>
                <FlipImageX imageSrc="https://www.w3schools.com/images/w3schools_green.jpg"/>
                <FlipImageX imageSrc="https://www.w3schools.com/images/w3schools_green.jpg"/> */}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <FlipImageX imageSrc="https://www.w3schools.com/images/w3schools_green.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <FlipImageX imageSrc="https://www.w3schools.com/images/w3schools_green.jpg" />
            <Carousel.Caption>
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
