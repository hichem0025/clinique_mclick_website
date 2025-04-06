import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

export default function Hero() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Enhanced zoom effect (scale from 1 to 1.5 - 50% zoom)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    // More pronounced container movement
    const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

    // Text fades out faster to emphasize the zoom
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Additional parallax effect for depth
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <motion.div
            className="relative h-screen w-full overflow-hidden"
            ref={containerRef}
            style={{ y }}
        >
            {/* Background Image with enhanced zoom effect */}
            <motion.div
                className="absolute inset-0 bg-[url('/src/assets/01.jpg')] bg-cover bg-center brightness-75"
                style={{
                    scale,
                    y: imageY,
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
            />

            {/* Overlay Content */}
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
                style={{ opacity: textOpacity }}
            >
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-poppins tracking-wide leading-tight"
                >
                    {t('Votre destination de confiance en PMA et soins spécialisés')}
                    <br className="hidden sm:block" />
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl max-w-2xl md:max-w-3xl font-poppins tracking-wide leading-relaxed mb-6"
                >
                    {t(
                        'Expertise médicale de classe mondiale alliant normes internationales et technologies de pointe, avec une approche humaine et personnalisée de votre parcours vers la parentalité.',
                    )}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
                >
                    <Link
                        to="/rendez-vous"
                        className="group relative inline-block overflow-hidden px-6 py-3 text-base sm:text-lg font-medium font-poppins rounded-lg border border-white text-white bg-transparent transition-all duration-500 ease-in-out"
                    >
                        <span className="absolute inset-0 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center"></span>
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 transition-opacity duration-300 delay-100"></span>
                        <span className="relative group-hover:text-atoll-950 transition-colors duration-300 ease-in-out">
                            {t('Prendre rendez-vous')}
                        </span>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}