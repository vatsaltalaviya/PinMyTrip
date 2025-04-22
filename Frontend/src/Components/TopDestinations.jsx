import React, { useContext, useEffect } from "react";
import { destinationDataContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const TopDestinations = () => {

  const navigate = useNavigate();

  return (
    <div className="p-8">
      <p className="text-sm font-medium text-zinc-400">[Destinations]</p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="w-full md:w-2/3 text-2xl md:text-4xl font-medium tracking-tight my-3">
          A unique blend of Adventure,
          <br className="hidden md:block" /> culture, and natural wonders
        </p>
        <p className="w-full md:w-2/3 md:ml-40 font-medium text-zinc-500">
          Discover a fusion of adventure , culture , and science <br className="hidden md:block" /> beauty
          across out diverse destinations, offering <br className="hidden md:block"/> unforgettable
          experiences at every turn.
        </p>
      </div>
      <div className="mt-10 w-full">
        <div className="  rounded-2xl w-full h-64 md:h-[40vw] relative overflow-hidden transform hover:-translate-y-4 transition-transform duration-200">
          <img src="https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740" className="w-full h-screen object-fill" alt="" />
          <div className="absolute bottom-10 text-white px-10">
          <p className="text-xl md:text-3xl font-medium mb-4">London</p>
          <p className="text-sm md:text-xl font-medium ">A remote volcanic caldera known for its striking blue crater lake and dramatic <br /> lava fields in Iceland's highlands.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-3 ">
          <div className=" rounded-2xl w-full md:w-1/2 h-64 md:h-[40vw] overflow-hidden relative transform hover:-translate-y-4 transition-transform duration-200">
            <img src="https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-761.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740" className="w-full h-screen object-fill" alt="" />
            <div className="absolute bottom-10 text-white px-10">
          <p className="text-xl md:text-3xl font-medium mb-4">Munnar, India</p>
          <p className="text-sm md:text-xl font-medium ">  A scenic hill station in Kerala, famous for its rolling tea plantations, misty valleys, and lush green landscapes.</p>
          </div>
          </div>
          <div className=" rounded-2xl w-full md:w-1/2 h-64 md:h-[40vw] overflow-hidden relative transform hover:-translate-y-4 transition-transform duration-200">
            <img src="https://img.freepik.com/free-photo/beautiful-rustic-house-landscape_23-2151918077.jpg?ga=GA1.1.1472898491.1745146924&semt=ais_hybrid&w=740" className="w-full h-screen object-fill" alt="" />
            <div className="absolute bottom-10 text-white px-10">
          <p className="text-xl md:text-3xl font-medium mb-4">Tuscany Hills, Italy</p>
          <p className="text-xs md:text-xl font-medium ">Iconic rolling hills dotted with vineyards, olive groves, and rustic villages—perfect for a peaceful countryside escape.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
      <button onClick={()=>{navigate('/destination'); scrollTo(0,0)}} className="font-medium text-l px-4 py-2 rounded-2xl transition-all duration-200 hover:bg-black hover:text-white cursor-pointer">Explore more <span><i className="ri-arrow-right-up-long-line"></i></span></button>
      </div>
    </div>
  );
};

export default TopDestinations;
