import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import TechStrip from '../components/home/TechStrip';
import StatsStrip from '../components/home/StatsStrip';
import AboutPreview from '../components/home/AboutPreview';
import WorkProcess from '../components/home/WorkProcess';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CertificationStrip from '../components/home/CertificationStrip';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
    usePageTitle('Full Stack Developer');
    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#020617]"
    >
        <Hero />
        <TechStrip />
        <FeaturedProjects />
        <StatsStrip />
        <AboutPreview />
        <WorkProcess />
        <CertificationStrip />
    </motion.div>
    );
};

export default Home;
