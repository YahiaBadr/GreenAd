import React, { Component } from 'react';
import '../Css/Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Carousel extends Component{
    
    render()
    {
        
        return(
             <Carousel  className="Body4" autoPlay infiniteLoop emulateTouch>
                <div>
                    <img alt="" src="http://katameyadowntown.com/wp-content/uploads/2016/09/vodafone-1.png"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="" src="https://ymcss.b8cdn.com/assets/yallamotor_large.png"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img alt="" src="https://www.orange.eg/Style%20Library/OrangeImages/OrangeLogo-fb.jpg"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                  <p className="legend">Legend4</p>
                </div>
            </Carousel>
        )
    }
}