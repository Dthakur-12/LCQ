import React,{useEffect} from 'react'
import './Consulting.css'
import Footer from '../Footer'


const Consulting = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        
      },[])
    return (
        <>
        <div className='container consulting'>
            <div className='row'>
                <div>
                    <h1>CONSULTING</h1>
                    <div style={{marginTop:'30px'}}>
                    <p>​At LeadershipCQ we offer consulting services to our clients:</p>
                    </div>
                    <div style={{marginTop:'30px'}} className='paragraphg'>
                    <p>In the context of D&I strategy, our clients are willing to ensure the diversification of their workforce. To achieve this objective, we help them to:</p>
                    <p>- Create training module on any inclusive topic (ex: inclusive recruitment).</p>
                    <p>- To develop, cascade and facilitate those modules (pilot sessions).</p>
                    <p>- To provide practical and applicable tools to ensure a change in mindset and behaviour.</p>
                    <p>- Create learning path for eLearning platform in order to raise awareness around the topic of diversity and inclusion.</p>
                    <p>We are willing to make our clients understand what diversity means in their own life and how they come across it.</p>
                    <p>We will encourage them to leverage more diversity nudging them to make small changes to be more inclusive on a day to day basis.</p>
                    </div>
                    <div style={{marginTop:'30px'}}>
                    <p> <span style={{color:'#F27B13',textDecoration:'underline'}}>​Contact us</span> so we can tailor make a proposition to suit your needs.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Consulting