import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { lawyerData } from '../data/lawyerData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Practice Areas', to: 'practice' },
    { name: 'Experience', to: 'experience' },
    { name: 'Testimonials', to: 'testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-dark to-blue-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
            {lawyerData.personalInfo.initials}
          </div>
          <span className="text-xl font-bold tracking-wide text-white hidden sm:block">
            {lawyerData.personalInfo.name}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-primary text-sm py-2 px-5">
              Book Consultation
            </button>
          </Link>
        </div>

        {/* Mobile Menu Btn */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-200">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-panel flex flex-col items-center py-6 gap-6 transition-transform duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            onClick={() => setIsOpen(false)}
            className="text-gray-200 hover:text-blue-400 font-medium text-lg cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
        <Link to="contact" smooth={true} onClick={() => setIsOpen(false)}>
          <button className="btn-primary w-full">Book Consultation</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
