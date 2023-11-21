import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  return (
    <div className='navbar-items'>
      <h1 className='navbar-logo'>Trippy</h1>

      <div className='menu-icon' onClick={handleclick}>
        <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-links'>
          <Link to={"/"}>
            <i className='fa-solid fa-house'></i>Home
          </Link>
        </li>
        <li className='nav-links'>
          <Link to={"/About"}>
            <i className='fa-solid fa-circle-info'></i>About Us
          </Link>
        </li>
        <li className='nav-links'>
          <Link to={"/Services"}>
            <i className='fa-solid fa-briefcase'></i>Services
          </Link>
        </li>
        <li className='nav-links'>
          <Link to={"/Contact"}>
            <i className='fa-solid fa-address-book'></i>Contact Us
          </Link>
        </li>
        <li className='nav-mobile'>
          <button >Sign up</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
