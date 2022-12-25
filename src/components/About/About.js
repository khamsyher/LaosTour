import React from 'react'
import AboutImg from '../../img/about.jpg'
import About1 from '../../img/about1.jpg'
import About2 from '../../img/about2.jpg'


export default function About() {
  return (
    <>
        <div className="container-fluid py-5">
        <div className="container pt-5">
            <div className="row">
                
                    <div className="col-lg-6" style={{minHeight: "500px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src={AboutImg} style={{objectFit: "cover"}} alt=''/>
                        </div>
                        
                    </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-primary text-uppercase" style={{letterSpacing: "3px"}}>ກ່ຽວກັບພວກເຮົາ</h6>
                        <h1 className="mb-3">ພວກເຮົາສະຫນອງການທ່ອງທ່ຽວທີ່ດີທີ່ສຸດໃນງົບປະມານຂອງທ່ານ</h1>
                        <p>ປະເທດລາວມີການບໍລິການນຳທ່ຽວແຕ່ພາກເໜືອ ແລະ ພາກກາງຈົນເຖິງພາກໃຕ້ຂອງລາວ ແລະ ຍັງມີຄວາມແຕກຕ່າງກັນໄປເນື່ອງຈາກສະພາບແວດລ້ອມທາງທຳມະຊາດຂອງລາວເຮົາ, ປະເທດລາວເປັນພູງສຸງທາງພາກເໜືອ ແລະ ພາກຕາເວັນອອກຄ້ອຍລົງທາງພາກໃຕ້ ແລະ ພາກຕາເວັນຕົກຂອງລາວ ແລະ ຍັງມີການບໍລິການຕະຫຼອດໄລຍະເວລາໃນໂມງລັດຖະການ.</p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <img className="img-fluid" src={About1}alt=""/>
                            </div>
                            <div className="col-6">
                                <img className="img-fluid" src={About2} alt=""/>
                            </div>
                        </div>
                        <a href="/#" className="btn btn-primary mt-1">ຈອງຕອນນີ້</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
