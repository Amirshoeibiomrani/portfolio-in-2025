import React from 'react';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />
    </>
  );
};

export default App;