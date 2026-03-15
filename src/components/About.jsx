import React from 'react';
import { motion } from 'framer-motion';
import { FaScaleUnbalanced } from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -z-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              A Legacy of <span className="text-aura">Justice</span> <br /> & Legal Strategy.
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-indigo-vibrant to-cyan-vibrant rounded-full mb-10"></div>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              I am a practicing advocate with extensive experience in litigation, legal advisory, and dispute resolution. Over the years I have represented individuals, businesses, and organizations in a wide range of legal matters.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              My practice focuses on delivering clear legal guidance, protecting my clients' rights, and ensuring efficient resolution of disputes through court representation, negotiation, and legal strategy.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">500+</span>
                <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest mt-2">Cases Handled</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">95%</span>
                <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest mt-2">Success Rate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-1 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="bg-obsidian/80 backdrop-blur-3xl p-12 rounded-2xl relative overflow-hidden">
               <FaScaleUnbalanced className="absolute -bottom-10 -right-10 text-[250px] text-indigo-500/5 rotate-12" />
               <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Strategic Approach</h3>
               <ul className="space-y-6 relative z-10">
                 {[
                   { title: 'Case Analysis', text: 'Thorough research and strategic planning for every matter.' },
                   { title: 'Client Centric', text: 'Prioritizing clear communication and client objectives.' },
                   { title: 'Result Oriented', text: 'Focused on achieving the most favorable outcomes swiftly.' }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                       <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                     </div>
                     <div>
                       <h4 className="text-white font-bold">{item.title}</h4>
                       <p className="text-sm text-slate-400 mt-1">{item.text}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
