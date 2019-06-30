import React, { Component } from "react";
import insta from '../img/insta.png';
import linkedin from '../img/linkedin.png';
import github from '../img/Github.svg';
 
class Contact extends Component {
  render() {
    return (
      <div align = "center">
        <h2>Let's Connect!</h2>
        <div className="image">
          <a href="https://github.com/nitishgopu" target="_blank" >
            <img  src={github}  alt="Github" height="40px" width="80px" />
          </a>
          <a href="https://www.instagram.com/nitishgopu/" target="_blank" >
            <img  src={insta}  alt="Insta" height="40px" width="80px" />
            </a>
          <a href="https://www.linkedin.com/in/nitish-gopu-96537288" target="_blank" >
            <img className="linkedin" src={linkedin} alt="Linkedin" height="38px" width="38px" margin-left = "20px"/>
          </a>
        </div>  
      </div>
    );
  }
}

export default Contact;