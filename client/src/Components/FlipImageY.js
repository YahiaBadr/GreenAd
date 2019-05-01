import React, { Component } from "react";
import "../Css/FlipImageY.css";


export default class FlipImageX extends Component{
    render()
    {
        // const classes = this.props; 
        return(
        <div className="bodyY">
            <div className="cardY">

              <div className="frontY">
              <img className="myImage"  src={this.props.imageSrc} alt="W3Schools.com"/>
              {/* <img src="https://hmp.me/cjbf" alt="yaya"/> */}
              </div>
              <div className="backY">
                    <div className="detailsY">
                        <h2 className="textY">Ahmed Mohamed<br/><span>Web developer</span></h2>
                        
                    </div>
              </div>
            </div>
        </div>
        )
    }
  }