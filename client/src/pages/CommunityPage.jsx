import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CommunityPage = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.4)",
    transition: {
      duration: 0.3
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-5 bg-[#0D1117] text-white font-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-500/10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      {/* Sidebar with animation */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="col-span-1 bg-[#111827]/90 backdrop-blur-md p-6 pt-32 border-r border-gray-800/50 space-y-8 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 mb-8"
        >
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.5)]"></div>
          <h2 className="text-xl font-bold text-cyan-400 tracking-wide">Community Hub</h2>
        </motion.div>
        
        <nav className="flex flex-col space-y-5">
          {['Home', 'Discussions', 'Announcements', 'Events', 'Resources'].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ x: 5, color: "#22d3ee" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-300 hover:text-cyan-300 flex items-center group"
            >
              <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-cyan-300 mr-3 transition-all duration-300"></span>
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Online users widget */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-6 border-t border-gray-800/50"
        >
          <div className="text-xs text-gray-400 mb-3">ONLINE NOW</div>
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 border-2 border-[#0D1117]"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0D1117] flex items-center justify-center text-xs">
              +12
            </div>
          </div>
        </motion.div>
      </motion.aside>

      {/* Main Content */}
      <main className="col-span-4 p-8 space-y-12 relative">
        {/* Header with animation */}
        <motion.section 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 drop-shadow-lg">
            FutureSpace Community
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-3 max-w-2xl"
          >
            Connect with the brightest minds in tech. Share knowledge, collaborate on projects, and shape the future together.
          </motion.p>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        </motion.section>

        {/* Grid of Posts with staggered animation */}
        <motion.section 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div 
              key={i}
              variants={item}
              whileHover={cardHover}
              className="bg-[#161B22]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-cyan-400/30 relative overflow-hidden"
            >
              {/* Card accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400"></div>
              
              {/* Animated content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                  <div>
                    <h3 className="font-semibold text-cyan-300">User_{i+1}</h3>
                    <p className="text-xs text-gray-500">2{i} hours ago</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Exploring Quantum Computing #{i + 1}</h3>
                <p className="text-sm text-gray-400">
                  This discussion covers the latest breakthroughs in quantum algorithms and how they might revolutionize...
                </p>
                
                {/* Card footer */}
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-800/50">
                  <div className="flex space-x-3 text-xs">
                    <span className="text-gray-400 hover:text-cyan-300 cursor-pointer">12{i} likes</span>
                    <span className="text-gray-400 hover:text-cyan-300 cursor-pointer">{i+3} comments</span>
                  </div>
                  <button className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full transition-all">
                    Join
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Floating action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-8 right-8 z-20"
        >
          <button className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg flex items-center justify-center hover:shadow-cyan-400/40 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </motion.div>

        {/* Feedback section with glass morphism effect */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-[#161B22]/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700/30 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-6">
              Share Your Vision
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Idea</label>
                <textarea
                  rows="4"
                  className="w-full p-4 rounded-xl bg-[#0D1117]/70 backdrop-blur-sm text-white border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  placeholder="How can we improve the FutureSpace community?"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                  <select className="w-full p-3 rounded-xl bg-[#0D1117]/70 backdrop-blur-sm text-white border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent">
                    <option>Feature Request</option>
                    <option>Bug Report</option>
                    <option>General Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Priority</label>
                  <div className="flex space-x-3">
                    {['Low', 'Medium', 'High'].map((priority, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 text-sm rounded-xl transition-all ${i === 1 ? 'bg-cyan-500/90 text-white' : 'bg-gray-800 text-gray-300'}`}
                      >
                        {priority}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all"
              >
                Submit Proposal
              </motion.button>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default CommunityPage;