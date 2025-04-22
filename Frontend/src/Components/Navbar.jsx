import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userContextData } from "../Context/UserContext";

const Navbar = () => {

  const navigate = useNavigate();

  const [isScrolled, setisScrolled] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [IsLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolltop = window.scrollY;
      setisScrolled(scrolltop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute top-0 w-full">
      <nav
        className={`flex justify-between items-center h-0 px-8 py-8 transition-all duration-300 ${
          isScrolled ? "bg-white fixed top-0 w-full z-[99]" : "bg-transparent text-gray-300"
        } ${isShowMenu ?"bg-white":""}`}
      >
        <div className="cursor-pointer  text-xl font-medium">
          <span>PINMYTRIP</span>
        </div>
        <div>
          <ul className={`hidden md:flex space-x-4 items-center ${!isScrolled ?"text-black":""} gap-3.5`}>
            <NavLink to="/">
              <li className="text-l font-medium py-1 opacity-35">Home</li>
              <hr className="border-none outline-none bg-gray-500 h-0.5 w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/destination">
              <li className="text-l font-medium py-1 opacity-35">
                Destination
              </li>
              <hr className="border-none outline-none bg-gray-500 h-0.5 w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/Gallery">
              <li className="text-l font-medium py-1 opacity-35">Gallery</li>
              <hr className="border-none outline-none bg-gray-500 h-0.5 w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/TravelPackage">
              <li className="text-l font-medium py-1 opacity-35 hover:text-black">
                Travel Package
              </li>
              <hr className="border-none outline-none bg-gray-500 h-0.5 w-3/5 m-auto hidden" />
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:flex w-20 gap-4 font-medium items-center ">
          {
            <NavLink to="/Login" className={`flex px-4.5 py-1.5 hover:bg-white hover:text-black rounded transition-all duration-300`}>Login</NavLink>
          }
        </div>
        <div className="md:hidden flex gap-4 text-3xl font-medium items-center ">
          <button onClick={() => setIsShowMenu(!isShowMenu) }><i className="ri-menu-line"></i></button>
        </div>
        {/* --------------------------- Mobile View --------------------------------------------*/}
        <div className="md:hidden absolute top-12 left-0 z-50 w-full h-full ">
          <ul className={`flex-col bg-white space-x-4 items-center transform transition-all duration-300 ${isShowMenu ? "-translate-y-[0%] text-black ":"-translate-y-[200%]"} gap-3.5`}>
            <NavLink onClick={()=> setIsShowMenu(false)} to="/">
              <li className="text-l font-medium py-1 opacity-35 text-center">
                Home
              </li>
            </NavLink>
            <NavLink onClick={()=> setIsShowMenu(false)} to="/destination">
              <li className="text-l font-medium py-1 opacity-35 text-center">
                Destination
              </li>
            </NavLink>
            <NavLink onClick={()=> setIsShowMenu(false)} to="/Gallery">
              <li className="text-l font-medium py-1 opacity-35 text-center">
                Gallery
              </li>
            </NavLink>
            <NavLink onClick={()=> setIsShowMenu(false)} to="/TravelPackage">
              <li className="text-l font-medium py-1 opacity-35 text-center">
                Travel Package
              </li>
            </NavLink>
            {<NavLink onClick={()=> setIsShowMenu(false)} to="/Login">
              <li className="text-l font-medium py-1 opacity-35 text-center pb-10 pt-10">
                Login
              </li>
            </NavLink>}
              
          </ul>
        
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
