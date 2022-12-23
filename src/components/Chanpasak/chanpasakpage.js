import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Chanpasak from './chanpasakplaces';
function chanpasakpage() {
  return (
      <div>
        <Topbar/>
        <Navbar/>
        <Chanpasak/>
        <Footer/>
    </div>
  )
}

export default chanpasakpage