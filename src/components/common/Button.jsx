import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', icon: Icon, ...props }) => {
    const vStyles = {
        primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-900/20',
        secondary: 'glass-morphism text-white hover:border-brand-500/50',
        outline: 'border border-slate-700 text-slate-300 hover:border-brand-500 hover:text-white',
        ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
    };

    const sStyles = { sm: 'px-4 py-1.5 text-xs', md: 'px-6 py-2.5 text-sm', lg: 'px-8 py-3.5 text-base' };

    return (
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all ${vStyles[variant]} ${sStyles[size]} ${className}`} {...props}>
            {children} {Icon && <Icon size={16} />}
        </motion.button>
    );
};

export default Button;
