import React,{useEffect} from 'react'
import './What.css'
import group from '../assets/employ.png'
import ServiceCard from '../Components/ServiceCard'
import ServiceCardTwo from '../Components/ServiceCardTwo'
import ServiceCardThree from '../Components/ServiceCardThree'
import ServiceCardfour from '../Components/ServiceCardfour'
import Imagewithtext from '../Components/Imagewithtext'
import book from './../assets/BOOK.png'
import Interviews from './../assets/Interviews.png'
import Distilliation from './../assets/Distilliation.png'
import Supervision from './../assets/Supervision.png'
import Award from './../assets/Award.png'
import Footer from '../Components/Footer'


const What = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    
  },[])
  return (
    <>
      <div className='container whatcontainer'>
        <div className='row'>
          <div className='col-md-6 whatleftcontainer'>
            <h1>WHAT</h1>
          </div>
          <div className='col-md-6 whatrightcontainer'>
            <h2>Our Services</h2>
            <p>LeadershipCQ provides intercultural expertise and services to individuals and organizations wanting to better navigate through today's global economy.</p>
            <h2 className='help'>We help our clients to:</h2>
            <ul>
              <li className='listitem'>Get a deeper understanding of Diversity & Inclusion.</li>
              <li className='listitem'>Get a deeper understanding of Diversity & Inclusion.</li>
              <li className='listitem'>Understand the complex dynamic of intercultural conflicts.</li>
              <li className='listitem'>Practice Perspective Taking.</li>
              <li className='listitem'>Understand the main features in our brain that drive exclusive behaviour.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid traininggrp'>
        <div className='container'>
          <div className='row' >
            <img src={group} alt='training' />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row training'>
          <h1>Our training is designed to help forward-looking business leaders achieve immediate and enduring impact in Diversity, Equity and Inclusion (DEI) by expanding their cultural intelligence (CQ).​</h1>
        </div>
      </div>
      <div className='container-fluid services'>
        <div className='container'>
          <div className='row'>
            <h1>OUR SERVICES:</h1>
            <div>
              <ServiceCard/>
            </div>
            <div style={{ marginTop: '50px' }}>
              <ServiceCardTwo />
            </div>
            <div style={{ marginTop: '50px' }}>
              <ServiceCardThree />
            </div>
            <div style={{ marginTop: '50px' }}>
              <ServiceCardfour />
            </div>
          </div>
        </div>
      </div>
      <div className='container research'>
        <div className='row'>
          <h4>LEADERSHIPCQ RESEARCH</h4>
          <div className='col-md-4 researchcab'>
            <Imagewithtext image={book} headingtext='The findings of scientific literature' text2='in neuroscience, social psychology,organisational behavior and conflict resolution.' />
          </div>
          <div className='col-md-4 researchcab'>
            <Imagewithtext image={Interviews} headingtext='200 interviews' text2='of Senior International Executives 66 nationalities Mix of gender, sexual orientation, ethnicity, 20+ industries' />
          </div>
          <div className='col-md-4 researchcab'>
            <Imagewithtext image={Distilliation} text1='The distillation' headingtext='20+ years of professional experience' text2='running diverse teams around the globe' />
          </div>
          <div className='row'>
          <div className='col-md-6 researchcabtwo'>
          <Imagewithtext image={Supervision} text1='The' headingtext='supervision of prestigious NTU CLCI academics' text2='who developed the concept of CQ (Pr. Soon Ang)' />
          </div>
          <div className='col-md-6 researchcabtwoone'>
          <Imagewithtext image={Award} text1='TAwarded' headingtext='“Best International Paper”'  text2='at SIOP conference in 2020' />
          </div>
        </div>
        </div>
       
      </div>
      <Footer/>
    </>
  )
}

export default What