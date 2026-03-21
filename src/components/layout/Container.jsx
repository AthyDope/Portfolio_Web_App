import React from 'react';

const Container = ({ children, className = '', ...props }) => (
    <div className={`container mx-auto px-6 md:px-12 lg:px-24 ${className}`} {...props}>{children}</div>
);

export default Container;
