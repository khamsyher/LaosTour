import React from 'react'

export default function Booking() {
  return (
    <>
        <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
            <div className="bg-light shadow" style={{padding: "30px"}}>
                <div className="row align-items-center" style={{minHeight: "60px"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <small>ເປັ້າໝາຍການເດີນທາງ</small>
                                    <select className="custom-select px-4" style={{height: "47px"}}>
                                        <option selected>ເລືອກປາຍທາງ</option>
                                        <option value="1">ຜົ້ງສາລີ</option>
                                        <option value="2">ຫຼວງນໍ້າທາ</option>
                                        <option value="3">ບໍ່ແກ້ວ</option>
                                        <option value="4">ອຸດົມໄຊ</option>
                                        <option value="5">ຫຼວງພະບາງ</option>
                                        <option value="6">ຫົວພັນ</option>
                                        <option value="7">ຊຽງຂວາງ</option>
                                        <option value="8">ໄຊຍະບູລີ</option>
                                        <option value="9">ວຽງຈັນ</option>
                                        <option value="10">ໄຊສົມບູນ</option>
                                        <option value="11">ນະຄອນຫຼວງວຽງຈັນ</option>
                                        <option value="12">ບໍລິຄຳໄຊ</option>
                                        <option value="13">ຄຳມ່ວນ</option>
                                        <option value="14">ສະຫັວນນະເຂດ</option>
                                        <option value="15">ສາລະວັນ</option>
                                        <option value="16">ເຊກອງ</option>
                                        <option value="17">ຈຳປາສັັກ</option>
                                        <option value="18">ອັດຕະປື</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <small>ວັນທີ່ອອກເດີນທາງ</small>
                                        <input type="date" className="form-control p-4 datetimepicker-input" placeholder="ວັນທີ່ອອກເດີນທາງ" data-target="#date1" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <div className="date" id="date2" data-target-input="nearest">
                                        <small>ວັນທີກັບຄືນ</small>
                                        <input type="date" className="form-control p-4 datetimepicker-input" placeholder="ວັນທີກັບຄືນ" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <small>ໄລຍະເວລາ</small>
                                    <select className="custom-select px-4" style={{height: "47px"}}>
                                        <option selected>ເລືອກເວລາ</option>
                                        <option value="1">1 ມື້</option>
                                        <option value="1">2 ມື້</option>
                                        <option value="1">3 ມື້</option>
                                        <option value="1">4 ມື້</option>
                                        <option value="1">5 ມື້</option>
                                        <option value="1">1 ອາທິດ</option>
                                        <option value="1">2 ອາທິດ</option>
                                        <option value="1">3 ອາທິດ</option>
                                        <option value="1">1 ເດືອນ</option>
                                        <option value="1">2 ເດືອນ</option>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <button className="btn btn-primary btn-block" type="submit" style={{height: "47px", marginTop: "-2px"}}>ບັນທືນຂໍ້ມູນ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}