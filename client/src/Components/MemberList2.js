import React, { Component } from "react";
// import FlipImageY from "./FlipImageY";
import FlipImageX from "./FlipImageX";
import FlipImageY from "./FlipImageY";
import "../Css/MemberList2.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class MemberList extends Component {
  render() {
    return (
      
      <div className="Team" id="Team">
      <br/>
      <h1>Our Team</h1>
      <hr></hr>
        
        <div className="dodo1">
          <div className="member">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={70}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={60}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
          
          <div className="member">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={50}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={60}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={70}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
        </div>
        
        
        
        <div>
          <div className="member">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={50}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={60}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
          
          <div className="member">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={70}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={80}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={90}>
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
        </div>
        
        {/* <div>
          <div className="member">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="50">
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="60">
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
          
          <div className="member">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="70">
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="80">
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay="90">
            <FlipImageX imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
        </div> */}

        <div>
          <div className="member">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={50}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={60}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
          
          <div className="member">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={70}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={80}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={90}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
        </div>

        <div>
          <div className="member">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={50}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={60}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
          
          <div className="member">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={70}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={80}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>

          <div className="member">
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={90}>
            <FlipImageY imageSrc="https://hmp.me/cjey" />
          </ScrollAnimation>
          </div>
        </div>
        
      </div>
    );
  }
}
