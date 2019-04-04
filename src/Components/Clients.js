import React, { Component } from 'react';
import '../Css/Clients.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Clients extends Component{
    
    render()
    {
        
        return(
            <div id = "Clients" className="Clients">
            <h1 id= "ClientsText">Our Clients</h1>
                <img alt="" src="http://www.egyptfoodsgroup.com/img/logo.png"/>
                <img alt="" src="https://www.elmotaheda-web.com/images/cinnabon.png"/>
                <img alt="" src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png"/>
                <br/>
                <img alt="" src="http://pngimg.com/uploads/google/google_PNG19644.png"/>
                <img alt="" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png"/>
                <img alt="" src="http://pluspng.com/img-png/samsung-logo-png-exciting-samsung-logo-vector-free-download-58-for-design-logo-with-samsung-logo-vector-free-download-1269.png"/>
                <br/>
                <img alt="" src="https://pngimg.com/uploads/uber/uber_PNG24.png"/>
                <img alt="" src="https://upload.wikimedia.org/wikipedia/sco/d/d5/Vodafone_logo.png"/>
                <img alt="" src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"/>
            </div>
        )
    }
}