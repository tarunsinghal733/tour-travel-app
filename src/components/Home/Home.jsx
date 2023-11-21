import React from 'react'
import "../Home/Home.css"
import CarImage from '../../assets/12.jpg';


const Home = () => {
  return (
    <div className='home'>
      <div className='homeimg'>
        <img src={CarImage} alt='tour' />
      </div>
      <div className='hometext'>
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination</p>
        <a className='show' href='#'>Travel Plan</a>
      </div>
    </div>
  )
}

export default Home