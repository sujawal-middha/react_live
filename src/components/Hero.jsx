import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { lawyerData } from '../data/lawyerData';

const Hero = () => {
  const { title, tagline, subtext, description, image } = lawyerData.personalInfo;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden aura-bg">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              {title}
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white">
              Delivering <br />
              <span className="text-aura">Trusted Legal</span> <br />
              Solutions.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-xl"
          >
            {subtext}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-5 mt-4"
          >
            <Link to="practice" smooth={true} duration={500} offset={-100}>
              <button className="btn-aura">
                View Practice Areas
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              <button className="btn-outline-aura">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="relative"
        >
          {/* Decorative shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 to-cyan-400/20 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-3xl">
              <img 
                src={image} 
                alt="Advocate Portrait" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-8 -right-8 glass-pill p-6 flex flex-col items-center justify-center border-indigo-500/50 shadow-indigo-500/20 shadow-2xl animate-bounce-slow"
          >
            <span className="text-4xl font-black text-white leading-none">8+</span>
            <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest mt-1 text-center">
              Years of <br /> Excellence
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
