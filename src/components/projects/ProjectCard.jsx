import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            className="group perspective-1000 h-full cursor-pointer"
            whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onClick && onClick(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick && onClick(project)}
        >
            <div className="glass-morphism h-full p-6 rounded-[2.5rem] bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 border border-white/5 relative overflow-hidden flex flex-col shadow-2xl">
                {/* Image Container with Internal Hover Effects */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] mb-8 shadow-2xl border border-white/5">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Premium Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3 text-white"
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest">View Details</span>
                            <ArrowUpRight size={20} className="text-brand-400" />
                        </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] bg-black/40 backdrop-blur-xl text-brand-400 border border-brand-500/30 rounded-full shadow-lg">
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-3xl font-black text-white mb-3 tracking-tighter group-hover:text-brand-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed font-bold opacity-70 line-clamp-2">
                        {project.subtitle}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2.5">
                        {project.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-4 py-1.5 text-[10px] font-black text-slate-300 bg-white/5 border border-white/10 rounded-xl group-hover:border-brand-500/40 group-hover:text-white group-hover:bg-brand-600/10 transition-all duration-300 shadow-lg"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-600/5 rounded-full blur-2xl group-hover:bg-brand-600/10 transition-colors" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
