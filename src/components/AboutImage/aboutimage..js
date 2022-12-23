import React from 'react'
import Image1 from '../../img/carousel-1.jpg'


export default function aboutimage() {
  return (
    <div>
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={Image1} muted autoPlay loop type="Image" alt=""/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <p>A</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <video className="w-100" src={''} muted autoPlay loop type="video/mp4" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <p>B</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="carousel-item active">
                        <video className="w-100" src={''} muted autoPlay loop type="video/mp4" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <p>C</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="carousel-item">
                    <video className="w-100" src={''} muted autoPlay loop type="video/mp4" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <p>D</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <video className="w-100" src={''} muted autoPlay loop type="video/mp4" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <p>F</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <video className="w-100" src={''} muted autoPlay loop type="video/mp4" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <p>G</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}} >
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}} >
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

  