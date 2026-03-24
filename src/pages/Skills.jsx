import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import { Code, Database, Settings, Layout, Globe, Server, Terminal, Cpu, Github, Layers, Zap, Flame } from 'lucide-react';
import TechProficiency from '../components/skills/TechProficiency';
import ToolsWorkflows from '../components/skills/ToolsWorkflows';
import SoftSkills from '../components/skills/SoftSkills';
import CurrentlyLearning from '../components/about/CurrentlyLearning';
import usePageTitle from '../hooks/usePageTitle';

const Skills = () => {
    usePageTitle('Skills');
    const categories = [
        {
            title: 'Frontend Development',
            icon: <Code className="text-blue-400" size={32} />,
            description: 'Building high-performance, responsive, and intuitive user interfaces with modern frameworks.',
            skills: [
                { name: 'React.js', icon: <Globe size={14} />, color: 'bg-blue-500/10 text-blue-400' },
                { name: 'Next.js', icon: <Globe size={14} />, color: 'bg-slate-500/10 text-slate-300' },
                { name: 'Tailwind CSS', icon: <Layout size={14} />, color: 'bg-cyan-500/10 text-cyan-400' },
                { name: 'Framermotion', icon: <Layers size={14} />, color: 'bg-purple-500/10 text-purple-400' },
            ]
        },
        {
            title: 'Backend & APIs',
            icon: <Server className="text-yellow-500" size={32} />,
            description: 'Scalable server-side logic and robust API architectures ensuring data integrity and security.',
            skills: [
                { name: 'Node.js', icon: <Terminal size={14} />, color: 'bg-green-500/10 text-green-400' },
                { name: 'Python', icon: <Terminal size={14} />, color: 'bg-indigo-600/10 text-indigo-400' },
                { name: 'Django', icon: <Server size={14} />, color: 'bg-emerald-600/10 text-emerald-400' },
                { name: 'Express.js', icon: <Settings size={14} />, color: 'bg-slate-500/10 text-slate-400' },
            ]
        },
        {
            title: 'Database & Cloud',
            icon: <Database className="text-brand-400" size={32} />,
            description: 'Expertise in relational and NoSQL databases, along with cloud-native deployment patterns.',
            skills: [
                { name: 'MongoDB', icon: <Database size={14} />, color: 'bg-green-600/10 text-green-500' },
                { name: 'PostgreSQL', icon: <Database size={14} />, color: 'bg-blue-400/10 text-blue-400' },
                { name: 'Postman', icon: <Globe size={14} />, color: 'bg-orange-500/10 text-orange-400' },
                { name: 'Firebase', icon: <Flame size={14} />, color: 'bg-yellow-500/10 text-yellow-500' },
            ]
        },
        {
            title: 'Emerging & Core',
            icon: <Zap className="text-indigo-400" size={32} />,
            description: 'Continuously adopting cutting-edge technologies like Generative AI to solve complex problems.',
            skills: [
                { name: 'Generative AI', icon: <Zap size={14} />, color: 'bg-purple-500/10 text-purple-400' },
                { name: 'Docker', icon: <Cpu size={14} />, color: 'bg-blue-500/10 text-blue-400' },
                { name: 'Git & GitHub', icon: <Github size={14} />, color: 'bg-orange-500/10 text-orange-400' },
                { name: 'UI/UX (Figma)', icon: <Layout size={14} />, color: 'bg-pink-500/10 text-pink-400' },
            ]
        }
    ];

    const techStack = [
        { name: 'Vite', icon: <Globe size={18} /> },
        { name: 'Tailwind', icon: <Layout size={18} /> },
        { name: 'GitHub', icon: <Github size={18} /> },
        { name: 'Docker', icon: <Cpu size={18} /> },
        { name: 'Generative AI', icon: <Zap size={18} /> },
        { name: 'Firebase', icon: <Flame size={18} /> },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="pt-32 min-h-screen bg-[#020617] relative overflow-hidden font-sans">
                {/* Decorative Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24 max-w-3xl mx-auto"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                        >
                            <Zap size={14} className="text-brand-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-400">Expertise</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-500">Arsenal</span>
                        </h1>
                        <p className="text-slate-400 font-bold leading-relaxed text-base sm:text-xl max-w-2xl mx-auto opacity-80">
                            A carefully curated collection of technologies and frameworks I use to bring complex digital visions to life.
                        </p>
                    </motion.div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                                className="glass-morphism p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 flex flex-col h-full group perspective-1000 shadow-2xl relative overflow-hidden"
                            >
                                {/* Decorative underlying glow */}
                                <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-600/5 rounded-full blur-3xl group-hover:bg-brand-600/10 transition-colors" />

                                <div className="flex items-center gap-4 sm:gap-8 mb-6 sm:mb-10 relative z-10">
                                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white/5 rounded-[1.25rem] sm:rounded-[1.75rem] flex items-center justify-center border border-white/10 group-hover:bg-brand-600/20 group-hover:border-brand-500/40 transition-all duration-500 shadow-xl overflow-hidden relative shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tighter group-hover:text-brand-400 transition-colors">
                                        {cat.title}
                                    </h3>
                                </div>

                                <p className="text-slate-400 mb-8 sm:mb-12 leading-relaxed font-bold text-base sm:text-lg opacity-70 relative z-10">
                                    {cat.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-4 relative z-10">
                                    {cat.skills.map((skill, sIdx) => (
                                        <motion.div 
                                            key={sIdx} 
                                            whileHover={{ scale: 1.05 }}
                                            className={`flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/5 glass-morphism text-[11px] font-black uppercase tracking-wider transition-all hover:border-brand-500/40 hover:bg-brand-600/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] ${skill.color}`}
                                        >
                                            <span className="opacity-70 group-hover:opacity-100">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
                
                <TechProficiency />
                <ToolsWorkflows />
                <CurrentlyLearning />
                <SoftSkills />
            </div>
        </motion.div>
    );
};

export default Skills;
