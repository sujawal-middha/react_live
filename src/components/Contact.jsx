import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const SuccessMessage = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-10"
    >
      <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
      <h3 className="text-3xl font-black text-obsidian mb-4">Request Received!</h3>
      <p className="text-slate-600 font-medium">
        Thank you for reaching out. We will contact you shortly to schedule your consultation.
      </p>
      <button 
        onClick={() => setIsSubmitted(false)}
        className="mt-8 text-indigo-600 font-bold hover:underline"
      >
        Send another message
      </button>
    </motion.div>
  );

  return (
    <section id="contact" className="py-32 relative overflow-hidden aura-bg">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="glass-card p-16 text-center max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-indigo-50/80 via-white/80 to-cyan-50/80 border-indigo-500/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 opacity-50"></div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black text-obsidian mb-8 leading-tight">Need Legal <span className="text-aura">Assistance?</span></h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
              Schedule a consultation to discuss your legal matter and receive professional legal advice tailored to your specific needs.
            </p>
            <button 
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-aura text-xl px-12 py-5 shadow-indigo-500/40"
            >
              Book Consultation Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Grid Section */}
      <div className="container mx-auto px-6 md:px-12" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Communication</span>
            <h3 className="text-5xl font-black text-obsidian mb-10 leading-tight">Get In <span className="text-aura">Touch</span></h3>
            <p className="text-slate-500 mb-12 text-lg leading-relaxed">
              Reach out for legal representation, advisory, or general inquiries. Our office is open for consultations by appointment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { icon: FaPhoneAlt, label: 'Phone', value: lawyerData.contact.phone, color: 'indigo' },
                { icon: FaEnvelope, label: 'Email', value: lawyerData.contact.email, color: 'cyan' },
                { icon: FaMapMarkerAlt, label: 'Office Address', value: lawyerData.contact.address, color: 'indigo' },
                { icon: FaClock, label: 'Office Hours', value: lawyerData.contact.hours, color: 'cyan' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 border border-white/5">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className={`text-obsidian font-bold leading-relaxed ${item.label.includes('Address') || item.label.includes('Hours') ? 'whitespace-pre-line text-sm' : 'text-lg'}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 relative overflow-hidden"
          >
            {/* Subtle card glow */}
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <SuccessMessage key="success" />
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-3xl font-black text-obsidian mb-10 leading-tight">Send a <span className="text-aura">Message</span></h3>
                  <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-700 transition-colors">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-indigo-50/50 border border-indigo-500/10 rounded-xl px-5 py-4 text-obsidian focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all font-medium placeholder:text-slate-400"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-700 transition-colors">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-indigo-50/50 border border-indigo-500/10 rounded-xl px-5 py-4 text-obsidian focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all font-medium placeholder:text-slate-400"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-700 transition-colors">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-indigo-50/50 border border-indigo-500/10 rounded-xl px-5 py-4 text-obsidian focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all font-medium placeholder:text-slate-400"
                        placeholder="+91 00000 00000"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-3 group-focus-within:text-indigo-700 transition-colors">Message</label>
                      <textarea 
                        required
                        rows="4"
                        className="w-full bg-indigo-50/50 border border-indigo-500/10 rounded-xl px-5 py-4 text-obsidian focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all font-medium placeholder:text-slate-400 resize-none"
                        placeholder="Describe your legal matter..."
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className={`w-full btn-aura py-5 text-xl tracking-wide ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
