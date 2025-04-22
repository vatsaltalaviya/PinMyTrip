import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { destinationDataContext } from "../Context/AppContext";

const PackageBooking = () => {
  const { Book } = useParams();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [checkIn, setcheckIn] = useState();
  const [CheckOut, setcheckOut] = useState();
  const [placeID, setPalceId] = useState();
  
   const { travelPackages } = useContext(destinationDataContext);
  
    const travelPackage = travelPackages.find(
      (packageItem) => packageItem.packageName === Book)

 
  return (<div className="p-8 mt-15">
    <p className="text-sm font-medium text-zinc-400">[Reservation]</p>
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-xl md:text-4xl font-medium tracking-tight my-3">
        Secure Spot for an unforgettable journey
        <br className="hidden md:block" /> through beauty and unique charms
      </p>
    </div>
    <div className="flex flex-col md:flex-row  mt-10">
      <div className="w-full md:w-2/3 rounded-2xl h-56 md:h-[70vh] overflow-hidden">
        <img className="h-full w-full" src={travelPackage.image} alt="" />
      </div>
      <div className="w-full md:w-1/3 flex flex-col p-5 items-start pl-0 md:pl-10">
        <h1 className="text-2xl font-medium">{travelPackage.packageName}</h1>
        <p className="text-sm font-light text-gray-500">
          {travelPackage.description}
        </p>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <span className="px-5 py-1.5 rounded-full border border-black">
            <i className="ri-sun-line mx-1"></i>
            {travelPackage.recommendedDays} days
          </span>
          <span className="px-5 py-1.5 rounded-full border border-black">
            <i className="ri-calendar-2-line mx-1"></i>
            {travelPackage.bestMonthsToVisit}
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <span className="px-5 py-1.5 rounded-full border border-black">
            <i className="ri-bus-line mx-1"></i>Easy
          </span>
          <span className="px-5 py-1.5 rounded-full border border-black">
            <i className="ri-time-line mx-1"></i>Flexible
          </span>
        </div>
        <div className="mt-12 md:mt-3">
          <form action="">
            <label htmlFor="name" className="font-semibold">
              {" "}
              Enter Your Name
            </label>
            <input
              className="mb-2 w-full p-3 text-sm outline-none font-medium  border-b"
              value={name}
              onClick={(e) => setname(e.target.value)}
              type="text"
              name=""
              id=""
            />
            <label htmlFor="name" className="font-semibold">
              {" "}
              Enter Your Email
            </label>
            <input
              className=" w-full p-3 text-sm outline-none font-medium  border-b"
              value={email}
              onClick={(e) => setemail(e.target.value)}
              placeholder="abc@gmail.com"
              type="text"
              name=""
              id=""
            />
            <label htmlFor="name" className="font-semibold">
              {" "}
              Select CheckIn Date
            </label>
            <input
              className=" w-full p-3 text-sm outline-none font-medium  border-b"
              value={checkIn}
              onClick={(e) => setcheckIn(e.target.value)}
              type="date"
              name=""
              id=""
            />
            <label htmlFor="name" className="font-semibold">
              {" "}
              Select CheckOut Date
            </label>
            <input
              className=" w-full p-3 text-sm outline-none font-medium  border-b"
              value={CheckOut}
              onClick={(e) => setcheckOut(e.target.value)}
              type="date"
              name=""
              id=""
            />
            <div className="mt-3">
              <h1 className="text-2xl font-semibold">
                Starting From ₹<span>{travelPackage.amount}</span>
              </h1>
              <button
                onClick={() => {
                  setPalceId(destinations._id);
                }}
                className="mt-2 px-5 py-1.5 rounded-full border border-black"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PackageBooking;
