
import React, { Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Stuff from "./About";
import Contact from "./Contact";



class App extends Component{
  render(){
    return(
      <HashRouter>
      <div>
          <h1>Nitish Gopu</h1>
          <div className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter> 
    );
  }
}

export default App;