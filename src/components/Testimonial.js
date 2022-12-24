import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestimonialItem from './TestimonialItem';
import TestimonialImg1 from '../img/testimonial-1.jpg';
import Kham from '../img/kham.png'

const Testimonial =() =>{
    const Testimonial = [
        {
            id:1,
            name: 'Somchai',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            address: 'LAOS',
            img: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000'
        },
        {
            id:2,
            name: 'Kham',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            address: 'LAOS',
            img: Kham
        },
        {
            id:3,
            name: 'Vannaphong',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            address: 'LAOS',
            img: 'https://img.freepik.com/free-photo/sexy-american-man-clasped-his-hands-seriously-looks-camera_8353-9941.jpg?w=2000'
        },
        {
            id:4,
            name: 'Mani',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            address: 'LAOS',
            img: 'https://img.freepik.com/free-photo/happy-smiling-handsome-man-against-blue-background_93675-135164.jpg?w=2000'
        },
    ]
    //Owl Carousel Settings
    const options = {
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    }
    return (
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>ປະຈັດພະຍາດ</h6>
                <h1>ສິ່ງທີ່ເວົ້າລູກຄ້າຂອງພວກເຮົາ</h1>
            </div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel testimonial-carousel" {...options}>
                            {
                                Testimonial.length === 0 ?
                                    <div className="item">
                                        <div className="text-center pb-4">
                                        <img className="img-fluid mx-auto" src={TestimonialImg1} style={{width: "100px", height: "100px"}} alt=''/>
                                        </div>
                                        <div className="testimonial-text bg-white p-4 mt-n5">
                                            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                            </p>
                                            <h5 className="text-truncate">Client Name</h5>
                                            <span>Profession</span>
                                        </div>
                                    </div> :
                                    Testimonial.map(Testimonial => {
                                        return (
                                            <TestimonialItem Testimonial={Testimonial} key={Testimonial.id} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial