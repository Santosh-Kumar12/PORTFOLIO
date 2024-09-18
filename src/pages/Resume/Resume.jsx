import React from 'react'
import './Resume.css'
import Heading from '../../components/Heading/Heading'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import Certificate from '../../components/Certificates/Certificate'

const Resume = () => {

  const degreeDetails = {
    year: "2019-2023",
    clgName: "Jain College of Engineering and Technology, Hubballi",
    clgDescription: "I completed my Bachelor's degree in Computer Science and Engineering with a CGPA of 7.65. My studies provided me with a solid foundation in software development, algorithms, and system design, equipping me with the skills to tackle real-world challenges in the tech industry."
  };

  const clgDetails = {
    year: "2017-2019",
    clgName: "Alva's Pre-University College, Moodbidri",
    clgDescription: "I completed my Pre-University Course (PUC) in the PCMB stream with 82%. This background in Physics, Chemistry, Mathematics, and Biology has given me a well-rounded understanding of both the theoretical and practical aspects of science."
  };

  const schoolDetails = {
    year: "2016-2017",
    clgName: "Swami Vivekanand High School, Bilagi",
    clgDescription: "I completed my SSLC with 82%, laying a strong academic foundation across various subjects and developing a disciplined approach to learning."
  };

  return (
    <section>
      <Heading name="Resume"   description={
    <>
      Full CV can be found <span><a href="https://drive.google.com/file/d/1hugq2ShAq5rkcymXrZ-uhxAoT89eTFtD/view?usp=drive_link" style={{color:"#2a9192"}}>here</a></span>
    </>
  } />

      <div className="head-container ">
        <div className='head-container-extra'>
          <div className="left-section">
            <div className="sub-heading">
              Education
            </div>
          </div>
          <div className="right-section">

            <div className="more">

              <Education details={degreeDetails} />
              <Education details={clgDetails} />
              <Education details={schoolDetails} />


            </div>
          </div>
        </div>


        
      </div>

      <hr />
      {/* ///////////////////////////////////// */}


      <section>
        <div className="skills-container">
          <div className="head-container ">
            <div className='head-container-extra'>
              <div className="left-section">
                <div className="sub-heading">
                  My Skills
                </div>
              </div>
              <div className="right-section">

                <div className="more">
                  <div className="education ">
                    <Skills domain="Web Technologies" skill1="HTML" skill2="CSS" skill3="JavaScript" skill4="React" />
                  </div>
                  <div className="education">
                    <Skills domain="Programming Languages" skill1="Java" skill2="Python" />
                  </div>
                  <div className="education">
                    <Skills domain="Frameworks/Libraries" skill1="React.js" skill2="Node.js" />
                  </div>
                  <div className="education">
                    <Skills domain="Development Toold" skill1="VS Code" skill2="GitHub" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

    <section>
    <div className="head-container ">
        <div className='head-container-extra'>
          <div className="left-section">
            <div className="sub-heading">
              Certification
            </div>
          </div>
          <div className="right-section">

            <div className="more">

          <Certificate certName="Udemy" certDescription="I completed a Web Development Bootcamp on Udemy, where I learned full-stack development, including HTML, CSS, JavaScript, and back-end technologies, equipping me with the skills to build and deploy web applications." certLink="https://drive.google.com/file/d/1EtzS0lCCsQwCyM0sIIXeuqdEbi5KDtEr/view?usp=drive_link"/>
          <Certificate certName="Great Learning" certDescription="I completed an online React.js course at Great Learning, where I gained hands-on experience in building dynamic, responsive web applications using React." certLink="https://drive.google.com/file/d/1EbR9elJVYMKsw9RZ0W_da7iA_VcxKlai/view?usp=drive_link"/>


            </div>
          </div>
        </div>


        
      </div>
    </section>
    {/* <hr /> */}
    </section>
  )
}

export default Resume
