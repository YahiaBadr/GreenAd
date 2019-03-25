import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import "../Css/SBN.css"
const styles = {
  root: {
    width: 500
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
    <div id="Big">
       
        <div class="logo2">
            <img className="Logo" src="https://hmp.me/ciz9" alt="" />
        </div>
      
        <div id="manta">
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >

          <img className="Logo" src="https://hmp.me/ciz9" alt=""/>
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="Services" />
          <BottomNavigationAction label="Clients" />
          <BottomNavigationAction label="AboutUs" />
          <BottomNavigationAction label="ContactUs" />
        </BottomNavigation>
        </div>
    </div>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
