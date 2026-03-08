import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-navy-light/20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Legal Expertise</h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {lawyerData.expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-center border-l-4 border-l-transparent hover:border-l-blue-500"
            >
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.category}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
