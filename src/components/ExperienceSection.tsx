import { FaCheck } from 'react-icons/fa';
import experienceImage from '/src/assets/03.jpg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ExperienceSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    const { t } = useTranslation();

    // Animation variants
    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
        },
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (item: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.5 + item * 0.1, // Staggered delay based on item index
            },
        }),
    };

    return (
        <section ref={sectionRef} className="font-poppins py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <img
                            src={experienceImage}
                            alt={t('Équipe médicale au travail')}
                            className="w-full h-auto object-cover"
                            onError={(e) => {
                                console.error('Experience image failed to load');
                                const imgElement = e.target as HTMLImageElement;
                                imgElement.src = '/fallback-medical-team.jpg';
                            }}
                        />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        className="space-y-6"
                        variants={contentVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.h2 className="text-atoll-800 uppercase tracking-wider font-semibold">
                            {t('NOTRE ADN')}
                        </motion.h2>
                        <motion.h3 className="text-4xl font-bold text-gray-800">
                            {t('Une Référence de Confiance en PMA')}
                        </motion.h3>
                        <motion.p className="text-gray-600 text-lg max-w-2xl">
                            {t(
                                'Notre engagement envers l\'excellence médicale, l\'innovation et le confort de nos patients fait de nous votre destination de choix pour des soins exceptionnels. À la Clinique DR N.B, nous comprenons que chaque parcours de santé est unique, c\'est pourquoi nous nous engageons à offrir des services personnalisés pour répondre à vos besoins spécifiques, assurant ainsi votre bien-être et contribuant à la réalisation de votre objectif de parentalité.',
                            )}
                        </motion.p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/rendez-vous"
                                className="group relative inline-block overflow-hidden px-8 py-3 text-lg font-semibold font-poppins rounded-lg border border-atoll-800 text-atoll-800 bg-transparent transition-all duration-500 ease-in-out"
                            >
                                {/* Background fill effect with scale animation */}
                                <span className="absolute inset-0 bg-atoll-800 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center"></span>
                                {/* Shine effect */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-atoll-700 to-transparent transform -skew-x-12 transition-opacity duration-300 delay-100"></span>
                                {/* Text */}
                                <span className="relative group-hover:text-white transition-colors duration-300 ease-in-out">
                  {t('Programmez une consultation')}
                </span>
                            </Link>
                        </motion.div>

                        <motion.ul className="space-y-4 mt-6">
                            <motion.li className="flex items-center space-x-3" custom={0} variants={listItemVariants}>
                                <FaCheck className="text-atoll-800 flex-shrink-0" />
                                <span className="text-gray-700">{t('Savoir-faire & Expertise Médicale')}</span>
                            </motion.li>
                            <motion.li className="flex items-center space-x-3" custom={1} variants={listItemVariants}>
                                <FaCheck className="text-atoll-800 flex-shrink-0" />
                                <span className="text-gray-700">{t('Laboratoires de Qualité Internationale')}</span>
                            </motion.li>
                            <motion.li className="flex items-center space-x-3" custom={2} variants={listItemVariants}>
                                <FaCheck className="text-atoll-800 flex-shrink-0" />
                                <span className="text-gray-700">{t('Accompagnement Professionnel et Bienveillant')}</span>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
