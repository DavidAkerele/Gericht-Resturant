import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  const resetNav = () => {
    setToggleMenu(false);
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo"/>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontsize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home" onClick={()=>resetNav()}>Home</a></li>
              <li className="p__opensans"><a href="#about" onClick={()=>resetNav()}>About</a></li>
              <li className="p__opensans"><a href="#menu" onClick={()=>resetNav()}>Menu</a></li>
              <li className="p__opensans"><a href="#awards" onClick={()=>resetNav()}>Awards</a></li>
              <li className="p__opensans"><a href="#contact" onClick={()=>resetNav()}>Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
