import React from 'react';
import useCustom from '../../hooks/customHook';
import logo from '../../assets/logo.png';

import './Header.scss';

const Header = () => {
  const [globalState, setGlobalState] = useCustom();
  

  return (
    <header className='header'>
      <div className='header-section-left'>
        <div className='logo-container'>
          <a className='logo-link' href='/'>
            <img src={logo} className='logo' alt='logo'/>
          </a>
        </div>
        <div className='menu-container'>
          <i className="fa fa-bars fa-2x"></i>
          <p>Menu</p>
        </div>
      </div>
      <div className='header-section-right'>
        <div className='options'>
          <div className='option'><i className="fas fa-map-marker-alt"></i><p>Winkels</p></div>
          <div className='option'><i className="fas fa-user"></i></div>
          <div className='option'><i className="fas fa-heart"></i></div>
          <div className='option'><i className="fas fa-shopping-bag"></i>
          <span className='item-count'>{globalState.counter}</span></div>
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
            <button className="search-btn" type="submit" aria-label="zoeken">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  )
};

export default Header;