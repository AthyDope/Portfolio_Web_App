import { motion } from 'framer-motion';
import { GraduationCap, Award, Rocket, Code } from 'lucide-react';
import Container from '../layout/Container';

const CertificationStrip = () => {
    const items = [
        { icon: <GraduationCap size={24} />, label: 'Internship Completed', color: '#818cf8' },
        { icon: <Award size={24} />, label: 'Full Stack Certified', color: '#3b82f6' },
        { icon: <Rocket size={24} />, label: 'Multiple Live Projects', color: '#34d399' },
        { icon: <Code size={24} />, label: 'Open Source Contributor', color: '#22d3ee' },
    ];

    return (
        <section className="py-20 bg-[#020617] relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-4 mb-10"
                >
                    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                        Highlights
                    </span>
                    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, rotateX: -5, rotateY: 5 }}
                            className="group perspective-1000"
                        >
                            <div className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 glass-morphism rounded-2xl border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 hover:border-white/10 relative overflow-hidden">
                                <div 
                                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                                    style={{ color: item.color }}
                                >
                                    {item.icon}
                                    <div className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: item.color }} />
                                </div>
                                <span className="text-slate-300 font-bold text-sm tracking-wide group-hover:text-white transition-colors relative z-10 leading-tight">
                                    {item.label}
                                </span>
                                
                                {/* Inner Card Border Glow */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/5 rounded-2xl transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CertificationStrip;
