import React from 'react'
import '../App.css'
import ReButton from './ReButton'

const ReBlog = ({heading,detailsone,headingtext,color,btntext,detailstwo,onClick=()=>{}}) => {
    return (
        <div className='container-fluid blogheaer ' style={{backgroundColor:color}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 textwhy'>
                        <div>{heading}</div>
                    </div>
                    <div className='col-md-6 maincontaner'>
                        <div className='textwhytwo'>{detailsone}<span style={{fontWeight:'bold'}}>{headingtext}</span>{detailstwo}</div>
                        <div className='btndiv'>
                            <ReButton text={btntext} onClick={onClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReBlog