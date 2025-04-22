import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Destination from './Pages/Destination'
import Footer from './Components/Footer'
import Gallery from './Pages/Gallery'
import TravelPackage from './Pages/TravelPackage'
import DestinatonDetail from './Pages/DestinatonDetail'
import Booking from './Pages/Booking'
import Login from './Pages/Login'
import Register from './Pages/Register'
import TravelPackageDetail from './Pages/TravelPackageDetail'
import PackageBooking from './Pages/PackageBooking'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/Destination/:details' element={<DestinatonDetail />} />
        <Route path='/TravelPackage' element={<TravelPackage />} />
        <Route path='package/:details' element={<TravelPackageDetail />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/Booking/:Book' element={<Booking />} />
        <Route path='/packageBook/:Book' element={<PackageBooking />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<Register />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App