import {
    FaUserMd,
    FaMicroscope,
    FaClinicMedical,
    FaMicrochip,
    FaHandsHelping,
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function CardsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const { t } = useTranslation();

    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    // Simple fade-in animation for cards
    const cardVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <section ref={sectionRef} className="font-poppins py-20 bg-white relative overflow-hidden">
            <div className="mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Carte 1 - Savoir-faire */}
                    <motion.div
                        className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe] cursor-default"
                        variants={cardVariants}
                    >
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaUserMd />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-lg font-bold text-atoll-800 mb-3">
                                {t('Savoir-faire & Expertise Médicale')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                {t(
                                    '"Spécialistes en santé reproductive, notre équipe allie expertise médicale et approche humaine pour votre parcours PMA"',
                                )}
                            </p>
                        </div>
                    </motion.div>

                    {/* Carte 2 - Laboratoires */}
                    <motion.div
                        className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe] cursor-default"
                        variants={cardVariants}
                    >
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaMicroscope />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-lg font-bold text-atoll-800 mb-3">
                                {t('Laboratoires de Qualité')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                {t(
                                    'Plateaux techniques certifiés ISO avec technologies de pointe pour des analyses et procédures PMA selon les normes internationales',
                                )}
                            </p>
                        </div>
                    </motion.div>

                    {/* Carte 3 - Suivi */}
                    <motion.div
                        className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe] cursor-default"
                        variants={cardVariants}
                    >
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaClinicMedical />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-lg font-bold text-atoll-800 mb-3">
                                {t('Suivi Médical Exceptionnel')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                {t(
                                    '"Accompagnement sur mesure avec bilans réguliers et suivi 24h/24 via votre espace patient digital sécurisé"',
                                )}
                            </p>
                        </div>
                    </motion.div>

                    {/* Carte 4 - Technologie */}
                    <motion.div
                        className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe] cursor-default"
                        variants={cardVariants}
                    >
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaMicrochip />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-lg font-bold text-atoll-800 mb-3">
                                {t('Technologie de Pointe')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                {t(
                                    '"Dispositifs médicaux dernier cri pour une prise en charge optimale, combinant précision technologique et sécurité absolue"',
                                )}
                            </p>
                        </div>
                    </motion.div>

                    {/* Carte 5 - Soutien */}
                    <motion.div
                        className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe] lg:col-span-2 xl:col-span-1 cursor-default"
                        variants={cardVariants}
                    >
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaHandsHelping />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-lg font-bold text-atoll-800 mb-3">
                                {t('Accompagnement Bienveillant')}
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                {t(
                                    '"Soutien psychologique et écoute active tout au long de votre parcours, avec transparence totale et disponibilité permanente"',
                                )}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
