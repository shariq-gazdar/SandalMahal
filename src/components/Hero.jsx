import React from "react";
import heroVideo from "../assets/heroVideo.mp4";

function Hero() {
  return (
    <div>
      <video
        src={heroVideo}
        className="w-full h-96 p-2 bg-gray-600"
        loop
        muted
        autoPlay
      ></video>
    </div>
  );
}

export default Hero;
