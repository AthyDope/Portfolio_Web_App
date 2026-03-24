import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/layout/Container';
import { Send, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle, Clock, Shield, ChevronDown, Briefcase, Rocket, Handshake, Lightbulb, MessageSquare } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

// ── Custom Dropdown ────────────────────────────────────────────────
const Dropdown = ({ name, value, onChange, placeholder, options }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const selected = options.find(o => o.value === value);

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const select = (val) => {
        onChange({ target: { name, value: val } });
        setOpen(false);
    };

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                className={`w-full h-14 px-6 rounded-2xl bg-slate-950/40 border text-left flex items-center justify-between gap-3 outline-none transition-all font-bold text-base ${open ? 'border-brand-500/50 bg-slate-900/60 shadow-[0_0_15px_rgba(37,99,235,0.15)]' : 'border-white/5 hover:border-white/10'}`}
            >
                <span className="flex items-center gap-3 truncate">
                    {selected ? (
                        <>
                            <span className="text-brand-400 shrink-0">{selected.icon}</span>
                            <span className="text-white">{selected.label}</span>
                        </>
                    ) : (
                        <span className="text-slate-600">{placeholder}</span>
                    )}
                </span>
                <ChevronDown size={16} className={`text-slate-500 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 top-[calc(100%+8px)] left-0 right-0 glass-morphism bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                    >
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => select(opt.value)}
                                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-sm font-bold transition-all hover:bg-brand-600/15 hover:text-white group ${value === opt.value ? 'bg-brand-600/20 text-white' : 'text-slate-400'}`}
                            >
                                <span className={`shrink-0 transition-colors ${value === opt.value ? 'text-brand-400' : 'text-slate-600 group-hover:text-brand-400'}`}>
                                    {opt.icon}
                                </span>
                                {opt.label}
                                {value === opt.value && (
                                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-400" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SUBJECT_OPTIONS = [
    { value: 'Freelance Project', label: 'Freelance Project',  icon: <Briefcase size={15} /> },
    { value: 'Job Opportunity',   label: 'Job Opportunity',    icon: <Rocket size={15} /> },
    { value: 'Collaboration',     label: 'Collaboration',      icon: <Handshake size={15} /> },
    { value: 'Consulting',        label: 'Consulting',         icon: <Lightbulb size={15} /> },
    { value: 'General Inquiry',   label: 'General Inquiry',    icon: <MessageSquare size={15} /> },
];

const BUDGET_OPTIONS = [
    { value: 'Under ₹50k',    label: 'Under ₹50,000',           icon: <span className="font-black text-sm">₹</span> },
    { value: '₹50k–₹1L',     label: '₹50,000 – ₹1,00,000',     icon: <span className="font-black text-sm">₹</span> },
    { value: '₹1L–₹3L',      label: '₹1,00,000 – ₹3,00,000',   icon: <span className="font-black text-sm">₹</span> },
    { value: '₹3L+',          label: '₹3,00,000+',              icon: <span className="font-black text-sm">₹</span> },
    { value: "Let's discuss", label: "Let's discuss",            icon: <MessageSquare size={15} /> },
];

const PROCESS_STEPS = [
    { step: '01', title: 'You Submit', desc: 'Fill out the form and hit send. Takes less than 2 minutes.' },
    { step: '02', title: 'I Review', desc: 'I carefully read every message and understand your needs.' },
    { step: '03', title: 'I Reply', desc: 'You receive a thoughtful, personalized reply within 48 working hours.' },
];

const Contact = () => {
    usePageTitle('Contact');
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', budget: '', message: ''
    });
    const [fieldErrors, setFieldErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (fieldErrors[name]) setFieldErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errors = {
            name: !formData.name.trim() ? 'Full name is required.' : '',
            email: !formData.email.trim() ? 'Email address is required.' : !emailRegex.test(formData.email) ? 'Please enter a valid email address.' : '',
            message: !formData.message.trim() ? 'Message cannot be empty.' : '',
        };
        setFieldErrors(errors);
        if (errors.name || errors.email || errors.message) return;

        setIsSubmitting(true);
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Something went wrong.');

            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', budget: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 8000);
        } catch (err) {
            setError(err.message || 'Failed to send message. Please try again or email me directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputBase = 'w-full px-6 rounded-2xl bg-slate-950/40 border text-white placeholder:text-slate-600 focus:bg-slate-900/60 focus:shadow-[0_0_15px_rgba(37,99,235,0.15)] outline-none transition-all font-bold text-base';
    const inputOk = 'border-white/5 focus:border-brand-500/50';
    const inputErr = 'border-red-500/60 focus:border-red-500/80';

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div className="pt-32 min-h-screen bg-[#020617] pb-24 relative overflow-hidden font-sans">
                {/* Background Glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
                </div>

                <Container className="relative z-10">
                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }} whileHover={{ scale: 1.05, y: -2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:bg-brand-500/20 transition-all duration-300"
                            >
                                <Mail size={14} className="text-brand-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-400">Inquiries</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }} whileHover={{ scale: 1.05, y: -2 }}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:bg-emerald-500/20 transition-all duration-300"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-bold text-emerald-400 lg:text-sm">Available for Opportunities</span>
                            </motion.div>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-indigo-500">Connect</span>
                        </h1>
                        <p className="text-slate-400 font-bold leading-relaxed text-base sm:text-xl max-w-2xl mx-auto opacity-80">
                            Have a project in mind, a question, or just want to say hi? I'm always open to discussing new opportunities and collaborations.
                        </p>
                    </motion.div>

                    {/* Response Time + Book a Call */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: <Clock size={22} className="text-brand-400" />, label: 'Avg. Response', value: 'Under 24 hrs', sub: 'Often faster', color: 'from-brand-600/10' },
                            { icon: <Mail size={22} className="text-indigo-400" />, label: 'Email', value: 'atharvachaphe7@gmail.com', sub: 'Direct inbox', color: 'from-indigo-600/10', link: 'mailto:atharvachaphe7@gmail.com' },
                            { icon: <MapPin size={22} className="text-emerald-400" />, label: 'Location', value: 'Pune, India', sub: 'IST (UTC+5:30)', color: 'from-emerald-600/10' },
                        ].map((item, i) => (
                            <motion.div
                                key={i} whileHover={{ y: -5 }}
                                className="glass-morphism p-6 rounded-[1.5rem] border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all group relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem]`} />
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <div>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</p>
                                        {item.link
                                            ? <a href={item.link} className="text-white font-black text-sm hover:text-brand-400 transition-colors truncate block max-w-[160px]">{item.value}</a>
                                            : <p className="text-white font-black text-sm">{item.value}</p>}
                                        <p className="text-slate-600 text-xs font-medium">{item.sub}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>



                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <motion.div
                            className="glass-morphism p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-slate-900/40 relative shadow-2xl perspective-1000"
                            whileHover={{ rotateX: 1, rotateY: -1 }} transition={{ duration: 0.5 }}
                        >
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-600/10 blur-3xl rounded-full pointer-events-none" />

                            <h3 className="text-3xl font-black text-white mb-10 flex items-center gap-4 tracking-tighter">
                                <MessageCircle className="text-brand-400" size={32} />
                                Send a Message
                            </h3>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                                    className="mb-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4 shadow-lg"
                                >
                                    <CheckCircle className="text-emerald-400 shrink-0" size={28} />
                                    <div>
                                        <p className="text-emerald-400 font-black text-lg">Thank you for connecting! 🎉</p>
                                        <p className="text-emerald-300/80 font-medium text-sm mt-1">We'll reach out within 48 working hours.</p>
                                    </div>
                                </motion.div>
                            )}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                                    className="mb-8 p-5 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center gap-4"
                                >
                                    <AlertCircle className="text-red-400 shrink-0" size={24} />
                                    <span className="text-red-400 font-bold">{error}</span>
                                </motion.div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block">Full Name *</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Atharva Chaphe"
                                            className={`${inputBase} h-14 ${fieldErrors.name ? inputErr : inputOk}`} />
                                        {fieldErrors.name && <p className="text-red-400 text-xs font-bold mt-1.5 ml-2">{fieldErrors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block">Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com"
                                            className={`${inputBase} h-14 ${fieldErrors.email ? inputErr : inputOk}`} />
                                        {fieldErrors.email && <p className="text-red-400 text-xs font-bold mt-1.5 ml-2">{fieldErrors.email}</p>}
                                    </div>
                                </div>

                                {/* Row 2: Phone */}
                                <div>
                                    <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block">Phone Number <span className="text-slate-600 normal-case tracking-normal font-medium">(optional)</span></label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210"
                                        className={`${inputBase} h-14 ${inputOk}`} />
                                </div>

                                {/* Row 3: Subject + Budget */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block">Subject / Category</label>
                                        <Dropdown
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Select a topic..."
                                            options={SUBJECT_OPTIONS}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block">Project Budget</label>
                                        <Dropdown
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            placeholder="Select budget range..."
                                            options={BUDGET_OPTIONS}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2 mb-2 block">Your Message *</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange}
                                        placeholder="Tell me about your project, idea, or question..." rows="5"
                                        className={`${inputBase} py-4 resize-none ${fieldErrors.message ? inputErr : inputOk}`}
                                    ></textarea>
                                    {fieldErrors.message && <p className="text-red-400 text-xs font-bold mt-1.5 ml-2">{fieldErrors.message}</p>}
                                </div>

                                {/* Privacy Note */}
                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/2 border border-white/5">
                                    <Shield size={14} className="text-slate-500 shrink-0" />
                                    <p className="text-slate-500 text-xs font-medium">
                                        Your information is never shared or sold. See our{' '}
                                        <a href="/privacy" className="text-brand-400 hover:text-brand-300 underline">Privacy Policy</a>.
                                    </p>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit" disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full group bg-brand-600/90 hover:bg-brand-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-10 py-5 rounded-2xl text-lg font-black tracking-wide transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 overflow-hidden relative border border-white/10"
                                >
                                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>

                    {/* What Happens Next */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-10">
                            <span className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4 inline-block">Process</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">What Happens <span className="text-gradient-alt">Next?</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {PROCESS_STEPS.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="glass-morphism p-8 rounded-[2rem] border border-white/5 bg-slate-900/40 relative group hover:border-brand-500/30 hover:bg-slate-900/60 transition-all"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                                    <div className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors mb-4 tracking-tighter">{step.step}</div>
                                    <h3 className="text-white font-black text-xl mb-2 group-hover:text-brand-400 transition-colors">{step.title}</h3>
                                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{step.desc}</p>
                                    {i < PROCESS_STEPS.length - 1 && (
                                        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </div>
        </motion.div>
    );
};

export default Contact;

