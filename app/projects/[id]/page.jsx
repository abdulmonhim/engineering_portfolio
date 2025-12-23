"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '@/data/data';
import { ArrowLeft, ArrowRight, Box, Layers, Cpu, Maximize2, Play, Ruler, Aperture, Crosshair } from 'lucide-react';

// --- THEME CONFIGURATION ---
const ACCENT_COLOR = '#0077b6';
const BG_COLOR = '#050505';

// --- CUSTOM COMPONENTS ---

// 1. Technical Image Wrapper (Adds the CAD aesthetic)
const TechnicalImage = ({ src, alt, caption, index, fullWidth = false }) => (
    <div className={`group relative flex flex-col ${fullWidth ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
        {/* Decorative Header */}
        <div className="flex justify-between items-center mb-2 px-1 opacity-60 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-mono text-[#0077b6] tracking-widest">
                IMG_0{index + 1} 
            </span>
            <Crosshair size={12} className="text-gray-500" />
        </div>

        {/* Image Container with Corner Markers */}
        <div className="relative border border-white/10 bg-[#0a0a0a] overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[#0077b6] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#0077b6] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <Image
                src={src}
                alt={alt || "Engineering Detail"}
                width={1200}
                height={800}
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
            
            {/* Overlay Grid (CAD Effect) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        </div>

        {/* Caption Area */}
        <div className="mt-3 flex items-start justify-between border-t border-dashed border-white/10 pt-2">
            <p className="text-xs text-gray-400 font-mono leading-relaxed max-w-[80%]">
                <span className="text-[#0077b6] mr-2">::</span>
                {caption || "Detailed structural view and stress analysis configuration."}
            </p>
            <span className="text-[9px] text-gray-600 font-mono border border-gray-800 px-1 rounded">
                1:{(index + 1) * 10}
            </span>
        </div>
    </div>
);

// --- ANIMATION STYLES ---
const GlobalStyles = () => (
    <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${BG_COLOR}; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: ${ACCENT_COLOR}; }
        
        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; } /* Changed to JetBrains for better code look */
        
        .bg-grid-pattern {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }

        .animate-reveal {
            animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `}</style>
);

