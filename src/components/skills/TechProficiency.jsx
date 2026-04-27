import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Container from '../layout/Container';

const TechProficiency = () => {
    const data = [
        { subject: 'Frontend', A: 90, fullMark: 100 },
        { subject: 'Backend', A: 85, fullMark: 100 },
        { subject: 'Data Science', A: 65, fullMark: 100 },
        { subject: 'DevOps', A: 60, fullMark: 100 },
        { subject: 'UI/UX Design', A: 75, fullMark: 100 },
        { subject: 'Databases', A: 80, fullMark: 100 },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-slate-900 border border-white/10 p-3 rounded-lg shadow-xl">
                    <p className="text-white font-bold">{payload[0].payload.subject}</p>
                    <p className="text-brand-400 text-sm">Proficiency: {payload[0].value}%</p>
                </div>
            );
        }
        return null;
    };

    return (
        <section className="py-24 relative z-10 bg-[#020617]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                                Core Competencies
                            </span>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-brand-500/50 to-transparent" />
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                            Technology <span className="text-gradient-alt">Proficiency</span>
                        </h2>
                        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                            A holistic view of my technical skills across different domains, highlighting my journey towards becoming an exceptional full-stack developer with emerging expertise in data science.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
                        className="h-[400px] w-full glass-morphism rounded-[2.5rem] border border-white/5 relative group perspective-1000 flex items-center justify-center p-4 bg-slate-900/40 shadow-2xl transition-all duration-500 hover:border-brand-500/30 hover:bg-slate-900/60"
                    >
                         {/* Decorative underlying glow */}
                         <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
                        
                         {/* Decorative background element */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-500/30 transition-colors duration-700" />
                        
                        <div className="w-full h-full relative z-10" style={{ minHeight: '350px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 'bold' }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Radar name="Proficiency" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default TechProficiency;
