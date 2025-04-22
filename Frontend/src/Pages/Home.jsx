import React, { useContext, useEffect } from 'react'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import TopDestinations from '../Components/TopDestinations'
import TopGallery from '../Components/TopGallery'
import Reservation from '../Components/Reservation'
import { destinationDataContext } from '../Context/AppContext'

const Home = () => {
  return (
    <div >
        <Hero />
        <AboutUs />
        <TopDestinations />
        <TopGallery />
        <Reservation />
    </div>
  )
}

export default Home