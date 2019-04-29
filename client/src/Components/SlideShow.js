import React, { Component } from 'react';
import '../Css/SlideShow.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const car = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      label: "NeONBRAND Digital Marketing, Las Vegas, United States",
      imgPath:
        "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
    }
  ];
export default class Clients extends Component{
  render()
  {
      const classes = this.props; 
      return(
      <div id = "Home" className="Body">
            <AutoPlaySwipeableViews onChangeIndex={this.handleStepChange} enableMouseEvents>
              {car.map(step => (
                <img id="swipingImage" key={step.label} className={classes.img} src={step.imgPath} alt={step.label}/>
              ))}
            </AutoPlaySwipeableViews>
      </div>
      )
  }
}