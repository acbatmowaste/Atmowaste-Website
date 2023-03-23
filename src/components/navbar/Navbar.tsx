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
      <a href="#wgpt3">About AtmoWaste</a>
    </p>
    <p>
      <a href="#possibility">X-Prize Competition</a>
    </p>
    <p>
      <a href="#features">Subscribe</a>
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
        <p>Donate</p>
        <button className="co2" type="button">
          Remove CO2
        </button>
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
                <p>Donate</p>
                <button className="co2" type="button">
                  Remove CO2
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
