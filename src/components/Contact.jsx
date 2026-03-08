import React from 'react';
import { motion } from 'framer-motion';
import { lawyerData } from '../data/lawyerData';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-dark/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-12 text-center max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-blue-900/40 to-navy-light/40 border-blue-500/20"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Need Legal Assistance?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your legal matter and receive professional legal advice tailored to your needs.
          </p>
          <button className="btn-primary text-lg px-8 py-4 px-10">
            Book Consultation Now
          </button>
        </motion.div>
      </div>

      {/* Contact Grid Section */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-serif">Get In Touch</h3>
            <p className="text-gray-400 mb-10 text-lg">
              Reach out for legal representation, advisory, or general inquiries. Our office is open for consultations by appointment.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 glass-panel flex items-center justify-center text-blue-400 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200">Phone</h4>
                  <p className="text-blue-400 mt-1">{lawyerData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 glass-panel flex items-center justify-center text-blue-400 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200">Email</h4>
                  <p className="text-gray-400 mt-1">{lawyerData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 glass-panel flex items-center justify-center text-blue-400 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200">Office Address</h4>
                  <p className="text-gray-400 mt-1 whitespace-pre-line leading-relaxed">{lawyerData.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 glass-panel flex items-center justify-center text-blue-400 group-hover:bg-blue-accent group-hover:text-white transition-colors">
                  <FaClock />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200">Office Hours</h4>
                  <p className="text-gray-400 mt-1 whitespace-pre-line leading-relaxed">{lawyerData.contact.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-navy-light/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-navy-light/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full bg-navy-light/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Legal Matter / Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-navy-light/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Briefly describe your legal issue..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
