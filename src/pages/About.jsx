import React from 'react';
import { motion } from 'framer-motion';
import AboutIntro from '../components/about/AboutIntro';
import TechStack from '../components/about/TechStack';
import Education from '../components/about/Education';
import Experience from '../components/about/Experience';

import Languages from '../components/about/Languages';
import Certifications from '../components/about/Certifications';
import Achievements from '../components/about/Achievements';

import CurrentlyLearning from '../components/about/CurrentlyLearning';
import Timeline from '../components/projects/Timeline';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[#020617] pt-16 sm:pt-20 relative overflow-hidden"
        >
            {/* Background Decorative Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <AboutIntro />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <TechStack />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Education />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Experience />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Certifications />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Achievements />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <Languages />
                </motion.div>
                
                <CurrentlyLearning />
                
                {/* Timeline Section added from Projects page */}
                <Timeline />
            </div>
        </motion.div>
    );
};

export default About;
