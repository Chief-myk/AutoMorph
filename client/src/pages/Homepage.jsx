import Particles from '../components/Particle.jsx';
import CarModel from '../components/CarModel.jsx';
import React from 'react';
import TrustedByBrands from '../components/TrustByBrands.jsx';
import WhyCarAI from '../components/WhyCarAI.jsx';
import Navbar from '../components/Navbar.jsx';

const Homepage = () => {
    return (
        <>
            <div className='bg-black text-white w-full min-h-screen flex flex-col items-center justify-start relative'>
                {/* Particle Background - covers entire homepage */}
                <div className='fixed inset-0 z-0 pointer-events-none'>
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={300}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>

                {/* Main Content Section */}
                <div className='w-full h-screen flex flex-row justify-between p-10 relative z-10 mt-6'>
                    {/* Left Content (unchanged) */}
                    <div className='flex flex-col justify-center w-1/2 h-full pl-16 pr-10'>
                        <div className='mb-8'>
                            <h1 className='text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
                                Welcome to AutoMorph
                            </h1>
                            <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
                        </div>
                        <div className='my-6 w-4/5'>
                            <p className='text-lg text-gray-300 leading-relaxed'>
                                Transform your vehicle with <span className='font-semibold text-white'>intelligent upgrade recommendations</span>. Upload your car's photo and discover <span className='font-semibold text-white'>personalized enhancements</span> powered by cutting-edge AI technology.
                            </p>
                        </div>
                        <div className='flex space-x-6 mt-8'>
                            <button className='px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1'>
                                Get Started
                            </button>
                            <button className='px-8 py-3 border-2 border-gray-400 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 hover:border-white group'>
                                <span className='group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400'>
                                    Watch Demo
                                </span>
                            </button>
                        </div>
                        <div className='mt-12 flex items-center space-x-4'>
                            <div className='flex -space-x-2'>
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-gray-800'></div>
                                ))}
                            </div>
                            <p className='text-sm text-gray-400'>
                                Join <span className='text-white'>10,000+</span> car enthusiasts transforming their rides
                            </p>
                        </div>
                    </div>

                {/* Enhanced Right side - 3D car model section */}
                <div className='w-1/2 h-full flex items-center justify-center pr-16'>
                    <div className='relative w-full h-4/5 rounded-2xl overflow-hidden'>
                        {/* Glass morphism effect container */}
                        <div className='absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'>
                            {/* Animated floating platform */}
                            <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent z-10'></div>
                            
                            {/* Floating info badge */}
                            <div className='absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-gray-600/50 flex items-center'>
                                <div className='w-3 h-3 rounded-full bg-blue-500 mr-2 animate-pulse'></div>
                                <span className='text-xs font-medium text-gray-300'>3D Interactive Model</span>
                            </div>
                            
                            {/* Car model with enhanced lighting */}
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <CarModel />
                            </div>
                            
                            {/* Subtle radial gradient overlay */}
                            <div className='absolute inset-0 pointer-events-none' style={{
                                background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
        <WhyCarAI/>
          <TrustedByBrands/></div>
    );
}

export default Homepage;