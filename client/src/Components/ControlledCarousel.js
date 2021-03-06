import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Css/ControlledCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default class ControlledCarousel extends Component {
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
          onSelect={this.handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.setaswall.com/wp-content/uploads/2017/11/Black-And-Red-Abstract-Wallpaper-08-1920x1200.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              // src="https://hmp.me/cjht"
              src="https://hmp.me/cjhu"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src="https://hmp.me/cjc5" alt="Los Angeles" />
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
