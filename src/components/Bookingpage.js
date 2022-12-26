import React from 'react'
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Ticket from './Ticket/tickettype';
import Booking from './Booking';
function Bookingpage() {
  return (
    <div>
    <Topbar/>
      <Navbar/>
      <Ticket/>
      <Booking/>
      <Footer/>
    </div>
  )
}

export default Bookingpage