import React from 'react';
const ACCENT_COLOR_HEX = '#00f0ff';
// const ACCENT_COLOR_HEX = 0x0077b6;

const Footer = () => (
    <footer id="contact" className="py-24 px-6 md:px-20 border-t border-gray-900">
        <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-light mb-8 font-['Space Grotesk']">Lets build something impossible.</h2>
            <a href="mailto:hello@architect.com" className="text-xl md:text-2xl  hover:text-white transition-colors duration-300 border-b " style={{color:ACCENT_COLOR_HEX,borderBlockColor:ACCENT_COLOR_HEX}}>
                abdulmonhim.01@gmail.com
            </a>
            
            <div className="flex gap-6 mt-12 text-sm text-gray-500 uppercase tracking-widest">
                <a href="https://www.linkedin.com/in/abdul-monhim-039b91304/" target='_blank' className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/abdulmonhim/" target='_blank' className="hover:text-white transition-colors">Github</a>
                <a href="#" className="hover:text-white transition-colors">Behance</a>
            </div>
            
            <div className="mt-20 text-xs text-gray-700">
                &copy; {new Date().getFullYear()} Abdul Monhim Design Portfolio. Built with React and Three.js.
            </div>
        </div>
    </footer>
);
export default Footer;