import React from 'react'

const ContactDetails = (props) => {
    const{name, description} = props;
  return (
    <div>
        <div className="education">
            
            <div className="clg-description">
            <div className="clg-name clg-headings">
              {name}
            </div>
            <div className="normal-text">
             {description}
            </div>
            </div>


            
           
          </div>
    </div>
  )
}

export default ContactDetails
