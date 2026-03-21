import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import { PROJECTS } from '../../data/projects';

const FeaturedProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    // Use first 3 projects for the 3-column grid in Figma
    const featured = PROJECTS.slice(0, 3);

    return (
        <section id="projects" className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6"
                    >
                        Portfolio
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6"
                    >
                        Featured <span className="text-gradient-alt">Projects</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl leading-relaxed font-medium"
                    >
                        A curated selection of my most impactful work, combining innovative engineering with high-end design.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                        >
                            <ProjectCard project={project} onClick={setSelectedProject} />
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};

export default FeaturedProjects;
