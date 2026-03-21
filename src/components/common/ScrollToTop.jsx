import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] w-12 h-12 glass-morphism rounded-xl border-white/10 flex items-center justify-center text-brand-400 shadow-2xl shadow-brand-600/20 hover:border-brand-500 hover:text-white hover:-translate-y-1 transition-all group"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} className="group-hover:animate-bounce" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
