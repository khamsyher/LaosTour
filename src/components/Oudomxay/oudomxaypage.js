import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Oudomxayplace from './oudomxayplaces';
function oudomxaypage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Oudomxayplace/>
      <Footer/>
    </div>
  )
}

export default oudomxaypage