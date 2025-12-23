"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    ArrowDown, 
    Wind,       // For CFD
    Box,        // For CAD/3D
    Activity,   // For FEA
    Settings,   // For Robotics/Automation
    Layers,     // For Additive Mfg
    PenTool,    // For DFM/Tolerance
    GraduationCap,
    MapPin,
    Briefcase
} from 'lucide-react';

// --- STYLING UTILS ---
const ACCENT = "text-[#0077b6]";
const BORDER_ACCENT = "border-[#0077b6]";
const BG_ACCENT = "bg-[#0077b6]";

// --- COMPONENT: SKILL BADGE ---
const SkillBadge = ({ icon: Icon, label, level }) => (
    <div className="group border border-white/10 bg-white/5 p-4 rounded-lg hover:border-[#0077b6]/50 transition-all duration-300 hover:-translate-y-1">
        <div className="flex justify-between items-start mb-2">
            <Icon size={18} className="text-gray-400 group-hover:text-[#0077b6] transition-colors" />
            <span className="text-[10px] font-mono text-gray-500">{level}%</span>
        </div>
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-2">
            <div className={`h-full ${BG_ACCENT} transition-all duration-1000 w-0 group-hover:w-[${level}%]`} style={{ width: `${level}%` }}></div>
        </div>
        <span className="text-sm font-medium text-gray-200 tracking-wide">{label}</span>
    </div>
);

