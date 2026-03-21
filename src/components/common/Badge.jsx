import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
    const vs = {
        primary: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
        secondary: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        slate: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    };
    return <span className={`px-3 py-1 text-[10px] uppercase font-semibold border rounded-full ${vs[variant]} ${className}`}>{children}</span>;
};

export default Badge;
