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
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] w-12 h-12 glass-morphism rounded-xl border border-white/10 flex items-center justify-center text-brand-400 shadow-2xl shadow-brand-600/20 hover:border-brand-500 hover:text-white transition-colors active:bg-brand-600/30"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={22} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
