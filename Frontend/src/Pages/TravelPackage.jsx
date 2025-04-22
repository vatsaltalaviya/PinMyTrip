import React, { useContext, useEffect } from 'react'
import { destinationDataContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';


const TravelPackage = () => {
 
  const { travelPackages } = useContext(destinationDataContext);

  return (
    <div className='mt-15'>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Travel Packages</h1>
        <p className="text-lg text-gray-700 mb-4">
          Explore our exclusive travel packages designed to make your journey unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        { travelPackages.map((destination, index) => (
          <Link to={`/Package/${destination.packageName}`} onClick={()=>scrollTo(0,0)} key={index}>
          <div className="mb-4 relative break-inside-avoid transform hover:-translate-y-4 transition-transform duration-200 rounded md:w-full border h-[300px] md:h-[55vh] overflow-hidden">
          <img src={destination.image} className="w-full h-2/3 object-fill" alt={destination.cityName} />
          <div className="absolute bottom-10 bg-white  text-gray-500 w-full px-1.5 h-[50px] sm:h-[110px] md:h-30">
            <p className="text-sm sm:text-xl md:text-[2vw] font-medium  mb-1.5">
              {destination.packageName}
            </p>
            <p className="text-sm sm:text-xl md:text-[2vw] font-medium mt-3 mb-1.5">
              {destination.cityName}
            </p>
            <p className="text-sm/tight sm:text-[12px] w-full ml:w-72 md:text-[14px] font-medium ">
              {destination.description}
            </p>
          </div>
        </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}

export default TravelPackage