import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { GiEarthAmerica } from 'react-icons/gi';
import './navbar.css';
import { useState } from 'react';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About AtmoWaste</a>
    </p>
    <p>
      <a href="#philosophy">Philosophy</a>
    </p>
    <p>
      <a href="#contact">Contact Us</a>
    </p>
    <p>
      <a href="#subscribe">Subscribe</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <GiEarthAmerica size={27} color="#fff" />
          <h1 id="logo">AtmoWaste</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="#subscribe">
          <p>Donate</p>
        </a>
        <a href="#subscribe">
          <button className="co2" type="button">
            Remove CO2
          </button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className=" z-50 gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <a href="#about">
                  <p>Donate</p>
                </a>
                <button
                  type="button"
                  className="co2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='#subscribe';
                  }}>
                </button>
                  {/* <button onClick="location.href='https://google.com';" className="co2" type="button">
                    Remove CO2
                  </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
