import React, { Component } from "react";
import "../App.css";
import "../Css/NavBarMob.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Button from "@material-ui/core/Button";
export default class Clients extends Component {
  constructor (props){
    super(props)
  this.state = {
    currentScrollHeight: 0,
    headerHeight: 0,
    screenHeight:0,
    screenWidth:0
  };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}
  componentDidMount () {  
    
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.onscroll =()=>{
      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
      if (this.state.currentScrollHeight !== newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
    setTimeout(()=>{
      this.setState({headerHeight:document.getElementById("Header").clientHeight})
    },100)// it will wait 100ms
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
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
    var scrollTo=document.getElementById("Team").getClientRects()[0].y-this.state.headerHeight
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
    window.addEventListener('scroll', () => {
      var home = document.getElementById("Home").getClientRects()[0].y-this.state.headerHeight
      var services = document.getElementById("Services").getClientRects()[0].y-this.state.headerHeight
      var clients = document.getElementById("Clients").getClientRects()[0].y-this.state.headerHeight
      var team = document.getElementById("Team").getClientRects()[0].y-this.state.headerHeight
      var aboutus = document.getElementById("AboutUs").getClientRects()[0].y-this.state.headerHeight
      var contactus = document.getElementById("Contact").getClientRects()[0].y-this.state.headerHeight
      document.getElementById("buttonHome").style = styles.button
      // document.getElementById("buttonHome").style.color="goldenrod"
      document.getElementById("buttonServices").style = styles.button
      document.getElementById("buttonClients").style = styles.button
      document.getElementById("buttonTeam").style = styles.button
      document.getElementById("buttonAboutUs").style = styles.button
      document.getElementById("buttonContactUs").style = styles.button
      const offset = (this.state.screenHeight-this.state.headerHeight)/2;
      if(0 > home+this.state.headerHeight && offset < services)
      {
        document.getElementById("buttonHome").style.color="red"
      }
      if(offset >= services && offset < clients)
      {
        document.getElementById("buttonServices").style.color="red"
      }
      if(offset >= clients && offset < team)
      {
        document.getElementById("buttonClients").style.color="red"
      }
      if(offset >= team && offset < aboutus)
      {
        document.getElementById("buttonTeam").style.color="red"
      }
      if(offset >= aboutus && offset < contactus)
      {
        document.getElementById("buttonAboutUs").style.color="red"
      }
      if(offset >= contactus && contactus >= this.state.screenHeight/-3.6)
      {
        document.getElementById("buttonContactUs").style.color="red"
      }
    })
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
                <button
                  // className="nav-link ml-auto"
                  id="buttonHome"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextHome}
                  // disableRipple = {true}
                >
                  HOME
                {/* <span>  HOME</span>  */}
                </button>
              </li>
              <li className="nav-item ml-auto">
                <button
                  id="buttonServices"
                  className="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextServices}
                  // disableRipple = {true}
                >
                  SERVICES
                  {/* <span>SERVICES</span> */}
                </button>
              </li>
              <li className="nav-item ml-auto">
                <button
                  id="buttonClients"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextClients}
                  // disableRipple = {true}
                >
                  CLIENTS
                  {/* <span>CLIENTS</span> */}
                </button>
              </li>
              <li className="nav-item ml-auto">
                <button
                  id="buttonTeam"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextTeam}
                  // disableRipple = {true}
                >
                  TEAM
                  {/* <span>TEAM</span> */}
                </button>
              </li>
              <li className="nav-item ml-auto">
                <button
                  id="buttonAboutUs"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextAboutUs}
                  // disableRipple = {true}
                >
                  ABOUT US
                  {/* <span>ABOUT US</span> */}
                </button>
              </li>
              <li className="nav-item ml-auto">
                <button
                  id="buttonContactUs"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={this.scrollTextContactUs}
                  // disableRipple = {true}
                >
                  CONTACT US
                  {/* <span>CONTACT US</span> */}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
