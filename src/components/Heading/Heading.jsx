import React from 'react'
import './Heading.css'
const Heading = (props) => {
  return (
    <div> <div className="head-container">
    <div className="resume-container">
      <div className="headline-content">
        <h1>{props.name}</h1>
        <p className='special' style={{color:'black'}}>{props.description}</p>
      </div>


    </div>

  </div>
  <hr />
    </div>
  )
}

export default Heading
