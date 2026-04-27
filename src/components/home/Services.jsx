import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Code, LayoutDashboard, Server, Zap, Cloud, Brain, ArrowRight } from 'lucide-react';
import Container from '../layout/Container';

const SERVICES = [
    {
        icon: Code,
        title: 'Full Stack Web Development',
        description: 'Pixel-perfect, responsive web applications using modern technologies.',
        color: '#a855f7'
    },
    {
        icon: LayoutDashboard,
        title: 'Admin Dashboards & Analytics',
        description: 'Interactive dashboards with real-time insights and beautiful visualizations.',
        color: '#3b82f6'
    },
    {
        icon: Server,
        title: 'API Development & Integration',
        description: 'Robust RESTful APIs and seamless integrations for scalable systems.',
        color: '#10b981'
    },
    {
        icon: Zap,
        title: 'Real-time Systems & Features',
        description: 'Real-time tracking, live updates, notifications and dynamic experiences.',
        color: '#6366f1'
    },
    {
        icon: Cloud,
        title: 'Cloud Deployment & DevOps',
        description: 'Deploying scalable apps on AWS with CI/CD and best practices.',
        color: '#f59e0b'
    },
    {
        icon: Brain,
        title: 'AI Integrations & Automation',
        description: 'Smart features with AI, chatbots, sentiment analysis and more.',
        color: '#06b6d4'
    }
];

const Services = () => {
    const location = useLocation();

    // Hide on the contact page
    if (location.pathname === '/contact') return null;

    return (
        <section className="py-20 sm:py-32 relative overflow-hidden bg-[#020617]">
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
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-brand-400">
                            Services
                        </span>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                    </motion.div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Services I Provide
                    </h2>
                    
                    <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
                        End-to-end solutions to turn your ideas into powerful digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-morphism p-8 sm:p-10 rounded-[2rem] group hover:border-brand-500/30 transition-all duration-500 flex flex-col h-full"
                        >
                            <div 
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:scale-110 shadow-lg"
                                style={{ backgroundColor: `${service.color}10`, color: service.color }}
                            >
                                <div className="absolute inset-0 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: service.color }} />
                                <service.icon className="w-7 h-7 relative z-10" />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-brand-400 transition-colors">
                                {service.title}
                            </h3>
                            
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed opacity-80 mb-8 flex-grow">
                                {service.description}
                            </p>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-400 uppercase tracking-widest group/link"
                            >
                                Learn more
                                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* Background Decorative Star */}
            <div className="absolute top-10 right-10 w-24 h-24 text-brand-500/10 blur-sm pointer-events-none animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </div>
        </section>
    );
};

export default Services;
