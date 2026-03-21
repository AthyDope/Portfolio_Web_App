import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Code2 } from 'lucide-react';
import Container from '../layout/Container';

const CurrentlyLearning = () => {
    return (
        <Container className="py-20 relative z-10 w-full flex justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                className="glass-morphism p-10 md:p-14 rounded-[2rem] border border-white/5 bg-slate-900/40 relative overflow-hidden group max-w-4xl w-full mx-auto perspective-1000 shadow-2xl transition-all duration-500 hover:border-brand-500/30 hover:bg-slate-900/60"
            >
                {/* Decorative underlying glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
                
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full group-hover:bg-brand-500/20 transition-colors duration-700" />
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                        <Brain size={32} />
                    </div>
                    
                    <div>
                        <span className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4 inline-block">
                            Growth & Learning
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                            Currently <span className="text-gradient-alt">Learning</span>
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-6">
                            I am currently diving deep into <strong className="text-white">Data Science</strong>, expanding my analytical toolkit and exploring machine learning algorithms, data visualization, and predictive modeling.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-slate-950/50 px-4 py-2 rounded-xl border border-white/5">
                                <BookOpen size={16} className="text-indigo-400" />
                                <span className="text-sm font-bold text-slate-300">Data Science</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-950/50 px-4 py-2 rounded-xl border border-white/5">
                                <Code2 size={16} className="text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Machine Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Container>
    );
};

export default CurrentlyLearning;
