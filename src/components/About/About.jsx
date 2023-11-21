import React from 'react'
import "../About/About.css"
import Aboutimg from "../../assets/night.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='aboutimg'>
        <img src={Aboutimg} alt='tour' />
      </div>
      <div className='abouttext'>
        <h1>About Us</h1>

      </div>
    </div>
  )
}

export default About