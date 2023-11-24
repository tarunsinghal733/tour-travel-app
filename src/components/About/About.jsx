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
      <div className='aboutus'>
        <h1>Our History</h1>
        <p>
          A tour and travel company is a business entity that specializes in providing a variety of travel-related services to individuals, groups, and businesses. These companies play a crucial role in facilitating and organizing trips, vacations, and journeys for their clients, ensuring a smooth and enjoyable travel experience. Here's a description of the key aspects of a tour and travel company:
          Services Offered:
          Tour Packages: Tour and travel companies create and offer pre-arranged tour packages that include transportation, accommodation, and various activities at specific destinations.
          Customized Itineraries: They may also tailor trips according to the preferences and needs of their clients, providing flexibility in terms of destinations and activities.
          Transportation:
          Flights and Transfers: Many travel companies handle flight bookings and airport transfers to ensure that clients reach their destinations safely and comfortably.
          Ground Transportation: They may arrange for ground transportation, such as buses, cars, or even guided tours.
        </p>
        <h1>Our Missions</h1>
        <p>our mission is to inspire and enrich lives through the joy of travel. We are dedicated to creating unforgettable experiences for our clients, fostering a sense of exploration, cultural understanding, and adventure. By curating exceptional and personalized travel solutions, we aim to be the preferred partner for individuals and groups seeking seamless, immersive, and transformative journeys. Our commitment to quality, integrity, and customer satisfaction drives us to continually innovate and exceed expectations, making travel with trippy a journey of a lifetime."</p>
      </div>
      <Footer />
    </div>
  )
}

export default About