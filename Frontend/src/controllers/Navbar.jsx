import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full">
      <nav className="bg-[#e9b308] relative shadow border-b-8 border-black h-[10vh] xl:h-[12vh]">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 relative md:py-7">
          <img
            src="https://images.pexels.com/photos/29988969/pexels-photo-29988969/free-photo-of-charming-street-view-in-kerala-india.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Logo"
            className="absolute top-10 left-4 transform translate-y-2/2 rounded-full border-8 border-black w-16 h-16 md:w-40 md:h-40"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ml-auto">
            <NavLink
              to="/"
              className="text-lg border-b-8 border p-1 text-center bg-white rounded-md border-black font-medium hover:cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-lg border-b-8 border p-1 text-center bg-white rounded-md border-black font-medium hover:cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-lg border-b-8 border p-1 text-center bg-white rounded-md border-black font-medium hover:cursor-pointer"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-3xl text-gray-800 focus:outline-none"
            >
              {isVisible ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isVisible && (
          <div className="absolute top-[8vh] left-56 h-[20rem] w-40 bg-yellow-400 border-t-8 border-black shadow-lg md:hidden -z-10">
            <div className="flex flex-col items-center gap-6 py-6">
              <NavLink
                to="/"
                className="text-lg border-b-8 border p-1 text-center bg-white rounded-md border-black font-medium hover:cursor-pointer"
                onClick={() => setIsVisible(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-lg border-b-8 border p-1 text-center bg-white rounded-md border-black font-medium hover:cursor-pointer"
                onClick={() => setIsVisible(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-lg border-b-8 border p-1 text-center bg-white rounded-md border-black font-medium hover:cursor-pointer"
                onClick={() => setIsVisible(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
