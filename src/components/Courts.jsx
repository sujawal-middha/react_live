import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaGavel } from 'react-icons/fa';

const Courts = () => {
  return (
    <section id="courts" className="py-24 bg-navy-light/40 border-y border-glass-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Courts of Practice</h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {lawyerData.courts.map((court, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel px-6 py-4 flex items-center gap-3 hover:bg-blue-accent/10 hover:border-blue-400/50 transition-colors cursor-default border border-glass-border/50"
            >
              <FaGavel className="text-blue-500" />
              <span className="text-gray-200 font-medium tracking-wide">{court}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courts;
