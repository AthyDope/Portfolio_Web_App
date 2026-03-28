import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import GithubAccessModal from './GithubAccessModal';

const AUTOPLAY_INTERVAL = 3500;

const carouselImageVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 70 : -70,
        opacity: 0,
        scale: 1.02,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -70 : 70,
        opacity: 0,
        scale: 0.99,
    }),
};

const ProjectModal = ({ project, onClose }) => {
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState(1);
    const [isCarouselPaused, setIsCarouselPaused] = useState(false);
    const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);

    const projectImages = useMemo(() => {
        if (!project) return [];
        if (Array.isArray(project.images) && project.images.length > 0) return project.images;
        return project.image ? [project.image] : [];
    }, [project]);

    const hasMultipleImages = projectImages.length > 1;
    const currentImage = projectImages[currentImageIndex] || project.image;

    const goToImage = useCallback((nextIndex, direction = 1) => {
        if (!projectImages.length) return;
        setSlideDirection(direction);
        setCurrentImageIndex((nextIndex + projectImages.length) % projectImages.length);
    }, [projectImages.length]);

    const goToPreviousImage = useCallback(() => {
        if (!hasMultipleImages) return;
        setSlideDirection(-1);
        setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
    }, [hasMultipleImages, projectImages.length]);

    const goToNextImage = useCallback(() => {
        if (!hasMultipleImages) return;
        setSlideDirection(1);
        setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
    }, [hasMultipleImages, projectImages.length]);

    useEffect(() => {
        setCurrentImageIndex(0);
        setSlideDirection(1);
        setIsImageViewerOpen(false);
        setIsCarouselPaused(false);
    }, [project?.id]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (isImageViewerOpen) {
                    setIsImageViewerOpen(false);
                    return;
                }

                onClose();
                return;
            }

            if (e.key === 'ArrowLeft') {
                goToPreviousImage();
            }

            if (e.key === 'ArrowRight') {
                goToNextImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, isImageViewerOpen, goToPreviousImage, goToNextImage]);

    useEffect(() => {
        if (!hasMultipleImages || isImageViewerOpen || isCarouselPaused) return undefined;

        const intervalId = window.setInterval(() => {
            goToNextImage();
        }, AUTOPLAY_INTERVAL);

        return () => window.clearInterval(intervalId);
    }, [hasMultipleImages, isImageViewerOpen, isCarouselPaused, goToNextImage]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal outer centering wrapper */}
            <div
                key="modal-wrapper"
                className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-6"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full md:max-w-4xl bg-[#020617] border border-white/10 rounded-t-[2rem] md:rounded-[2.5rem] shadow-[0_0_80px_rgba(37,99,235,0.15)]"
                    style={{ maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Decorative Glows */}
                    <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-600/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-30 w-11 h-11 flex items-center justify-center rounded-2xl bg-black/50 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                    >
                        <X size={20} />
                    </button>

                    {/* Scrollable content */}
                    <div data-lenis-prevent className="overflow-y-auto flex-1 rounded-t-[2rem] md:rounded-[2.5rem]">
                        {/* Hero Carousel */}
                        <div
                            role="button"
                            tabIndex={0}
                            className="relative w-full aspect-[16/7] overflow-hidden shrink-0 cursor-zoom-in"
                            onClick={() => setIsImageViewerOpen(true)}
                            onMouseEnter={() => setIsCarouselPaused(true)}
                            onMouseLeave={() => setIsCarouselPaused(false)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setIsImageViewerOpen(true);
                                }
                            }}
                            aria-label={`Open full image for ${project.title}`}
                        >
                            <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                                <motion.img
                                    key={`${project.id}-${currentImageIndex}`}
                                    custom={slideDirection}
                                    variants={carouselImageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    src={currentImage}
                                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
                            <div className="absolute top-5 left-5">
                                <span className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] bg-black/60 backdrop-blur-xl text-brand-400 border border-brand-500/40 rounded-full">
                                    {project.category}
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/50 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                                Click to Expand
                            </div>

                            {hasMultipleImages && (
                                <>
                                    <div className="absolute top-0 left-0 h-1 w-full bg-black/20">
                                        <motion.div
                                            key={`progress-${currentImageIndex}-${isCarouselPaused}`}
                                            initial={{ width: '0%' }}
                                            animate={{ width: isCarouselPaused ? '0%' : '100%' }}
                                            transition={{ duration: isCarouselPaused ? 0 : AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                                            className="h-full bg-brand-500/80"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goToPreviousImage();
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-black/50 border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center"
                                        aria-label="Previous screenshot"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goToNextImage();
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-black/50 border border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center"
                                        aria-label="Next screenshot"
                                    >
                                        <ChevronRight size={20} />
                                    </button>

                                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                                        {currentImageIndex + 1} / {projectImages.length}
                                    </div>

                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                                        {projectImages.map((_, idx) => (
                                            <button
                                                key={`dot-${idx}`}
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    goToImage(idx, idx > currentImageIndex ? 1 : -1);
                                                }}
                                                className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? 'w-7 bg-white' : 'w-2 bg-white/45 hover:bg-white/70'}`}
                                                aria-label={`Go to screenshot ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 pt-2">
                            <div className="mb-8 sm:mb-10">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                                    {project.title}
                                </h2>
                                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
                                    {project.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-400 mb-5 flex items-center gap-2">
                                        <span className="w-6 h-px bg-brand-500 inline-block" />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.features?.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.05 * i + 0.2 }}
                                                className="flex items-start gap-3 text-slate-300 text-sm font-medium"
                                            >
                                                <CheckCircle2 size={17} className="text-brand-400 mt-0.5 shrink-0" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-5 flex items-center gap-2">
                                        <span className="w-6 h-px bg-indigo-500 inline-block" />
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech?.map((t, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.05 * i + 0.25 }}
                                                className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all"
                                            >
                                                {t}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-white/5">
                                {project.demo && project.demo !== '#' && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-brand-600/90 hover:bg-brand-500 text-white font-black text-sm tracking-wide transition-all shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.5)] relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Live Demo</span>
                                        <ExternalLink size={16} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </a>
                                )}
                                {project.github && (
                                    <motion.button
                                        onClick={() => setIsGithubModalOpen(true)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10 font-black text-sm tracking-wide transition-all"
                                    >
                                        <Github size={16} />
                                        <span>View on GitHub</span>
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <GithubAccessModal isOpen={isGithubModalOpen} onClose={() => setIsGithubModalOpen(false)} />

            {isImageViewerOpen && (                <motion.div
                    key="image-viewer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-sm p-4 sm:p-8 md:p-12 flex items-center justify-center"
                    onClick={() => setIsImageViewerOpen(false)}
                    onMouseEnter={() => setIsCarouselPaused(true)}
                    onMouseLeave={() => setIsCarouselPaused(false)}
                >
                    <button
                        type="button"
                        onClick={() => setIsImageViewerOpen(false)}
                        className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center rounded-2xl bg-black/50 border border-white/20 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="Close image preview"
                    >
                        <X size={20} />
                    </button>

                    {hasMultipleImages && (
                        <>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPreviousImage();
                                }}
                                className="absolute left-5 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-black/50 border border-white/20 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center"
                                aria-label="Previous screenshot"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNextImage();
                                }}
                                className="absolute right-5 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-black/50 border border-white/20 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center"
                                aria-label="Next screenshot"
                            >
                                <ChevronRight size={20} />
                            </button>
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-lg bg-black/50 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                                {currentImageIndex + 1} / {projectImages.length}
                            </div>
                        </>
                    )}

                    <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                        <motion.img
                            key={`viewer-${project.id}-${currentImageIndex}`}
                            custom={slideDirection}
                            variants={carouselImageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            src={currentImage}
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain rounded-2xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;