import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const StarParticles = ({
    count = 90,
    containerClassName = 'absolute inset-0 z-20',
    className = '',
}) => {
    const particles = useMemo(
        () =>
            Array.from({ length: count }, (_, i) => ({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                duration: Math.random() * 4 + 3,
                delay: Math.random() * 4,
                scale: Math.random() * 0.4 + 0.9,
                size: Math.random() * 1.6 + 0.8,
            })),
        [count]
    );

    return (
        <div className={`${containerClassName} pointer-events-none overflow-hidden ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: particle.top,
                        left: particle.left,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        boxShadow: '0 0 8px rgba(255,255,255,0.45)',
                    }}
                    animate={{
                        opacity: [0.06, 0.35, 0.08],
                        scale: [particle.scale, particle.scale + 0.25, particle.scale],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

export default StarParticles;
