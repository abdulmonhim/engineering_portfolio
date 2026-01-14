"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    ArrowDown, 
    Wind, 
    Box, 
    Activity, 
    Settings, 
    Layers, 
    PenTool, 
    GraduationCap,
    MapPin,
    Briefcase,
    Award,
    CheckCircle2
} from 'lucide-react';

// --- STYLING UTILS ---
// const ACCENT = "text-[#0077b6]";
const ACCENT_COLOR_HEX = '#00f0ff';


// --- COMPONENT: SKILL BADGE ---
const SkillBadge = ({ icon: Icon, label, level }) => (
    <div className="group border border-white/10 bg-white/5 p-4 rounded-lg hover:border-[#0077b6]/50 transition-all duration-300 hover:-translate-y-1">
        <div className="flex justify-between items-start mb-2">
            <Icon size={18} className={`text-gray-400 group-hover:text-[${ACCENT_COLOR_HEX}] transition-colors`} />
            <span className="text-[10px] font-mono text-gray-500">{level}%</span>
        </div>
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-2">
            <div className={`h-full bg-[${ACCENT_COLOR_HEX}] transition-all duration-1000`} style={{ width: `${level}%` }}></div>
        </div>
        <span className="text-sm font-medium text-gray-200 tracking-wide">{label}</span>
    </div>
);

// --- COMPONENT: EXPERIENCE ITEM ---
const ExperienceItem = ({ year, role, company, description }) => (
    <div className="relative pl-8 border-l border-white/10 pb-12 last:pb-0 group">
        <div className={`absolute -left-1.25 top-2 w-2.5 h-2.5 bg-[#050505] border border-gray-600 rounded-full group-hover:border-[${ACCENT_COLOR_HEX}] group-hover:scale-125 transition-all duration-300`} />
        <span className={`text-xs font-mono text-[${ACCENT_COLOR_HEX}] mb-1 block opacity-70`}>{year}</span>
        <h3 className="text-xl font-['Space_Grotesk'] text-white font-light">{role}</h3>
        <span className="text-sm text-gray-400 block mb-3">{company}</span>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{description}</p>
    </div>
);

