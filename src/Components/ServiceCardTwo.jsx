import React from 'react'
import './../Screens/What.css'
import training2 from './../assets/training2.png'
import FindMoreButton from './FindMoreButton'
import { useNavigate } from 'react-router-dom'

const ServiceCardTwo = () => {
    const navigate = useNavigate();
    return (
        <div className='container service-card'>
            <div className='row texttwo'>
                <h2>THOUGHT LEADERSHIP : Masterclasses and Conferences</h2>
                <div className='col-md-6 serviceleft'>
                    <div>
                        <ol>
                            <li>How to ACE Diversity and Inclusion?</li>
                            <li>Inclusive Leadership</li>
                            <li>Cultural Intelligence</li>
                            <li>Inclusion unleashes Innovation {'\n'}<br /> (in partnership with Includers)</li>
                        </ol>
                    </div>
                </div>
                <div className='col-md-6 serviceright'>
                    <img src={training2} alt='Training' width='50%' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 findmorebutton'>
                    <FindMoreButton onClick={()=>navigate('/thoughfind')} />
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default ServiceCardTwo