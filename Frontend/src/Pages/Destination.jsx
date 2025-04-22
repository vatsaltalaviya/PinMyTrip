import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { destinationDataContext } from "../Context/AppContext";

const Destination = () => {

 const{destinations} =  useContext(destinationDataContext);


  return (
    <div className=" p-8 mt-15">
      <p className="text-sm font-medium text-zinc-400">[Destinations]</p>

      <div className=" gap-3 mt-3 columns-1 sm:columns-2 md:columns-3 ">
        
        { destinations.map((destination, index) => (
          <Link to={`/Destination/${destination.cityName}`} onClick={()=>scrollTo(0,0)} key={index}>
          <div className="mb-4 relative break-inside-avoid rounded md:w-full border transform hover:-translate-y-4 transition-transform duration-200 h-[300px] md:h-[55vh] overflow-hidden">
          <img src={destination.image} className="w-full h-2/3 object-fill" alt={destination.cityName} />
          <div className="absolute bottom-0 bg-white  text-gray-500 w-full px-1.5 h-[100px] sm:h-[110px] md:h-36">
            <p className="text-sm sm:text-xl md:text-[2vw] font-medium mt-3 mb-1.5">
              {destination.cityName}
            </p>
            <p className="text-sm/tight sm:text-[10px] w-full ml:w-72 md:text-[14px] font-medium ">
              {destination.description}
            </p>
          </div>
        </div>
          </Link>
        ))}
      
      </div>
    </div>
  );
};

export default Destination;
