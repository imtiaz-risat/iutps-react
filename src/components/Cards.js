import React from "react";
import "./Cards.css";
import pronoia from "../assets/pronoia-cover-v2.jpg";
import btc from "../assets/btc-cover.jpg";
import adda from "../assets/artisan-adda-cover.jpg";

const Cards = () => (
  <div className="cards-section">
    <h3 className="events-title">EVENTS</h3>
    <div id="cards-holder">
      <div className="card" style={{ backgroundImage: `url(${pronoia})` }}>
        {/* <div className="card-text">
          <h4>PRONOIA</h4>
        </div> */}
        <div className="overlay">
          <h4>PRONOIA</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            placeat at libero odit voluptates eius. Atque reiciendis quae
            voluptatem deleniti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            inventore nulla corporis qui obcaecati eos aut ea accusamus nobis
            eligendi!
          </p>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: `url(${btc})` }}>
        {/* <div className="card-text">
          <h4>BREAK THE CIRCLE</h4>
        </div> */}
        <div className="overlay">
          <h4>BREAK THE CIRCLE</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            incidunt, necessitatibus fugit nam, optio illum culpa quod unde
            maiores deserunt dolore error.
          </p>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: `url(${adda})` }}>
        {/* <div className="card-text">
          <h4>ARTISAN ADDA</h4>
        </div> */}
        <div className="overlay">
          <h4>ARTISAN ADDA</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur velit eos minima deleniti quas at molestiae placeat
            amet culpa error?
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
