import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { Search, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';

const WorkProcess = () => {
    const steps = [
        {
            title: 'Discovery',
            description: 'Understanding your goals, target audience, and project requirements to build a solid foundation.',
            icon: <Search className="text-brand-400" size={32} />,
            color: 'from-brand-500/20 to-brand-600/20'
        },
        {
            title: 'Design',
            description: 'Creating high-fidelity wireframes and visual designs that align with your brand identity and UX goals.',
            icon: <PenTool className="text-indigo-400" size={32} />,
            color: 'from-indigo-500/20 to-indigo-600/20'
        },
        {
            title: 'Development',
            description: 'Writing clean, scalable code using modern technologies to bring the design to life with full functionality.',
            icon: <Code className="text-emerald-400" size={32} />,
            color: 'from-emerald-500/20 to-emerald-600/20'
        },
        {
            title: 'Quality Check',
            description: 'Rigorous testing across devices and browsers to ensure a bug-free, performant, and accessible experience.',
            icon: <CheckCircle className="text-amber-400" size={32} />,
            color: 'from-amber-500/20 to-amber-600/20'
        },
        {
            title: 'Deployment',
            description: 'Final launch and optimization, ensuring smooth performance and providing ongoing support as needed.',
            icon: <Rocket className="text-rose-400" size={32} />,
            color: 'from-rose-500/20 to-rose-600/20'
        }
    ];

    return (
        <section id="process" className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6"
                    >
                        Methodology
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
                    >
                        How I <span className="text-gradient-alt">Work</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl leading-relaxed font-medium"
                    >
                        A structured, step-by-step approach to transform your ideas into exceptional digital solutions.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent hidden lg:block -translate-y-[100px]" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className="glass-morphism p-6 sm:p-8 rounded-[2rem] border-white/5 bg-slate-900/40 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:bg-slate-900/60 group-hover:border-white/10 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] perspective-1000">
                                    {/* Icon Container with 3D Tilt */}
                                    <motion.div 
                                        whileHover={{ rotateY: 20, rotateX: -10, scale: 1.1 }}
                                        className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${step.color} border border-white/5 flex items-center justify-center mb-8 relative shadow-2xl`}
                                    >
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-black text-white shadow-xl z-20">
                                            0{idx + 1}
                                        </div>
                                        {step.icon}
                                        
                                        {/* Glow Effect */}
                                        <div className={`absolute inset-0 bg-white/10 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    </motion.div>

                                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-brand-400 transition-colors tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity line-clamp-4">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WorkProcess;
