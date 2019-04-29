import React, { Component } from "react";
import "../Css/FlipImageX.css";


export default class FlipImageX extends Component{
    render()
    {
        // const classes = this.props; 
        return(
        <div className="bodyX">
            <div className="cardX">

              <div className="frontX">
              <img className="myImage"  src={this.props.imageSrc} alt="W3Schools.com"/>
              {/* <img src="https://hmp.me/cjbf" alt="yaya"/> */}
              </div>
              <div className="backX">
                    <div className="detailsX">
                        <h2 className="textX">Ahmed Mohamed<br/><span>Web developer</span></h2>
                        
                    </div>
              </div>
            </div>
        </div>
        )
    }
  }