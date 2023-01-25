import React from 'react'
import './../Screens/What.css'
import training from './../assets/training1.png'
import FindMoreButton from './FindMoreButton'
import { useNavigate } from 'react-router-dom'


const ServiceCard = () => {
    const navigate=useNavigate();
    return (
        <div className='container service-card'>
            <div className='row'>
                <div className='col-md-6 serviceleft'>
                    <h2>EXECUTIVE TRAINING</h2>
                    <div>
                        <ol>
                            <li>How to ACE Diversity and Inclusion?</li>
                            <li>Inclusive Leadership</li>
                            <li>Cultural Intelligence</li>
                            <li>Intercultural Communication</li>
                        </ol>
                    </div>
                </div>
                <div className='col-md-6 serviceright'>
                    <img src={training} alt='Training' width='50%' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 findmorebutton'>
                    <FindMoreButton onClick={() => navigate('/findoutMore')} />
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default ServiceCard