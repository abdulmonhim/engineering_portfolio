"use client";
import React, { useEffect, useState, useCallback } from 'react';
// Uncommented for Next.js
import { useParams } from 'next/navigation'; 
import Link from 'next/link'; 
import Image from 'next/image'; 
import { projectData } from '@/data/data'; // Assuming this data path is correct
import { ArrowLeft, ArrowRight, Box, Layers, Cpu, Maximize2, Play } from 'lucide-react';

// --- MOCKS FOR PREVIEW (REMOVED: Using real next/link and next/image) ---

// --- THEME CONFIGURATION ---
const ACCENT_COLOR = '#0077b6'; // Cyber-green accent
const BG_COLOR = '#050505';

// --- ANIMATION STYLES & UTILS ---
const GlobalStyles = () => (
    <style jsx global>{`
        /* Custom Font Import for Grotesk look */
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');
        
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${BG_COLOR}; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${ACCENT_COLOR}; }
        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.2); color: transparent; }
        
        /* Reduced animation complexity for better performance */
        .animate-reveal {
            opacity: 1; 
            transition: opacity 0.5s;
        }
        
        .bg-noise {
            background-color: rgba(255, 255, 255, 0.01);
            pointer-events: none;
        }

        .viewer-container {
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .viewer-container:hover {
            box-shadow: 0 20px 50px -12px rgba(0, 255, 136, 0.1);
        }
    `}</style>
);

const ProjectDetailPage = () => {
    // In a real Next.js app, you would typically get the project ID from useParams:
    const params = useParams();
    const projectId = params?.id ? decodeURIComponent(params.id) : null;
// 🔑 FIX: Find project by its ID string instead of index
    const project = projectData.find(p => p.id === projectId);

    const currentIndex = projectData.findIndex(p => p.id === projectId);
    const nextProject = projectData[(currentIndex + 1) % projectData.length];

    // MOCK: Using state for demonstration when real routing is not available
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0); 
    
    const [isScrolled, setIsScrolled] = useState(false);
    // State to control lazy loading of the heavy 3D viewer
    const [isViewerActive, setIsViewerActive] = useState(false); 
    
    // const project = projectData[currentProjectIndex] || projectData[0]; 

    // Reset viewer and scroll to top whenever the project changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentProjectIndex]);

    // Handle Scroll for Navbar Glass Effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activateViewer = useCallback(() => {
        setIsViewerActive(true);
    }, []);

    // Logic to move to the next project
    const handleNextProject = useCallback((e) => {
        e.preventDefault(); 
        const nextIndex = (currentProjectIndex + 1) % projectData.length;
        setCurrentProjectIndex(nextIndex);
    }, [currentProjectIndex]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-grotesk">
                <h1 className="text-6xl mb-4 text-stroke">404</h1>
                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Project Data Not Found</p>
                {/* Changed to next/link */}
                <Link href="/" className="mt-8 flex items-center gap-2 text-sm hover:text-[#0077b6] transition-colors">
                    <ArrowLeft size={16} /> Return to Portfolio
                </Link>
            </div>
        );
    }

    const nextProjectIndex = (currentProjectIndex + 1) % projectData.length;
    // const nextProject = projectData[nextProjectIndex];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-[#0077b6] selection:text-black font-sans relative overflow-x-hidden">
            <GlobalStyles />
            
            {/* Ambient Background Noise */}
            <div className="fixed inset-0 bg-noise z-50 opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* --- NAVIGATION --- */}
            <nav className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${isScrolled ? 'bg-black/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-8'}`}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Changed to next/link */}
                    <Link href="/" className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        <span className="w-8 h-1px bg-gray-600 group-hover:bg-[#0077b6] transition-colors"></span>
                        <span className="group-hover:-translate-x-1 transition-transform duration-300">Portfolio</span>
                    </Link>
                    <div className="flex items-center gap-4 text-xs font-mono text-[#0077b6]">
                        <span className="opacity-50 text-white">SYS.ID</span>
                        {project.id}
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <header className="relative pt-48 pb-24 px-6 md:px-12 container mx-auto flex flex-col items-start justify-end min-h-[70vh]">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-125 h-125 bg-[#0077b6] rounded-full mix-blend-screen filter blur-[150px] opacity-5"></div>

                <div className="max-w-5xl z-10">
                    <div className="overflow-hidden mb-4">
                        <span className="inline-block text-[#0077b6] font-mono text-xs tracking-[0.2em] uppercase animate-reveal">
                            {project.category} — {project.year}
                        </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-grotesk font-light tracking-tighter text-white leading-[0.9] mb-8 animate-reveal">
                        {project.title}
                    </h1>

                    <div className="h-px w-24 bg-white/20 mb-8 animate-reveal"></div>

                    <p className="max-w-xl text-gray-400 text-lg leading-relaxed animate-reveal">
                        {project.description}
                    </p>
                </div>
            </header>

            {/* --- SPECS "DATA STREAM" BAR --- */}
            <div className="w-full border-y border-white/5 bg-[#0a0a0a] overflow-hidden animate-reveal">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-white/5">
                        {project.specs?.map((spec, i) => (
                            <div key={i} className="flex-1 py-6 px-4 first:pl-0 md:text-center group hover:bg-white/5 transition-colors duration-300">
                                <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2 group-hover:text-[#0077b6] transition-colors">
                                    {spec.label}
                                </span>
                                <span className="block text-sm md:text-base font-medium text-white">
                                    {spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 md:px-12 py-24 space-y-32">
                
                {/* --- 3D IMMERSIVE VIEWER (Lazy Loaded) --- */}
                <section className="relative w-full aspect-video md:aspect-21/9 bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/10 viewer-container group">
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 text-xs font-mono text-[#0077b6] bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                        <Maximize2 size={12} />
                        <span>INTERACTIVE MODEL</span>
                    </div>
                    
                    {isViewerActive && project.sketchfabUrl ? (
                        /* Loaded iFrame (High CPU) */
                        <iframe 
                            title="3D Model Viewer"
                            src={project.sketchfabUrl} 
                            className="w-full h-full opacity-100 transition-opacity duration-700"
                            frameBorder="0" 
                            allow="autoplay; fullscreen; vr" 
                            loading="lazy"
                        />
                    ) : (
                        /* Static Placeholder (Low CPU) */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/50 backdrop-blur-sm relative">
                            {/* Changed to next/image */}
                            <Image 
                                src={project.image} 
                                alt="3D Viewer Placeholder" 
                                width={1920}
                                height={1080}
                                // Note: next/image uses 'fill' for cover behavior, but absolute positioning
                                // with specified width/height is also common for fixed aspect ratios.
                                // Using the className with w-full h-full object-cover implies the style
                                // for the Image component. We keep width/height for optimization props.
                                className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
                            />
                            <button 
                                onClick={activateViewer}
                                className="z-10 bg-[#0077b6] text-black rounded-full p-4 md:p-6 shadow-lg shadow-[#0077b6]/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
                            >
                                <Play size={32} fill="currentColor" />
                            </button>
                            <p className="z-10 mt-6 text-sm font-mono text-gray-300 uppercase tracking-widest">
                                Click to Activate 3D Viewer
                            </p>
                        </div>
                    )}
                </section>

                {/* --- DEEP DIVE CONTENT --- */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-[#0077b6]">
                                <Box size={20} />
                                <h3 className="font-mono text-sm uppercase tracking-widest">The Challenge</h3>
                            </div>
                            <p className="text-gray-400 leading-loose text-sm md:text-base">
                                {project.challenge || "Engineering complex systems requires a balance of structural integrity and weight optimization. The primary objective was to reduce mass without compromising the thermal durability required for high-stress environments."}
                            </p>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-[#0077b6]">
                                <Cpu size={20} />
                                <h3 className="font-mono text-sm uppercase tracking-widest">The Solution</h3>
                            </div>
                            <p className="text-gray-400 leading-loose text-sm md:text-base">
                                {project.solution || "Utilizing generative design algorithms, we created a lattice structure that distributed loads more efficiently. This resulted in a 40% reduction in material usage while maintaining a safety factor of 2.5 under peak load."}
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <button className="w-full py-4 border border-white/20 hover:border-[#0077b6] hover:bg-[#0077b6]/5 text-white hover:text-[#0077b6] transition-all duration-300 font-mono text-xs uppercase tracking-widest flex items-center justify-between px-6 group">
                                <span>Download Tech Specs</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Image Gallery Stream */}
                    <div className="lg:col-span-8 space-y-24">
                        {project.detailImages?.map((img, index) => (
                            <div key={index} className="group relative">
                                <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a]">
                                    {/* Changed to next/image */}
                                    <Image 
                                        src={img.src} 
                                        alt={img.alt || "Project Detail"} 
                                        width={1200} 
                                        height={800}
                                        // Added layout="responsive" property (or assumed from w/h and styles)
                                        // Using specific w/h with object-cover on a block container.
                                        className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                </div>
                                
                                <div className="flex justify-between items-end mt-4 px-2">
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                        <Layers size={12} className="text-[#0077b6]" />
                                        <span>FIG 0{index + 1}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 max-w-md text-right font-light">
                                        {img.caption || "Detailed structural analysis render."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* --- NEXT PROJECT PORTAL --- */}
           <footer className="border-t border-white/10 mt-20">
    {nextProject && (
        <Link 
            href={`/projects/${encodeURIComponent(nextProject.id)}`} 
            className="block relative group overflow-hidden h-[60vh] cursor-pointer"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src={nextProject.image}
                    alt="Next Project"
                    fill
                    className="object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
                <span className="text-[#0077b6] font-mono text-xs tracking-[0.3em] uppercase mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Next Entry
                </span>
                <h2 className="text-5xl md:text-8xl font-grotesk font-light text-white text-stroke group-hover:text-white transition-all duration-500 text-center">
                    {nextProject.title}
                </h2>
            </div>
        </Link>
    )}
</footer>
        </div>
    );
};

export default ProjectDetailPage;