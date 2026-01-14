"use client";
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


export default function Home() {
   

    return (
        <main className="relative bg-[#050505] text-white">
            <Navbar/>
            <div className="relative z-10">
                <Hero />
                <Projects />
                <div className="h-[20vh]" /> 
                <Footer />
            </div>
        </main>
    );
}