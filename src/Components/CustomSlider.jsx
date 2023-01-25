import React from 'react'
import './../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from './../assets/slide1.PNG'
import slider2 from './../assets/slide2.PNG'
import slider3 from './../assets/slide3.PNG'
import slider4 from './../assets/slide4.png'
import slider5 from './../assets/slide5.png'
const CustomSlider = () => {
  let settings = {
    // centerMode:true,
    autoplay:true,
    autoplaySpeed:4000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='container-fluid slider'>
      <div className='container'>
        <div className='row'>
          <h1 className='whatpeoplesay'>WHAT PEOPLE SAY</h1>
          <Slider {...settings}> 
          <div className='slide1'>
              <img src={slider1} alt='slideone' className='image' />
            </div>
            <div className='slide1'>
              <img src={slider2} alt='slideone' className='image' />
            </div>
            <div className='slide1'>
              <img src={slider3} alt='slideone' className='image' />
            </div>
            <div className='slide1'>
              <img src={slider4} alt='slideone' className='image'/>
            </div >
            <div className='slide1'>
              <img src={slider5} alt='slideone' className='image' />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default CustomSlider