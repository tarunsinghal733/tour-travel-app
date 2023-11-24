import React from 'react'
import contactimg from "../../assets/2.jpg"
import "../Contact/Contact.css"
import Footer from '../Footer/Footer'
import Form from '../form/form'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactimg'>
        <img src={contactimg} alt='tour' />
      </div>
      <div className='contacttext'>
        <h1>Contact Us</h1>
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact