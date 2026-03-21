import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Languages as LangIcon, Globe } from 'lucide-react';

const Languages = () => {
    const languages = [
        { name: 'English', level: 'Professional Proficiency', color: '#3b82f6', bg: 'bg-brand-500/10' },
        { name: 'Hindi', level: 'Native Proficiency', color: '#10b981', bg: 'bg-emerald-500/10' },
        { name: 'Marathi', level: 'Native Proficiency', color: '#f97316', bg: 'bg-orange-500/10' },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Background decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6 inline-block shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                        >
                            Communication
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                            Fluent in <br />
                            <span className="text-gradient-alt">Languages</span>
                        </h2>
                        <p className="text-slate-400 text-base sm:text-xl font-medium opacity-80 leading-relaxed max-w-xl">
                            Effective communication is the foundation of successful collaboration. I am proficient in multiple languages, allowing me to work seamlessly in diverse global environments.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {languages.map((lang, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group perspective-1000"
                            >
                                <div className="glass-morphism p-8 rounded-[2rem] border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 flex items-center gap-6 border relative overflow-hidden">
                                    <div 
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg`}
                                        style={{ color: lang.color }}
                                    >
                                        <LangIcon size={24} />
                                        <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: lang.color }} />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight group-hover:text-brand-400 transition-colors">{lang.name}</h3>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.1em]">{lang.level}</p>
                                    </div>

                                    {/* Subtle decorative element */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-3xl group-hover:bg-brand-600/5 transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Languages;
