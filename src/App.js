import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import NavBarMob from './Components/NavBarMob';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Clients from './Components/Clients';
import BodyText from './Components/BodyText';
import SlideShow from './Components/SlideShow';
import ContactUs from './Components/ContactUs';
// import { Carousel } from 'react-responsive-carousel';


class App extends Component {
  render() 
  {
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
    if(window.screen.width >= 800)
    {

      return (
        <div onLoad={showPage}>
        <div id="loader">
            
          </div>
          <div id="myDiv">
            <NavBar></NavBar>
            <SlideShow></SlideShow>
            <BodyText></BodyText>
            <Clients></Clients>
              {/* Carosel */}
            <ContactUs></ContactUs>
            <div id="Footer" className="Footer">
              <br></br>©CopyRights to SYM- All Rights Reserved
            </div>
          </div>
         </div>
        
        );
    } 
    else
    {
        return (
          <div onLoad={showPage}>
            <div id="loader">
              
            </div>
            <div id="myDiv">
              
              <NavBarMob></NavBarMob>
              <SlideShow></SlideShow>
              <BodyText></BodyText>
  
              <div id="Footer" className="Footer">
                <br></br>©CopyRights to SYM- All Rights Reserved
              </div>
            </div>
          </div>
          
          );
    }
    
  }
}

export default App;
