import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';

const PracticeAreas = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="practice" className="py-32 relative aura-bg">
      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-black text-obsidian leading-tight">Practice Areas</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-vibrant to-cyan-vibrant mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {lawyerData.practiceAreas.map((area) => (
            <motion.div 
              key={area.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card p-10 group relative overflow-hidden"
            >
              {/* Card Aura */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/20 flex items-center justify-center mb-8 border border-indigo-500/10 group-hover:rotate-6 transition-transform duration-500">
                <area.icon className="text-3xl text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-obsidian mb-4 group-hover:text-aura transition-all duration-300">
                {area.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed group-hover:text-obsidian transition-colors duration-300">
                {area.description}
              </p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
