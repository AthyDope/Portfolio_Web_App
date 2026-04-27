import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Award, Briefcase, Rocket, Github } from 'lucide-react';

const Achievements = () => {
    const items = [
        { title: 'Internship Completed', sub: 'Agrovision Group', icon: <Briefcase size={26} />, color: '#3b82f6' },
        { title: 'Full Stack Certified', sub: 'Professional Training', icon: <Award size={26} />, color: '#818cf8' },
        { title: '10+ Projects Done', sub: 'Live Portfolio', icon: <Rocket size={26} />, color: '#10b981' },
        { title: 'Open Source', sub: 'Active Contributor', icon: <Github size={26} />, color: '#ffffff' },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-600/5 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                            Success Stories
                        </span>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">
                        Key <span className="text-gradient-alt">Achievements</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10, rotateX: 5 }}
                            className="group perspective-1000"
                        >
                            <div className="glass-morphism p-8 rounded-[2rem] border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 flex flex-col items-center text-center gap-6 border relative overflow-hidden h-full">
                                <div 
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg`}
                                    style={{ color: item.color }}
                                >
                                    {item.icon}
                                    <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: item.color }} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white font-black text-lg uppercase tracking-tight leading-tight group-hover:text-brand-400 transition-colors">{item.title}</h3>
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-3 opacity-60">{item.sub}</p>
                                </div>

                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-3xl group-hover:bg-brand-600/5 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Achievements;
