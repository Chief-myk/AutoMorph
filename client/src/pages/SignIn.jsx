import React, { useState } from 'react';
import Hyperspeed from '../components/HyperSpeed';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { FaLock, FaEnvelope, FaUser, FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className='bg-black text-white w-full min-h-screen relative overflow-hidden'>
      {/* Background Animation */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'deepDistortion',
            length: 400,
            roadWidth: 18,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 50,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.05, 400 * 0.15],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.2, 0.2],
            carFloorSeparation: [0.05, 1],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xFF322F, 0xA33010, 0xA81508],
              rightCars: [0xFDFDF0, 0xF3DEA0, 0xE2BB88],
              sticks: 0xFDFDF0,
            }
          }}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex items-center justify-center min-h-screen pt-12'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-md bg-gradient-to-br from-gray-900/80 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 shadow-xl'
        >
          {/* Tabs */}
          <div className='flex border-b border-gray-800'>
            <button
              onClick={() => setIsSignIn(true)}
              className={`flex-1 py-4 font-medium text-center transition-all duration-300 ${isSignIn ? 'text-white bg-gradient-to-r from-purple-600/30 to-blue-600/30' : 'text-gray-400 hover:text-white'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`flex-1 py-4 font-medium text-center transition-all duration-300 ${!isSignIn ? 'text-white bg-gradient-to-r from-purple-600/30 to-blue-600/30' : 'text-gray-400 hover:text-white'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='p-8'>
            {isSignIn ? (
              <motion.div
                key="signin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className='text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent'>
                  Welcome Back
                </h2>
                
                <div className='space-y-5'>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <FaEnvelope className='text-gray-400' />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Email Address'
                      className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400'
                      required
                    />
                  </div>

                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <FaLock className='text-gray-400' />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='Password'
                      className='w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400'
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white'
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700'
                      />
                      <label htmlFor="remember-me" className='ml-2 block text-sm text-gray-300'>
                        Remember me
                      </label>
                    </div>
                    <a href="#" className='text-sm text-blue-400 hover:text-blue-300 transition-colors'>
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className='w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 group'
                  >
                    Sign In
                    <FaArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                  </button>
                </div>

                <div className='mt-6 text-center text-sm text-gray-400'>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(false)}
                    className='text-blue-400 hover:text-blue-300 font-medium transition-colors'
                  >
                    Sign up
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className='text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent'>
                  Create Account
                </h2>
                
                <div className='space-y-5'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <FaUser className='text-gray-400' />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='First Name'
                        className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400'
                        required
                      />
                    </div>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <FaUser className='text-gray-400' />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Last Name'
                        className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400'
                        required
                      />
                    </div>
                  </div>

                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <FaEnvelope className='text-gray-400' />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Email Address'
                      className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400'
                      required
                    />
                  </div>

                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <FaLock className='text-gray-400' />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='Password'
                      className='w-full pl-10 pr-10 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400'
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white'
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  <div className='flex items-center'>
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700'
                      required
                    />
                    <label htmlFor="terms" className='ml-2 block text-sm text-gray-300'>
                      I agree to the <a href="#" className='text-blue-400 hover:text-blue-300'>Terms</a> and <a href="#" className='text-blue-400 hover:text-blue-300'>Privacy Policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className='w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 group'
                  >
                    Create Account
                    <FaArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                  </button>
                </div>

                <div className='mt-6 text-center text-sm text-gray-400'>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(true)}
                    className='text-blue-400 hover:text-blue-300 font-medium transition-colors'
                  >
                    Sign in
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
       {/* Footer */}
    </div>
  );
};

export default SignIn;