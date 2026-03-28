import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GithubAccessModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        onClose();
        navigate('/contact');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="github-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[10001] bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[10002] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-md bg-[#020617] border border-white/10 rounded-[2rem] shadow-[0_0_80px_rgba(37,99,235,0.2)] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative glows */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/15 blur-[80px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <X size={18} />
                            </button>

                            <div className="relative z-10 p-8 sm:p-10">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6 relative"
                                >
                                    <Github size={28} className="text-brand-400" />
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#020617] border border-white/10 flex items-center justify-center">
                                        <Lock size={11} className="text-slate-400" />
                                    </div>
                                </motion.div>

                                {/* Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-2xl font-black text-white tracking-tighter mb-3">
                                        Private Repository
                                    </h3>
                                    <p className="text-slate-400 font-medium text-sm leading-relaxed mb-2">
                                        This repository is private. To get access, please reach out to Atharva directly via the contact form.
                                    </p>
                                    <p className="text-slate-500 text-xs font-medium leading-relaxed">
                                        Once you submit a request, Atharva will review it and grant you access within 24–48 hours.
                                    </p>
                                </motion.div>

                                {/* Divider */}
                                <div className="my-7 border-t border-white/5" />

                                {/* Actions */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-3"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={handleContactClick}
                                        className="flex-1 group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-brand-600/90 hover:bg-brand-500 text-white font-black text-sm tracking-wide transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.5)] relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Request Access</span>
                                        <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={onClose}
                                        className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 font-black text-sm tracking-wide transition-all"
                                    >
                                        Maybe Later
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default GithubAccessModal;
