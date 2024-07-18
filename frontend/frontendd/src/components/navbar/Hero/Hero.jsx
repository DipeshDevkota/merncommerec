import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
            <img src="/Frontend_Assets/hand_icon.png" alt="Hand icon"/>
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src="/Frontend_Assets/arrow.png" alt="Arrow icon"/>
        </div>
      </div>
      <div className="hero-right">
        <img src="/Frontend_Assets/hero_image.png" alt="Hero"/>
      </div>
    </div>
  );
}

export default Hero;
