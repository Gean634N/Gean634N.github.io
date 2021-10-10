import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import '../css/home.css';
import perfilGean from'../img/perfil-gean.png';


// import { UilLinkedinAlt } from '@iconscout/react-unicons'

const Home = () => {
  return (
    /* ==================== HOME ==================== */
    <section className="home section" id="home">
      <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/gean634n/"
                className="home__social-icon"
                target="_blank/"
                rel="noreferrer"
              >
                <Unicons.UilLinkedinAlt />
              </a>

              {/* Instagran */}
              <a
                href="https://www.instagram.com/gean634n/"
                className="home__social-icon"
                target="_blank"
              >
                <Unicons.UilInstagram />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Gean634N"
                className="home__social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <Unicons.UilGithubAlt />
              </a>
            </div>

              <div className="home__img">
                <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha">
                      <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  </g>
                  {/* <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                      -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/> */}
                </svg>
                <img
                  // site used to remove bg from picture: https://www.remove.bg/pt-br/upload
                  className="home__blob-img"
                  y='-35'
                  src={ perfilGean }
                  alt="portfolio website owner smiling"
                />
              </div>

              <div className="home__data">
                <h1 className="home__title">Olá, Meu nome é Gean</h1>
                <h3 className="home__subtitle">Desenvolvedor Frontend</h3>
                <p className="home__description">Sempre se aperfeicoando para entregar trabalhos de qualidade cada vez mais elevada.</p>
                <a href="#contact" className="button button--flex">
                  Contacte-me<Unicons.UilMessage className="button__icon" />
                </a>
              </div>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
            <Unicons.UilMouseAlt className="home__scroll-mouse" />
              <span className="home__scroll-name">Role para baixo</span>
              <Unicons.UilArrowDown className="home__scroll-arrow" />
            </a>
          </div>
        </div>
    </section>
)};

export default Home;
