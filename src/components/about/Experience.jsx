import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Briefcase, Building2, TrendingUp } from 'lucide-react';

const Experience = () => {
    const exp = [
        {
            company: 'Agrovision Group of Companies',
            role: 'Software Developer',
            period: 'Nov 2025 - Present',
            icon: <Building2 size={26} />,
            color: '#3b82f6',
            status: 'Current'
        },
        {
            company: 'TechView Web Solutions Pvt Ltd',
            role: 'Web Developer',
            period: 'July 2024 - Dec 2024',
            icon: <Briefcase size={26} />,
            color: '#818cf8',
            status: 'Previous'
        },
        {
            company: 'Anikaay Integration',
            role: 'Junior Data Analyst',
            period: 'Feb 2023 - April 2023',
            icon: <TrendingUp size={26} />,
            color: '#10b981',
            status: 'Internship'
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Background decorative glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />

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
                            Professional Path
                        </span>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">
                        Work <span className="text-gradient-alt">Experience</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exp.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10, rotateX: 2 }}
                            className="group perspective-1000"
                        >
                            <div className="glass-morphism p-10 rounded-[2.5rem] border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 flex flex-col h-full border relative overflow-hidden">
                                <div className="flex items-start justify-between mb-8">
                                    <div 
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg`}
                                        style={{ color: item.color }}
                                    >
                                        {item.icon}
                                        <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: item.color }} />
                                    </div>
                                    <div className="text-right">
                                        <span className={`text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${
                                            item.status === 'Current' 
                                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                            : 'bg-white/5 text-slate-500 border-white/5'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3 opacity-60">{item.company}</h4>
                                    <h3 className="text-2xl font-black text-white mb-2 leading-tight group-hover:text-brand-400 transition-colors">{item.role}</h3>
                                    <p className="text-slate-400 font-bold mt-4 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        {item.period}
                                    </p>
                                </div>

                                {/* Background Decorative Element */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[4rem] group-hover:bg-brand-600/5 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Experience;
