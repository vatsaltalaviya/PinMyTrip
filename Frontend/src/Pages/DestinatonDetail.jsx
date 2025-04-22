import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { destinationDataContext } from '../Context/AppContext';
const DestinatonDetail = () => {
const navigate = useNavigate()
  const { details } = useParams();
  const{destinations} =  useContext(destinationDataContext);

  const destinationInfo = destinations.find((city) => city.cityName === details);

  // if (loading) return <p>Loading destination...</p>;
  // if (isError) return <p style={{ color: "red" }}>Error: {isError}</p>;
  // if (!destinationInfo) return <p>No destination found.</p>;
  

  return (
    <div>
         <div className="max-w-6xl mt-15 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{destinationInfo.cityName}</h1>
      
      <img
        src={destinationInfo.image}
        alt={destinationInfo.cityName}
        className="w-full h-96 object-cover rounded-xl mb-6 shadow-md"
      />

      <p className="text-lg text-gray-700 mb-4">{destinationInfo.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Key Highlights</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>{destinationInfo.keyHighlights[0]}</li>
            <li>{destinationInfo.keyHighlights[1]}</li>
            <li>{destinationInfo.keyHighlights[2]}</li>
          </ul>
        </div>
        <div>
            <h1 className='text-3xl font-semibold mt-5 '>Starting From ₹<span className='font-bold'>{destinationInfo.amount}</span></h1>
        </div>
        <div className="bg-white px-8 md:px-10 py-1 md:py-0 md:pl-2 border h-13 rounded-2xl w-72 md:w-60">
          <button onClick={()=>{ navigate(`/Booking/${destinationInfo.cityName}`); scrollTo(0,0);}} className="text-2xl md:text-xl font-medium flex justify-between items-center">
            Booking Now <span className="text-xl md:text-2xl font-medium p-1.5 ml-3 rounded-xl"><i className="ri-arrow-right-up-line"></i></span>
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          {/* Insert MapView component here */}
          <div className="h-64 w-full">
            {/* <MapView coordinates={destination.coordinates} /> */}
            <p>Map goes here</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DestinatonDetail