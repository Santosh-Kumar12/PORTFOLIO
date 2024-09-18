import React from 'react'

const Skills = (props) => {
  return (


    <>
   
    <div>
        
      <div className="clg-description">
            <div className="clg-name clg-headings">
              {props.domain}
            </div>
           
            <div className="normal-text ind-skills">
              
              <span className='special' style={{color:"black"}}>{props.skill1}</span>
              <span className='special' style={{color:"black"}}>{props.skill2}</span>
              <span className='special' style={{color:"black"}}>{props.skill3}</span>
              <span className='special' style={{color:"black"}}>{props.skill4}</span>
             
            </div>
            </div>
    </div>
    </>
  )
}

export default Skills
