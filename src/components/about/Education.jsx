import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
    const edu = [
        {
            school: 'Savitribai Phule Pune University',
            degree: "Bachelor's of Engineering",
            major: "Computer Science",
            honors: "Honors in Data Science & Visualisation",
            icon: <GraduationCap size={26} />,
            color: '#3b82f6',
            bg: 'bg-blue-500/10'
        },
        {
            school: 'Rao Junior College of Science',
            degree: 'Higher Secondary Certificate',
            major: 'PCM with Computer Science',
            icon: <BookOpen size={26} />,
            color: '#818cf8',
            bg: 'bg-indigo-500/10'
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-brand-600/5 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 inline-block shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                    >
                        Academic Journey
                    </motion.span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">
                        My <span className="text-gradient-alt">Education</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {edu.map((item, idx) => (
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
                                        <span className="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">Degree</span>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-white mb-2 leading-tight group-hover:text-brand-400 transition-colors">{item.school}</h3>
                                    <p className="text-slate-300 text-lg font-bold mb-1">{item.degree}</p>
                                    <p className="text-slate-400 font-medium">{item.major}</p>
                                    {item.honors && (
                                        <div className="mt-6 pt-6 border-t border-white/5">
                                            <span className="text-brand-400 text-sm font-black uppercase tracking-wider">{item.honors}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Background Decorative Element */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-600/10 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Education;
