import React from 'react'
import Serviceimg from "../../assets/night.jpg"
import "../Services/Services.css"
import Trip from '../Trip/Trip'
import Footer from '../Footer/Footer'

const Services = () => {
  return (
    <div className='services'>
      <div className='servicesimg'>
        <img src={Serviceimg} alt='tour' />
      </div>
      <div className='servicestext'>
        <h1>Services</h1>
      </div>
      <Trip />
      <Footer/>
    </div>
  )
}

export default Services