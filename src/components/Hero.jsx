import React from "react";
import heroBanner from "../assets/webBanner.png";

function Hero() {
  return (
    <div>
      <img
        src={heroBanner}
        alt=""
        className="w-full  lg:h-full h-52 aspect-auto "
      />
    </div>
  );
}

export default Hero;
