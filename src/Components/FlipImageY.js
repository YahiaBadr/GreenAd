import React, { Component } from "react";
import "../Css/FlipImageY.css";


export default class FlipImageY extends Component{
    render()
    {
        // const classes = this.props; 
        return(
        <div className="bodyY">
            <div class="cardY">

              <div className="frontY">
              <img src={this.props.imageSrc} alt="W3Schools.com"/>
              {/* <img src="https://hmp.me/cjbf" alt="yaya"/> */}
              </div>
              <div className="backY">
                    <div class="detailsY">
                        <h2 className="textY">KITTY<br/><span>Verry fluffy</span></h2>
                        <div class="social-iconsY">
                        <a /*href="#"*/><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a /*href="#"*/><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a /*href="#"*/><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                        <a /*href="#"*/><i class="fa fa-linkedin" aria-hidden="true"></i></a>

                        </div>
                    </div>
              </div>
            </div>
        </div>
        )
    }
  }