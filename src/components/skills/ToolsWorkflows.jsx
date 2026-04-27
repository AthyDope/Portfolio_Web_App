import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { SiPostman, SiFigma, SiDocker, SiGithubactions, SiGit } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const ToolsWorkflows = () => {
    const tools = [
        { name: 'VS Code', Icon: VscVscode, color: '#007ACC', desc: 'Code Editor' },
        { name: 'Postman', Icon: SiPostman, color: '#FF6C37', desc: 'API Testing' },
        { name: 'Figma', Icon: SiFigma, color: '#F24E1E', desc: 'UI/UX Design' },
        { name: 'Docker', Icon: SiDocker, color: '#2496ED', desc: 'Containerization' },
        { name: 'CI/CD Pipelines', Icon: SiGithubactions, color: '#2088FF', desc: 'Automation' },
        { name: 'Git', Icon: SiGit, color: '#F05032', desc: 'Version Control' },
    ];

    return (
        <section className="py-24 relative z-10 bg-[#020617]">
            <Container>
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-500/50" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-400">
                            Workspace
                        </span>
                        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-500/50" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        Tools & <span className="text-gradient-alt">Workflows</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {tools.map((tool, idx) => {
                        const { Icon, color } = tool;
                        return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="glass-morphism p-4 sm:p-6 rounded-[1.5rem] border border-white/5 flex flex-col items-center justify-center gap-3 sm:gap-4 hover:border-indigo-500/30 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 group perspective-1000 shadow-xl relative overflow-hidden"
                        >
                            {/* Decorative underlying glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem]" />
                            
                            <div className="relative z-10 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <Icon size={40} style={{ color }} />
                            </div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-indigo-400 transition-colors duration-500">{tool.name}</h3>
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{tool.desc}</p>
                            </div>
                        </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default ToolsWorkflows;
