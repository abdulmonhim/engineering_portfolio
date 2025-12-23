"use client";
import React from 'react';

const Hero = () => {
    return (
        <header className="relative h-screen flex justify-start items-center px-6 md:px-20 bg-transparent overflow-hidden">
            <div className="z-10 max-w-xl"> 
                <p className="text-sm text-gray-400 mb-4 tracking-[0.2em] uppercase font-mono">
                    Mechanical Design & Product Development
                </p>
                <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-white">
                    Optimizing <br />
                    <span className="font-bold">Function</span> with <br />
                    <span className="font-bold text-[#0077b6]">Precision Engineering</span>.
                </h1>
                <a 
                    href="#work" 
                    className="inline-block border border-white/20 px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#0077b6] hover:border-[#0077b6] hover:text-white transition-all duration-500 rounded-sm"
                >
                    View Projects
                </a>
            </div>
        </header>
    );
};

export default Hero;