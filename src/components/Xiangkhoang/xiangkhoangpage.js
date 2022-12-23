import React from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import Footer from '../Footer'
import Xiangkhoang from './xiangkhoangplaces';
function xiangkhoangpage() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Xiangkhoang/>
      <Footer/>
    </div>
  )
}

export default xiangkhoangpage
