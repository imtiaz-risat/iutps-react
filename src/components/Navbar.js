import React from "react";
import "./Navbar.css";
import logo from "../assets/iutps-logo.png";

const Navbar = () => (
  <div id="nav">
    <a href="/">
      <img src={logo} alt="IUTPS Logo" />
    </a>
    <a href="/">
      <div className="menu-items">
        <h4>Home</h4>
      </div>
    </a>
    <a href="/">
      <div className="menu-items">
        <h4>Our Works</h4>
      </div>
    </a>
    <a href="#about-us">
      <div className="menu-items">
        <h4>About Us</h4>
      </div>
    </a>
    <a href="#cards-holder">
      <div className="menu-items">
        <h4>Events</h4>
      </div>
    </a>
  </div>
);

export default Navbar;
