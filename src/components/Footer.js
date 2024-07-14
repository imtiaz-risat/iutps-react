import React from "react";
import "./Footer.css";
import logo from "../assets/iutps-logo.png";
import fbIcon from "../assets/facebook-icon-v2.png";
import instaIcon from "../assets/instagram-icon-v2.png";
import ytIcon from "../assets/youtube-icon-v2.png";

const Footer = () => (
  <div id="footer">
    <div id="col-01">
      <a href="/">
        <img src={logo} alt="IUTPS Logo" />
      </a>
    </div>
    <div id="col-02">
      <a href="/">
        <h3>HOME</h3>
      </a>
      <a href="/">
        <h3>OUR WORKS</h3>
      </a>
      <a href="/">
        <h3>EVENTS</h3>
      </a>
      <a href="/">
        <h3>ABOUT US</h3>
      </a>
    </div>
    <div id="col-04">
      <h5>Address</h5>
      <h4>
        Boardbazar,
        <br />
        Gazipur, Bangladesh
      </h4>
      <h5>Mobile</h5>
      <h4>01877-719563</h4>
      <h5>Email</h5>
      <h4>iutps.org@gmail.com</h4>
    </div>
    <div id="col-03">
      <div id="social-icons">
        <a href="https://www.facebook.com/IUTPS">
          <img id="facebook" src={fbIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/iutps_official">
          <img id="insta" src={instaIcon} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@iutpsofficial3612">
          <img id="youtube" src={ytIcon} alt="YouTube" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
