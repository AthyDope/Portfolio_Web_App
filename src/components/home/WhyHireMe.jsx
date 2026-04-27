import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Briefcase, Code, Rocket, Users } from 'lucide-react';
import Container from '../layout/Container';

const HIRE_REASONS = [
    {
        icon: Briefcase,
        title: 'Real-world Experience',
        description: 'Experience building real-world systems including dashboards, tracking platforms, and analytics tools used in real environments.'
    },
    {
        icon: Code,
        title: 'Full-Stack Expertise',
        description: 'Strong command over frontend, backend, databases, APIs, and cloud deployment. I build complete solutions end-to-end.'
    },
    {
        icon: Rocket,
        title: 'Scalable Solutions',
        description: 'I focus on writing clean, efficient code and designing scalable architecture that grows with your business.'
    },
    {
        icon: Users,
        title: 'Flexible & Reliable',
        description: 'Able to handle projects independently with full ownership or collaborate seamlessly with teams.'
    }
];

const WhyHireMe = () => {
    const location = useLocation();

    // Hide on the contact page
    if (location.pathname === '/contact') return null;

    return (
        <section className="py-20 sm:py-32 relative overflow-hidden bg-[#020617]">
            {/* Subtle Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <motion.div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                            Why Hire Me?
                        </span>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                    </motion.div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Why work with <span className="text-gradient-alt">me?</span>
                    </h2>
                    
                    <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
                        I combine technical expertise with a problem-solving mindset to deliver solutions that drive real results.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {HIRE_REASONS.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-morphism p-8 sm:p-10 rounded-[2rem] flex flex-col items-center text-center group hover:border-brand-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mb-8 relative">
                                <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                <reason.icon className="w-8 h-8 text-brand-400 relative z-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                                {reason.title}
                            </h3>
                            <div className="h-[2px] w-8 bg-brand-500/40 mb-6 group-hover:w-12 transition-all" />
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed opacity-80">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyHireMe;
