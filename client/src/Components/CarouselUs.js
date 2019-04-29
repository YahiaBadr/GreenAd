import React, { Component } from 'react';
import '../Css/CarouselUs.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class CarouselUs extends Component{
    
    render()
    {
        
        return(
            <div id = "Services">
            <Carousel className="Carousel" autoPlay infiniteLoop emulateTouch showThumbs={false} showStatus={false} width="100%" dynamicHeight={true} stopOnHover={false}>
                <div>
                    <img alt="" src=""/>
                </div>
                <div>
                    <img alt="" src=""/>
                </div>
                <div>
                    <img alt="" src=""/>
                </div>
            </Carousel>
            </div>
        )
    }
}

// https://hmp.me/cjc7
// https://ak6.picdn.net/shutterstock/videos/871936/thumb/1.jpg