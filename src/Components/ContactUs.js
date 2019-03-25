import React,{ Component } from "react";
import '../Css/ContactUs.css';
export default class ContactUs extends Component{

    render() {
        return (
          <div className="Contact">
          <p>Contact Us</p>
          <div>
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      
      
          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
      
      
          <label>Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          <input type="submit" value="Submit" />
          </div>
          </div>
        );
      }
}