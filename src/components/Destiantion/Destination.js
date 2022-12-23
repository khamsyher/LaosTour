import React from 'react'
import phongsali from '../../img/phongsali01.jpg.png'
import luangnamtha from '../../img/Luangnamtha01.png'
import bokeo from '../../img/bokeo01.jpg.png'
import oudomxay from '../../img/oudomxay01.png'
import huaphan from '../../img/Houaphan-in-Laos01.jpg.png'
import xiangkhoang from '../../img/Laos_Xiangkhoang_Plain-of-Jars_2.jpg.png'
import xayabouly from '../../img/xayabouly01.png'
import vientiane from '../../img/vietiane01.jpg'
import vangveing from '../../img/vangveing0-1.jpg'
import luangprabang from '../../img/luangprabang.jpg'
import chanpasak from '../../img/chanpasak0-1.jpg'
import xaysomboun from '../../img/xaysomboun0-1.jpg'
import boulikhamsai from '../../img/boulikhamsai01.jfif.png'
import khammouane from '../../img/khammouane01.png'
import savannakhet from '../../img/svannakhet01.png'
import salavan from '../../img/salavan01.png'
import sekong from '../../img/sekong01.png'
import attapeu from '../../img/attapeu01.png'
import { Link } from 'react-router-dom'


export default function Destination() {
  return (
    <>
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/phongsaliplaces'><img className="img-fluid" src={phongsali} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ຜົ້ງສາລີ</h5>
                                <small>ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/place'>
                            <img className="img-fluid" src={luangnamtha} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ຫຼວງນໍ້າທາ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/bokeoplaces'>
                            <img className="img-fluid" src={bokeo} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ບໍ່ແກ້ວ</h5>
                                <small>ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/oudomxayplaces'>
                            <img className="img-fluid" src={oudomxay} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ອຸດົມໄຊ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/luangprabangplaces'> 
                            <img className="img-fluid" src={luangprabang} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ຫຼວງພະບາງ</h5>
                                <small>ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/huaphanplaces'>
                            <img className="img-fluid" src={huaphan} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ຫົວພັນ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/xiangkhoangplaces'>
                            <img className="img-fluid" src={xiangkhoang} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ຊຽງຂວາງ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/xayabouliplaces'>
                            <img className="img-fluid" src={xayabouly} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ໄຊຍະບູລີ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/viengchanplaces'>
                            <img className="img-fluid" src={vangveing} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ວຽງຈັນ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/xaysombounplaces'>
                            <img className="img-fluid" src={xaysomboun} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ໄຊສົມບູນ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/vietianecapitalplaces'>
                            <img className="img-fluid" src={vientiane} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ນະຄອນຫຼວງວຽງຈັນ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/boulikhamsaiplaces'>
                            <img className="img-fluid" src={boulikhamsai} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ບໍລິຄຳໄຊ</h5>
                                <small>ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/khammouaneplaces'>
                            <img className="img-fluid" src={khammouane} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ຄຳມ່ວນ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                       <Link  to='/savannakhetplaces'>
                        <img className="img-fluid" src={savannakhet} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ສະຫວ້ນນະເຂດ</h5>
                                <small>ເຂົ້າຊົມ</small>
                            </a>
                       </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/salavanplaces'>
                            <img className="img-fluid" src={salavan} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ສາລະວັນ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/sekongplaces'>
                            <img className="img-fluid" src={sekong} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ເຊກອງ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                       <Link to='/chanpasakplaces'>
                        <img className="img-fluid" src={chanpasak} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ຈຳປາສັກ</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                       </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <Link to='/attapeuplaces'>
                            <img className="img-fluid" src={attapeu} alt=""/>
                            <a className="destination-overlay text-white text-decoration-none" href="/#">
                                <h5 className="text-white">ອັດຕະປື</h5>
                                <small >ເຂົ້າຊົມ</small>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
