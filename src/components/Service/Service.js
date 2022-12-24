import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>ບໍລິການ</h6>
                <h1>ບໍລິການການທ່ອງທ່ຽວ</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                        <Link to ='/guidepeople'><i className="fa fa-2x fa-route mx-auto mb-4"></i></Link>
                        <h5 className="mb-2">ນັກພາທ່ຽວ</h5>
                        <p className="m-0">ພວກເຮົາມີບໍລິການລູກຄ້າໂດຍແມ່ນທີມງາມພາທ່ຽວ,ປະຈັກພະຍາບານເພື່ອຄວາມໝັ້ນໃຈແລະສາມາດຕິດຕໍ່ທີມງາມພາທ່ຽວດ້ອຍຕົງ</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                        <Link to ='/tickettype'><i className="fa fa-2x fa-ticket-alt mx-auto mb-4"></i></Link>
                        <h5 className="mb-2">ຈອງປີ້</h5>
                        <p className="m-0">ພວກເຮົາມີເປີດຈອງປີ້ລວ່ງໝ້າຫຼາຍປະເພດໃຫ້ລູກຄ້າ ສາມາດເລືອກຕາມຄວາມຕ້ອງການເພື່ອກຽມຄວາມພ້ອມກ່ອນຈະອອກເດີນທາງ</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                        <Link to ='/hotelplaces'><i className="fa fa-2x fa-hotel mx-auto mb-4"></i></Link>
                        <h5 className="mb-2">ຈອງໂຮງແຮມ</h5>
                        <p className="m-0">ພວກເຮົາມີບໍລິການທີ່ພັກທີ່ອຳນວຍຄວາມສະດວນໃຫ້ແກ່ລູກຄ້າ ແລະ ສະໝອງຕາມຄວາມເໝາະສົມໃນງົບປະມານຂອງທ່ານຢາກໄດ້</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
