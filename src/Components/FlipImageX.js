import React, { Component } from "react";
import "../Css/FlipImageX.css";


export default class FlipImageX extends Component{
    render()
    {
        const classes = this.props; 
        return(
        <div className="bodyX">
            <div class="cardX">

              <div className="frontX">
              <img src={this.props.imageSrc} alt="W3Schools.com"/>
              {/* <img src="https://hmp.me/cjbf" alt="yaya"/> */}
              </div>
              <div className="backX">
                    <div class="detailsX">
                        <h2 className="textX">KITTY<br/><span>Verry fluffy</span></h2>
                        <div class="social-iconsX">
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>

                        </div>
                    </div>
              </div>
            </div>
        </div>
        )
    }
  }