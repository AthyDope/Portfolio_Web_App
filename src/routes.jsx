import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageSkeleton from './components/common/PageSkeleton';

// Lazy load all main components to enable chunking and loading states
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));

const AppRoutes = () => {
    const location = useLocation();

    // Helper component to wrap routes cleanly
    const SuspenseWrapper = ({ children }) => (
        <Suspense fallback={<PageSkeleton />}>
            {children}
        </Suspense>
    );

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
                <Route path="/about" element={<SuspenseWrapper><About /></SuspenseWrapper>} />
                <Route path="/projects" element={<SuspenseWrapper><Projects /></SuspenseWrapper>} />
                <Route path="/skills" element={<SuspenseWrapper><Skills /></SuspenseWrapper>} />
                <Route path="/contact" element={<SuspenseWrapper><Contact /></SuspenseWrapper>} />
                <Route path="/privacy" element={<SuspenseWrapper><Privacy /></SuspenseWrapper>} />
                <Route path="/terms" element={<SuspenseWrapper><Terms /></SuspenseWrapper>} />
                <Route path="/cookies" element={<SuspenseWrapper><Cookies /></SuspenseWrapper>} />
                <Route path="*" element={<SuspenseWrapper><NotFound /></SuspenseWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
