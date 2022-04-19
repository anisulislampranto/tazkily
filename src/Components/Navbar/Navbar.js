import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../Assets/Group 2.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:flex justify-between sm:justify-evenly p-5">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src={logo} alt="" />
          <a href="" className="my-auto">
            Tazkily
          </a>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className="block my-auto sm:hidden md:hidden lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {toggle && (
        <>
          <div className="flex flex-col gap-5 mt-4 sm:hidden text-right">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
            <a href="">Login</a>
            <button className="text-right">Get Started</button>
          </div>
        </>
      )}
      <div className="hidden sm:flex sm:gap-8 my-auto ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Pricing</a>
        <a href="">Blog</a>
      </div>
      <div className="hidden sm:flex sm:gap-6 my-auto">
        <a href="">Login</a>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
