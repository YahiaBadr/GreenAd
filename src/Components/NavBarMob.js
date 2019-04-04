import React, { Component } from "react";
import "../App.css";
import "../Css/NavBarMob.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";
export default class Clients extends Component {
  render() {
    function scrollTextHome() {
      document.getElementById("Home").scrollIntoView({ behavior: "smooth", block: 'center' });
    }
    function scrollTextAboutUs() {
      document.getElementById("AboutUs").scrollIntoView({ behavior: "smooth", block: 'center'  });
    }
    function scrollTextServices() {
      document
        .getElementById("Services")
        .scrollIntoView({ behavior: "smooth", block: 'center' });
    }
    function scrollTextClients() {
      document.getElementById("Clients").scrollIntoView({ behavior: "smooth", block: 'center'  });
    }
    function scrollTextTeam() {
      document.getElementById("team").scrollIntoView({ behavior: "smooth", block: 'center'  });
    }
    function scrollTextContactUs() {
      document.getElementById("Contact").scrollIntoView({ behavior: "smooth", block: 'center'  });
    }
    // const { classes } = this.props;
    return (
      //navbar navbar-default navbar-alt
      //navbar navbar-expand-lg navbar-dark bg-dark
      <div className="Header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-">
        <button 
        // class="navbar-brand"
          class="Logo"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          onClick={scrollTextHome}
        >
        <img id="GreenAd" src="http://i.hmp.me/m/96a2deb459a5c4e5842776f1573683c3.png"/>
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
