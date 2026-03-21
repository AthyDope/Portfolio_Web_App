import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { PROJECTS } from '../data/projects';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[#020617] pt-32 relative overflow-hidden"
        >
            {/* Background Decorative Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-8 inline-block shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                    >
                        Solutions
                    </motion.span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                        My <span className="text-gradient-alt">Projects</span>
                    </h1>
                    <p className="text-slate-400 text-xl font-medium leading-relaxed opacity-80">
                        A curated collection of digital experiences, ranging from full-stack platforms to elegant frontend interfaces.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-6 items-center justify-center mb-20"
                >
                    <ProjectFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32"
                >
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (idx * 0.1) }}
                        >
                            <ProjectCard project={project} onClick={setSelectedProject} />
                        </motion.div>
                    ))}
                </motion.div>
            </Container>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </motion.div>
    );
};

export default Projects;
