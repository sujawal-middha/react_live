import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import Experience from '../components/Experience';
import Expertise from '../components/Expertise';
import Courts from '../components/Courts';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <section className="bg-navy-light/10">
          <Experience />
        </section>
        <Expertise />
        <Courts />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
