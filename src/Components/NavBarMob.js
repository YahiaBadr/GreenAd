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
export default class NavBarMob extends Component {
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Button className="Logo"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          onClick={scrollTextHome}
        >GreenAd
        </Button>
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
                  // class="nav-link ml-auto"
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextHome}
                >
                  Home <span className="sr-only">(current)</span>
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextServices}
                >
                  Services
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  onClick={scrollTextClients}
                >
                  Clients
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className = "button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  // onClick={scrollTextAboutUs}
                >
                  AboutUS
                </Button>
              </li>
              <li className="nav-item ml-auto">
                <Button
                  className = "button"
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
