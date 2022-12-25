import React from 'react'
import video1 from '../img/bg-01.mp4'
import video2 from '../img/waterfall2.mp4'
import { Link } from 'react-router-dom'

export default function Carousel() {
  return (
    <div>
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video className="w-100" src={video1} muted autoPlay loop type="video/mp4" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <h4 className="text-white text-uppercase mb-md-3">ນຳສະເໝີແຫ່ງທ່ອງທ່ຽວ</h4>
                                <h1 className="display-3 text-white mb-md-4">ແຫ່ງທ່ອງທ່ຽວທີ່ຍອດນິຍົມໃນ ສປປລາວ</h1>
                                <Link to ='/DestinationPage'><a href="/#" className="btn btn-primary py-md-3 px-md-5 mt-2">ຈອງຕອນນີ້</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <video className="w-100" src={video2} muted autoPlay loop type="video/mp4" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth :"900px"}}>
                                <div>
                                <h4 className="text-white text-uppercase mb-md-3">ນຳສະເໝີແຫ່ງທ່ອງທ່ຽວ</h4>
                                <h1 className="display-3 text-white mb-md-4">ແຫ່ງທ່ອງທ່ຽວພິເສດສູດໆທີ່ເກີດຂື້ນຕາມທຳມະຊາດ</h1>
                                </div>
                                <div>
                                <Link to ='/DestinationPage'><a href="/#" className="btn btn-primary py-md-3 px-md-5 mt-2">ຈອງຕອນນີ້</a></Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
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

  