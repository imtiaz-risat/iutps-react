import React from "react";

const AboutUs = () => (
  <div
    id="about-us"
    className="flex flex-col items-center justify-evenly text-center p-4 md:flex-row md:pt-12 md:pb-24 mb:pt-24 bg-black relative z-10 scroll-mt-20"
  >
    <div id="about-us-texts" className="text-center md:w-1/2 md:text-left">
      <h3 className="text-3xl text-center font-black my-5 md:my-6">ABOUT US</h3>
      <p className="text-sm leading-6 font-light my-4 md:text-base md:leading-8 md:my-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, officia
        est odio aperiam reiciendis cupiditate ipsa illum ipsam magnam nulla
        quod provident, omnis repellendus quo cumque quae esse. Voluptatum
        laborum rerum tenetur quibusdam exercitationem nisi.
      </p>
      <p className="text-sm leading-6 font-light my-4 md:text-base md:leading-8 md:my-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        perferendis magni ratione unde reprehenderit voluptates. Ut.
      </p>
    </div>
  </div>
);

export default AboutUs;
