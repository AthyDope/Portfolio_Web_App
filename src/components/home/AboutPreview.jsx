import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Layers, Database, Cpu, ArrowUpRight } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';

const AboutPreview = () => {
    return (
        <section id="about" className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                                Discover
                            </span>
                            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            <span className="text-gradient-alt">About Me</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium">
                            I am a full stack developer with a passion for creating efficient and scalable web applications. Skilled in Python and MERN stack, I love building both intuitive UI and robust backend systems.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {/* Stat Card 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -5, rotateX: -5, rotateY: 5 }}
                            className="glass-morphism p-6 sm:p-8 rounded-[2.5rem] border-white/5 bg-slate-900/40 relative group perspective-1000"
                        >
                            <div className="absolute inset-0 bg-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-400 mb-6 border border-brand-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Cpu size={24} />
                                </div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                                        <AnimatedCounter target={10} suffix="+" />
                                    </span>
                                </div>
                                <p className="text-slate-300 font-bold text-lg">Projects</p>
                                <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-black text-[10px]">Completed</p>
                            </div>
                        </motion.div>

                        {/* Stat Card 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -5, rotateX: -5, rotateY: -5 }}
                            className="glass-morphism p-6 sm:p-8 rounded-[2.5rem] border-white/5 bg-slate-900/40 relative group perspective-1000"
                        >
                            <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Layers size={24} />
                                </div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                                        <AnimatedCounter target={3} suffix="+" />
                                    </span>
                                </div>
                                <p className="text-slate-300 font-bold text-lg">Tech Stacks</p>
                                <div className="flex gap-1.5 mt-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Full Width Experience Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 glass-morphism p-6 sm:p-8 rounded-[2.5rem] border-white/5 bg-slate-900/40 flex items-center justify-between group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-600/10 rounded-[1.5rem] flex items-center justify-center text-brand-400 border border-brand-500/20 shadow-xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                                    <Database size={28} className="sm:hidden" />
                                    <Database size={32} className="hidden sm:block" />
                                </div>
                                <div>
                                    <h4 className="text-lg sm:text-2xl font-black text-white mb-1">Intern Experience</h4>
                                    <p className="text-slate-400 font-medium text-sm sm:text-base">Industry exposure & collaborative development</p>
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutPreview;
