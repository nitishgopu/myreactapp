import React, { Component } from "react";
import insta from '../img/insta.png';
import linkedin from '../img/linkedin.png';
 
class Stuff extends Component {
  render() {
    return (
      <div align = "center">
        <img  src={insta} alt="Insta" height="5%" width="5%" />
        <img  src={linkedin} alt="Linkedin" height="2.5%" width="2.5%" />
      </div>
    );
  }
}
 
export default Stuff;