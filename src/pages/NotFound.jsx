import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';
import Container from '../components/layout/Container';
import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
    usePageTitle('404 — Page Not Found');
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[#020617] flex items-center justify-center pt-20 relative overflow-hidden"
        >
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-500/10 text-brand-500 mb-8 border border-brand-500/20"
                    >
                        <AlertCircle size={48} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-8xl font-black text-white mb-4 tracking-tighter"
                    >
                        404
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl font-bold text-slate-200 mb-6"
                    >
                        Page Not Found
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-slate-400 max-w-md mx-auto mb-10 text-lg"
                    >
                        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <NavLink to="/">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-600/30 group"
                            >
                                <Home size={20} className="group-hover:-translate-y-1 transition-transform" />
                                Back to Home
                            </motion.button>
                        </NavLink>
                    </motion.div>
                </motion.div>
            </Container>
        </motion.div>
    );
};

export default NotFound;
