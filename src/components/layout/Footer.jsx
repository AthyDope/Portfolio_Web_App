import React from 'react';
import { Github, Linkedin, Mail, Phone, Instagram, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#020617] border-t border-white/5 pt-16 sm:pt-24 pb-10 sm:pb-12 relative overflow-hidden">
            {/* Atmospheric Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16 lg:mb-24">
                    <div className="flex flex-col items-center md:items-start">
                        <NavLink to="/" className="flex items-center gap-2 mb-8 group">
                            <motion.div 
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img src="/favicon.png" alt="Atharva Chaphe" className="w-12 h-12 object-contain" />
                            </motion.div>
                            <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all">Atharva Chaphe</span>
                        </NavLink>
                        <p className="text-slate-400 text-base leading-relaxed mb-8 text-center md:text-left font-medium opacity-80">
                            Full Stack Developer specialized in building <span className="text-white">exceptional digital experiences</span> with modern technologies.
                        </p>
                        <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                            Available for new projects
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px] relative inline-block">
                            Navigation
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-brand-600 rounded-full" />
                        </h4>
                        <ul className="space-y-5 text-slate-400 font-bold text-sm tracking-wide">
                            <li><NavLink to="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Home</NavLink></li>
                            <li><NavLink to="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About Me</NavLink></li>
                            <li><NavLink to="/projects" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Projects</NavLink></li>
                            <li><NavLink to="/skills" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Skills</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</NavLink></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px] relative inline-block">
                            Expertise
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-brand-600 rounded-full" />
                        </h4>
                        <ul className="space-y-5 text-slate-400 font-bold text-sm tracking-wide">
                            <li className="flex items-center justify-center md:justify-start gap-2 group-hover:text-white transition-colors cursor-default">Full Stack Web</li>
                            <li className="flex items-center justify-center md:justify-start gap-2 group-hover:text-white transition-colors cursor-default">Cloud Solutions</li>
                            <li className="flex items-center justify-center md:justify-start gap-2 group-hover:text-white transition-colors cursor-default">Mobile Apps</li>
                            <li className="flex items-center justify-center md:justify-start gap-2 group-hover:text-white transition-colors cursor-default">AI Integration</li>
                            <li className="flex items-center justify-center md:justify-start gap-2 group-hover:text-white transition-colors cursor-default">UI/UX Strategy</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px] relative inline-block">
                            Connect
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-brand-600 rounded-full" />
                        </h4>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                            {[
                                { icon: <Github size={20} />, url: 'https://github.com/AthyDope', color: '#6e5494' },
                                { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/atharva-chaphe-65545b234/', color: '#0077b5' },
                                { icon: <Instagram size={20} />, url: 'https://instagram.com/atharva_chaphe', color: '#e4405f' },
                                { icon: <Twitter size={20} />, url: 'https://twitter.com/your_twitter_handle', color: '#1da1f2' },
                                { icon: <Mail size={20} />, url: 'mailto:atharvachaphe7@gmail.com', color: '#ea4335' }
                            ].map((social, i) => (
                                <motion.a 
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={social.url} 
                                    className="w-12 h-12 rounded-[1rem] glass-morphism flex items-center justify-center text-slate-400 hover:text-white transition-all border-white/5 hover:border-white/10 relative group bg-white/5"
                                >
                                    <div className="relative z-10">{social.icon}</div>
                                    <div 
                                        className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-30 transition-opacity rounded-[1rem]" 
                                        style={{ backgroundColor: social.color }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                            Let's build something <span className="text-white">amazing</span> together.
                        </p>
                    </div>
                </div>

                <div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                    <p className="text-slate-500 text-xs font-bold tracking-widest uppercase text-center md:text-left">
                        © {currentYear} All Rights Reserved to Atharva Chaphe. Developed with love and passion ❤️
                    </p>
                    <div className="flex gap-4 sm:gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <NavLink to="/privacy" className="hover:text-white transition-colors px-2">Privacy</NavLink>
                        <NavLink to="/terms" className="hover:text-white transition-colors px-2">Terms</NavLink>
                        <NavLink to="/cookies" className="hover:text-white transition-colors px-2">Cookies</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
