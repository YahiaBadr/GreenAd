import React, { Component } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default class Clients extends Component {
  state = {
    activeStep: 0,
    anchorEl: null
  };
  habda() {
    document.getElementById("Footer").scrollIntoView({ behavior: "smooth" });
    this.handleClose();
  }
  handleClick = event => {
    if (this.state.anchorEl === null)
      this.setState({ anchorEl: event.currentTarget });
    else {
      this.habda();
    }
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const classes = this.props;
    const { anchorEl } = this.state;
    return (
      <div className="Header">
        <img className="Logo" src="https://hmp.me/ciz9" alt="" />

        <IconButton className={classes.menuButton} onClick={this.handleClick} color="inherit" aria-label="Menu">
               <MenuIcon></MenuIcon>
                  <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)}>
                    <MenuItem onClick={this.handleClick}>Home</MenuItem>
                    <MenuItem onClick={this.handleClick}>About Us</MenuItem>
                    <MenuItem onClick={this.handleClick}>Services</MenuItem>
                    <MenuItem onClick={this.handleClick}>Clients</MenuItem>
                    <MenuItem onClick={this.handleClick}>Contact Us</MenuItem>
                  </Menu>
                </IconButton> 
      </div>
    );
  }
}
