"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '@/data/data'; 
import { 
    ArrowLeft, ArrowRight, Box, Layers, 
    Play, ChevronLeft, ChevronRight,
    Cpu, Ruler, FileJson, Calculator,  
} from 'lucide-react'; 
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

// ==========================================
// --- 🎨 THEME CONFIGURATION (CHANGE HERE) ---
// ==========================================
const COLORS = {
    accent: '#00f0ff',       // Main Accent (Cyan). Try '#ff0055' (Pink) or '#00ff00' (Green)
    background: '#050505',   // Main Page Background
    cardBg: '#0a0a0a',       // Card/Deck Backgrounds
    panelBg: '#0b0b0b',      // Side Panels
    textMain: '#e5e5e5',     // Primary Text
    textDim: '#9ca3af',      // Secondary/Gray Text
};

// --- UTILS & GLOBAL STYLES ---
// We inject the variables into the global CSS here
const GlobalStyles = () => (
    <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        html { scroll-behavior: smooth; }
        body { background-color: ${COLORS.background}; color: ${COLORS.textMain}; }
        
        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        /* Scrollbar Theming */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.cardBg}; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${COLORS.accent}; }

        /* Text Selection Highlight */
        ::selection {
            background-color: ${COLORS.accent};
            color: #000;
        }

        /* Grid Pattern */
        .bg-grid-pattern {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
    `}</style>
);

// --- COMPONENT: INSPECTION DECK (Smoothed Carousel) ---
const InspectionDeck = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    if (!slides || slides.length === 0) return null;

    const handleSlide = (direction) => {
        if (isAnimating) return; 
        setIsAnimating(true); 

        setTimeout(() => {
            if (direction === 'next') {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
            }
            setTimeout(() => {
                setIsAnimating(false);
            }, 50);
        }, 300); 
    };

    const currentSlide = slides[currentIndex];

    return (
        <div 
            className="border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-full"
            style={{ backgroundColor: COLORS.cardBg }}
        >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2">
                    {/* Accent Color Icon */}
                    <Layers size={14} style={{ color: COLORS.accent }} />
                    <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                            View: {currentSlide.category}
                        </span>
                    </div>
                </div>
                <div className="flex gap-1">
                    <button onClick={() => handleSlide('prev')} className="p-2 hover:bg-white/10 rounded transition-colors text-white"><ChevronLeft size={16} /></button>
                    <span className="font-mono text-xs self-center px-2 text-gray-500">
                        {currentIndex + 1} <span className="text-gray-700">/</span> {slides.length}
                    </span>
                    <button onClick={() => handleSlide('next')} className="p-2 hover:bg-white/10 rounded transition-colors text-white"><ChevronRight size={16} /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-125">
                {/* Image Viewport */}
                <div className="lg:col-span-8 relative bg-black/50 group border-b lg:border-b-0 lg:border-r border-white/10 flex items-center justify-center overflow-hidden">
                    <div className={`relative w-full h-full min-h-100 transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
                        <Image 
                            src={currentSlide.src} 
                            alt={currentSlide.title} 
                            fill 
                            className="object-contain p-8"
                            priority={true}
                        />
                    </div>
                    {/* Overlay Tag */}
                    <div 
                        className="absolute bottom-4 left-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded text-[10px] font-mono"
                        style={{ color: COLORS.accent }}
                    >
                        IMG_ID_{currentIndex + 104}
                    </div>
                </div>

                {/* Info Panel */}
                <div 
                    className="lg:col-span-4 p-8 flex flex-col justify-center"
                    style={{ backgroundColor: COLORS.panelBg }}
                >
                    <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <h3 className="text-2xl font-grotesk text-white mb-2">{currentSlide.title}</h3>
                        
                        {/* Accent Line */}
                        <div className="h-1 w-12 mb-6" style={{ backgroundColor: COLORS.accent }}></div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-20">
                            {currentSlide.description}
                        </p>

                        {/* Technical Tags */}
                        {currentSlide.specs && (
                            <div className="space-y-3">
                                {currentSlide.specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-xs text-gray-500 font-mono uppercase">{spec.label}</span>
                                        <span className="text-sm text-white font-mono">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- COMPONENT: MATH CARD ---
const MathCard = ({ title, formula, variables }) => (
    <div 
        className="p-6 border border-white/10 rounded-xl transition-all hover:border-opacity-100"
        style={{ 
            backgroundColor: COLORS.cardBg,
            borderColor: 'rgba(255,255,255,0.1)' // Base border
        }}
    >
        <div className="flex items-center gap-2 mb-4 text-gray-400">
            <Calculator size={16} />
            <span className="text-xs font-mono uppercase tracking-widest">{title}</span>
        </div>
        
        {/* Render Math - Accent Color applied via style */}
        <div 
            className="bg-black/40 border border-white/5 p-6 rounded mb-4 overflow-x-auto"
            style={{ color: COLORS.accent }}
        >
            <BlockMath math={formula} />
        </div>

        <div className="grid grid-cols-1 gap-2">
            {variables.map((v, i) => (
                <div key={i} className="flex justify-between text-xs border-b border-white/5 pb-2">
                    <span className="text-gray-500 italic font-mono">{v.name}</span>
                    <span className="text-gray-300 font-mono">{v.val}</span>
                </div>
            ))}
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---
const ProjectDetailPage = () => {
    const params = useParams();
    const projectId = params?.id ? decodeURIComponent(params.id) : null;
    const project = projectData.find(p => p.id === projectId || p.id === `#${projectId}`);
    const [is3DLoaded, setIs3DLoaded] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, [projectId]);

    if (!project) return <div className="text-white text-center pt-32">Project Not Found</div>;

    const detailSlides = project.gallerySlides || [];
    const currentIndex = projectData.findIndex(p => p.id === project.id);
    const nextProjectIndex = (currentIndex + 1) % projectData.length;
    const nextProject = projectData[nextProjectIndex];

    return (
        <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.background, color: COLORS.textMain }}>
            <GlobalStyles />
            <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0"></div>

            {/* --- TOP NAVIGATION --- */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-start pointer-events-none">
                <Link href="/" className="pointer-events-auto group flex items-center gap-3 bg-black/60 backdrop-blur-md px-5 py-2.5 border border-white/10 rounded-full hover:border-white/30 transition-all">
                    {/* Hover text changes to Accent Color */}
                    <ArrowLeft size={16} className="text-gray-400 transition-colors" style={{ '--hover-color': COLORS.accent }} />
                    <span className="text-xs font-mono font-medium text-gray-300 group-hover:text-white">PORTFOLIO</span>
                </Link>

                <div className="pointer-events-auto flex flex-col items-end gap-2">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded-lg flex items-center gap-4">
                         <div className="text-right">
                            <span className="block text-[10px] text-gray-500 font-mono uppercase tracking-wider">Project ID</span>
                            <span className="block text-xs text-white font-medium">{project.id}</span>
                        </div>
                        <div className="h-6 w-px bg-white/10"></div>
                        <div className="text-right">
                             <span className="block text-[10px] text-gray-500 font-mono uppercase tracking-wider">Status</span>
                             <span 
                                className="flex items-center gap-1.5 text-xs font-medium"
                                style={{ color: COLORS.accent }}
                             >
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: COLORS.accent }}></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: COLORS.accent }}></span>
                                </span>
                                Production Ready
                             </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- MAIN CONTENT WRAPPER --- */}
            <main className="relative z-10 pt-32 pb-24 px-4 md:px-12 max-w-400 mx-auto space-y-24">
                
                {/* --- 1. PROJECT HEADER & 3D VIEWPORT --- */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-12 mb-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-4 max-w-3xl">
                                <h1 className="text-5xl md:text-7xl font-grotesk font-bold text-white tracking-tight leading-[0.9]">
                                    {project.title}
                                </h1>
                                <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                {/* Button with dynamic background */}
                                <button 
                                    className="flex items-center gap-2 px-6 py-3 text-black rounded font-mono text-xs font-bold uppercase hover:bg-white transition-colors"
                                    style={{ backgroundColor: COLORS.accent }}
                                >
                                    <FileJson size={16} /> Download STEP
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 3D Viewport Container */}
                    <div 
                        className="lg:col-span-12 relative w-full h-[65vh] rounded-2xl border border-white/10 overflow-hidden shadow-2xl group"
                        style={{ backgroundColor: COLORS.cardBg }}
                    >
                        {!is3DLoaded && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#080808]">
                                <Image 
                                    src={project.image} 
                                    alt="Cover" 
                                    fill 
                                    className="object-cover opacity-30 blur-sm"
                                />
                                <button 
                                    onClick={() => setIs3DLoaded(true)}
                                    className="relative z-20 flex flex-col items-center gap-4 group/btn"
                                >
                                    {/* Play Button Hover Effect */}
                                    <div 
                                        className="w-20 h-20 rounded-full bg-white/5 border border-white/20 backdrop-blur flex items-center justify-center group-hover/btn:scale-110 transition-all duration-300"
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.accent}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                                    >
                                        <Play size={32} className="ml-1 text-white group-hover/btn:text-black fill-current transition-colors" />
                                    </div>
                                    <span 
                                        className="text-sm font-mono tracking-widest uppercase"
                                        style={{ color: COLORS.accent }}
                                    >
                                        Initialize 3D Viewer
                                    </span>
                                </button>
                            </div>
                        )}

                        {is3DLoaded && project.sketchfabUrl && (
                            <iframe 
                                title="Sketchfab Viewer" 
                                className="w-full h-full"
                                src={`${project.sketchfabUrl}&autostart=1&ui_theme=dark`}
                                frameBorder="0" 
                                allow="autoplay; fullscreen; vr" 
                                mozallowfullscreen="true" 
                                webkitallowfullscreen="true"
                            ></iframe>
                        )}
                        
                        <div className="absolute bottom-6 left-6 pointer-events-none flex gap-4 text-[10px] font-mono text-white/50">
                             <div className="flex items-center gap-2">
                                <Box size={12} />
                                <span>MODEL_VIEWER_V2.0</span>
                             </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. COMPONENT BREAKDOWN (Carousel) --- */}
                <section>
                    <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest mb-1 block" style={{ color: COLORS.accent }}>
                                Visual Analysis
                            </span>
                            <h2 className="text-3xl font-grotesk text-white">Component Breakdown</h2>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-gray-500 font-mono text-xs">
                            <Layers size={14} /> EXPLODED & SECTION VIEWS
                        </div>
                    </div>
                    
                    <InspectionDeck slides={detailSlides} />
                </section>

                {/* --- 3. ENGINEERING DATA (Math & Specs) --- */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-white/10 pt-16">
                    {/* Left: Design Intent / Calculations */}
                    <div>
                        <span className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-2 block">Design Parameters</span>
                        <h2 className="text-3xl font-grotesk text-white mb-6">Engineering Calculations</h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Key mathematical models used to determine the structural integrity and efficiency of the mechanism. 
                        </p>

                        <div className="space-y-4">
                            {project.mathSpecs ? (
                                <MathCard 
                                    title={project.mathSpecs.title}
                                    formula={project.mathSpecs.formula}
                                    variables={project.mathSpecs.variables}
                                />
                            ) : (
                                <MathCard 
                                    title="Standard Load"
                                    formula="F = m \times a"
                                    variables={[{ name: "m", val: "10kg" }, { name: "a", val: "9.8m/s" }]}
                                />
                            )}
                        </div>
                    </div>

                    {/* Right: Specs & BOM Overview */}
                    <div>
                         <span className="text-green-500 font-mono text-xs uppercase tracking-widest mb-2 block">Specifications</span>
                        <h2 className="text-3xl font-grotesk text-white mb-6">Technical Data</h2>
                        
                        <div className="border border-white/10 rounded-xl p-8" style={{ backgroundColor: COLORS.cardBg }}>
                            <h4 className="text-white font-mono text-sm border-b border-white/10 pb-4 mb-4 flex items-center gap-2">
                                <Cpu size={16} style={{ color: COLORS.accent }} /> MATERIAL PROPERTIES
                            </h4>
                            
                            <ul className="space-y-4 mb-8">
                                {project.specs && project.specs.map((s, i) => (
                                    <li key={i} className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500">{s.label}</span>
                                        <span className="text-white font-mono">{s.value}</span>
                                    </li>
                                ))}
                            </ul>

                            <h4 className="text-white font-mono text-sm border-b border-white/10 pb-4 mb-4 flex items-center gap-2">
                                <Ruler size={16} style={{ color: COLORS.accent }} /> DIMENSIONS
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/30 p-3 rounded border border-white/5">
                                    <span className="block text-[10px] text-gray-500 uppercase">System ID</span>
                                    <span className="text-white font-mono text-sm">{project.id}</span>
                                </div>
                                <div className="bg-black/30 p-3 rounded border border-white/5">
                                    <span className="block text-[10px] text-gray-500 uppercase">Year</span>
                                    <span className="text-white font-mono text-sm">{project.year}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- NEXT PROJECT NAV --- */}
            {nextProject && (
                <footer className="relative border-t border-white/10">
                    <Link 
                        href={`/projects/${nextProject.id.replace('#', '')}`} 
                        className="block group relative h-100 w-full overflow-hidden"
                    >
                        <Image 
                            src={nextProject.image} 
                            alt="Next" 
                            fill 
                            className="object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span 
                                className="font-mono text-xs uppercase tracking-[0.3em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                                style={{ color: COLORS.accent }}
                            >
                                Next Project
                            </span>
                            <h2 className="text-5xl md:text-7xl font-grotesk font-bold text-white uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500">
                                {nextProject.title}
                            </h2>
                            <div className="mt-8 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                                <span className="font-mono text-xs">VIEW PROJECT</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </Link>
                </footer>
            )}
        </div>
    );
};

export default ProjectDetailPage;