import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative w-full h-screen bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740')] ">
      <div className=" w-full py-10 px-3 md:px-8">
        <div className="hidden lg:block">
        <h1 className="text-sm md:text-4xl text-white text-center font-medium">
          Find the perfact trip for you and discover
        </h1>
        <h1 className="text-sm md:text-4xl text-white text-center font-medium">
          extraordinary adventures with us!
        </h1>
        </div>
        <div className="absolute bottom-3 md:bottom-6">
        <div className=" text-white mt-3">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-3xl font-medium">PINMYTRIP</h1>
              <h3 className="text-xs w-96 md:w-sm md:text-sm py-5 md:py-0 text-white">
                From serene getaways to thrilling adventures, we help you find
                experiences tailored just for you. Explore the world’s
                wonders with ease,
                 comfort, and unforgettable memories by your side.
              </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:ml-20  md:gap-10">
              <div>
                <h1 className="text-xl font-semibold">Quick Links</h1>
                <ul className="text-sm text-white">
                 <Link to="/"><li className="mt-2 hover:underline underline-offset-4">Home</li></Link> 
                 <Link to="/destination"><li className="mt-2 hover:underline underline-offset-4">Destinations</li></Link> 
                 <Link to="/gallery"><li className="mt-2 hover:underline underline-offset-4">Gallery</li></Link> 
                 <Link to="/TravelPackage"><li className="mt-2 hover:underline underline-offset-4">Travel Package</li></Link> 
                  
                </ul>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Social</h1>
                <ul className="text-sm text-white">
                  <li className="mt-2">Instagram</li>
                  <li className="mt-2">FaceBook</li>
                  <li className="mt-2">Youtube</li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Contact</h1>
                <p className="text-sm w-80 md:w-sm py-1.5 text-white">
                PINMYTRIP Travel Solutions
                123, Lotus Avenue, Near Green Park,
                Andheri West, Mumbai - 400053, Maharashtra, India
                </p>
                <p className="text-sm text-white">+91 98765 43210</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
            <h3 className="text-xs md:text-xl py-3 mt-36  text-white md:py-0 font-light">© {currentYear} PINMYTRIP. All rights reserved.</h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
