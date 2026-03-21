import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => (
    <motion.div whileHover={hover ? { y: -5 } : {}} className={`glass-morphism rounded-2xl overflow-hidden ${className}`} {...props}>{children}</motion.div>
);

export default Card;
