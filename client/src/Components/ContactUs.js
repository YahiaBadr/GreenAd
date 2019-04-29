import React, { Component } from "react";
import axios from 'axios';
import "../Css/ContactUs.css";
import Button from '@material-ui/core/Button'
export default class ContactUs extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      subject:"",
      text:""
    };
  }

    sendMail= async() => {
      if(!this.state.name)
        return alert("Please Enter Your Name")
      if(!this.state.email)
        return alert("Please Enter Your Emai")
      if(!this.state.subject)
        return alert("Please Enter a Subject")
      if(!this.state.text)
        return alert("Please Enter Your Message")
      const text=`Mr/Mrs ${this.state.name}\nEmail: ${this.state.email}\nSent Message: \n${this.state.text}`;
      const body ={
        subject: this.state.subject,
        text: text  
      }
      const res = await axios.post("http://localhost:5000/sendMail",body);
      this.inputEmail.value="";
      this.inputName.value="";
      this.inputSubject.value="";
      this.inputText.value="";
      alert(res.data.msg);
    }
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    };
    render() {
    return (
      <div id="Contact" className="Contact">
        <h1>Contact Us</h1>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            id="name"
            name="firstname"
            placeholder="Your name"
            onChange={this.handleChange}
            ref={el => this.inputName = el}
          />
          

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={this.handleChange}
            ref={el => this.inputEmail = el}
          />

          <label>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject..."
            onChange={this.handleChange}
            ref={el => this.inputSubject = el}
          />
          <label>Message</label>
          <textarea 
            id="text"
            name="text"
            placeholder="Enter Your Message..."
            onChange={this.handleChange}
            ref={el => this.inputText = el}
          />
          <Button onClick={this.sendMail} size="large" variant="contained" color="secondary">
            Submit
          </Button>
        </div>
        <br/>
      </div>
    );
  }
}
