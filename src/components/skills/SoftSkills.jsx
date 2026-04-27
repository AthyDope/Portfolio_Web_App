import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

const SoftSkills = () => {
    const skills = [
        { name: 'Communication', desc: 'Articulating technical concepts clearly to both technical and non-technical stakeholders.' },
        { name: 'Leadership', desc: 'Guiding teams, mentoring peers, and taking ownership of projects from end to end.' },
        { name: 'Agile Scrum', desc: 'Flourishing in fast-paced iterative environments with cross-functional collaboration.' },
        { name: 'Problem Solving', desc: 'Approaching complex challenges with a logical, analytical, and structured mindset.' }
    ];

    return (
        <section className="py-24 relative z-10 bg-slate-900/30 border-t border-white/5">
            <Container>
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                            Interpersonal
                        </span>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        Soft <span className="text-gradient-alt">Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
                            className="glass-morphism p-6 sm:p-8 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group bg-slate-900/40 hover:bg-slate-900/60 perspective-1000 shadow-xl relative overflow-hidden"
                        >
                            {/* Decorative underlying glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors duration-500">
                                    {skill.name}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-500">
                                    {skill.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SoftSkills;
