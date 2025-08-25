import React from "react";
import { FaBrain, FaBolt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from './Particle.jsx';

const WhyCarAI = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const statItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative text-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16 bg-black text-center overflow-hidden">
      {/* Particles as background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 100}
          particleSpread={6}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
   
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#26C6FF] via-[#A0006D] to-[#FF6B6B] bg-clip-text text-transparent">
            AutoMorph?
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Experience the future of automotive enhancement with our cutting-edge AI technology
          that transforms how you upgrade and optimize your vehicle.
        </p>
      </motion.div>

      {/* Features with staggered animation */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 md:mb-20"
      >
        <motion.div
          variants={item}
          className="bg-[#0F111E] rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg border border-[#1e1e2e] 
          hover:shadow-blue-500/30 hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300
          relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <FaBrain className="text-[#26C6FF] text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Advanced machine learning algorithms analyze your vehicle's specifications and condition.
            </p>
          </div>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-[#0F111E] rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg border border-[#1e1e2e] 
          hover:shadow-green-500/30 hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300
          relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <FaBolt className="text-[#26C6FF] text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Instant Recommendations</h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Get personalized upgrade suggestions in seconds with detailed impact projections.
            </p>
          </div>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-[#0F111E] rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-lg border border-[#1e1e2e] 
          hover:shadow-purple-500/30 hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300
          relative overflow-hidden group col-span-1 sm:col-span-2 lg:col-span-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <FaShieldAlt className="text-[#26C6FF] text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">Trusted Expertise</h3>
            <p className="text-gray-400 text-xs md:text-sm">
              Backed by automotive experts and validated through thousands of successful upgrades.
            </p>
          </div>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>
      </motion.div>

      {/* Stats Grid with mirror effect */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center"
      >
        <motion.div
          variants={statItem}
          className="relative bg-[#0F111E] p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-purple-600 shadow-md
          before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl md:before:rounded-2xl
          before:bg-gradient-to-r before:from-purple-500/30 before:via-pink-500/20 before:to-blue-500/30 before:blur-xl md:before:blur-2xl
          hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 group"
        >
          <div className="relative">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#26C6FF]">50K+</h4>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm">Cars Analyzed</p>
          </div>
          {/* Mirror effect */}
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl md:rounded-b-2xl"></div>
        </motion.div>

        <motion.div
          variants={statItem}
          className="relative bg-[#0F111E] p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-blue-600 shadow-md
          before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl md:before:rounded-2xl
          before:bg-gradient-to-r before:from-blue-500/30 before:via-cyan-400/20 before:to-purple-500/30 before:blur-xl md:before:blur-2xl
          hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300 group"
        >
          <div className="relative">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#26C6FF]">95%</h4>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm">Accuracy Rate</p>
          </div>
          {/* Mirror effect */}
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl md:rounded-b-2xl"></div>
        </motion.div>

        <motion.div
          variants={statItem}
          className="relative bg-[#0F111E] p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-green-600 shadow-md
          before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl md:before:rounded-2xl
          before:bg-gradient-to-r before:from-green-400/30 before:via-blue-400/20 before:to-cyan-400/30 before:blur-xl md:before:blur-2xl
          hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300 group"
        >
          <div className="relative">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#26C6FF]">24/7</h4>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm">AI Availability</p>
          </div>
          {/* Mirror effect */}
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl md:rounded-b-2xl"></div>
        </motion.div>

        <motion.div
          variants={statItem}
          className="relative bg-[#0F111E] p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-pink-600 shadow-md
          before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-xl md:before:rounded-2xl
          before:bg-gradient-to-r before:from-pink-500/30 before:via-purple-500/20 before:to-blue-500/30 before:blur-xl md:before:blur-2xl
          hover:shadow-pink-500/50 hover:scale-[1.02] transition-all duration-300 group"
        >
          <div className="relative">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#26C6FF]">1M+</h4>
            <p className="text-gray-400 mt-1 text-xs sm:text-sm">Upgrades Recommended</p>
          </div>
          {/* Mirror effect */}
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-8 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl md:rounded-b-2xl"></div>
        </motion.div>
      </motion.div>

      {/* Floating particles background - Reduced on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#26C6FF]/20"
            style={{
              width: Math.random() * 8 + 3 + 'px',
              height: Math.random() * 8 + 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyCarAI;