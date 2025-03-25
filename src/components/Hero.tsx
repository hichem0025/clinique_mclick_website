import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/src/assets/01.jpg')] bg-cover bg-center brightness-75"></div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-poppins tracking-wide leading-tight"
                >
                    Votre destination de confiance <br className="hidden sm:block" />en PMA et soins spécialisés
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl max-w-2xl md:max-w-3xl font-poppins tracking-wide leading-relaxed mb-6"
                >
                    Expertise médicale de classe mondiale alliant normes internationales et technologies de pointe,
                    avec une approche humaine et personnalisée de votre parcours vers la parentalité.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
                >
                    <a
                        href="/rendez-vous"
                        className="group relative inline-block overflow-hidden px-6 py-3 text-base sm:text-lg font-medium font-poppins rounded-lg border border-white text-white bg-transparent transition-all duration-500 ease-in-out"
                    >
                        {/* Background fill effect with scale animation */}
                        <span className="absolute inset-0 bg-white transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center"></span>
                        {/* Shine effect */}
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 transition-opacity duration-300 delay-100"></span>
                        {/* Text */}
                        <span className="relative group-hover:text-atoll-950 transition-colors duration-300 ease-in-out">
        Prendre rendez-vous
    </span>
                    </a>



                </motion.div>
            </div>
        </div>
    );
}