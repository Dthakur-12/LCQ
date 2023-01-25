import React,{useEffect} from 'react'
import '../App.css'
import screen from '../assets/screen.png'
import Imagebond from '../Components/Imagebond'
import diversity from '../assets/diversity.png'
import job from '../assets/job.png'
import Footer from '../Components/Footer'

const Why = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <div className='container-fluid'>
      <div className='container section'>
        <div className='row'>
          <div className='col-md-6 leftcontainerwhy'>
            <div>
              <h1>WHY</h1>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='rightcontanerwhy'>
              <p><span style={{ color: '#F27B13', fontWeight: 'bold' }}>Our Mission:</span> At <span style={{ fontWeight: 'bold' }}>LeadershipCQ,</span> We promote diversity and inclusion in business and all related ecosystems. Because we know diversity well managed is an immense source of business growth and success.</p>
              <p><span style={{ color: '#F27B13', fontWeight: 'bold' }}>Diversity:</span> The infinite potential of a mix of individuals, identities, talents, experiences and perspectives in the world and in the workforce.</p>
              <p><span style={{ color: '#F27B13', fontWeight: 'bold' }}>Inclusion:</span> The deliberate practice of enabling each individual to develop their full potential in a safe working environment in which they feel they belong.</p>
              <p><span style={{ color: '#F27B13', fontWeight: 'bold' }}>Cultural Intelligence (CQ):</span> The ability to detect cultural differences and to manage them harmoniously. It is ultimately the ability to create a third culture where differences blossom together.</p>
            </div>
            <div>
              <img src={screen} width='70%'/>
            </div>
          </div>
        </div>
      </div>
      <Imagebond />
      <div className=' container unleasing'>
        <h4><span style={{ fontWeight: 'bolder' }}>Unleashing</span> the power of <span style={{ color: '#F27B13', fontWeight: 'bolder' }}> Diversity through Inclusion.</span></h4>
      </div>
      <div className='para'>
        <h1>OUR CUSTOMERS</h1>
        <p>NEEDS & PREFERENCES</p>
        <div>
          <h5> At<span style={{ fontWeight: 'bolder' }}> LeadershipCQ </span> we listen to our clients and we believe in the following principles:</h5>
          <h6 style={{marginTop:'20px'}}>1. Diversity well managed is an infinite source of business growth and success.</h6>
          <h6>2. Exclusion hurts (it reduces reasoning and pro social behaviour; it also increases self-defeating behaviours…)</h6>
          <h6>3. Inclusion unleashes Innovation (in partnership with <span style={{textDecoration:'underline'}}>Includers</span>)</h6>
        </div>
      </div>
      <div className='container diversity'>
        <h1>DIVERSITY IS MORE THAN MEETS THE EYES</h1>
        <img src={diversity} alt='diversity' width='65%' />
      </div>
      <div className='keyfigure'>
        <h2>KEY FIGURES</h2>
        <h3><span style={{ fontWeight: 'bolder' }}>70% </span>of company merger failures are due to cultural differences.</h3>
        <p>Research shows 60% to 80% of all difficulties in organizations stem from conflicts between employees.</p>
        <h6>These difficulties increase when cultures collide.</h6>
      </div>
      <div className='container investment'>
        <h1>INCLUSION RETURN ON INVESTMENT</h1>
        <img src={job} alt='job' width='65%' />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Why