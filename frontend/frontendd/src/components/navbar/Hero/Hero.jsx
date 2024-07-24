import React from 'react';
import './Hero.css';
import hand_icon from '../../Assets/hand_icon.png';
import arrow_icon from '../../Assets/arrow.png';
import hero_image from '../../Assets/hero_image.png';
import { motion } from 'framer-motion';

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <motion.h2
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          transition={{
            duration: 1,
          }}
        >
          NEW ARRIVALS ONLY
        </motion.h2>


        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <div className="hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="Hand icon" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </motion.div>
        <motion.div
        whileHover={{scale:1.1}}
        transition={{type:"spring",stiffness:400,damping:10}}
        
        className="hero-latest-btn">
          <div 
          
          >Latest Collection</div>
          <img src={arrow_icon} alt="Arrow icon" />
        </motion.div>
      </div>
      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1666932521022-3514c9fc441f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
