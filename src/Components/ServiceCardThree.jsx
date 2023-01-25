import React from 'react'
import './../Screens/What.css'
import training3 from './../assets/training3.png'
import FindMoreButton from './FindMoreButton'
import { useNavigate } from 'react-router-dom'


const ServiceCardThree = () => {
    const navigate=useNavigate();
    return (
        <div className='container service-card'>
            <div className='row'>
                <div className='col-md-6 serviceleft'>
                    <h2>CONSULTING</h2>
                    <div>
                        <ol>
                            <li>Integrating D&I to the corporate</li>
                            <li>D&I global alignment policies</li>
                            <li>Implementation of D&I practices <br/> in the organization</li>
                            <li>Post M&A advisor ship</li>
                        </ol>
                    </div>
                </div>
                <div className='col-md-6 serviceright'>
                    <img src={training3} alt='Training' width='50%' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 findmorebutton'>
                    <FindMoreButton onClick={() => navigate('/consulting')} />
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default ServiceCardThree