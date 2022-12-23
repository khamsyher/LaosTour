import React from 'react'
import Hotel1 from '../../img/hotel1.png'
import Hotel2 from '../../img/hotel2.png'
import Hotel3 from '../../img/hotel3.png'


export default function hotelplaces() {
  return (
    <>
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>ສະຖານທີ່ພັກ</h6>
                <h1>ໂຮງແຮມທີ່ໄດ້ຮັບຍອດນິຍົມຂອງພວກເຮົາ</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Hotel1} alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">ຄາລາ</h6>
                                <small className="text-white text-uppercase">400$</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <a className="h5 m-0 text-decoration-none" href="/#">ໂຮງແຮມວັນນະພົມ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Hotel2} alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">ຄາລາ</h6>
                                <small className="text-white text-uppercase">500$</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <a className="h5 m-0 text-decoration-none" href="/#">ໂຮງແຮມແສງສະຫວ່າງພັດທະນາ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src={Hotel3}  alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">ຄາລາ</h6>
                                <small className="text-white text-uppercase">600$</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <a className="h5 m-0 text-decoration-none text-center" href="/#">ໂຮງແຮມແສງສະຫວ່າງພັດທະນາ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

