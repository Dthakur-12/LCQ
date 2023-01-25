import React,{useEffect} from 'react'
import './AceWorkshop.css'
import People from '../../assets/people.png'
import arrow from '../../assets/arrow.png'
import methology from '../../assets/methology.png'
import groupone from '../../assets/groupone.png'
import grouptwo from '../../assets/grouptwo.png'
import traineeone from '../../assets/traineeone.png'
import traineetwo from '../../assets/traineetwo.png'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import ReButton from './../ReButton'


const AceWorkshop = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    
  },[])
  return (
    <>
      <div className='container aceworkshopcontainer'>
        <div className='row'>
          <div className='col-md-8 workshop'>
            <h5>HOW TO</h5>
            <h1>ACE</h1>
            <p>Diversity & Inclusion</p>
          </div>
          <div className='col-md-4'>
            <img src={People} alt='Group' width='90%' />
          </div>
        </div>
        <div className='row diversitytext'>
          <div>
            <p><span style={{ fontWeight: 'bolder' }}>Diversity & Inclusion</span> is one of the hottest topics in today's corporate world but it is not easy. Neuroscience research shows that our brains are not wired for D&I. They are wired to dislike differences, to put people in boxes and to stick to old habits. A fearless mindset is unquestionably the key to D&I success in any organization and yet we are all starting to be scared about what to say or what to do…</p>
          </div>
          <div>
            <p>This training is designed to help forward-looking business leaders achieve immediate and enduring impact in Diversity, Equity and Inclusion by expanding their intercultural intelligence. As per a senior participant, "more than a training, this workshop is a journey through a profound mindset shift".</p>
          </div>
          <div>
            <p>Join other executives from a variety of industries and together let's unleash the power of our diverse teams through inclusion!</p>
          </div>
        </div>
        <div className='row apitext'>
          <h3>March 3, 10, 17 and 24,2022 <br />
            Live online / 2pm - 6pm CET</h3>
          <p className='apitexttwo'>A NEW GRAMMAR TO
            <br /> <span style={{ color: '#F27B13' }}>ACTIVATE DIVERSITY POTENTIAL THROUGH <br /> INCLUSION</span>
            <br /> IN 3 EASY STEPS</p>
          <div >
            <button className='registerbttn'>REGISTER HERE</button>
          </div>
          <div style={{ marginTop: '30px' }}>
            <img src={arrow} alt='ACE' width='70%' />
          </div>
        </div>
      </div>
      <div className='container-fluid objective'>
        <div className='container'>
          <div className='row'>
            <h1>TRAINING OBJECTIVES</h1>
            <p>In this highly interactive, hands-on training program, we will use a problem-based approach combined with drama techniques to tackle real-life work tensions that may arise between people from diverse backgrounds.</p>
            <div style={{ marginTop: '25px' }}>
              <p>At the end of the training program, participants should be able to:</p>
              <div>
                <ol>
                  <li>Detect cultural differences, anticipate disagreements and accurately identify negative emotions when the emerge.</li>
                  <li>Understand the root causes of the tension and its key influential stakeholders, through inclusion-enhancing techniques.</li>
                  <li>Reduce the tension, create trust and improve relationships among diverse parties.</li>
                  <li>Suggest effective resolutions that maximise the interests and satisfaction of all parties.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container resource'>
        <div className='row'>
          <h5>RESOURCES</h5>
          <h6>Participants' materials include:</h6>
          <div>
            <ul>
              <li>The ACE participant guide</li>
              <li>Your personal learning diary to record reflections during the training and between sessions</li>
              <li>A Case Study Resolution guide</li>
              <li>Vanessa Barros' book, Don't Mess With My Professionalism!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-fluid objective'>
        <div className='container'>
          <div className='row'>
            <h1>REGISTRATION</h1>
            <p>Deadline for registration is 01 March 2022</p>
            <div style={{ marginTop: '20px' }}>
              <p>Participant Fees: 1.650,00 EUR</p>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p>Estimated time for completion:</p>
            </div>
            <div>
              <ul>
                <li>4 hours preparation</li>
                <li>16 hours of live online workshops</li>
                <li>Total: 20 hours</li>
              </ul>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button className='registerbttntwo'>REGISTER HERE</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container resource'>
        <div className='row'>
          <h5>LEARNING METHODOLOGY</h5>
          <h6>Each session will follow the four steps of David Kolb's experiential learning methodology</h6>
          <div style={{ textAlign: 'center' }}>
            <img src={methology} alt='ACE' width='70%' />
          </div>
        </div>
      </div>
      <div className='container resource'>
        <div className='row'>
          <h5>CLIENTS</h5>
          <div style={{ textAlign: 'center', margin: '20px' }}>
            <img src={grouptwo} alt='ACE' width='70%' style={{ marginBottom: '20px' }} />
            <img src={groupone} alt='ACE' width='70%' />
          </div>
        </div>
        <h5 style={{ marginTop: '30px' }}>EXECUTIVE TRAINERS</h5>
      </div>
      <div className='container-fluid objective'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 traineeleft'>
              <img src={traineeone} alt='Venessa' width='70%' />
              <h1>Vanessa Barros, PhD</h1>
            <Link to='/who'> <h5>Read Vanessa's Bio</h5></Link>
            </div>
            <div className='col-md-6 traineeleft'>
              <img src={traineetwo} alt='Amelle' width='70%' />
              <h1>Amélie Devaux</h1>
              <Link to='/who'> <h5>Read Amélie Devaux's Bio</h5></Link>
            </div>
          </div>
        </div>
      </div>
   <Footer/>
    </>
  )
}

export default AceWorkshop