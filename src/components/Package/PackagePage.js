import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Packages from './Packages';
function PackagePage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Packages/>
      <Footer/>
    </div>
  )
}

export default PackagePage
