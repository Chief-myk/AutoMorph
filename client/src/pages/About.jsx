import React, { useRef, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiArrowRight, FiCheck, FiStar, FiShoppingBag, FiEye, FiUsers, FiBarChart2, FiUserPlus, FiArrowDown, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router';

const About = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const timelineRef = useRef(null);
    const logoRefs = useRef([]);
    const leftCardRefs = useRef([]);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const Boxes = [
        {
            svg: <FiStar className="w-8 h-8 text-neon-blue" />,
            Heading: "AI-Powered Upgrades",
            Text: "Intelligent recommendations for performance and aesthetic enhancements tailored to your vehicle."
        },
        {
            svg: <FiShoppingBag className="w-8 h-8 text-neon-purple" />,
            Heading: "Custom Accessory Store",
            Text: "Curated marketplace of premium parts and accessories with AI-guided compatibility."
        },
        {
            svg: <FiEye className="w-8 h-8 text-neon-pink" />,
            Heading: "Virtual Customization",
            Text: "Preview modifications in real-time using advanced AR and 3D visualization technology."
        },
        {
            svg: <FiUsers className="w-8 h-8 text-neon-green" />,
            Heading: "Community Platform",
            Text: "Connect with fellow enthusiasts, share builds, and discover trending modifications."
        },
        {
            svg: <FiBarChart2 className="w-8 h-8 text-neon-yellow" />,
            Heading: "Smart Analytics",
            Text: "Data-driven insights on performance improvements and modification effectiveness."
        },
        {
            svg: <FiUserPlus className="w-8 h-8 text-neon-red" />,
            Heading: "Expert Consultation",
            Text: "AI-assisted professional advice from certified automotive specialists."
        },
    ];

    const ExpCard = [
        {
            m: "01",
            h: "Upload Your Car",
            t: "Take photos of your vehicle or input your car's specifications for AI analysis."
        },
        {
            m: "02",
            h: "AI Analysis",
            t: "Our advanced algorithms analyze your car's potential and suggest optimal enhancements."
        },
        {
            m: "03",
            h: "Visualize Changes",
            t: "See realistic previews of modifications using our AR visualization technology."
        },
        {
            m: "04",
            h: "Shop & Install",
            t: "Purchase verified parts and connect with certified installers in your area."
        },
    ];

    const teamMembers = [
        {
            name: "Mayank Mittal",
            title: "CEO & Founder",
            handle: "mayankmittal1311",
            status: "Online",
            avatarUrl: "/team/alex.jpg",
            // expertise: "AI & Automotive Tech"
            expertise: "Everything"
        },
        {
            name: "Mohit Aggarwal",
            title: "Lead Designer",
            handle: "mohitaggarwal",
            status: "Online",
            avatarUrl: "/team/maya.jpg",
            expertise: "UX/UI & 3D Visualization"
        },
        {
            name: "Yash Chopra",
            title: "Software Engineer",
            handle: "yashChopra",
            status: "Online",
            avatarUrl: "/team/javi.jpg",
            expertise: "Full Stack Development"
        },
        {
            name: "Raghav Bhardwaj",
            title: "Product Manager",
            handle: "raghavbhardwaj",
            status: "Away",
            avatarUrl: "/team/sarah.jpg",
            expertise: "Automotive Industry"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative w-full bg-black overflow-hidden">
            {/* Hero Section with Animated Background */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="z-10 text-center px-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-orbitron font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent glow-text"
                        variants={itemVariants}
                    >
                        Automorph
                    </motion.h1>
                    <motion.p
                        className="text-2xl md:text-3xl mb-8 text-gray-300 font-light"
                        variants={itemVariants}
                    >
                        The Future Of Automotive Enhancement
                    </motion.p>
                    <motion.div
                        className="flex justify-center space-x-4 mb-12 items-center"
                        variants={itemVariants}
                    >
                        <FiStar className="w-8 h-8 text-blue-400 animate-pulse" />
                        <span className="text-lg font-orbitron text-gray-300">AI • Personalization • Performance</span>
                        <FiStar className="w-8 h-8 text-pink-400 animate-pulse" />
                    </motion.div>
                    {/* <motion.div variants={itemVariants}>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center mx-auto">
              Explore Features <FiArrowRight className="ml-2" />
            </button>
          </motion.div> */}
                </motion.div>

                {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-400"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </div> */}
            </div>

            {/* About Us Section */}
            <section className="py-20 px-4 max-w-6xl mx-auto relative">
                <div className="absolute -left-20 top-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
                <div className="absolute -right-20 bottom-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                            Who We Are
                        </h2>
                        <p className="text-lg text-gray-300 mb-6">
                            AutoMorph is the cutting-edge intersection of artificial intelligence and automotive passion. We're a team of tech innovators, car enthusiasts, and design visionaries who believe every vehicle deserves to be extraordinary.
                        </p>
                        <p className="text-lg text-gray-300 mb-8">
                            Our platform transforms the way you enhance, customize, and experience your car through the power of AI, making professional-grade customization accessible to everyone.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                                <FiCheck className="text-green-400 mr-2" />
                                <span className="text-gray-300">AI-Powered</span>
                            </div>
                            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                                <FiCheck className="text-green-400 mr-2" />
                                <span className="text-gray-300">Community Driven</span>
                            </div>
                            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                                <FiCheck className="text-green-400 mr-2" />
                                <span className="text-gray-300">Cutting Edge</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="relative aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl overflow-hidden border border-gray-700/50">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-2xl flex items-center justify-center">
                                    <FiPlay className="w-12 h-12 text-blue-400" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shadow-xl">
                            <FiStar className="w-6 h-6 text-white" />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            What We Do
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We combine advanced technology with automotive expertise to deliver unparalleled customization experiences.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Boxes.map((box, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                                    {box.svg}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{box.Heading}</h3>
                                <p className="text-gray-400">{box.Text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute -left-40 top-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
                <div className="absolute -right-40 bottom-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Transform your vehicle in just a few simple steps with our intuitive platform.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline */}
                        <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

                        <div className="space-y-12">
                            {ExpCard.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="relative flex items-center"
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center text-white font-bold z-10">
                                        {step.m}
                                    </div>

                                    {/* Content wrapper */}
                                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'}`}>
                                        {/* Card */}
                                        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                                            <div className="flex lg:hidden mb-4 h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center text-white font-bold">
                                                {step.m}
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-3">{step.h}</h3>
                                            <p className="text-gray-400">{step.t}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            Meet The Team
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            The brilliant minds driving the future of automotive customization.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-24">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <ProfileCard
                                    name={member.name}
                                    title={member.title}
                                    handle={member.handle}
                                    status={member.status}
                                    contactText="Contact"
                                    avatarUrl={member.avatarUrl}
                                    showUserInfo={true}
                                    enableTilt={true}
                                    enableMobileTilt={false}
                                    onContactClick={() => console.log(`Contact ${member.name}`)}
                                    additionalInfo={member.expertise}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                <div className="absolute -left-40 top-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
                <div className="absolute -right-40 bottom-1/3 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl -z-10"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                            Our Vision
                        </h2>
                        <p className="text-2xl md:text-3xl text-white font-light mb-8 leading-relaxed">
                            The future of automotive customization is <span className="font-medium text-blue-400">intelligent</span>, <span className="font-medium text-purple-400">personalized</span>, and <span className="font-medium text-pink-400">accessible to all</span>.
                        </p>
                        {/* <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
                            We envision a world where every car owner can easily transform their vehicle into a perfect reflection of their personality and needs, powered by AI and supported by a passionate community.
                        </p> */}
                        <Link to={"/community"}>
                        <button className="px-8 cursor-pointer py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center">
                            Join Our Mission <FiArrowRight className="ml-2" />
                        </button>
                        </Link>

                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;