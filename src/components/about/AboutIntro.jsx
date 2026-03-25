import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Layers, Code, Database, Cpu } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const AboutIntro = () => {
    const floatingIcons = [
        { icon: <div className="bg-[#61DAFB]/20 p-2 rounded-lg text-[#61DAFB] shadow-[0_0_15px_rgba(97,218,251,0.2)]"><Layers size={20} /></div>, delay: 0, top: '20%', left: '0%' },
        { icon: <div className="bg-[#FFD43B]/20 p-2 rounded-lg text-[#FFD43B] shadow-[0_0_15px_rgba(255,212,59,0.2)]"><Code size={20} /></div>, delay: 0.5, top: '15%', right: '0%' },
        { icon: <div className="bg-brand-500/20 p-2 rounded-lg text-brand-400 shadow-[0_0_15px_rgba(37,99,235,0.2)]"><Database size={20} /></div>, delay: 1, bottom: '25%', left: '5%' },
    ];

    const stats = [
        { icon: <Layers size={24} />, label: 'Experience', target: 2, suffix: '+', color: '#818cf8' },
        { icon: <Database size={24} />, label: 'Completed Projects', target: 10, suffix: '+', color: '#3b82f6' },
        { icon: <Cpu size={24} />, label: 'Companies Worked', target: 3, suffix: '+', color: '#10b981' },
    ];

    return (
        <section className="pt-24 pb-20 relative overflow-hidden bg-[#020617]">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8 inline-block shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                        >
                            About Me
                        </motion.span>
                        
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 sm:mb-10 tracking-tighter leading-none">
                            I Create <span className="text-gradient-alt">Impactful</span> <br /> 
                            Solutions.
                        </h1>
                        
                        <div className="space-y-6 text-slate-300 text-base sm:text-xl leading-relaxed font-medium opacity-90">
                            <p>
                                I'm Atharva Chaphe, a dedicated <span className="text-white font-black headline-reveal-underline">Full Stack Developer</span> and <span className="text-white font-black headline-reveal-underline">Data Science enthusiast</span> with a track record of building performant web applications. My focus is on creating seamless, high-end digital experiences that balance form and function perfectly.
                            </p>
                            <p className="text-slate-400 text-lg opacity-80 leading-relaxed max-w-xl">
                                With expertise in both frontend brilliance and backend robustness, I bridge the gap between complex logic and elegant user interfaces. I don't just write code; I design systems that solve real-world problems.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative group perspective-1000"
                    >
                        {/* Interactive 3D Frame */}
                        <motion.div 
                            whileHover={{ rotateX: 5, rotateY: -10, y: -10 }}
                            className="relative aspect-square max-w-md mx-auto"
                        >
                            <div className="absolute inset-x-0 bottom-0 top-1/4 bg-brand-600/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative z-10 w-full h-full glass-morphism rounded-[3rem] overflow-hidden border-white/5 bg-slate-900/60 shadow-2xl">
                                <img
                                    src="/about-profile.png"
                                    alt="Atharva Chaphe"
                                    className="w-full h-full object-cover"
                                />

                                {/* Floating icons with glow */}
                                {floatingIcons.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                                        className="absolute z-20 p-4 glass-morphism rounded-2xl border-white/10 shadow-2xl backdrop-blur-md"
                                        style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Grid - High End Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8, rotateX: 2 }}
                            className="group perspective-1000"
                        >
                            <div className="glass-morphism p-10 rounded-[2.5rem] border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 flex flex-col items-center gap-6 relative overflow-hidden text-center border">
                                <div 
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg"
                                    style={{ color: stat.color }}
                                >
                                    {stat.icon}
                                    <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-50 transition-opacity" style={{ backgroundColor: stat.color }} />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-5xl font-black text-white block mb-2 tracking-tighter">
                                        <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                                    </span>
                                    <span className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</span>
                                </div>
                                
                                {/* Background Decorative Element */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[4rem] group-hover:bg-white/10 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AboutIntro;
