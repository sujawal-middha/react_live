import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaQuoteRight } from 'react-icons/fa6';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
       {/* Background effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <span className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Feedback</span>
          <h2 className="text-5xl md:text-6xl font-black text-white">Client Voices</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {lawyerData.testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 relative group"
            >
              <FaQuoteRight className="text-6xl text-indigo-500/10 absolute top-12 right-12 group-hover:text-indigo-400/20 transition-colors duration-500" />
              
              <p className="text-xl text-slate-200 font-medium leading-relaxed italic mb-10 relative z-10">
                "{test.quote}"
              </p>
              
              <div className="flex items-center gap-6 border-t border-white/5 pt-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-500/10">
                  {test.client.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-black text-white tracking-wide">{test.client}</h4>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="w-2 h-2 rounded-full bg-green-400"></span>
                     <span className="text-[10px] text-indigo-300 font-black uppercase tracking-widest">Verified Client</span>
                  </div>
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
