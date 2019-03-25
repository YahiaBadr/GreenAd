import React, { Component } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "react-bootstrap/Nav";
export default class NavBar extends Component {
  render() {
    function scrollTextHome() {
      document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
    }
    function scrollTextAboutUs() {
      document.getElementById("AboutUs").scrollIntoView({ behavior: "smooth" });
    }
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
    return (
      <div className="Header">
        <img
          className="Logo"
          src="https://hmp.me/ciz9"
          alt=""
        />

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link class = "button"eventKey="Home" onSelect={scrollTextHome}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Services" onSelect={scrollTextServices}>
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Clients" onSelect={scrollTextClients}>
              Clients
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="AboutUs" onSelect={scrollTextAboutUs}>
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="ContactUs" onSelect={scrollTextContactUs}>
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
