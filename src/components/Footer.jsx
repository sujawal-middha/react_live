import React from 'react';
import { Link } from 'react-scroll';
import { lawyerData } from '../data/lawyerData';

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-glass-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              {lawyerData.personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-6">
              {lawyerData.personalInfo.subtext}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 nav-links">
              {['Home', 'About', 'Practice Areas', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(' ', '')}
                    smooth={true}
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{lawyerData.contact.phone}</li>
              <li>{lawyerData.contact.email}</li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="border-t border-glass-border pt-8 text-center text-sm text-gray-500">
          <p className="mb-4 max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. Viewing this website does not establish an attorney-client relationship. Past results do not guarantee similar outcomes in future matters.
          </p>
          <p>
            &copy; {new Date().getFullYear()} {lawyerData.personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
