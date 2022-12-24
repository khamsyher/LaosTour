import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Guide from './guidepeople';
import Testimonial from '../../components/Testimonial'
function guidepage() {
  return (
      <div>
        <Topbar/>
        <Navbar/>
        <Guide/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default guidepage