const ProjectDetailPage = () => {
    const params = useParams();
    const projectId = params?.id ? decodeURIComponent(params.id) : null;
    const project = projectData.find(p => p.id === projectId);

    const [isScrolled, setIsScrolled] = useState(false);
    const [isViewerActive, setIsViewerActive] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activateViewer = useCallback(() => setIsViewerActive(true), []);

    if (!project) return null; // Or your 404 component

    const nextProjectIndex = (projectData.findIndex(p => p.id === projectId) + 1) % projectData.length;
    const nextProject = projectData[nextProjectIndex];

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-[#0077b6] selection:text-white font-sans relative overflow-x-hidden">
            <GlobalStyles />
            
            {/* Background Engineering Grid */}
            <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none h-screen"></div>
            
            {/* --- NAVIGATION --- */}
            <nav className={`fixed top-0 w-full z-40 transition-all duration-500 border-b ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-8'}`}>
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link href="/" className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/>
                        <span>Back to Portfolio</span>
                    </Link>
                    <div className="flex items-center gap-4 text-xs font-mono text-[#0077b6]">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        SYSTEM_ID: {project.id}
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <header className="relative pt-40 pb-20 px-6 md:px-12 container mx-auto z-10">
                <div className="max-w-5xl">
                    <div className="flex items-center gap-4 mb-6 animate-reveal">
                        <span className="px-3 py-1 border border-[#0077b6] text-[#0077b6] font-mono text-[10px] uppercase tracking-widest bg-[#0077b6]/5">
                            {project.category}
                        </span>
                        <span className="text-gray-500 font-mono text-xs">/ {project.year}</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-grotesk font-light text-white leading-[0.9] mb-8 animate-reveal" style={{animationDelay: '0.1s'}}>
                        {project.title}
                    </h1>

                    <p className="max-w-2xl text-gray-400 text-lg leading-relaxed animate-reveal font-light border-l-2 border-white/10 pl-6" style={{animationDelay: '0.2s'}}>
                        {project.description}
                    </p>
                </div>
            </header>

            {/* --- SPECS DASHBOARD --- */}
            <div className="w-full border-y border-white/10 bg-[#0a0a0a] z-10 relative">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        {project.specs?.map((spec, i) => (
                            <div key={i} className="py-6 px-6 first:pl-0 group">
                                <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-1 group-hover:text-[#0077b6] transition-colors">
                                    <Aperture size={10} />
                                    {spec.label}
                                </span>
                                <span className="block text-lg font-grotesk text-white">
                                    {spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-6 md:px-12 py-24 space-y-32 z-10 relative">
                
                {/* --- 3D VIEWER SECTION --- */}
                <section className="space-y-4">
                    <div className="flex justify-between items-end">
                        <h2 className="text-xl font-grotesk text-white flex items-center gap-3">
                            <Box className="text-[#0077b6]" size={20} />
                            Interactive Assembly
                        </h2>
                        <span className="text-xs font-mono text-gray-500">Left Click: Rotate // Right Click: Pan</span>
                    </div>

                    <div className="relative w-full aspect-video md:aspect-21/9 bg-[#080808] border border-white/10 rounded-sm overflow-hidden group">
                        {isViewerActive && project.sketchfabUrl ? (
                            <iframe 
                                title="3D Model Viewer"
                                src={project.sketchfabUrl} 
                                className="w-full h-full"
                                frameBorder="0" 
                                allow="autoplay; fullscreen; vr" 
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-full h-full relative">
                                <Image 
                                    src={project.image} 
                                    alt="3D Placeholder" 
                                    fill
                                    className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button 
                                        onClick={activateViewer}
                                        className="bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-[#0077b6] hover:border-[#0077b6] rounded-full p-6 transition-all duration-300 group-hover:scale-110"
                                    >
                                        <Play size={24} fill="currentColor" />
                                    </button>
                                </div>
                                {/* Tech overlay lines */}
                                <div className="absolute top-8 left-8 w-24 h-1px bg-white/30"></div>
                                <div className="absolute top-8 left-8 w-1px h-24 bg-white/30"></div>
                                <div className="absolute bottom-8 right-8 w-24 h-1px bg-white/30"></div>
                                <div className="absolute bottom-8 right-8 w-1px h-24 bg-white/30"></div>
                            </div>
                        )}
                    </div>
                </section>

                {/* --- ENGINEERING DOSSIER (Layout Fix) --- */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* LEFT: Technical Context (Sticky) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-10">
                        
                        {/* Phase 01 */}
                        <div className="relative pl-6 border-l border-dashed border-white/20">
                            <span className="absolute -left-5px top-0 w-2 h-2 bg-[#0077b6] rounded-full"></span>
                            <div className="mb-2 flex items-center gap-2 text-[#0077b6] font-mono text-xs uppercase tracking-widest">
                                <Layers size={14} /> Phase 01: Challenge
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Material Constraints</h3>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify">
                                {project.challenge || "The primary engineering constraint was balancing thermal expansion coefficients between the chassis and the mounting bracket. High-load environments required a safety factor of 2.5."}
                            </p>
                        </div>

                        {/* Phase 02 */}
                        <div className="relative pl-6 border-l border-dashed border-white/20">
                            <span className="absolute -left-5px top-0 w-2 h-2 bg-gray-600 rounded-full"></span>
                            <div className="mb-2 flex items-center gap-2 text-[#0077b6] font-mono text-xs uppercase tracking-widest">
                                <Cpu size={14} /> Phase 02: Optimization
                            </div>
                            <h3 className="text-xl font-medium text-white mb-3">Topology Study</h3>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify">
                                {project.solution || "We utilized generative design algorithms (Fusion 360) to remove non-structural mass. This reduced total weight by 40% without compromising structural integrity under ISO-standard load tests."}
                            </p>
                        </div>

                        <div className="pt-6">
                             <div className="bg-[#111] border border-white/5 p-4 rounded flex items-center justify-between group cursor-pointer hover:border-[#0077b6]/50 transition-colors">
                                <div>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase">File Output</p>
                                    <p className="text-sm text-white group-hover:text-[#0077b6] transition-colors">Engineering_Package_v2.pdf</p>
                                </div>
                                <ArrowRight size={16} className="text-gray-500 group-hover:translate-x-1 transition-transform"/>
                             </div>
                        </div>
                    </div>

                    {/* RIGHT: Image Grid (The Visual Fix) */}
                    <div className="lg:col-span-8">
                        {/* Using a Grid for better visual interest than a list */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
                            
                            {project.detailImages?.map((img, index) => {
                                // Logic to make every 3rd image full width to break monotony
                                const isFullWidth = index % 3 === 0;
                                return (
                                    <TechnicalImage 
                                        key={index} 
                                        src={img.src} 
                                        alt={img.alt}
                                        caption={img.caption}
                                        index={index}
                                        fullWidth={isFullWidth}
                                    />
                                );
                            })}
                            
                            {/* Fallback if no images exist to show layout */}
                            {(!project.detailImages || project.detailImages.length === 0) && (
                                <>
                                    <TechnicalImage src="/api/placeholder/800/600" index={0} fullWidth={true} caption="Primary Isometric View - Solidworks" />
                                    <TechnicalImage src="/api/placeholder/600/600" index={1} caption="FEA Stress Analysis (Von Mises)" />
                                    <TechnicalImage src="/api/placeholder/600/600" index={2} caption="Manufacturing Tolerance Draft" />
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* --- FOOTER / NEXT PROJECT --- */}
            {nextProject && (
                <Link href={`/projects/${encodeURIComponent(nextProject.id)}`} className="block relative h-[50vh] overflow-hidden group border-t border-white/10 z-10">
                    <Image 
                        src={nextProject.image}
                        alt="Next"
                        fill
                        className="object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
                        <div>
                            <span className="block text-[#0077b6] font-mono text-xs uppercase tracking-widest mb-2">Next Project</span>
                            <h2 className="text-4xl md:text-6xl font-grotesk text-white group-hover:translate-x-2 transition-transform duration-500">
                                {nextProject.title}
                            </h2>
                        </div>
                        <ArrowRight size={48} className="text-white/20 group-hover:text-[#0077b6] transition-colors duration-300" />
                    </div>
                </Link>
            )}
        </div>
    );
};

export default ProjectDetailPage;