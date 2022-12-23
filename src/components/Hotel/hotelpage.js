import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Hotel from './hotelplaces';
function hotelpage() {
  return (
      <div>
        <Topbar/>
        <Navbar/>
        <Hotel/>
        <Footer/>
    </div>
  )
}

export default hotelpage