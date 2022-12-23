import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Khammouane from './khammouaneplaces';
function khammouanepage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Khammouane/>
      <Footer/>
    </div>
  )
}

export default khammouanepage