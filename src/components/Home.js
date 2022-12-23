import React from 'react'
import '../App.css'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Carousel from './Carousel';
import Booking from './Booking';
import About from './About/About';
import Feature from './Feature';
import Destination from './Destiantion/Destination';
import Service from './Service/Service';
import Packages from './Package/Packages';
import Rigistration from './Rigistration';
import Team from './Team';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Footer from './Footer';
import Backtop from './Backtop';

function Home() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Carousel/>
      <Booking/>
      <About/>
      <Feature/>
      <Destination/>
      <Service/>
      <Packages/>
      <Rigistration/>
      <Team/>
      <Testimonial/>
      <Blog/>
      <Footer/>
      <Backtop/>
    </div>
  )
}

export default Home
