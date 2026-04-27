import React from 'react';
import { motion } from 'framer-motion';

const TechStrip = () => {
    const techs = [
        { name: 'HTML5', img: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
        { name: 'CSS3', img: 'https://cdn.simpleicons.org/css/1572B6', color: '#1572B6' },
        { name: 'React', img: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
        { name: 'Vite', img: 'https://cdn.simpleicons.org/vite/646CFF', color: '#646CFF' },
        { name: 'Tailwind CSS', img: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
        { name: 'Bootstrap', img: 'https://cdn.simpleicons.org/bootstrap/7952B3', color: '#7952B3' },
        { name: 'Python', img: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
        { name: 'MySQL', img: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
        { name: 'Git', img: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
        { name: 'GitHub', img: 'https://cdn.simpleicons.org/github/white', color: '#ffffff' },
        { name: 'AWS', img: '/aws.svg', color: '#FF9900' },
        { name: 'Docker', img: 'https://cdn.simpleicons.org/docker/2496ED', color: '#2496ED' },
        { name: 'Postman', img: '/postman.svg', color: '#FF6C37' },
        { name: 'API', img: '/openapi.svg', color: '#6BA539' },
    ];

    return (
        <div className="w-full py-20 bg-[#020617] overflow-hidden relative border-y border-white/5">
            {/* Top/Bottom Border Decorative Overlays */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mb-12"
            >
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                    Core Technologies
                </span>
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
            </motion.div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: [0, -2000] }} 
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                    className="flex gap-8 whitespace-nowrap px-4 py-8"
                >
                    {[...techs, ...techs, ...techs, ...techs, ...techs].map((t, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ y: -5, scale: 1.05, rotateX: 5, rotateY: 5 }}
                            className="flex items-center gap-5 px-8 py-5 glass-morphism rounded-[1.5rem] border-white/5 bg-slate-900/40 group hover:border-white/10 transition-all cursor-default relative overflow-hidden active:scale-95 perspective-1000 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                        >
                            {/* Decorative underlying glow on hover */}
                            <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                                style={{ background: `linear-gradient(135deg, ${t.color}40, transparent)` }} 
                            />
                            
                            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative z-10">
                                <img src={t.img} alt={t.name} className="w-8 h-8 object-contain drop-shadow-md z-10" />
                                <div 
                                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full" 
                                    style={{ backgroundColor: t.color }} 
                                />
                            </div>
                            <span className="text-slate-400 font-black group-hover:text-white transition-colors uppercase tracking-[0.15em] text-xs relative z-10">
                                {t.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
            {/* Side Masks for Seamless Fade */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default TechStrip;

