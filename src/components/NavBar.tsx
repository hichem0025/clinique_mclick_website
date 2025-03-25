import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '/src/assets/logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when location changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className="font-poppins bg-white/15 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="flex items-center hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                className="h-8 w-auto"
                                src={logoImage}
                                alt="Logo"
                                onError={(e) => {
                                    console.error('Logo failed to load');
                                    const imgElement = e.target as HTMLImageElement;
                                    imgElement.src = '/logo.png';
                                }}
                            />
                        </Link>                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-atoll-900 hover:text-gray-700 transition duration-300"
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
                        <Link to="/" className="text-atoll-900 hover:text-gray-700 transition duration-300">
                            Accueil
                        </Link>
                        <Link to="/#about-us" className="text-atoll-900 hover:text-gray-700 transition duration-300">
                            About Us
                        </Link>
                        <Link to="/#services" className="text-atoll-900 hover:text-gray-700 transition duration-300">
                            Services
                        </Link>
                        <Link to="/#contact" className="text-atoll-900 hover:text-gray-700 transition duration-300">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Button & Language */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/rendez-vous"
                            className="group relative inline-block overflow-hidden px-4 py-2 text-sm sm:text-base font-medium font-poppins rounded-md border border-atoll-900 text-atoll-900 bg-transparent transition-all duration-500 ease-in-out"
                        >
                            {/* Background fill effect with scale animation */}
                            <span className="absolute inset-0 bg-atoll-900 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center"></span>
                            {/* Shine effect */}
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 transition-opacity duration-300 delay-100"></span>
                            {/* Button Text */}
                            <span className="relative group-hover:text-white transition-colors duration-300 ease-in-out">
        Prendre un Rendez-vous
    </span>
                        </Link>

                        <span className="text-atoll-900 text-lg font-medium">FR</span>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-4 space-y-4">
                            <Link
                                to="/"
                                className="block px-4 py-2 text-atoll-900 hover:text-gray-700 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Accueil
                            </Link>
                            <Link
                                to="/#about-us"
                                className="block px-4 py-2 text-atoll-900 hover:text-gray-700 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/#services"
                                className="block px-4 py-2 text-atoll-900 hover:text-gray-700 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                to="/#contact"
                                className="block px-4 py-2 text-atoll-900 hover:text-gray-700 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                to="/rendez-vous"
                                className="block group relative overflow-hidden px-4 py-2 text-atoll-900 border border-atoll-900 rounded-lg bg-transparent transition-all duration-500 ease-in-out"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="absolute inset-0 bg-atoll-900 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center"></span>
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 transition-opacity duration-300 delay-100"></span>
                                <span className="relative group-hover:text-white transition-colors duration-300 ease-in-out">
                                    Prendre un Rendez-vous
                                </span>
                            </Link>
                            <div className="px-4 py-2 text-atoll-900">
                                Langue: <span className="font-medium">FR</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
