import React, { Component } from 'react';
import './App.css';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const car1 = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const car2 = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    
  },
  {
    label: "Bird",
    
  },
  {
    label: "Bali, Indonesia",
   
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    
  },
  {
    label: "Goč, Serbia",
    
  }
];

// const habda=function scrollText() {
//   document.getElementById("Footer").scrollIntoView({behavior:"smooth"});
// }
class App extends Component {
  state = {
    activeStep: 0,
    anchorEl: null
  };
  habda() {
    document.getElementById("Footer").scrollIntoView({behavior:"smooth"});
    this.handleClose();
  }
  handleClick = event => {
    if(this.state.anchorEl===null)
      this.setState({anchorEl: event.currentTarget});
    else{
      this.habda();
      // this.setState({anchorEl: null});
    }
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };
  
  render() 
  {
    const classes = this.props;
    const {anchorEl} = this.state;
    function scrollText() {
      document.getElementById("Footer").scrollIntoView({behavior:"smooth"});
    }
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }
    if(window.screen.width >= 100)
    {

      return (
        <div onLoad={showPage}>{/**
      */}<div id="loader">
            
          </div>{/*
          */}<div id="myDiv">{/*
           */}<div className='Header'>
              <img className="Logo" src="https://www.colourbox.com/preview/1523002-single-green-leaf-on-white-background-isolated-with-path.jpg"  alt=""/>
              <ul className="headerList">
                <li><button className="headerBtn" onClick={scrollText}><span>Home</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>About Us</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>Services</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>Clients</span></button></li>
                <li><button className="headerBtn" onClick={scrollText}><span>Contact Us</span></button></li>
              </ul>  
            </div>{/*
             

            */}<div className="Body">
              <AutoPlaySwipeableViews onChangeIndex={this.handleStepChange} enableMouseEvents>
                {car1.map(step => (
                  <img id="swipingImage" key={step.label} className={classes.img} src={step.imgPath} alt={step.label}/>
                ))}
              </AutoPlaySwipeableViews>
            </div>{/*
          */}<div className="Body2">{/**
           */}<p className="text">
                first text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
              </p></div>{/*
               
            */}<div className="Body3">{/*
            */}<img alt="" src="http://www.egyptfoodsgroup.com/img/logo.png"/>
            <img alt="" src="https://www.elmotaheda-web.com/images/cinnabon.png"/>
            <img alt="" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Egyptian_Premier_League_logo.png/200px-Egyptian_Premier_League_logo.png"/>
            <br/>
            <img alt="" src="https://ymcss.b8cdn.com/assets/yallamotor_large.png"/>
            <img alt="" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png"/>
            <img alt="" src="http://pluspng.com/img-png/samsung-logo-png-exciting-samsung-logo-vector-free-download-58-for-design-logo-with-samsung-logo-vector-free-download-1269.png"/>
            <br/>
            <img alt="" src="https://yt3.ggpht.com/a-/AAuE7mCNFdey-43t_bfFWi4makS7MyR8LnBMBeFCxQ=s900-mo-c-c0xffffffff-rj-k-no"/>
            <img alt="" src="http://katameyadowntown.com/wp-content/uploads/2016/09/vodafone-1.png"/>
            <img alt="" src="https://www.orange.eg/Style%20Library/OrangeImages/OrangeLogo-fb.jpg"/>
            </div>
            <div className="Body4">
            <Carousel  autoPlay infiniteLoop emulateTouch>
            
                <div>
                    <img alt="" src="http://katameyadowntown.com/wp-content/uploads/2016/09/vodafone-1.png"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt="" src="https://ymcss.b8cdn.com/assets/yallamotor_large.png"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img alt="" src="https://www.orange.eg/Style%20Library/OrangeImages/OrangeLogo-fb.jpg"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                  <p className="legend">Legend4</p>
                </div>
            </Carousel>
            </div>
            <div className="Body5">
              Name: <input type="text" name="name"/><br/>
              Email: <input type="text" name="email"/><br/>
              Subject: <input type="text" name="subject"/><br/>
              Messgae: <input type="text" name="message"/><br/>
              <input type="submit" value="Submit"/>
            </div>
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
              <div className='Header'>
                <img className="Logo" src="https://www.colourbox.com/preview/1523002-single-green-leaf-on-white-background-isolated-with-path.jpg"  alt=""/>
              


                {/* <div className="Body">
                   <AutoPlaySwipeableViews onChangeIndex={this.handleStepChange} enableMouseEvents>
                    {car2.map(step => ( <img id="swipingImage" key={step.label} className={classes.img} onClick={scrollText} src={step.imgPath} alt={step.label}/>))}
                   </AutoPlaySwipeableViews>
                </div> */}
              <IconButton className={classes.menuButton} onClick={this.handleClick} color="inherit" aria-label="Menu">
                  <MenuIcon></MenuIcon>
                  <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} /*onClose={handleClick}*/ >
                    <MenuItem onClick={this.handleClick}>Home</MenuItem>
                    <MenuItem onClick={this.handleClick}>About Us</MenuItem>
                    <MenuItem onClick={this.handleClick}>Services</MenuItem>
                    <MenuItem onClick={this.handleClick}>Clients</MenuItem>
                    <MenuItem onClick={this.handleClick}>Contact Us</MenuItem>
                  </Menu>
                </IconButton>
  
                {/* <ul className="headerList">
                <li><button onClick={scrollText}>Home</button></li>
                <li><button onClick={scrollText}>About Us</button></li>
                <li><button onClick={scrollText}>Services</button></li>
                <li><button onClick={scrollText}>Clients</button></li>
                <li><button onClick={scrollText}>Contact Us</button></li>
                </ul>   */}
  
              </div>
  
              <div className="Body">
              <AutoPlaySwipeableViews
              onChangeIndex={this.handleStepChange}
              enableMouseEvents>
              {car1.map(step => (
                <img id="swipingImage" key={step.label} className={classes.img} src={step.imgPath} alt={step.label}/>
              ))}
              </AutoPlaySwipeableViews>
                <p className="text">
                  first text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                  text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                  text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                  text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                  text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>text text<br></br>
                </p>
              </div>
  
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
