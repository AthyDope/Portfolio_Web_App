import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        // the initial check in case page is refreshed while scrolled
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 z-[60] pointer-events-none"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                    <div className="animate-bounce-slow mt-1">
                        <ChevronDown size={20} className="text-brand-500" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollIndicator;
