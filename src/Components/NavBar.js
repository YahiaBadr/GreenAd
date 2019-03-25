import React, { Component } from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class NavBar extends Component{
    
    render()
    {
        function scrollTextHome() {
            document.getElementById("Home").scrollIntoView({behavior:"smooth"});
        }
        function scrollTextAboutUs() {
            document.getElementById("AboutUs").scrollIntoView({behavior:"smooth"});
        }
        function scrollTextServices() {
            document.getElementById("Services").scrollIntoView({behavior:"smooth"});
        }
        function scrollTextClients() {
            document.getElementById("Clients").scrollIntoView({behavior:"smooth"});
        }
        function scrollTextContactUs() {
            document.getElementById("Contact").scrollIntoView({behavior:"smooth"});
        }
        return(
        <div className='Header'>
              <img className="Logo" src="https://www.colourbox.com/preview/1523002-single-green-leaf-on-white-background-isolated-with-path.jpg"  alt=""/>
              <ul className="headerList">
                <li><button className="headerBtn" onClick={scrollTextHome}><span>Home</span></button></li>
                <li><button className="headerBtn" onClick={scrollTextAboutUs}><span>About Us</span></button></li>
                <li><button className="headerBtn" onClick={scrollTextServices}><span>Services</span></button></li>
                <li><button className="headerBtn" onClick={scrollTextClients}><span>Clients</span></button></li>
                <li><button className="headerBtn" onClick={scrollTextContactUs}><span>Contact Us</span></button></li>
              </ul>  
        </div>
        )
    }
}