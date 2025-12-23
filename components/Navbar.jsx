"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Work', href: '/#work' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    // Animation Variants
    const menuVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const linkVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed w-full p-6 z-200 flex justify-center mix-blend-difference  text-white"
            >
                <div className="w-full max-w-7xl flex justify-between items-center">
                    {/* Logo with subtle hover lift */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold tracking-tighter cursor-pointer"
                    >
                        Abdul<span className="text-[#0077b6]">Monhim</span>
                    </motion.div>

                    {/* Desktop Links with Animated Underline */}
                    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="relative group overflow-hidden">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    {link.name}
                                </span>
                                <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#0077b6]">
                                    {link.name}
                                </span>
                                <motion.div 
                                    className="absolute bottom-0 left-0 w-full h-px bg-[#0077b6] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay with AnimatePresence */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 z-90 bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-10">
                            {navLinks.map((link) => (
                                <motion.a 
                                    variants={linkVariants}
                                    key={link.name} 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl uppercase tracking-[0.3em] hover:text-[#0077b6] transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;