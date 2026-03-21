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

const Cookies = () => {
    usePageTitle('Cookie Policy');
    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-[#020617] pt-36 pb-24 relative overflow-hidden"
    >
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-3xl mx-auto">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span
                    variants={itemVariants}
                    className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6 inline-block"
                >
                    Legal
                </motion.span>
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                    Cookie <span className="text-gradient-alt">Policy</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-slate-500 text-sm mb-12 font-medium">Last updated: March 2026</motion.p>

                <motion.div
                    variants={containerVariants}
                    className="glass-morphism p-8 md:p-12 rounded-[2rem] border border-white/5 bg-slate-900/40"
                >
                    <Section title="1. What Are Cookies?">
                        <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly and improve user experience by remembering preferences and session data.</p>
                    </Section>
                    <Section title="2. How This Site Uses Cookies">
                        <p>This portfolio website uses only <strong className="text-white">strictly necessary cookies</strong> — the minimum required for the site to operate correctly (e.g., session state, scroll position). No tracking or advertising cookies are used.</p>
                    </Section>
                    <Section title="3. Third-Party Cookies">
                        <p>If you use the contact form, EmailJS may set cookies on your device as part of their service. These are governed by EmailJS's own cookie policy.</p>
                    </Section>
                    <Section title="4. Your Choices">
                        <p>You can disable cookies via your browser settings. Note that disabling cookies may affect the site's functionality. Most modern browsers allow you to control cookies through their privacy or settings panel.</p>
                    </Section>
                    <Section title="5. No Analytics Tracking">
                        <p>This site does not currently use Google Analytics, Facebook Pixel, or any other third-party analytics scripts that track your browsing behavior.</p>
                    </Section>
                    <Section title="6. Updates to This Policy">
                        <p>This cookie policy may be updated when new features or third-party services are added to the site. The "Last updated" date at the top will be revised accordingly.</p>
                    </Section>
                    <Section title="7. Contact">
                        <p>Questions about cookie usage? Email: <a href="mailto:atharvachaphe7@gmail.com" className="text-emerald-400 hover:text-emerald-300 underline">atharvachaphe7@gmail.com</a></p>
                    </Section>
                </motion.div>
            </motion.div>
        </Container>
    </motion.div>
    );
};

export default Cookies;
