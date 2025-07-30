import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const items = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '/shop' },
    { label: 'About', link: '/about' },
    { label: 'Community', link: '/community' },
  ];

  return (
    <nav className="absolute w-[95%] ml-8 mt-4 bg-gradient-to-r from-[#101225] via-[#0D0F1A] to-[#101225] text-white px-8 py-4 flex items-center justify-between rounded-3xl border border-[#23263a] shadow-xl shadow-[#26C6FF]/10 hover:shadow-[#26C6FF]/30 transition-all duration-300 backdrop-blur-md overflow-visible z-50">
      
      {/* Glow/blur background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#26C6FF]/10 via-[#A0006D]/10 to-[#FF6B6B]/10 blur-xl opacity-80"></div>
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#26C6FF]/20 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#A0006D]/20 rounded-full blur-2xl opacity-60"></div>
      </div>

      {/* Logo */}
      <div className="flex items-center space-x-2 group cursor-pointer select-none">
        <div className="bg-gradient-to-br from-[#26C6FF] to-[#A0006D] rounded-full w-10 h-10 flex items-center justify-center transform group-hover:rotate-[20deg] transition-transform duration-300 shadow-[0_0_18px_#26C6FF] hover:shadow-[0_0_25px_#A0006D] border-2 border-[#26C6FF]/40">
          <span className="text-black text-2xl font-bold drop-shadow">⚡</span>
        </div>
        <span className="text-2xl font-extrabold tracking-wide text-white relative">
          AutoMorph
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#26C6FF] to-[#A0006D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10 text-base font-semibold relative">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.link}
            className={`relative px-2 py-1 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C6FF]/60 ${
              activeLink === item.label ? 'text-[#26C6FF] bg-[#1a1d2e]/60 shadow-md shadow-[#26C6FF]/10' : 'hover:text-[#A0006D]'
            }`}
            onMouseEnter={() => setActiveLink(item.label)}
            onMouseLeave={() => setActiveLink(null)}
          >
            <span className="relative z-10">{item.label}</span>
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#26C6FF] to-[#A0006D] transform scale-x-0 ${
                activeLink === item.label ? 'scale-x-100' : ''
              } transition-transform duration-300 origin-left rounded`}
              style={{
                boxShadow: activeLink === item.label ? '0 0 12px 2px #26C6FF55' : 'none',
              }}
            ></span>
            <span
              className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.18))',
                transform: 'scaleY(-1)',
                height: '60%',
                top: '100%',
              }}
            ></span>
          </Link>
        ))}
      </div>

      {/* Sign In Button */}
      <div className="flex items-center">
        <button className="relative px-6 py-2 rounded-xl font-bold group overflow-hidden shadow-md shadow-[#26C6FF]/10 border border-[#23263a] bg-gradient-to-r from-[#1C1F2A] to-[#23263a] hover:from-[#23263a] hover:to-[#1C1F2A] transition-all duration-300">
          <span className="relative z-10 text-white group-hover:text-[#26C6FF] transition-colors duration-300">
            <Link to="/signIn">Sign In</Link>
          </span>
          <span className="absolute inset-0 bg-[#1C1F2A] rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-[#26C6FF]/30 via-[#A0006D]/20 to-[#FF6B6B]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: '0 0 18px 2px #26C6FF33',
            }}
          ></span>
          <span
            className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#26C6FF] group-hover:border-opacity-60 transition-all duration-300"
            style={{
              boxShadow: 'inset 0 0 12px #26C6FF22',
              animation: 'pulse 2s infinite',
            }}
          ></span>
        </button>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: inset 0 0 12px #26C6FF22;
            }
            50% {
              box-shadow: inset 0 0 18px #26C6FF66;
            }
            100% {
              box-shadow: inset 0 0 12px #26C6FF22;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
