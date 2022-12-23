import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Attapeuplace from './attapeuplaces';
function attapeupage() {
  return (
      <div>
        <Topbar/>
        <Navbar/>
        <Attapeuplace/>
        <Footer/>
    </div>
  )
}

export default attapeupage
