import React from 'react'
import "../form/form.css"

const Form = () => {
  return (
    <div className='formcontainer'>
    <h1>Send a message to Us!</h1>
    <form>
      <input placeholder="Name"></input>
      <input placeholder="Email"></input>
      <input placeholder="Subject"></input>
      <textarea placeholder="Message" rows="4"></textarea>
      <button>Send Message</button>
    </form>
  </div>
  )
}

export default Form