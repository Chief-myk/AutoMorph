import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = () => {
  const [hovered, setHovered] = useState(false);
  
  const features = [
    "✓ No credit card required",
    "✓ Instant results",
    "✓ Expert support",
    "✓ AI-driven recommendations",
    "✓ Personalized experience",
    "✓ Community feedback",
    "✓ Regular updates",
    "✓ 24/7 availability",
    "✓ Easy to use"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='relative w-full max-w-full h-full flex-col bg-black items-center justify-center mx-auto p-4 md:p-6 lg:p-8 overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-20 transition-all duration-500 ${hovered ? 'bg-purple-500/30' : 'bg-blue-500/20'}`}></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMzMzMiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      {/* Main Card Content */}
      <div className='relative z-10 bg-gradient-to-br w-full mx-auto from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-sm'>
        {/* Shining Star */}
        <div className='flex items-center mb-4 sm:mb-5 md:mb-6'>
          <motion.span 
            animate={{ rotate: hovered ? [0, 15, -15, 0] : 0 }}
            transition={{ duration: 1 }}
            className='text-yellow-400 text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-3'
          >
            ☆
          </motion.span>
          <motion.h2 
            className='font-bold text-xl sm:text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500'
            whileHover={{ scale: 1.02 }}
          >
            Ready to Transform Your Car?
          </motion.h2>
        </div>
        
        <motion.p 
          className='text-gray-300 mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg leading-relaxed'
          whileHover={{ x: 5 }}
        >
          Join <span className='font-semibold text-white'>thousands of car enthusiasts</span> who have revolutionized their vehicles with <span className='font-semibold text-purple-300'>AI-powered insights</span>. Start your transformation journey today.
        </motion.p>
        
        {/* Buttons with enhanced effects */}
        <div className='flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8'>
          <Link to={"/TryUs"}>
            <motion.button 
              className='px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 rounded-full text-white font-medium relative overflow-hidden group text-sm sm:text-base'
              whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='relative z-10'>Get Started</span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </motion.button>
          </Link>
          
          <motion.button 
            className='px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 border-2 border-gray-400 rounded-full text-white font-medium relative group text-sm sm:text-base'
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='relative z-10 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300'>
              Watch Demo
            </span>
            <span className='absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
          </motion.button>
        </div>
        
        {/* Feature List with Animation */}
        <motion.div 
          className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='flex items-center text-gray-300 hover:text-white transition-colors'
              whileHover={{ x: 5 }}
            >
              <span className='text-emerald-400 mr-1 sm:mr-2'>✓</span>
              <span className='break-words'>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Floating particles effect (visual only) */}
        <div className='absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-purple-500/10 blur-xl'></div>
        <div className='absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-500/10 blur-xl'></div>
      </div>
    </motion.div>
  )
}

export default Card;