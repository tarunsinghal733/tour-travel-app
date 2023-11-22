import React from 'react'
import "../About/About.css"
import Aboutimg from "../../assets/night.jpg"
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutimg'>
        <img src={Aboutimg} alt='tour' />
      </div>
      <div className='abouttext'>
        <h1>About Us</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default About