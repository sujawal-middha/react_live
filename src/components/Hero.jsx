import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { lawyerData } from '../data/lawyerData';

const Hero = () => {
  const { title, tagline, subtext, description, image } = lawyerData.personalInfo;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-dark/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-accent/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">{title}</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif">
            Delivering <span className="text-gradient">Trusted Legal</span> Solutions.
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            {subtext}
          </p>
          <p className="text-gray-400 md:w-5/6 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="practice" smooth={true} duration={500}>
              <button className="btn-primary">View Practice Areas</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn-secondary">Contact Me</button>
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[400px] lg:max-w-none lg:w-[450px] aspect-[3/4] rounded-2xl overflow-hidden glass-panel p-2">
            <img
              src={image}
              alt="Advocate Portrait"
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-10 -left-10 glass-panel p-4 flex items-center gap-4 animate-bounce-slow"
          >
            <div className="text-3xl font-bold text-blue-400">8+</div>
            <div className="text-sm text-gray-300 font-medium leading-tight">Years of<br />Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
