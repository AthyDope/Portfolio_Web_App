import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import usePageTitle from '../hooks/usePageTitle';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Section = ({ title, children }) => (
    <motion.div variants={itemVariants} className="mb-10">
        <h2 className="text-xl font-black text-white mb-3 tracking-tight">{title}</h2>
        <div className="text-slate-400 leading-relaxed font-medium space-y-3">{children}</div>
    </motion.div>
);

const Terms = () => {
    usePageTitle('Terms of Use');
    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-[#020617] pt-36 pb-24 relative overflow-hidden"
    >
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-3xl mx-auto">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span
                    variants={itemVariants}
                    className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 inline-block"
                >
                    Legal
                </motion.span>
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                    Terms of <span className="text-gradient-alt">Use</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-slate-500 text-sm mb-12 font-medium">Last updated: March 2026</motion.p>

                <motion.div
                    variants={containerVariants}
                    className="glass-morphism p-8 md:p-12 rounded-[2rem] border border-white/5 bg-slate-900/40"
                >
                    <Section title="1. Acceptance of Terms">
                        <p>By accessing and using this portfolio website (atharvachaphe.dev), you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of this site.</p>
                    </Section>
                    <Section title="2. Intellectual Property">
                        <p>All content on this website — including text, code, design, images, and branding — is the intellectual property of Atharva Chaphe unless stated otherwise. You may not copy, reproduce, or redistibute any content without explicit written permission.</p>
                    </Section>
                    <Section title="3. Permitted Use">
                        <p>You may browse this website for personal, non-commercial purposes. You may share links to the site. You may not attempt to reverse-engineer, scrape, or misuse any part of the site.</p>
                    </Section>
                    <Section title="4. Disclaimer">
                        <p>This website is provided "as is" without warranties of any kind. Atharva Chaphe makes no representations about the accuracy, reliability, or suitability of the content for any purpose.</p>
                    </Section>
                    <Section title="5. External Links">
                        <p>This site may contain links to third-party websites. These links are provided for convenience only. Atharva Chaphe has no control over their content and accepts no responsibility for them.</p>
                    </Section>
                    <Section title="6. Changes to Terms">
                        <p>These terms may be updated at any time without notice. Continued use of the site constitutes acceptance of the revised terms.</p>
                    </Section>
                    <Section title="7. Contact">
                        <p>Questions about these terms? Reach out: <a href="mailto:atharvachaphe7@gmail.com" className="text-indigo-400 hover:text-indigo-300 underline">atharvachaphe7@gmail.com</a></p>
                    </Section>
                </motion.div>
            </motion.div>
        </Container>
    </motion.div>
    );
};

export default Terms;
