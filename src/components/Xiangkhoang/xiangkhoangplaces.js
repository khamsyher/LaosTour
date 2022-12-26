import React from 'react'
import Image1 from '../../img/Xiangkhoang01.jpg'
import Image2 from '../../img/Xiangkhoang02.jpg'
import Image3 from '../../img/xiangkhoang3.jpg'
import Image4 from '../../img/xiangkhoang4.jpg'
import Image5 from '../../img/xiangkhoang5.jpg'
import Image6 from '../../img/xiangkhoang6.jpg'
import { Link } from 'react-router-dom';


export default function xiangkhoangplaces() {
  return (
    <>
        
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "3px"}}>ນຳສະເໝີແຂວງຊຽງຂວາງ</h6>
                <h1>ແຫ່ງທ່ອງທ່ຽວທີ່ຍອດນິຍົມ</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Image1} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງໂພນສະຫວັນ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຫ່ານຫີນຊຽງຂວາງເປັນສະຖານທີ່ທ່ອງທ່ຽວທີມີນັກທ່ອງທ່ຽວເຂົ້າໄປຊົມຫຼາຍທີ່ສຸດໃນແຂວງຊຽງຂວາງ ແລະ ຫ່ານຫີນຊຽງຂວາງຍັງເປັນສະຖານທີ່ທີຖືກຈັດເປັນມໍລະດົມອີກດ້ອຍ
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Image2} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງຄຳ </small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຖ້ຳປິວເປັນສະຖານທີ່ທ່ອງທ່ຽວທາງປະຫັວດສາດອັນສຳຄັນຂອງຊາວເມືອງຄຳ ປະຊົນຊາກລາວເນື່ອງຈາກເປັນເຫດການໂສກອະນາດຕະກຳໝູ່ທີ່ໜ້າຫົດຫູ່ໃຈທີ່ສຸດ </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Image3} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງຄູນ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ວັດເພຍວັດ ຕັ້ງຢູ່ໃຈກາງຂອງ ເມືອງຄູນ ເຊິ່ງ ຫ່າງຈາກຕົວ ເມືອງ ໂພນສະຫວັນ ປະມານ 30 ກິໂລແມັດ, ເປັນວັດທີ່ສ້າງຕັ້ງຂຶ້ນກ່ອນໝູ່ໝົດ ໃນດິນແດນຂອງ ເມືອງພວນ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Image4} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງໜອງແຮດ </small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຕາດຄາ ເປັນຕາດທີ່ສວຍງາມທີ່ສຸດຂອງຊາວຊຽງຂວາງ,ທ່ານສາມາດພົບເຫັນຕາດຄາທີ່ເປັນຕາດທຳມະຊາດມີຄວາມສວຍງາມເປັນຢ່າງຍິ່ງ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Image5} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງແປກ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຕາດຄະ ເປັນສະຖານທີ່ທ່ອງທ່ຽວທາງທຳມະຊາດປະກອບດ້ວຍປ່າໄມ້ອັນຕຶບໜາ, ເປັນແມ່ນໍ້າສາຍເຢັນ ແລະ ສັດປ່ານາໆຊະນິດ </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <Link to = '/tickettype'>
                            <a href='/#'><img className="img-fluid" src={Image6} alt=""/></a>
                        </Link>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງໂພນສະຫວັນ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ພູເກັງ ຕັ້ງຢູ່ຕົວເມືອງໂພນສະຫວັນປະມານ15ກິໂລແມັດ,ໃນນັ້ນມີເສັ້ນທາງແດງຈາກທາງຢາງບ້ານລາດງ່ອນໄປປະມານ8ກິໂລແມັດ.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
