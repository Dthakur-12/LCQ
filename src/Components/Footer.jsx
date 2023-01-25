import React from 'react'
import './../Screens/Who.css'
import fb from './../assets/fb.png'
import linkdin from './../assets/linkdin.png'
import youtube from './../assets/youtube.png'

const Footer = () => {
    // let copy = React.string({'©'});
    return (
        <div className='container-fluid footersection'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 language'>
                        <div >
                            <h3>Language</h3>
                        </div>
                        <div >
                            <p>Follow us at</p>
                        </div>
                        <div className='socialmedia'>
                            <img src={fb} alt='Facebook' width='8%' />
                            <img src={linkdin} alt='Linkdin' width='8%' />
                            <img src={youtube} alt='YouTube' width='8%' />
                        </div>
                    </div>
                    <div className='col-md-3 ctsupport'>
                        <h3>Help</h3>
                        <p>Customer support</p>
                        <p>Email us</p>
                    </div>
                    <div className='col-md-3 ctsupport'>
                        <h3>About</h3>
                        <p>About us</p>
                        <p>Ace Workshops</p>
                        <p>Inclusive Leadership</p>
                        <p>Our Clients</p>
                        <p>Blogs</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policies</p>
                    </div>
                    <div className='col-md-3 ctsupport'>
                        <h3>Our Services</h3>
                        <p>Why</p>
                        <p>How</p>
                        <p>What</p>
                        <p>Who</p>
                        <h4>Careers</h4>
                        <p>For businesses</p>
                        <p>Join Us</p>
                    </div>
                </div>
            </div>
            <div className='copyright'>
            <p style={{color:'white'}}>{'\u00a9'} LCQ 2022</p>
            </div>
        </div>
    )
}

export default Footer