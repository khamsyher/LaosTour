import React from 'react'
import Ticket1 from '../../img/ticket1.jpg'
import Ticket3 from '../../img/ticket2.jpg'
import Ticket2 from '../../img/ticket3.jpg'
import { Link } from 'react-router-dom'


export default function tickettype() {
  return (
    <>
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>ການຈອງປີ້ທ່ອງທ່ຽວ</h6>
                <h1>ພວກເຮົາສາມາດເປີດໃຫ້ມີການຈອງປີ້ດ້ອຍສາມແບບ</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Ticket1} alt=""/>
                            
                            {/* <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">ຄາລາ</h6>
                                <small className="text-white text-uppercase">400$</small>
                            </div> */}
                        </div>
                        <div className="bg-white p-4">
                            <small className="m-0"><i className="fa-solid fab fa-whataspp"></i></small>
                            <a className="h5 m-0 text-decoration-none" href="/#">ການຈອງປີ້ແບບຄົນດຽວ</a>
                        </div>
                    </div>
                    <Link to ='/'><a href="/#" className="btn btn-primary mt-1" style={{marginLeft:"8rem"}}>ຈອງເລີຍ!</a></Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Ticket2} alt=""/>
                            {/* <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">ຄາລາ</h6>
                                <small className="text-white text-uppercase">500$</small>
                            </div> */}
                        </div>
                        <div className="bg-white p-4">
                            <a className="h5 m-0 text-decoration-none" href="/#">ການຈອງປີ້ແບບນຳຄູ່ຮັກຫຼືໝູ່</a>
                        </div>
                    </div>
                    <Link to ='/'><a href="/#" className="btn btn-primary mt-1" style={{marginLeft:"8rem"}}>ຈອງເລີຍ!</a></Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Ticket3}  alt=""/>
                            {/* <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">ຄາລາ</h6>
                                <small className="text-white text-uppercase">600$</small>
                            </div> */}
                        </div>
                        <div className="bg-white p-4">
                            <a className="h5 m-0 text-decoration-none text-center" href="/#">ການຈອງປີ້ແບບຄອບຄົວ</a>
                        </div>
                    </div>
                    <Link to ='/'><a href="/#" className="btn btn-primary mt-1 position-absolute" style={{marginLeft:"8rem"}}>ຈອງເລີຍ!</a></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

