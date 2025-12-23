"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, Terminal, ShieldCheck, Activity } from 'lucide-react';

export default function ContactPage() {
  const [time, setTime] = useState('');

  // Live System Clock
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#0077b6]">
      <Navbar />

      {/* Background Technical Grid */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0077b6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 animate-fadeIn">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Terminal size={14} className="text-[#0077b6]" />
            <span className="text-[#0077b6] font-mono text-s tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-['Space_Grotesk'] font-light text-white mb-6">
            Let&apos;s Build <span className="text-gray-500 italic">Together</span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Whether you have a complex CAD design challenge, require FEA validation, 
            or want to discuss an engineering concept, I am ready to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0077b6]/5 blur-3xl group-hover:bg-[#0077b6]/10 transition-colors"></div>
            
            <div className="w-full">
              <h2 className="text-2xl font-['Space_Grotesk'] font-medium text-white mb-10 tracking-tight">Contact Information</h2>
              
              <div className="space-y-8 max-w-xs mx-auto w-full"> 
                <div className="flex items-center group/item">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/item:border-[#0077b6]/50 transition-colors">
                    <Mail className="text-[#0077b6]" size={22} />
                  </div>
                  <div className="text-left ml-5">
                    <p className="text-gray-500 font-mono text-[10px] uppercase tracking-tighter">Email Address</p>
                    <p className="text-gray-200 font-medium break-all">abdulmonhim.01@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center group/item">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/item:border-[#0077b6]/50 transition-colors">
                    <Phone className="text-[#0077b6]" size={22} />
                  </div>
                  <div className="text-left ml-5">
                    <p className="text-gray-500 font-mono text-[10px] uppercase tracking-tighter">Phone Number</p>
                    <p className="text-gray-200 font-medium">+92 (3XX) XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-center group/item">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/item:border-[#0077b6]/50 transition-colors">
                    <MapPin className="text-[#0077b6]" size={22} />
                  </div>
                  <div className="text-left ml-5">
                    <p className="text-gray-500 font-mono text-[10px] uppercase tracking-tighter">Office Location</p>
                    <p className="text-gray-200 font-medium">Islamabad, PK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Footer */}
            <div className="mt-12 pt-8 border-t border-white/5 w-full">
              <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 px-4">
                <span className="flex items-center gap-2">
                    <Activity size={10} className="text-green-500" /> ONLINE 
                </span>
                <span className="flex items-center gap-2 uppercase">
                    <ShieldCheck size={10} /> Secure Connection
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-2xl border border-[#0077b6]/20 shadow-2xl relative">
            {/* Blueprint Grid Lines (Visual Only) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <h2 className="text-2xl font-['Space_Grotesk'] font-medium text-white mb-8 text-center relative z-10">Send a Message</h2>
            
            <form className="space-y-6 max-w-lg mx-auto relative z-10">
              <div className="group">
                <label className="block text-[14px] font-mono text-[#0077b6] uppercase mb-1 tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-[#0077b6] transition-colors placeholder:text-white/10"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label className="block text-[14px] font-mono text-[#0077b6] uppercase mb-1 tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-[#0077b6] transition-colors placeholder:text-white/10"
                  placeholder="name@company.com"
                />
              </div>

              <div className="group">
                <label className="block text-[14px] font-mono text-[#0077b6] uppercase mb-1 tracking-widest">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-[#0077b6] transition-colors resize-none placeholder:text-white/10"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black hover:bg-[#0077b6] hover:text-white font-mono text-xs uppercase tracking-[0.2em] transition-all duration-500 group/btn"
              >
                Send Message 
                <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}