// --- MAIN PAGE ---
export default function AboutPage() {
    // Static heights for the barcode to prevent Math.random() impure function errors
    const barcodeHeights = [40, 70, 45, 90, 65, 30, 85, 50, 75, 40, 95, 60, 35, 80, 55, 90, 45, 70, 30, 50];

    return (
        <main className={`min-h-screen bg-[#050505] text-white selection:bg-[${ACCENT_COLOR_HEX}] selection:text-black overflow-x-hidden`}>
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
                            <div className={`w-2 h-2 bg-[${ACCENT_COLOR_HEX}] rounded-full animate-pulse`}></div>
                            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Profession: Mechanical Engineer</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Space_Grotesk'] font-light leading-[0.9] tracking-tight mb-8">
                            Meet <br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Abdul Monhim</span>
                        </h1>
                        
                        <div className={`text-lg text-gray-400 leading-relaxed max-w-lg mb-10 border-l-2  pl-6 space-y-4`}style={{ borderColor: ACCENT_COLOR_HEX }}>
                            <p>
                                I am a Mechanical Design Engineer specializing in complex, high-reliability systems. My core expertise lies in validating designs through rigorous analytical methods, including Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD).
                            </p>
                            <p>
                                This analysis-driven approach allows me to efficiently translate initial concepts into fully functional, production-ready designs.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 text-xs font-mono text-gray-500">
                            <span className="flex items-center gap-2">
                                <MapPin size={14} /> RAWALPINDI, PK
                            </span>
                            <span className="flex items-center gap-2">
                                <Briefcase size={14} /> AVAILABLE FOR HIRE
                            </span>
                        </div>
                    </div>

                    {/* --- THE HOLOGRAPHIC ID CARD --- */}
                    <div className="relative w-full h-125 flex items-center justify-center">
                        <div className={`absolute w-96 h-96  rounded-full border opacity-10 animate-[spin_10s_linear_infinite]`} style={{borderColor:ACCENT_COLOR_HEX}}></div>
                        
                        <div className={`relative w-72 h-96 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between overflow-hidden group hover:border-[${ACCENT_COLOR_HEX}]/50 transition-all duration-500 shadow-2xl`}>
                            <div className={`absolute top-0 left-0 w-full h-1 bg-[${ACCENT_COLOR_HEX}] shadow-[0_0_20px_#0077b6]`}></div>
                            
                            <div className="relative w-32 h-32 mb-4 border border-white/10 rounded-full overflow-hidden mt-8">
                                <Image 
                                    src="/profile.jpg" 
                                    alt="Abdul Monhim"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0077b6]/20 to-transparent w-full h-full animate-pulse"></div>
                            </div>

                            <div className="text-center z-10">
                                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Abdul Monhim</h3>
                                <p className={`text-xs text-[${ACCENT_COLOR_HEX}] font-mono mt-1`}>MECHANICAL DESIGN ENGR.</p>
                            </div>

                            <div className="w-full h-8 flex items-end justify-between gap-1 opacity-50">
                                {barcodeHeights.map((h, i) => (
                                    <div key={i} className="bg-white w-1" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- STATS SCROLLER --- */}
                <div className="w-full border-y border-white/10 py-10 mb-32 overflow-hidden bg-black/50">
                    <div className="flex justify-around items-center text-center">
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-white mb-2">01+</span>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Years Exp.</span>
                        </div>
                        <div>
                            <span className="block text-4xl md:text-5xl font-bold text-white mb-2">5+</span>
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
                    
                    {/* LEFT: SKILLS, EDUCATION, CERTS */}
                    <div className="lg:col-span-5 space-y-12">
                        {/* Technical Skills */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Settings className="text-[#0077b6]" style={{color:ACCENT_COLOR_HEX}} />
                                <h2 className="text-2xl font-light font-['Space_Grotesk'] uppercase tracking-wider">Technical Skills</h2>
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
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-[${ACCENT_COLOR_HEX}] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                            <div className={`flex items-center gap-3 mb-6 text-[${ACCENT_COLOR_HEX}]`}>
                                <GraduationCap size={20} />
                                <h3 className="font-mono text-sm uppercase tracking-widest">Academic Database</h3>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">B.S. Mechanical Engineering</h4>
                                <p className="text-gray-400 text-sm mt-1">International Islamic University Islamabad</p>
                                <span className={`inline-block mt-3 text-xs font-mono text-[${ACCENT_COLOR_HEX}] border border-[${ACCENT_COLOR_HEX}]/30 px-2 py-1 rounded`} >2019 — 2023</span>
                            </div>
                        </div>

                        {/* Certifications (CSWA) */}
                        <div>
                             <div className="flex items-center gap-3 mb-6">
                                <Award style={{color:ACCENT_COLOR_HEX}} />
                                <h2 className="text-xl font-light font-['Space_Grotesk'] uppercase tracking-wider">Certifications</h2>
                            </div>
                            <div className={`relative p-5 border border-white/10 bg-linear-to-br from-white/5 to-transparent rounded-xl overflow-hidden group hover:border-[${ACCENT_COLOR_HEX}]/50 transition-all duration-500`}>
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-[${ACCENT_COLOR_HEX}] blur-[50px] opacity-5 group-hover:opacity-20 transition-opacity`} />
                                <div className="flex items-start gap-4 z-10 relative">
                                    <div className={`bg-[${ACCENT_COLOR_HEX}]/10 p-3 rounded-lg border border-[${ACCENT_COLOR_HEX}]/20 shrink-0`}>
                                        <Box  style={{color:ACCENT_COLOR_HEX}} size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-lg font-bold text-white leading-tight">CSWA</h4>
                                            <CheckCircle2 size={16}  style={{color:ACCENT_COLOR_HEX}} />
                                        </div>
                                        <p className="text-white/70 text-sm mt-1">Certified SolidWorks Associate</p>
                                        <p className="text-gray-500 text-xs mt-0.5">Dassault Systèmes</p>
                                        <div className="flex flex-wrap items-center gap-3 mt-4">
                                            <span className={`text-[10px] font-mono text-[${ACCENT_COLOR_HEX}] bg-[${ACCENT_COLOR_HEX}]/10 px-2 py-1 rounded border border-[${ACCENT_COLOR_HEX}]/20`}>
                                                VERIFIED CREDENTIAL
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: TIMELINE */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-10">
                            <Briefcase  style={{color:ACCENT_COLOR_HEX}}/>
                            <h2 className="text-2xl font-light font-['Space_Grotesk'] uppercase tracking-wider">Experience</h2>
                        </div>
                        <div className="space-y-2">
                            {/* --- NEW JOB START --- */}
                            <ExperienceItem 
                                year="JAN 2026 — PRESENT"
                                role="Mechanical Design Engineer"
                                company="Aformely Pvt Limited"
                                description="Spearheading product design initiatives by creating high-fidelity CAD models. Focusing on transforming conceptual requirements into precise, manufacturing-ready 3D assets using advanced parametric modeling techniques."
                            />
                            {/* --- NEW JOB END --- */}
                            
                            <ExperienceItem 
                                year="AUG 2022 — SEP 2022"
                                role="Internee Maintenance Engineer"
                                company="Attock Refinery Limited"
                                description="Assisted senior maintenance engineers in daily equipment inspections and shutdown activities across refinery units. Gained hands-on exposure to rotating machinery and preventive maintenance practices."
                            />
                        </div>
                    </div>
                </section>

                {/* --- CALL TO ACTION --- */}
                <div className="mt-32 text-center">
                    <ArrowDown className="mx-auto text-gray-600 animate-bounce mb-4" />
                    <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] mb-8">Need High-Fidelity Engineering?</h2>
                    <a href="/contact" className={`inline-block border border-[${ACCENT_COLOR_HEX}] text-[${ACCENT_COLOR_HEX}] px-12 py-4 rounded-full font-mono text-sm hover:bg-[${ACCENT_COLOR_HEX}] hover:text-white transition-all duration-300 uppercase tracking-widest`}>
                        Initiate Collaboration
                    </a>
                </div>

            </div>
            <Footer />
        </main>
    );
}