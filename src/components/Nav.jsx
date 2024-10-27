import React, { useState } from "react";
import FullLogo from "../assets/FullLogo.png";
import Menu from "../assets/menu.svg";

function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navBar flex justify-center shadow-lg h-fit bg-black  rounded-b-3xl ">
      <button className="wrapper w-[60rem] flex justify-center">
        <img src={FullLogo} className="w-40 py-3" alt="Menu Logo" />
      </button>

      {showMenu && (
        <div className="menu-content text-white absolute top-16 right-0 left-[60rem] bg-gray-800 p-4 rounded shadow-lg h-svh z-50 mr-1">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
      <img
        src={Menu}
        className=" pl-11"
        onClick={() => {
          setShowMenu(!showMenu);
          props.change(!showMenu);
        }}
      />
    </div>
  );
}

export default Nav;
