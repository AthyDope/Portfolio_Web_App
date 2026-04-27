import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../layout/Container';

const CTA = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Hide CTA on the contact page
    if (location.pathname === '/contact') return null;

    return (
        <section id="contact-cta" className="py-20 sm:py-32 md:py-40 relative overflow-hidden bg-[#020617]">
            {/* Cinematic Cosmos Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
                    <div className="absolute inset-0 bg-radial-gradient from-brand-600/20 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-400/30 to-transparent blur-md animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-200/20 to-transparent" />
                </div>
                
                {/* Decorative Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                        }}
                    />
                ))}
            </div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                            Connect
                        </span>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                    </motion.div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 sm:mb-10 tracking-tighter leading-none">
                        Have A <span className="text-gradient-alt">Project</span> <br /> 
                        In <span className="text-gradient-alt">Mind?</span>
                    </h2>
                    
                    <p className="text-slate-400 text-base sm:text-lg md:text-2xl mb-10 sm:mb-16 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
                        Let's work together and make something great. Let's get in touch and discuss your vision!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/contact')}
                            className="bg-brand-600 hover:bg-brand-500 text-white px-10 sm:px-14 py-4 sm:py-5 rounded-[1.5rem] text-lg sm:text-xl font-black transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] relative group overflow-hidden"
                        >
                            <span className="relative z-10">Hire Me</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/contact')}
                            className="glass-morphism text-white px-10 sm:px-14 py-4 sm:py-5 rounded-[1.5rem] text-lg sm:text-xl font-black transition-all border-white/10 hover:border-white/20 relative group"
                        >
                            <span className="relative z-10">Get In Touch</span>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem]" />
                        </motion.button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default CTA;
