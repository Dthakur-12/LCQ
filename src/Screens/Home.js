import React from 'react'
import ReBlog from '../Components/ReBlog'
import screen from './../assets/screen.png'
import '../App.css'
import BookBlog from '../Components/BookBlog'
import Bookblogtwo from '../Components/Bookblogtwo'
import Transparent from '../Components/Transparent'
import { useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();

  return (
    <>
    <div className='container-fluid maincontainer'>
      <div className='coast'>
        <div className='leader'>
          <h1>LeadershipCQ</h1>
          <p> Inclusive <span style={{color:'#F27B13'}}>l</span>eadership and <span style={{color:'#F27B13'}}>C</span>ultural <span style={{color:'#F27B13'}}>I</span>ntelligence</p>
        </div>
      </div>
      <div className='container-fluid' style={{backgroundColor:'#FFFF'}}>
      <div className='container textinfo'>
        <p>At <span style={{ color: '#F27B13', fontWeight: 'bold' }}>Leadership CQ </span>we <span style={{ color: '#F27B13', fontWeight: 'bold' }}>promote Diversity and Inclusion</span> in business and all related ecosystems. Because we know that diversity well managed is an infinite source of business growth and success.</p>
      </div>
      </div>
      <Transparent/>
      <ReBlog heading='WHY' onClick={()=>navigate('/why')} color='#F27B13' btntext='DISCOVER OUR WHY' detailsone='Today, organizations face a spectrum of diversity. At ' headingtext='Leadership CQ' detailstwo=' we believe in the infinite potential of a mix of individuals, identities, talents, experiences and perspectives in the world and in the workforce.' />
      <div className='conatiner-fluid' style={{backgroundColor:'white'}}>
      <div className='container textinfo'>
        <p>70% of company mergers failures are due to cultural differences. {'\n'}
          <span style={{ color: '#F27B13', fontWeight: 'bolder' }}>Diversity well managed through Inclusion unleashes performance.</span></p>
      </div>
      </div>
      <ReBlog heading='HOW' onClick={()=>navigate('/how')} color='#605E5E' btntext='HOW WE HELP' detailsone='Beyond well-intended corporate programs, a company can only realize the benefits of diversity when inclusive practices are integrated in the everyday behaviours of its employees and modelled by its leadership.' />
      <div className='conatiner-fluid' style={{backgroundColor:'white'}}>
      <div className='container textinfo'>
        <p>
          <span style={{ color: '#F27B13', fontWeight: 'bolder' }}>LeadershipCQ  </span>provides intercultural expertise and services to individuals and organizations wanting to better navigate through today's global economy.</p>
      </div>
      </div>
      <Transparent/>
      <div className='conatiner-fluid' style={{backgroundColor:'white'}}>
      <div className='container textinfo'>
        <p>We share
          <span style={{ color: '#F27B13', fontWeight: 'bolder' }}> powerful tools  </span>to boost diverse team performance by grooming a culture of inclusion in the workplace.</p>
      </div>
      </div>
      <ReBlog heading='WHAT' onClick={()=>navigate('/what')} color='#A0A09F' btntext='WHAT WE DO' detailsone='Understand the brain mechanisms that drive exclusive behavior in our every day lives.' />
      <Transparent/>
      <div className='conatiner-fluid' style={{backgroundColor:'white'}}>
      <div className='container textinfo'>
        <p>An unusual bond combined with a shared
          <span style={{ color: '#F27B13', fontWeight: 'bolder' }}> commitment to drive change </span>created a common project: <span style={{ color: '#212529', fontWeight: 'bolder' }}>LeadershipCQ.</span></p>
      </div>
      </div>
      <ReBlog heading='WHO' onClick={()=>navigate('/who')} color='#C44721' btntext='WHO WE ARE' detailsone='Our team combines senior management experience of diverse teams around the world with solid academic and research background as well as extensive pedagogical knowledge.' />
      <Transparent/>
      <BookBlog />
      <Bookblogtwo />
      <div className='conatiner-fluid' style={{backgroundColor:'white'}}>
      <div className=' container logoscreen'>
        <img src={screen} alt='logo' width='30%' />
        <p>Leadership<span style={{ color: '#F27B13', fontWeight: 'bolder' }}>CQ</span> (<span style={{ color: '#F27B13', fontWeight: 'bolder' }}>C</span>ultural <span style={{ color: '#F27B13', fontWeight: 'bolder' }}>Q</span>uotient)</p>
        <h1>LET'S TALK</h1>
        <span>We'd love to hear from you - you can email us at</span>
        <h3><a href ='mailto:contact@leadershipcq.com'>contact@leadershipcq.com</a></h3>
        <h4><Link to='/contact'>Or fill in the form here</Link></h4>
      </div>
      </div>
    </div>
    <Footer/>
    </>

  )
}

export default Home