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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="practice" className="py-24 bg-navy-light/30 border-y border-glass-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Practice Areas</h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
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
              className="glass-panel p-8 group hover:bg-blue-accent/10 transition-colors duration-300 cursor-default"
            >
              <div className="w-14 h-14 bg-navy/50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300 border border-glass-border">
                <area.icon className="text-2xl text-blue-accent group-hover:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{area.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
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
