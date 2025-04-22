import React from "react";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import { useNavigate } from "react-router-dom";

const TopGallery = () => {

  const navigate = useNavigate()
  return (
    <div className="p-8 flex flex-col md:flex-row">
      <div className="pr-30 relative">
        <p className="text-sm font-medium text-zinc-400">[Gallery]</p>
        <div className="absolute bottom-3 hidden md:block">
          <button onClick={()=>navigate('/gallery')} className="font-medium text-l px-4 py-2 rounded-2xl transition-all duration-200 hover:bg-black hover:text-white cursor-pointer">
            Explore more{" "}
            <span>
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-2xl md:text-5xl py-5 md:py-0 tracking-tighter font-medium">
          A visual journey through the lens, one snapshot at a time capturing
          the essence of our travel <br className="hidden md:block" /> adventure around the world.
        </p>

       
        <div className="mt-4 md:mt-20 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="snap-start h-60 md:h-[65vh] w-40 md:w-[22vw] overflow-hidden rounded-xl flex-shrink-0">
            <img className="w-full h-full object-cover" src={i1} alt="Gallery 1" />
          </div>
          <div className="snap-start h-60 md:h-[65vh] w-40 md:w-[22vw] overflow-hidden rounded-xl flex-shrink-0">
            <img className="w-full h-full object-cover" src={i2} alt="Gallery 2" />
          </div>
          <div className="snap-start h-60 md:h-[65vh] w-40 md:w-[22vw] overflow-hidden rounded-xl flex-shrink-0">
            <img className="w-full h-full object-cover" src={i3} alt="Gallery 3" />
          </div>
        
        </div>

        {/* Mobile Explore button */}
        <div className="md:hidden py-5 flex justify-center">
          <button onClick={()=>navigate('/gallery')} className="font-medium text-l px-4 py-2 rounded-2xl transition-all duration-200 hover:bg-black hover:text-white cursor-pointer">
            Explore more
            <span>
              <i className="ri-arrow-right-up-line"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopGallery;
