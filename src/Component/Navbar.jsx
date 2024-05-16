import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 backdrop-blur-md w-full h-[80px] container mx-auto text-white flex items-center px-5 lg:px-32 justify-between">
      <div class="">
        <img src={logo} alt="" className="w-full lg:h-6 h-6" />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex space-x-6 cursor-pointer">
        <li className="text-white">
          <Link to="home" smooth={true} duration={500}>
            WHY?
          </Link>
        </li>
        <li className="text-white">
          <Link to="about" smooth={true} duration={500}>
            HOW?
          </Link>
        </li>
        <li className="text-white">
          <Link to="skills" smooth={true} duration={500}>
            PRICING
          </Link>
        </li>
        <li className=" text-white ">
          <Link to="work" smooth={true} duration={500}>
            APPLY
          </Link>
        </li>
      </ul>
      <div className="text-[#DB1FFF] flex gap-3">
        <FaTelegramPlane className=" bg-gradient-to-t rounded-lg from-[#DB1FFF] w-9 h-9 p-2"/>
        <FaXTwitter className="shadow-lg bg-gradient-to-t rounded-lg from-[#DB1FFF] w-9 h-9 p-2"/>
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 gap-3`}
      >
        <li className=" text-white font-bold">
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            WHY?
          </Link>
        </li>
        <li className="  text-white font-bold">
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            HOW?
          </Link>
        </li>
        <li className=" text-white font-bold bg">
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            PRICING
          </Link>
        </li>
        <li className="  text-white font-bold">
          <Link onClick={handleNav} to="work" smooth={true} duration={500}>
            APPLY
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
