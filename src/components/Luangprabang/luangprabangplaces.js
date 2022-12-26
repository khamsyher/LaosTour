import React from 'react'
import Package1 from '../../img/luangprabang1.jpg'
import Package2 from '../../img/packageimage02.jpg'
import Package3 from '../../img/luangprabang2.jpg'
import Package4 from '../../img/luangprabang4.jpg'
import Package5 from '../../img/Luangprabang5.jpg'
import Package6 from '../../img/Luangprabang6.jpg'
import { Link } from 'react-router-dom';

export default function luangprabangplaces() {
  return (
    <>
        
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>ນຳສະເໝີແຂວງຫຼວງພະບາງ</h6>
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
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i> ເມືອງປາກອູ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຖ້ຳຕິ່ງເປັນຖ້ຳທຳມະຊາດຕັ້ງຢູ່ແຄມແມ່ນ້ຳຂອງ ເຊິ່ງຍັງເປັນພະທາດຕ່າງຫຼາກຫຼາຍຢູ່ທີ່ວາງສະແດງຢ່າງສວຍງາມ,ສາມາດດຶງດູດຄວາມສົນໃຈຂອງນັກທ່ອງທ່ຽວທາງພາຍໃນແລະຕ່າງປະເທດໄດ້ຫຼາຍທີ່ສຸດ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package2} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ນະຄອນຫຼວງພະບາງ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ເຮືອນເກົ່າ100ປີ ທີ່ນະຄອນຫຼວງພະບາງເປັນແຫ່ງທີ່ມີຄວາມນ່າສົນໃຈໃນຮຽນຮູ້ວັດທະນະທຳອັນເກົ່າແກ່ທີ່ຍັງບໍ່ໄດ້ມີການແປງປ່ຽນຮູບຮ່າງ ຈື່ງພາໃຫ້ນັກທ່ອງທ່ຽວມີຄວາມສົນໄປທ່ອງຫຼາຍພໍສົມຄວາມ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package3} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ນະຄອນຫຼວງພະບາງ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ນ້ຳຕົກຕາດກວາງຊີ
                            ເປັນນ້ຳຕົກຕາດຫີນປູນທີ່ມີຄວາມສວຍງາມ,ສົມບູນອ້ອມຮອບ 
                            ນ້ຳຕົກ ຍັງເປັນຖິ່ນທີ່ນິຍົມຂອງນັກທ່ອງທ່ຽວທັງພາຍໃນ ແລະ
                            ຕ່າງປະເທດໄດ້ຫຼາຍກ່ວາໝູ່(ຖືວ່າເປັນອັນດັບ1ຂອງ ນະຄອນຫຼວງພະບາງ)</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package4} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງຈອມເພັດ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຖ້ຳຊ້າງເປັນສະຖານທ່ອງທ່ຽວທີ່ຍອດນິຍົມພາຍໃນຖ້ຳມີລັກສະນະພິເສດຄ້າຍຄືໃນທ້ອງຊ້າງໂດຍມີກ້ອນຫີນປູນມີລັກສະນະຄືກັບອະໄວຍະວະພາຍໃນທ້ອງຊ້າງແລະພາຍນອກເປັນໜ່ວຍພູມີລັກສະນະຄືກັບຊ້າງນອນ</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package5} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ນະຄອນຫຼວງພະບາງ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ວັດຊຽງທອງເປັນວັດເກົ່າແກ່ທີ່ໄດ້ຮັບການນິຍົມຂອງສັງຄົມພາຍໃນ ແລະ ນັກທ່ອງທ່ຽວຕ່າງປະເທດ, ວັດຊຽງທອງໄດ້ເປີດເປັນແຫ່ງທ່ອງທ່ຽວໃຫ້ນັກທ່ອງທ່ຽວເຂົ້າຊົມ ແລະ ຮັບເປັນມໍລະດົມໂລກອີກດ້ອຍ </a>
                        
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={Package6} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>ເມືອງຊຽງເງິນ</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="/#">ຕາດແສ້ເປັນສະຖານທີ່ທ່ອງທ່ຽວທີ່ສວຍງາມທາງທຳມະຊາດແລະສິ່ງແວດລ້ອມອອ້ມຂ້າງເປັນສະຖານທີ່ດຶງດູດນັກທ່ອງທ່ຽວໄດ້ຫຼາກຫຼາຍຕັ້ງຢູ່ແຄມນ້ຳຄານ,ຫ່າງຈາກຕົວເມືອງຫຼວງພະບາງປະມານ16ກິໂລແມັດ.</a>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
