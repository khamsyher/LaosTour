import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Type from './tickettype';
function ticketpage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Type/>
      <Footer/>
    </div>
  )
}

export default ticketpage