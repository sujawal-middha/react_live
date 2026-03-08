import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-navy/80 selection:bg-blue-400 selection:text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyerData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-6 border-b border-glass-border pb-4">
                <div className="w-12 h-12 bg-blue-dark/20 text-blue-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <FaGraduationCap />
                </div>
                {cert.year && (
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-accent/20 text-blue-300 rounded-full">
                    {cert.year}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-gray-400 mb-6 font-medium">
                {cert.institution}
              </p>

              <button className="flex items-center gap-2 text-sm text-blue-400 font-semibold hover:text-white transition-colors group/btn">
                <FaCheckCircle className="group-hover/btn:text-green-400 transition-colors" />
                <span>Verify Credential</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
