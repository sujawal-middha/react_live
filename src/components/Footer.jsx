import React from 'react';
import { Link } from 'react-scroll';
import { lawyerData } from '../data/lawyerData';

const Footer = () => {
  return (
    <footer className="bg-obsidian border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-indigo-900/10 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
              {lawyerData.personalInfo.name}
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8 font-medium">
              Providing strategic legal expertise and dedicated courtroom representation. Empowering clients through reliable legal solutions.
            </p>
            <div className="flex gap-4">
               {/* Decorative social placeholders */}
               {[1, 2, 3, 4].map(btn => (
                 <div key={btn} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-vibrant hover:text-white hover:scale-110 transition-all cursor-pointer">
                    <div className="w-1 h-1 rounded-full bg-current"></div>
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-indigo-400 uppercase tracking-[0.25em] mb-10">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Practice', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    offset={-100}
                    className="text-slate-300 hover:text-white font-bold transition-all cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-indigo-500 group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-indigo-400 uppercase tracking-[0.25em] mb-10">Direct Contact</h4>
            <ul className="space-y-6 text-slate-300 font-bold">
              <li className="flex flex-col gap-1">
                 <span className="text-[10px] text-slate-500 uppercase">Call for advice</span>
                 <span className="hover:text-indigo-400 transition-colors cursor-pointer">{lawyerData.contact.phone}</span>
              </li>
              <li className="flex flex-col gap-1">
                 <span className="text-[10px] text-slate-500 uppercase">Send email</span>
                 <span className="hover:text-indigo-400 transition-colors cursor-pointer">{lawyerData.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="border-t border-white/5 pt-16 flex flex-col items-center">
          <div className="glass-card px-10 py-8 max-w-5xl mb-12 border-indigo-500/10">
            <p className="text-xs text-slate-400 leading-relaxed text-center font-medium">
              <span className="text-indigo-400 font-black uppercase tracking-widest block mb-4">Legal Disclaimer</span>
              The information provided on this website is for general informational purposes only and does not constitute legal advice. Viewing this website does not establish an attorney-client relationship. Past results do not guarantee similar outcomes in future matters.
            </p>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} {lawyerData.personalInfo.name} &bull; Powered by Antigravity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
