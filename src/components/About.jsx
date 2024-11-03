import React from "react";
import home from "../assets/home.svg";
import FullLogo from "../assets/Typography.png";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Gmail from "../assets/gmail.svg";
function About() {
  return (
    <div className="  p-6 bg-gray-800 text-white  shadow-lg h-screen w-screen  items-center justify-between  ">
      <a href="/" className="float-right " title="Home">
        <img src={home} alt="" className="w-10 inline   h" />
      </a>
      <div className="h-full flex flex-col items-center justify-between">
        <h1 className="text-3xl font-semibold ">About Us</h1>
        <div className="aboutUs w-full lg:w-96 lg:ml-10 text-wrap">
          Immerse yourself in the art of fragrance with
          <img src={FullLogo} alt="" className="inline w-28 mr-2" />, where each
          scent tells a story and evokes emotion. Crafted with the finest
          ingredients and inspired by the beauty of nature, our perfumes are
          designed to captivate, linger, and leave a lasting impression. Embrace
          luxury in a bottle and let your essence shine with our unique
          collection, made to awaken your senses and elevate every moment
        </div>
        <div className="socials flex gap-x-4  ">
          <a href="">
            <img
              src={Instagram}
              alt=""
              className="w-10 bg-white rounded-full p-1"
              title="Instagram"
            />
          </a>
          <a href="">
            <img
              src={Facebook}
              alt=""
              className="w-10 bg-white rounded-full p-1"
              title="Facebook"
            />
          </a>
          <a href="">
            <img
              src={Gmail}
              alt=""
              className="w-10 bg-white rounded-full p-1"
              title="Gmail"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
