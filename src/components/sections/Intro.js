import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Intro = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];
  
  return (
    <section className="section intro">
      <div className="container">
        <motion.div
          className="intro__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="intro__greeting" variants={itemVariants}>
            <span className="intro__greeting-text">Hello, I'm</span>
          </motion.div>
          
          <motion.h1 className="intro__name" variants={itemVariants}>
            Your Name
          </motion.h1>
          
          <motion.div className="intro__title" variants={itemVariants}>
            <div className="glass-card intro__title-card">
              <span>Full Stack Developer</span>
            </div>
          </motion.div>
          
          <motion.p className="intro__description" variants={itemVariants}>
            I'm a passionate developer focused on creating beautiful and functional web experiences.
            With expertise in modern web technologies, I build responsive and user-friendly applications
            that solve real-world problems.
          </motion.p>
          
          <motion.div className="intro__social" variants={itemVariants}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="intro__social-link glass-card"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div className="intro__cta" variants={itemVariants}>
            {/* <Link to="/contact" className="btn btn--primary"> */}
              Get in Touch
            {/* </Link> */}
            {/* <Link to="/projects" className="btn"> */}
              View My Work
            {/* </Link> */}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="intro__scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <FaArrowDown />
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
