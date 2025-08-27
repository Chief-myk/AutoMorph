import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { useAuth0 } from "@auth0/auth0-react";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//---------------------------------------
   const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

//----------------------------------------

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/OurShop", label: "Shop" },
    { path: "/TryUs", label: "Try us" },
    { path: "/community", label: "Community" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="absolute w-[95%] max-w-[1400px] left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 bg-gradient-to-r from-[#101225] via-[#0D0F1A] to-[#101225] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between rounded-2xl sm:rounded-3xl border border-[#23263a] shadow-xl shadow-[#26C6FF]/10 hover:shadow-[#26C6FF]/30 transition-all duration-300 backdrop-blur-md overflow-visible z-50">

        {/* Glow/blur background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#26C6FF]/10 via-[#A0006D]/10 to-[#FF6B6B]/10 blur-xl opacity-80"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#26C6FF]/20 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#A0006D]/20 rounded-full blur-2xl opacity-60"></div>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer select-none">
          <div className="bg-gradient-to-br from-[#26C6FF] to-[#A0006D] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transform group-hover:rotate-[20deg] transition-transform duration-300 shadow-[0_0_18px_#26C6FF] hover:shadow-[0_0_25px_#A0006D] border-2 border-[#26C6FF]/40">
            <span className="text-black text-xl sm:text-2xl font-bold drop-shadow">⚡</span>
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-white relative">
            <Link to={"/"}>
              AutoMorph
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#26C6FF] to-[#A0006D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6 lg:space-x-10 text-base font-semibold relative">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`relative px-2 py-1 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C6FF]/60 ${activeLink === item ? 'text-[#26C6FF] bg-[#1a1d2e]/60 shadow-md shadow-[#26C6FF]/10' : 'hover:text-[#A0006D]'
                }`}
              onMouseEnter={() => setActiveLink(item)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#26C6FF] to-[#A0006D] transform scale-x-0 ${activeLink === item ? 'scale-x-100' : ''
                  } transition-transform duration-300 origin-left rounded`}
                style={{
                  boxShadow: activeLink === item ? '0 0 12px 2px #26C6FF55' : 'none',
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
        <div className="hidden md:flex items-center">
       
      { isAuthenticated ? (   <button onClick={logout} className="relative cursor-pointer px-5 py-2 sm:px-6 sm:py-2 rounded-xl font-bold group overflow-hidden shadow-md shadow-[#26C6FF]/10 border border-[#23263a] bg-gradient-to-r from-[#1C1F2A] to-[#23263a] hover:from-[#23263a] hover:to-[#1C1F2A] transition-all duration-300">
              <span className="relative z-10 text-white group-hover:text-[#26C6FF] transition-colors duration-300 text-sm sm:text-base">
                Log out
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
            </button>)
            

:
       ( <>
             <button onClick={login} className="relative cursor-pointer mr-3 px-5 py-2 sm:px-6 sm:py-2 rounded-xl font-bold group overflow-hidden shadow-md shadow-[#26C6FF]/10 border border-[#23263a] bg-gradient-to-r from-[#1C1F2A] to-[#23263a] hover:from-[#23263a] hover:to-[#1C1F2A] transition-all duration-300">
              <span className="relative z-10 text-white group-hover:text-[#26C6FF] transition-colors duration-300 text-sm sm:text-base">
              Login
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
            </button>  <button onClick={signup} className="relative cursor-pointer px-5 py-2 sm:px-6 sm:py-2 rounded-xl font-bold group overflow-hidden shadow-md shadow-[#26C6FF]/10 border border-[#23263a] bg-gradient-to-r from-[#1C1F2A] to-[#23263a] hover:from-[#23263a] hover:to-[#1C1F2A] transition-all duration-300">
              <span className="relative z-10 text-white group-hover:text-[#26C6FF] transition-colors duration-300 text-sm sm:text-base">
              Sign up
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
            
       </>) }
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C6FF]/60"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* CSS for pulse animation */}
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

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-[#0D0F1A] bg-opacity-95 backdrop-blur-md z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#26C6FF]/60"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          {/* Mobile Navigation Links */}
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-2xl font-semibold text-white hover:text-[#26C6FF] transition-colors duration-300 py-2"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Sign In Button */}
          <Link to={"/signIn"} onClick={toggleMobileMenu}>
            <button className="relative cursor-pointer px-8 py-3 rounded-xl font-bold group overflow-hidden shadow-md shadow-[#26C6FF]/10 border border-[#23263a] bg-gradient-to-r from-[#1C1F2A] to-[#23263a] hover:from-[#23263a] hover:to-[#1C1F2A] transition-all duration-300 mt-4">
              <span className="relative z-10 text-white group-hover:text-[#26C6FF] transition-colors duration-300">
                Sign In
              </span>
              <span className="absolute inset-0 bg-[#1C1F2A] rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#26C6FF]/30 via-[#A0006D]/20 to-[#FF6B6B]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 18px 2px #26C6FF33',
                }}
              ></span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;