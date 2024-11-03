import React, { useState } from "react";
import FullLogo from "../assets/FullLogo.png";
import Menu from "../assets/menu.svg";
import { Link } from "react-router-dom";

function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navBar flex justify-center shadow-lg h-fit bg-black  rounded-b-3xl lg:p-0 px-10 ">
      <a
        className="wrapper w-[70rem] flex justify-center cursor-pointer ml-10 lg:ml-40"
        href="/"
      >
        <img src={FullLogo} className="w-40 py-3" alt="Menu Logo" />
      </a>

      {showMenu && (
        <div className="menu-content text-white absolute top-16 right-0 left-40  lg:left-[60rem] bg-gray-800 p-4 rounded shadow-lg h-dvh z-50 mr-1 justify-center flex ">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>

            <li className="hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
      <img
        src={Menu}
        className=" mx-5 my-2 px-5 rounded-full hover:bg-yellow-400"
        onClick={() => {
          setShowMenu(!showMenu);
          props.change(!showMenu);
        }}
      />
    </div>
  );
}

export default Nav;
