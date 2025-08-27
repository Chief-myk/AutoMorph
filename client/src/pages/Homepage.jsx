import React from 'react';
import Particles from '../components/Particle.jsx';
import CarModel from '../components/CarModel.jsx';
import TrustedByBrands from '../components/TrustByBrands.jsx';
import WhyCarAI from '../components/WhyCarAI.jsx';
import Card from '../components/Card.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = () => {

      const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

    return (
        <>
            <div className='bg-black text-white w-full min-h-screen flex flex-col items-center justify-start relative overflow-x-hidden'>
                {/* Particle Background - covers entire homepage */}
                <div className='fixed inset-0 z-0 pointer-events-none'>
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 300}
                        particleSpread={typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 10}
                        speed={0.1}
                        particleBaseSize={typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 100}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>

                {/* Main Content Section */}
                <div className='w-full min-h-screen flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-10 md:py-16 relative z-10 mt-0 lg:mt-6'>
                    {/* Left Content */}
                    <div className='flex flex-col md:mt-10 justify-center w-full lg:w-1/2 h-full lg:pl-8 xl:pl-16 pr-0 lg:pr-10 order-2 lg:order-1 text-center lg:text-left'>
                        <div className=''>
                            
                          {isAuthenticated && user ? ( <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#26C6FF] via-[#A0006D] to-[#FF6B6B]'>
                               Hey, {user.name.split(' ')[0]} !
                            </h1>): 
( <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600'>
                           
                            </h1>)

                          }


                            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
                                Welcome to AutoMorph
                            </h1>
                            <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto lg:mx-0'></div>
                        </div>
                        <div className='my-4 md:my-6 w-full lg:w-4/5 mx-auto lg:mx-0'>
                            <p className='text-base sm:text-lg text-gray-300 leading-relaxed'>
                                Transform your vehicle with <span className='font-semibold text-white'>intelligent upgrade recommendations</span>. Upload your car's photo and discover <span className='font-semibold text-white'>personalized enhancements</span> powered by cutting-edge AI technology.
                            </p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-6 md:mt-8'>
                            <button className='px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1'>
                                <Link to={"/TryUs"}>
                                    Get Started
                                </Link>
                            </button>
                            <button className='px-6 py-3 sm:px-8 sm:py-3 border-2 border-gray-400 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 hover:border-white group'>
                                <span className='group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400'>
                                    Watch Demo
                                </span>
                            </button>
                        </div>
                        <div className='mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4'>
                            <div className='flex -space-x-2'>
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-gray-800'></div>
                                ))}
                            </div>
                            <p className='text-sm text-gray-400'>
                                Join <span className='text-white'>10,000+</span> car enthusiasts transforming their rides
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Adjusted for better visibility on laptop screens */}
                    <div className='w-full lg:w-1/2 h-72 sm:h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center pr-0 lg:pr-8 xl:pr-16 mb-8 lg:mb-0 order-1 lg:order-2'>
                        <div className='relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'>
                                <div className='absolute bottom-0 left-0 right-0 h-12 lg:h-16 bg-gradient-to-t from-gray-900 to-transparent z-10'></div>
                                <div className='absolute bottom-4 left-4 lg:bottom-6 lg:left-6 z-20 px-3 py-1 lg:px-4 lg:py-2 bg-black/50 backdrop-blur-sm rounded-full border border-gray-600/50 flex items-center'>
                                    <div className='w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-blue-500 mr-2 animate-pulse'></div>
                                    <span className='text-xs font-medium text-gray-300'>3D Interactive Model</span>
                                </div>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='w-full h-full flex items-center justify-center scale-90 md:scale-100'>
                                        <CarModel />
                                    </div>
                                </div>
                                <div
                                    className='absolute inset-0 pointer-events-none'
                                    style={{
                                        background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <Card />
            </div>
            <WhyCarAI />
            <TrustedByBrands />
            {/* Footer would go here */}
        </>
    );
};

export default Homepage;