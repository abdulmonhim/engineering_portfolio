// components/ProjectCard.jsx
"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import { Reveal, useTilt } from '@/utils/animations'; // <-- Adjust import path as needed

const ACCENT_COLOR_CLASS = "text-[#0077b6]"; // Blue accent color
const ACCENT_HOVER_COLOR = "#0077b6"; // Hex value for the glow effect

const ProjectCard = ({ project, index, delay = 0 }) => {
    // Integrate the useTilt hook
    const { cardRef, transform, handleMouseMove, handleMouseLeave } = useTilt(5); // Increased tilt back to 5 degrees

    // Convert delay from seconds (in ProjectCard's props) to milliseconds (for Reveal)
    const revealDelayMs = delay; 

    return (
        <Reveal key={project.id} delay={revealDelayMs} className="h-full">
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                // 🔑 CHANGE HERE: Increased height from h-96 to h-[500px] (or h-[480px] for slightly less)
                // Using h-[500px] to match the spirit of the original tall card
                className="relative transition-all duration-100 ease-out transform-style-3d cursor-pointer h-120 md:h-130 border border-white/10 bg-white/5 p-8 flex flex-col justify-end overflow-hidden rounded-xl group"
                style={{ transform }} // Apply the dynamic transform style
            >
                {/* Card Hover Glow Effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#0077b6]/50 transition-colors duration-300 z-20 pointer-events-none rounded-xl" />
                {/* The glow effect using the new accent color */}
                <div 
                    className="absolute -inset-1 bg-linear-to-r from-[#0077b6] to-blue-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" 
                    style={{ zIndex: 0 }} // Keep the glow effect subtle and behind the main content
                />

                {/* Background Image with grayscale/opacity hover */}
                <Image 
                    fill 
                    src={project.image} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-0 grayscale group-hover:grayscale-0 rounded-xl" 
                    alt={project.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => { e.target.src = 'https://placehold.co/800x600/1e293b/ffffff?text=Design+WIP'; }}
                />

                {/* Content Container (z-index ensures it's above image/glow) */}
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Technology/Category - Using the new accent color */}
                    <span className={`text-xs font-mono mb-2 block tracking-widest uppercase ${ACCENT_COLOR_CLASS}`}>
                        {project.technology}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold font-['Space Grotesk'] mb-2 text-white">
                        {project.title}
                    </h3>
                    
                    {/* Description (Fade-in/out effect from original App.js structure) */}
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 mb-4 max-h-20 overflow-hidden">
                        {project.description}
                    </p>

                    {/* Aesthetic Call to Action */}
                    <div className={`flex items-center gap-1 font-mono text-sm ${ACCENT_COLOR_CLASS} transition-colors duration-300`}>
                        View Details
                        <ArrowRight className={`w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 ${ACCENT_COLOR_CLASS}`} />
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export default ProjectCard;