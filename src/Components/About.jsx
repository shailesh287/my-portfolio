import React from 'react'
import { motion } from 'framer-motion';

import "../App.css"
const About = () => {
  return (
    <>
    <motion.div className='mainContainer'
    initial={{ opacity: 0, y: 300 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
        <h2 className='sectionTitle'>About Me</h2>
        <br/>
        <p >As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.
             I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a
               team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
    </motion.div>
    </>
  )
}

export default About
