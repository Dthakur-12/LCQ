import React from 'react'
import './../Screens/What.css'
import training4 from './../assets/training4.png'
import FindMoreButton from './FindMoreButton'
import pdf from '../assets/First.pdf'
import { Link } from 'react-router-dom'


const ServiceCardfour = () => {
    return (
        <div className='container service-card'>
            <div className='row'>
                <div className='col-md-6 serviceleft'>
                    <h2>PERSONAL ADVIOSRSHIP</h2>
                    <div>
                        <ol>
                            <li>Inclusive Leadership</li>
                            <li>The International GM's first 90 days</li>
                        </ol>
                    </div>
                </div>
                <div className='col-md-6 serviceright'>
                    <img src={training4} alt='Training' width='50%' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 findmorebutton'>
                   <a href={pdf} target='_blank' rel="noreferrer"><FindMoreButton/></a> 
               
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}

export default ServiceCardfour