import React from 'react';
import { Button } from '../Button/Button';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <video
        className="absolute inset-0 w-full h-full"
        src="../videos/video-1.mp4"
        autoPlay
        loop
        muted
      />
      <h1 className="text-white">ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
