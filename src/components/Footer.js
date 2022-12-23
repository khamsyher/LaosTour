import React from 'react'

export default function Footer() {
  return (
    <>
        <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{marginTop: "90px"}}>
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="/#" className="navbar-brand">
                    <h1 className="text-primary"><span className="text-white">LAOSTO</span>UR</h1>
                </a>
                <p>ເປົ້າໝາຍຂອງພວກເຮົາແມ່ນເພື່ອໃຫ້ທ່ານໃດ້ໄປທ່ຽວທຸກແຫ່ງທ່ອງທ່ຽວໃນລາວ ແລະ ແນະນຳລາຍລະອຽດຕ່່າງໆ ພ້ອມມີກາຍນຳທ່ຽວເພື່ອໃຫ້ທ່ານສາມາດທ່ຽວດ້ວຍປອດໄພ ໄວ້ໃຈພວກເຮົາໄດ້ທຸກເລື່ອງ  ຄົບຈົບບ່ອນດຽວ!!!</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{letterSpacing: "2px"}}>ຕິດຕາມພວກເຮົາໄດ້ທີ່</h6>
                <div className="d-flex justify-content-start">
                    <a className="btn btn-outline-primary btn-square mr-2" href="/#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="/#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="/#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="/#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: "5px"}}>ການບໍລິການ</h5>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>ກ່ຽວກັບ</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>ສະຖານທີ່</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>ບໍລິການ</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>ປະຈັກພະຍາມ</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>ຄົນພາທ່ຽວ</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>ໂຮງແຮມ</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: "5px"}}>ຂໍ້ມູນ</h5>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>About</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>Destination</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>Services</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>Packages</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>Guides</a>
                    <a className="text-white-50 mb-2" href="/#"><i className="fa fa-angle-right mr-2"></i>Testimonial</a>
            
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: "5px"}}>ສົ່ງທາງຕິດຕໍ່ພວກເຮົາ</h5>
                <p><i className="fa fa-map-marker-alt mr-2"></i>ນະຄອນຫຼວງວຽງຈັນ ປະເທດລາວ</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+865 2076 288 084</p>
                <p><i className="fa fa-envelope mr-2"></i>laotour2023@gmail.com</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{letterSpacing: "5px"}}>ສະໝັກສະມາຊິກ</h6>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{padding: "25px" }} placeholder={'Your Email'}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white-50">ຂຽນຂື້ນດ້ວຍຄຳສີ &copy; <a href="/#">Domain</a>. All Rights Reserved.
                </p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
                <p className="m-0 text-white-50">ຂຽນດ້ວຍ <a href="https://htmlcodex.com">React Code</a>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
