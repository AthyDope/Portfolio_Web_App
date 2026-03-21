import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal outer centering wrapper */}
            <div
                key="modal-wrapper"
                className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-6"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full md:max-w-4xl bg-[#020617] border border-white/10 rounded-t-[2rem] md:rounded-[2.5rem] shadow-[0_0_80px_rgba(37,99,235,0.15)]"
                    style={{ maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Decorative Glows */}
                    <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-600/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-30 w-11 h-11 flex items-center justify-center rounded-2xl bg-black/50 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                    >
                        <X size={20} />
                    </button>

                    {/* Scrollable content */}
                    <div data-lenis-prevent className="overflow-y-auto flex-1 rounded-t-[2rem] md:rounded-[2.5rem]">
                        {/* Hero Image */}
                        <div className="relative w-full aspect-[16/7] overflow-hidden shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
                            <div className="absolute top-5 left-5">
                                <span className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] bg-black/60 backdrop-blur-xl text-brand-400 border border-brand-500/40 rounded-full">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 pt-2">
                            {/* Title & Description */}
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                                    {project.title}
                                </h2>
                                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
                                    {project.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Key Features */}
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-400 mb-5 flex items-center gap-2">
                                        <span className="w-6 h-px bg-brand-500 inline-block" />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.features?.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.05 * i + 0.2 }}
                                                className="flex items-start gap-3 text-slate-300 text-sm font-medium"
                                            >
                                                <CheckCircle2 size={17} className="text-brand-400 mt-0.5 shrink-0" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-5 flex items-center gap-2">
                                        <span className="w-6 h-px bg-indigo-500 inline-block" />
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech?.map((t, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.05 * i + 0.25 }}
                                                className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all"
                                            >
                                                {t}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-white/5">
                                {project.demo && project.demo !== '#' && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-600/90 hover:bg-brand-500 text-white font-black text-sm tracking-wide transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.5)] relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Live Demo</span>
                                        <ExternalLink size={16} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 font-black text-sm tracking-wide transition-all"
                                    >
                                        <Github size={16} />
                                        <span>View on GitHub</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
