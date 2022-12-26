import React from 'react'
import Package1 from '../../img/packageimage01.jpg'
import Package2 from '../../img/packageimage02.jpg'
import Package3 from '../../img/packageimage03.jpg'
import Package4 from '../../img/packageimage04.jpg'
import Package5 from '../../img/packageimage05.jpg'
import Package6 from '../../img/packageimage06.jpg'
import { Link } from 'react-router-dom';



export default function vietianecapitalplaces() {
  return (
    <>
        
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>ສະເໝີ</h6>
                <h1>ແຫ່ງທ່ອງທ່ຽວທີ່ຍອດນິຍົມ</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Package1} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>vietiane</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>1 weeks</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">Discover amazing places of the world with us</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Package2} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Laos</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">Discover amazing places of the world with us</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Package3} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Laos</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">Discover amazing places of the world with us</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Package4} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Laos</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">Discover amazing places of the world with us</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Package5} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Laos</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">Discover amazing places of the world with us</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Package6} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Laos</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">Discover amazing places of the world with us</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
