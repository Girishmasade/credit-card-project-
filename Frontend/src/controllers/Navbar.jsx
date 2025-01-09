import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

const Navbar = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { issueSubMenu, cardData } = useContext(ShopContext);

  const [issuersData, setIssuersData] = useState([]);
  const [openIssuersData, setOpenIssuersData] = useState(false);

  const [categoriesData, setCategoriesData] = useState([])
  const [openCategoriesData, setOpenCategoriesData] = useState(false);

  useEffect(() => {
    setIssuersData(issueSubMenu);
    setOpenCategoriesData(cardData)
  }, [issueSubMenu, cardData]);

  return (
    <div className="w-full">
      <nav className="bg-[#e9b308] relative shadow border-b-8 border-black h-[10vh] xl:h-[14vh]">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 relative md:py-7">
          <img
            src="https://images.pexels.com/photos/29988969/pexels-photo-29988969/free-photo-of-charming-street-view-in-kerala-india.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Logo"
            className="absolute top-5 left-4 transform translate-y-2/2 rounded-full border-4 border-black w-16 h-16 md:w-32 md:h-32"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ml-auto">
            <NavLink
              to="/"
              className="text-sm border-b-8 border p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Home
            </NavLink>

            <div className="relative-group"
            onMouseEnter={() => setOpenIssuersData(true)}
            onMouseLeave={() => setOpenIssuersData(false)}
            >
            <NavLink
              to="/issuers"
              className="text-sm border-b-8 border p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Issuers <MdArrowDropDown/>
            </NavLink>

            {/* Dropdown Menu */}
            <div className={`absolute bg-white w-[420px] right-20 rounded-md top-[65px] group-hover:block grid grid-cols-2 ${openIssuersData ? 'border border-black' : ''}`}>
              {openIssuersData &&
                issuersData.map((item, index) => (
                  <Link
                    to={`/issuers/${item.id}`}
                    key={index}
                    className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-md"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <p className="text-sm">{item.title}</p>
                  </Link>
                ))}
            </div>
            </div>

                  <div className="relative-group"
                  onMouseEnter={() => setOpenCategoriesData(true)}
                  onMouseLeave={() => setOpenCategoriesData(false)}
                  >
                  
            <NavLink
              to="/categories"
              className="text-sm border-b-8 border p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
              >
              Categories <MdArrowDropDown />
              </NavLink>
              <div className={`absolute bg-white w-[420px] right-20 rounded-md top-[65px] group-hover:block grid grid-cols-2 ${openCategoriesData ? 'border border-black' : ''}`}>
              {openCategoriesData &&
                cardData.map((item, index) => (
                  <Link
                    to={`/issuers/${item.id}`}
                    key={index}
                    className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-md"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <p className="text-sm">{item.title}</p>
                  </Link>
                ))}
              </div>
              </div>

            <NavLink
              to="/blog"
              className="text-sm border-b-8 border p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm border-b-8 border p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              About
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="text-3xl text-gray-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isVisible ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isVisible && (
          <div className="absolute top-[8vh] left-0 w-full bg-yellow-400 border-t-8 border-black shadow-lg md:hidden z-10">
            <div className="flex flex-col items-center gap-6 py-6">
              <NavLink
                to="/"
                className="text-sm border-b-8 border p-1 bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
                onClick={() => setIsVisible(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-sm border-b-8 border p-1 bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
                onClick={() => setIsVisible(false)}
              >
                Issuers
              </NavLink>
              <NavLink
                to="/contact"
                className="text-sm border-b-8 border p-1 bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
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
