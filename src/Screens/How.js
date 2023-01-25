import React, { useEffect } from 'react'
import './../App.css'
import method from './../assets/method.png'
import CustomSlider from '../Components/CustomSlider'
import Clients from './../assets/Clients.png'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const How = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  return (
    <>
      <div className='container howcontainer'>
        <div className='row'>
          <div className='col-md-6 howleftcontaier'>
            <h1>HOW</h1>
          </div>
          <div className='col-md-6 howrightcontainer'>
            <p>As former business executives ourselves, we've experienced that diversity can backfire if not managed well. Beyond well-intended corporate programs, a company can only realize the benefits of diversity when inclusive practices are integrated in the everyday behaviors of its employees and modeled by leadership. Only then will diversity turn into superior value and financial returns.</p>
            <h6>We share <span style={{ fontWeight: 'bolder', color: '#F27B13' }}>powerful tools </span> to boost diverse team performance by grooming a culture of inclusion in the workplace.</h6>
            <div className='acebtn'>
              <button onClick={() => navigate('/aceworkshop')}>ACE WORKSHOPS</button>
            </div>
            <div className='acebtn'>
              <button onClick={() => navigate('/leadership')}>INCLUSIVE LEADERSHIP</button>
            </div>
            <div className='leadership'>
              <p>At Leadership we believe in the power of:</p>
            </div>
            <div className='experiment'>
              <h1>Andragogy & Experiential learning</h1>
              <p>We follow the principles of Andragogy (adult learning as opposed to pedagogy which focuses on children) effectiveness.
                We practice Experiential learning in all our workshops because it as it’s a powerful way to learn with long lasting effects on behavior (based on David Kolb's methodology)</p>
              <img src={method} alt='method' width='80%' />
              <h1>Real Case studies</h1>
              <p>Our workshops combine case studies generated by our 200 + interviews of Senior Executives with the true stories of our participants. We provide a true “mindset shift journey” to ensure that executives not only acquire new knowledge but importantly accomplish behavioural change.</p>
              <h1>Immediate Implementation of Learning</h1>
              <p>Grounded on theory and research, the modules provide practical tools so leaders can immediately apply the knowledge in the workplace and progressively change their habits. All workshops extend during a period of 3 months with weekly challenges to ensure new knowledge becomes new leadership practice.</p>
            </div>
          </div>
        </div>
      </div>
      <CustomSlider />
      <div className='container ourclient'>
        <div> <h2>CLIENTS</h2></div>
     
        <img src={Clients} alt='clients' width='65%' />
      </div>
      <div className='container-fluid ourtake'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
              <h1>OUR TAKE ON D & I</h1>
              <div style={{ marginTop: '20px' }}>
                <p>Unlike some more radical movements which polarize social groups and tend to make executives feel guilty, we advocate non divisive positive psychology.</p>
                <p>We start from the premise that inclusion is not what our brain does naturally. If we don't pay attention we can accidentally exclude.</p>
                <h6>We promote responsibility, empathy and acceptance in a journey that is different for all of us.</h6>
                <p>Some of us were often the majority, some of us were often the minority. Some of us have been groomed in diversity all our lives, some of us not.
                  All of us can deliberately practice inclusive leadership at our own pace, in an environment of psychological safety.</p>
              </div>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </div>
      <div className='container colabration'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <h1>OUR COLLABORATIONS</h1>
            <div style={{ marginTop: '30px' }}>
              <h6>Managing Across Cultures (Executive MBA)</h6>
              <a href='https://www.essec.edu/en/' target='_blank'> <p> ESSEC Business School (Paris & Singapore)</p></a>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h6>Introduction to Cultural Intelligence (Executive Education)</h6>
              <a href='https://www.ntu.edu.sg/' target='_blank'>  <p>Nanyang Technological University (Singapore)​</p></a>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h6>​Cultural Intelligence for Global Leaders (Executive Education – <span style={{ textDecoration: 'underline' }}> Sonae) </span> </h6>
              <a href='https://www.ucp.pt/?set_language=en' target='_blank'>  <p>Universidade Católica Portuguesa  (Lisbon)</p> </a>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h6>Cultural Intelligence for Global Leaders(Senior Executive program -Various Industry Executives)</h6>
              <a href='https://www.tma.or.th/2016' target='_blank'> <p>Thailand Management Association (Bangkok)</p></a>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h6>Ambassador of the Advertising Educational Foundation </h6>
              <p>University of Massachusetts (Amherst) North-America</p>
              {/* <p><span style={{ textDecoration: 'underline' }}>Thailand Management Association </span>(Bangkok)</p> */}
            </div>
            <div style={{ marginTop: '30px' }}>
              <h6>Intercultural Communication Workshop (<span style={{textDecoration:'underline'}}>HEIP</span> - <span style={{textDecoration:'none',fontWeight:'500'}}>Paris</span>)</h6>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default How