import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import AnimatedCounter from '../common/AnimatedCounter';

const StatsStrip = () => {
    const stats = [
        { label: 'Projects Completed', numericValue: 10, suffix: '+' },
        { label: 'Years Coding', numericValue: 3, suffix: '+' },
        { label: 'Lines of Code', numericValue: 200000, suffix: '+' },
        { label: 'Happy Clients', numericValue: 5, suffix: '+' }
    ];

    return (
        <section className="py-24 relative z-10 bg-[#020617]">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-morphism p-6 sm:p-8 rounded-[2rem] border border-white/5 bg-slate-900/40 relative group perspective-1000 text-center flex flex-col justify-center items-center h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                            <div className="relative z-10">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-3 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-r from-brand-400 to-indigo-400 bg-clip-text text-transparent">
                                    <AnimatedCounter target={stat.numericValue} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm md:text-xs text-slate-400 font-bold uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default StatsStrip;
