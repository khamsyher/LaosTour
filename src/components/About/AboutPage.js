import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import About from '../About/About';
import Footer from '../Footer';
import Feature from '../Feature';


function AboutPage() {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <About/>
        <Feature/>
        <Footer/>
    </div>
  )
}

export default AboutPage
