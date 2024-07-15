import React from "react";
import "./Navbar.css";
import logo from "../assets/iutps-logo.png";

const Navbar = () => (
  <div
    id="nav"
    className="h-28 w-full px-15 fixed flex items-center justify-between md:justify-start md:px-28 z-50 tran"
  >
    <a href="/">
      <img src={logo} alt="IUTPS Logo" className="h-12" />
    </a>
    <a href="/">
      <div className="mx-2.5 md:mx-5">
        <h4 className="font-normal text-sm">HOME</h4>
      </div>
    </a>
    <a href="/">
      <div className="mx-2.5 md:mx-5">
        <h4 className="font-normal text-sm">OUR WORKS</h4>
      </div>
    </a>
    <a href="#about-us">
      <div className="mx-2.5 md:mx-5">
        <h4 className="font-normal text-sm">ABOUT US</h4>
      </div>
    </a>
    <a href="#cards-holder">
      <div className="mx-2.5 md:mx-5">
        <h4 className="font-normal text-sm">EVENTS</h4>
      </div>
    </a>
  </div>
);

export default Navbar;
