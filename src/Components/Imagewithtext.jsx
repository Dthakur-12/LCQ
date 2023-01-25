import React from 'react'
import './../Screens/What.css'

const Imagewithtext = ({ image, text1,text2, headingtext }) => {
    return (
        <div className='book'>
            <img src={image} alt='Book'  width='30%'/>
            <h5 style={{marginTop:'10px'}}>{text1} <span style={{ fontWeight: 'bolder'}}>{headingtext} </span> {text2}</h5>
        </div>
    )
}

export default Imagewithtext