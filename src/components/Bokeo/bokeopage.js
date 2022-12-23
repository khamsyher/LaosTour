import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Bokeoplaces from './bokeoplaces';
function bokeopage() {
  return (
      <div>
        <Topbar/>
        <Navbar/>
        <Bokeoplaces/>
        <Footer/>
    </div>
  )
}

export default bokeopage