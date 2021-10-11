import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import '../css/home.css';
import CircleImage from './CircleImage';


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
                rel="noreferrer"
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

              <CircleImage />

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
