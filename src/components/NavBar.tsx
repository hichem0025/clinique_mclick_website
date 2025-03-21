import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="font-poppins bg-white/30 backdrop-blur-xs shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <img
                                className="h-8 w-auto"
                                src="/src/assets/logo.png"
                                alt="Logo"
                            />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-black transition duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
                        <a href="/" className="text-white hover:text-black transition duration-300">
                            Accueil
                        </a>
                        <a href="/about-us" className="text-white hover:text-black transition duration-300">
                            About Us
                        </a>
                        <a  href="#services" className="text-white hover:text-black transition duration-300">
                            Services
                        </a>
                        <a href="/contact" className="text-white hover:text-black transition duration-300">
                            Contact
                        </a>
                    </div>

                    {/* Desktop Button & Language */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="/devis"
                            className="border border-white text-white px-6 py-2 rounded-xl bg-transparent hover:bg-white hover:text-black transition duration-300"
                        >
                            Demander un Devis
                        </a>
                        <span className="text-white text-lg font-medium">FR</span>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-4 space-y-4">
                            <a
                                href="/"
                                className="block px-4 py-2 text-white hover:text-black transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Accueil
                            </a>
                            <a
                                href="/about-us"
                                className="block px-4 py-2 text-white hover:text-black transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </a>
                            <a
                                href="#services"
                                className="block px-4 py-2 text-white hover:text-black transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="/contact"
                                className="block px-4 py-2 text-white hover:text-black transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <a
                                href="/devis"
                                className="block px-4 py-2 text-white hover:text-black transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Demander un Devis
                            </a>
                            <div className="px-4 py-2 text-white">
                                Langue: <span className="font-medium">FR</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}