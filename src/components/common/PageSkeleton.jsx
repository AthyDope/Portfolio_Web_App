import React from 'react';
import { motion } from 'framer-motion';

const PageSkeleton = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full min-h-[80vh] flex flex-col pt-40 px-6 container mx-auto" 
            aria-hidden="true"
        >
            {/* Hero Skeleton Area */}
            <div className="flex flex-col items-center justify-center mb-24 w-full">
                <div className="w-24 h-6 bg-slate-800/60 rounded-full animate-pulse mb-8 border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
                <div className="w-full max-w-2xl h-16 sm:h-20 bg-slate-800/40 rounded-3xl animate-pulse mb-6 border border-white/5" />
                <div className="w-3/4 max-w-xl h-16 sm:h-20 bg-slate-800/40 rounded-3xl animate-pulse mb-10 border border-white/5" />
                <div className="w-1/2 max-w-md h-4 bg-slate-800/30 rounded-full animate-pulse mb-4" />
                <div className="w-1/3 max-w-xs h-4 bg-slate-800/30 rounded-full animate-pulse" />
                
                <div className="flex gap-6 mt-12 w-full justify-center">
                    <div className="w-40 h-14 bg-brand-600/20 rounded-2xl animate-pulse border border-brand-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]" />
                    <div className="w-40 h-14 bg-slate-800/40 rounded-2xl animate-pulse border border-white/5" />
                </div>
            </div>

            {/* Grid Skeleton Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="w-full h-80 bg-slate-900/40 glass-morphism rounded-[2rem] border border-white/5 animate-pulse flex flex-col p-8 relative overflow-hidden">
                        {/* Shimmer effect overlay */}
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
                        
                        <div className="w-14 h-14 bg-slate-800/60 rounded-2xl mb-8 border border-white/10" />
                        <div className="w-3/4 h-6 bg-slate-800/50 rounded-lg mb-6" />
                        <div className="w-full h-4 bg-slate-800/40 rounded-lg mb-3" />
                        <div className="w-5/6 h-4 bg-slate-800/40 rounded-lg mb-auto" />
                        <div className="w-1/3 h-8 bg-slate-800/50 rounded-lg mt-8" />
                    </div>
                ))}
            </div>
            
            {/* Background ambient glow matching the site aesthetic */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        </motion.div>
    );
};

export default PageSkeleton;
