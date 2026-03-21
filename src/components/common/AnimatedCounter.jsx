import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Counts from 0 to `target` with a cubic ease-out animation when scrolled into view.
 * @param {number} target - The final number to count up to
 * @param {string} suffix - Text appended after the number (e.g. '+', 'k+')
 * @param {number} duration - Animation duration in ms (default 1800)
 */
const AnimatedCounter = ({ target, suffix = '', duration = 1800 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let startTime = null;
        const easeOut = (t) => 1 - Math.pow(1 - t, 3);

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setDisplayValue(Math.round(easeOut(progress) * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, target, duration]);

    return <span ref={ref}>{displayValue.toLocaleString('en-IN')}{suffix}</span>;
};

export default AnimatedCounter;
