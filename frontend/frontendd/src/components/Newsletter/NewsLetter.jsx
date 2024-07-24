import React from 'react'
import './NewsLetter.css'
import { motion } from 'framer-motion'

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
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <motion.h1
             initial="hidden"
             animate="show"
             variants={fadeInUpAnimation}
             transition={{
               duration: 1,}}
               >
          
          Get Exclusive Offers on Your Email</motion.h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
        
    </div>
  )
}

export default NewsLetter
