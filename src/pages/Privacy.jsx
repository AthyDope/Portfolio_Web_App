import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';

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

const Privacy = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-[#020617] pt-36 pb-24 relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

        <Container className="relative z-10 max-w-3xl mx-auto">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span
                    variants={itemVariants}
                    className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6 inline-block"
                >
                    Legal
                </motion.span>
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                    Privacy <span className="text-gradient-alt">Policy</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-slate-500 text-sm mb-12 font-medium">Last updated: March 2026</motion.p>

                <motion.div
                    variants={containerVariants}
                    className="glass-morphism p-8 md:p-12 rounded-[2rem] border border-white/5 bg-slate-900/40"
                >
                    <Section title="1. Information We Collect">
                        <p>This portfolio website does not collect personal data automatically. If you use the contact form, only the name, email address, and message you provide are collected — solely to respond to your inquiry.</p>
                    </Section>
                    <Section title="2. How We Use Your Information">
                        <p>Any information submitted through the contact form is used exclusively to communicate with you. We do not sell, rent, or share your personal data with third parties.</p>
                    </Section>
                    <Section title="3. Cookies">
                        <p>This site may use minimal technical cookies necessary for basic functionality. No third-party advertising or tracking cookies are used.</p>
                    </Section>
                    <Section title="4. Third-Party Services">
                        <p>This site uses EmailJS to process contact form submissions. Their privacy policy governs how they handle data on their end. Please review <a href="https://www.emailjs.com/legal/privacy-policy/" className="text-brand-400 hover:text-brand-300 underline" target="_blank" rel="noreferrer">EmailJS Privacy Policy</a>.</p>
                    </Section>
                    <Section title="5. Data Security">
                        <p>We take reasonable precautions to protect information submitted through this site. However, no method of internet transmission is 100% secure.</p>
                    </Section>
                    <Section title="6. Contact">
                        <p>For any privacy-related questions, contact: <a href="mailto:atharvachaphe7@gmail.com" className="text-brand-400 hover:text-brand-300 underline">atharvachaphe7@gmail.com</a></p>
                    </Section>
                </motion.div>
            </motion.div>
        </Container>
    </motion.div>
);

export default Privacy;
