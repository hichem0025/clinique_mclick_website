import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Added for rapid navigation

export default function Footer() {
    return (
        <footer className="font-poppins bg-atoll-800 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Clinique DR N.B</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Centre de référence en PMA, bénéficiant d'une expertise médicale de renommée mondiale et d'équipements de pointe en technologie médicale.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-300">
                                <FaFacebookF className="text-white" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-300">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-300">
                                <FaLinkedinIn className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-300 hover:text-white transition duration-300"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#about-us"
                                    className="text-gray-300 hover:text-white transition duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#services"
                                    className="text-gray-300 hover:text-white transition duration-300"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#contact"
                                    className="text-gray-300 hover:text-white transition duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/rendez-vous"
                                    className="text-gray-300 hover:text-white transition duration-300"
                                >
                                   Prender un rendez-vous
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Nos Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a  className="text-gray-300 hover:text-white transition duration-300">PMA</a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-white transition duration-300">Consultations</a>
                            </li>
                            <li>
                                <a  className="text-gray-300 hover:text-white transition duration-300">Laparoscopie/Hystéroscopie</a>
                            </li>
                            <li>
                                <a  className="text-gray-300 hover:text-white transition duration-300">Oncologie Gynécologique</a>
                            </li>
                            <li>
                                <a  className="text-gray-300 hover:text-white transition duration-300">Médecine Esthétique</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    06 Rue Timgad, Seconde Placette<br />
                                    Hydra, Alger
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <FaPhone className="text-white mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    0550 70 70 66<br />
                                    0541 48 60 12
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <FaEnvelope className="text-white mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    <a href="mailto:CliniqueDrNadjetteBouazza@gmail.com" className="hover:text-white transition duration-300 break-all">
                                        CliniqueDrNadjette<br />Bouazza@gmail.com
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-atoll-900 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Clinique DR N.B. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}