import React, { Component } from "react";
import "../App.css";
import "../Css/NavBarMob.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";
export default class Clients extends Component {
  state = {
    currentScrollHeight: 0
  };
  componentDidMount () {     
    window.onscroll =()=>{
     const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
     if (this.state.currentScrollHeight !== newScrollHeight)
     {
         this.setState({currentScrollHeight: newScrollHeight})
     }
   }
 }
  render() {
    function scrollTextHome() {
      var scrollTo=document.getElementById("Home").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
      window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
    }
    function scrollTextAboutUs() {
      var scrollTo=document.getElementById("AboutUs").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
      window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
    }
    function scrollTextServices() {
      var scrollTo=document.getElementById("Services").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
      window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
    }
    async function scrollTextClients() {
      var scrollTo=document.getElementById("Clients").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
      window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
    }
    function scrollTextTeam() {
      var scrollTo=document.getElementById("team").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
      window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
    }
    function scrollTextContactUs() {
      var scrollTo=document.getElementById("Contact").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
      window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
    }
    const opacity = 1-Math.min(100 / this.state.currentScrollHeight  , 1)
    const styles = {
    content: {
      backgroundColor: 'rgba(0, 0, 0,'+ opacity +')',
    }
  }
    return (
      //navbar navbar-default navbar-alt
      //navbar navbar-expand-lg navbar-dark bg-dark
      <div className="Header" id="Header" style={styles.content}>
        <nav class="navbar navbar-expand-lg navbar-dark bg-">
        <button 
        // class="navbar-brand"
          class="Logo"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          onClick={scrollTextHome}
        >
        <img id="GreenAd" src="http://i.hmp.me/m/96a2deb459a5c4e5842776f1573683c3.png" alt="Green_Ad_Logo"/>
        </button>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ml-auto active">
                <Button
                  // class="nav-link ml-auto"
                  class = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextHome}
                >
                  Home <span class="sr-only">(current)</span>
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  class="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextServices}
                >
                  Services
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  class = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextClients}
                >
                  Clients
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  class = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextTeam}
                >
                  Team
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  class = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextAboutUs}
                >
                  AboutUS
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  class = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextContactUs}
                >
                  ContactUS
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
