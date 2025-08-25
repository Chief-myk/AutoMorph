import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaCopy, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { IoLogoInstagram } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [copyStatus, setCopyStatus] = useState({ email: false, phone: false });
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const contactInfo = {
    email: 'mayankmittal1311@gmail.com',
    phone: '+91 990538802',
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/mohit776', name: 'GitHub', color: 'text-gray-300 hover:text-white' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/mohitaggarwal551', name: 'LinkedIn', color: 'text-blue-400 hover:text-blue-300' },
    { icon: <IoLogoInstagram />, url: 'https://www.instagram.com/mohit___551/', name: 'Instagram', color: 'text-pink-400 hover:text-pink-300' },
  ];

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [type]: true });
    setTimeout(() => setCopyStatus({ ...copyStatus, [type]: false }), 2000);
  };

  return (
    <section id='contact' className="relative overflow-hidden">
      {/* Enhanced Ripple Grid Background */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/90 z-0"></div>

      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm text-gray-300 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Contact Information - Enhanced */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Contact Our Team
              </h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="p-2 sm:p-3 rounded-lg bg-gray-800/50 group-hover:bg-purple-900/30 transition-all duration-300 mr-3 sm:mr-4">
                    <FaEnvelope className="text-lg sm:text-xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400">Email</p>
                    <div className="flex items-center">
                      <span className="text-white text-sm sm:text-base truncate">{contactInfo.email}</span>
                      <button
                        onClick={() => copyToClipboard(contactInfo.email, 'email')}
                        className="ml-2 sm:ml-3 p-1 sm:p-2 rounded-full hover:bg-gray-700/50 transition-all duration-200 hover:scale-110 flex-shrink-0"
                        aria-label="Copy email"
                        data-tooltip={copyStatus.email ? "Copied!" : "Copy"}
                      >
                        <FaCopy className={`text-xs sm:text-sm ${copyStatus.email ? 'text-green-400' : 'text-gray-400 hover:text-white'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-2 sm:p-3 rounded-lg bg-gray-800/50 group-hover:bg-blue-900/30 transition-all duration-300 mr-3 sm:mr-4">
                    <FaPhone className="text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                    <div className="flex items-center">
                      <span className="text-white text-sm sm:text-base">{contactInfo.phone}</span>
                      <button
                        onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                        className="ml-2 sm:ml-3 p-1 sm:p-2 rounded-full hover:bg-gray-700/50 transition-all duration-200 hover:scale-110 flex-shrink-0"
                        aria-label="Copy phone number"
                        data-tooltip={copyStatus.phone ? "Copied!" : "Copy"}
                      >
                        <FaCopy className={`text-xs sm:text-sm ${copyStatus.phone ? 'text-green-400' : 'text-gray-400 hover:text-white'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg transition-all duration-300 ${link.color} bg-gray-800/50 hover:bg-gray-700/70`}
                    aria-label={link.name}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                      {link.icon}
                    </span>
                    <span className="font-medium text-sm sm:text-base">{link.name}</span>
                    <span className={`absolute right-3 sm:right-4 transition-all duration-300 ${hoveredSocial === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Enhanced */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Quick Links
              </h3>
              <ul className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-col gap-2 sm:gap-3">
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About', to: '/about' },
                  { name: 'Our Shop', to: '/OurShop' },
                  { name: 'Try Us', to: '/TryUs' },
                  { name: 'Privacy Policy', to: '/' },
                  { name: 'Terms Of Service', to: '/' },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="flex items-center group text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                      <span className="border-b border-transparent group-hover:border-blue-400 transition-all duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright - Enhanced */}
          <div className="mt-8 pt-4 border-t border-gray-800/50 text-center">
            <div className="flex flex-col items-center">
              <p className="text-xs sm:text-sm text-gray-500">
                © {new Date().getFullYear()} AutoMorph. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-1 sm:mt-2">
                Crafted with passion for automotive innovation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;