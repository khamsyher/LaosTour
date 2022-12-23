import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="container-fluid position-relative nav-bar p-0" >
        <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: '10'}} >
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <div className="navbar-brand">
                    <h1 className="m-0 text-primary"><span className="text-dark">LAOSTO</span>UR</h1>
                </div>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <Link to ='/' className="nav-item nav-link active">ໝ້າຫຼັກ</Link>
                        <Link to="/About" className="nav-item nav-link">ກ່ຽວກັບ</Link>
                        <Link to="/Service" className="nav-item nav-link">ບໍລິການ</Link>
                        <Link to="/Destination" className="nav-item nav-link">ສະຖານທີ່</Link>
                        <Link to="/contact" className="nav-item nav-link">ເຂົ້າສູ່ລະບົບ</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>


    {/* this is a nivigation navbar */}

    
    </>
  )
}

export default Navbar