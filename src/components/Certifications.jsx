import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaGraduationCap, FaShieldHalved } from 'react-icons/fa6';

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative aura-bg">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Credentials</span>
          <h2 className="text-5xl md:text-6xl font-black text-obsidian">Education & Licensing</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyerData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group relative p-10 overflow-hidden"
            >
               {/* Animated highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-vibrant to-cyan-vibrant scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  {cert.title.includes('Bar') ? <FaShieldHalved /> : <FaGraduationCap />}
                </div>
                {cert.year && (
                   <span className="text-[10px] font-black px-4 py-1.5 bg-obsidian/5 text-indigo-600 rounded-full border border-obsidian/5 uppercase tracking-widest">
                    {cert.year}
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-black text-obsidian mb-3 leading-tight group-hover:text-aura transition-all">
                {cert.title}
              </h3>
              <p className="text-slate-500 font-bold text-sm tracking-wide">
                {cert.institution}
              </p>

              {cert.verifyUrl && (
                <div className="mt-10 flex items-center gap-3">
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black uppercase tracking-[0.2em] text-indigo-600 hover:text-obsidian transition-colors flex items-center gap-2 group/btn"
                  >
                    Verify Link <span className="translate-x-0 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
