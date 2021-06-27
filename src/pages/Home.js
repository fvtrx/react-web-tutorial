import React from 'react';
import '../App.css';
import Hero from '../components/Hero/Hero';
import About from './About';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default Home;
