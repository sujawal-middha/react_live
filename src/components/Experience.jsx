import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Journey</span>
          <h2 className="text-5xl md:text-6xl font-black text-obsidian leading-tight">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-vibrant to-cyan-vibrant mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Vertical Line (gradient) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/5 via-indigo-500/20 to-indigo-500/5 -translate-x-1/2"></div>

          <div className="space-y-24">
            {lawyerData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: 'spring' }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot (Aura version) */}
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-vibrant -translate-x-1/2 shadow-aura border-4 border-white z-10">
                   <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0">
                  <div className={`glass-card p-10 relative group ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 text-indigo-600 text-xs font-black uppercase tracking-widest mb-6 border border-indigo-500/10">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-black text-obsidian leading-tight mb-2 group-hover:text-aura transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-slate-600 font-bold mb-6">{exp.firm}</h4>
                    
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer Side (for desktop) */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
