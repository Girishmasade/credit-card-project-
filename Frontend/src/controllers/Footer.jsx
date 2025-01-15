import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="bg-yellow-500 border-y-6 border-black relative -z-10">
        <div className="container mx-auto px-5 py-10 grid lg:grid-cols-12 gap-8">
          {/* Links Section */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 flex-wrap max-lg:pr-[90px]">
              <Link to="/" className="cursor-pointer">
                <h1 className="bg-white hover:bg-white/80 transition-colors duration-300 px-4 py-1 text-xs border-black border border-b-4 rounded-md">
                  Home
                </h1>
              </Link>
              <Link to="/categories" className="cursor-pointer">
                <h1 className="bg-white hover:bg-white/80 transition-colors duration-300 px-4 py-1 text-xs border-black border border-b-4 rounded-md">
                  Categories
                </h1>
              </Link>
              <Link to="/issuers" className="cursor-pointer">
                <h1 className="bg-white hover:bg-white/80 transition-colors duration-300 px-4 py-1 text-xs border-black border border-b-4 rounded-md">
                  Issuers
                </h1>
              </Link>
              <Link to="/blog" className="cursor-pointer">
                <h1 className="bg-white hover:bg-white/80 transition-colors duration-300 px-4 py-1 text-xs border-black border border-b-4 rounded-md">
                  Blog
                </h1>
              </Link>
              <Link to="/about" className="cursor-pointer" >
                <h1 className="bg-white hover:bg-white/80 transition-colors duration-300 px-4 py-1 text-xs border-black border border-b-4 rounded-md">
                  About
                </h1>
              </Link>
              <Link to="/privacy-policy" className="cursor-pointer">
                <h1 className="bg-white hover:bg-white/80 transition-colors duration-300 px-4 py-1 text-xs border-black border border-b-4 rounded-md">
                  Privacy Policy
                </h1>
              </Link>
            </div>

            <p className="border border-b-4 border-black rounded-md bg-white px-4 py-1 text-xs w-fit block mt-4">
              <strong>amazingcreditcards.in</strong> is not affiliated with any
              credit card issuer or bank.
              <br />
              All trademarks are properties of their respective owners. ©2024 - All
              rights reserved.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-4 flex justify-end">
            <img
              src="https://images.pexels.com/photos/29037336/pexels-photo-29037336/free-photo-of-stylish-woman-in-leather-jacket-by-orange-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Profile"
              className="w-36 h-36 max-lg:absolute top-4 right-4 rounded-full border-4 border-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
