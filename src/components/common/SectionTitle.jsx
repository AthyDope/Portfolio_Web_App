import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
    const al = { left: 'text-left items-start', center: 'text-center items-center', right: 'text-right items-end' };
    return (
        <div className={`flex flex-col mb-12 ${al[align]} ${className}`}>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-brand-500 font-bold uppercase tracking-[0.2em] text-xs mb-3">{subtitle}</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{title}</motion.h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="h-1 bg-brand-600 rounded-full mt-4" />
        </div>
    );
};

export default SectionTitle;
