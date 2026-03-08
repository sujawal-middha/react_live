import React from 'react';
import { motion } from 'framer-motion';
import { FaScaleUnbalanced } from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Icon */}
          <FaScaleUnbalanced className="absolute -bottom-10 -right-10 text-[200px] text-white/5" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I am a practicing advocate with extensive experience in litigation, legal advisory, and dispute resolution. Over the years I have represented individuals, businesses, and organizations in a wide range of legal matters.
            </p>
            <p>
              My practice focuses on delivering clear legal guidance, protecting my clients' rights, and ensuring efficient resolution of disputes through court representation, negotiation, and legal strategy.
            </p>
            <div className="mt-8 pt-8 border-t border-glass-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-blue-400">500+</h4>
                <p className="text-sm text-gray-400 mt-1">Cases Handled</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-400">150+</h4>
                <p className="text-sm text-gray-400 mt-1">Corporate Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-400">95%</h4>
                <p className="text-sm text-gray-400 mt-1">Success Rate</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-400">24/7</h4>
                <p className="text-sm text-gray-400 mt-1">Legal Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
