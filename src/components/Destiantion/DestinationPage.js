import React from 'react'
import Destination from './Destination'
import Topbar from '../Topbar'
import Navbar from './../Navbar';
import Footer from '../Footer';
// import SearchBar from '../SearchBar';

function DestinationPage() {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        {/* <SearchBar/> */}
        <Destination/>
        <Footer/>
    </div>
  )
}

export default DestinationPage
