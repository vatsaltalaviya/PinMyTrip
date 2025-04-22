import React, { createContext, useState } from "react";
import destinations from "../assets/destinations"
import travelPackages from "../assets/tourPackage";
import axios from "axios";

export const destinationDataContext = createContext();
const AppContext = ({ children }) => {



  return (
    <destinationDataContext.Provider
      value={{
        destinations ,
        travelPackages
      }}
    >
      {children}
    </destinationDataContext.Provider>
  );
};

export default AppContext;
