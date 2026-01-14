// components/ProjectCard.jsx
"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Box, Layers, Cpu, Ruler } from "lucide-react"; // Added technical icons
import { Reveal, useTilt } from '@/utils/animations';

// const ACCENT_COLOR_HEX = 0x0077b6;
const ACCENT_COLOR_HEX = '#00f0ff';
const ProjectCard = ({ project, index, delay = 0 }) => {
    // 5 degrees is good, but 10 makes the 3D depth feel more "engineered"
    const { cardRef, transform, handleMouseMove, handleMouseLeave } = useTilt(10); 
    const revealDelayMs = delay; 

    // Default stats if none provided in project prop (Safe fallback)
    const stats = project.stats || {
        material: "Aluminium 6061",
        software: "SolidWorks",
        render: "Keyshot",
        mass: "2.5kg"
    };

    return (
        <Reveal key={project.id} delay={revealDelayMs} className="h-full">
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                // Increased height slightly to accommodate the extra technical data
                className="relative group transition-all duration-100 ease-out transform-style-3d cursor-pointer h-130 w-full rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10"
                style={{ transform }}
            >
                {/* --- 1. DECORATIVE HUD ELEMENTS (The "Blueprint" Look) --- */}
                {/* Grid Overlay - Only visible on hover */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 pointer-events-none mix-blend-overlay" />
                
                {/* Tech Corners - Top Left */}
                <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 group-hover:border-[${ACCENT_COLOR_HEX}] transition-colors duration-300 z-20`} />
                {/* Tech Corners - Bottom Right */}
                <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 group-hover:border-[${ACCENT_COLOR_HEX}] transition-colors duration-300 z-20`} />
                
                {/* Crosshairs - Center (Appears on hover) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500">
                     <div className="absolute top-1/2 left-0 w-full h-px " style={{backgroundColor:ACCENT_COLOR_HEX}} />
                     <div className="absolute top-0 left-1/2 h-full w-1px " style={{backgroundColor:ACCENT_COLOR_HEX}} />
                </div>

                {/* --- 2. BACKGROUND IMAGE --- */}
                <div className="absolute inset-0 z-0 bg-gray-900">
                    <Image 
                        fill 
                        src={project.image} 
                        className="object-cover opacity-80 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0" 
                        alt={project.title}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={(e) => { e.target.src = 'https://placehold.co/800x600/1e293b/ffffff?text=CAD+Model'; }}
                    />
                    {/* Dark gradient at bottom to make text readable */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-90" />
                </div>

                {/* --- 3. CONTENT CONTAINER --- */}
                <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8">
                    
                    {/* Floating Label (Top Right) */}
                    <div className="absolute top-6 right-6 translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className={`text-[10px] font-mono border  px-2 py-1 rounded bg-[#0077b6]/10`} style={{color:ACCENT_COLOR_HEX,borderBlockColor:ACCENT_COLOR_HEX}}>
                            REV 1.0
                        </span>
                    </div>

                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        
                        {/* Title & Category */}
                        <div className="mb-4">
                            <span className={`text-xs font-mono tracking-[0.2em] uppercase ${ACCENT_COLOR_HEX} flex items-center gap-2 mb-2`}>
                                <div className="w-2 h-2 bg-[#0077b6] rounded-full animate-pulse" style={{backgroundColor: ACCENT_COLOR_HEX}} />
                                {project.technology}
                            </span>
                            <h3 className="text-3xl font-bold font-['Space Grotesk'] text-white leading-tight">
                                {project.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                            {project.description}
                        </p>

                        {/* --- NEW: TECHNICAL SPECS GRID --- */}
                        {/* This section slides up on hover and shows "Engineering Data" */}
                        <div className="grid grid-cols-2 gap-3 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 border-t border-white/10 pt-4">
                            <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                                <Box className="w-3.5 h-3.5 " style={{color: ACCENT_COLOR_HEX}}/>
                                <span>{stats.material}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                                <Cpu className="w-3.5 h-3.5 " style={{color: ACCENT_COLOR_HEX}} />
                                <span>{stats.software}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                                <Layers className="w-3.5 h-3.5 " style={{color: ACCENT_COLOR_HEX}}/>
                                <span>{stats.render}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                                <Ruler className="w-3.5 h-3.5 " style={{color: ACCENT_COLOR_HEX}}/>
                                <span>{stats.mass}</span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className={`flex items-center gap-2 text-sm font-bold text-white group/btn w-max`}>
                            <span className="border-b border-[#0077b6] pb-0.5" style={{borderBlockColor: ACCENT_COLOR_HEX}}>View Blueprint</span>
                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2 text-[${ACCENT_COLOR_HEX}]`} />
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export default ProjectCard;