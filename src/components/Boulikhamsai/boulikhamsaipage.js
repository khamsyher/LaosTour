import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Boulikhamsai from './boulikhamsaiplaces';
function boulikhamsaipage() {
  return (
      <div>
        <Topbar/>
        <Navbar/>
        <Boulikhamsai/>
        <Footer/>
    </div>
  )
}

export default boulikhamsaipage