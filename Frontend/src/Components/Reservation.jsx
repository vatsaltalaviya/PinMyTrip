import React, { useContext, useState } from "react";
import { destinationDataContext } from '../Context/AppContext'
import { useNavigate } from "react-router-dom";


const Reservation = () => {

  const navigate = useNavigate();

  const [count, setCount] = useState(0)
 const{destinations} =  useContext(destinationDataContext);

 const randomDestination = destinations.filter((item) => item.recommendedDays > 0).sort(() => Math.random() - 0.5).slice(0, 5)
  
  const isDataReady = Array.isArray(randomDestination) && randomDestination.length > 0;
  const current = isDataReady ? randomDestination[count] : null;

  // ✅ Show loading while data is not ready
  if (!isDataReady || !current) {
    return <div className="p-8">Loading destinations...</div>;
  }
  return (
    <div className='p-8'>
        <p className="text-sm font-medium text-zinc-400">[Reservation]</p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-xl md:text-4xl font-medium tracking-tight my-3">
          Secure Spot for an unforgettable journey
          <br className="hidden md:block" /> through beauty and unique charms
        </p>
        <div className="ml-0 md:ml-40 font-medium flex gap-4" >
          <button onClick={()=>{
           setCount((prev) => (prev > 0 ? prev - 1 : randomDestination.length - 1))
          }} className='text-3xl p-3 h-15 w-15 rounded-full border border-black'><i className="ri-arrow-left-s-line"></i></button>
          <button onClick={()=> {
           setCount((prev) => (prev < randomDestination.length - 1 ? prev + 1 : 0))
          }} className='text-3xl p-3 h-15 w-15 rounded-full border bg-black text-white'><i className="ri-arrow-right-s-line"></i></button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row  mt-10'>
        <div className='w-full md:w-2/3 rounded-2xl h-56 md:h-[70vh] overflow-hidden'>
            <img className='h-full w-full transition-all duration-150' src={current.image} alt="" />
        </div>
        <div className='w-full md:w-1/3 flex flex-col p-5 items-start pl-0 md:pl-10'>
            <h1 className='text-2xl font-medium'>{current.cityName}</h1>
            <p className='text-sm font-light text-gray-500'>{current.description}</p>
            <div className='flex flex-col md:flex-row gap-3 mt-5'>
                <span className='px-5 py-1.5 rounded-full border border-black'><i className="ri-sun-line mx-1"></i>{current.recommendedDays} day</span>
                <span className='px-5 py-1.5 rounded-full border border-black'><i className="ri-calendar-2-line mx-1"></i>{current.bestMonthsToVisit}</span>
            </div>
            <div className='flex flex-col md:flex-row gap-3 mt-5'>
                <span className='px-5 py-1.5 rounded-full border border-black'><i className="ri-bus-line mx-1"></i>Easy</span>
                <span className='px-5 py-1.5 rounded-full border border-black'><i className="ri-time-line mx-1"></i>Flexible</span>
            </div>
            <div className='mt-3 md:mt-30'>
                <h1 className='text-2xl font-semibold'>From  ₹<span>{current.amount}</span></h1>
                <button onClick={()=>navigate(`/Booking/${current.cityName}`)} className='mt-2 px-5 py-1.5 rounded-full border border-black'>Booking Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation