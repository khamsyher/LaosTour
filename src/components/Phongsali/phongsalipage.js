import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Phongsali from './phongsaliplaces';
function phongsali() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Phongsali/>
      <Footer/>
    </div>
  )
}

export default phongsali