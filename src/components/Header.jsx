import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import '../css/header.css';

const Header = () => {

  /*==================== MENU SHOW Y HIDDEN ====================*/
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        showMenu = () => navMenu.classList.add('show-menu'),
        hideMenu = () => navMenu.classList.remove('show-menu');


  /*===== MENU SHOW =====*/
  /* Validate if constant exists */
  if(navToggle){
    navToggle.addEventListener('click', showMenu)
  }

  /*===== MENU HIDDEN =====*/
  /* Validate if constant exists */
  if(navClose){
    navClose.addEventListener('click', hideMenu)
  }

  /*==================== REMOVE MOBILE MENU ====================*/
  const navLink = document.querySelectorAll('.nav__link')

  // when we click any component  the menu is hiden.
  navLink.forEach(link => link.addEventListener('click', hideMenu))

  return (
    /* ==================== HEADER ==================== */
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Gean</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <Unicons.UilEstate className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <Unicons.UilUser className="nav__icon" /> Sobre
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <Unicons.UilFileAlt className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <Unicons.UilScenery className="nav__icon" />
                <i className="uil uil-scenery nav__icon"></i> Portifólio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <Unicons.UilMessage className="nav__icon" />
                <i className="uil uil-message nav__icon"></i> Contacte-me
              </a>
            </li>
          </ul>
          <Unicons.UilTimes className="nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
          {/* <Unicons.UilMoon className="change-theme" id="theme-button" /> */}
          <div className="nav__toggle" id="nav-toggle">
            <Unicons.UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
