import React, { useEffect } from "react";
import "./MainPage.css";
import bgVideo from "../assets/bg-video-main.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "black",
      duration: 0.5,
      height: "90px",
      scrollTrigger: {
        trigger: "#nav",
        start: "top - 10%",
        scrub: 1,
      },
    });

    gsap.to("#main", {
      backgroundColor: "black",
      duration: 0.5,
      scrollTrigger: {
        trigger: "#main",
        start: "top + 10%",
        scrub: 1,
      },
    });

    gsap.from("#about-us img", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about-us",
        start: "top 60%",
        end: "top 55%",
        scrub: 2,
      },
    });

    gsap.from("#cards-holder .card", {
      y: 50,
      scale: 0.85,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#cards-holder",
        start: "top 60%",
        end: "top 55%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div id="main">
      <video autoPlay loop muted src={bgVideo}></video>
      {/* Hero Section */}
      <div id="page1">
        <h1>
          SEE. SHOOT. <span className="green-text">PS.</span>
        </h1>
        <h2>
          WELCOME TO IUT{" "}
          <span className="green-text">PHOTOGRAPHIC SOCIETY!</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, minima?
          Saepe at unde earum nisi! Consequuntur fuga hic suscipit ad ea
          adipisci nulla molestias voluptates voluptatum, quod exercitationem
          numquam eius?
        </p>
      </div>
      {/* Scroller */}
      <div id="scroller">
        <div id="scroller-texts">
          <h4>PHOTOGRAPHY</h4>
          <h4>ADDA</h4>
          <h4>#SHOOTATIUT</h4>
          <h4>PS CORNER</h4>
          <h4>DRONE</h4>
        </div>
        <div id="scroller-texts">
          <h4>PHOTOGRAPHY</h4>
          <h4>ADDA</h4>
          <h4>#SHOOTATIUT</h4>
          <h4>PS CORNER</h4>
          <h4>DRONE</h4>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
