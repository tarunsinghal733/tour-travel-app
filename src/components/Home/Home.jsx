import React from 'react'
import "../Home/Home.css"
import des1 from "../../assets/1.jpg"
import des2 from "../../assets/2.jpg"
import des3 from "../../assets/5.jpg"
import des4 from "../../assets/8.jpg"
import Footer from '../Footer/Footer'
import Trip from '../Trip/Trip'
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
        <a className='show ' href='#'>Travel Plan</a>
      </div>
      <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tour give you the opportunity to see a lot, within a time frame</p>
        <div className='first-des'>
          <div className='des-text'>
            <h2>Taal Volcano, Batamgas</h2>
            <p>
              Taal Volcano is the second most active volcano found in the
              province of Batangas.  A complex volcano in the middle of
              Taal Lake and is often called an island within a lake, that
              is an island within a lake that is on an island as well
              as one of the lowest volcano in the world having 311
              meters elevation.  It offers a very a spectacular
              view seen from Tagaytay Ridge.  Taal volcano is located
              around 50 kilometers away from Manila, capital of the
              Philippines.
              The main Vulcan point situated in the main crater lake,
              which is on the volcano island that is in Taal lake,
              which is in the main island of the Philippines (Luzon).
              Shown in the above image, almost everyone thought that
              it is the volcano itself.  Looking at the aerial view below,
              what is being seen by the Tagaytay Ridge is actually the
              “Binintiang Malaki (Big Leg)” located at the upper part
              of the image, that was the center of 1707 and 1715 eruption.
            </p>
          </div>
          <div className='image'>
            <img src={des1} alt='tour'></img>
            <img src={des2} alt='tour'></img>
          </div>
        </div>

        <div className='first-des'>
          <div className='image'>
            <img src={des3} alt='tour'></img>
            <img src={des4} alt='tour'></img>
          </div>
          <div className='des-text'>
            <h2>Mt Daguldul, Batangas</h2>
            <p>
              Mt. Daguldol is a coastal mountain located in the province of Batangas.
              It offers a scenic view of nearby Batangas mountains and beaches.
              Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet.
              Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan,
              Batangas. It is bound between the municipality of San Juan and Lobo. The
              Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.

              The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity.
              ccording to locals, the mountain was named as such because it describes the
              magnificence of the mountain range and the blunt rolling of its slopes. Mt.
              Daguldol has a total trail length of nine kilometers.
            </p>
          </div>
        </div>
        <Trip />
      </div>
      <Footer />
    </div>
   
    
  )
}

export default Home