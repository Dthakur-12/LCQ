import React, { useState,useEffect } from 'react'
import People from '../../assets/people.png'
import './InclusiveLeadership.css'
import service from '../../assets/service.png'
import Footer from '../Footer'

const InclusiveLeadership = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    
  },[])
  const [UserData,setUserData]=useState({
    email:'',
    Fname:'',
    Lname:'',
    Cname:'',
  })

  const handleChange=(event)=>{
    setUserData(prevData=>{
      return{
        ...prevData,
        [event.target.name]:event.target.value
      }
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(UserData.email);
    console.log(UserData.Fname);
    console.log(UserData.Lname);
    console.log(UserData.Cname);
    
  }
  return (
    <>
    <div className='container leadershipcontainer'>
      <div className='row'>
        <div className='col-md-8 leadershiptwo '>
          <h5>Unleash your business <br /> potential through</h5>
          <h1>INCLUSIVE</h1>
          <p>LEADERSHIP</p>
        </div>
        <div className='col-md-4'>
          <img src={People} alt='Group' width='90%' />
        </div>
      </div>
      <div className='row leadershiptext'>
        <p>Diversity is the reality of any society and a richness to be cherished. At LeadershipCQ, our scientific research also shows that there's a robust positive relationship between inclusive leadership, cultural intelligence (CQ) and business performance. As former business executives ourselves, we've experienced that diversity can work in our favor or backfire if not managed well.</p>
        <p>​Beyond well-intended corporate programs, a company can only realize the benefits of diversity when inclusive practices are integrated in the everyday behaviors of its employees and modeled by leadership. Only then, will diversity turn into superior value and financial returns. Leaders today have to manage in their personal and professional lives many visible and less visible differences. They will therefore want to adapt and acquire new competences including how to manage diversity to take full advantage of its value.</p>
        <p>We provide the tools to do so and help improve your business results by releasing the full potential of the people in your organization. The satisfaction of our clients (among which Kering, Nexans, JDE and the European Commission) encourages us to continue this journey with you.</p>
      </div>
      <div className='row ourservices'>
        <div style={{textAlign:'center',marginTop:'20px'}}>
        <h4>OUR SERVICES</h4>
        <img src={service} alt='services' width='75%' />
        </div>
      </div>
      <div className='row ourservicesform'>
        <h4>If you would like to know about the full scope of our services, please fill in the form below.</h4>
        <div>
          <form className='formdata'>
            <input type='text' name='email' placeholder='Email' onChange={handleChange}/>
            <input type='text' name='Fname' placeholder='First Name' onChange={handleChange}/>
            <input type='text' name='Lname' placeholder='Last Name' onChange={handleChange}/>
            <input type='text' name='Cname' placeholder='Company Name' onChange={handleChange}/>
            <div>
              <button onClick={handleSubmit}>SUBMIT</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default InclusiveLeadership