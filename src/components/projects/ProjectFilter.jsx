import React from 'react';
import { motion } from 'framer-motion';

const ProjectFilter = ({ activeCategory, setActiveCategory }) => {
    const categories = ['All', 'Web Apps', 'Frontend', 'Backend', 'Full Stack'];

    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden ${
                        activeCategory === cat
                            ? 'text-white border-transparent'
                            : 'text-slate-500 hover:text-slate-300 glass-morphism border-white/5'
                    }`}
                >
                    {activeCategory === cat && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-brand-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                    <span className="relative z-10">{cat}</span>
                </button>
            ))}
        </div>
    );
};

export default ProjectFilter;
