import React, { Component } from "react";
import "../App.css";
import "../Css/NavBarMob.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";
export default class Clients extends Component {
  constructor (props){
    super(props)
  this.state = {
    currentScrollHeight: 0,
    headerHeight: 0
    
  };
}
  componentDidMount () {  
    
    // this.setState({headerHeight: document.getElementById("Header").getClientRects()[0].height}) 
    window.onscroll =()=>{
     const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
     if (this.state.currentScrollHeight !== newScrollHeight)
     {
         this.setState({currentScrollHeight: newScrollHeight})
     }
    }
    setTimeout(()=>{
      console.log(document.getElementById("Header").clientHeight)
      this.setState({headerHeight:document.getElementById("Header").clientHeight})
      console.log(this.state.headerHeight)
    },2)
  }
  scrollTextAboutUs= () => {
    var scrollTo=document.getElementById("AboutUs").getClientRects()[0].y-this.state.headerHeight
    window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
  }
  scrollTextHome = () => {
    var scrollTo=document.getElementById("Home").getClientRects()[0].y-this.state.headerHeight
    window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
  }
  scrollTextServices=()=> {
    var scrollTo=document.getElementById("Services").getClientRects()[0].y-this.state.headerHeight
    window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
  }
  scrollTextClients=()=> {
    var scrollTo=document.getElementById("Clients").getClientRects()[0].y-this.state.headerHeight
    window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
  }
  scrollTextTeam=()=> {
    var scrollTo=document.getElementById("team").getClientRects()[0].y-this.state.headerHeight
    window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
  }
  scrollTextContactUs = ()=> {
    var scrollTo=document.getElementById("Contact").getClientRects()[0].y-this.state.headerHeight
    window.scrollBy({top: scrollTo, left: 0, behavior: 'smooth'})
  }
  render() { 
    const opacity = 1-Math.min(10 / this.state.currentScrollHeight  , 1)
    const styles = {
    content: {
      backgroundColor: 'rgba(255, 255, 255,'+ opacity +')',
      }
    }
    // window.addEventListener('scroll', () => {
    //   var y=window.scrollY;
    //   // console.log(y)
    //   var home = document.getElementById("Home").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
    //   var clients = document.getElementById("Clients").getClientRects()[0].y-document.getElementById("Header").getClientRects()[0].height
    //   if(y === clients)
    //   {
    //     // document.getElementById("buttonClients").
    //   }
    // })
    return (
      //navbar navbar-default navbar-alt
      //navbar navbar-expand-lg navbar-dark bg-dark
      <div className="Header" id="Header" style={styles.content} ref="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-" id="navbarmob">
        <button 
        // className="navbar-brand"
          className="Logo"
          id="buttonLogo"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          onClick={this.scrollTextHome}
        >
        <img id="GreenAd" src="http://i.hmp.me/m/96a2deb459a5c4e5842776f1573683c3.png" alt="Green_Ad_Logo"/>
        </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-auto active">
                <Button
                  // className="nav-link ml-auto"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextHome}
                  disableRipple = {true}
                >
                  Home 
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextServices}
                  disableRipple = {true}
                >
                  Services
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextClients}
                  disableRipple = {true}
                  id="buttonClients"
                >
                  Clients
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextTeam}
                  disableRipple = {true}
                >
                  Team
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  id="buttonAboutUs"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextAboutUs}
                  disableRipple = {true}
                >
                  About Us
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextContactUs}
                  disableRipple = {true}
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
