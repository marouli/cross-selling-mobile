import React from 'react';

import logo from '../../assets/logo.png';

import './Header.scss';

const Header = () => (
  <header className='header'>
    <div className='header-section-left'>
      <div className='logo-container'>
        <a className='logo-link' href='/'>
          <img src={logo} className='logo' alt='logo'/>
        </a>
      </div>
      <div className='menu-container'>
        <i class="fa fa-bars fa-2x"></i>
        <p>Menu</p>
      </div>
    </div>
    <div className='header-section-right'>
      <div className='options'>
        <div className='option'><i class="fas fa-map-marker-alt"></i><p>Winkels</p></div>
        <div className='option'><i class="fas fa-user"></i></div>
        <div className='option'><i class="fas fa-heart"></i></div>
        <div className='option'><i class="fas fa-shopping-bag"></i></div>
      </div>
      <div className="search-container">
        <form className="search-form" id="submit">
          <input
            className="search-input"
            type="text"
            id="search"
            placeholder="Ik ben op zoek naar..."
            aria-label="zoeken"
          />
          <button class="search-btn" type="submit" aria-label="zoeken">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  </header>
);

export default Header;