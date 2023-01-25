import React from 'react'
import group from '../assets/group.png'
import '.././App.css'

const Imagebond = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#F27B13' }}>
            <div className='container'>
                <div className='row'>
                   <div className='group'>
                    <img src={group} alt='group' width='75%'/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Imagebond