// --- COMPONENT: EXPERIENCE ITEM ---
const ExperienceItem = ({ year, role, company, description }) => (
    <div className="relative pl-8 border-l border-white/10 pb-12 last:pb-0 group">
        {/* Timeline Dot */}
        <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#050505] border border-gray-600 rounded-full group-hover:border-[#0077b6] group-hover:scale-125 transition-all duration-300`} />
        
        <span className={`text-xs font-mono ${ACCENT} mb-1 block opacity-70`}>{year}</span>
        <h3 className="text-xl font-['Space_Grotesk'] text-white font-light">{role}</h3>
        <span className="text-sm text-gray-400 block mb-3">{company}</span>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            {description}
        </p>
    </div>
);

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#0077b6] selection:text-black overflow-x-hidden">
            <Navbar />

            {/* --- BACKGROUND GRID --- */}
            <div className="fixed inset-0 z-0 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
                     backgroundSize: '50px 50px' 
                 }}>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-20">
                
                {/* --- HERO SECTION --- */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className={`w-2 h-2 ${BG_ACCENT} rounded-full animate-pulse`}></div>
                            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">System Identity: Mech. Engineer</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Space_Grotesk'] font-light leading-[0.9] tracking-tight mb-8">
                            Meet <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Abdul Monhim</span>
                        </h1>
                        
                        {/* THE BIO FROM YOUR SNIPPET */}
                        <div className="text-lg text-gray-400 leading-relaxed max-w-lg mb-10 border-l-2 border-[#0077b6] pl-6 space-y-4">
                            <p>
                                I am a Mechanical Design Engineer specializing in complex, high-reliability systems. My core expertise lies in validating designs through rigorous analytical methods, including Finite Element Analysis (FEA) for structural integrity and Computational Fluid Dynamics (CFD).
                            </p>
                            <p>
                                This analysis-driven approach, combined with a practical, hands-on understanding of manufacturing processes, allows me to efficiently translate initial concepts into fully functional, production-ready designs.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 text-xs font-mono text-gray-500">
                            <span className="flex items-center gap-2">
                                <MapPin size={14} /> ISLAMABAD, PK
                            </span>
                            <span className="flex items-center gap-2">
                                <Briefcase size={14} /> AVAILABLE FOR HIRE
                            </span>
                        </div>
                    </div>

                    {/* --- THE HOLOGRAPHIC ID CARD (VISUAL) --- */}
                    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
                        {/* Decorative Circles behind */}
                        <div className={`absolute w-96 h-96 ${BORDER_ACCENT} rounded-full border opacity-10 animate-[spin_10s_linear_infinite]`}></div>
                        <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                        {/* The ID Card */}
                        <div className="relative w-72 h-96 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between overflow-hidden group hover:border-[#0077b6]/50 transition-all duration-500 shadow-2xl">
                            <div className={`absolute top-0 left-0 w-full h-1 ${BG_ACCENT} shadow-[0_0_20px_#0077b6]`}></div>
                            
                            {/* Image Container */}
                            <div className="relative w-32 h-32 mb-4 border border-white/10 rounded-full overflow-hidden mt-8">
                                <Image 
                                    src="/profile.jpg" // MAKE SURE TO ADD YOUR IMAGE HERE
                                    alt="Abdul Monhim"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                {/* Scanline Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0077b6]/20 to-transparent w-full h-full animate-scan"></div>
                            </div>

                            <div className="text-center z-10">
                                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Abdul Monhim</h3>
                                <p className="text-xs text-[#0077b6] font-mono mt-1">MECHANICAL DESIGN ENGR.</p>
                            </div>

                            {/* Decorative Barcode */}
                            <div className="w-full h-8 flex items-end justify-between gap-1 opacity-50">
                                {[...Array(20)].map((_,i) => (
                                    <div key={i} className="bg-white w-1" ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- STATS SCROLLER --- */}
                <div className="w-full border-y border-white/10 py-10 mb-32 overflow-hidden bg-black/50">
                    <div className="flex justify-around items-center text-center">
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-white mb-2">02+</span>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Years Exp.</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-white mb-2">15+</span>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Designs Validated</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-white mb-2">100%</span>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Reliability</span>
                        </div>
                    </div>
                </div>

                {/* --- CONTENT GRID --- */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    
                    {/* LEFT: SKILLS & EDUCATION */}
                    <div className="lg:col-span-5 space-y-16">
                        {/* Skills */}
                        <div>
                            <div className="flex items-center gap-3 mb-10">
                                <Settings className="text-[#0077b6]" />
                                <h2 className="text-2xl font-light font-['Space_Grotesk'] uppercase tracking-wider">Technical Matrix</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <SkillBadge icon={Box} label="SolidWorks / Fusion 360" level={95} />
                                <SkillBadge icon={Activity} label="FEA (ANSYS)" level={90} />
                                <SkillBadge icon={Wind} label="CFD (Fluent)" level={85} />
                                <SkillBadge icon={PenTool} label="DFM & Tolerance" level={88} />
                                <SkillBadge icon={Settings} label="Robotics & Auto." level={80} />
                                <SkillBadge icon={Layers} label="Additive Mfg / 3D" level={85} />
                            </div>
                        </div>

                        {/* Education */}
                        <div className="p-6 border border-white/10 bg-white/5 rounded-lg relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0077b6] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            
                            <div className="flex items-center gap-3 mb-6 text-[#0077b6]">
                                <GraduationCap size={20} />
                                <h3 className="font-mono text-sm uppercase tracking-widest">Academic Database</h3>
                            </div>
                            
                            <div>
                                <h4 className="text-xl font-bold text-white">B.S. Mechanical Engineering</h4>
                                <p className="text-gray-400 text-sm mt-1">International Islamic University Islamabad</p>
                                <span className="inline-block mt-3 text-xs font-mono text-[#0077b6] border border-[#0077b6]/30 px-2 py-1 rounded">2019 — 2023</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: TIMELINE */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-10">
                            <Briefcase className="text-[#0077b6]" />
                            <h2 className="text-2xl font-light font-['Space_Grotesk'] uppercase tracking-wider">System Logs</h2>
                        </div>

                        <div className="space-y-2">
                            <ExperienceItem 
                                year="AUG 2022 — SEP 2022"
                                role="Internee Maintenance Engineer"
                                company="Attock Refinery Limited"
                                description="Assisted senior maintenance engineers in daily equipment inspections, shutdown activities, and reliability-focused maintenance tasks across refinery units. Gained hands-on exposure to rotating machinery, piping systems, and preventive maintenance practices in a high-performance industrial environment."
                            />
                            {/* You can add more experience items here in the future following the same format */}
                        </div>
                    </div>
                </section>

                {/* --- CALL TO ACTION --- */}
                <div className="mt-32 text-center">
                    <ArrowDown className="mx-auto text-gray-600 animate-bounce mb-4" />
                    <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] mb-8">Need High-Fidelity Engineering?</h2>
                    <a href="/contact" className="inline-block border border-[#0077b6] text-[#0077b6] px-12 py-4 rounded-full font-mono text-sm hover:bg-[#0077b6] hover:text-white transition-all duration-300 uppercase tracking-widest">
                        Initiate Collaboration
                    </a>
                </div>

            </div>
            <Footer />
        </main>
    );
}