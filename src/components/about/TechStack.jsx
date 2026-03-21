import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Code, Cpu, Layers, HardDrive, Terminal } from 'lucide-react';

const TechStack = () => {
    const skills = {
        Frontend: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion'],
        Backend: ['Python', 'Django', 'Node.js', 'Express.js', 'RESTful APIs'],
        Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
        'Tools & Emerging': ['Git & GitHub', 'Docker', 'Generative AI', 'Postman', 'Figma']
    };

    const getIcon = (category) => {
        switch (category) {
            case 'Frontend': return <Code size={22} />;
            case 'Backend': return <Cpu size={22} />;
            case 'Database': return <HardDrive size={22} />;
            default: return <Terminal size={22} />;
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
            {/* Background decorative glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="mb-12 sm:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6 inline-block shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                    >
                        Engineering
                    </motion.span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter">
                        Technical <span className="text-gradient-alt">Stack</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Interactive Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group pt-10"
                    >
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="relative aspect-square glass-morphism rounded-[3rem] border-white/5 overflow-hidden shadow-2xl border"
                        >
                            <img
                                src="/about-tech.png"
                                alt="Tech Stack"
                                className="w-full h-full object-cover"
                            />

                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-6 right-6 sm:top-12 sm:right-12 p-4 sm:p-6 glass-morphism rounded-2xl border-white/10 shadow-2xl text-purple-400"
                            >
                                <Layers size={24} className="sm:hidden" />
                                <Layers size={32} className="hidden sm:block" />
                            </motion.div>
                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 left-6 sm:bottom-24 sm:left-12 p-4 sm:p-6 glass-morphism rounded-2xl border-white/10 shadow-2xl text-yellow-500"
                            >
                                <Code size={24} className="sm:hidden" />
                                <Code size={32} className="hidden sm:block" />
                            </motion.div>
                            <motion.div 
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute top-1/2 left-6 sm:left-12 p-3 sm:p-5 glass-morphism rounded-xl border-white/10 shadow-2xl text-cyan-400"
                            >
                                <Cpu size={22} className="sm:hidden" />
                                <Cpu size={28} className="hidden sm:block" />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Skills Matrix */}
                    <div className="flex flex-col gap-6">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="group"
                            >
                                <div className="glass-morphism p-5 sm:p-8 rounded-[2rem] border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 border relative overflow-hidden">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-brand-600/10 flex items-center justify-center text-brand-400 border border-brand-500/20 group-hover:scale-110 transition-transform">
                                            {getIcon(category)}
                                        </div>
                                        <h3 className="text-xl font-black text-white">{category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {items.map((skill) => (
                                            <div
                                                key={skill}
                                                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm font-bold hover:border-brand-500/40 hover:text-white hover:bg-brand-600/5 transition-all cursor-default"
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TechStack;
