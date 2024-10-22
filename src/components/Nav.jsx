import React from "react";
import FullLogo from "../assets/FullLogo.png";

function Nav() {
  return (
    <div className="navBar flex justify-center shadow-2xl h-fit bg-black shadow-white">
      <img src={FullLogo} className="w-64 py-2 " />
    </div>
  );
}

export default Nav;
