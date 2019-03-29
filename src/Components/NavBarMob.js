import React, { Component } from "react";
import "../App.css";
import "../Css/NavBarMob.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";
// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit
//   },
//   input: {
//     display: "none"
//   }
// });
export default class Clients extends Component {
  render() {
    function scrollTextHome() {
      document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
    }
    // function scrollTextAboutUs() {
    //   document.getElementById("AboutUs").scrollIntoView({ behavior: "smooth" });
    // }
    function scrollTextServices() {
      document
        .getElementById("Services")
        .scrollIntoView({ behavior: "smooth" });
    }
    function scrollTextClients() {
      document.getElementById("Clients").scrollIntoView({ behavior: "smooth" });
    }
    function scrollTextContactUs() {
      document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
    }
    // const { classes } = this.props;
    return (
      //navbar navbar-default navbar-alt
      //navbar navbar-expand-lg navbar-dark bg-dark
      <div className="Header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Button class="Logo"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          onClick={scrollTextHome}
        >GreenAd
        </Button>
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
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextHome}
                >
                  Home <span class="sr-only">(current)</span>
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  // class="nav-link"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextServices}
                >
                  Services
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  // class="nav-link"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextClients}
                >
                  Clients
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  // class="nav-link"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  // onClick={scrollTextAboutUs}
                >
                  AboutUS
                </Button>
              </li>
              <li class="nav-item ml-auto">
                <Button
                  // class="nav-link"
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
