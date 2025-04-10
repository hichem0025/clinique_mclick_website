import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';


interface ContactSectionProps {
    id?: string;
}
// Fix for default marker icon issue in React-Leaflet
const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});


export default function ContactSection({ id = "contact" }: ContactSectionProps) {
    const position: [number, number] = [36.745594, 3.042951];
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const { t } = useTranslation();

    // Animation variants
    const titleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
    };

    const mapVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } }
    };

    // Hide attribution after map loads
    useEffect(() => {
        // Apply CSS to hide attribution
        const style = document.createElement('style');
        style.innerHTML = `
            .leaflet-control-attribution {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className="font-poppins py-16 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <motion.h2
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={titleVariants}
                            className="text-3xl font-bold text-gray-800 mb-6"
                        >
                            {t('Nous Contacter')}
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={contentVariants}
                            className="space-y-6"
                        >
                            <p className="text-gray-600 leading-relaxed">
                                {t('Notre équipe est là pour vous accompagner et répondre à vos interrogations concernant nos services ou pour organiser votre prochaine consultation.')}
                            </p>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <FaMapMarkerAlt className="text-atoll-800 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{t('Adresse')}</h3>
                                        <p className="text-gray-600">
                                            06 Rue Timgad, Seconde Placette<br />
                                            Hydra, Alger
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Numbers */}
                                <div className="flex items-start space-x-4">
                                    <FaPhone className="text-atoll-800 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{t('Téléphone')}</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <a href="tel:0550707066" className="block hover:text-atoll-800">0550 70 70 66</a>
                                            <a href="tel:0541486012" className="block hover:text-atoll-800">0541 48 60 12</a>
                                            <a href="tel:0555732726" className="block hover:text-atoll-800">0555 73 27 26</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email Button */}
                            <a
                                href="mailto:CliniqueDrNadjetteBouazza@gmail.com"
                                className="group relative inline-block overflow-hidden mt-6 px-4 py-2 text-base font-poppins rounded-md border border-atoll-800 text-atoll-800 bg-transparent transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-atoll-600"
                            >
                                {/* Background fill effect with scale animation */}
                                <span className="absolute inset-0 bg-atoll-800 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center"></span>
                                {/* Shine effect */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-atoll-700 to-transparent transform -skew-x-12 transition-opacity duration-300 delay-100"></span>
                                {/* Text */}
                                <span className="relative group-hover:text-white transition-colors duration-300 ease-in-out">
                                    {t('Envoyer un email')}
                                </span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Map Section */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={mapVariants}
                        className="rounded-xl overflow-hidden shadow-lg h-96 relative"
                    >
                        <MapContainer
                            center={position}
                            zoom={14}
                            scrollWheelZoom={false}
                            style={{ height: '100%', width: '100%' }}
                            attributionControl={false} // Disable attribution control
                        >
                            <TileLayer
                                attribution=''
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position} icon={defaultIcon}>
                                <Popup>
                                    <div className="text-sm font-poppins">
                                        <strong>{t('Clinique DR N.B')}</strong><br />
                                        06 Rue Timgad<br />
                                        {t('Seconde Placette, Hydra')}
                                    </div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
