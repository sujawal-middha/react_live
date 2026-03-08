import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy-light/20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Client Success Stories</h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {lawyerData.testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel p-10 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-4xl text-blue-500/20 absolute top-8 left-8 group-hover:text-blue-500/40 transition-colors" />

              <p className="text-gray-300 leading-relaxed text-lg italic mb-8 relative z-10 pt-4">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-glass-border pt-6">
                <div className="w-12 h-12 bg-blue-dark/50 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {test.client.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">{test.client}</h4>
                  <p className="text-blue-400 text-sm font-medium">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
