import React, { Component } from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class NavBar extends Component{
    
    render()
    {
        function scrollText() {
            document.getElementById("Footer").scrollIntoView({behavior:"smooth"});
        }
        return(
        <div className='Header'>
              <img className="Logo" src="https://www.colourbox.com/preview/1523002-single-green-leaf-on-white-background-isolated-with-path.jpg"  alt=""/>
              <ul className="headerList">
                <li><button className="headerBtn" onClick={scrollText}><span>Home</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>About Us</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>Services</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>Clients</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>Contact Us</span></button></li>
              </ul>  
        </div>
        )
    }
}