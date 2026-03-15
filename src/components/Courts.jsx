import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaGavel } from 'react-icons/fa';

const Courts = () => {
  return (
    <section id="courts" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Qualified To Practice</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Courts of Practice</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {lawyerData.courts.map((court, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-8 py-5 bg-indigo-500/5 backdrop-blur-md border border-indigo-500/20 rounded-2xl flex items-center gap-4 group hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <FaGavel />
              </div>
              <span className="text-slate-200 font-bold tracking-wide">{court}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courts;
