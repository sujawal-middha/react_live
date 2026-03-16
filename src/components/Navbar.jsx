import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Practice', to: 'practice' },
    { name: 'Experience', to: 'experience' },
    { name: 'Testimonials', to: 'testimonials' },
  ];

  return (
    <div className="fixed w-full top-6 z-50 px-4 flex justify-center">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`flex items-center justify-between px-8 py-3 max-w-6xl w-full glass-pill transition-all duration-500 ${scrolled ? 'py-2 scale-[0.98] bg-white/90 shadow-lg' : 'bg-white/40'}`}
      >
        {/* Logo */}
        <Link to="hero" smooth={true} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-vibrant to-cyan-vibrant flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
            {lawyerData.personalInfo.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-obsidian leading-none">
              {lawyerData.personalInfo.name}
            </span>
            <span className="text-[10px] text-indigo-600 font-medium uppercase tracking-widest mt-0.5">
              Advocate
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-100}
                  className="text-slate-600 hover:text-obsidian cursor-pointer transition-all text-sm font-semibold relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-vibrant transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="contact" smooth={true} offset={-100}>
            <button className="px-5 py-2.5 rounded-full bg-obsidian text-white font-black text-[10px] uppercase tracking-widest hover:bg-indigo-vibrant hover:scale-105 transition-all duration-300 shadow-md">
              Consult Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Btn */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-2xl text-obsidian p-2 hover:bg-obsidian/5 rounded-full transition-colors"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 glass-card p-8 md:hidden flex flex-col items-center gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-100}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-indigo-600 font-bold text-xl cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-100} onClick={() => setIsOpen(false)} className="w-full">
              <button className="btn-aura w-full">Book Consultation</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
