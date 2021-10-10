import React, { useState } from 'react';
import Loader from './components/Loader'; 
import Header from './components/Header'; 
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Budget from './components/Budget';
import Footer from './components/Footer';

const App = () => {
  const [disapear, setDisapear] = useState(false);

  window.addEventListener('load', () => {
    setTimeout(() => setDisapear(true) , 100);
  });

  return (
    <>
      <Loader disapear={disapear} />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Budget />
      </main>
      <Footer />
    </>
  )
}

export default App;
