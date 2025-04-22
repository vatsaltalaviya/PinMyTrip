import React from "react";
import hero from "../assets/heroimg.jpg";
import { useNavigate } from "react-router-dom";


const Hero = () => {

  
  const navigate = useNavigate()

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <img className="w-full h-screen object-cover" src={hero} alt="" />
      <div className="absolute top-[30%] p-8">
        <p className="text-4xl md:text-7xl font-medium text-white">
          Waving Your Dreams <br className="hidden md:block" /> into unforgettable <br /> Adventure
        </p>
      </div>
      <div className="absolute bottom-10 px-8 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-white px-3 md:pl-2 md:pr-1 py-1 rounded-2xl w-36 md:w-50">
          <button onClick={()=>{ navigate('/TravelPackage'); scrollTo(0,0);}} className="text-[10px] md:text-xl font-medium flex justify-between items-center">
            Booking Now <span className="md:bg-gray-900 md:text-white text-sm md:text-2xl font-medium p-1.5 ml-3 rounded-xl"><i className="ri-arrow-right-up-line"></i></span>
          </button>
        </div>
        <div>
          <p className="text-white font-medium">Discover the captivating allure of Arctic Wonders. from stunning landscapes <br className="hidden md:block" /> to vibrant culture, on an unforgettable journey through the North</p>
        </div>
        </div>
        <div className="text-white">
          <p className="font-medium text-l pt-4 md:pt-1  hover:text-black cursor-pointer">Explore Now <span><i className="ri-arrow-down-long-line"></i></span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
