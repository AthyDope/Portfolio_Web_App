import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Building2, Briefcase, TrendingUp, GraduationCap, BookOpen } from 'lucide-react';

const Timeline = () => {
    const timelineData = [
        {
            year: 'Nov 2025 - Present',
            title: 'Software Developer',
            organization: 'Agrovision Group of Companies',
            type: 'Experience',
            icon: <Building2 size={20} />,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10 border-blue-500/20'
        },
        {
            year: 'July 2024 - Dec 2024',
            title: 'Web Developer',
            organization: 'TechView Web Solutions Pvt Ltd',
            type: 'Experience',
            icon: <Briefcase size={20} />,
            color: 'text-indigo-400',
            bg: 'bg-indigo-500/10 border-indigo-500/20'
        },
        {
            year: 'Feb 2023 - April 2023',
            title: 'Junior Data Analyst',
            organization: 'Anikaay Integration',
            type: 'Internship',
            icon: <TrendingUp size={20} />,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10 border-emerald-500/20'
        },
        {
            year: 'Education',
            title: "Bachelor's of Engineering in CS",
            organization: 'Savitribai Phule Pune University',
            type: 'Education',
            icon: <GraduationCap size={20} />,
            color: 'text-brand-400',
            bg: 'bg-brand-500/10 border-brand-500/20'
        },
        {
            year: 'Education',
            title: 'Higher Secondary Certificate',
            organization: 'Rao Junior College of Science',
            type: 'Education',
            icon: <BookOpen size={20} />,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10 border-purple-500/20'
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#020617] mt-10">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6 inline-block shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                    >
                        My Journey
                    </motion.span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">
                        Experience & <span className="text-gradient-alt">Timeline</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-indigo-500/50 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Center Node */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full glass-morphism border border-white/10 flex items-center justify-center z-10 bg-slate-900 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${item.bg} ${item.color} border`}>
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Content block */}
                                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} w-full`}>
                                        <div className="glass-morphism p-8 rounded-3xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all shadow-xl group hover:border-brand-500/30">
                                            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase mb-4 border ${item.bg} ${item.color}`}>
                                                {item.year}
                                            </span>
                                            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-brand-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <h4 className="text-slate-400 font-bold mb-4">{item.organization}</h4>
                                            
                                            <div className={`flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                                                {isEven ? null : <span className="hidden md:inline-block w-8 h-px bg-slate-700" />}
                                                {item.type}
                                                {isEven ? <span className="hidden md:inline-block w-8 h-px bg-slate-700" /> : null}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Timeline;
