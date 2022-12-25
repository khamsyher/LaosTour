import React from 'react'

export default function Rigistration() {
  return (
    <>
        <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>ການແນະນຳພິເສດ</h6>
                        <h1 className="text-white"><span className="text-primary">ລົບ 30%</span> ສຳລັບເວບLAOSTO UR</h1>
                    </div>
                    <p className="text-white">ຍິນດີຕ້ອນຮັບທຸກທ່ານທີ່ໃຊ້ບໍລິການເວບພາທ່ຽວລາວ, ສຳລັບການຈອງປີ້ການພາທ່ຽວເປັນທີມງານຄົບ4ຄົນຂື້ນໄປທາງເວບພາທ່ຽວຈະມີສ່ວນຫຼຸດພິເສດ. ນອກນີ້,ຍັງມີການບໍລິການເຊົ່າພາຫະນະໃຫ້ແກ່ລູກຄ້າທຸກທ່ານທີ່ເຂົ້າມາໃຊ້ບໍລິການທາງເວບພາທ່ຽວລາວ ແລະ ຍັງມີການບໍລິການຈອງໂຮງແຮມລ່ວງໜ້າທີ່ໄດ້ສຮັບສ່ວນຫຼຸດເປັນພິເສດສູງເຖິງ 15%.</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4">
                            <h1 className="text-white m-0">ລົງທະບຽນທີ່ນີ້</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control p-4" placeholder="ຊື່ ແລະ ນາມສະກຸນ" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control p-4" placeholder="ທີ່ຢູ່ອີເມວ ຫຼື ເບີໂທ" required="required" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select px-4" style={{height: "47px"}}>
                                        <option selected>ເລືອກສະຖານທີ່</option>
                                        <option value="1">ນະຄອນຫຼວງວຽງຈັນ</option>
                                        <option value="2">ໄຊຍະບູລີ</option>
                                        <option value="3">ສະຫວັນນະເຂດ</option>
                                        <option value="1">ຄຳມ່ວນ</option>
                                        <option value="2">ຊຽງຂວາງ</option>
                                        <option value="3">ບໍລິຄຳໄຊ</option>
                                        <option value="1">ໄຊສົມບູນ</option>
                                        <option value="2">ຈຳປາສັກ</option>
                                        <option value="3">ບໍ່ແກ້ວ</option>
                                        <option value="1">ຫົວພັນ</option>
                                        <option value="2">ຜົ້ງສາລີ</option>
                                        <option value="3">ຫຼວງນ້ຳທາ</option>
                                        <option value="1">ຫຼວງພະບາງ</option>
                                        <option value="2">ອຸດົມໄຊ</option>
                                        <option value="3">ເຊກອງ</option>
                                        <option value="1">ສາລະວັນ</option>
                                        <option value="2">ອັດຕະປື</option>
                                        <option value="3">ວຽງຈັນ</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block py-3" type="submit">ເຂົ້າດຽວນີ້</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
