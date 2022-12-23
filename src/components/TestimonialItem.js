import React from 'react'
// import Testimonial from './Testimonial'

const TestimonialItem = ({Testimonial})=>{
  const {name,address,description,img} =  Testimonial
  return(
    <div className='item'>
        <div className='text-center pb-4'>
            <img src={img} alt="" className='img-fluid mx-auto' style={{width: "100px", height: "100px"}}/>
            
        </div>
        <div className='testimonial-text bg-white p-4 mt-n5 text-center'>
            <p className='mt-5'>{description}</p>
            <h5>{name}</h5>
            <small>{address}</small>
        </div>
    </div>
  );
};

export default TestimonialItem
