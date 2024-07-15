import React from "react";
import pronoia from "../assets/pronoia-cover-v2.jpg";
import btc from "../assets/btc-cover.jpg";
import adda from "../assets/artisan-adda-cover.jpg";

const Cards = () => (
  <div
    id="cards-holder"
    className="cards-section bg-black bg-opacity-70 py-6 px-4 text-center pt-28 pb-28 scroll-mt-20"
  >
    <div className="relative z-10 flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-center">
      <h3 className="w-full events-title text-4xl font-black text-white">
        OUR EVENTS
      </h3>
      <div
        className="card w-full max-w-xs h-64 md:max-w-md md:h-80 lg:max-w-sm lg:h-80 xl:w-1/4 xl:h-96 bg-cover bg-center rounded-lg overflow-hidden relative transition-transform duration-400 transform hover:skew-y-1"
        style={{ backgroundImage: `url(${pronoia})` }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#95c11e] bg-opacity-100 p-5 flex flex-col text-left opacity-0 transition-opacity duration-400 hover:opacity-100">
          <h4 className="text-xl font-black text-black mb-2">PRONOIA</h4>
          <p className="text-xs text-black mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            placeat at libero odit voluptates eius. Atque reiciendis quae
            voluptatem deleniti!
          </p>
          <p className="text-xs text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            inventore nulla corporis qui obcaecati eos aut ea accusamus nobis
            eligendi!
          </p>
        </div>
      </div>
      <div
        className="card w-full max-w-xs h-64 md:max-w-md md:h-80 lg:max-w-sm lg:h-80 xl:w-1/4 xl:h-96 bg-cover bg-center rounded-lg overflow-hidden relative transition-transform duration-400 transform hover:skew-y-1"
        style={{ backgroundImage: `url(${btc})` }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#95c11e] bg-opacity-100 p-5 flex flex-col text-left opacity-0 transition-opacity duration-400 hover:opacity-100">
          <h4 className="text-lg font-black text-black mb-2">
            BREAK THE CIRCLE
          </h4>
          <p className="text-xs text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            incidunt, necessitatibus fugit nam, optio illum culpa quod unde
            maiores deserunt dolore error.
          </p>
        </div>
      </div>
      <div
        className="card w-full max-w-xs h-64 md:max-w-md md:h-80 lg:max-w-sm lg:h-80 xl:w-1/4 xl:h-96 bg-cover bg-center rounded-lg overflow-hidden relative transition-transform duration-400 transform hover:skew-y-1"
        style={{ backgroundImage: `url(${adda})` }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#95c11e] bg-opacity-100 p-5 flex flex-col text-left opacity-0 transition-opacity duration-400 hover:opacity-100">
          <h4 className="text-lg font-black text-black mb-2">ARTISAN ADDA</h4>
          <p className="text-xs text-black ">
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
