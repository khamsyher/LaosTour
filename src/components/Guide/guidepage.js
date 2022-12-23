import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Guide from './guidepeople';
function guidepage() {
  return (
      <div>
        <Topbar/>
        <Navbar/>
        <Guide/>
        <Footer/>
    </div>
  )
}

export default guidepage