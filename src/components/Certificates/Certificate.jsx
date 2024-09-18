import React from 'react'

const Certificate = (props) => {
    const{certName,certDescription,certLink} =props;
  return (
    <div>
        <div>
      
      <div className="education">
         
           <div className="clg-description">
           <div className="clg-name clg-headings">
             {certName}
           </div>
           <div className="normal-text">
            <p className='normal-text'>{certDescription}  </p>
            <span>You can find certificate <span><a href={certLink} style={{color:"#2a9192"}}>here</a></span></span>
            
           </div>
           </div>


           
          
         </div>
   </div>
    </div>
  )
}

export default Certificate
