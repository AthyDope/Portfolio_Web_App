import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
            {/* Glassmorphism Background (Animated) */}
            <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/5" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-black text-white tracking-tighter flex items-center gap-2 group">
                    <motion.div 
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img src="/favicon.png" alt="Atharva Chaphe" className="w-10 h-10 object-contain" />
                    </motion.div>
                    <span className="hidden sm:inline bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all">Atharva Chaphe</span>
                </NavLink>

                <div className="hidden md:flex items-center gap-8 lg:gap-10">
                    <div className="flex items-center gap-6 lg:gap-8 relative px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                        {links.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-xs font-black uppercase tracking-[0.2em] transition-all relative py-1 ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-500 rounded-full shadow-[0_0_10px_#2563eb]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                    
                    <NavLink to="/contact">
                        <motion.button 
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-600/20 active:shadow-none"
                        >
                            Hire Me
                        </motion.button>
                    </NavLink>
                </div>

                <button className="md:hidden text-white p-2 glass-morphism rounded-xl border-white/10" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-20 left-6 right-6 md:hidden glass-morphism rounded-[2rem] border-white/10 overflow-hidden shadow-2xl z-50 bg-slate-900/95 backdrop-blur-2xl"
                    >
                        <div className="px-8 py-10 flex flex-col gap-6">
                            {links.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-2xl font-black tracking-tighter transition-all ${isActive ? 'text-gradient-alt' : 'text-slate-400'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-brand-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-600/20">
                                        Hire Me
                                    </button>
                                </NavLink>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
