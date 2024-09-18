import React from 'react'
import Heading from '../../components/Heading/Heading'
import './Contact.css'
import ContactDetails from '../../components/ContactDetails/ContactDetails'

const Contact = () => {
  return (
    <div>
        <Heading name="Contact" description="Feel free to reach out to me through the contact form below. Whether you have a project idea, a question, or just want to connect, I'd love to hear from you!"/>

        
   
        <div className="head-container ">
        <div className='head-container-extra'>
          <div className="left-section">
            <div className="sub-heading">
              More info
            </div>
          </div>
          <div className="right-section">

            <div className="more">

            <ContactDetails name="Name" description="Santoshkumar V Patrimath" />
            <ContactDetails name="Mobile" description="(+91) 8217637721" />
            <ContactDetails name="City" description="Bangalore" />
            <ContactDetails name={<><a href="mailto:santoshpatrimath12@gmail.com" className="button-style">Hire Me</a>
                </>} />


            </div>
          </div>
        </div>


        
      </div>
    </div>
  )
}

export default Contact
