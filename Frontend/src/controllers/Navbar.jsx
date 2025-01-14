import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { issueSubMenu, cardData } = useContext(ShopContext);

  const [issuersData, setIssuersData] = useState([]);
  const [openIssuersData, setOpenIssuersData] = useState(false);

  const [categoriesData, setCategoriesData] = useState([])
  const [openCategoriesData, setOpenCategoriesData] = useState(false);

  useEffect(() => {
    setIssuersData(issueSubMenu);
    setCategoriesData(cardData)
  }, [issueSubMenu, cardData]);

  return (
    <div className="w-full">
      <nav className="bg-yellow-500 border-b-8 border-black z-40">
        <div className="container mx-auto px-5 py-5 lg:py-10 flex items-center justify-between">
          <img
            src="https://images.pexels.com/photos/29988969/pexels-photo-29988969/free-photo-of-charming-street-view-in-kerala-india.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Logo"
            className="h-20 w-20 lg:w-28 lg:h-28 -mb-16 lg:-mb-44 relative bottom-2 lg:bottom-4 border-4 border-black rounded-full"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ml-auto">
            <NavLink
              to="/"
              className="text-sm border-b-8 border p-1 px-2 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Home
            </NavLink>

            <div className="relative-group"
            onMouseEnter={() => setOpenIssuersData(true)}
            onMouseLeave={() => setOpenIssuersData(false)}
            >
            <NavLink
              to="/issuers"
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Issuers <MdArrowDropDown/>
            </NavLink>

            {/* Dropdown Menu */}
            <div className={`absolute bg-white w-[420px] right-20 rounded-md top-[65px] group-hover:block grid grid-cols-2 ${openIssuersData ? 'border border-black' : ''}`}>
              {openIssuersData &&
                issuersData.map((item, index) => (
                  <Link
                    to={`/issuers/${item._id}`}
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
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
              >
              Categories <MdArrowDropDown />
              </NavLink>
              <div className={`absolute bg-white w-[520px] right-20 rounded-md top-[65px] group-hover:block grid grid-cols-2 ${openCategoriesData ? 'border border-black' : ''}`}>
              {openCategoriesData &&
                categoriesData.map((item, index) => (
                  <Link
                    to={`/categories/${item.id}`}
                    key={index}
                    className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-md"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <p className="text-sm">{item.title}</p>
                  </Link>
                ))}
              </div>
              </div>

            <NavLink
              to="/blog"
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
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
          <div className="absolute top-[8vh] min-h-screen w-full bg-yellow-400 border-t-8 border-black shadow-lg md:hidden z-10">
            <div className="flex flex-col items-start justify-start pl-4 gap-6 py-6">
              <NavLink
                to="/"
                className="text-sm border-b-8 border px-2 p-1 bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
                onClick={() => setIsVisible(false)}
              >
                Home
              </NavLink>
            
              <div className="relative-group"
            onMouseEnter={() => setOpenIssuersData(true)}
            onMouseLeave={() => setOpenIssuersData(false)}
            >
            <NavLink
              to="/issuers"
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Issuers <MdArrowDropDown/>
            </NavLink>

            {/* Dropdown Menu */}
            <div className={`absolute bg-white w-[220px] left-28 rounded-md top-[25px] group-hover:block grid grid-cols-1 ${openIssuersData ? 'border border-black' : ''}`}>
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
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
              >
              Categories <MdArrowDropDown />
              </NavLink>
              <div className={`absolute bg-yellow-50 w-[220px] left-36 rounded-md top-[65px] group-hover:block grid grid-cols-1 ${openCategoriesData ? 'border border-black' : ''}`}>
              {openCategoriesData &&
                categoriesData.map((item, index) => (
                  <Link
                    to={`/categories/${item.id}`}
                    key={index}
                    className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-md"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <p className="text-sm">{item.title}</p>
                  </Link>
                ))}
              </div>
              </div>

            <NavLink
              to="/blog"
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm border-b-8 border px-2 p-1 items-center flex text-center bg-white rounded-md border-black font-medium hover:cursor-pointer text-decoration-none"
            >
              About
            </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
