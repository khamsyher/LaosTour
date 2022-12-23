import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Huaphan from './huaphanplaces';
function huaphanpage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Huaphan/>
      <Footer/>
    </div>
  )
}

export default huaphanpage