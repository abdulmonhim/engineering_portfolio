import React from 'react';
import { Box, Github, Linkedin, Mail } from 'lucide-react';

// const Footer = () => (
//   <footer className="bg-slate-950 border-t border-slate-800 py-12">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
//       <div className="flex items-center gap-2">
//         <div className="h-6 w-6 bg-cyan-900 rounded-sm flex items-center justify-center">
//            <Box className="text-cyan-400 h-3 w-3" />
//         </div>
//         <span className="text-slate-400 text-sm font-medium">© {new Date().getFullYear()} AbdulMonhim. All rights reserved.</span>
//       </div>
//       <div className="flex gap-6">
//         <a href="https://www.linkedin.com/in/abdul-monhim-039b91304/" target='_blank' className="text-slate-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
//         <a href="https://github.com/abdulmonhim/" target='_blank' className="text-slate-500 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
//         <a href="#" className="text-slate-500 target='_blank' hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
//       </div>
//     </div>
//   </footer>
// );
const Footer = () => (
    <footer id="contact" className="py-24 px-6 md:px-20 border-t border-gray-900">
        <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-light mb-8 font-['Space Grotesk']">Lets build something impossible.</h2>
            <a href="mailto:hello@architect.com" className="text-xl md:text-2xl text-blue-400 hover:text-white transition-colors duration-300 border-b border-blue-400 pb-1">
                abdulmonhim.01@gmail.com
            </a>
            
            <div className="flex gap-6 mt-12 text-sm text-gray-500 uppercase tracking-widest">
                <a href="https://www.linkedin.com/in/abdul-monhim-039b91304/" target='_blank' className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/abdulmonhim/" target='_blank' className="hover:text-white transition-colors">Github</a>
                <a href="#" className="hover:text-white transition-colors">Behance</a>
            </div>
            
            <div className="mt-20 text-xs text-gray-700">
                &copy; 2025 [YourName] Design Portfolio. Built with React and Three.js.
            </div>
        </div>
    </footer>
);
export default Footer;