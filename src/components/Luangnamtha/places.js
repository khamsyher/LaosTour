import React from 'react'
import Package1 from '../../img/Luangnamtha1.jpg'
import Package2 from '../../img/luangnatha2.jpg'
// import Package3 from '../../img/packageimage03.jpg'
// import Package4 from '../../img/packageimage04.jpg'
// import Package5 from '../../img/packageimage05.jpg'
// import Package6 from '../../img/packageimage06.jpg'

export default function places() {
  return (
    <>
        
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "3px"}}>ນຳສະເໝີແຂວງຫຼວງພະບາງ</h6>
                <h1>ແຫ່ງທ່ອງທ່ຽວທີ່ຍອດນິຍົມ</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package1} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ຫຼວງນໍ້າທາ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ພະທາດຫຼວງນໍ້າທາເປັນສິ່ງທີ່ບົ່ງບອກເຖິງຄວາມເຊື່ອຂອງຮີບຄອງປະເພນີ ແລະ ສາສະໜາ, ໄດ້ສ້າງພະທາດດວງນີ້ຂຶ້ນມາ, ເພື່ອສັກກາລະບູຊາ.</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package2} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Laos</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຕາດນ້ຳລອງເປັນແຫ່ງທ່ອງທ່ຽວທຳມະຊາດປະກອບດ້ວຍປ່າໄມ້ອັນຕຶບໜາ,ເໝາະແກ່ການຍ່າງທ່ຽວຊົມວິວ,ກິນເຂົ້າປ່າທີ່ມີອາກາດເຢັນດີໄດ້ຮັບກິ່ນສົດໃສຈາກທຳມະຊາດ.</a>
                           
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package3} alt=""/>
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
                        <img className="img-fluid" src={Package4} alt=""/>
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
                        <img className="img-fluid" src={Package5} alt=""/>
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
                        <img className="img-fluid" src={Package6} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Laos</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">Discover amazing places of the world with us</a>
                            
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}
