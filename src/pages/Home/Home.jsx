import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div>
     <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="image-container">
            <img src="../images/Santosh-1.jpeg" alt="Santoshkumar" />
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-content">
            <div className="myName">Santoshkumar</div>
            <p className="sub-heading">A bit about me</p>
            <div className="normal-text">
            A passionate Web Developer skilled in crafting dynamic and responsive websites. With a strong foundation in HTML, CSS, JavaScript, and React, I bring ideas to life with clean, efficient code. My journey as a developer is driven by a love for continuous learning and a commitment to delivering exceptional user experiences. Explore my work to see what I can create.
            </div>
            <div className="middle-nav-links">
            <a href="/resume" className="circle" style={{ backgroundColor: '#e0a458' }}>
  <span className="tag">Resume</span>
</a>
<a href="/project" className="circle" style={{ backgroundColor: '#d9594c' }}>
  <span className="tag">Work</span>
</a>
<a href="/contact" className="circle" style={{ backgroundColor: '#419d78' }}>
  <span className="tag">Contact</span>
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
