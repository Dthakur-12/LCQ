import React from 'react'
import './../App.css'

const ReButton = ({text,onClick=()=>{}}) => {
  return (
    <div >
        <button className='rebtn' onClick={onClick}>{text}</button>
    </div>
  )
}

export default ReButton