import React from 'react'
import { Link } from 'react-router-dom'

export default function Feature() {
  return (
    <>
        <div className="container-fluid pb-5">
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex mb-4 mb-lg-0">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: "100px", width: "100px"}}>
                            <Link to='/'><i className="fa fa-2x fa-money-check-alt text-white"></i></Link>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="">ງົບປະມານທ່ອງທ່ຽວ</h5>
                            <p className="m-0">ເວບພາທ່ຽວລາວຍິນດີຕ້ອນຮັບທ່ານເຂົ້າໃຊ້ບໍລິການ.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex mb-4 mb-lg-0">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: "100px", width: "100px"}}>
                            <Link to='/'><i className="fa fa-2x fa-award text-white"></i></Link>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="">ບໍລິການທີ່ຄຸມຄ່າ</h5>
                            <p className="m-0">ເວບພາທ່ຽວລາວຍິນດີຕ້ອນຮັບທ່ານເຂົ້າໃຊ້ບໍລິການ.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex mb-4 mb-lg-0">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: "100px", width: "100px"}}>
                            <Link to='/'><i className="fa fa-2x fa-globe text-white"></i></Link>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="">ທ່ອງທ່ຽວທົ່ວປະເທດ</h5>
                            <p className="m-0">ເວບພາທ່ຽວລາວຍິນດີຕ້ອນຮັບທ່ານເຂົ້າໃຊ້ບໍລິການ.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
