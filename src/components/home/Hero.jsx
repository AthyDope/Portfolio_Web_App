import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Container from '../layout/Container';

const ROLES = ['Full Stack Developer', 'React Developer', 'Python Developer', 'UI/UX Enthusiast'];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen lg:h-screen min-h-[600px] flex items-center pt-24 pb-8 overflow-hidden bg-[#020617]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <Container className="relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col justify-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 text-white tracking-tight">
                            Hi, I'm <br />
                            <span className="text-gradient-alt">Atharva Chaphe</span>
                        </h1>

                        <div className="h-8 sm:h-10 mb-6">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-200 flex items-center gap-3"
                                >
                                    {ROLES[roleIndex]} <span className="text-brand-500">_</span>
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-lg leading-relaxed font-medium">
                            Crafting high-performance web applications with modern technologies and exceptional user experiences.
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                                View Projects
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </Button>
                            <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
                                Get in Touch
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative perspective-1000 hidden lg:block"
                    >
                        <motion.div 
                            className="relative w-full max-w-lg xl:max-w-xl mx-auto group"
                            whileHover={{ 
                                rotateY: 5, 
                                rotateX: -5,
                                transition: { duration: 0.4 }
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 bg-brand-600/20 blur-[120px] rounded-full group-hover:bg-brand-500/30 transition-colors duration-700" />
                            <motion.div 
                                className="relative z-10 w-full flex items-center justify-center transition-all duration-500"
                                style={{ transform: 'translateZ(50px)' }}
                            >
                                <img
                                    src="/hero-main.png"
                                    alt="Atharva Chaphe - Developer"
                                    className="w-full h-auto max-h-[65vh] object-contain transition-transform duration-1000 group-hover:scale-105"
                                />
                            </motion.div>
                            
                            {/* Accent Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-brand-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </div>
            </Container>

            {/* Scroll Indicator removed to use global ScrollIndicator */}
        </section>
    );
};

export default Hero;
