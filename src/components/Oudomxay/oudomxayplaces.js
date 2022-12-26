import React from 'react'
import Package1 from '../../img/oudomxay1.jpg'
import Package2 from '../../img/oudomxay2.jpg'
import Package3 from '../../img/oudomxay3.jpg'
import Package4 from '../../img/oudomxay4.jpg'
// import Package5 from '../../img/packageimage05.jpg'
// import Package6 from '../../img/packageimage06.jpg'
import { Link } from 'react-router-dom';

export default function oudomxayplaces() {
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
                    <div>
                        <Link to='/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Package1} alt=""/></a>
                        </Link>
                        </div>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ບ້ານຈອມອອງ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຖ້ຳຈອມອອງເປັນສະທີ່ທ່ອງທ່ຽວທາງທຳມະຊາດເຊິ່ງການພັດທະນາການທ່ອງທ່ຽວຂອງແຂວງແມ່ນເປັນຖ້ຳໃຫຍ່, ຍາວ ແລະ ສວຍງາມທີ່ສຸດຂອງແຂວງອຸດົມໄຊເຊິ່ງປະກອບດ້ວຍສີສັນຕ່າງໆ ແບບທຳມະຊາດທີ່ອັດສະຈັນ.</a>
                
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package2} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງໄຊ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ເປັນສະຖານທີ່ທ່ອງທ່ຽວທາງທຳມະຊາດປະກອບດ້ວຍຫຍ້າຄາທີ່ມີສີຂຽວສວຍສົດງົດງາມຕະຫຼອດປີ, ມີມວນອາກາດທີ່ເຢັນສະບາຍ ແລະ ເປັນສະຖານທີ່ທີ່ນັກທ່ອງທ່ຽວຫຼາຍຄົນມີຄວາມສົນເປັນຢ່າງ.</a>
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package3} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງຫຼາ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຖ້ຳພະເຈົ້າສິງເປັນສະຖານທີ່ທ່ອງທ່ຽວທາງປະຫວັດສາດ ແລະ ທຳມະຊາດປະກອບດ້ວຍທິວທັດທຳມະຊາດທີ່ສວຍສົດງົດງາມເໝາະສົມກັບການກິນເຂົ້າປ່າພ້ອມກັບການໄຫວ້ພະເຈົ້າຢູ່ໃນຖ້ຳດັ້ງກ່າວນີ້.</a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package4} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງຮຸນ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຕາດຕະແລເປັນສະຖານທີ່ທ່ອງທ່ຽວນ້ຳຕົກຕາດແຫ່ງໜຶ່ງທີ່ມີຄວາມສວຍສົດງົດງາມທາງທຳມະຊາດເຊິ່ງອ້ອມຮອບດ້ວຍປ່າດົງດິບ,ປ່າເຄິ່ງດົງດິບທີ່ມີຕົ້ນໄມ້ໃຫຍ່,ນ້ອຍທີ່ມີໃບດົກໜາຂຽວງາມ</a>
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={"Package5"} alt=""/>
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
                        <img className="img-fluid" src={"Package6"} alt=""/>
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
