import React from 'react'
import '../../pages/Resume/Resume.css'

const Education = ({details}) => {
   const {year,clgName,clgDescription} = details;
  return (
    <div>
      
       <div className="education">
            
            <div className="clg-description">
            <div className="clg-name clg-headings">
              {clgName}
            </div>
            <div className="year">
              {year}
            </div>
            <div className="normal-text">
             {clgDescription}
            </div>
            </div>


            
           
          </div>
    </div>
  )
}

export default Education
