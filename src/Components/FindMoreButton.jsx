import React from 'react'
import './../Screens/What.css'

const FindMoreButton = ({onClick=()=>{}}) => {
  return (
    <button className='findButton' onClick={onClick}>FIND OUT MORE
    </button>
  )
}

export default FindMoreButton