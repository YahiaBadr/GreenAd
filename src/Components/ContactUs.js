import React, { Component } from "react";
import "../Css/ContactUs.css";
import nodemailer from "nodemailer";
export default class ContactUs extends Component {
  render() {
    function sendMail(){
      console.log("here")
      var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: 'sumergiteme@gmail.com',
        //  user : reviewer.email,
         pass: 'U-CANT-SE-ME'
        //  pass: reviewer.password
       }
     });
     
     var mailOptions = {
       from: 'sumergiteme@gmail.com',
      //  from: reviewer.email,
       to: 'yahya.hisham97@gmail.com',
      //  to: notification.emailOfRecipient,
       subject: 'Company Request Accepted',
       text: 'Automated message'
     };
     
     transporter.sendMail(mailOptions, function(error, info){
       if (error) {
         console.log("error");
       } else {
         console.log('Email sent: ' + info.response);
       }
     
    });
   }

    return (
      <div id="Contact" className="Contact">
        <p>Contact Us</p>
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />

          <label>Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          />
          <input type="submit" value="Submit" onClick={sendMail} />
        </div>
      </div>
    );
  }
}
