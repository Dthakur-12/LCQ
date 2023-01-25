import React,{useEffect} from 'react'
import './Who.css'
import venessa from './../assets/venessa.png'
import venessatwo from './../assets/venessatwo.png'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const Who = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    
  },[])
  const navigate=useNavigate();
  return (
    <>
      <div className='container whocontainer'>
        <div className='row'>
          <div className='col-md-6 wholeftcontainer'>
            <h1>WHO</h1>
          </div>
          <div className='col-md-6 whorightcontainer'>
            <p>It is friendship and loss that lead to Vanessa Barros and Amélie Devaux’s unexpected encounter. Vanessa was friends with Xavier Bretonnière and Amélie with his sister Anne-Sophie. Cancer took the lives of both siblings prematurely. At a memorial gathering, their mourning mother, an extraordinary woman, Jeanine Bretonnière, discovered Vanessa and Amélie’s common passion for diversity and inclusion and connected them immediately.</p>
          </div>
        </div>
      </div>
      <div className='container-fluid whotext'>
        <div className='container'>
          <p>This unusual bond combined with their shared commitment to drive change, created a strong connection between them which materialized in a common project: <span style={{ fontWeight: 'bolder',}}> <br/>LeadershipCQ.</span></p>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 introleft'>
            <div>
              <img src={venessa} alt='Vanessa Barros' width='70%' />
            </div>
          </div>
          <div className='col-md-6 introright'>
            <h1>Vanessa Barros, PhD </h1>
            <p>Vanessa is an author, senior executives’ advisor, trainer, lecturer and consultant on Inclusion and cultural intelligence (CQ). Of multicultural background herself, she has lived and worked in 4 continents and 8 countries; speaks 4 languages fluently; and lives now between Lisbon, Brussels, and Paris. Her 3 sons hold 3 nationalities. Before earning her PhD on Cultural intelligence at Singapore’s Nanyang Business School in 2018, Vanessa worked as a Senior executive in the Advertising industry for over 20 years handling local, regional, and global accounts for blue chip clients including InBev, Chivas Regal, Reckitt Benckiser, Nina Ricci, Procter & Gamble, Lolita Lempicka, Danone, Kraft Foods, Peugeot, and Unilever. Creativity, Generosity and Joy are the three values that guide her life achievements.</p>
            <a href='https://www.linkedin.com/in/vanessabarrosleadershipcq/' target='_blank'><h6>Connect on LinkedIn</h6></a>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 introleft'>
            <div>
              <img src={venessatwo} alt='Vanessa Barros' width='70%' />
            </div>
          </div>
          <div className='col-md-6 introright'>
            <h1>Amélie Devaux </h1>
            <p>Amélie started her career in Finance working for KPMG in Paris and then for Suez Environment in Morocco. New professional opportunities in France and Asia led her to move into Career Management for international executives and students. The cultural gaps she experienced during her four expatriations (Morocco 7 years/Indonesia 4 years and USA 3 years) and her current eyes disability motivated her to explore Diversity and Inclusion in the workplace. She encountered trough all her experiences in Career Development, Job hunting and Cross-cultural management the joys of discovering how to adapt, business-wise, to totally different cultures.</p>
            <a href='https://www.linkedin.com/in/am%C3%A9lie-devaux-85a3a6a4/' target='_blank'><h6>Connect on LinkedIn</h6></a>
          </div>
        </div>
      </div>
      <div className='container-fluid whoservice'>
        <div className='container'>
          <div>
            <h5>OUR SERVICES BUILD ON</h5>

          </div><div className='service_ul'>
            <ul>
              <li><span style={{ fontWeight: 'bolder' }}>250 interviews</span> of Senior International Executives from 66 nationalities and diverse gender and sexual orientation, ethnicity, disability across 20+ industries </li>
              <li>The <span style={{ fontWeight: 'bolder' }}>findings</span> of scientific literature in Neuroscience, social psychology, organisational behavior, conflict resolution</li>
              <li>The <span style={{ fontWeight: 'bolder' }}>supervision</span> of prestigious NTU CLCI academics who developed the concept of CQ (Pr. Soon Ang)</li>
              <li>The <span style={{ fontWeight: 'bolder' }}>distillation of 20+ years of professional experience</span> running diverse teams around the globe</li>
              <li><span style={{ fontWeight: 'bolder' }}>Awarded</span> “Best International Paper” at SIOP conference in 2020</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container expercontainer'>
        <div className='row'onClick={()=>navigate('/expert')} style={{cursor:'pointer'}}>
          <h4>MEET OUR EXPERTS</h4>
        </div>
      </div>
      <div className='container thinktank'>
        <div className='row'>
          <h4>THINK TANKS</h4>
          <div className='service_ultwo'>
            <ul>
              <li> <a href='https://www.linkedin.com/company/the-includers/' target='_blank'><span style={{ textDecoration: 'underline' }}>Includers:</span></a> how inclusion drives innovation</li>
              <li>Female Leadership</li>
              <li>New Working Practices in the Post-Covid19 era</li>
              <li>Art & Confinement</li>
              <li>University of Life (Project of special online education for Autistic adults)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Who