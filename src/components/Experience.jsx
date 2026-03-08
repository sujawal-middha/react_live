import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-glass-border"></div>

          <div className="space-y-12">
            {lawyerData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-4 top-1 w-8 h-8 rounded-full bg-navy-light border-4 border-blue-accent flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                <div className="glass-panel p-6 md:p-8 relative group hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                      <h4 className="text-lg text-blue-400 font-medium mt-1">{exp.firm}</h4>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-900/40 text-blue-300 text-sm font-semibold border border-blue-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-gray-400">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1.5 font-bold text-[10px]">♦</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
