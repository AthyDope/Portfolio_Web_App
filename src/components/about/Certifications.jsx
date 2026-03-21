import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: 'Generative AI',
            issuer: 'NeruonAI',
            date: '2025',
            link: '#',
            color: '#10b981',
            bg: 'bg-emerald-500/10'
        },
        {
            title: 'Python Full Stack Development Training',
            issuer: 'Oytie Training Institute',
            date: '2024',
            link: '#',
            color: '#f97316',
            bg: 'bg-orange-500/10'
        },
        {
            title: 'MERN Stack Developer',
            issuer: 'Apna College',
            date: '2023',
            link: '#',
            color: '#3b82f6',
            bg: 'bg-blue-500/10'
        },
        {
            title: 'Data Analytics',
            issuer: 'Pluto Academy',
            date: '2023',
            link: '#',
            color: '#06b6d4',
            bg: 'bg-cyan-500/10'
        },
        {
            title: 'C Plus Plus With OOPS',
            issuer: 'Scalar',
            date: '2022',
            link: '#',
            color: '#2563eb',
            bg: 'bg-brand-500/10'
        },
        {
            title: 'C Programming',
            issuer: 'I.T Solutions',
            date: '2022',
            link: '#',
            color: '#6366f1',
            bg: 'bg-indigo-500/10'
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Background decorative glow */}
            <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-brand-600/5 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6 inline-block shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                        >
                            Credentials
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
                            Professional <span className="text-gradient-alt">Certifications</span>
                        </h2>
                        <p className="text-slate-400 text-base sm:text-xl font-medium opacity-80 leading-relaxed">
                            Continuous learning is a part of my journey. Here are some of the certifications I've earned to validate my technical expertise.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, idx) => (
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
                                <div className="flex justify-between items-start mb-10">
                                    <div 
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg`}
                                        style={{ color: cert.color }}
                                    >
                                        <Award size={28} />
                                        <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: cert.color }} />
                                    </div>
                                    <motion.a 
                                        href={cert.link} 
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-600/20 transition-all border border-white/5"
                                    >
                                        <ExternalLink size={18} />
                                    </motion.a>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <h3 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-brand-400 transition-colors uppercase tracking-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-400 font-bold text-sm mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                        {cert.issuer}
                                    </p>

                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                                        <Calendar size={14} />
                                        <span>Issued {cert.date}</span>
                                    </div>
                                </div>

                                {/* Background Decorative Element */}
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-600/10 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Certifications;
