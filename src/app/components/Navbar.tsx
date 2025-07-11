'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src={'/MB Final Dark.png'}
                            height={1000}
                            width={1000}
                            alt='logo'
                            className='h-16 w-auto rounded-xl'
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="flex items-center space-x-10">

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onOpenContact}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                        >
                            Request Demo
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    {/* <div className="md:hidden flex items-center">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </motion.button>
                    </div> */}
                </div>
            </div>

            {/* Mobile Menu */}
            {/* {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-gray-900/95 border-t border-gray-800"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#features"
                            className="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pricing
                        </a>
                        <button
                            onClick={() => {
                                onOpenContact();
                                setIsMenuOpen(false);
                            }}
                            className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2.5 rounded-full font-medium"
                        >
                            Request Demo
                        </button>
                    </div>
                </motion.div>
            )} */}
        </nav>
    );
}

export default Navbar;